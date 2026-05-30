"use client";
import { useLanguage } from "@/lib/use-language";

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="lang-toggle" role="group" aria-label="Language selection">
      <button
        className={`lang-toggle__btn ${lang === "zh" ? "is-active" : ""}`}
        type="button"
        onClick={() => setLang("zh")}
        aria-pressed={lang === "zh"}
      >
        中文
      </button>
      <span className="lang-toggle__divider" aria-hidden="true" />
      <button
        className={`lang-toggle__btn ${lang === "en" ? "is-active" : ""}`}
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
    </div>
  );
}
