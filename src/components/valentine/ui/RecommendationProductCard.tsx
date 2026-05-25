"use client";

import {
  getYslProductReason,
  getYslProductSku,
  getYslProductTags,
  type YslChatProduct,
} from "@/lib/ysl-chat";

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
  const sku = getYslProductSku(product);
  const image = (
    <img
      src={product.img}
      alt={product.name}
      loading="lazy"
      referrerPolicy="no-referrer"
    />
  );

  return (
    <article className="product-card concierge-product-card">
      {product.shopUrl ? (
        <a className="product-image" href={product.shopUrl} target="_blank" rel="noreferrer">
          {image}
        </a>
      ) : (
        <div className="product-image">{image}</div>
      )}
      <div className="product-meta">
        <p className="product-kicker">{product.brand ?? "Selected Product"}</p>
        <p className="product-sku">SKU {sku}</p>
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
          {product.shopUrl ? (
            <a href={product.shopUrl} target="_blank" rel="noreferrer">
              View
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
