<div align="center">

# ⚡ AS Biz Dev — V2

**A full redesign of [asbizdev.com](https://asbizdev.com) — rebuilt from scratch in React, and taught to speak English.**

<sub>France · Africa · Middle East — business development, in two languages.</sub>

![React](https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8.1-646CFF?style=flat-square&logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.43-FF0055?style=flat-square&logo=framer&logoColor=white)
![i18n](https://img.shields.io/badge/i18n-FR_%2F_EN-1D3D6D?style=flat-square)
![Bundle](https://img.shields.io/badge/gzipped-141_kB-FF6A00?style=flat-square)

</div>

---

## 🎯 What this is

The original site is WordPress, French-only, and its language switcher is a lie — `/en/` quietly serves French. This is a ground-up React rebuild with a new design language **and a bilingual engine that actually works**.

Every word of French is lifted verbatim from the origin. Every word of English is new.

| | Origin | This build |
|---|---|---|
| Stack | WordPress | React 19 + Vite |
| Languages | FR (EN switcher is decorative) | 🇫🇷 FR + 🇬🇧 EN, **334 translated strings** |
| Team page | Auto-scrolling marquee, bios on hover | Responsive grid, everything visible |
| Contact form | Basic POST | Endpoint-agnostic + honeypot + mailto fallback |
| Content | Hardcoded in templates | Centralised dictionaries, zero copy in components |

---

## 🚀 Quick start

```bash
npm install
npm run dev          # → http://localhost:3000
```

That's it. No backend required to run it.

```bash
npm run build        # production bundle → dist/
npm run preview      # serve the built bundle
npm run check:i18n   # fail if FR and EN dictionaries drift apart
```

---

## 🔧 How to modify the site

**The rule that explains everything: components hold the _layout_, `src/i18n/content/` holds the _words_.** No sentence is ever written inside a component. To change text you never open a `.jsx` file.

### Where each page's text lives

| Page | Text file | Component |
|---|---|---|
| Home | `content/home.js` | `pages/Home.jsx` |
| Who is Who | `content/team.js` | `pages/WhoIsWho.jsx` |
| Nos valeurs | `content/pages.js` → `values` | `pages/ContentPage.jsx` |
| Notre savoir-faire | `content/pages.js` → `expertise` | `pages/ContentPage.jsx` |
| Nos solutions | `content/pages.js` → `solutions` | `pages/ContentPage.jsx` |
| Nos partenaires | `content/partners.js` | `pages/Partners.jsx` |
| News | `content/news/` (one file per article) | `pages/News.jsx` |
| Contact | `content/contact.js` | `pages/Contact.jsx` |
| Confidentialité | `content/policy.js` | `pages/Policy.jsx` |
| Menu & footer | `content/common.js` | `Navbar.jsx` / `Footer.jsx` |

### ✏️ Change any text

Open the file from the table. Every file has the same shape — French first, English second:

```js
const home = {
  fr: { hero: { title: "Accélérez et consolidez…" } },
  en: { hero: { title: "Accelerate and consolidate…" } },
};
```

**Always edit both languages.** Change `fr.hero.title` and `en.hero.title` together. Save, and `npm run dev` updates instantly.

> **Why headings are split in two:** `titleLead` is normal, `titleAccent` renders italic orange.
> `titleLead: "Parce qu'elles nous rendent"` + `titleAccent: "meilleurs."` → Parce qu'elles nous rendent *meilleurs.*

### 🖼️ Change an image

1. Drop the file into `public/brand_assets/` (use `.webp`, keep it under ~300 kB)
2. Update the `src` in the matching content file — the path is relative to `brand_assets/`

```js
src: "nosvaleurs/LOYAUTE.webp",   // → public/brand_assets/nosvaleurs/LOYAUTE.webp
```

⚠️ **Filenames are case-sensitive in production.** `TS.webp` and `ts.webp` are different files on the live server, even though Windows treats them as the same. Copy the name exactly.

### 🎨 Change colours or fonts

Everything visual lives in `tailwind.config.js`:

```js
navy:   '#1D3D6D'   // headings, dark sections
orange: '#FF6A00'   // accents, the italic emphasis
ink:    '#2C2C2C'   // body text
```

Change the hex, and it updates everywhere. Fonts are in the same file under `fontFamily` (Poppins for headings, Inter for body).

### 👥 Edit the team

`content/team.js` → the `members` array. Add, remove or reorder freely — the grid reflows on its own.

```js
{
  photo: "employe/khalil.webp",
  name: "Khalil Abbes",
  role: "Chargé junior d'efficacité commerciale et IA",
  bio: "Optional — the card renders fine without it.",
}
```

Names stay identical in both languages; only `role` and `bio` get translated.

### 📰 Add a news article

1. Copy `content/news/article-06.js` → `article-07.js`
2. Change `number: "07"` and write the `fr` and `en` versions
3. Register it in `content/news/index.js` (import + add to the `ARTICLES` list)

Content blocks available: `paragraph`, `heading`, `subheading`, `list`, `highlight`.

```js
{ type: "heading", text: "Conclusion" },
{ type: "paragraph", text: "…" },
{ type: "list", items: ["…", "…"] },
```

### 🤝 Add a partner

`content/partners.js` → add to the right category's `partners` array, and put the logo in `public/brand_assets/partenaires/`.

### 📄 Add a whole page

Five steps, in order:

1. `components/siteData.js` — add the URL to `ROUTES`
2. `content/common.js` — add the menu label to `navigation`, **both languages**
3. `content/mypage.js` — create the text file (`{ fr: {…}, en: {…} }`)
4. `i18n/index.js` — import it and add it to `DICTIONARIES`
5. `pages/MyPage.jsx` — build the page, then register it in `main.jsx`

Start by copying `pages/Partners.jsx` — it shows the standard structure: `PageHero`, content, `CtaBlock`.

### 🧱 Building blocks you can reuse

Don't write these by hand — they already exist in `src/components/`:

| Component | What it gives you |
|---|---|
| `PageHero` | The top-of-page header. `layout="split"`, `tone="dark"` |
| `SectionHeading` | Eyebrow + two-tone heading + intro, inside a page |
| `CtaBlock` | The closing "get in touch" block |
| `ArrowIcon` | The diagonal arrow used on every link |
| `RevealOnScroll` | Fade/slide on scroll — `variant`, `delay`, `index` to stagger |
| `Card` → `ImageCard` | Image card with title and description |
| `Modal` | Accessible dialog (used by News) |

### ⚠️ Four rules that keep it working

1. **Edit `fr` and `en` together.** They must keep the same shape — a key in one and not the other breaks that language.
2. **After changing `.env`, rebuild.** Vite bakes those values into the JavaScript at build time; editing `.env` alone does nothing.
3. **Run `npm run check:i18n` before you ship** — it catches a key added to one language but not the other.
4. **Check both languages in the browser.** Click FR/EN and reread the page you touched.

---

## 🌍 The language switcher (the good part)

No `i18next`, no 40 kB dependency. **~30 lines of Context** plus plain JS objects. Switching is instant — no reload, no flash, no refetch.

### How it works

```
LanguageProvider  ──►  React Context  ──►  useT("home")  ──►  { …copy in the active language }
       │                                        ▲
   localStorage                          8 dictionaries
  (survives reload)                    src/i18n/content/*.js
```

Every component pulls its own namespace and stays blissfully unaware that translation exists:

```jsx
const Home = () => {
  const t = useT("home");                     // ← FR or EN, decided upstream
  return <h1>{t.hero.title}</h1>;
};
```

### Dictionaries are just objects

```js
// src/i18n/content/home.js
const home = {
  fr: { hero: { title: "Accélérez et consolidez votre développement…" } },
  en: { hero: { title: "Accelerate and consolidate your growth…" } },
};
```

No JSON key-soup, no `t("home.hero.title")` strings that break silently when you rename something. Rename a key and your editor renames every usage.

### Nice touches

- 🔤 **`<html lang>` updates automatically** — screen readers switch pronunciation, browsers offer the right translation.
- 💾 **Choice persists** in `localStorage`, wrapped in `try/catch` so private-browsing mode can't crash the app.
- 🛡️ **Falls back to French** if a key is ever missing, so a typo can never blank the UI.
- 🔗 **Links live in `ROUTES`, not the dictionaries** — labels translate, URLs can't drift apart.
- 🧩 **`interpolate()`** handles the dynamic bits: `"© {year} AS Biz Dev"` → `© 2026 AS Biz Dev`.

### Add a third language in ~10 minutes

1. Add `es: { … }` to each file in `src/i18n/content/`
2. Add `"es"` to `SUPPORTED` in `LanguageProvider.jsx`
3. Add a button to `LangSwitcher.jsx`

```bash
npm run check:i18n     # fails if fr and en drift apart
```

That script compares the shape of every dictionary across both languages and exits non-zero if a key exists in one but not the other — the failure mode that would otherwise render `undefined` on the live site. Worth running before every deploy, or wiring into CI.

---

## ✨ Other things worth a look

<details>
<summary><b>🎬 Motion system — one component, five variants</b></summary>

<br>

`RevealOnScroll` wraps Framer Motion's `whileInView` so animation is declarative and consistent everywhere:

```jsx
<RevealOnScroll variant="up" delay={0.1} index={i}>
```

- **Variants:** `up` · `fade` · `left` · `right` · `scale`
- **Fires once** at 15% visibility — no distracting re-triggers on scroll-up
- **`index` auto-staggers** grids by 80 ms per item
- **`as="article"`** renders correct semantic HTML instead of `<div>` soup
- Custom easing `[0.2, 0, 0, 1]` — everything decelerates the same way

</details>

<details>
<summary><b>🧑‍🤝‍🧑 Team grid — fixing the marquee</b></summary>

<br>

The origin scrolls the team past you in an infinite marquee, with bios hidden until hover. That means: unreadable on mobile, invisible to keyboard users, and every card duplicated in the DOM.

Replaced with a responsive grid — `1 → 2 → 3 → 4` columns — where names, roles and bios are simply *visible*. Cards stretch to equal height via flexbox, so members without a bio don't break the row.

</details>

<details>
<summary><b>📬 Contact pipeline — a form that can't lose a lead</b></summary>

<br>

```
submit → validate → POST to VITE_CONTACT_ENDPOINT → ✅ success
                              │
                              └── ✗ fails / not configured
                                        └──► pre-filled mailto: fallback
                                             (message preserved in the form)
```

**No backend.** A plain JSON POST to a form service — nothing of ours to deploy, run or pay for.

- 🍯 **Honeypot** — an invisible field, `tabIndex={-1}`, inside `aria-hidden`. Bots fill it; humans and screen readers never see it. Named `_gotcha`, which Formspree discards natively.
- ⏱️ **15s `AbortController` timeout** so a hung request can't spin forever.
- 🔌 **Endpoint-agnostic** — Formspree, Web3Forms, or anything accepting a JSON POST.
- 📮 **Never loses a lead** — if the endpoint is missing or down, it falls back to a pre-filled `mailto:` and keeps the text in the form.

Setup is one environment variable — see [`.env.example`](.env.example).

</details>

<details>
<summary><b>🧭 Routing — small, and honest about it</b></summary>

<br>

React Router isn't installed. Routing is a path→element map in `main.jsx`, which is genuinely enough for 9 static pages and keeps the bundle lean.

The useful part is **`ROUTE_ALIASES`**: the origin's WordPress URLs (`/who-is-who/`, `/category/news/`) *and* this build's earlier slugs (`/whoiswho`) all resolve to the right page — so inbound links and search results survive the migration. All 15 paths verified returning 200.

**Trade-off:** no History API, so navigation is a full page load, and deep links need an `index.html` rewrite rule on the host. If this grows past ~15 pages, swap in React Router.

</details>

---

## 🛠 Stack

| Layer | Choice | Why |
|---|---|---|
| **UI** | React 19 | Function components + hooks, no class syntax anywhere |
| **Build** | Vite 8 | Sub-second HMR, 2s production builds |
| **Styling** | Tailwind 3.4 | Utility-first, arbitrary values, zero CSS files |
| **Motion** | Framer Motion 12 | Declarative viewport animation |
| **Icons** | lucide-react | Tree-shaken SVGs |
| **Forms** | Native + fetch | No form library — 6 runtime deps total |
| **Language** | Plain JSX | No TypeScript — one less thing to learn to edit a page |
| **i18n** | Hand-rolled | ~30 lines beats a 40 kB dependency |

---

## 📁 Structure

```
src/
├─ components/          Reusable UI — never page-specific
│  ├─ Navbar · Footer · Layout · Modal · Card · Team
│  ├─ PageHero          Top-of-page header (split / dark variants)
│  ├─ SectionHeading    Eyebrow + two-tone heading + intro
│  ├─ CtaBlock          Closing call-to-action
│  ├─ ArrowIcon         The one arrow used everywhere
│  ├─ RevealOnScroll    Scroll animation wrapper
│  ├─ form/             Field · FormStatus
│  └─ siteData.js       ROUTES · ROUTE_ALIASES · contact details
├─ i18n/                🌍 The bilingual engine
│  ├─ LanguageProvider  Context + localStorage
│  ├─ LangSwitcher      The FR/EN pill
│  ├─ index.js          useT() + interpolate()
│  └─ content/          8 dictionaries — all copy lives here
│     └─ news/          one file per article
├─ hooks/               useContactForm.js
├─ pages/               Home · WhoIsWho · ContentPage · Partners
│                       News · Contact · Policy
└─ utils/               submitContact.js
public/brand_assets/    Images — served at /brand_assets/…
vercel.json             SPA rewrites + asset caching
```

Values and solutions are defined **once**, in `content/pages.js`. The home page
reads the same entries and shows `teaser` where it needs a shorter version — so
a title or image is never written in two places.

**The rule:** components hold *structure*, `i18n/content/` holds *words*. No hardcoded copy in a component, ever.

---

## 🎨 Design tokens

```js
navy   #1D3D6D    // authority, headings, dark sections
orange #FF6A00    // energy, accents, the italic emphasis
ink    #2C2C2C    // body text
```

Poppins for display, Inter for body. Tight tracking on headings (`-0.03em`), generous leading on body (`1.7`). Mobile-first across all five breakpoints.

---

## ♿ Accessibility

Not an afterthought: skip-to-content link, semantic landmarks, `aria-label` on every icon-only control, `aria-current="page"` on active nav, visible focus rings throughout, `aria-live` form status, honeypot hidden from assistive tech, and alt text that describes rather than repeats.

---

## 📋 Status

**Working & verified** — bilingual switching across all 9 pages · FR content matched page-by-page against the origin · 30/30 images load · form submission tested in a real browser (success *and* mailto fallback) · `check:i18n` green across all 8 dictionaries · build clean.

**Before going live:**

- [ ] Set `VITE_CONTACT_ENDPOINT` — until then the form falls back to email
- [ ] Get the English approved — see [`TRANSLATIONS-REVIEW.md`](TRANSLATIONS-REVIEW.md), 334 strings side-by-side
- [x] SPA rewrite rule — `vercel.json` (deep links no longer 404)

**Nice to have:** language in the URL (`/en/…`) so English pages can be shared and indexed · React Router if the page count grows · code-splitting to trim the 141 kB gzip.

---

<div align="center">
<sub>Built with React, Vite and Tailwind — and a stubborn refusal to hardcode a single string.</sub>
</div>
