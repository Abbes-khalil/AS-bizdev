import { Navigate, useParams } from "react-router-dom";

import ContentBlock from "../components/ContentBlock";
import ExternalLink from "../components/ExternalLink";
import PageHero from "../components/PageHero";
import PageLoader from "../components/PageLoader";
import RouteLink from "../components/RouteLink";
import Section from "../components/Section";
import { pathFor } from "../constants/routes";
import { themeLabel, zoneLabel } from "../i18n/content/news/taxonomy";
import useArticle from "../hooks/useArticle";
import useSeo from "../hooks/useSeo";
import { articleMeta } from "../seo/metadata";
import { useLang } from "../i18n/LanguageProvider";
import { useT } from "../i18n";

const Badge = ({ children }) => (
  <span className="rounded-full border border-gray-200 px-3 py-1 text-[0.8rem] font-medium text-gray-600">
    {children}
  </span>
);

/**
 * Article detail page (§24). Data-driven from Supabase — see
 * docs/ARTICLES_SUPABASE.md. Fields AS Biz Dev hasn't supplied yet (date,
 * author, image) show placeholder copy rather than invented values.
 */
export default function Article() {
  const { slug } = useParams();
  const { lang } = useLang();
  const t = useT("news");

  const { article, loading, error } = useArticle(slug);
  const meta = article ? articleMeta(article, lang) : undefined;

  useSeo("news", meta);

  if (loading) return <PageLoader />;

  if (error || !article) {
    return <Navigate to={pathFor("news", lang)} replace />;
  }

  const canonicalSlug = article.slug[lang] ?? article.slug.fr;
  if (slug !== canonicalSlug) {
    return (
      <Navigate to={pathFor("article", lang, { slug: canonicalSlug })} replace />
    );
  }

  const content = article[lang] ?? article.fr;
  const dateLabel = article.publishedAt ?? t.dateToValidate;
  const authorLabel = article.author ?? t.authorToValidate;

  return (
    <main>
      <PageHero
        tone="dark"
        className="max-w-4xl"
        eyebrow={t.label}
        titleLead={content.title}
        titleAccent=""
      >
        <RouteLink routeKey="news" className="btn-ghost mt-8">
          {t.label}
        </RouteLink>
      </PageHero>

      <Section tone="white">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-wrap items-center gap-3 border-b border-gray-200 pb-6">
            <Badge>{dateLabel}</Badge>
            <Badge>{authorLabel}</Badge>
            {article.themes.map((key) => (
              <Badge key={key}>{themeLabel(key, lang)}</Badge>
            ))}
            {article.zones.map((key) => (
              <Badge key={key}>{zoneLabel(key, lang)}</Badge>
            ))}
          </div>

          {article.source?.url && (
            <p className="mt-6 text-[0.9rem] text-gray-500">
              {lang === "en"
                ? "Originally published on LinkedIn."
                : "Publié initialement sur LinkedIn."}{" "}
              <ExternalLink href={article.source.url} className="text-orange">
                {t.sourceLabel}
              </ExternalLink>
            </p>
          )}

          <div className="mt-10 space-y-6">
            {content.content.map((block, i) => (
              <ContentBlock key={`${article.key}-${i}`} id={`${article.key}-${i}`} block={block} />
            ))}
          </div>

          {article.source?.url && (
            <div className="mt-12 border-t border-gray-200 pt-8">
              <ExternalLink href={article.source.url}>
                {lang === "en"
                  ? "Read the original post on LinkedIn"
                  : "Lire la publication originale sur LinkedIn"}
              </ExternalLink>
            </div>
          )}
        </div>
      </Section>
    </main>
  );
}
