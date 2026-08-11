import SolutionsContent from "@/components/SolutionsContent";
import { ROUTES } from "@/lib/routes";
import { organisationJsonLd } from "@/lib/seo/headTags";
import { SEO_META } from "@/lib/seo/metadata";
import { SITE_NAME, SITE_URL } from "@/lib/constants/site";

export function generateMetadata() {
  const { title, description } = SEO_META.solutions.en;
  const url = `${SITE_URL}${ROUTES.solutions.en}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        fr: `${SITE_URL}${ROUTES.solutions.fr}`,
        en: url,
        "x-default": `${SITE_URL}${ROUTES.solutions.fr}`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: SITE_NAME,
      locale: "en_GB",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

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
