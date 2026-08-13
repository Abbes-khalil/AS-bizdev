import MarketZoneContent from "@/app/marches/_components/MarketZoneContent";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { ROUTES } from "@/lib/routes";
import { breadcrumbJsonLd, organisationJsonLd } from "@/lib/seo/headTags";
import { SITE_URL } from "@/lib/constants/site";

export const generateMetadata = () => buildMetadata("middleEast", "fr");

export default function MiddleEastFr() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Accueil", url: `${SITE_URL}${ROUTES.home.fr}` },
    { name: "Marchés", url: `${SITE_URL}${ROUTES.markets.fr}` },
    { name: "Moyen-Orient", url: `${SITE_URL}${ROUTES.middleEast.fr}` },
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
      <MarketZoneContent lang="fr" continent="middleEast" />
    </>
  );
}
