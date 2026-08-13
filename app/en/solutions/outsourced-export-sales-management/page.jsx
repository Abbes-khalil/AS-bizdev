import PilotageContent from "@/app/nos-solutions/pilotage-commercial-externalise/_components/PilotageContent";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { ROUTES } from "@/lib/routes";
import { breadcrumbJsonLd, organisationJsonLd } from "@/lib/seo/headTags";
import { SITE_URL } from "@/lib/constants/site";

export const generateMetadata = () => buildMetadata("pilotage", "en");

export default function PilotageEn() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: `${SITE_URL}${ROUTES.home.en}` },
    { name: "Solutions", url: `${SITE_URL}${ROUTES.solutions.en}` },
    { name: "Outsourced export sales management", url: `${SITE_URL}${ROUTES.pilotage.en}` },
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
      <PilotageContent lang="en" />
    </>
  );
}
