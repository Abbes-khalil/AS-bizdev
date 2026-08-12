import article01 from "./article-01.js";
import article02 from "./article-02.js";
import article03 from "./article-03.js";
import article04 from "./article-04.js";
import article05 from "./article-05.js";
import article06 from "./article-06.js";

/**
 * Articles & Insights (§24) — legacy static content, kept only as historical
 * backup and as the source for `scripts/migrate-articles-to-supabase.mjs`.
 * The live site reads articles from Supabase (see
 * docs/ARTICLES_SUPABASE.md) — nothing here is imported by `News.jsx` or
 * `Article.jsx` anymore.
 */
export const ARTICLES = [
  article01,
  article02,
  article03,
  article04,
  article05,
  article06,
];

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
    close: "Fermer",
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
    close: "Close",
  },
};

export default news;
