import { z } from "zod";

/**
 * Server-only environment variables the app cannot run correctly without.
 * Validated once, at Next.js config load time (`next.config.mjs` imports
 * `assertServerEnv()`) — so a missing/misconfigured variable fails `next
 * dev` / `next build` immediately with a clear message, instead of
 * surfacing later as an opaque Supabase/fetch error the first time a page
 * or the ingest API route actually runs in production.
 *
 * `NEXT_PUBLIC_CONTACT_ENDPOINT` is deliberately NOT here: the contact form
 * (`lib/utils/postToEndpoint.js`) already has an intentional, documented
 * fallback to a pre-filled `mailto:` link when it's unset, so treating it
 * as a hard requirement would break that fallback rather than protect it.
 */
const serverEnvSchema = z.object({
  SUPABASE_URL: z
    .string({ message: "SUPABASE_URL is required — articles (/news, sitemap.xml) are read from Supabase at build and request time." })
    .url("SUPABASE_URL must be a valid URL (the bare Supabase project URL, not the /rest/v1 endpoint)."),
  SUPABASE_ANON_KEY: z
    .string({ message: "SUPABASE_ANON_KEY is required — same reason as SUPABASE_URL." })
    .min(1, "SUPABASE_ANON_KEY is required — same reason as SUPABASE_URL."),
  SUPABASE_SERVICE_ROLE_KEY: z
    .string({ message: "SUPABASE_SERVICE_ROLE_KEY is required — app/api/ingest-article/route.js needs it to write new articles." })
    .min(1, "SUPABASE_SERVICE_ROLE_KEY is required — app/api/ingest-article/route.js needs it to write new articles."),
  INGEST_TOKEN: z
    .string({ message: "INGEST_TOKEN is required — it's the shared secret app/api/ingest-article/route.js checks against the x-ingest-token header." })
    .min(1, "INGEST_TOKEN is required — it's the shared secret app/api/ingest-article/route.js checks against the x-ingest-token header."),
});

export const assertServerEnv = () => {
  const result = serverEnvSchema.safeParse(process.env);
  if (result.success) return result.data;

  const messages = result.error.issues.map((issue) => `  - ${issue.message}`).join("\n");
  throw new Error(
    `\n\nInvalid or missing environment variables:\n${messages}\n\nSet them in .env (see .env.example) or your deployment's environment settings.\n`,
  );
};
