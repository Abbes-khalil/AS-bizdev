import BecomePartnerContent from "@/app/devenir-partenaire/_components/BecomePartnerContent";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { organisationJsonLd } from "@/lib/seo/headTags";

export const generateMetadata = () => buildMetadata("becomePartner", "fr");

export default function BecomePartnerFr() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organisationJsonLd("fr")),
        }}
      />
      <BecomePartnerContent lang="fr" />
    </>
  );
}
