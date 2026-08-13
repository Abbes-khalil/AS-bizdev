import MarketZoneContent from "@/app/marches/_components/MarketZoneContent";
import { ROUTES } from "@/lib/routes";
import { breadcrumbJsonLd, organisationJsonLd } from "@/lib/seo/headTags";
import { SEO_META } from "@/lib/seo/metadata";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/constants/site";

export function generateMetadata() {
  const { title, description } = SEO_META.africa.fr;
  const url = `${SITE_URL}${ROUTES.africa.fr}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        fr: url,
        en: `${SITE_URL}${ROUTES.africa.en}`,
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
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE],
    },
  };
}

export default function AfricaFr() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Accueil", url: `${SITE_URL}${ROUTES.home.fr}` },
    { name: "Marchés", url: `${SITE_URL}${ROUTES.markets.fr}` },
    { name: "Afrique", url: `${SITE_URL}${ROUTES.africa.fr}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organisationJsonLd("fr")),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <MarketZoneContent lang="fr" continent="africa" />
    </>
  );
}
