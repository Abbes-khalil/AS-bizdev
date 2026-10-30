import { notFound, redirect } from "next/navigation";

import ArticleContent from "@/components/pages/ArticleContent";
import RichArticle, { richArticleFor } from "@/components/pages/RichArticle";
import { getArticleBySlug, getPublishedArticles } from "@/lib/data/articles";
import { articleUrl, ROUTES } from "@/lib/routes";
import { articleJsonLd, breadcrumbJsonLd, organisationJsonLd } from "@/lib/seo/headTags";
import { articleAlternates } from "@/lib/seo/articleLanguages";
import { articleMeta } from "@/lib/seo/metadata";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/constants/site";

export const revalidate = 3600;

/**
 * Pre-renders every published article's FR slug at build time. New articles
 * ingested afterwards (via app/api/ingest-article/route.js) still work —
 * Next falls back to on-demand rendering for a slug not in this list, then
 * caches it, same as any other ISR page — but this way the articles that
 * exist at build/deploy time skip that first-request render entirely.
 */
export async function generateStaticParams() {
  const articles = await getPublishedArticles();
  return articles.map((article) => ({ slug: article.slug.fr }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return {};

  const { title, description } = articleMeta(article, "fr");
  const canonicalSlug = article.slug.fr ?? slug;
  const url = `${SITE_URL}${articleUrl("fr", canonicalSlug)}`;
  const images = article.image
    ? [article.image]
    : [{ url: OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }];

  return {
    title,
    description,
    ...articleAlternates(article, "fr"),
    openGraph: { title, description, url, type: "article", images },
    twitter: { card: "summary_large_image", title, description, images },
  };
}

export default async function ArticlePageFr({ params }) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) notFound();

  const canonicalSlug = article.slug.fr ?? article.slug.en;
  if (slug !== canonicalSlug) {
    redirect(articleUrl("fr", canonicalSlug));
  }

  const breadcrumb = breadcrumbJsonLd([
    { name: "Accueil", url: `${SITE_URL}${ROUTES.home.fr}` },
    { name: "Actualités", url: `${SITE_URL}${ROUTES.news.fr}` },
    { name: (article.fr ?? article.en).title, url: `${SITE_URL}${articleUrl("fr", canonicalSlug)}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organisationJsonLd("fr")),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      {!richArticleFor(article, "fr") && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              articleJsonLd(article, "fr", `${SITE_URL}${articleUrl("fr", canonicalSlug)}`),
            ),
          }}
        />
      )}
      {richArticleFor(article, "fr") ? (
        <RichArticle article={article} lang="fr" />
      ) : (
        <ArticleContent article={article} lang="fr" />
      )}
    </>
  );
}
