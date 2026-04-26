export type Locale = "uk" | "en";

export const locales: Locale[] = ["uk", "en"];

export const dictionaries = {
  uk: {
    nav: {
      home: "Головна",
      about: "Про мене",
      skills: "Навички",
      projects: "Проєкти",
      contact: "Контакти",
      toggleTheme: "Змінити тему",
      toggleLang: "Змінити мову",
    },
    hero: {
      greeting: "Привіт, я",
      name: "Денис Загоровський",
      role: "Студент-програміст · Fullstack Developer",
      tagline:
        "Створюю сучасні вебзастосунки від фронтенду до бекенду — React, Next.js, TypeScript, C# і Java.",
      cta: "Подивитися проєкти",
      ctaSecondary: "Зв’язатися",
      status: "Доступний для стажування та співпраці",
      scroll: "Прокрутіть нижче",
    },
    about: {
      title: "Про мене",
      lead: "Студент 2 курсу спеціальності «Інженерія програмного забезпечення» у Державному університеті «Житомирська політехніка».",
      body: "Люблю чистий код, уважний до деталей UI і продуктивні рішення. Поглиблено вивчаю веброзробку, алгоритми та архітектуру застосунків. Прагну стати сильним інженером, здатним створювати продукти, якими користуються щодня.",
      educationTitle: "Освіта",
      education: {
        school: "Державний університет «Житомирська політехніка»",
        degree: "Бакалавр · Інженерія програмного забезпечення",
        period: "2 курс · на даний момент",
      },
      focusTitle: "Головний фокус",
      focusItems: [
        "Fullstack-розробка (React / Next.js + C# / Java)",
        "TypeScript і типобезпечна архітектура",
        "UI/UX, анімації та доступність",
        "Алгоритми та структури даних",
      ],
    },
    skills: {
      title: "Стек технологій",
      subtitle: "Інструменти, з якими я працюю щодня або активно вивчаю.",
      groups: {
        frontend: "Frontend",
        language: "Мови",
        tooling: "Інструменти",
        learning: "Вивчаю",
      },
    },
    projects: {
      title: "Проєкти",
      subtitle: "Добірка робіт, що показують мій підхід до коду та дизайну.",
      liveDemo: "Демо",
      sourceCode: "Код",
      viewAll: "Всі проєкти на GitHub",
    },
    contact: {
      title: "Зв’язок",
      subtitle: "Відкритий до стажування, pet-проєктів і цікавих ідей.",
      emailLabel: "Електронна пошта",
      telegramLabel: "Telegram",
      githubLabel: "GitHub",
      copy: "Копіювати",
      copied: "Скопійовано",
    },
    footer: {
      built: "Створено з Next.js, Tailwind CSS та Framer Motion",
      rights: "Всі права захищено",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      toggleTheme: "Toggle theme",
      toggleLang: "Toggle language",
    },
    hero: {
      greeting: "Hi, I’m",
      name: "Denys Zahorovskyi",
      role: "Software Engineering Student · Fullstack Developer",
      tagline:
        "I build modern web applications end-to-end — from React and Next.js frontends to C# and Java backends.",
      cta: "View projects",
      ctaSecondary: "Get in touch",
      status: "Open to internships & collaboration",
      scroll: "Scroll to explore",
    },
    about: {
      title: "About me",
      lead: "Second-year Software Engineering student at Zhytomyr Polytechnic State University.",
      body: "I care about clean code, thoughtful UI and performant solutions. Currently going deep into web development, algorithms and application architecture. My goal is to grow into a strong engineer who ships products people use every day.",
      educationTitle: "Education",
      education: {
        school: "Zhytomyr Polytechnic State University",
        degree: "BSc · Software Engineering",
        period: "2nd year · current",
      },
      focusTitle: "Current focus",
      focusItems: [
        "Fullstack development (React / Next.js + C# / Java)",
        "TypeScript and type-safe architecture",
        "UI/UX, animations and accessibility",
        "Algorithms and data structures",
      ],
    },
    skills: {
      title: "Tech stack",
      subtitle: "Tools I use daily or am actively learning.",
      groups: {
        frontend: "Frontend",
        language: "Languages",
        tooling: "Tooling",
        learning: "Learning",
      },
    },
    projects: {
      title: "Projects",
      subtitle: "A selection of work that shows how I approach code and design.",
      liveDemo: "Live",
      sourceCode: "Code",
      viewAll: "See all on GitHub",
    },
    contact: {
      title: "Contact",
      subtitle: "Open to internships, pet projects and interesting ideas.",
      emailLabel: "Email",
      telegramLabel: "Telegram",
      githubLabel: "GitHub",
      copy: "Copy",
      copied: "Copied",
    },
    footer: {
      built: "Built with Next.js, Tailwind CSS and Framer Motion",
      rights: "All rights reserved",
    },
  },
};

export type Dictionary = (typeof dictionaries)["en"];
