import PilotageContent from "@/app/nos-solutions/pilotage-commercial-externalise/_components/PilotageContent";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { ROUTES } from "@/lib/routes";
import { breadcrumbJsonLd, organisationJsonLd } from "@/lib/seo/headTags";
import { SITE_URL } from "@/lib/constants/site";

export const generateMetadata = () => buildMetadata("pilotage", "fr");

export default function PilotageFr() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Accueil", url: `${SITE_URL}${ROUTES.home.fr}` },
    { name: "Nos solutions", url: `${SITE_URL}${ROUTES.solutions.fr}` },
    { name: "Pilotage commercial externalisé", url: `${SITE_URL}${ROUTES.pilotage.fr}` },
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
      <PilotageContent lang="fr" />
    </>
  );
}
