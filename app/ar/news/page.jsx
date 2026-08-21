import NewsGrid from "@/components/news/NewsGrid";
import PageHero from "@/components/ui/PageHero";
import { getPublishedArticles, flattenForLang } from "@/lib/data/articles";
import { getDictionary, interpolate } from "@/lib/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { organisationJsonLd } from "@/lib/seo/headTags";

export const revalidate = 3600;

export const generateMetadata = () => buildMetadata("news", "ar");

const EMPTY_MESSAGE = {
  fr: "Aucun article n'est publié pour le moment.",
  en: "No articles are published right now.",
  ar: "لا توجد مقالات منشورة حالياً.",
};

/**
 * Content lives in `lib/i18n/content/news/index.js`, kept separate on
 * purpose: this "news" dictionary is shared with the article detail page
 * (`components/pages/ArticleContent.jsx`, the `/ar/news/[slug]` route), not
 * page-specific. Articles themselves are fetched live from Supabase — see
 * `docs/ARTICLES_SUPABASE.md` — never from a local content file. There is no
 * `ar` column in Supabase yet, so Arabic article bodies fall back to their
 * French copy until AS Biz Dev supplies translated content (see
 * `lib/data/articles.js`).
 */
// ============================================
// المكوّن — تخطيط صفحة /ar/news، لا تُعدَّل إلا لسبب تقني
// ============================================
export default async function NewsPageAr() {
  const lang = "ar";
  const t = getDictionary(lang, "news");
  const articles = await getPublishedArticles();
  const localizedArticles = articles.map((article) => flattenForLang(article, lang));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organisationJsonLd("ar")),
        }}
      />

      <main>
        <PageHero
          tone="dark"
          className="max-w-4xl"
          {...t.hero}
          overlay={
            <div
              className="pointer-events-none absolute -end-40 top-0 h-[40rem] w-[40rem] rounded-full opacity-30 blur-3xl"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(255,106,0,0.3), transparent 70%)",
              }}
              aria-hidden="true"
            />
          }
        />

        <section className="bg-white py-12 lg:py-20">
          <div className="container-x">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4 border-b border-gray-200 pb-6">
              <p className="eyebrow text-orange">
                {interpolate(t.selection, {
                  count: localizedArticles.length.toString().padStart(2, "0"),
                })}
              </p>
              <p className="font-display text-[0.7rem] font-medium uppercase tracking-widest text-gray-400">
                {t.period}
              </p>
            </div>

            {localizedArticles.length === 0 ? (
              <p className="py-16 text-center text-[0.95rem] text-gray-600">
                {EMPTY_MESSAGE[lang] ?? EMPTY_MESSAGE.fr}
              </p>
            ) : (
              <NewsGrid articles={localizedArticles} lang={lang} t={t} />
            )}
          </div>
        </section>
      </main>
    </>
  );
}
