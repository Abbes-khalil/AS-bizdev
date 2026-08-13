import LegalNoticeContent from "@/app/mentions-legales/_components/LegalNoticeContent";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { organisationJsonLd } from "@/lib/seo/headTags";

export const generateMetadata = () => buildMetadata("legalNotice", "en");

export default function LegalNoticeEn() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organisationJsonLd("en")),
        }}
      />
      <LegalNoticeContent lang="en" />
    </>
  );
}
