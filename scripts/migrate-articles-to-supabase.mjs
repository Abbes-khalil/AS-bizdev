import { createClient } from "@supabase/supabase-js";

import { ARTICLES } from "../src/i18n/content/news/index.js";

/**
 * One-time (re-runnable) migration of the legacy static article files into
 * Supabase. Dry-run by default — pass --apply to actually write.
 *
 *   node scripts/migrate-articles-to-supabase.mjs            # preview only
 *   node scripts/migrate-articles-to-supabase.mjs --apply    # writes rows
 *
 * Requires SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in the environment.
 * Upserts on slug_fr: every legacy article has a populated, unique slug_fr,
 * while source_url is null for all of them today (nulls never conflict on a
 * unique constraint, so it can't be used as the conflict target here).
 */

const apply = process.argv.includes("--apply");

const toRow = (article) => ({
  source_url: article.source?.url ?? null,
  status: article.status,
  published_at: article.publishedAt,
  author: article.author,
  image: article.image,
  source_type: article.source?.type ?? "manual",
  themes: article.themes ?? [],
  zones: article.zones ?? [],
  countries: article.countries ?? [],
  slug_fr: article.slug.fr,
  slug_en: article.slug.en,
  fr: article.fr,
  en: article.en,
});

async function main() {
  const rows = ARTICLES.map(toRow);

  console.log(`Found ${rows.length} article(s) in src/i18n/content/news:`);
  for (const row of rows) {
    console.log(`  - ${row.slug_fr} (${row.status}, published_at=${row.published_at ?? "null"})`);
  }

  if (!apply) {
    console.log("\nDry run only — no writes made. Re-run with --apply to migrate.");
    return;
  }

  const url = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceRoleKey) {
    console.error("\nMissing SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY in the environment.");
    process.exitCode = 1;
    return;
  }

  const supabase = createClient(url, serviceRoleKey, { auth: { persistSession: false } });

  console.log(`\nUpserting ${rows.length} article(s) into Supabase (conflict target: slug_fr)...`);
  let errored = false;

  for (const row of rows) {
    const { error } = await supabase.from("articles").upsert(row, { onConflict: "slug_fr" });
    if (error) {
      errored = true;
      console.error(`  ✗ ${row.slug_fr}: ${error.message}`);
    } else {
      console.log(`  ✓ ${row.slug_fr}`);
    }
  }

  if (errored) {
    console.error("\nMigration finished with errors.");
    process.exitCode = 1;
  } else {
    console.log("\nMigration complete.");
  }
}

main();
