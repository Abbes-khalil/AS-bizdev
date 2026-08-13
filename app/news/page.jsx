import NewsContent from "@/components/pages/NewsContent";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { organisationJsonLd } from "@/lib/seo/headTags";

export const revalidate = 3600;

export const generateMetadata = () => buildMetadata("news", "fr");

export default function NewsPageFr() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organisationJsonLd("fr")),
        }}
      />
      <NewsContent lang="fr" />
    </>
  );
}
