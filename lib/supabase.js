import { createClient } from "@supabase/supabase-js";

/**
 * Server-only: articles are fetched exclusively from Server Components
 * (`lib/data/articles.js`), so this never runs in the browser bundle and
 * needs no `NEXT_PUBLIC_*` prefix.
 *
 * `supabase` is `null` when unset rather than throwing at module load, so a
 * misconfigured environment doesn't crash every page — callers in
 * `lib/data/articles.js` surface that as a normal rejected promise.
 */
const url = process.env.SUPABASE_URL;
const anonKey = process.env.SUPABASE_ANON_KEY;

/** @type {import("@supabase/supabase-js").SupabaseClient | null} */
export const supabase =
  url && anonKey
    ? createClient(url, anonKey, { auth: { persistSession: false } })
    : null;
