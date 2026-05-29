"use client";

import {
  getYslProductReason,
  getYslProductTags,
  type YslChatProduct,
} from "@/lib/ysl-chat";
import { getChatProductChipName } from "@/lib/chat-product-display";
import { getProductDetailUrl } from "@/lib/product-link";

function money(value: number | null | undefined) {
  if (value == null) return "Price upon request";
  return `¥${value.toLocaleString("en-US")}`;
}

function labelTag(tag: string) {
  return tag
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function RecommendationProductCard({ product }: { product: YslChatProduct }) {
  const tags = getYslProductTags(product);
  const detailUrl = getProductDetailUrl(product);

  return (
    <article className="product-card concierge-product-card">
      <a className="product-image" href={detailUrl} target="_blank" rel="noopener noreferrer">
        <img src={product.img} alt={product.name} loading="lazy" referrerPolicy="no-referrer" />
      </a>
      <div className="product-meta">
        <p className="product-kicker">{product.brand ?? getChatProductChipName(product)}</p>
        <h3 className="product-name">{product.name}</h3>
        <span className="product-price">{money(product.price)}</span>
        <div className="tag-row">
          {tags.map((tag) => (
            <small className="tag" key={tag}>
              {labelTag(tag)}
            </small>
          ))}
        </div>
        <p className="reason">{getYslProductReason(product)}</p>
        <div className="card-actions">
          <a href={detailUrl} target="_blank" rel="noopener noreferrer">
            View
          </a>
        </div>
      </div>
    </article>
  );
}
