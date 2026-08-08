import { LANGS } from "../constants/routes";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "../constants/site";

const absolute = (path) => `${SITE_URL}${path === "/" ? "/" : path}`;

const OG_LOCALE = { fr: "fr_FR", en: "en_GB" };

/**
 * Head tags for one page, as descriptors rather than markup.
 *
 * Two consumers share this single definition: the build-time prerenderer,
 * which serialises them into each static HTML file, and `useSeo`, which
 * applies them to the DOM on client-side navigation. Keeping one builder is
 * what stops the crawled head and the browsed head from drifting apart.
 */
export const headTags = ({ title, description, path, alternates, lang }) => {
  const url = absolute(path);

  const tags = [
    { tag: "title", text: title },
    { tag: "meta", attrs: { name: "description", content: description } },
    { tag: "link", attrs: { rel: "canonical", href: url } },

    { tag: "meta", attrs: { property: "og:title", content: title } },
    { tag: "meta", attrs: { property: "og:description", content: description } },
    { tag: "meta", attrs: { property: "og:url", content: url } },
    { tag: "meta", attrs: { property: "og:type", content: "website" } },
    { tag: "meta", attrs: { property: "og:site_name", content: SITE_NAME } },
    { tag: "meta", attrs: { property: "og:locale", content: OG_LOCALE[lang] } },
    { tag: "meta", attrs: { property: "og:image", content: absolute(OG_IMAGE) } },

    { tag: "meta", attrs: { name: "twitter:card", content: "summary_large_image" } },
    { tag: "meta", attrs: { name: "twitter:title", content: title } },
    { tag: "meta", attrs: { name: "twitter:description", content: description } },
  ];

  for (const code of LANGS) {
    if (!alternates?.[code]) continue;
    tags.push({
      tag: "link",
      attrs: {
        rel: "alternate",
        hreflang: code,
        href: absolute(alternates[code]),
      },
    });
  }

  if (alternates?.fr) {
    tags.push({
      tag: "link",
      attrs: {
        rel: "alternate",
        hreflang: "x-default",
        href: absolute(alternates.fr),
      },
    });
  }

  return tags;
};

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
