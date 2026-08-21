import { notFound, redirect } from "next/navigation";

import ArticleContent from "@/components/pages/ArticleContent";
import { getArticleBySlug, getPublishedArticles } from "@/lib/data/articles";
import { articleUrl, ROUTES } from "@/lib/routes";
import { breadcrumbJsonLd, organisationJsonLd } from "@/lib/seo/headTags";
import { articleMeta } from "@/lib/seo/metadata";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/constants/site";

export const revalidate = 3600;

/**
 * Pre-renders every published article's AR slug at build time. There is no
 * `slug_ar` column in Supabase yet, so `article.slug.ar` currently falls
 * back to the French slug (see `lib/data/articles.js`) — this route already
 * works once a real Arabic slug is added, no code change needed then.
 */
export async function generateStaticParams() {
  const articles = await getPublishedArticles();
  return articles.map((article) => ({ slug: article.slug.ar ?? article.slug.fr }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return {};

  const { title, description } = articleMeta(article, "ar");
  const canonicalSlug = article.slug.ar ?? slug;
  const url = `${SITE_URL}${articleUrl("ar", canonicalSlug)}`;
  const images = article.image
    ? [article.image]
    : [{ url: OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }];

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        fr: `${SITE_URL}${articleUrl("fr", article.slug.fr ?? canonicalSlug)}`,
        en: `${SITE_URL}${articleUrl("en", article.slug.en ?? article.slug.fr ?? canonicalSlug)}`,
        ar: url,
        "x-default": `${SITE_URL}${articleUrl("fr", article.slug.fr ?? canonicalSlug)}`,
      },
    },
    openGraph: { title, description, url, type: "article", images },
    twitter: { card: "summary_large_image", title, description, images },
  };
}

export default async function ArticlePageAr({ params }) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) notFound();

  const canonicalSlug = article.slug.ar ?? article.slug.fr;
  if (slug !== canonicalSlug) {
    redirect(articleUrl("ar", canonicalSlug));
  }

  const breadcrumb = breadcrumbJsonLd([
    { name: "الرئيسية", url: `${SITE_URL}${ROUTES.home.ar}` },
    { name: "الأخبار", url: `${SITE_URL}${ROUTES.news.ar}` },
    { name: (article.ar ?? article.fr).title, url: `${SITE_URL}${articleUrl("ar", canonicalSlug)}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organisationJsonLd("ar")),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <ArticleContent article={article} lang="ar" />
    </>
  );
}
