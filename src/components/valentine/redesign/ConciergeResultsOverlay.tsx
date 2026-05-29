"use client";

import { useValentine } from "../ValentineContext";

// Surfaces the AI Stylist results as a full-screen editorial overlay.
// NOTE: reads existing chat state only — it does not alter any chat/recommendation logic.
export function ConciergeResultsOverlay() {
  const {
    activeSection,
    hasSearched,
    thinkingCopy,
    results,
    recommendationProducts,
    isSearchingProducts,
    isAwaitingAssistant,
    chatErrorText,
    quickPrompts,
    setSelectedProduct,
    setActiveSection,
    chooseSuggestion,
  } = useValentine();

  const isResultsScene =
    activeSection === "concierge-reply-section" || activeSection === "recommendations-section";

  if (!hasSearched || !isResultsScene) return null;

  const isWorking = isSearchingProducts || isAwaitingAssistant;
  const hasRemote = recommendationProducts.length > 0;

  return (
    <div className="vl-ed-results" role="dialog" aria-modal="true" aria-label="AI Stylist selection" aria-live="polite">
      <header className="vl-ed-collection-bar">
        <p className="vl-ed-collection-eyebrow">AI Stylist</p>
        <h2 className="vl-ed-collection-title">{hasSearched ? "Selected for You" : "Selected for Qixi"}</h2>
        <button
          className="vl-ed-collection-close"
          type="button"
          onClick={() => setActiveSection("highlights")}
          aria-label="Close AI Stylist selection"
        >
          Close
        </button>
      </header>

      <div className="vl-ed-collection-scroll">
        <p className="vl-ed-results-note">{thinkingCopy}</p>

        {isWorking ? (
          <div className="vl-ed-results-loading">
            <video autoPlay muted loop playsInline preload="auto">
              <source src="/loading-ai-stylist.mp4" type="video/mp4" />
            </video>
            <span>Saint Laurent AI is curating your selection</span>
          </div>
        ) : chatErrorText ? (
          <p className="vl-ed-results-error" role="alert">
            {chatErrorText}
          </p>
        ) : hasRemote ? (
          <div className="vl-ed-grid vl-ed-grid--collection">
            {recommendationProducts.map((product) => {
              const card = (
                <>
                  <span className="vl-ed-product-media">
                    <img src={product.img} alt={product.name} loading="lazy" referrerPolicy="no-referrer" />
                  </span>
                  <span className="vl-ed-product-name">{product.name}</span>
                </>
              );
              return (
                <article className="vl-ed-product" key={product.id}>
                  {product.shopUrl ? (
                    <a className="vl-ed-product-link" href={product.shopUrl} target="_blank" rel="noreferrer">
                      {card}
                    </a>
                  ) : (
                    <div className="vl-ed-product-link">{card}</div>
                  )}
                </article>
              );
            })}
          </div>
        ) : (
          <div className="vl-ed-grid vl-ed-grid--collection">
            {results.map((product) => (
              <article className="vl-ed-product" key={product.id}>
                <button
                  className="vl-ed-product-link"
                  type="button"
                  onClick={() => setSelectedProduct(product)}
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
        )}

        <div className="vl-ed-results-filters" aria-label="Refine recommendations">
          {quickPrompts.map((prompt) => (
            <button className="vl-ed-chip" key={prompt.text} type="button" onClick={() => chooseSuggestion(prompt)}>
              {prompt.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
