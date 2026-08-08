<div align="center">

# ⚡ AS Biz Dev — V2

**A full rebuild of [asbizdev.com](https://asbizdev.com) — React, bilingual by URL, and repositioned around two offers.**

<sub>Africa & Middle East — accelerate a market, or run its sales activity for you.</sub>

![React](https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8.1-646CFF?style=flat-square&logo=vite&logoColor=white)
![Router](https://img.shields.io/badge/React_Router-7.18-CA4245?style=flat-square&logo=reactrouter&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![i18n](https://img.shields.io/badge/i18n-FR_%2F_EN_by_URL-1D3D6D?style=flat-square)
![SEO](https://img.shields.io/badge/prerendered-26_pages-FF6A00?style=flat-square)

</div>

---

## 🎯 What this is

The site is a commercial tool, not a brochure. A visitor has to understand in seconds **who** we help (B2B SMEs, industrial ones in particular), **what** we do (accelerate and run export sales), **where** (named markets in Africa and the Middle East) and **how** (markets, customers, distributors, pipeline, forecast, action plans, results).

Two offers, and only two:

| | |
|---|---|
| **Accélération commerciale** | Open a market, find customers and distributors, turn identified potential into real commercial activity. |
| **Pilotage commercial export externalisé** | Run all or part of the sales activity of a region: distributor management, pipeline, forecast, reporting. |

### What changed in this version

| | Before | Now |
|---|---|---|
| Positioning | Generalist consulting (3 packs, values, know-how, project management) | Two offers, execution-first |
| Geography | "France, Africa and the Middle East" | Africa & Middle East, **named markets only** |
| Languages | FR/EN toggle in `localStorage` — English invisible to search engines | One URL per language (`/marches` ↔ `/en/markets`) with hreflang |
| SEO | One `<title>` and one description for the whole site | Per-page metadata, canonical, JSON-LD, sitemap, **26 prerendered pages** |
| Partners | A showcase of logos | Plus a **partner registration form** feeding a structured record |
| Routing | `switch` on `window.location.pathname` | React Router, lazy-loaded pages |

> **Editorial rule, non-negotiable:** never invent a figure, a client, a country, a reference or a result. When a fact is not validated, the site says `[INFORMATION À VALIDER PAR AS BIZ DEV]` instead. Those markers are deliberate — replace them with the validated fact, never with something plausible.

---

## 🚀 Quick start

```bash
npm install
npm run dev          # → http://localhost:3000
```

```bash
npm run build        # bundle + prerender 26 pages + sitemap → dist/
npm run build:client # bundle only (fast, no prerender)
npm run preview      # serve the built site
npm run check:i18n   # fail if FR and EN dictionaries drift apart
npm run typecheck
```

---

## 🔧 How to modify the site

**The rule that explains everything: components hold the _layout_, `src/i18n/content/` holds the _words_.** No sentence is ever written inside a component. To change text you never open a `.jsx` file.

### Where each page's text lives

| Page | URL (FR / EN) | Text file | Component |
|---|---|---|---|
| Accueil | `/` · `/en` | `content/home.js` | `pages/Home.jsx` |
| Nos solutions | `/nos-solutions` · `/en/solutions` | `content/solutions.js` | `pages/Solutions.jsx` |
| Accélération commerciale | `/nos-solutions/acceleration-commerciale` · `/en/solutions/commercial-acceleration` | `content/acceleration.js` | `pages/Acceleration.jsx` |
| Pilotage commercial externalisé | `/nos-solutions/pilotage-commercial-externalise` · `/en/solutions/outsourced-export-sales-management` | `content/pilotage.js` | `pages/Pilotage.jsx` |
| Marchés | `/marches` · `/en/markets` | `content/markets.js` → `hub` | `pages/Markets.jsx` |
| Afrique / Moyen-Orient | `/marches/afrique` · `/en/markets/africa` | `content/markets.js` → `zones` | `pages/Zone.jsx` |
| Pages pays | `/marches/<pays>` · `/en/markets/<country>` | `data/countries.js` | `pages/Country.jsx` |
| AS Biz Dev | `/as-biz-dev` · `/en/about` | `content/about.js` + `content/team.js` | `pages/About.jsx` |
| Devenir partenaire | `/devenir-partenaire` · `/en/become-a-partner` | `content/partnerProgram.js` | `pages/BecomePartner.jsx` |
| Contact | `/contact` · `/en/contact` | `content/contact.js` | `pages/Contact.jsx` |
| Nos partenaires | `/nos-partenaires` · `/en/our-partners` | `content/partners.js` | `pages/Partners.jsx` |
| Actualités | `/news` · `/en/news` | `content/news/` (one file per article) | `pages/News.jsx` |
| Confidentialité | `/politiques-de-confidentialite` · `/en/privacy-policy` | `content/policy.js` | `pages/Policy.jsx` |
| Menu & footer | — | `content/common.js` | `Navbar.jsx` / `Footer.jsx` |

### ✏️ Change any text

Open the file from the table. Every file has the same shape — French first, English second:

```js
const home = {
  fr: { hero: { titleLead: "Accélérez votre développement commercial en" } },
  en: { hero: { titleLead: "Accelerate your business development across" } },
};
```

**Always edit both languages.** Change `fr.hero.titleLead` and `en.hero.titleLead` together. Save, and `npm run dev` updates instantly.

> **Why headings are split in two:** `titleLead` is normal, `titleAccent` renders italic orange.
> `titleLead: "Stratégie"` + `titleAccent: "et exécution."` → Stratégie *et exécution.*

### 🌍 Publish a country page

This is the one that matters for search: a page per market is what ranks on "recherche distributeur Sénégal" or "business development Morocco".

Add an entry to **`src/data/countries.js`** — no code to touch. The page, its card on the zone page, its sitemap entry and its FR/EN hreflang pair all appear on the next build:

```js
{
  key: "senegal",
  zone: "africa",                                   // "africa" | "middleEast"
  slug:   { fr: "senegal",    en: "senegal" },
  name:   { fr: "Sénégal",    en: "Senegal" },
  inName: { fr: "au Sénégal", en: "in Senegal" },   // used in page titles
  fr: {
    intro: "…",
    sectors: ["…"], clients: ["…"], channels: ["…"],
    stakes: ["…"], intervention: ["…"], partners: ["…"],
  },
  en: { /* same keys */ },
}
```

Every section is optional. Anything you leave out renders as *à valider* rather than being filled with plausible copy. While the list is empty, the zone pages show explicit `[PAYS À VALIDER]` slots — that is intentional, not a bug.

### 🤝 Change the partner registration form

The form is a **database entry form**, not an email. Its structure lives in `src/constants/partnerForm.js`; only the labels live in `content/partnerProgram.js`.

```js
// constants/partnerForm.js — the question
{ id: "languages", type: "text", required: true }

// content/partnerProgram.js — its label, in both languages
fields: { languages: { label: "Langues professionnelles" } }
```

Closed questions store **option ids**, never the translated label (`distributorManagement`, not "Animation de distributeurs"). That is what will make "Sénégal + énergie + accès grands comptes industriels" filterable when the partner database is built.

Field types: `text` · `email` · `tel` · `url` · `textarea` · `select` · `checkboxGroup`.

### 🖼️ Change an image

1. Drop the file into `public/brand_assets/` (use `.webp`, keep it under ~300 kB)
2. Update the `src` in the matching content file — the path is relative to `brand_assets/`

⚠️ **Filenames are case-sensitive in production.** `TS.webp` and `ts.webp` are different files on the live server, even though Windows treats them as the same.

### 🎨 Change colours or fonts

Everything visual lives in `tailwind.config.js`:

```js
navy:   '#1D3D6D'   // headings, dark sections
orange: '#FF6A00'   // accents, the italic emphasis
ink:    '#2C2C2C'   // body text
```

### 👥 Edit the team

`content/team.js` → the `members` array. Names stay identical in both languages; only `role` and `bio` get translated.

### 📰 Add a news article

1. Copy `content/news/article-06.js` → `article-07.js`
2. Change `number: "07"` and write the `fr` and `en` versions
3. Register it in `content/news/index.js`

Content blocks available: `paragraph`, `heading`, `subheading`, `list`, `highlight`.

### 📄 Add a whole page

1. `constants/paths.js` — add the key with its **FR and EN** paths
2. `seo/metadata.js` — add its title and description, both languages
3. `content/mypage.js` — create the text file (`{ fr: {…}, en: {…} }`)
4. `i18n/index.js` — import it and add it to `DICTIONARIES`
5. `pages/MyPage.jsx` — build the page, call `useSeo("mykey")`, register it in `App.jsx`
6. `content/common.js` — add the menu label to `navigation` if it belongs in the menu

Copy `pages/Solutions.jsx` for the standard shape: `PageHero` → `Section` → `CtaBlock`.

### 🧱 Building blocks you can reuse

| Component | What it gives you |
|---|---|
| `PageHero` | Top-of-page header. `layout="split"`, `tone="dark"` |
| `Section` | Section wrapper with consistent rhythm. `tone="white" / "alt" / "navy"` |
| `SectionHeading` | Eyebrow + two-tone heading + intro |
| `OfferCard` | One of the two offers, with optional bullets |
| `StepList` | Numbered process (`columns={3}` or `{5}`) |
| `BulletList` | Factual list — `marker="check" / "cross" / "dash"`, `columns={2}` |
| `MarketList` | Country cards, with the `[PAYS À VALIDER]` empty state |
| `CtaBlock` | Closing call-to-action, targets a route key |
| `RouteLink` | **Internal link by route key** — resolves the URL in the active language |
| `RevealOnScroll` | Fade/slide on scroll — respects `prefers-reduced-motion` |
| `form/` | `Field` · `TextArea` · `Select` · `CheckboxGroup` · `FormStatus` · `PartnerForm` |

> **Never hardcode an internal URL.** Use `<RouteLink routeKey="pilotage">` or `pathFor("pilotage", lang)`. Hardcoding an href sends English visitors back into the French tree.

### ⚠️ Five rules that keep it working

1. **Edit `fr` and `en` together.** A key in one and not the other breaks that language.
2. **Link by route key, never by URL string.**
3. **After changing `.env`, rebuild.** Vite bakes those values in at build time.
4. **Run `npm run check:i18n` before you ship.**
5. **Check both languages in the browser.** Click FR/EN and reread the page you touched.

---

## 🌍 Bilingual by URL

Each page exists at two indexable addresses. The active language is derived from the URL prefix — never from client state — so a shared link always opens in the language it was written in, and Google can index both.

```
/nos-solutions/pilotage-commercial-externalise    ←→    /en/solutions/outsourced-export-sales-management
        │                                                          │
        └──────────────  rel="alternate" hreflang  ────────────────┘
```

```
URL  ──►  langFromPath()  ──►  LanguageProvider  ──►  useT("pilotage")  ──►  { …copy }
                                      │
                              constants/paths.js
                        (one route table, both languages)
```

English slugs are **not** literal translations: they are the search expressions the English site targets (`outsourced-export-sales-management`, `commercial-acceleration`), so the URL itself carries weight.

The FR/EN switch renders real `<Link>`s to the twin URL, so middle-click works and crawlers follow them.

### Add a third language

1. Add `es` to `LANGS` and a third path to every entry in `constants/paths.js`
2. Add `es: { … }` to each file in `src/i18n/content/` and to `seo/metadata.js`
3. `npm run check:i18n`

---

## 🔎 SEO

The three things that were structurally broken before, and how they work now:

| | Before | Now |
|---|---|---|
| **Per-page metadata** | One `<title>` for the whole site | `seo/metadata.js` — a title, description, canonical, OG and Twitter card per page and per language, applied by `hooks/useSeo.js` |
| **Crawlable HTML** | Empty shell, content only after JavaScript | `scripts/prerender.mjs` writes a real HTML file per route into `dist/` |
| **English** | Invisible — language lived in `localStorage` | Its own URLs, with `hreflang` and `x-default` on every page |

Plus: `sitemap.xml` and `robots.txt` generated from the route table and the country data, Organization JSON-LD, and 301 redirects from every legacy URL in `vercel.json`.

**How prerendering works:** `npm run build` bundles the app, serves `dist/` locally, opens each of the 26 routes in headless Chrome, and writes the resulting DOM — head tags included — to `dist/<path>/index.html`. Vercel checks the filesystem before applying the SPA rewrite, so crawlers and first-time visitors get real HTML; React then hydrates. Adding a country page adds two more files automatically.

---

## ✨ Other things worth a look

<details>
<summary><b>📬 Forms — no backend, and they can't lose a lead</b></summary>

<br>

```
submit → validate → POST JSON → ✅ success
                        │
                        └── ✗ fails / not configured
                                  └──► pre-filled mailto: fallback
```

- 🍯 **Honeypot** `_gotcha` — invisible, `tabIndex={-1}`, inside `aria-hidden`.
- ⏱️ **15s `AbortController` timeout.**
- 🔌 **Endpoint-agnostic** — Formspree, Web3Forms, anything taking a JSON POST.
- 🗃️ **Structured payload** — the partner form posts option ids, a country array, a submission timestamp and an intake status, so the future partner database can store it unchanged.

Two variables: `VITE_CONTACT_ENDPOINT` and, optionally, `VITE_PARTNER_ENDPOINT` to route registrations to a different inbox. See [`.env.example`](.env.example).

</details>

<details>
<summary><b>🎬 Motion — one component, five variants</b></summary>

<br>

`RevealOnScroll` wraps Framer Motion's `whileInView`: variants `up · fade · left · right · scale`, fires once at 15% visibility, `index` auto-staggers grids by 80 ms.

Under `prefers-reduced-motion` it renders the content plainly — a motion preference must never leave content invisible.

</details>

<details>
<summary><b>🧭 Routing</b></summary>

<br>

`constants/paths.js` is the single route table: page key → `{ fr, en }`. It feeds the router, the navigation, the language switcher, the hreflang tags, the sitemap and the prerenderer. Nothing else knows a URL.

`matchRoute()` does the reverse lookup — which page is this URL, in which language — which is how the active menu item and the twin-language link are resolved.

Legacy paths (`/who-is-who`, `/nosvaleurs`, `/category/news`…) 301 to their new home, server-side in `vercel.json` and client-side in `constants/legacyRedirects.js`.

</details>

---

## 🛠 Stack

| Layer | Choice | Why |
|---|---|---|
| **UI** | React 19 | Function components + hooks |
| **Build** | Vite 8 | Sub-second HMR |
| **Routing** | React Router 7 | Bilingual paths, `:slug` country pages, lazy pages |
| **Styling** | Tailwind 3.4 | Utility-first, arbitrary values, zero CSS files |
| **Motion** | Framer Motion 12 | Declarative viewport animation |
| **Prerender** | Puppeteer (dev only) | Static HTML per route, no SSR server to run |
| **Forms** | Native + fetch | No form library |
| **i18n** | Hand-rolled | ~30 lines beats a 40 kB dependency |

---

## 📁 Structure

```
src/
├─ components/          Reusable UI — never page-specific
│  ├─ Navbar · Footer · Layout · Modal · Card · Team
│  ├─ nav/              DesktopNav (submenus) · MobileNav (accordion)
│  ├─ PageHero · Section · SectionHeading · CtaBlock
│  ├─ OfferCard · StepList · BulletList · MarketList
│  ├─ RouteLink         Internal link by route key
│  ├─ RevealOnScroll · PageLoader · ScrollToTop · ArrowIcon
│  └─ form/             Field · TextArea · Select · CheckboxGroup
│                       FormStatus · PartnerForm
├─ constants/
│  ├─ paths.js          🧭 The route table — FR + EN, dependency-free
│  ├─ routes.js         matchRoute() on top of it
│  ├─ partnerForm.js    🗃️ The partner registration schema
│  ├─ legacyRedirects.js · placeholders.js · site.js
├─ data/countries.js    🌍 Country pages — add an entry, get a page
├─ seo/                 metadata.js (per page, per language) · headTags.js
├─ hooks/               useSeo · useActiveRoute · useContactForm · usePartnerForm
├─ i18n/                LanguageProvider (URL-driven) · LangSwitcher
│  └─ content/          13 dictionaries — all copy lives here
├─ pages/               Home · Solutions · Acceleration · Pilotage
│                       Markets · Zone · Country · About · BecomePartner
│                       Contact · Partners · News · Policy · NotFound
└─ utils/               postToEndpoint · submitContact · submitPartner
scripts/                prerender.mjs · generate-seo-files.mjs
                        siteRoutes.mjs · check-i18n.mjs
vercel.json             301 redirects + SPA fallback + asset caching
```

---

## ♿ Accessibility

Skip-to-content link, semantic landmarks, `aria-label` on every icon-only control, `aria-current="page"` on the active nav entry (including its parent), keyboard-reachable submenus via `focus-within`, the closed mobile sheet kept out of the tab order, visible focus rings, `aria-live` form status, focus moved to the first invalid field on submit, and `prefers-reduced-motion` honoured.

---

## 📋 Status

**Verified in a real browser:** 26 routes prerendered with correct per-page titles, canonical and hreflang · language switch keeps the page and updates `<html lang>` · submenus resolve in both languages · legacy URLs redirect · unknown country slug falls back to the markets hub · unknown path renders the 404 page · empty partner form surfaces 17 errors and moves focus to the first one · `check:i18n` green across 13 dictionaries · `typecheck` clean.

**Before going live — to be validated by AS Biz Dev (§22 of the brief):**

- [ ] The list of priority countries → `src/data/countries.js`
- [ ] The industrial sectors actually targeted → `content/about.js`, `sectorsNote`
- [ ] The exact scope of the outsourced sales management → `content/pilotage.js`, `promise.scope`
- [ ] Publishable client references, case studies and figures — none are on the site today
- [ ] The partner profiles sought per country
- [ ] The legal and GDPR wording of the partner form
- [ ] `VITE_CONTACT_ENDPOINT` — until then forms fall back to email
- [ ] The English copy — see [`TRANSLATIONS-REVIEW.md`](TRANSLATIONS-REVIEW.md)

**Next phase:** the partner database and its back-office (filtering by country / sector / capability, internal status and notes), then natural-language querying over it. The form already stores its data in the shape that work will need.

---

<div align="center">
<sub>Built with React, Vite and Tailwind — and a stubborn refusal to invent a fact.</sub>
</div>
