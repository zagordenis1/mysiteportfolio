# Денис Загоровський — Портфоліо

Сучасний мінімалістичний сайт-портфоліо **Дениса Загоровського** — студента 2 курсу спеціальності «Інженерія програмного забезпечення» **Державного університету «Житомирська політехніка»**.

## Технологічний стек

- **Next.js 14** (App Router) + **React 18** + **TypeScript**
- **Tailwind CSS** для стилізації з власними design-токенами
- **Framer Motion** для анімацій
- **next-themes** для темної / світлої теми
- Іконки **lucide-react**
- Шрифти **Inter** + **Space Grotesk** через `next/font`
- Власна **i18n**-система (українська 🇺🇦 / англійська 🇬🇧) на React Context

## Можливості

- Повністю адаптивний дизайн (mobile-first)
- Темна та світла теми з плавним перемиканням
- Перемикач мов UK / EN із збереженням вибору в `localStorage`
- Glassmorphism-навбар, градієнтна типографіка, grid-фон, noise glow
- Анімації при скролі (Framer Motion `whileInView`)
- Картки проєктів з відшліфованими hover-ефектами та градієнтними акцентами
- Копіювання контактних даних у буфер обміну
- SEO: повний `<meta>`, Open Graph, Twitter, `sitemap.xml`, `robots.txt`
- Lazy-loading шрифтів та іконок; code-splitting забезпечує Next.js

## Як запустити

Вимоги: **Node.js ≥ 18.17**.

```bash
# встановити залежності
npm install

# dev-сервер (http://localhost:3000)
npm run dev

# продакшн-збірка
npm run build
npm start

# перевірка типів та лінтер
npm run typecheck
npm run lint
```

## Редагування контенту

Детальний гайд для нерозробників — у файлі **[CONTENT.md](./CONTENT.md)** (зміна текстів, додавання проєктів, оновлення скілів, контактів та SEO-метаданих). Коротка версія:

| Що міняти | Файл |
|---|---|
| Тексти та переклади | `src/i18n/dictionaries.ts` |
| Список проєктів | `src/data/projects.ts` |
| Скіли / технології | `src/data/skills.ts` |
| Контактні дані | `src/data/contact.ts` |
| SEO та метадані сайту | `src/app/layout.tsx` |

## Як додати новий проєкт

Усі проєкти живуть в одному файлі — `src/data/projects.ts`. Достатньо додати новий запис:

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

Сайт автоматично відрендерить нову картку з анімаціями, hover-ефектами та адаптивним макетом.

## Редагування текстів та перекладів

Усі тексти знаходяться в `src/i18n/dictionaries.ts`. Редагуйте обʼєкти `uk` та `en` паралельно, щоб обидві мови залишались синхронізованими.

## Оновлення скілів

Скіли згруповані в `src/data/skills.ts` за категоріями (`frontend`, `language`, `tooling`, `learning`). Додайте новий об'єкт `{ name, level }` — `level` це опціональне число 0–100, яке використовується для анімованого прогрес-бару.

## Оновлення контактів

Редагуйте `src/data/contact.ts` (email, Telegram, GitHub).

## Структура проєкту

```
src/
├─ app/               # Next.js App Router
│  ├─ layout.tsx      # Кореневий layout, шрифти, метадані
│  ├─ page.tsx        # Лендінг
│  ├─ globals.css     # Tailwind + design-токени
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
├─ data/              # Джерело правди для контенту
│  ├─ projects.ts
│  ├─ skills.ts
│  └─ contact.ts
└─ i18n/
   ├─ dictionaries.ts
   └─ use-translations.tsx
```

## Деплой

### Варіант A — GitHub Pages (вже налаштовано, нічого додатково робити не треба)

Репозиторій містить GitHub Actions workflow `.github/workflows/deploy.yml`, який збирає сайт як повністю статичний експорт (`next build` → `out/`) і публікує його на **GitHub Pages** при кожному пуші в `main`.

Одноразове налаштування (потрібно зробити один раз для репозиторію):

1. На GitHub перейдіть у **Settings → Pages**.
2. У розділі **Build and deployment → Source** виберіть **«GitHub Actions»**.
3. Запуште коміт у `main` (або перезапустіть останній workflow) — сайт буде доступний за адресою:

   ```
   https://<ваш-github-username>.github.io/mysiteportfolio/
   ```

Workflow задає змінну `NEXT_PUBLIC_BASE_PATH=/mysiteportfolio`, щоб ассети резолвились на підшляху, і додає файл `.nojekyll`, щоб GitHub Pages не вирізав теки `_next/`.

### Варіант B — Vercel (рекомендується для власних доменів та preview-деплоїв)

1. Запуште репозиторій на GitHub (вже зроблено).
2. Імпортуйте його на https://vercel.com/new.
3. Vercel сам визначить Next.js — натисніть **Deploy**.

Preview-деплої запускаються для кожного PR. Власні домени — безкоштовно.

### Інші хостинги

Будь-який статичний хостинг здатен віддавати теку `out/`:

```bash
npm run build    # створює ./out
```

Працює на Netlify, Cloudflare Pages, Render або звичайному S3/nginx. Якщо ви деплоїте не на підшлях — приберіть `NEXT_PUBLIC_BASE_PATH` (за замовчуванням він порожній).

## Ліцензія

MIT © Denys Zahorovskyi
