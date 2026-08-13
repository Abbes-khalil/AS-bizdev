/**
 * Fully automated LinkedIn ingestion (§24) — Next.js Route Handler.
 *
 * True zero-touch LinkedIn API sync isn't available without LinkedIn Partner
 * approval, so the automation lives one layer up: an n8n workflow (run on the
 * user's own infrastructure, not this repo) watches an RSS bridge on AS Biz
 * Dev's LinkedIn company page and POSTs each new post's URL here. This
 * endpoint pulls the Open Graph metadata (title, summary, image, published
 * date) LinkedIn exposes for link previews and upserts a row straight into
 * Supabase's `articles` table with `status: "published"` — no human step, no
 * deploy needed, picked up by the frontend and the sitemap/ISR revalidation
 * immediately.
 *
 * This is deliberately called only server-to-server (n8n's HTTP Request
 * node, credential stored in n8n) — never from a public browser page — so
 * the shared secret never ships inside anything a visitor's browser loads.
 *
 * Env vars required: INGEST_TOKEN, SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY.
 * See docs/ARTICLES_SUPABASE.md for the schema and RLS model.
 */
import { createClient } from "@supabase/supabase-js";

const decodeHtmlEntities = (text) =>
  text
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");

/**
 * @param {string} html
 * @param {string} property - an Open Graph/meta property or name, e.g. "og:title"
 * @returns {string | null}
 */
const extractMeta = (html, property) => {
  const tags = html.match(/<meta\b[^>]*>/gi) ?? [];
  for (const tag of tags) {
    const propMatch =
      tag.match(/property=["']([^"']+)["']/i) ??
      tag.match(/name=["']([^"']+)["']/i);
    if (propMatch?.[1] === property) {
      const contentMatch = tag.match(/content=["']([^"']*)["']/i);
      if (contentMatch) return decodeHtmlEntities(contentMatch[1]);
    }
  }
  return null;
};

const slugify = (text) =>
  text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-+|-+$)/g, "")
    .slice(0, 80);

/**
 * Appends a short numeric suffix until the slug is free, so two posts that
 * happen to share a title don't collide on the unique slug_fr/slug_en columns.
 * @param {import("@supabase/supabase-js").SupabaseClient} supabase
 * @param {string} base
 * @returns {Promise<string>}
 */
const uniqueSlug = async (supabase, base) => {
  let candidate = base;
  let attempt = 1;
  for (;;) {
    const { data, error } = await supabase
      .from("articles")
      .select("id")
      .or(`slug_fr.eq.${candidate},slug_en.eq.${candidate}`)
      .maybeSingle();
    if (error) throw new Error(`Supabase slug check failed: ${error.message}`);
    if (!data) return candidate;
    attempt += 1;
    candidate = `${base}-${attempt}`;
  }
};

/**
 * Body: `{ url: string, themes?: string[], zones?: string[], countries?: string[] }`.
 * Requires the `x-ingest-token` header to match `INGEST_TOKEN`.
 * @param {Request} request
 * @returns {Promise<Response>} JSON `{ ok: true, slug }` / `{ ok: true, skipped: true, ... }` on success, `{ error }` with a 4xx/5xx status otherwise
 */
export async function POST(request) {
  if (request.headers.get("x-ingest-token") !== process.env.INGEST_TOKEN) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON body" }, { status: 400 });
  }
  const { url, themes = [], zones = [], countries = [] } = body ?? {};

  if (!url || !/^https:\/\/([a-z]+\.)?linkedin\.com\//i.test(url)) {
    return Response.json(
      { error: "A public linkedin.com post URL is required" },
      { status: 400 },
    );
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceRoleKey) {
    return Response.json(
      { error: "Missing SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY" },
      { status: 500 },
    );
  }
  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false },
  });

  const { data: existing, error: existingError } = await supabase
    .from("articles")
    .select("slug_fr")
    .eq("source_url", url)
    .maybeSingle();
  if (existingError) {
    return Response.json(
      { error: `Supabase lookup failed: ${existingError.message}` },
      { status: 500 },
    );
  }
  if (existing) {
    return Response.json({
      ok: true,
      skipped: true,
      reason: "duplicate source_url",
      slug: existing.slug_fr,
    });
  }

  try {
    const pageRes = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; AS-Biz-Dev-Ingest/1.0)",
      },
    });
    if (!pageRes.ok) {
      throw new Error(
        `Could not fetch the LinkedIn URL (HTTP ${pageRes.status})`,
      );
    }
    const html = await pageRes.text();

    const title = extractMeta(html, "og:title");
    const preview = extractMeta(html, "og:description");
    const image = extractMeta(html, "og:image");
    const publishedAt = extractMeta(html, "article:published_time");

    if (!title) {
      throw new Error(
        "Could not read a title from this URL's Open Graph tags — add it manually instead.",
      );
    }

    const slug = await uniqueSlug(supabase, slugify(title));
    // Only the source language is filled from the scrape; the other language
    // mirrors it as a starting point rather than shipping empty —
    // [INFORMATION À VALIDER PAR AS BIZ DEV]: translation not yet reviewed.
    const copy = {
      title,
      preview: preview ?? "",
      content: [{ type: "paragraph", text: preview ?? "" }],
    };

    const row = {
      source_url: url,
      status: "published",
      published_at: publishedAt ? publishedAt.slice(0, 10) : null,
      author: null,
      image: image ?? null,
      source_type: "linkedin-post",
      themes,
      zones,
      countries,
      slug_fr: slug,
      slug_en: slug,
      fr: copy,
      en: copy,
    };

    const { error: upsertError } = await supabase
      .from("articles")
      .upsert(row, { onConflict: "source_url" });
    if (upsertError) {
      throw new Error(`Supabase upsert failed: ${upsertError.message}`);
    }

    return Response.json({ ok: true, slug });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
