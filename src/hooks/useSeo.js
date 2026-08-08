import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { normalise } from "../constants/routes";
import { useLang } from "../i18n/LanguageProvider";
import { headTags, organisationJsonLd } from "../seo/headTags";
import { SEO_META } from "../seo/metadata";

/** Marks the nodes this hook owns, so a navigation can replace exactly them. */
const MANAGED = "data-seo";

const applyTags = (tags) => {
  document.head
    .querySelectorAll(`[${MANAGED}]`)
    .forEach((node) => node.remove());

  for (const { tag, attrs, text } of tags) {
    if (tag === "title") {
      document.title = text;
      continue;
    }

    const element = document.createElement(tag);
    Object.entries(attrs).forEach(([name, value]) =>
      element.setAttribute(name, value),
    );
    element.setAttribute(MANAGED, "");
    document.head.appendChild(element);
  }
};

/**
 * Keeps the document head in sync with the current page.
 *
 * Static files produced by the prerenderer already carry these tags, so a
 * crawler sees them without running any JavaScript; this hook exists for
 * client-side navigation, where the URL changes but the head would not.
 *
 * @param routeKey key from `SEO_META`
 * @param override `{ title, description }` for data-driven pages (countries)
 */
export default function useSeo(routeKey, override) {
  const { pathname } = useLocation();
  const { lang, alternates } = useLang();

  const title = override?.title;
  const description = override?.description;

  useEffect(() => {
    const fallback = SEO_META[routeKey]?.[lang] ?? SEO_META.home[lang];

    applyTags(
      headTags({
        title: title ?? fallback.title,
        description: description ?? fallback.description,
        path: normalise(pathname),
        alternates,
        lang,
      }),
    );

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute(MANAGED, "");
    script.textContent = JSON.stringify(organisationJsonLd(lang));
    document.head.appendChild(script);
  }, [routeKey, lang, pathname, alternates, title, description]);
}
