import News from "../../../src/views/News";
import { pathFor } from "../../../src/constants/routes";
import { organisationJsonLd } from "../../../src/seo/headTags";
import { SEO_META } from "../../../src/seo/metadata";
import { SITE_NAME, SITE_URL } from "../../../src/constants/site";

export function generateMetadata() {
  const { title, description } = SEO_META.news.en;
  const url = `${SITE_URL}${pathFor("news", "en")}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        fr: `${SITE_URL}${pathFor("news", "fr")}`,
        en: url,
        "x-default": `${SITE_URL}${pathFor("news", "fr")}`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: SITE_NAME,
      locale: "en_GB",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function NewsEn() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organisationJsonLd("en")),
        }}
      />
      <News />
    </>
  );
}
