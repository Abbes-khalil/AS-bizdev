# Next.js Migration — Design

## Context

The site (`asbizdev`) is currently a Vite + React SPA using `react-router-dom`,
deployed to Vercel with a Puppeteer-based prerender step
(`scripts/prerender.mjs`) to produce crawlable static HTML, plus a
`generate-seo-files.mjs` script that writes `dist/sitemap.xml` and
`dist/robots.txt` after build. It is bilingual (fr/en) with **custom,
non-literal per-language slugs** (e.g. `pilotage` is
`/nos-solutions/pilotage-commercial-externalise` in French and
`/en/solutions/outsourced-export-sales-management` in English) defined in a
single source-of-truth table, `src/constants/paths.js`. News articles are
stored in Supabase and ingested automatically via an n8n workflow that POSTs
to `api/ingest-article.js` (a Vercel serverless function) whenever a new
LinkedIn post appears.

Goal: migrate the app to Next.js (App Router), deployed on Vercel, replacing
client-side-only rendering + custom prerendering with Next's native
SSG/ISR/SSR, while preserving every existing URL, the bilingual slug scheme,
the Supabase-backed news system, and the `ingest-article` webhook contract.

## Decisions

- **Router**: Next.js App Router (not Pages Router).
- **i18n routing**: No `next-intl` / `[locale]` segment. Each language's URL
  from `PATHS` becomes its own literal folder under `app/`. `LanguageProvider`
  derives `lang` from the URL via `usePathname()` (client-side), matching
  today's `useLocation()`-based derivation — no persisted/cookie-based locale
  state.
- **Data fetching**: Server Components fetch Supabase directly; no
  client-side `useEffect` fetching for content that affects SEO/first paint.
  `ingest-article` becomes a Route Handler, same env vars, same behavior.
- **Server/Client split**: Server Components by default. `"use client"` only
  on interactive/animated leaves (Navbar, LangSwitcher, Modal, MarketModal,
  RevealOnScroll, ScrollToTop, form components, anything using Framer Motion
  hooks or browser-only APIs).
- **Deployment**: Vercel. `next.config.js` absorbs `vercel.json`'s
  `redirects`/`headers`; native `rewrites` for SPA fallback are no longer
  needed (App Router serves real routes).
- **Migration strategy**: in place, on the existing `Next.js-Migration`
  branch. No parallel scaffold.
- **Execution**: phased, with a checkpoint after each phase (see below).
- **Prerendering**: `scripts/prerender.mjs` and the Puppeteer/chromium build
  dependency are retired once App Router SSG covers the same routes. Must
  first confirm `ingest-article.js`'s OG-tag scraping doesn't separately
  depend on `puppeteer-core`/`@sparticuz/chromium` (initial read of the file
  suggests it's plain `fetch` + regex against the target URL's HTML, not
  headless rendering — to be confirmed in Phase 3 before deleting those
  dependencies).
- **SEO files**: `app/sitemap.js` and `app/robots.js` (Next native
  conventions) replace `scripts/generate-seo-files.mjs`, reusing the existing
  `PATHS` table and `getPublishedArticles` query logic.
- **Language**: stay on JavaScript (`.jsx`), matching `CLAUDE.md`'s stated
  stack and today's actual code — no conversion to `.tsx`. `tsconfig.json`
  (currently unused for real type-checking since no `.ts`/`.tsx` exists) is
  replaced by Next's generated `jsconfig.json`.
- **`src/pages/` renamed to `src/views/`**: discovered during Phase 1
  execution — Next.js's App Router reserves `pages/` and `src/pages/`
  specifically for its own (legacy) Pages Router and refuses to boot
  (`pages and app directories should be under the same folder`) once both
  `app/` (project root) and `src/pages/` exist. The existing Vite
  page-component directory is renamed to `src/views/`, a name Next has no
  special meaning for; only `src/App.jsx`'s imports needed updating.

## Routing mapping

`src/constants/paths.js` stays the single source of truth for URLs (used by
`app/sitemap.js` and any script needing the table), but each entry now also
corresponds to a literal `app/` folder, e.g.:

```
PATHS.home    = { fr: "/",  en: "/en" }
PATHS.pilotage = {
  fr: "/nos-solutions/pilotage-commercial-externalise",
  en: "/en/solutions/outsourced-export-sales-management",
}
PATHS.article = { fr: "/news/:slug", en: "/en/news/:slug" }
```

maps to:

```
app/page.jsx
app/en/page.jsx
app/nos-solutions/pilotage-commercial-externalise/page.jsx
app/en/solutions/outsourced-export-sales-management/page.jsx
app/news/[slug]/page.jsx
app/en/news/[slug]/page.jsx
```

Each `page.jsx` is a thin Server Component: it imports the corresponding page
body from `src/pages/*` (kept, adapted to accept `lang` as a prop instead of
reading it from context) and renders it, plus exports `generateMetadata`.
`LEGACY_REDIRECTS` (the old `/who-is-who` etc. 301s) move into
`next.config.js`'s `redirects()`.

## Phases

1. **Foundation** — `next.config.js`, `app/layout.jsx` (root `<html>`, fonts,
   global Tailwind import), ported `LanguageProvider`, `Navbar`, `Footer`,
   Home page (fr + en) rendering end-to-end. Verified in a real browser via
   `next dev`.
2. **Remaining static pages** — Solutions, Acceleration, Pilotage, Markets,
   MarketZone (africa + middleEast), About, Sectors, Network, BecomePartner,
   Contact, Partners, Policy — each fr + en.
3. **Dynamic/data** — News list + Article pages on Supabase with SSG +
   ISR (`revalidate`); `app/api/ingest-article/route.js`; confirm the
   puppeteer/chromium dependency question above.
4. **Parity + cleanup** — `app/sitemap.js`, `app/robots.js`, legacy redirects
   in `next.config.js`, delete Vite-only files (`vite.config.js`,
   `index.html`, `src/main.jsx`, `scripts/prerender.mjs`,
   `scripts/generate-seo-files.mjs`, old `vercel.json` rewrite rule), update
   `package.json` scripts, full build + manual QA across both languages.

Each phase ends with a review checkpoint before moving to the next.

## Out of scope

- No visual/design changes — this is a structural migration only.
- No new libraries beyond what Next.js itself requires.
- No change to the Supabase schema, the n8n workflow, or the
  `ingest-article` request/response contract.
