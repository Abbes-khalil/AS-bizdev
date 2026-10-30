import "@/styles/rich-article.css";

import RichArticleEffects from "@/components/pages/RichArticleEffects";
import { RICH_ARTICLES } from "@/lib/data/richArticles";
import { SITE_NAME, SITE_URL } from "@/lib/constants/site";

/** The validated rich layout of an editorial article, or null if it has none. */
export const richArticleFor = (article, lang) =>
  RICH_ARTICLES[article?.key]?.[lang] ?? null;

/**
 * Renders the article exactly as the preview Stéphane validated: hero,
 * "summarise with AI", "In short", table of contents, illustrated sections,
 * FAQ and closing call to action. The HTML body is generated from
 * PilotOne's source (lib/data/richArticles.js), the site's own navbar and
 * footer stay around it.
 */
export default function RichArticle({ article, lang }) {
  const rich = richArticleFor(article, lang);
  if (!rich) return null;

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: rich.headline,
    inLanguage: lang,
    datePublished: article.publishedAt,
    image: [`${SITE_URL}/news/commercial-export/commercial-export-recruter-ou-externaliser-deux-voies.webp`],
    author: {
      "@type": "Person",
      name: "Stéphane Allain",
      url: `${SITE_URL}/as-biz-dev`,
    },
    publisher: { "@type": "Organization", name: SITE_NAME, url: `${SITE_URL}/` },
    mainEntityOfPage: rich.url,
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: rich.faq.map(([name, text]) => ({
      "@type": "Question",
      name,
      acceptedAnswer: { "@type": "Answer", text },
    })),
  };

  return (
    <div className="ra" dir={rich.dir} lang={lang}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Noto+Sans+Arabic:wght@700&display=swap"
        precedence="default"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <div className="ra-prog" aria-hidden="true" />
      <div dangerouslySetInnerHTML={{ __html: rich.html }} />
      <RichArticleEffects prompt={rich.prompt} note={rich.note} />
    </div>
  );
}
