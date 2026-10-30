import { supabase } from "@/lib/supabase";
import { EDITORIAL_ARTICLES } from "@/lib/data/editorialArticles";
import { plainLetters } from "@/lib/text/plainLetters";

/**
 * @typedef {{ type: "paragraph" | "heading" | "subheading" | "highlight", text: string } | { type: "list", items: string[] }} ContentBlock
 * @typedef {{ title: string, preview: string, content: ContentBlock[] }} LocalizedArticleCopy
 * @typedef {Object} Article
 * @property {string} key - stable id, currently the French slug
 * @property {{ fr: string, en: string }} slug
 * @property {"draft" | "published" | "archived"} status
 * @property {string | null} publishedAt
 * @property {string | null} author
 * @property {string | null} image
 * @property {{ type: string | null, url: string | null }} source
 * @property {string[]} themes
 * @property {string[]} zones
 * @property {string[]} countries
 * @property {LocalizedArticleCopy} fr
 * @property {LocalizedArticleCopy} en
 * @property {LocalizedArticleCopy} ar
 */

/**
 * Normalizes one language's copy into `{ title, preview, content }`.
 *
 * The documented shape (see docs/ARTICLES_SUPABASE.md) is a jsonb object.
 * In practice, posts written by the n8n LinkedIn pipeline land as a raw
 * string instead: `"<title>...//<title>\n\n<body paragraphs>\n\n#tags"`.
 * The part before `//` is a truncated duplicate of the title, so everything
 * after it is the real post; blank-line-separated chunks become paragraphs.
 *
 * @param {string | Partial<LocalizedArticleCopy> | null | undefined} raw
 * @returns {LocalizedArticleCopy}
 */
const normalizeCopy = (raw) => {
  if (!raw) return { title: "", preview: "", content: [] };

  if (typeof raw === "string") {
    const text = plainLetters(raw);
    const full = text.includes("//") ? text.slice(text.indexOf("//") + 2) : text;
    const [title, ...body] = full.trim().split(/\n{2,}/).filter(Boolean);
    return {
      title: title ?? "",
      preview: body[0] ?? "",
      content: body.map((text) => ({ type: "paragraph", text })),
    };
  }

  return {
    title: plainLetters(raw.title ?? ""),
    preview: plainLetters(raw.preview ?? ""),
    content: Array.isArray(raw.content)
      ? raw.content.map((block) =>
          block.type === "list"
            ? { ...block, items: (block.items ?? []).map(plainLetters) }
            : { ...block, text: plainLetters(block.text) },
        )
      : [],
  };
};

/**
 * Converts a Supabase `articles` row into the bilingual shape pages expect.
 * @param {Record<string, any>} row
 * @returns {Article}
 */
const mapArticleRow = (row) => ({
  key: row.slug_fr,
  // `slug_ar` doesn't exist in the Supabase schema yet (§ARTICLES_SUPABASE.md)
  // — falls back to the French slug so /ar/news/:slug resolves the same
  // article until a real Arabic slug is added.
  slug: { fr: row.slug_fr, en: row.slug_en, ar: row.slug_ar ?? row.slug_fr },
  status: row.status,
  publishedAt: row.published_at,
  author: row.author,
  image: row.image,
  source: { type: row.source_type, url: row.source_url },
  themes: row.themes ?? [],
  zones: row.zones ?? [],
  countries: row.countries ?? [],
  fr: normalizeCopy(row.fr),
  en: normalizeCopy(row.en),
  // Same story for the body: no `ar` column yet, so Arabic article pages
  // render the French copy until AS Biz Dev supplies translated content.
  ar: row.ar ? normalizeCopy(row.ar) : null,
});

/**
 * Flattens an article's localized copy to the top level, matching the old `forLang` shape.
 * @param {Article} article
 * @param {"fr" | "en" | "ar"} lang
 * @returns {Omit<Article, "fr" | "en" | "ar"> & LocalizedArticleCopy}
 */
export const flattenForLang = (article, lang) => {
  const { fr, en, ar, ...rest } = article;
  return { ...rest, ...(article[lang] ?? fr) };
};

/**
 * All published articles, newest first.
 * @returns {Promise<Article[]>}
 * @throws if Supabase isn't configured or the query fails
 */
export async function getPublishedArticles() {
  if (!supabase) throw new Error("Supabase is not configured.");

  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .eq("status", "published")
    .order("published_at", { ascending: false, nullsFirst: false });

  if (error) throw error;
  // Newest first, undated last; sort is stable so Supabase order is kept on ties.
  return [...EDITORIAL_ARTICLES, ...data.map(mapArticleRow)].sort(
    (a, b) =>
      (b.publishedAt ? 1 : 0) - (a.publishedAt ? 1 : 0) ||
      (b.publishedAt ?? "").localeCompare(a.publishedAt ?? ""),
  );
}

/**
 * A single published article by its French or English slug.
 * Returns `null` if not found — RLS already hides unpublished rows from the
 * anon client, so `null` covers both "unknown slug" and "not published".
 *
 * @param {string} slug
 * @returns {Promise<Article | null>}
 * @throws if Supabase isn't configured or the query fails
 */
export async function getArticleBySlug(slug) {
  const editorial = EDITORIAL_ARTICLES.find((article) =>
    Object.values(article.slug).includes(slug),
  );
  if (editorial) return editorial;
  if (!supabase) throw new Error("Supabase is not configured.");

  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .eq("status", "published")
    .or(`slug_fr.eq.${slug},slug_en.eq.${slug}`)
    .maybeSingle();

  if (error) throw error;
  return data ? mapArticleRow(data) : null;
}
