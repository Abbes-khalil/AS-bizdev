import { notFound, redirect } from "next/navigation";

import ArticleContent from "@/components/pages/ArticleContent";
import { getArticleBySlug } from "@/lib/data/articles";
import { articleUrl } from "@/lib/routes";
import { organisationJsonLd } from "@/lib/seo/headTags";
import { articleMeta } from "@/lib/seo/metadata";
import { SITE_URL } from "@/lib/constants/site";

export const revalidate = 3600;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return {};

  const { title, description } = articleMeta(article, "en");
  const canonicalSlug = article.slug.en ?? slug;
  const url = `${SITE_URL}${articleUrl("en", canonicalSlug)}`;

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
    openGraph: { title, description, url, type: "article" },
    twitter: { card: "summary_large_image", title, description },
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organisationJsonLd("en")),
        }}
      />
      <ArticleContent article={article} lang="en" />
    </>
  );
}
