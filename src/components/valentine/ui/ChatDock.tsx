"use client";

import { useEffect, useState } from "react";
import { useValentine, type ChatMode } from "../ValentineContext";

type ConciergeContextKey = "qixi" | "hers" | "his";

// Section-aware placeholder + conversation starters. Each context maps to a content
// zone on the page (gift grid, "Undeniably Hers", "Unmistakably His") and seeds
// realistic questions a customer would naturally ask an AI stylist.
const CONCIERGE_CONTEXTS: Record<
  ConciergeContextKey,
  { placeholder: string; prompts: string[] }
> = {
  qixi: {
    placeholder: "Find the perfect Qixi look.",
    prompts: [
      "What should I get her for Qixi?",
      "What's a classic Saint Laurent gift?",
      "I'm shopping for my girlfriend.",
      "Can you recommend a Qixi gift?",
    ],
  },
  hers: {
    placeholder: "What should I wear for a Qixi dinner date?",
    prompts: [
      "Can you style a romantic red look?",
      "What should I wear for a Qixi dinner date?",
      "Which Saint Laurent bag goes with this look?",
      "Help me put together a complete outfit.",
    ],
  },
  his: {
    placeholder: "What would make a good gift for him?",
    prompts: [
      "What would make a good gift for him?",
      "Can you build a look for him?",
      "What are your most popular men's pieces?",
      "I'm shopping for my boyfriend.",
    ],
  },
};

function modeIcon(type: string) {
  if (type === "search") return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="22" height="22">
      <circle cx="11" cy="11" r="7" /><path d="m16.5 16.5 4 4" strokeLinecap="round" />
    </svg>
  );
  if (type === "sparkle") return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="22" height="22">
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5.64 5.64l2.83 2.83M15.54 15.54l2.83 2.83M5.64 18.36l2.83-2.83M15.54 8.46l2.83-2.83" strokeLinecap="round" />
    </svg>
  );
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="22" height="22">
      <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M3 10h18M8 2v4M16 2v4" strokeLinecap="round" />
    </svg>
  );
}

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
    isCurating,
    isChatBusy,
    thinkingCopy,
    submitSearch,
    chooseSuggestion,
  } = useValentine();

  // Track which editorial zone is centered in the viewport so the dock copy follows
  // the page. Defaults to the "Selected for Qixi" gift context.
  const [conciergeContext, setConciergeContext] = useState<ConciergeContextKey>("qixi");

  useEffect(() => {
    const hers = document.getElementById("qixi-hers");
    const his = document.getElementById("qixi-his");
    if (!hers && !his) return;

    const centered = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) centered.add(entry.target.id);
          else centered.delete(entry.target.id);
        }
        if (centered.has("qixi-his")) setConciergeContext("his");
        else if (centered.has("qixi-hers")) setConciergeContext("hers");
        else setConciergeContext("qixi");
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    if (hers) observer.observe(hers);
    if (his) observer.observe(his);
    return () => observer.disconnect();
  }, []);

  const context = CONCIERGE_CONTEXTS[conciergeContext];

  return (
    <form
      className={`chat-dock ${activeScene.productScene ? "product-scene-dock" : ""}`}
      onSubmit={submitSearch}
      aria-label="Saint Laurent gift concierge"
    >
      <div className={`chat-mode-panel ${modePanelOpen ? "open has-mode" : ""}`} aria-hidden={!modePanelOpen}>
        <button
          className="chat-mode-close"
          type="button"
          aria-label="Close"
          onClick={() => setModePanelOpen(false)}
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
        <div className="chat-mode-header">
          <p className="chat-mode-kicker">AI Stylist</p>
        </div>
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
              <span className="tab-icon">{modeIcon(chatbotConfig[mode].icon)}</span>
              <span className="tab-sublabel">{chatbotConfig[mode].sublabel}</span>
              <span className="tab-label">{chatbotConfig[mode].label}</span>
            </button>
          ))}
        </div>
        <div className="chat-mode-chips">
          <p className="chips-section-title"><span>—</span> Popular Searches <span>—</span></p>
          <div className="chips-grid">
            {chatbotConfig[activeMode].suggestions.map((suggestion) => (
              <button
                className="chat-suggestion-chip"
                key={suggestion.text}
                type="button"
                onClick={() => chooseSuggestion(suggestion)}
                disabled={isChatBusy}
              >
                {suggestion.icon && <span className="chip-icon">{suggestion.icon}</span>}
                {suggestion.text}
              </button>
            ))}
          </div>
        </div>
        <p className="chat-mode-footer">Recommendations Curated by Saint Laurent AI</p>
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
            aria-label="Open recommendation options"
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
              placeholder={context.placeholder}
              disabled={isChatBusy}
            />
            {!inputValue ? (
              <div className="bar-placeholder">
                <span className="chat-scene-copy" key={context.placeholder}>
                  {context.placeholder}
                </span>
              </div>
            ) : null}
          </div>
          <button className="chat-action send-action" type="submit" aria-label="Send recommendation request" disabled={isChatBusy}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 19V5" />
              <path d="m5 12 7-7 7 7" />
            </svg>
          </button>
        </div>
        <div className="chat-sku-strip" aria-label="Conversation starters">
          {context.prompts.map((prompt) => (
            <button
              key={prompt}
              type="button"
              disabled={isChatBusy}
              onClick={() => chooseSuggestion({ text: prompt })}
            >
              {prompt}
            </button>
          ))}
        </div>
      </div>
    </form>
  );
}
