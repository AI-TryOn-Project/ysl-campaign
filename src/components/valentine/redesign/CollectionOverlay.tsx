"use client";

import { useEffect } from "react";
import { type Product } from "@/data/campaign";

// Full-screen collection experience opened from an editorial category block.
export function CollectionOverlay({
  title,
  eyebrow,
  products,
  onClose,
  onDetail,
}: {
  title: string;
  eyebrow: string;
  products: Product[];
  onClose: () => void;
  onDetail: (product: Product) => void;
}) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="vl-ed-collection" role="dialog" aria-modal="true" aria-label={title}>
      <header className="vl-ed-collection-bar">
        <p className="vl-ed-collection-eyebrow">{eyebrow}</p>
        <h2 className="vl-ed-collection-title">{title}</h2>
        <button className="vl-ed-collection-close" type="button" onClick={onClose} aria-label="Close collection">
          Close
        </button>
      </header>
      <div className="vl-ed-collection-scroll">
        <div className="vl-ed-grid vl-ed-grid--collection">
          {products.map((product) => (
            <article className="vl-ed-product" key={product.id}>
              <button
                className="vl-ed-product-link"
                type="button"
                onClick={() => onDetail(product)}
                aria-label={`View ${product.name}`}
              >
                <span className="vl-ed-product-media">
                  <img src={product.image} alt={product.name} loading="lazy" />
                </span>
                <span className="vl-ed-product-name">{product.name}</span>
              </button>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
