"use client";

import { useValentine } from "../ValentineContext";
import { BlurRevealText } from "./BlurRevealText";
import { type Product } from "@/data/campaign";

export function GiftSection({
  id,
  eyebrow,
  title,
  body,
  products,
  tone,
  active,
  onBag,
  onWishlist,
  onDetail,
}: {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  products: Product[];
  tone: "light" | "dark";
  active: boolean;
  onBag: (product: Product) => void;
  onWishlist: (product: Product) => void;
  onDetail: (product: Product) => void;
}) {
  const { money } = useValentine();
  const baseClass = tone === "dark" ? "vl-gifts vl-gifts--him vl-reveal in-view" : "vl-gifts vl-gifts--her vl-reveal in-view";

  return (
    <section
      className={`${baseClass} snap-section ${active ? "is-active" : ""}`}
      id={id}
      aria-label={title}
    >
      <div className="vl-gifts-inner">
        <div className="vl-gifts-head">
          <p className={`vl-eyebrow ${tone === "light" ? "vl-eyebrow--dark" : ""}`}>{eyebrow}</p>
          <BlurRevealText as="h2" className="vl-headline" text={title} />
          <p className="vl-body">{body}</p>
        </div>
        <div className="vl-edit-row">
          {products.map((product) => (
            <article className="vl-edit-card" key={product.id}>
              <button className="vl-edit-card-link" type="button" onClick={() => onDetail(product)}>
                <div className="vl-edit-card-media">
                  <img src={product.image} alt={product.name} loading="lazy" />
                </div>
                <div className="vl-edit-card-copy">
                  <span className="vl-edit-kicker">{product.categoryLabel}</span>
                  <h3>{product.name}</h3>
                  <p className="vl-edit-price">{money(product.price)}</p>
                </div>
              </button>
              <div className="vl-edit-actions">
                <button type="button" onClick={() => onWishlist(product)}>
                  Save
                </button>
                <button type="button" onClick={() => onBag(product)}>
                  Add to bag
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
