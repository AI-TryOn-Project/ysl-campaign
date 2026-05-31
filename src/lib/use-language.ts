"use client";
import { useEffect, useState, useCallback } from "react";

export type Lang = "en" | "zh";

export function useLanguage() {
  const [lang, setLangState] = useState<Lang>("zh");

  useEffect(() => {
    const stored = localStorage.getItem("ysl-lang") as Lang | null;
    if (stored === "en" || stored === "zh") setLangState(stored);
  }, []);

  useEffect(() => {
    const handler = (e: Event) => setLangState((e as CustomEvent<Lang>).detail);
    window.addEventListener("ysl-lang-change", handler);
    return () => window.removeEventListener("ysl-lang-change", handler);
  }, []);

  const setLang = useCallback((l: Lang) => {
    localStorage.setItem("ysl-lang", l);
    setLangState(l);
    window.dispatchEvent(new CustomEvent<Lang>("ysl-lang-change", { detail: l }));
  }, []);

  return { lang, setLang };
}
