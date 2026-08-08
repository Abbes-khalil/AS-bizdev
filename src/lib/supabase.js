import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!url || !anonKey) {
  throw new Error(
    "Missing VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY — copy .env.example to .env and fill in your Supabase project's public URL and anon key.",
  );
}

/** Public, read-only client. RLS restricts reads to published articles only. */
export const supabase = createClient(url, anonKey, {
  auth: { persistSession: false },
});
