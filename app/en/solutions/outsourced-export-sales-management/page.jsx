import PilotageContent from "@/components/PilotageContent";
import { ROUTES } from "@/lib/routes";
import { organisationJsonLd } from "@/lib/seo/headTags";
import { SEO_META } from "@/lib/seo/metadata";
import { SITE_NAME, SITE_URL } from "@/lib/constants/site";

export function generateMetadata() {
  const { title, description } = SEO_META.pilotage.en;
  const url = `${SITE_URL}${ROUTES.pilotage.en}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        fr: `${SITE_URL}${ROUTES.pilotage.fr}`,
        en: url,
        "x-default": `${SITE_URL}${ROUTES.pilotage.fr}`,
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

export default function PilotageEn() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organisationJsonLd("en")),
        }}
      />
      <PilotageContent lang="en" />
    </>
  );
}
