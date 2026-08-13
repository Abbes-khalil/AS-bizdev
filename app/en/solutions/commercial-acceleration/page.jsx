import AccelerationContent from "@/app/nos-solutions/acceleration-commerciale/_components/AccelerationContent";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { ROUTES } from "@/lib/routes";
import { breadcrumbJsonLd, organisationJsonLd } from "@/lib/seo/headTags";
import { SITE_URL } from "@/lib/constants/site";

export const generateMetadata = () => buildMetadata("acceleration", "en");

export default function AccelerationEn() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: `${SITE_URL}${ROUTES.home.en}` },
    { name: "Solutions", url: `${SITE_URL}${ROUTES.solutions.en}` },
    { name: "Commercial acceleration", url: `${SITE_URL}${ROUTES.acceleration.en}` },
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
      <AccelerationContent lang="en" />
    </>
  );
}
