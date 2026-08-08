import { supabase } from "../lib/supabase";

/** Converts a Supabase `articles` row into the bilingual shape pages expect. */
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
  fr: row.fr,
  en: row.en,
});

/** Flattens an article's localized copy to the top level, matching the old `forLang` shape. */
export const flattenForLang = (article, lang) => {
  const { fr, en, ...rest } = article;
  return { ...rest, ...(article[lang] ?? fr) };
};

/** All published articles, newest first. */
export async function getPublishedArticles() {
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
 */
export async function getArticleBySlug(slug) {
  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .eq("status", "published")
    .or(`slug_fr.eq.${slug},slug_en.eq.${slug}`)
    .maybeSingle();

  if (error) throw error;
  return data ? mapArticleRow(data) : null;
}
