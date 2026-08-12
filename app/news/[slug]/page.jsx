import { notFound, redirect } from "next/navigation";

import ArticleContent from "@/components/pages/ArticleContent";
import { getArticleBySlug } from "@/lib/data/articles";
import { articleUrl, ROUTES } from "@/lib/routes";
import { breadcrumbJsonLd, organisationJsonLd } from "@/lib/seo/headTags";
import { articleMeta } from "@/lib/seo/metadata";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/constants/site";

export const revalidate = 3600;

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
    alternates: {
      canonical: url,
      languages: {
        fr: url,
        en: `${SITE_URL}${articleUrl("en", article.slug.en ?? canonicalSlug)}`,
        "x-default": url,
      },
    },
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
      <ArticleContent article={article} lang="fr" />
    </>
  );
}
