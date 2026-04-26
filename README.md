# Denys Zagorovsky — Portfolio

Modern, minimalist portfolio site for **Denys Zagorovsky**, a 2nd-year Software Engineering student at **Zhytomyr Polytechnic State University**.

## Tech stack

- **Next.js 14** (App Router) + **React 18** + **TypeScript**
- **Tailwind CSS** for styling with custom design tokens
- **Framer Motion** for animations
- **next-themes** for dark / light mode
- **lucide-react** icons
- **Inter** + **Space Grotesk** via `next/font`
- Custom **i18n** (Ukrainian 🇺🇦 / English 🇬🇧) via React Context

## Features

- Fully responsive (mobile-first)
- Dark & light themes with smooth switching
- UK / EN language toggle with persistence in `localStorage`
- Glassmorphism navbar, gradient typography, grid background, noise glow
- Scroll-triggered animations (Framer Motion `whileInView`)
- Hover-polished project cards with gradient accents
- Copy-to-clipboard for contact details
- SEO: rich `<meta>`, Open Graph, Twitter, `sitemap.xml`, `robots.txt`
- Lazy-loading of fonts & icons; code-splitting handled by Next.js

## Getting started

Requirements: **Node.js ≥ 18.17**.

```bash
# install dependencies
npm install

# run dev server (http://localhost:3000)
npm run dev

# production build
npm run build
npm start

# type-check & lint
npm run typecheck
npm run lint
```

## Adding a new project

All projects live in a single file — `src/data/projects.ts`. Just append a new entry:

```ts
{
  slug: "my-project",
  title: "My Project",
  description: {
    uk: "Короткий опис українською.",
    en: "Short English description.",
  },
  tags: ["Next.js", "TypeScript"],
  year: "2025",
  accent: "from-emerald-500 to-teal-500",
  links: {
    demo: "https://example.com",
    source: "https://github.com/zagordenis1/my-project",
  },
},
```

The site will render the new card automatically with animations, hover effects and responsive layout.

## Editing text & translations

All copy lives in `src/i18n/dictionaries.ts`. Edit the `uk` and `en` objects in parallel to keep both languages in sync.

## Updating skills

Skills are grouped in `src/data/skills.ts` by category (`frontend`, `language`, `tooling`, `learning`). Add a new object `{ name, level }` — `level` is an optional 0–100 number used for the animated progress bar.

## Updating contact details

Edit `src/data/contact.ts` (email, Telegram, GitHub).

## Project structure

```
src/
├─ app/               # Next.js App Router
│  ├─ layout.tsx      # Root layout, fonts, metadata
│  ├─ page.tsx        # Landing page
│  ├─ globals.css     # Tailwind + design tokens
│  ├─ sitemap.ts      # SEO
│  ├─ robots.ts       # SEO
│  └─ icon.svg        # Favicon
├─ components/
│  ├─ navbar.tsx
│  ├─ footer.tsx
│  ├─ providers.tsx
│  ├─ section-heading.tsx
│  ├─ theme-toggle.tsx
│  ├─ language-toggle.tsx
│  └─ sections/
│     ├─ hero.tsx
│     ├─ about.tsx
│     ├─ skills.tsx
│     ├─ projects.tsx
│     └─ contact.tsx
├─ data/              # Source of truth for content
│  ├─ projects.ts
│  ├─ skills.ts
│  └─ contact.ts
└─ i18n/
   ├─ dictionaries.ts
   └─ use-translations.tsx
```

## Deployment

Deploy for free to **[Vercel](https://vercel.com/)**:

1. Push this repo to GitHub.
2. Import the repo in Vercel — no configuration required.
3. Vercel detects Next.js automatically and builds `npm run build`.

Any static host that runs `next build && next start` (or that supports Next.js SSR/SSG) will work — Cloudflare Pages, Netlify, Render, Fly.io, Railway.

## License

MIT © Denys Zagorovsky
