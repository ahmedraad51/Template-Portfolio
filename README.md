# Bilingual Portfolio Template

**View the portfolio:** [portifilioforagency.web.app](https://portifilioforagency.web.app/)

A bilingual (Arabic / English) single-page portfolio / agency site built with
Vite, React 19 and Tailwind CSS v4. Arabic is the default language and the
layout is fully RTL-aware.

Every piece of content is a placeholder — nothing here belongs to a real
business. Work through the checklist below to make it yours.

## Tech Stack

- **React 19** with the Context API holding the language state (no router, no
  state library)
- **Vite 8** for the dev server and production builds, via `@vitejs/plugin-react`
- **Tailwind CSS v4**, configured CSS-first through `@theme` in `src/index.css`
- **PostCSS** with Autoprefixer
- **lucide-react** for icons
- **ESLint 10** on the flat config, with the react-hooks and react-refresh plugins
- Plain JavaScript (ESM, `.jsx`), no TypeScript
- Cairo and Inter loaded from Google Fonts in `index.html`
- Ships as a static build, set up for Vercel through `vercel.json`

## Getting started

```bash
npm install
npm run dev      # dev server
npm run build    # production build into dist/
npm run lint     # eslint
```

> On Windows PowerShell, `npm` may be blocked by the execution policy. Either use
> `npm.cmd run dev`, or run `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned` once.

## Make it yours

1. **Contact details** — `src/data/company.js`: name, phone, WhatsApp, email.
   Every section reads from this one file.
2. **Copy** — `src/context/LanguageContext.jsx`: all Arabic and English strings,
   one object per language mirroring key for key.
3. **Web projects** — `src/data/projects.js`: replace the three sample entries.
4. **Design work** — `src/data/designs.js` + images in `src/assets/designs/`
   (see below). Empty by default, so the design block shows an empty state.
5. **Team** — `src/data/team.js`: names, roles and optional portraits.
6. **Logo & favicon** — `src/assets/logo.svg` and `public/favicon.svg` are
   placeholder marks; drop in your own square SVG.
7. **Page title & meta description** — `index.html`.
8. **Colours** — `src/index.css` under `@theme` (see below).
9. **Stock photos** — the hero (`src/components/Hero.jsx`) and the three service
   cards (`src/components/Services.jsx`) point at Unsplash URLs. Swap them for
   your own images, ideally imported from `src/assets/`.

Any of the three lists (`webProjects`, design `projects`, `teamMembers`) can be
left empty: the projects and design blocks fall back to an empty-state line, and
the team section hides itself.

## Brand

Colours are defined once in `src/index.css` under `@theme`. Tailwind v4 reads its
theme from CSS, **not** from `tailwind.config.js` (that file is kept only as a
reference — update both if you change a colour).

| Token | Value | Used for |
|---|---|---|
| `primary` | `#6946AB` | buttons, links, accents |
| `primary-dark` | `#5C3A9A` | hover states |
| `primary-light` | `#8B6DC7` | accents on dark backgrounds |
| `primary-soft` | `#F4F0FB` | light section backgrounds |
| `dark` | `#1A1030` | dark sections, headings |
| `body` | `#5F5C73` | body copy |

Font: **Cairo** (Arabic + Latin), with Inter as fallback — loaded in `index.html`.

## Typography system

Every section pulls from one fluid `clamp()`-based scale defined in
`src/index.css` inside `@layer components` — never hardcode `text-sm` /
`text-[15px]` in a component.

| Class | Purpose |
|---|---|
| `.display-title` | page headline (h1) |
| `.section-title` | section headline (h2) |
| `.card-title` | card / sub headline (h3) |
| `.section-lead` | intro paragraph under a heading |
| `.body-text` | normal paragraph |
| `.meta-text` | secondary text |
| `.eyebrow` | small badge above a section heading |
| `.btn` + `.btn-primary` / `.btn-outline` / `.btn-white` | buttons |
| `.section` | consistent vertical section padding |

Wrap a dark-background block in `.on-dark` to flip those classes to light text.
Keep `.on-dark` off any white card nested inside a dark section.

## Structure

```
src/
├── assets/
│   ├── designs/       # optimised webp for the design sets (empty by default)
│   └── logo.svg       # placeholder mark
├── components/
│   ├── Navbar.jsx         # fixed header + mobile menu
│   ├── Hero.jsx           # headline + CTA + phone
│   ├── About.jsx          # about + contact icons
│   ├── Services.jsx       # 3 services (dark background)
│   ├── Portfolio.jsx      # web projects + design sets + filters
│   ├── Lightbox.jsx       # full-screen viewer for design sets
│   ├── Process.jsx        # 4-step how-we-work (dark background)
│   ├── StartProject.jsx   # CTA card, sends the idea to WhatsApp
│   ├── Team.jsx           # team cards, initials until photos are added
│   ├── Contact.jsx        # contact details + working form
│   ├── Footer.jsx
│   └── WhatsAppButton.jsx # floating button
├── context/
│   ├── LanguageContext.jsx # all ar/en copy + provider
│   ├── language-context.js # the context object
│   └── useLanguage.js      # the hook
├── data/
│   ├── company.js   # phone, email, WhatsApp — single source of truth
│   ├── projects.js  # web projects
│   ├── designs.js   # design work, grouped per client
│   └── team.js      # team members
├── App.jsx
├── main.jsx
└── index.css        # theme + typography system
```

## Adding work

**A website** — add an entry to `src/data/projects.js`. Set `status` to `"live"`
for published client work or `"concept"` for self-initiated builds; the badge
follows. Without a `shot` (screenshot import) the card renders a uniform browser
mockup using the `brand` gradient, so the grid stays tidy either way.

**A design** — export at 1080×1350, then produce two webp files in
`src/assets/designs/`: `<id>.webp` (full, for the lightbox) and
`<id>-thumb.webp` (grid). Add the item to a project's `items` array in
`src/data/designs.js`, or add a whole new project object for a new client — the
commented example in that file shows the shape.

**A team member** — add an entry to `src/data/team.js`. Import a portrait and set
`img` to show a photo; leave it `null` and the card shows the member's initials.

## Contact form

The contact form and the "start a project" box don't need a backend — both open
WhatsApp (or the visitor's mail client) with the message pre-filled, using the
number in `src/data/company.js`.

## Deploying

The build is a static site — `npm run build` outputs `dist/`.

- **Vercel / Netlify:** connect the repo; Vite is auto-detected. `vercel.json`
  adds the SPA fallback and long-lived caching for hashed assets.
- **Own VPS:** serve `dist/` with nginx/caddy and point an A record at the box.

## About

Designed and built by Ahmed Raad.
