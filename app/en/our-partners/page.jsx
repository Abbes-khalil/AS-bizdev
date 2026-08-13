import PartnersContent from "@/app/nos-partenaires/_components/PartnersContent";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { organisationJsonLd } from "@/lib/seo/headTags";

export const generateMetadata = () => buildMetadata("partners", "en");

export default function PartnersEn() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organisationJsonLd("en")),
        }}
      />
      <PartnersContent lang="en" />
    </>
  );
}
