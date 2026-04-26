"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, Github, Mail, Send } from "lucide-react";
import { SectionHeading } from "../section-heading";
import { useTranslations } from "@/i18n/use-translations";
import { contact } from "@/data/contact";

type Entry = {
  key: "email" | "telegram" | "github";
  label: string;
  value: string;
  href: string;
  icon: React.ReactNode;
  copyable?: string;
};

export function Contact() {
  const { t } = useTranslations();
  const [copied, setCopied] = useState<string | null>(null);

  const entries: Entry[] = [
    {
      key: "email",
      label: t.contact.emailLabel,
      value: contact.email,
      href: `mailto:${contact.email}`,
      icon: <Mail className="h-4 w-4" />,
      copyable: contact.email,
    },
    {
      key: "telegram",
      label: t.contact.telegramLabel,
      value: contact.telegram,
      href: contact.telegramUrl,
      icon: <Send className="h-4 w-4" />,
      copyable: contact.telegram,
    },
    {
      key: "github",
      label: t.contact.githubLabel,
      value: `@${contact.github}`,
      href: contact.githubUrl,
      icon: <Github className="h-4 w-4" />,
    },
  ];

  const copy = async (key: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(key);
      setTimeout(() => setCopied(null), 1400);
    } catch {
      /* ignore */
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          eyebrow="04"
          title={t.contact.title}
          subtitle={t.contact.subtitle}
        />

        <ul className="grid gap-4 md:grid-cols-3">
          {entries.map((e, i) => (
            <motion.li
              key={e.key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glass group flex items-center justify-between gap-4 rounded-2xl p-5"
            >
              <a
                href={e.href}
                target={e.key === "email" ? undefined : "_blank"}
                rel="noreferrer"
                className="flex min-w-0 flex-1 items-center gap-3"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-indigo-500/80 to-fuchsia-500/80 text-white">
                  {e.icon}
                </span>
                <span className="min-w-0">
                  <span className="block text-xs uppercase tracking-[0.18em] text-muted">
                    {e.label}
                  </span>
                  <span className="block truncate text-sm font-medium">
                    {e.value}
                  </span>
                </span>
              </a>
              {e.copyable && (
                <button
                  type="button"
                  onClick={() => copy(e.key, e.copyable!)}
                  aria-label={t.contact.copy}
                  className="grid h-9 w-9 place-items-center rounded-full border border-soft text-muted transition hover:text-[rgb(var(--fg))] hover:bg-black/5 dark:hover:bg-white/5"
                >
                  {copied === e.key ? (
                    <Check className="h-4 w-4 text-emerald-500" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              )}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
