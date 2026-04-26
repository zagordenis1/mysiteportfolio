"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { SectionHeading } from "../section-heading";
import { useTranslations } from "@/i18n/use-translations";
import { projects } from "@/data/projects";
import { contact } from "@/data/contact";

export function Projects() {
  const { t, locale } = useTranslations();
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          eyebrow="03"
          title={t.projects.title}
          subtitle={t.projects.subtitle}
        />

        <ul className="grid gap-6 sm:grid-cols-2">
          {projects.map((p, i) => (
            <motion.li
              key={p.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-3xl border border-soft bg-card p-6 transition hover:border-[rgba(var(--accent),0.4)] hover:-translate-y-0.5"
            >
              <div
                aria-hidden
                className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${p.accent ?? "from-indigo-500 to-fuchsia-500"} opacity-70`}
              />
              <div
                aria-hidden
                className={`pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-gradient-to-br ${p.accent ?? "from-indigo-500 to-fuchsia-500"} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20`}
              />

              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-xl font-semibold tracking-tight">
                  {p.title}
                </h3>
                <span className="text-xs text-muted">{p.year}</span>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-muted">
                {p.description[locale]}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-soft px-2.5 py-1 text-xs text-muted"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              {p.links && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {p.links.demo && (
                    <a
                      href={p.links.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-black/5 px-3 py-1.5 text-xs font-medium transition hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      {t.projects.liveDemo}
                    </a>
                  )}
                  {p.links.source && (
                    <a
                      href={p.links.source}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-black/5 px-3 py-1.5 text-xs font-medium transition hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10"
                    >
                      <Github className="h-3.5 w-3.5" />
                      {t.projects.sourceCode}
                    </a>
                  )}
                </div>
              )}
            </motion.li>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <a
            href={contact.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-semibold transition hover:scale-[1.02]"
          >
            {t.projects.viewAll}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
