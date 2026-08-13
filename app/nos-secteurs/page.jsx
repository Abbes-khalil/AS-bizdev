import SectorsContent from "@/app/nos-secteurs/_components/SectorsContent";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { organisationJsonLd } from "@/lib/seo/headTags";

export const generateMetadata = () => buildMetadata("sectors", "fr");

export default function SectorsFr() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organisationJsonLd("fr")),
        }}
      />
      <SectorsContent lang="fr" />
    </>
  );
}
