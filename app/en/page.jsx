import Home from "../../src/views/Home";
import { pathFor } from "../../src/constants/routes";
import { organisationJsonLd } from "../../src/seo/headTags";
import { SEO_META } from "../../src/seo/metadata";
import { SITE_NAME, SITE_URL } from "../../src/constants/site";

export function generateMetadata() {
  const { title, description } = SEO_META.home.en;
  const url = `${SITE_URL}${pathFor("home", "en")}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        fr: `${SITE_URL}${pathFor("home", "fr")}`,
        en: url,
        "x-default": `${SITE_URL}${pathFor("home", "fr")}`,
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

export default function HomeEn() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organisationJsonLd("en")),
        }}
      />
      <Home />
    </>
  );
}
