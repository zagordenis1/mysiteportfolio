# Denys Zahorovskyi — Portfolio

Modern, minimalist portfolio site for **Denys Zahorovskyi**, a 2nd-year Software Engineering student at **Zhytomyr Polytechnic State University**.

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

## Editing content

See **[CONTENT.md](./CONTENT.md)** for a non-developer-friendly guide to changing text, adding projects, updating skills, changing contacts, and SEO metadata. The short version:

| Change | File |
|---|---|
| Texts & translations | `src/i18n/dictionaries.ts` |
| Projects list | `src/data/projects.ts` |
| Skills / tech stack | `src/data/skills.ts` |
| Contact details | `src/data/contact.ts` |
| SEO & site metadata | `src/app/layout.tsx` |

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

### Option A — GitHub Pages (configured, zero-config for you)

This repo ships with a GitHub Actions workflow at `.github/workflows/deploy.yml` that builds the site as a fully static export (`next build` → `out/`) and publishes it to **GitHub Pages** on every push to `main`.

One-time setup (only needed once per repo):

1. On GitHub, go to **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **"GitHub Actions"**.
3. Push to `main` (or re-run the latest workflow) — the site deploys to:

   ```
   https://<your-github-username>.github.io/mysiteportfolio/
   ```

The workflow sets `NEXT_PUBLIC_BASE_PATH=/mysiteportfolio` so assets resolve at the subpath, and adds a `.nojekyll` file so GitHub Pages doesn't strip `_next/` folders.

### Option B — Vercel (recommended for custom domains and previews)

1. Push this repo to GitHub (already done).
2. Import it at https://vercel.com/new.
3. Vercel auto-detects Next.js — click **Deploy**.

Preview deployments run on every PR. Custom domains are free.

### Other hosts

Any static host can serve `out/`:

```bash
npm run build    # produces ./out
```

Works on Netlify, Cloudflare Pages, Render, or plain S3/nginx. If you're not deploying to a subpath, unset `NEXT_PUBLIC_BASE_PATH` (it defaults to empty).

## License

MIT © Denys Zahorovskyi
