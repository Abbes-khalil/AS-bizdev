import NewsGrid from "@/components/news/NewsGrid";
import PageHero from "@/components/ui/PageHero";
import { getPublishedArticles, flattenForLang } from "@/lib/data/articles";
import { getDictionary, interpolate } from "@/lib/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { organisationJsonLd } from "@/lib/seo/headTags";

export const revalidate = 3600;

export const generateMetadata = () => buildMetadata("news", "en");

const EMPTY_MESSAGE = {
  fr: "Aucun article n'est publié pour le moment.",
  en: "No articles are published right now.",
};

/**
 * See app/news/page.jsx (the FR twin) for why content stays in
 * lib/i18n/content/news/index.js instead of being inlined here — it's
 * shared with the article detail page.
 */
// ============================================
// COMPONENT — news hub layout, leave alone unless it's a technical change
// ============================================
export default async function NewsPageEn() {
  const lang = "en";
  const t = getDictionary(lang, "news");
  const articles = await getPublishedArticles();
  const localizedArticles = articles.map((article) => flattenForLang(article, lang));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organisationJsonLd("en")),
        }}
      />

      <main>
        <PageHero
          tone="dark"
          className="max-w-4xl"
          {...t.hero}
          overlay={
            <div
              className="pointer-events-none absolute -right-40 top-0 h-[40rem] w-[40rem] rounded-full opacity-30 blur-3xl"
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
