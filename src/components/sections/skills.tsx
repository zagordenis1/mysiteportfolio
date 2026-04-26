"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "../section-heading";
import { useTranslations } from "@/i18n/use-translations";
import { skillGroups, type SkillGroupKey } from "@/data/skills";

const groupOrder: SkillGroupKey[] = [
  "frontend",
  "language",
  "tooling",
  "learning",
];

export function Skills() {
  const { t } = useTranslations();
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          eyebrow="02"
          title={t.skills.title}
          subtitle={t.skills.subtitle}
        />

        <div className="grid gap-6 md:grid-cols-2">
          {groupOrder.map((key, groupIdx) => {
            const skills = skillGroups[key];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: groupIdx * 0.05 }}
                className="glass rounded-3xl p-6"
              >
                <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-muted">
                  {t.skills.groups[key]}
                </h3>
                <ul className="mt-5 space-y-4">
                  {skills.map((s) => (
                    <li key={s.name}>
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-sm font-medium">{s.name}</span>
                        {typeof s.level === "number" && (
                          <span className="text-xs text-muted">{s.level}%</span>
                        )}
                      </div>
                      {typeof s.level === "number" && (
                        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-black/5 dark:bg-white/5">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${s.level}%` }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{
                              duration: 0.9,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-pink-500"
                          />
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
