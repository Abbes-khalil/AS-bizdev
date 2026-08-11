import PilotageContent from "@/components/PilotageContent";
import { ROUTES } from "@/lib/routes";
import { organisationJsonLd } from "@/lib/seo/headTags";
import { SEO_META } from "@/lib/seo/metadata";
import { SITE_NAME, SITE_URL } from "@/lib/constants/site";

export function generateMetadata() {
  const { title, description } = SEO_META.pilotage.fr;
  const url = `${SITE_URL}${ROUTES.pilotage.fr}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        fr: url,
        en: `${SITE_URL}${ROUTES.pilotage.en}`,
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

export default function PilotageFr() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organisationJsonLd("fr")),
        }}
      />
      <PilotageContent lang="fr" />
    </>
  );
}
