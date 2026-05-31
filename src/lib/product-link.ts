import { PRODUCTS, type Product } from "@/data/campaign";
import type { YslChatProduct } from "./ysl-chat";

/**
 * Single source of truth for "where does clicking a product go".
 *
 * Priority 1: an official Saint Laurent product URL already stored in the data
 *             (`Product.detailPath` / `YslChatProduct.shopUrl`).
 * Priority 2: a locally-rendered product detail page at `/products/[slug]`.
 */

export function slugifyProductName(value: string): string {
  const slug = value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return slug || "product";
}

function isHttpUrl(value?: string | null): value is string {
  return Boolean(value && /^https?:\/\//i.test(value));
}

/** Resolve a chatbot product back to a catalog product via SKU/id. */
export function resolveInventoryProduct(product: YslChatProduct): Product | undefined {
  const candidates = [product.crawledSkuId, product.id]
    .filter((value): value is string => Boolean(value))
    .map((value) => value.toLowerCase());
  if (!candidates.length) return undefined;

  return PRODUCTS.find((entry) => {
    const sku = entry.sku.toLowerCase();
    const id = entry.id.toLowerCase();
    return candidates.some((candidate) => candidate === sku || candidate === id || id.includes(candidate));
  });
}

export function findProductBySlug(slug: string): Product | undefined {
  const target = slug.toLowerCase();
  return PRODUCTS.find(
    (entry) =>
      slugifyProductName(entry.name) === target ||
      entry.sku.toLowerCase() === target ||
      entry.id.toLowerCase() === target,
  );
}

export function getProductDetailUrl(product: Product | YslChatProduct): string {
  // Priority 1 — catalog product carries an official URL in detailPath.
  if ("detailPath" in product && product.detailPath) return product.detailPath;

  // Chatbot product — prefer its official shop URL, otherwise map back to catalog.
  if ("shopUrl" in product) {
    if (isHttpUrl(product.shopUrl)) return product.shopUrl;
    const match = resolveInventoryProduct(product);
    if (match?.detailPath) return match.detailPath;
    if (match) return `/products/${slugifyProductName(match.name)}`;
  }

  // Priority 2 — local detail page built from product metadata.
  return `/products/${slugifyProductName(product.name ?? product.id)}`;
}

/** Open a product's detail experience in a new browser tab. */
export function openProductDetail(product: Product | YslChatProduct): void {
  if (typeof window === "undefined") return;
  window.open(getProductDetailUrl(product), "_blank", "noopener,noreferrer");
}
