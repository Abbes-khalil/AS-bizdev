import { ROUTES } from "@/lib/routes";
import { SEO_META } from "@/lib/seo/metadata";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/constants/site";

const LOCALE = { fr: "fr_FR", en: "en_GB" };

/**
 * Builds the `generateMetadata()` return value shared by every static page:
 * title, description, canonical, hreflang alternates, OpenGraph and Twitter
 * card — sourced from `SEO_META[routeKey][lang]` and `ROUTES[routeKey]`,
 * which every static route key is present in identically.
 *
 * French is always the `x-default` (and the FR page's own canonical), same
 * as every hand-written generateMetadata() this replaces.
 *
 * @param {keyof typeof ROUTES} routeKey - a key of both `ROUTES` and `SEO_META`
 * @param {"fr" | "en"} lang
 * @returns {import("next").Metadata}
 */
export const buildMetadata = (routeKey, lang) => {
  const { title, description } = SEO_META[routeKey][lang];
  const route = ROUTES[routeKey];
  const url = `${SITE_URL}${route[lang]}`;
  const frUrl = `${SITE_URL}${route.fr}`;
  const enUrl = `${SITE_URL}${route.en}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        fr: frUrl,
        en: enUrl,
        "x-default": frUrl,
      },
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: SITE_NAME,
      locale: LOCALE[lang],
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE],
    },
  };
};
