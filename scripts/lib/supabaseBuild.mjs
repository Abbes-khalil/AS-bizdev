import { createClient } from "@supabase/supabase-js";

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
