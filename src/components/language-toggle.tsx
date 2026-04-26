"use client";

import { useTranslations } from "@/i18n/use-translations";

export function LanguageToggle() {
  const { locale, setLocale, t } = useTranslations();

  return (
    <button
      type="button"
      aria-label={t.nav.toggleLang}
      title={t.nav.toggleLang}
      onClick={() => setLocale(locale === "uk" ? "en" : "uk")}
      className="relative h-9 w-16 rounded-full glass text-xs font-semibold tracking-wider uppercase transition hover:scale-105 active:scale-95"
    >
      <span
        className={`absolute top-1 bottom-1 w-7 rounded-full bg-gradient-to-br from-indigo-500 to-fuchsia-500 shadow-md transition-all ${
          locale === "uk" ? "left-1" : "left-[calc(100%-2rem)]"
        }`}
        aria-hidden
      />
      <span className="relative z-10 flex h-full items-center justify-between px-2">
        <span className={locale === "uk" ? "text-white" : "opacity-60"}>UA</span>
        <span className={locale === "en" ? "text-white" : "opacity-60"}>EN</span>
      </span>
    </button>
  );
}
