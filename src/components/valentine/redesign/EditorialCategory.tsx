"use client";

import type { Product } from "@/data/campaign";

// Large image-led editorial category block (e.g. "QIXI, UNDENIABLY HERS").
// `products` is a curated preview sliced from the same collection the portrait
// links to, so the preview row always mirrors the full grid.
export function EditorialCategory({
  id,
  image,
  imageAlt,
  title,
  products,
  onView,
  onDetail,
}: {
  id: string;
  image: string;
  imageAlt: string;
  title: string;
  products: Product[];
  onView: () => void;
  onDetail: (product: Product) => void;
}) {
  return (
    <section className="vl-ed-editorial" id={id} aria-label={title}>
      <button className="vl-ed-editorial-media" type="button" onClick={onView} aria-label={`${title} — view collection`}>
        <img src={image} alt={imageAlt} loading="lazy" />
      </button>
      <div className="vl-ed-editorial-copy">
        <h2 className="vl-ed-editorial-title">{title}</h2>
        <button className="vl-ed-link" type="button" onClick={onView}>
          View
        </button>
      </div>

      {products.length ? (
        <div className="vl-ed-editorial-preview" aria-label={`${title} preview`}>
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
      ) : null}
    </section>
  );
}
