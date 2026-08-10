import { Suspense } from "react";

import MarketZone from "../../../src/views/MarketZone";
import PageLoader from "../../../src/components/PageLoader";
import { pathFor } from "../../../src/constants/routes";
import { organisationJsonLd } from "../../../src/seo/headTags";
import { SEO_META } from "../../../src/seo/metadata";
import { SITE_NAME, SITE_URL } from "../../../src/constants/site";

export function generateMetadata() {
  const { title, description } = SEO_META.africa.fr;
  const url = `${SITE_URL}${pathFor("africa", "fr")}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        fr: url,
        en: `${SITE_URL}${pathFor("africa", "en")}`,
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

export default function AfricaFr() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organisationJsonLd("fr")),
        }}
      />
      <Suspense fallback={<PageLoader />}>
        <MarketZone continent="africa" />
      </Suspense>
    </>
  );
}
