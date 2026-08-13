import { supabase } from "@/lib/supabase";

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
    const full = raw.includes("//") ? raw.slice(raw.indexOf("//") + 2) : raw;
    const [title, ...body] = full.trim().split(/\n{2,}/).filter(Boolean);
    return {
      title: title ?? "",
      preview: body[0] ?? "",
      content: body.map((text) => ({ type: "paragraph", text })),
    };
  }

  return {
    title: raw.title ?? "",
    preview: raw.preview ?? "",
    content: Array.isArray(raw.content) ? raw.content : [],
  };
};

/**
 * Converts a Supabase `articles` row into the bilingual shape pages expect.
 * @param {Record<string, any>} row
 * @returns {Article}
 */
const mapArticleRow = (row) => ({
  key: row.slug_fr,
  slug: { fr: row.slug_fr, en: row.slug_en },
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
});

/**
 * Flattens an article's localized copy to the top level, matching the old `forLang` shape.
 * @param {Article} article
 * @param {"fr" | "en"} lang
 * @returns {Omit<Article, "fr" | "en"> & LocalizedArticleCopy}
 */
export const flattenForLang = (article, lang) => {
  const { fr, en, ...rest } = article;
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
  return data.map(mapArticleRow);
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
