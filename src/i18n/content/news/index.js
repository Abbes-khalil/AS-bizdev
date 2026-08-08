import article01 from "./article-01.js";
import article02 from "./article-02.js";
import article03 from "./article-03.js";
import article04 from "./article-04.js";
import article05 from "./article-05.js";
import article06 from "./article-06.js";

/**
 * News page copy.
 *
 * Each article lives in its own file with its French and English versions
 * side by side. To add one: copy an existing `article-XX.js`, give it the next
 * number, and add it to the list below.
 */
const ARTICLES = [
  article01,
  article02,
  article03,
  article04,
  article05,
  article06,
];

/** Flattens the per-article files into the flat shape the page expects. */
const forLang = (lang) =>
  ARTICLES.map(({ number, [lang]: copy }) => ({ number, ...copy }));

const news = {
  fr: {
    hero: {
      eyebrow: "Le regard AS Biz Dev",
      titleLead: "Les idées, les marchés et les",
      titleAccent: "conversations",
      titleTail: "qui comptent.",
      intro:
        "Une sélection de perspectives pour mieux comprendre les dynamiques de développement en Afrique et au Moyen-Orient.",
    },
    selection: "Sélection — {count} articles",
    period: "2026 / Q3",
    readMore: "Lire la suite",
    label: "News / asbizdev",
    articles: forLang("fr"),
  },

  en: {
    hero: {
      eyebrow: "The AS Biz Dev view",
      titleLead: "The ideas, markets and",
      titleAccent: "conversations",
      titleTail: "that matter.",
      intro:
        "A selection of perspectives to better understand the growth dynamics across Africa and the Middle East.",
    },
    selection: "Selection — {count} articles",
    period: "2026 / Q3",
    readMore: "Read more",
    label: "News / asbizdev",
    articles: forLang("en"),
  },
};

export default news;
