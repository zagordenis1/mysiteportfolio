"use client";

import { useTranslations } from "@/i18n/use-translations";

export function Footer() {
  const { t } = useTranslations();
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-soft py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-xs text-muted sm:flex-row">
        <p>
          © {year} Denys Zagorovsky · {t.footer.rights}
        </p>
        <p>{t.footer.built}</p>
      </div>
    </footer>
  );
}
