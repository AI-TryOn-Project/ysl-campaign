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
  signals?: {
    styles?: string[];
    occasions?: string[];
    colors?: string[];
    fit?: string[];
    materials?: string[];
    weather?: string[];
  };
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

function parseProduct(value: unknown): YslChatProduct | null {
  const record = asRecord(value);
  if (!record) return null;

  const id = optionalText(record.id);
  const name = optionalText(record.name);
  const img = optionalText(record.img);
  if (!id || !name || !img) return null;

  const signals = asRecord(record.signals);
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
    signals: signals
      ? {
          styles: stringList(signals.styles),
          occasions: stringList(signals.occasions),
          colors: stringList(signals.colors),
          fit: stringList(signals.fit),
          materials: stringList(signals.materials),
          weather: stringList(signals.weather),
        }
      : undefined,
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

function getLatestSearchPart(messages: MessageLike[]): PartLike | null {
  for (const message of [...messages].reverse()) {
    if (message.role !== "assistant") continue;
    const parts = [...message.parts]
      .reverse()
      .map((part) => asRecord(part) as PartLike | null)
      .filter((part): part is PartLike => Boolean(part));
    const match = parts.find(isSearchToolPart);
    if (match) return match;
  }
  return null;
}

export function extractYslChatSnapshot(messages: MessageLike[], error?: Error): YslChatSnapshot {
  const searchPart = getLatestSearchPart(messages);
  const output = searchPart ? getToolOutput(searchPart) : null;
  const rawItems = Array.isArray(output?.items) ? output.items : [];
  const products = rawItems.map(parseProduct).filter((item): item is YslChatProduct => Boolean(item));
  const state = typeof searchPart?.state === "string" ? searchPart.state : "";
  const toolError = optionalText(searchPart?.errorText);

  return {
    assistantText: getAssistantText(messages),
    products,
    hasSearch: Boolean(searchPart),
    isSearching:
      Boolean(searchPart) &&
      products.length === 0 &&
      (state === "input-streaming" || state === "input-available"),
    errorText: error?.message ?? toolError ?? optionalText(output?.error) ?? null,
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
