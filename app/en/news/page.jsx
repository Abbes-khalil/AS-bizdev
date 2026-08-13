import NewsContent from "@/components/pages/NewsContent";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { organisationJsonLd } from "@/lib/seo/headTags";

export const revalidate = 3600;

export const generateMetadata = () => buildMetadata("news", "en");

export default function NewsPageEn() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organisationJsonLd("en")),
        }}
      />
      <NewsContent lang="en" />
    </>
  );
}
