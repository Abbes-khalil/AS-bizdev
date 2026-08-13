import BecomePartnerContent from "@/app/devenir-partenaire/_components/BecomePartnerContent";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { organisationJsonLd } from "@/lib/seo/headTags";

export const generateMetadata = () => buildMetadata("becomePartner", "en");

export default function BecomePartnerEn() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organisationJsonLd("en")),
        }}
      />
      <BecomePartnerContent lang="en" />
    </>
  );
}
