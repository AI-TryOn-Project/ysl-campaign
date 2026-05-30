"use client";

import { type Product } from "@/data/campaign";

// Curated Qixi product grid — image-led, minimal text, no SKUs/IDs exposed.
export function SelectedForQixi({
  products,
  onDetail,
  title,
}: {
  products: Product[];
  onDetail: (product: Product) => void;
  title: string;
}) {
  return (
    <section className="vl-ed-section" id="gifts" aria-label={title}>
      <header className="vl-ed-section-head">
        <h2 className="vl-ed-heading">{title}</h2>
      </header>
      <div className="vl-ed-grid">
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
    </section>
  );
}
