/**
 * Fully automated LinkedIn ingestion (§24) — Vercel serverless function.
 *
 * True zero-touch LinkedIn API sync isn't available without LinkedIn Partner
 * approval, so the automation lives one layer up: an n8n workflow (run on the
 * user's own infrastructure, not this repo) watches an RSS bridge on AS Biz
 * Dev's LinkedIn company page and POSTs each new post's URL here. This
 * endpoint pulls the Open Graph metadata (title, summary, image, published
 * date) LinkedIn exposes for link previews and upserts a row straight into
 * Supabase's `articles` table with `status: "published"` — no human step, no
 * deploy needed, picked up by the frontend and next build's sitemap/prerender
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

/** Appends a short numeric suffix until the slug is free, so two posts that
 * happen to share a title don't collide on the unique slug_fr/slug_en columns. */
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

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  if (req.headers["x-ingest-token"] !== process.env.INGEST_TOKEN) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  const {
    url,
    themes = [],
    zones = [],
    countries = [],
  } = typeof req.body === "string" ? JSON.parse(req.body) : (req.body ?? {});

  if (!url || !/^https:\/\/([a-z]+\.)?linkedin\.com\//i.test(url)) {
    res
      .status(400)
      .json({ error: "A public linkedin.com post URL is required" });
    return;
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceRoleKey) {
    res
      .status(500)
      .json({ error: "Missing SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY" });
    return;
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
    res
      .status(500)
      .json({ error: `Supabase lookup failed: ${existingError.message}` });
    return;
  }
  if (existing) {
    res.status(200).json({
      ok: true,
      skipped: true,
      reason: "duplicate source_url",
      slug: existing.slug_fr,
    });
    return;
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

    res.status(200).json({ ok: true, slug });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
