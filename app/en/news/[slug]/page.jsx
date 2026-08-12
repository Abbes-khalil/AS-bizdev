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

  const { title, description } = articleMeta(article, "en");
  const canonicalSlug = article.slug.en ?? slug;
  const url = `${SITE_URL}${articleUrl("en", canonicalSlug)}`;
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
        en: url,
        "x-default": `${SITE_URL}${articleUrl("fr", article.slug.fr ?? canonicalSlug)}`,
      },
    },
    openGraph: { title, description, url, type: "article", images },
    twitter: { card: "summary_large_image", title, description, images },
  };
}

export default async function ArticlePageEn({ params }) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) notFound();

  const canonicalSlug = article.slug.en ?? article.slug.fr;
  if (slug !== canonicalSlug) {
    redirect(articleUrl("en", canonicalSlug));
  }

  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: `${SITE_URL}${ROUTES.home.en}` },
    { name: "News", url: `${SITE_URL}${ROUTES.news.en}` },
    { name: (article.en ?? article.fr).title, url: `${SITE_URL}${articleUrl("en", canonicalSlug)}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organisationJsonLd("en")),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <ArticleContent article={article} lang="en" />
    </>
  );
}
