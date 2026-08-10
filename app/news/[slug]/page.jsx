import Article from "../../../src/views/Article";
import { pathFor } from "../../../src/constants/routes";
import { organisationJsonLd } from "../../../src/seo/headTags";
import { SEO_META } from "../../../src/seo/metadata";
import { SITE_NAME, SITE_URL } from "../../../src/constants/site";

/**
 * Per-article title/description would need a server-side Supabase fetch here
 * (out of scope for this phase — Supabase/env wiring is untouched), so this
 * dynamic route falls back to the same static copy as the news list. The
 * client component still updates `document.title` once the article loads.
 */
export function generateMetadata() {
  const { title, description } = SEO_META.news.fr;
  const url = `${SITE_URL}${pathFor("news", "fr")}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        fr: url,
        en: `${SITE_URL}${pathFor("news", "en")}`,
        "x-default": url,
      },
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: SITE_NAME,
      locale: "fr_FR",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function ArticleFr() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organisationJsonLd("fr")),
        }}
      />
      <Article />
    </>
  );
}
