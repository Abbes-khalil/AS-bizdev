import MarketZoneContent from "@/app/marches/_components/MarketZoneContent";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { ROUTES } from "@/lib/routes";
import { breadcrumbJsonLd, organisationJsonLd } from "@/lib/seo/headTags";
import { SITE_URL } from "@/lib/constants/site";

export const generateMetadata = () => buildMetadata("middleEast", "ar");

export default function MiddleEastAr() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "الرئيسية", url: `${SITE_URL}${ROUTES.home.ar}` },
    { name: "الأسواق", url: `${SITE_URL}${ROUTES.markets.ar}` },
    { name: "الشرق الأوسط", url: `${SITE_URL}${ROUTES.middleEast.ar}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organisationJsonLd("ar")),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <MarketZoneContent lang="ar" continent="middleEast" />
    </>
  );
}
