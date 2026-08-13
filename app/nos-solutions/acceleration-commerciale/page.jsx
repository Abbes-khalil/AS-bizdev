import AccelerationContent from "@/app/nos-solutions/acceleration-commerciale/_components/AccelerationContent";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { ROUTES } from "@/lib/routes";
import { breadcrumbJsonLd, organisationJsonLd } from "@/lib/seo/headTags";
import { SITE_URL } from "@/lib/constants/site";

export const generateMetadata = () => buildMetadata("acceleration", "fr");

export default function AccelerationFr() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Accueil", url: `${SITE_URL}${ROUTES.home.fr}` },
    { name: "Nos solutions", url: `${SITE_URL}${ROUTES.solutions.fr}` },
    { name: "Accélération commerciale", url: `${SITE_URL}${ROUTES.acceleration.fr}` },
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
      <AccelerationContent lang="fr" />
    </>
  );
}
