"use client";

import { useValentine } from "../ValentineContext";
import { type Product } from "@/data/campaign";

export function ProductDetailModal({
  product,
  onClose,
  onBag,
  onWishlist,
}: {
  product: Product;
  onClose: () => void;
  onBag: () => void;
  onWishlist: () => void;
}) {
  const { money, labelTag } = useValentine();

  return (
    <div className="modal-backdrop modal-backdrop--center" role="presentation">
      <article className="detail-modal" role="dialog" aria-modal="true" aria-labelledby="detail-title">
        <div className="detail-modal__media">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="detail-modal__copy">
          <button className="modal-close" type="button" onClick={onClose} aria-label="Close product detail">
            ×
          </button>
          <p>{product.categoryLabel}</p>
          <h2 id="detail-title">{product.name}</h2>
          <strong>{money(product.price)}</strong>
          <div className="tag-row">
            {[...product.styleTags, ...product.occasionTags].slice(0, 5).map((tag) => (
              <small key={tag}>{labelTag(tag)}</small>
            ))}
          </div>
          <section>
            <h3>Materials</h3>
            <p>{product.material}</p>
          </section>
          <section>
            <h3>Styling</h3>
            <p>{product.styling}</p>
          </section>
          <section>
            <h3>Why it fits</h3>
            <p>{product.reason}</p>
          </section>
          <div className="detail-modal__actions">
            <button type="button" onClick={onWishlist}>
              Save to wishlist
            </button>
            <button type="button" onClick={onBag}>
              Add to bag
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}
