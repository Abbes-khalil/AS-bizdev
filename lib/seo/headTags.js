import { SITE_NAME, SITE_URL } from "@/lib/constants/site";

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
});
