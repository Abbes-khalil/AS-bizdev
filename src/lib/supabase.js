import { createClient } from "@supabase/supabase-js";

/**
 * Vite bakes `VITE_*` into `import.meta.env` at build time; Next.js has no
 * such thing and only inlines `NEXT_PUBLIC_*` into the browser bundle, so
 * neither is set under Next. `.env` already documents plain `SUPABASE_URL`/
 * `SUPABASE_ANON_KEY` as the Node-side equivalent (used by the build
 * scripts) — falling back to those keeps this working server-side under
 * Next without touching `.env` or the Supabase integration itself.
 */
const nodeEnv = typeof process !== "undefined" ? process.env : undefined;

const url = import.meta.env?.VITE_SUPABASE_URL ?? nodeEnv?.SUPABASE_URL;
const anonKey = import.meta.env?.VITE_SUPABASE_ANON_KEY ?? nodeEnv?.SUPABASE_ANON_KEY;

/**
 * `url`/`anonKey` are only ever visible server-side under Next (the browser
 * bundle has no `NEXT_PUBLIC_*` equivalent configured for them yet — out of
 * scope for this phase). Rather than throwing at module load and crashing
 * the whole page for every visitor, `supabase` is `null` when unset; callers
 * (`services/articles.js`) surface that as a normal rejected promise, which
 * the existing loading/error UI in `useArticles`/`useArticle` already
 * handles gracefully.
 */
export const supabase =
  url && anonKey
    ? createClient(url, anonKey, { auth: { persistSession: false } })
    : null;
