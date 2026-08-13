import SolutionsContent from "@/app/nos-solutions/_components/SolutionsContent";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { organisationJsonLd } from "@/lib/seo/headTags";

export const generateMetadata = () => buildMetadata("solutions", "fr");

export default function SolutionsFr() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organisationJsonLd("fr")),
        }}
      />
      <SolutionsContent lang="fr" />
    </>
  );
}
