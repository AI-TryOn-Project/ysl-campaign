"use client";

import { useValentine } from "../ValentineContext";
import { type Product } from "@/data/campaign";

export function ProductCard({
  product,
  onBag,
  onWishlist,
  onDetail,
}: {
  product: Product;
  onBag: () => void;
  onWishlist: () => void;
  onDetail: () => void;
}) {
  const { labelTag, money } = useValentine();
  const tags = [...product.styleTags, ...product.occasionTags].slice(0, 3);

  return (
    <article className="product-card">
      <button className="product-image" type="button" onClick={onDetail}>
        <img src={product.image} alt={product.name} loading="lazy" />
      </button>
      <div className="product-meta">
        <p className="product-kicker">{product.categoryLabel}</p>
        <h3 className="product-name">{product.name}</h3>
        <span className="product-price">{money(product.price)}</span>
        <div className="tag-row">
          {tags.map((tag) => (
            <small className="tag" key={tag}>
              {labelTag(tag)}
            </small>
          ))}
        </div>
        <p className="reason">{product.reason}</p>
        <div className="card-actions">
          <button type="button" onClick={onWishlist}>
            Save
          </button>
          <button type="button" onClick={onBag}>
            Add to bag
          </button>
          <button type="button" onClick={onDetail}>
            Details
          </button>
        </div>
      </div>
    </article>
  );
}
