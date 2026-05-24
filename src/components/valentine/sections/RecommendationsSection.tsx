"use client";

import { useValentine } from "../ValentineContext";
import { BlurRevealText } from "../ui/BlurRevealText";
import { ProductCard } from "../ui/ProductCard";

export function RecommendationsSection({ active }: { active: boolean }) {
  const { hasSearched, thinkingCopy, results, quickPrompts, addItem, setSelectedProduct, chooseSuggestion } =
    useValentine();

  return (
    <section
      className={`section recommendations-section snap-section ${active ? "is-active" : ""}`}
      id="recommendations-section"
      aria-label="Recommended products"
    >
      <div className="section-inner">
        <div className="section-head">
          <p className="kicker">{hasSearched ? "Selected for you" : "Qixi starter edit"}</p>
          <BlurRevealText as="h2" text={thinkingCopy} />
        </div>
        <div className="product-grid">
          {results.slice(0, 4).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onBag={() => addItem("bag", product)}
              onWishlist={() => addItem("wishlist", product)}
              onDetail={() => setSelectedProduct(product)}
            />
          ))}
        </div>
        <div className="refinement-section" aria-label="Refine recommendations">
          <p>Quick filters</p>
          {quickPrompts.map((prompt) => (
            <button className="refinement-btn" key={prompt.text} type="button" onClick={() => chooseSuggestion(prompt)}>
              {prompt.text}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
