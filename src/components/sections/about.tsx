"use client";

import { motion } from "framer-motion";
import { GraduationCap, Target } from "lucide-react";
import { SectionHeading } from "../section-heading";
import { useTranslations } from "@/i18n/use-translations";

export function About() {
  const { t } = useTranslations();
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading eyebrow="01" title={t.about.title} subtitle={t.about.lead} />

        <div className="grid gap-6 md:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="glass md:col-span-3 rounded-3xl p-7"
          >
            <p className="text-base leading-relaxed sm:text-lg">{t.about.body}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass md:col-span-2 rounded-3xl p-7"
          >
            <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted">
              <GraduationCap className="h-4 w-4" />
              {t.about.educationTitle}
            </div>
            <p className="font-display text-lg font-semibold">
              {t.about.education.school}
            </p>
            <p className="mt-1 text-sm text-muted">{t.about.education.degree}</p>
            <p className="mt-1 text-sm text-muted">{t.about.education.period}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="glass md:col-span-5 rounded-3xl p-7"
          >
            <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted">
              <Target className="h-4 w-4" />
              {t.about.focusTitle}
            </div>
            <ul className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
              {t.about.focusItems.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-soft px-4 py-3 text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
