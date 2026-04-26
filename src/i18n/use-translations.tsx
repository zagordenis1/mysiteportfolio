"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { dictionaries, type Dictionary, type Locale } from "./dictionaries";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dictionary;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "portfolio-locale";

function detectInitialLocale(): Locale {
  if (typeof window === "undefined") return "uk";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "uk" || stored === "en") return stored;
  const nav = window.navigator.language.toLowerCase();
  return nav.startsWith("uk") ? "uk" : "en";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("uk");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setLocaleState(detectInitialLocale());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale === "uk" ? "uk" : "en";
  }, [locale, hydrated]);

  const setLocale = useCallback((next: Locale) => setLocaleState(next), []);

  const value = useMemo<LanguageContextValue>(
    () => ({ locale, setLocale, t: dictionaries[locale] }),
    [locale, setLocale],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslations() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useTranslations must be used inside LanguageProvider");
  }
  return ctx;
}
