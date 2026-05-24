"use client";

import { useValentine, type ChatMode } from "../ValentineContext";

export function ChatDock() {
  const {
    chatbotConfig,
    activeMode,
    setActiveMode,
    modePanelOpen,
    setModePanelOpen,
    inputValue,
    setInputValue,
    activeScene,
    activeSceneProducts,
    isCurating,
    thinkingCopy,
    submitSearch,
    chooseSuggestion,
    chooseSku,
  } = useValentine();

  return (
    <form
      className={`chat-dock ${activeScene.productScene ? "product-scene-dock" : ""}`}
      onSubmit={submitSearch}
      aria-label="Qixi gift concierge input"
    >
      <div className={`chat-mode-panel ${modePanelOpen ? "open has-mode" : ""}`} aria-hidden={!modePanelOpen}>
        <p className="chat-mode-kicker">Saint Laurent AI Gift Concierge</p>
        <div className="chat-mode-tabs" role="tablist" aria-label="Concierge modes">
          {(Object.keys(chatbotConfig) as ChatMode[]).map((mode) => (
            <button
              key={mode}
              type="button"
              role="tab"
              aria-selected={activeMode === mode}
              className={`chat-mode-tab ${activeMode === mode ? "active" : ""}`}
              onClick={() => setActiveMode(mode)}
            >
              {chatbotConfig[mode].label}
            </button>
          ))}
        </div>
        <div className="chat-mode-chips">
          {chatbotConfig[activeMode].suggestions.map((suggestion) => (
            <button className="chat-suggestion-chip" key={suggestion.text} type="button" onClick={() => chooseSuggestion(suggestion)}>
              {suggestion.text}
            </button>
          ))}
        </div>
      </div>

      <div className={`chat-concierge-bubble ${isCurating ? "visible" : ""}`} aria-hidden={!isCurating}>
        <p className="chat-concierge-label">Saint Laurent Concierge</p>
        <p className="chat-concierge-message">{thinkingCopy}</p>
      </div>

      <div className={`chat-bar chat-bar-fixed ${activeScene.productScene ? "product-scene" : ""}`}>
        <div className="chat-eyebrow">
          <span className="chat-scene-copy" key={activeScene.eyebrow}>
            {activeScene.eyebrow}
          </span>
        </div>
        <div className="chat-main">
          <button
            className="chat-action"
            type="button"
            aria-label="Open concierge modes"
            aria-expanded={modePanelOpen}
            onClick={() => setModePanelOpen((open: boolean) => !open)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </button>
          <div className="bar-input-wrap">
            <input
              id="chat-input"
              className="chat-input"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              placeholder={activeScene.placeholder}
            />
            {!inputValue ? (
              <div className="bar-placeholder">
                <span className="chat-scene-copy" key={activeScene.placeholder}>
                  {activeScene.placeholder}
                </span>
              </div>
            ) : null}
          </div>
          <button className="chat-action send-action" type="submit" aria-label="Send recommendation request">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 19V5" />
              <path d="m5 12 7-7 7 7" />
            </svg>
          </button>
        </div>
        <div className="chat-sku-strip" aria-label="Visible page SKUs">
          <span>SKU</span>
          {activeSceneProducts.slice(0, 4).map((product) => (
            <button key={product.id} type="button" title={product.name} onClick={() => chooseSku(product)}>
              {product.sku}
            </button>
          ))}
        </div>
      </div>
    </form>
  );
}
