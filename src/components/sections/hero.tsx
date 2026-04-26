"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { useTranslations } from "@/i18n/use-translations";

export function Hero() {
  const { t } = useTranslations();
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[length:40px_40px] bg-grid-light dark:bg-grid-dark [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]"
      />
      <div aria-hidden className="absolute inset-0 -z-10 noise-bg" />

      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-soft bg-card/60 px-3 py-1 text-xs text-muted backdrop-blur"
        >
          <Sparkles className="h-3.5 w-3.5 text-[rgb(var(--accent))]" />
          {t.hero.status}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          <span className="block text-muted text-lg font-medium sm:text-xl">
            {t.hero.greeting}
          </span>
          <span className="mt-2 block">
            <span className="gradient-text">{t.hero.name}</span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-4 text-base font-medium text-muted sm:text-lg"
        >
          {t.hero.role}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 max-w-xl text-base sm:text-lg"
        >
          {t.hero.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-indigo-500 to-fuchsia-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:scale-[1.02] hover:shadow-xl"
          >
            {t.hero.cta}
            <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-semibold transition hover:scale-[1.02]"
          >
            {t.hero.ctaSecondary}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted"
        >
          <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
          {t.hero.scroll}
        </motion.div>
      </div>
    </section>
  );
}
