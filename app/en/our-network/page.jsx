import NetworkContent from "@/app/notre-reseau/_components/NetworkContent";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { organisationJsonLd } from "@/lib/seo/headTags";

export const generateMetadata = () => buildMetadata("network", "en");

export default function NetworkEn() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organisationJsonLd("en")),
        }}
      />
      <NetworkContent lang="en" />
    </>
  );
}
