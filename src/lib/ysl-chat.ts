import type { UIMessage } from "ai";

export type YslChatProduct = {
  id: string;
  name: string;
  brand?: string;
  price?: number | null;
  img: string;
  shopUrl?: string;
  skuType?: string;
  crawledSkuId?: string;
  category?: string;
  gender?: string;
  summary?: string;
  yslSku?: string;
  yslStyleCode?: string;
  yslMaterialCode?: string;
  yslColorCode?: string;
  yslGroupKey?: string;
  variants?: YslChatProductVariant[];
  signals?: {
    styles?: string[];
    occasions?: string[];
    colors?: string[];
    fit?: string[];
    materials?: string[];
    weather?: string[];
  };
};

export type YslChatProductVariant = {
  id?: string;
  name?: string;
  img?: string;
  shopUrl?: string;
  yslSku?: string;
  yslStyleCode?: string;
  yslMaterialCode?: string;
  yslColorCode?: string;
  signals?: YslChatProduct["signals"];
};

export type YslChatSnapshot = {
  assistantText: string;
  products: YslChatProduct[];
  hasSearch: boolean;
  isSearching: boolean;
  errorText: string | null;
};

type PartLike = {
  type?: unknown;
  toolName?: unknown;
  state?: unknown;
  input?: unknown;
  output?: unknown;
  result?: unknown;
  errorText?: unknown;
  text?: unknown;
};

type MessageLike = {
  role: UIMessage["role"];
  parts: unknown[];
};

function asRecord(value: unknown): Record<string, unknown> | null {
  return value && typeof value === "object" && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : null;
}

function optionalText(value: unknown): string | undefined {
  return typeof value === "string" && value.trim() ? value.trim() : undefined;
}

function optionalNumber(value: unknown): number | null | undefined {
  if (value == null) return value;
  return typeof value === "number" && Number.isFinite(value) ? value : undefined;
}

function stringList(value: unknown): string[] | undefined {
  if (!Array.isArray(value)) return undefined;
  const values = value.filter((item): item is string => typeof item === "string" && item.trim().length > 0);
  return values.length ? values : undefined;
}

function parseSignals(value: unknown): YslChatProduct["signals"] | undefined {
  const signals = asRecord(value);
  return signals
    ? {
        styles: stringList(signals.styles),
        occasions: stringList(signals.occasions),
        colors: stringList(signals.colors),
        fit: stringList(signals.fit),
        materials: stringList(signals.materials),
        weather: stringList(signals.weather),
      }
    : undefined;
}

function firstSentence(text: string): string {
  const match = text.match(/^.*?[。！？.!?](?=\s|$)/);
  return (match?.[0] ?? text).trim();
}

function getToolName(part: PartLike): string {
  if (typeof part.toolName === "string") return part.toolName;
  if (typeof part.type === "string" && part.type.startsWith("tool-")) return part.type.slice(5);
  return "";
}

function getToolOutput(part: PartLike): Record<string, unknown> | null {
  return asRecord(part.output ?? part.result);
}

function isSearchToolPart(part: PartLike): boolean {
  return getToolName(part) === "searchProducts";
}

function isPendingSearchPart(part: PartLike): boolean {
  return part.state === "input-streaming" || part.state === "input-available";
}

export function extractYslSku(value: string | undefined): string | null {
  if (!value) return null;
  const normalized = value.trim();
  const nakedSku = normalized.match(/^[A-Z0-9]{15}$/i);
  if (nakedSku) return nakedSku[0].toUpperCase();

  const matches = [...normalized.matchAll(/([A-Z0-9]{15})(?=\.html(?:[?#].*)?$|[?#]|$)/gi)];
  const lastMatch = matches.at(-1);
  return lastMatch?.[1]?.toUpperCase() ?? null;
}

export function getYslGroupKey(product: Pick<YslChatProduct, "id" | "shopUrl" | "yslGroupKey">): string {
  if (product.yslGroupKey) return product.yslGroupKey;

  const sku = extractYslSku(product.shopUrl);
  if (!sku) return product.id;

  return `${sku.slice(0, 6)}_${sku.slice(6, 11)}`;
}

function parseProduct(value: unknown): YslChatProduct | null {
  const record = asRecord(value);
  if (!record) return null;

  const id = optionalText(record.id);
  const name = optionalText(record.name);
  const img = optionalText(record.img);
  if (!id || !name || !img) return null;

  return {
    id,
    name,
    img,
    brand: optionalText(record.brand),
    price: optionalNumber(record.price),
    shopUrl: optionalText(record.shopUrl),
    skuType: optionalText(record.skuType),
    crawledSkuId: optionalText(record.crawledSkuId),
    category: optionalText(record.category),
    gender: optionalText(record.gender),
    summary: optionalText(record.summary),
    yslSku: optionalText(record.yslSku),
    yslStyleCode: optionalText(record.yslStyleCode),
    yslMaterialCode: optionalText(record.yslMaterialCode),
    yslColorCode: optionalText(record.yslColorCode),
    yslGroupKey: optionalText(record.yslGroupKey),
    variants: Array.isArray(record.variants)
      ? record.variants.map(parseProductVariant).filter((item): item is YslChatProductVariant => Boolean(item))
      : undefined,
    signals: parseSignals(record.signals),
  };
}

function parseProductVariant(value: unknown): YslChatProductVariant | null {
  const record = asRecord(value);
  if (!record) return null;

  return {
    id: optionalText(record.id),
    name: optionalText(record.name),
    img: optionalText(record.img),
    shopUrl: optionalText(record.shopUrl),
    yslSku: optionalText(record.yslSku),
    yslStyleCode: optionalText(record.yslStyleCode),
    yslMaterialCode: optionalText(record.yslMaterialCode),
    yslColorCode: optionalText(record.yslColorCode),
    signals: parseSignals(record.signals),
  };
}

function getAssistantText(messages: MessageLike[]): string {
  for (const message of [...messages].reverse()) {
    if (message.role !== "assistant") continue;
    const segments = message.parts
      .map((part) => asRecord(part) as PartLike | null)
      .filter((part): part is PartLike => Boolean(part))
      .filter((part) => part.type === "text")
      .map((part) => optionalText(part.text))
      .filter((part): part is string => Boolean(part));
    const text = firstSentence(Array.from(new Set(segments)).join(" ").trim());
    if (text) return text;
  }
  return "";
}

function getSearchParts(messages: MessageLike[]): PartLike[] {
  const searchParts: PartLike[] = [];
  for (const message of messages) {
    if (message.role !== "assistant") continue;
    const parts = message.parts
      .map((part) => asRecord(part) as PartLike | null)
      .filter((part): part is PartLike => Boolean(part));
    searchParts.push(...parts.filter(isSearchToolPart));
  }
  return searchParts;
}

function dedupeProducts(products: YslChatProduct[]): YslChatProduct[] {
  const seen = new Set<string>();
  const deduped: YslChatProduct[] = [];

  for (const product of products) {
    const groupKey = getYslGroupKey(product);
    if (seen.has(groupKey)) continue;
    seen.add(groupKey);
    deduped.push(product);
  }

  return deduped;
}

export function extractYslChatSnapshot(messages: MessageLike[], error?: Error): YslChatSnapshot {
  const searchParts = getSearchParts(messages);
  const settledParts = searchParts.filter((part) => Boolean(getToolOutput(part)));
  const rawItems = settledParts.flatMap((part) => {
    const output = getToolOutput(part);
    return Array.isArray(output?.items) ? output.items : [];
  });
  const products = dedupeProducts(
    rawItems.map(parseProduct).filter((item): item is YslChatProduct => Boolean(item))
  );
  const latestSearchPart = searchParts.at(-1);
  const latestSettledOutput = settledParts.length ? getToolOutput(settledParts.at(-1) as PartLike) : null;
  const hasPendingSearch = searchParts.some(isPendingSearchPart);
  const toolError = optionalText(latestSearchPart?.errorText);

  return {
    assistantText: getAssistantText(messages),
    products,
    hasSearch: searchParts.length > 0,
    isSearching: hasPendingSearch && products.length === 0,
    errorText: error?.message ?? toolError ?? optionalText(latestSettledOutput?.error) ?? null,
  };
}

export function getYslProductSku(product: YslChatProduct): string {
  return product.crawledSkuId ?? product.id;
}

export function getYslProductTags(product: YslChatProduct, maxItems = 3): string[] {
  return [
    ...(product.signals?.styles ?? []),
    ...(product.signals?.occasions ?? []),
    ...(product.signals?.colors ?? []),
    product.category,
  ]
    .filter((tag): tag is string => Boolean(tag))
    .slice(0, maxItems);
}

export function getYslProductReason(product: YslChatProduct): string {
  const tags = getYslProductTags(product, 4);
  return product.summary ?? (tags.length ? `Selected for ${tags.join(", ")}.` : "Selected by the Saint Laurent concierge.");
}
