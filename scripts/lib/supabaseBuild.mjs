import { createClient } from "@supabase/supabase-js";

// Local dev/build: pull vars from .env, since these plain Node scripts don't
// get Vite's automatic .env loading. No-op (and silently ignored) when there
// is no .env file, e.g. on Vercel, where the vars are injected directly into
// process.env.
try {
  process.loadEnvFile();
} catch {
  // no .env file present — fall through to process.env as already set
}

/**
 * Read-only Supabase client for build-time scripts (sitemap, prerender route
 * list). Uses the anon key, not the service-role key — RLS already scopes
 * anon reads to published articles, so this is safe to have in CI/build logs.
 * Requires SUPABASE_URL and SUPABASE_ANON_KEY in the build environment.
 */
const url = process.env.SUPABASE_URL;
const anonKey = process.env.SUPABASE_ANON_KEY;

if (!url || !anonKey) {
  throw new Error(
    "Missing SUPABASE_URL / SUPABASE_ANON_KEY in the build environment — required to list published articles for the sitemap and prerender.",
  );
}

export const supabaseBuild = createClient(url, anonKey, {
  auth: { persistSession: false },
});
