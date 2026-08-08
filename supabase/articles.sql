-- Articles & Insights — Supabase schema
-- See docs/ARTICLES_SUPABASE.md for the full architecture and contract.
--
-- Architecture: LinkedIn -> RSS bridge -> n8n -> Supabase (this table) -> React.
-- Run this once against your Supabase project (SQL editor, or `supabase db push`).

create extension if not exists pgcrypto;

create table if not exists public.articles (
  id            uuid primary key default gen_random_uuid(),

  -- Dedup / idempotency keys for automated ingestion (n8n, api/ingest-article.js).
  -- Both nullable and both unique — Postgres treats multiple NULLs as distinct,
  -- so rows without a source (e.g. manually authored) are unaffected.
  source_url    text unique,
  external_id   text unique,

  status        text not null default 'draft'
                  check (status in ('draft', 'published', 'archived')),
  published_at  date,
  author        text,
  image         text,

  source_type   text not null default 'linkedin-post'
                  check (source_type in ('linkedin-article', 'linkedin-post', 'manual')),

  themes        text[] not null default '{}',
  zones         text[] not null default '{}',
  countries     text[] not null default '{}',

  slug_fr       text not null unique,
  slug_en       text not null unique,

  -- Shape: { "title": text, "preview": text, "content": ContentBlock[] }
  -- ContentBlock union:
  --   { "type": "paragraph" | "heading" | "subheading" | "highlight", "text": string }
  --   { "type": "list", "items": string[] }
  fr            jsonb not null,
  en            jsonb not null,

  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

comment on table public.articles is 'Articles & Insights content. Source of truth for /news and /news/:slug. Written by api/ingest-article.js and (later) n8n; read by the React frontend and build-time SEO scripts.';
comment on column public.articles.fr is 'Localized content: {title, preview, content: ContentBlock[]}.';
comment on column public.articles.en is 'Same shape as fr.';
comment on column public.articles.source_url is 'Original LinkedIn URL, used for idempotent upserts. Null for manually authored articles with no source.';
comment on column public.articles.external_id is 'Optional stable id for non-LinkedIn sources, used for idempotent upserts.';

create index if not exists idx_articles_status_published_at
  on public.articles (status, published_at desc nulls last);

create index if not exists idx_articles_slug_fr on public.articles (slug_fr);
create index if not exists idx_articles_slug_en on public.articles (slug_en);

create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists trg_articles_updated_at on public.articles;
create trigger trg_articles_updated_at
  before update on public.articles
  for each row
  execute function public.set_updated_at();

-- Row Level Security ----------------------------------------------------------
-- Public/anon reads are limited to published articles. There is no anon or
-- authenticated write policy, so inserts/updates/deletes are denied by default
-- for those roles. The service-role key (used only server-side in
-- api/ingest-article.js and scripts/migrate-articles-to-supabase.mjs) bypasses
-- RLS entirely and does not need an explicit policy.

alter table public.articles enable row level security;

drop policy if exists "public can read published articles" on public.articles;
create policy "public can read published articles"
  on public.articles
  for select
  to anon
  using (status = 'published');
