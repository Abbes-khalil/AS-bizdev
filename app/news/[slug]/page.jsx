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

  const { title, description } = articleMeta(article, "fr");
  const canonicalSlug = article.slug.fr ?? slug;
  const url = `${SITE_URL}${articleUrl("fr", canonicalSlug)}`;

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
    openGraph: { title, description, url, type: "article" },
    twitter: { card: "summary_large_image", title, description },
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organisationJsonLd("fr")),
        }}
      />
      <ArticleContent article={article} lang="fr" />
    </>
  );
}
