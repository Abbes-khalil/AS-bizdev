import BecomePartnerContent from "@/components/BecomePartnerContent";
import { pathFor } from "@/lib/constants/routes";
import { organisationJsonLd } from "@/lib/seo/headTags";
import { SEO_META } from "@/lib/seo/metadata";
import { SITE_NAME, SITE_URL } from "@/lib/constants/site";

export function generateMetadata() {
  const { title, description } = SEO_META.becomePartner.fr;
  const url = `${SITE_URL}${pathFor("becomePartner", "fr")}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        fr: url,
        en: `${SITE_URL}${pathFor("becomePartner", "en")}`,
        "x-default": url,
      },
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: SITE_NAME,
      locale: "fr_FR",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

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
