import article01 from "./article-01.js";
import article02 from "./article-02.js";
import article03 from "./article-03.js";
import article04 from "./article-04.js";
import article05 from "./article-05.js";
import article06 from "./article-06.js";

/**
 * Articles & Insights (§24) — LinkedIn-sourced content republished on the
 * site. Each article lives in its own file with its French and English
 * versions side by side. To add one: copy an existing `article-XX.js`, give
 * it the next number, and add it to the list below (or use the ingestion
 * endpoint, see `api/ingest-article.js`).
 */
export const ARTICLES = [
  article01,
  article02,
  article03,
  article04,
  article05,
  article06,
];

/** Flattens the per-article files into the flat shape the listing page expects. */
const forLang = (lang) =>
  ARTICLES.filter((article) => article.status === "published").map(
    ({
      number,
      key,
      slug,
      status,
      publishedAt,
      author,
      image,
      source,
      themes,
      zones,
      countries,
      [lang]: copy,
    }) => ({
      number,
      key,
      slug,
      status,
      publishedAt,
      author,
      image,
      source,
      themes,
      zones,
      countries,
      ...copy,
    }),
  );

/** Finds an article from a slug in either language — used to resolve routes. */
export const findArticleBySlug = (slug) =>
  ARTICLES.find(
    (article) => article.slug.fr === slug || article.slug.en === slug,
  );

const news = {
  fr: {
    hero: {
      eyebrow: "Le regard AS Biz Dev",
      titleLead: "Les idées, les marchés et les",
      titleAccent: "conversations",
      titleTail: "qui comptent.",
      intro:
        "Une sélection d'articles et de publications LinkedIn d'AS Biz Dev sur le développement commercial en Afrique et au Moyen-Orient.",
    },
    selection: "Sélection — {count} articles",
    period: "2026 / Q3",
    readMore: "Lire la suite",
    label: "Actualités & Publications",
    dateToValidate: "Date à valider",
    authorToValidate: "Auteur à valider",
    sourceLabel: "Voir sur LinkedIn",
    filters: {
      all: "Tous les thèmes",
      allZones: "Toutes les zones",
    },
    articles: forLang("fr"),
  },

  en: {
    hero: {
      eyebrow: "The AS Biz Dev view",
      titleLead: "The ideas, markets and",
      titleAccent: "conversations",
      titleTail: "that matter.",
      intro:
        "A selection of AS Biz Dev's LinkedIn articles and posts on business development across Africa and the Middle East.",
    },
    selection: "Selection — {count} articles",
    period: "2026 / Q3",
    readMore: "Read more",
    label: "Articles & Insights",
    dateToValidate: "Date to be confirmed",
    authorToValidate: "Author to be confirmed",
    sourceLabel: "View on LinkedIn",
    filters: {
      all: "All themes",
      allZones: "All zones",
    },
    articles: forLang("en"),
  },
};

export default news;
