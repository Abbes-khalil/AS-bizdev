<div align="center">

# ⚡ AS Biz Dev — V2

**[asbizdev.com](https://asbizdev.com) — Next.js App Router, bilingual by URL, repositioned around two offers.**

<sub>Africa & Middle East — accelerate a market, or run its sales activity for you.</sub>

![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-articles_backend-3ECF8E?style=flat-square&logo=supabase&logoColor=white)
![i18n](https://img.shields.io/badge/i18n-FR_%2F_EN_by_URL-1D3D6D?style=flat-square)

</div>

---

## 🎯 What this is

The site is a commercial tool, not a brochure. A visitor has to understand in seconds **who** we help (B2B SMEs, industrial ones in particular), **what** we do (accelerate and run export sales), **where** (named markets in Africa and the Middle East) and **how** (markets, customers, distributors, pipeline, forecast, action plans, results).

Two offers, and only two:

| | |
|---|---|
| **Accélération commerciale** | Open a market, find customers and distributors, turn identified potential into real commercial activity. |
| **Pilotage commercial export externalisé** | Run all or part of the sales activity of a region: distributor management, pipeline, forecast, reporting. |

> **Editorial rule, non-negotiable:** never invent a figure, a client, a country, a reference or a result. When a fact is not validated, the site says `[À COMPLÉTER]` / `[TO BE COMPLETED]` instead (see [§ Content to validate](#-content-still-to-validate)). Those markers are deliberate — replace them with the validated fact, never with something plausible.

---

## 🚀 Quick start

```bash
npm install
npm run dev          # → http://localhost:3000 (next dev)
```

```bash
npm run build         # next build — static generation + prerendering per route
npm run start          # next start — serve the production build locally
npm run check:i18n     # fail if a FR/EN dictionary pair drifts apart
```

There is currently **no test runner and no `typecheck` script** — see [§ Status](#-status) for what that means in practice.

---

## 🧭 Routing & pages (App Router)

Every URL is a real file under `app/`, following Next.js's file-based routing — no client-side router, no route config beyond the data below.

**`lib/routes.js`** is still the single source of truth for the *pairing* between languages, the sitemap, the language switcher and hreflang tags — it holds `{ fr, en }` paths per page key, but each of those paths is also a literal folder in `app/`:

```
app/page.jsx                                   → /                      (fr)
app/en/page.jsx                                 → /en
app/nos-solutions/page.jsx                      → /nos-solutions         (fr)
app/en/solutions/page.jsx                       → /en/solutions
app/marches/afrique/page.jsx                    → /marches/afrique       (fr)
app/en/markets/africa/page.jsx                  → /en/markets/africa
app/news/[slug]/page.jsx                        → /news/:slug            (dynamic, Supabase-backed)
```

English slugs are **not** literal translations: they are the search expressions the English site targets (`outsourced-export-sales-management`, `commercial-acceleration`), so the URL itself carries weight.

**No middleware.js / proxy.js exists in this repo currently.** There is no host-based redirect logic (e.g. `*.vercel.app` → `asbizdev.com`) — only the path-based legacy redirects below.

Legacy paths from the previous site (`/who-is-who`, `/nosvaleurs`, `/category/news`…) 301-redirect to their new home — the table lives in **`lib/constants/legacyRedirects.js`** and is applied server-side via `redirects()` in **`next.config.mjs`**.

### Markets pages — important: no per-country routes

There is **no individual page per country**. The 14 countries in `lib/data/countries.js` render as a chip grid inside three pages: `/marches` (hub), `/marches/afrique`, `/marches/moyen-orient` (+ EN equivalents). A `findCountryBySlug()` helper exists in `countries.js` but nothing currently calls it — if a past version of this README described `/marches/<pays>` pages, that described the pre-Next.js version and is no longer accurate.

### Where each page's text lives

Every page's `<Name>Content.jsx` + `<Name>Content.content.js` (and `.data.js`
where present) are colocated in an `_components/` folder next to that page's
`page.jsx` under `app/` — e.g. `app/nos-solutions/_components/SolutionsContent.jsx`.
When a page has separate FR and EN route folders, the pair lives under the FR
one and the EN `page.jsx` imports it from there. `MarketZoneContent.jsx` is the
one exception — shared by both `/marches/afrique` and `/marches/moyen-orient`,
it lives one level up in `app/marches/_components/`. `NewsContent.jsx`,
`ArticleContent.jsx` and `NotFoundContent.jsx` are the only page components
still in `components/pages/` (no single owning route folder).

| Page | URL (FR / EN) | Text file | Component |
|---|---|---|---|
| Accueil | `/` · `/en` | `HomeContent.content.js` | `app/page.jsx` (+`en/page.jsx`) → `HomeContent.jsx` |
| Nos solutions | `/nos-solutions` · `/en/solutions` | `SolutionsContent.content.js` | `SolutionsContent.jsx` |
| Accélération commerciale | `/nos-solutions/acceleration-commerciale` · `/en/solutions/commercial-acceleration` | `AccelerationContent.content.js` | `AccelerationContent.jsx` |
| Pilotage commercial externalisé | `/nos-solutions/pilotage-commercial-externalise` · `/en/solutions/outsourced-export-sales-management` | `PilotageContent.content.js` | `PilotageContent.jsx` |
| Marchés (hub) | `/marches` · `/en/markets` | `MarketsContent.content.js` | `MarketsContent.jsx` |
| Afrique / Moyen-Orient | `/marches/afrique` · `/marches/moyen-orient` (+ EN) | `lib/i18n/content/common.js` (`markets` namespace) + `lib/data/countries.js` | `MarketZoneContent.jsx` |
| AS Biz Dev | `/as-biz-dev` · `/en/about` | `AboutContent.content.js` + `Team.content.js` | `AboutContent.jsx` |
| Devenir partenaire | `/devenir-partenaire` · `/en/become-a-partner` | `BecomePartnerContent.content.js` | `BecomePartnerContent.jsx` |
| Contact | `/contact` · `/en/contact` | `ContactContent.content.js` | `ContactContent.jsx` |
| Nos partenaires | `/nos-partenaires` · `/en/our-partners` | `PartnersContent.content.js` (copy) + `PartnersContent.data.js` (references) | `PartnersContent.jsx` |
| Nos secteurs | `/nos-secteurs` · `/en/sectors` | `SectorsContent.content.js` | `SectorsContent.jsx` |
| Notre réseau | `/notre-reseau` · `/en/our-network` | `NetworkContent.content.js` | `NetworkContent.jsx` |
| Articles & Insights | `/news` · `/en/news` | Supabase `articles` table, not a content file | `NewsContent.jsx` |
| — article detail | `/news/:slug` · `/en/news/:slug` | Supabase `articles` table | `ArticleContent.jsx` |
| Politique de confidentialité | `/politiques-de-confidentialite` · `/en/privacy-policy` | `PolicyContent.content.js` | `PolicyContent.jsx` |
| Mentions légales | `/mentions-legales` · `/en/legal-notice` | `LegalNoticeContent.content.js` | `LegalNoticeContent.jsx` |
| Menu & footer | — | `lib/i18n/content/common.js` | `Navbar.jsx` / `Footer.jsx` |

### ✏️ Change any text

Open the file from the table. Every `.content.js` file has the same shape — French first, English second:

```js
const home = {
  fr: { hero: { titleLead: "Accélérez votre développement commercial en" } },
  en: { hero: { titleLead: "Accelerate your business development across" } },
};
```

**Always edit both languages.** Every dictionary is registered in `lib/i18n/dictionaries.js` and read via `getDictionary(lang, "namespace")` (server components) or `useT("namespace")` (client components). Save, and `npm run dev` updates instantly.

### 🌍 Add or edit a market

Add/edit an entry in **`lib/data/countries.js`** — no route to create, since countries aren't their own pages (see above). Each entry needs `key`, `slug`, `subregion` (`"north" | "west" | "south" | "middleEast"`), `tier`, `flagCode`, `name.{fr,en}`, `intro.{fr,en}`. The brief this data follows is explicit: **never name a market AS Biz Dev hasn't confirmed** — optional per-country sections (`sectors`, `clientTypes`, `distributionChannels`…) render only when present and non-empty, rather than being filled with plausible copy.

### 🤝 Change the partner registration form

Its structure lives in **`lib/constants/partnerForm.js`** (currently 19 fields, 12 required, plus a separate required consent checkbox); only the labels live in `BecomePartnerContent.content.js`.

Closed questions store **option ids**, never the translated label (`distributorManagement`, not "Animation de distributeurs") — that's what will make the data filterable later.

### 🖼️ Change an image

1. Drop the file into `public/brand_assets/` (`.webp`, kept small)
2. Update the `src` in the matching content file — paths go through `ASSET` in `lib/siteData.js`, relative to `brand_assets/`

⚠️ **Filenames are case-sensitive in production.** Vercel's filesystem is Linux — `TS.webp` and `ts.webp` are different files there even though Windows/macOS treat them as the same (this caused a real broken-logo bug, since fixed).

### 🎨 Change colours or fonts

Everything visual lives in `tailwind.config.js` (`navy`, `orange`, `ink` color tokens) and the Google Fonts `@import` in `styles/globals.css` — trimmed to only the font weights actually used on the site (400/500/600).

### 👥 Edit the team

`Team.content.js` → the roster. Photos are keyed in a `PHOTOS` map and degrade to an initials placeholder (`TeamCard.jsx`) if a photo is missing or 404s.

### 📰 Articles — Supabase-backed, not a content file

Articles are data in Supabase, not source code — publishing one doesn't require a commit or a rebuild. Full architecture, schema and RLS model: [`docs/ARTICLES_SUPABASE.md`](docs/ARTICLES_SUPABASE.md).

**Current state, as implemented today:** an n8n workflow watches an RSS bridge on the LinkedIn company page and `POST`s to **`app/api/ingest-article/route.js`** (Vercel serverless function, `x-ingest-token` header auth), which upserts straight into Supabase with **`status: "published"`** — live immediately at `/news/:slug`, no review step. `public/internal/add-article.html` is a manual fallback UI hitting the same endpoint.

Requires `INGEST_TOKEN` and `SUPABASE_SERVICE_ROLE_KEY` — see `.env.example`. Both are server-only, never exposed to the browser.

### 📄 Add a whole page

1. `lib/routes.js` — add the key with its **FR and EN** paths
2. `lib/seo/metadata.js` — add its `SEO_META` entry, both languages
3. A `<Name>Content.jsx` + `<Name>Content.content.js` pair in a new `app/<fr-path>/_components/` folder, the `.content.js` registered in `lib/i18n/dictionaries.js`
4. `app/<fr-path>/page.jsx` + `app/en/<en-path>/page.jsx` — each calls `generateMetadata()` (title/description/canonical/hreflang/OG/Twitter, see any existing page for the pattern) and renders the `<Organization>` JSON-LD script plus the page component (the EN `page.jsx` imports the component from the FR route's `_components/` folder — see the note above the page table)
5. `lib/i18n/content/common.js` — add the menu label to `navigation` if it belongs in the menu

Copy `app/nos-solutions/page.jsx` + `app/nos-solutions/_components/SolutionsContent.jsx` for the standard shape: `PageHero` → `Section` → `CtaBlock`.

### 🧱 Building blocks you can reuse

| Component | What it gives you |
|---|---|
| `PageHero` | Top-of-page header. `layout="split"` |
| `Section` | Section wrapper with consistent rhythm. `tone="white" / "alt" / "navy"` |
| `SectionHeading` | Eyebrow + two-tone heading + intro, wrapped in `RevealOnScroll` |
| `OfferCard` | One of the two offers, with optional bullets and a `variant` (reveal direction) |
| `StepList` / `BulletList` / `TextCard` | Numbered process, factual lists, plain title+body cards |
| `MarketCountryGrid` | Country chips grouped by subregion |
| `CtaBlock` | Closing call-to-action, targets `ROUTES.contact` |
| `MotionCta` | Framer Motion hover/tap scale wrapper around a `next/link`, reduced-motion aware |
| `RevealOnScroll` | Fade/slide/scale on scroll — respects `prefers-reduced-motion` |
| `PageTransition` | Fade/slide between client-side route changes (`components/layout/`) |
| `components/forms/` | `ContactForm`, `PartnerForm` and their field primitives |

> **Never hardcode an internal URL.** Use `ROUTES.pilotage[lang]` (or the `otherLanguageUrl` / `alternatesOf` helpers in `lib/routes.js` for cross-language links). Hardcoding an href sends English visitors back into the French tree.

### ⚠️ Rules that keep it working

1. **Edit `fr` and `en` together.** A key in one and not the other breaks that language.
2. **Link by `ROUTES` key, never by a hardcoded URL string.**
3. **`NEXT_PUBLIC_*` env vars are inlined at build time.** Change one and rebuild.
4. **Run `npm run check:i18n` before you ship.**
5. **Check both languages in the browser.**

---

## 🌍 Bilingual by URL

Each page exists at two indexable addresses. The active language is derived from the URL prefix (`langFromPath()` in `lib/routes.js`) — never from client state — so a shared link always opens in the language it was written in, and Google can index both.

```
/nos-solutions/pilotage-commercial-externalise    ←→    /en/solutions/outsourced-export-sales-management
        │                                                          │
        └──────────────  rel="alternate" hreflang  ────────────────┘
```

`otherLanguageUrl()` and `alternatesOf()` (both in `lib/routes.js`) do the reverse lookup that feeds the language switcher and every page's `generateMetadata()`.

---

## 🔎 SEO

| | How |
|---|---|
| **Per-page metadata** | Every `app/**/page.jsx` exports `generateMetadata()` — title, description, canonical, `alternates.languages` (hreflang), OpenGraph, Twitter card, sourced from `lib/seo/metadata.js` |
| **OG image** | `public/brand_assets/og-image.png` (1200×630), resolved to an absolute URL via `metadataBase` in `app/layout.jsx` |
| **Structured data** | `Organization` JSON-LD on every page (`lib/seo/headTags.js`); `BreadcrumbList` JSON-LD on nested pages (market zones, solution sub-pages, articles) |
| **Sitemap** | `app/sitemap.js` — every route in `ROUTES` plus every published article, each with a real `lastModified`. That date comes from `lib/data/routeLastModified.js`, a **snapshot generated locally** by `scripts/build-route-dates.mjs` (`git log` at Vercel's build time doesn't work reliably against a shallow clone — see that script's comment for the full story). **Re-run and commit it whenever a page's route file changes.** |
| **Robots** | `app/robots.js` |

Rendering is Next's own (Server Components + static generation) — there is **no separate Puppeteer/prerender step** in this version.

---

## ✨ Other things worth a look

<details>
<summary><b>📬 Forms — no backend of our own, and they can't lose a lead</b></summary>

<br>

```
submit → validate → POST JSON → ✅ success
                        │
                        └── ✗ fails / not configured
                                  └──► pre-filled mailto: fallback
```

- 🍯 **Honeypot** `_gotcha` field (see `useContactForm.js`).
- ⏱️ **15s `AbortController` timeout** (`lib/utils/postToEndpoint.js`).
- 🔌 **Endpoint-agnostic** — Web3Forms, Formspree, anything taking a JSON POST.

Env vars: `NEXT_PUBLIC_CONTACT_ENDPOINT` (+ `NEXT_PUBLIC_CONTACT_ACCESS_KEY` for Web3Forms) and, optionally, `NEXT_PUBLIC_PARTNER_ENDPOINT`. See [`.env.example`](.env.example).

</details>

<details>
<summary><b>🎬 Motion — RevealOnScroll, MotionCta, PageTransition</b></summary>

<br>

`RevealOnScroll` wraps Framer Motion's `whileInView`: variants `up · fade · left · right · scale`, fires once at 15% visibility by default, `index` auto-staggers grids. `MotionCta` adds a subtle hover/tap scale to the main call-to-action buttons. `PageTransition` fades/slides between client-side route changes.

All three call `useReducedMotion()` and render the *same element structure* regardless of the result (only the animated values change) — branching the element tree itself on that preference causes a server/client hydration mismatch, since `prefers-reduced-motion` can already be `true` on the client's first render while SSR always sees `false`. Under `prefers-reduced-motion`, content is shown immediately with no transform — a motion preference must never leave content invisible.

</details>

---

## 🛠 Stack

| Layer | Choice | Why |
|---|---|---|
| **Framework** | Next.js 16 (App Router, Turbopack) | File-based routing, Server Components, native metadata API |
| **UI** | React 19 | Function components + hooks |
| **Styling** | Tailwind 3.4 | Utility-first, arbitrary values, zero CSS files |
| **Motion** | Framer Motion 12 | Declarative viewport animation |
| **Articles backend** | Supabase (`@supabase/supabase-js`) | RLS-scoped anon reads; service-role writes only server-side |
| **Forms** | Native + `fetch` | No form library |
| **i18n** | Hand-rolled (`lib/i18n/`) | URL-driven, no client-state language |
| **Deployment** | Vercel | production: `asbizdev.com` · preview: `as-bizdev.vercel.app` |

**Not present in this version, unlike the pre-migration one:** React Router, Vite, Puppeteer/prerendering, a test runner, a `typecheck` script.

---

## 📁 Structure

```
app/
├─ page.jsx · en/page.jsx                Home, FR + EN
├─ <slug>/page.jsx                       one folder per FR route
├─ en/<slug>/page.jsx                    one folder per EN route
├─ news/[slug]/page.jsx                  dynamic article route (Supabase)
├─ api/ingest-article/route.js           n8n ingestion endpoint
├─ layout.jsx                            root layout — metadataBase, OG defaults
├─ sitemap.js · robots.js
app/
├─ <route>/_components/   Each page's *Content.jsx + *Content.content.js, colocated (see § above)
components/
├─ layout/                Navbar · Footer · Layout · PageTransition
│  └─ nav/                DesktopNav · MobileNav
├─ pages/                 NewsContent · ArticleContent · NotFoundContent — the only page components with no single owning route
├─ ui/                    PageHero · Section · SectionHeading · CtaBlock ·
│                         OfferCard · StepList · BulletList · MotionCta ·
│                         RevealOnScroll · ArrowIcon
├─ forms/                 ContactForm · PartnerForm
├─ markets/                MarketExperience · MarketCountryGrid
├─ news/                   NewsGrid · ArticleModal
└─ references/             ReferenceCard · EcosystemCard
lib/
├─ routes.js               🧭 The route table — FR + EN, alternates helpers
├─ constants/               site.js · partnerForm.js · validation.js · legacyRedirects.js
├─ data/                    countries.js · articles.js · marketsMapData.js · routeLastModified.js
├─ i18n/                    LanguageProvider · dictionaries.js · content/
├─ seo/                     metadata.js (per page, per language) · headTags.js
├─ utils/                   postToEndpoint · submitContact · submitPartner
└─ supabase.js
hooks/                      useActiveRoute · useContactForm · usePartnerForm
scripts/                    build-markets-map.mjs · build-route-dates.mjs · check-i18n.mjs ·
                            migrate-articles-to-supabase.mjs
next.config.mjs             legacy 301 redirects + brand_assets cache headers
```

---

## ♿ Accessibility

Skip-to-content link, semantic landmarks, `aria-label` on every icon-only control, keyboard-reachable submenus, visible focus rings, `aria-live` form status, focus moved to the first invalid field on submit, and `prefers-reduced-motion` honoured throughout (see the motion section above).

---

## 📋 Status

**Not present yet:** automated tests, a `typecheck` script, runtime validation of required environment variables at startup, and a review/approval step before an ingested article goes live (`api/ingest-article/route.js` upserts with `status: "published"` directly today).

**No middleware/host-based redirect exists** — `as-bizdev.vercel.app` is not currently redirected to `asbizdev.com`.

## 🔒 Content still to validate

Grep the repo for `[À COMPLÉTER]` / `[TO BE COMPLETED]` to find every placeholder pending real information from AS Biz Dev — as of this writing, that's the legal notice (`LegalNoticeContent.content.js`: publisher identity, SIRET, director of publication). **Never fill these in with plausible information** — replace the marker with the validated fact only.

---

<div align="center">
<sub>Built with Next.js, React and Tailwind — and a stubborn refusal to invent a fact.</sub>
</div>
