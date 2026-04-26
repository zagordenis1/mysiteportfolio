# Як редагувати вміст сайту

Цей файл — коротка шпаргалка: де лежить який текст, як додати проєкт, навичку чи поміняти контакти. **Код знати не обов'язково** — всі змінні поля винесені в окремі файли.

Після будь-якої зміни:

1. Закомітьте файл у `main` (або через PR).
2. GitHub Actions автоматично перезбере сайт і опублікує на https://zagordenis1.github.io/mysiteportfolio/ — за ~1 хвилину.

Перевіряти локально необов'язково, але якщо хочеться:

```bash
npm install
npm run dev    # http://localhost:3000
```

---

## Швидка навігація

| Що хочу змінити | Який файл | Розділ нижче |
|---|---|---|
| Ім'я, посаду, Hero-текст | `src/i18n/dictionaries.ts` | [Тексти і переклади](#тексти-і-переклади) |
| Описи «Про мене», «Освіта», фокус | `src/i18n/dictionaries.ts` | [Тексти і переклади](#тексти-і-переклади) |
| Навички (додати / видалити мову чи фреймворк) | `src/data/skills.ts` | [Навички](#навички) |
| Додати / видалити проєкт | `src/data/projects.ts` | [Проєкти](#проєкти) |
| Email, Telegram, GitHub | `src/data/contact.ts` | [Контакти](#контакти) |
| Заголовок у вкладці браузера, SEO | `src/app/layout.tsx` | [SEO і мета](#seo-і-мета-теги) |

---

## Тексти і переклади

Усі тексти, які бачить відвідувач, лежать у **одному** файлі:

📄 **`src/i18n/dictionaries.ts`**

Структура — два об'єкти, `uk` (українська) і `en` (англійська), з однаковими полями. Щоб змінити текст, просто відредагуйте його в обох мовах.

Приклад — поміняти підзаголовок у секції Hero:

```ts
// src/i18n/dictionaries.ts

uk: {
  hero: {
    // ...
    tagline: "Новий текст українською.",
  },
},
en: {
  hero: {
    // ...
    tagline: "New text in English.",
  },
},
```

⚠️ **Важливо:** якщо додаєте/видаляєте ключ в `uk`, такий самий ключ має бути в `en`. TypeScript вам про це нагадає, якщо запустите `npm run typecheck`.

---

## Навички

📄 **`src/data/skills.ts`**

Є чотири групи: `frontend`, `language`, `tooling`, `learning`. Кожен елемент — об'єкт `{ name, level? }`.

- `name` — назва (рядок).
- `level` — необов'язково, число `0..100`. Якщо задано, показується прогрес-бар. Якщо ні — тег.

### Додати мову програмування

```ts
language: [
  { name: "TypeScript", level: 82 },
  { name: "JavaScript", level: 90 },
  { name: "C#", level: 75 },
  { name: "Java", level: 70 },
  { name: "Rust", level: 40 },   // ← новий рядок
],
```

### Додати інструмент без прогрес-бара

```ts
tooling: [
  { name: "Git & GitHub" },
  { name: "Docker" },   // ← новий рядок
],
```

### Підписи груп («Мови», «Інструменти»…)

Лежать у `src/i18n/dictionaries.ts` → `skills.groups`. Сама група в коді (ключ `language`, `tooling`…) **не** перекладається — перекладається тільки її підпис.

---

## Проєкти

📄 **`src/data/projects.ts`**

Масив об'єктів. Щоб додати новий проєкт — просто допишіть ще один об'єкт.

### Мінімум для нового проєкту

```ts
{
  slug: "my-new-project",                // унікальний id (латиницею, через дефіс)
  title: "Моя Нова Штука",
  description: {
    uk: "Короткий опис українською (1-2 речення).",
    en: "Short description in English (1-2 sentences).",
  },
  tags: ["Next.js", "TypeScript"],       // технології — масив рядків
  year: "2026",
}
```

### Повний приклад з посиланнями

```ts
{
  slug: "awesome-app",
  title: "Awesome App",
  description: {
    uk: "Застосунок для чогось корисного.",
    en: "App that does something useful.",
  },
  tags: ["Next.js", "TypeScript", "PostgreSQL"],
  year: "2026",
  accent: "from-emerald-500 to-teal-500",   // градієнт картки (див. нижче)
  links: {
    demo: "https://my-app.com",              // кнопка «Демо»
    source: "https://github.com/me/repo",    // кнопка «Код»
  },
},
```

### Градієнти (`accent`)

Необов'язкове поле. Якщо не задане — використається індиго-фуксія за замовчуванням. Значення — два Tailwind-класи через `to-`. Приклади:

- `from-indigo-500 to-fuchsia-500` — фіолетово-рожевий
- `from-emerald-500 to-teal-500` — зелено-бірюзовий
- `from-sky-500 to-cyan-500` — синьо-блакитний
- `from-rose-500 to-orange-500` — рожево-помаранчевий
- `from-amber-400 to-orange-500` — жовто-помаранчевий

### Видалити проєкт

Просто видаліть його об'єкт з масиву `projects`.

### Порядок

Проєкти показуються в тому самому порядку, в якому йдуть у масиві. Хочете зверху — ставте першим.

---

## Контакти

📄 **`src/data/contact.ts`**

```ts
export const contact = {
  email: "ran31276z@gmail.com",
  telegram: "@zagordenis",
  telegramUrl: "https://t.me/zagordenis",
  github: "zagordenis1",
  githubUrl: "https://github.com/zagordenis1",
} as const;
```

Якщо міняєте `telegram` — не забудьте синхронно оновити `telegramUrl`. Аналогічно для GitHub.

Щоб додати **новий канал** (наприклад, LinkedIn), треба два кроки:

1. Додати поле в `contact.ts`:
   ```ts
   linkedin: "denys-zahorovskyi",
   linkedinUrl: "https://linkedin.com/in/denys-zahorovskyi",
   ```
2. Відобразити його в `src/components/sections/contact.tsx` поруч з іншими — скопіюйте блок для Telegram і замініть іконку та поля.

---

## SEO і мета-теги

📄 **`src/app/layout.tsx`**

Тут лежить:

- `siteUrl` — базова адреса сайту (змініть, якщо прив'яжете власний домен).
- `title.default` — заголовок у вкладці браузера.
- `description` — опис у результатах Google.
- `keywords` — список ключових слів.
- `openGraph` / `twitter` — як виглядає прев'ю в соцмережах при шерінгу.

📄 **`src/app/sitemap.ts`** і **`src/app/robots.ts`** — генеруються автоматично з `siteUrl`. Якщо змінюєте домен — синхронно оновіть константу в обох файлах.

---

## Освіта, фокус, «Про мене»

Лежать у **`src/i18n/dictionaries.ts`** → розділ `about`:

```ts
about: {
  title: "Про мене",
  lead: "...",                 // велике речення під заголовком
  body: "...",                 // основний абзац
  educationTitle: "Освіта",
  education: {
    school: "...",             // назва університету
    degree: "...",             // ступінь і спеціальність
    period: "...",             // роки навчання
  },
  focusTitle: "Головний фокус",
  focusItems: [                // список пунктів (пункт = один рядок)
    "Fullstack-розробка (React / Next.js + C# / Java)",
    "TypeScript і типобезпечна архітектура",
    // можна додавати / видаляти рядки
  ],
},
```

---

## Тема і мова за замовчуванням

📄 **`src/components/providers.tsx`** — тема (`ThemeProvider` з `next-themes`, за замовчуванням `system`).

📄 **`src/i18n/use-translations.tsx`** — мова. Змінна `defaultLocale` внизу файлу, за замовчуванням `"uk"`. Користувач може перемкнути вручну — вибір зберігається в `localStorage`.

---

## Контрольний список перед комітом

- [ ] Відкрив `dictionaries.ts` / `projects.ts` / `skills.ts` / `contact.ts` — а не компонент у `src/components/` (там — тільки розмітка).
- [ ] Якщо змінив текст — змінив **і українську, і англійську** версії.
- [ ] (опційно) Запустив `npm run typecheck` — TypeScript нічого не лаятиме на пропущених полях.
- [ ] Закомітив у `main` — Actions самі передеплоять.

---

## Помилки і як їх лікувати

| Симптом | Що перевірити |
|---|---|
| Сайт в GitHub Pages не оновився | Подивитись вкладку **Actions** на GitHub — чи workflow пройшов зелений. Зазвичай ~1 хв. |
| `npm run build` падає з «Type error» | Скоріш за все пропустили ключ у `uk` або `en` в `dictionaries.ts`. Повідомлення точно скаже, який. |
| Іконки чи картинки не показуються | Шлях має починатися з `/` і враховувати `basePath` — використовуйте `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/image.png`. Або покладіть файл у `public/`. |
| Домен порожній | `siteUrl` в `layout.tsx`, `sitemap.ts`, `robots.ts` має збігатися з реальною адресою. |

---

Якщо сумніви — просто відкрийте PR на GitHub, зміни будуть в прев'ю, і легко відкотити одним кліком.
