# Articles & Insights → Supabase migration — status snapshot

Snapshot date: 2026-08-08. Read this first when resuming the session — it
captures what's done, what's verified, and what's still open.

See [`ARTICLES_SUPABASE.md`](./ARTICLES_SUPABASE.md) for the full architecture
and schema reference. This file is just the "where did I leave off" log.

## Done and verified

- **Schema applied** to the real Supabase project (`supabase/articles.sql`)
  — table, indexes, RLS confirmed live.
- **Migration run** — all 6 legacy articles from
  `src/i18n/content/news/article-0N.js` are upserted into Supabase
  (`node scripts/migrate-articles-to-supabase.mjs --apply`).
- **`.env`** has working `VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY` /
  `SUPABASE_URL` / `SUPABASE_ANON_KEY` / `SUPABASE_SERVICE_ROLE_KEY` — bare
  project URL (no `/rest/v1` suffix), confirmed correct.
- **`npm run build`** (Vite build → prerender → sitemap) passes end-to-end.
  Sitemap has 38 URLs, all 6 articles prerender in FR + EN with real content.
- **`npm run check:i18n`** and **`npm run typecheck`** both pass.
- **RLS confirmed via curl**: anon key can read all 6 published articles;
  anon key gets `401` on a test insert (writes correctly denied).
- **Build-time env loading fixed**: `scripts/lib/supabaseBuild.mjs` and
  `scripts/migrate-articles-to-supabase.mjs` now call
  `process.loadEnvFile()` so plain-Node build scripts pick up `.env`
  locally (Vite does this automatically for the browser bundle, but these
  scripts don't run under Vite). No-ops harmlessly when there's no `.env`
  file, e.g. on Vercel where env vars are injected directly — so nothing
  extra is needed for the Vercel build environment beyond setting
  `SUPABASE_URL` / `SUPABASE_ANON_KEY` there.

## Not yet verified

- **Live browser check of the React UI** — `/news` grid, theme/zone
  filters, `/news/:slug` detail page, FR/EN toggle, loading/error/empty
  states. Everything so far has been verified via the prerendered HTML
  output and direct `curl` calls against Supabase's REST API, not by
  actually clicking through the running app in a browser.
- A real **`api/ingest-article.js`** POST end-to-end against a live
  LinkedIn URL and a real Supabase project (only exercised via
  `node --check` so far, not an actual request).

## Resolved: `api/ingest-article.js` rebuilt on Supabase

Decided 2026-08-08: re-applied the Supabase-upsert version. It now upserts
directly into the `articles` table (service-role key, `onConflict:
"source_url"`) instead of committing an `article-XX.js` file to GitHub.
`GITHUB_TOKEN` / `GITHUB_REPO` / `GITHUB_DEFAULT_BRANCH` are unused again and
have been removed from `.env.example`. `public/internal/add-article.html`
needed no changes — it already just POSTs `{ url, lang, themes, zones }` and
reads back `{ ok, skipped, slug }`, which the new handler still returns.

## Vercel deployment

`SUPABASE_URL` and `SUPABASE_ANON_KEY` (anon key, not service-role) need to
be set in the Vercel project's build environment for `npm run build` to
succeed there too — same values as local `.env`. If `api/ingest-article.js`
is switched back to the Supabase version, that serverless function also
needs `SUPABASE_URL` + `SUPABASE_SERVICE_ROLE_KEY` set in Vercel's runtime
environment variables (separate from "build environment" in Vercel's UI,
though usually the same panel).

## To resume

```sh
npm run dev            # click through /news, /news/:slug, filters, FR/EN toggle
npm run build           # full pipeline sanity check
```
