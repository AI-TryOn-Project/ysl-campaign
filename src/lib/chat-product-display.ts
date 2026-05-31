import type { Product } from "@/data/campaign";
import { type YslChatProduct } from "./ysl-chat";

const DEFAULT_CHIP_LABEL_MAX = 44;

export function getChatProductSku(product: Product | YslChatProduct): string {
  if ("sku" in product && product.sku) return product.sku;
  if ("crawledSkuId" in product && product.crawledSkuId) return product.crawledSkuId;
  return product.id;
}

export function getChatProductDisplayName(
  product: Product | YslChatProduct,
  maxLength = DEFAULT_CHIP_LABEL_MAX,
): string {
  const name = product.name.trim();
  if (!name) return "Selected piece";
  if (name.length <= maxLength) return name;

  const sliceLength = Math.max(12, maxLength - 1);
  return `${name.slice(0, sliceLength).trimEnd()}…`;
}

export function getChatProductChipTooltip(product: Product | YslChatProduct): string {
  const sku = getChatProductSku(product);
  return `${product.name} · SKU ${sku}`;
}

// Leading words that carry no model identity (collection/brand/gender prefixes).
const CHIP_LEADING_FILLERS = new Set([
  "classic",
  "the",
  "new",
  "monogram",
  "summer",
  "winter",
  "women's",
  "womens",
  "men's",
  "mens",
  "saint",
  "laurent",
  "rive",
  "gauche",
]);

// Size / material descriptors that follow the model name and should be dropped.
const CHIP_DESCRIPTORS = new Set([
  "small",
  "medium",
  "large",
  "mini",
  "nano",
  "micro",
  "baby",
  "supple",
  "soft",
  "quilted",
  "grained",
  "smooth",
  "vintage",
  "thin",
  "matte",
  "shiny",
  "textured",
  "heeled",
]);

/**
 * Distills a long catalog name into a short editorial chip label.
 * e.g. "LE 5 À 7 supple small in grained leather" -> "LE 5 À 7"
 *      "Classic CITY backpack in black leather"   -> "CITY BACKPACK"
 *      "ICARINO in quilted nappa"                  -> "ICARINO"
 */
export function getChatProductChipName(product: Product | YslChatProduct): string {
  let name = product.name?.trim() ?? "";
  if (!name) return "";

  const inIndex = name.toLowerCase().indexOf(" in ");
  if (inIndex > 0) name = name.slice(0, inIndex);

  let tokens = name.split(/\s+/).filter(Boolean);

  while (
    tokens.length > 1 &&
    (CHIP_LEADING_FILLERS.has(tokens[0].toLowerCase()) || /^\d{2,4}$/.test(tokens[0]))
  ) {
    tokens = tokens.slice(1);
  }

  const kept: string[] = [];
  for (const token of tokens) {
    if (CHIP_DESCRIPTORS.has(token.toLowerCase())) break;
    kept.push(token);
  }

  const result = (kept.length ? kept : tokens).join(" ").trim();
  return result.toUpperCase();
}
