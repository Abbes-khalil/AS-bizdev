# `components/pages/` — naming convention

Most pages have no files here at all: content and layout live directly in
that route's `page.jsx` (e.g. `app/contact/page.jsx`, `app/en/contact/page.jsx`),
each with its own `CONTENT` object at the top and the JSX below it — open
the one file for a page, see everything shown on it, edit the `CONTENT`
block to change text.

This folder holds page components with **no single owning route** — used
by more than one URL, so they can't live in one page's `_components/`:

- `NewsContent`-equivalent layout has been folded into `app/news/page.jsx`
  and `app/en/news/page.jsx` directly (each route only renders it once);
  `ArticleContent.jsx` stays here because `/news/:slug` and `/en/news/:slug`
  both render it.
- `NotFoundContent.jsx` — used by both language trees' `not-found.jsx`.

## Shared content that still lives in its own file

A few dictionaries stay out of a single `page.jsx` on purpose, because
more than one route reads them:

- `lib/i18n/content/news/index.js` — shared by the news hub pages and
  `ArticleContent.jsx`.
- `app/marches/_components/MarketsContent.content.js` — shared by the
  markets hub (`app/marches/page.jsx`) and the zone template
  (`MarketZoneContent.jsx`, itself rendered by 4 routes: fr/en ×
  Africa/Middle East). Per-zone copy lives in its `zones.africa` /
  `zones.middleEast`.
- `lib/i18n/content/common.js` — nav and footer, read by every page.

Both are still registered in `lib/i18n/dictionaries.js` (`getDictionary(lang,
"namespace")` for Server Components, `useT("namespace")` from Client
Components) — that registry now only holds genuinely cross-page content,
not per-page copy.

## `.data.js` — structured data, not page copy

`app/nos-partenaires/_components/PartnersContent.data.js` holds the actual
reference records (clients, network institutions) — `key`, `type`,
`sectors`, `logo`, `sortOrder` — with each entry's own small amount of
localized text nested per-record (`content: { fr: { name }, en: { name } }`).
Kept separate from `app/nos-partenaires/page.jsx`'s `CONTENT` (hero, section
labels, CTA) for the same reason `lib/data/countries.js` stays its own file:
it's a scalable dataset, not page copy — folding ~30 reference records or
14+ countries into a page's `CONTENT` block would defeat the point of that
block being short and readable.

If a future page needs the same kind of structured, non-copy data (a table,
a list of records), give it its own `<Name>.data.js` rather than stretching
a page's `CONTENT` object to fit.
