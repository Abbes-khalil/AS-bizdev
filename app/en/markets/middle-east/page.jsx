import { Suspense } from "react";

import MarketZone from "../../../../src/views/MarketZone";
import PageLoader from "../../../../src/components/PageLoader";
import { pathFor } from "../../../../src/constants/routes";
import { organisationJsonLd } from "../../../../src/seo/headTags";
import { SEO_META } from "../../../../src/seo/metadata";
import { SITE_NAME, SITE_URL } from "../../../../src/constants/site";

export function generateMetadata() {
  const { title, description } = SEO_META.middleEast.en;
  const url = `${SITE_URL}${pathFor("middleEast", "en")}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        fr: `${SITE_URL}${pathFor("middleEast", "fr")}`,
        en: url,
        "x-default": `${SITE_URL}${pathFor("middleEast", "fr")}`,
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

export default function MiddleEastEn() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organisationJsonLd("en")),
        }}
      />
      <Suspense fallback={<PageLoader />}>
        <MarketZone continent="middleEast" />
      </Suspense>
    </>
  );
}
