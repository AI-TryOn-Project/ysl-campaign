"use client";

import { useValentine } from "../ValentineContext";
import { Media } from "./Media";
import { type StyleGuide, type Product } from "@/data/campaign";

export function StyleGuideModal({
  guide,
  onClose,
  onDetail,
  onBag,
}: {
  guide: StyleGuide;
  onClose: () => void;
  onDetail: (product: Product) => void;
  onBag: (product: Product) => void;
}) {
  const { byIds, money } = useValentine();
  const products = byIds(guide.productIds);

  return (
    <div className="modal-backdrop modal-backdrop--center" role="presentation">
      <article className="style-modal" role="dialog" aria-modal="true" aria-labelledby="style-guide-title">
        <button className="modal-close" type="button" onClick={onClose} aria-label="Close style guide">
          ×
        </button>
        <div className="style-modal__hero">
          <Media guide={guide} className="style-modal__media" />
          <div>
            <p>Saint Laurent Style Guide</p>
            <h2 id="style-guide-title">{guide.title}</h2>
            <span>{guide.tagline}</span>
          </div>
        </div>
        <div className="style-modal__body">
          <section>
            <h3>Styling Notes</h3>
            <p>{guide.stylingNotes}</p>
          </section>
          <section>
            <h3>Curated Pieces</h3>
            <div className="style-modal__products">
              {products.map((product) => (
                <article key={product.id}>
                  <button type="button" onClick={() => onDetail(product)}>
                    <img src={product.image} alt={product.name} />
                  </button>
                  <div>
                    <p>{product.categoryLabel}</p>
                    <h4>{product.name}</h4>
                    <span>{money(product.price)}</span>
                    <button type="button" onClick={() => onBag(product)}>
                      Add to bag
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}
