import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  LOGO_IMAGE,
  OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  SOCIAL,
} from "@/lib/constants/site";

/**
 * Organisation schema. Only facts the brief allows us to state: name, URL,
 * contact channel, and the two service lines. No headcount, no founding date,
 * no client count — none of that is validated (§16).
 */
export const organisationJsonLd = (lang) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}${LOGO_IMAGE}`,
  description:
    lang === "en"
      ? "Business development and outsourced export sales management for SMEs across Africa and the Middle East."
      : lang === "ar"
        ? "التطوير التجاري والإدارة التجارية الخارجية للتصدير، لصالح الشركات الصغيرة والمتوسطة في أفريقيا والشرق الأوسط."
        : "Développement commercial et pilotage commercial export externalisé pour les PME en Afrique et au Moyen-Orient.",
  // Same facts as the contact page and the legal notice (registered office).
  telephone: CONTACT_PHONE,
  email: CONTACT_EMAIL,
  address: {
    "@type": "PostalAddress",
    streetAddress: "17b Avenue René Coty",
    postalCode: "85100",
    addressLocality: "Les Sables-d'Olonne",
    addressCountry: "FR",
  },
  vatID: "FR68892945676",
  areaServed: [
    { "@type": "Place", name: "Africa" },
    { "@type": "Place", name: "Middle East" },
  ],
  sameAs: [SOCIAL.linkedin, SOCIAL.facebook],
});

/**
 * BreadcrumbList schema for pages nested more than one level deep (market
 * zone pages, solution sub-pages, articles) — surfaces the breadcrumb trail
 * in Google's result snippet instead of the raw URL. `items` is the trail
 * from home to the current page, each `{ name, url }` with `url` already
 * absolute (build it with SITE_URL + the route, same as the page's own
 * canonical/openGraph URL).
 */
export const breadcrumbJsonLd = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

/**
 * BlogPosting schema for an article rendered with the plain layout (the rich
 * layout in RichArticle.jsx emits its own Article schema). Only fields the
 * row actually carries: no invented author or date.
 * @param {import("@/lib/data/articles").Article} article
 * @param {"fr" | "en" | "ar"} lang
 * @param {string} url - absolute canonical URL of this language version
 */
export const articleJsonLd = (article, lang, url) => {
  const copy = article[lang] ?? article.fr;
  const publisher = {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: { "@type": "ImageObject", url: `${SITE_URL}${LOGO_IMAGE}` },
  };
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: copy.title.length > 110 ? `${copy.title.slice(0, 109)}…` : copy.title,
    description: copy.preview || undefined,
    inLanguage: lang,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: article.image ?? `${SITE_URL}${OG_IMAGE}`,
    datePublished: article.publishedAt ?? undefined,
    author: article.author ? { "@type": "Person", name: article.author } : publisher,
    publisher,
  };
};
