"use client";

import { useValentine } from "../ValentineContext";
import { BlurRevealText } from "../ui/BlurRevealText";
import { ProductCard } from "../ui/ProductCard";
import { RecommendationProductCard } from "../ui/RecommendationProductCard";

function ProductSkeletonGrid() {
  return (
    <div className="product-grid" aria-label="Loading product recommendations">
      {Array.from({ length: 4 }).map((_, index) => (
        <article className="product-card product-card--skeleton" key={index}>
          <div className="product-image" />
          <div className="product-meta">
            <span />
            <strong />
            <em />
            <p />
          </div>
        </article>
      ))}
    </div>
  );
}

export function RecommendationsSection({ active }: { active: boolean }) {
  const {
    hasSearched,
    hasProductSearch,
    thinkingCopy,
    results,
    recommendationProducts,
    isSearchingProducts,
    chatErrorText,
    quickPrompts,
    addItem,
    setSelectedProduct,
    chooseSuggestion,
  } = useValentine();
  const hasRemoteProducts = recommendationProducts.length > 0;
  const hasEmptyRemoteResult = hasSearched && hasProductSearch && !hasRemoteProducts && !isSearchingProducts && !chatErrorText;

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
        {isSearchingProducts ? (
          <ProductSkeletonGrid />
        ) : chatErrorText ? (
          <div className="recommendation-error" role="alert">
            {chatErrorText}
          </div>
        ) : hasEmptyRemoteResult ? (
          <div className="recommendation-error" role="status">
            searchProducts returned no matching items.
          </div>
        ) : hasRemoteProducts ? (
          <div className="product-grid">
            {recommendationProducts.slice(0, 4).map((product) => (
              <RecommendationProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
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
        )}
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
