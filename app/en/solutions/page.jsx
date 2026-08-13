import SolutionsContent from "@/app/nos-solutions/_components/SolutionsContent";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { organisationJsonLd } from "@/lib/seo/headTags";

export const generateMetadata = () => buildMetadata("solutions", "en");

export default function SolutionsEn() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organisationJsonLd("en")),
        }}
      />
      <SolutionsContent lang="en" />
    </>
  );
}
