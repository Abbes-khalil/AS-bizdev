# Articles & Insights — Supabase backend

Articles power `/news` and `/news/:slug`. They are data, not source code: publishing a
new article no longer requires a Git commit or a site rebuild.

## Architecture

```
LinkedIn ──▶ RSS bridge ──▶ n8n ──▶ Supabase (articles table) ──▶ React frontend
                                         ▲
                                         │ interim manual/automated path
                     add-article.html ──▶ api/ingest-article.js
```

- **n8n** (future, run on AS Biz Dev's own infrastructure — not built in this repo) watches
  an RSS bridge on the LinkedIn company page and upserts new posts directly into Supabase.
- **`api/ingest-article.js`** (Vercel serverless function) is the interim publishing path
  until that workflow exists. It scrapes Open Graph metadata from a LinkedIn URL and
  upserts a row into Supabase. `public/internal/add-article.html` is a manual fallback UI
  that posts to this endpoint.
- **React** (`src/services/articles.js`) reads published articles from Supabase with the
  public anon key. Row Level Security ensures only `status = 'published'` rows are ever
  visible to it.
- **Build-time scripts** (`scripts/siteRoutes.mjs`, `scripts/generate-seo-files.mjs`,
  `scripts/prerender.mjs`) also read published articles from Supabase (anon key) to build
  `sitemap.xml` and prerender `/news/:slug` pages at build time.

## Schema

Defined in [`supabase/articles.sql`](../supabase/articles.sql). Apply it once against your
Supabase project (SQL editor, or `supabase db push`).

| Column         | Type          | Notes                                                        |
|----------------|---------------|----------------------------------------------------------------|
| `id`           | `uuid`        | Primary key, generated.                                       |
| `source_url`   | `text`        | Unique, nullable. LinkedIn URL — used for idempotent upserts. |
| `external_id`  | `text`        | Unique, nullable. Reserved for future non-LinkedIn sources.   |
| `status`       | `text`        | `draft` \| `published` \| `archived`.                         |
| `published_at` | `date`        | Nullable.                                                      |
| `author`       | `text`        | Nullable.                                                      |
| `image`        | `text`        | OG image URL, nullable.                                       |
| `source_type`  | `text`        | `linkedin-article` \| `linkedin-post` \| `manual`.             |
| `themes`       | `text[]`      | Keys into `src/i18n/content/news/taxonomy.js` `THEMES`.       |
| `zones`        | `text[]`      | Keys into `taxonomy.js` `ZONES`.                               |
| `countries`    | `text[]`      | Free-form for now (no country taxonomy file exists yet).      |
| `slug_fr`      | `text`        | Unique, required.                                              |
| `slug_en`      | `text`        | Unique, required.                                              |
| `fr`, `en`     | `jsonb`       | `{ title, preview, content: ContentBlock[] }`                 |
| `created_at`, `updated_at` | `timestamptz` | Managed automatically.                            |

`ContentBlock` union (stored inside `fr`/`en`):

```ts
{ type: "paragraph" | "heading" | "subheading" | "highlight", text: string }
{ type: "list", items: string[] }
```

## Row Level Security

- **anon** (public, used by the frontend and build scripts): `SELECT` only, restricted to
  `status = 'published'`. No insert/update/delete policy exists for `anon`, so writes are
  denied by default.
- **service role** (used only server-side, in `api/ingest-article.js` and
  `scripts/migrate-articles-to-supabase.mjs`): bypasses RLS entirely. Never exposed to the
  browser bundle or the build environment's read path.

## n8n upsert contract

Once the n8n workflow is built, it should upsert rows shaped exactly like what
`api/ingest-article.js` writes today:

```json
{
  "source_url": "https://www.linkedin.com/posts/...",
  "external_id": null,
  "status": "published",
  "source_type": "linkedin-post",
  "published_at": "2026-08-08",
  "author": null,
  "image": "https://...",
  "themes": [],
  "zones": [],
  "countries": [],
  "slug_fr": "generated-slug",
  "slug_en": "generated-slug",
  "fr": { "title": "...", "preview": "...", "content": [] },
  "en": { "title": "...", "preview": "...", "content": [] }
}
```

Upsert on `source_url` (or `external_id` for non-LinkedIn sources) for idempotency —
re-processing the same post must not create a duplicate row. This requires the
`SUPABASE_SERVICE_ROLE_KEY` (RLS blocks anon writes), stored in n8n's own credential store,
never in this repository.

## Environment variables

See `.env.example` for the full list and comments. Summary:

| Variable | Where it's used | Exposed to browser? |
|---|---|---|
| `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY` | `src/lib/supabase.js` (frontend reads) | Yes — safe, RLS-scoped |
| `SUPABASE_URL`, `SUPABASE_ANON_KEY` | Build scripts (sitemap/prerender) | No — build-time only |
| `SUPABASE_SERVICE_ROLE_KEY` | `api/ingest-article.js`, migration script | No — server-side only |

## Migrating the legacy static articles

The original six articles still live in `src/i18n/content/news/article-0N.js` as historical
reference — nothing in the running app imports them anymore. To load them into Supabase:

```sh
node scripts/migrate-articles-to-supabase.mjs            # dry run — prints what would happen
node scripts/migrate-articles-to-supabase.mjs --apply     # writes via idempotent upsert
```

Requires `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` in the environment, and the schema
already applied. Safe to re-run — it upserts on `slug_fr`.

## Legacy / retired

- `src/i18n/content/news/article-0N.js` and `index.js`'s `ARTICLES` export remain in the
  repo as historical backup and as the source for the migration script above. The
  `forLang`/`findArticleBySlug` helpers and the `articles` key in the `news` i18n
  dictionary were removed once nothing consumed them client-side.
- `api/ingest-article.js` no longer commits to GitHub — it upserts into Supabase. The
  `GITHUB_TOKEN`/`GITHUB_REPO`/`GITHUB_DEFAULT_BRANCH` env vars are unused; kept in
  `.env.example` as placeholders in case another script still references them, marked
  legacy.
- `public/internal/add-article.html` remains as the manual fallback UI, now posting through
  to the Supabase-backed endpoint. Its `countries` field is still not exposed in the form
  (pre-existing gap — the API accepts `countries` but the form never sent it); left as-is
  since there's no stable country taxonomy yet to build a checklist from.
