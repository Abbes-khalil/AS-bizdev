import { SITE_NAME, SITE_URL, SOCIAL } from "@/lib/constants/site";

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
  description:
    lang === "en"
      ? "Business development and outsourced export sales management for SMEs across Africa and the Middle East."
      : "Développement commercial et pilotage commercial export externalisé pour les PME en Afrique et au Moyen-Orient.",
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
