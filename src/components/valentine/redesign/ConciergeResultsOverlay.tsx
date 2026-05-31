"use client";

import { useValentine } from "../ValentineContext";
import { getProductDetailUrl } from "@/lib/product-link";
import { useLanguage } from "@/lib/use-language";
import { i18n } from "@/lib/i18n";

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
    setActiveSection,
    chooseSuggestion,
  } = useValentine();

  const { lang } = useLanguage();
  const T = i18n[lang];

  const isResultsScene =
    activeSection === "concierge-reply-section" || activeSection === "recommendations-section";

  if (!hasSearched || !isResultsScene) return null;

  const hasRemote = recommendationProducts.length > 0;
  const isWorking = (isSearchingProducts || isAwaitingAssistant) && !hasRemote;

  return (
    <div className="vl-ed-results" role="dialog" aria-modal="true" aria-label="AI Stylist selection" aria-live="polite">
      <header className="vl-ed-collection-bar">
        <button
          className="vl-ed-collection-back"
          type="button"
          onClick={() => setActiveSection("highlights")}
          aria-label="Back to campaign"
        >
          <span aria-hidden="true">&larr;</span> Back
        </button>
        <h2 className="vl-ed-collection-title">{hasSearched ? (lang === "zh" ? "为你精选" : "Selected for You") : T.selectedForQixi}</h2>
        <span className="vl-ed-collection-spacer" aria-hidden="true" />
      </header>

      <div className="vl-ed-collection-scroll">
        <p className="vl-ed-results-note">{thinkingCopy}</p>

        {isWorking ? (
          <div className="vl-ed-results-loading">
            <img src="/loading-overlay.png" alt="" aria-hidden="true" className="loading-overlay__img" draggable={false} />
          </div>
        ) : chatErrorText ? (
          <p className="vl-ed-results-error" role="alert">
            {chatErrorText}
          </p>
        ) : hasRemote ? (
          <div className="vl-ed-grid vl-ed-grid--collection">
            {recommendationProducts.map((product) => (
              <article className="vl-ed-product" key={product.id}>
                <a
                  className="vl-ed-product-link"
                  href={getProductDetailUrl(product)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${product.name}`}
                >
                  <span className="vl-ed-product-media">
                    <img src={product.img} alt={product.name} loading="lazy" referrerPolicy="no-referrer" />
                  </span>
                  <span className="vl-ed-product-name">{product.name}</span>
                </a>
              </article>
            ))}
          </div>
        ) : (
          <div className="vl-ed-grid vl-ed-grid--collection">
            {results.map((product) => (
              <article className="vl-ed-product" key={product.id}>
                <a
                  className="vl-ed-product-link"
                  href={getProductDetailUrl(product)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${product.name}`}
                >
                  <span className="vl-ed-product-media">
                    <img src={product.image} alt={product.name} loading="lazy" />
                  </span>
                  <span className="vl-ed-product-name">{product.name}</span>
                </a>
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
