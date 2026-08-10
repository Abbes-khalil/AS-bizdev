import NewsContent from "@/components/NewsContent";
import { pathFor } from "@/lib/constants/routes";
import { organisationJsonLd } from "@/lib/seo/headTags";
import { SEO_META } from "@/lib/seo/metadata";
import { SITE_NAME, SITE_URL } from "@/lib/constants/site";

export const revalidate = 3600;

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

export default function NewsPageFr() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organisationJsonLd("fr")),
        }}
      />
      <NewsContent lang="fr" />
    </>
  );
}
