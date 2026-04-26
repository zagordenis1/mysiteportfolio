export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  description: { uk: string; en: string };
  tags: string[];
  year: string;
  accent?: string;
  links?: {
    demo?: string;
    source?: string;
  };
};

export const projects: Project[] = [
  {
    slug: "portfolio",
    title: "Portfolio Website",
    description: {
      uk: "Цей сайт. Next.js 14, TypeScript, Tailwind CSS, Framer Motion, повноцінна підтримка тем і двох мов.",
      en: "This website. Next.js 14, TypeScript, Tailwind CSS, Framer Motion, full theming and bilingual support.",
    },
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    year: "2025",
    accent: "from-indigo-500 to-fuchsia-500",
    links: {
      source: "https://github.com/zagordenis1/mysiteportfolio",
    },
  },
  {
    slug: "task-tracker",
    title: "Task Tracker",
    description: {
      uk: "Мінімалістичний трекер задач з drag-and-drop, локальним збереженням та анімованим UI.",
      en: "Minimal task tracker with drag-and-drop, local persistence and an animated UI.",
    },
    tags: ["React", "TypeScript", "Zustand"],
    year: "2025",
    accent: "from-emerald-500 to-teal-500",
  },
  {
    slug: "algo-visualizer",
    title: "Algorithm Visualizer",
    description: {
      uk: "Візуалізація класичних алгоритмів сортування та пошуку з покроковим керуванням.",
      en: "Visualizer for classic sorting and search algorithms with step-by-step controls.",
    },
    tags: ["React", "Canvas", "Algorithms"],
    year: "2024",
    accent: "from-sky-500 to-cyan-500",
  },
  {
    slug: "study-planner",
    title: "Study Planner",
    description: {
      uk: "Планер для університетського розкладу з нагадуваннями та статистикою продуктивності.",
      en: "University schedule planner with reminders and productivity statistics.",
    },
    tags: ["Next.js", "Prisma", "PostgreSQL"],
    year: "2024",
    accent: "from-rose-500 to-orange-500",
  },
];
