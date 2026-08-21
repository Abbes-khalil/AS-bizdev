# Arabic locale (AR) — design

## Goal
Add a full Arabic version of the site under `/ar`, RTL-correct, alongside the
existing FR (root) and EN (`/en`) trees. No new i18n framework — extend the
existing plain-lookup pattern (`{ fr, en }` → `{ fr, en, ar }`) already used by
`lib/routes.js`, `lib/i18n/dictionaries.js`, `lib/seo/metadata.js`, and
`app/sitemap.js`.

## Non-goals
- No `[locale]` dynamic route segment — FR/EN/AR each keep their own literal
  `app/` folder, matching current convention.
- No change to market/country business data (list, tiers, status) — text
  fields only.
- No visual redesign; RTL adaptation only where reading direction matters.

## Changes

**Routing** (`lib/routes.js`)
- `LANGS = ["fr", "en", "ar"]`
- Every `ROUTES[key]` gets an `ar` field (new slugs, mirroring EN's per-page
  translated-slug approach where it makes sense, else transliteration).
- `otherLanguageUrl` / `alternatesOf` generalized from a fr↔en pairwise swap
  to a loop over `LANGS`, returning all three URLs.
- `langFromPath` adds the `/ar` prefix check.
- New `DIR = { fr: "ltr", en: "ltr", ar: "rtl" }` export.

**RTL plumbing**
- `app/layout.jsx` pre-hydration inline script sets both `lang` and `dir`.
- `LanguageProvider` effect sets `document.documentElement.dir` in addition to
  `lang`.
- Tailwind directional utilities (`ml-`, `mr-`, `pl-`, `pr-`, `left-`,
  `right-`, `text-left/right`) in the ~18 affected files converted to logical
  equivalents (`ms-`, `me-`, `ps-`, `pe-`, `start-`, `end-`) so components work
  unmodified in both directions — no `*Arabic.jsx` duplicates.
- Contact/partner form fields holding inherently-LTR values (email, phone,
  URL) get an explicit `dir="ltr"` attribute.

**Typography**
- Noto Sans Arabic via `next/font/google`, applied only under `[dir="rtl"]`.

**Content**
- Every dictionary/content file gets an `ar` key: `lib/i18n/content/common.js`,
  page content files, `MarketsContent.content.js`, `lib/data/countries.js`
  text fields, partner references, `lib/seo/metadata.js` (`SEO_META`), the 6
  news articles. Same shape as `fr`/`en`; non-text fields untouched.
- `scripts/check-i18n.mjs` extended to diff AR shape against FR.

**SEO / sitemap**
- `buildMetadata.js` and `sitemap.js` need no structural change — both already
  loop over `LANGS`/`ROUTES` generically. Add `ar` to the `LOCALE` map for
  OpenGraph. `x-default` stays French.

**Language switcher** (`lib/i18n/LangSwitcher.jsx`)
- Becomes 3-way. Visible pill text stays the plain uppercased route code
  (`AR`, consistent with `FR`/`EN`); `LABELS` map (used for `aria-label` only)
  gets `ar: "العربية"`.

## Content translation
Full site translated in one pass (chosen scope), written directly by the
assistant in professional B2B tone, preserving exact commercial meaning from
the French source — no invented numbers, clients, or claims.

## Validation
`npm run check:i18n`, `npm run build`, manual spot-check of FR/EN/AR routes,
RTL rendering, and the sitemap output.
