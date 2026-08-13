import MarketZoneContent from "@/app/marches/_components/MarketZoneContent";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { ROUTES } from "@/lib/routes";
import { breadcrumbJsonLd, organisationJsonLd } from "@/lib/seo/headTags";
import { SITE_URL } from "@/lib/constants/site";

export const generateMetadata = () => buildMetadata("middleEast", "en");

export default function MiddleEastEn() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: `${SITE_URL}${ROUTES.home.en}` },
    { name: "Markets", url: `${SITE_URL}${ROUTES.markets.en}` },
    { name: "Middle East", url: `${SITE_URL}${ROUTES.middleEast.en}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organisationJsonLd("en")),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <MarketZoneContent lang="en" continent="middleEast" />
    </>
  );
}
