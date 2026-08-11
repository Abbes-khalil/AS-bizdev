import Link from "next/link";

import ArrowIcon from "@/components/ArrowIcon";
import ExternalLink from "@/components/ExternalLink";
import PageHero from "@/components/PageHero";
import RevealOnScroll from "@/components/RevealOnScroll";
import { getPublishedArticles, flattenForLang } from "@/lib/data/articles";
import { getDictionary, interpolate } from "@/lib/i18n/dictionaries";
import { themeLabel, zoneLabel } from "@/lib/i18n/content/news/taxonomy";
import { articleUrl } from "@/lib/routes";

const EMPTY_MESSAGE = {
  fr: "Aucun article n'est publié pour le moment.",
  en: "No articles are published right now.",
};

const ArticleCard = ({ article, index, lang, t }) => {
  const slug = article.slug[lang] ?? article.slug.fr;

  return (
    <RevealOnScroll
      as="article"
      variant="up"
      delay={0.05}
      index={index}
      className="group relative flex flex-col overflow-hidden rounded-card border border-gray-200 bg-white shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
    >
      <span
        aria-hidden="true"
        className="absolute left-0 top-0 h-1 w-0 bg-orange transition-all duration-500 group-hover:w-full"
      />

      {article.image ? (
        <img
          src={article.image}
          alt=""
          className="h-44 w-full object-cover"
          loading="lazy"
        />
      ) : (
        <div className="h-44 w-full bg-surface-alt" aria-hidden="true" />
      )}

      <div className="flex flex-1 flex-col p-8 lg:p-10">
        <span className="eyebrow text-orange">{t.label}</span>

        <p className="mt-3 text-[0.8rem] text-gray-400">
          {article.publishedAt ?? t.dateToValidate}
          {" — "}
          {article.author ?? t.authorToValidate}
        </p>

        <h2 className="mt-4 font-display text-[1.5rem] font-semibold leading-tight tracking-tight text-navy lg:text-[1.625rem]">
          {article.title}
        </h2>

        <p className="mt-5 line-clamp-6 text-[0.95rem] leading-relaxed text-gray-700">
          {article.preview}
        </p>

        {(article.themes.length > 0 || article.zones.length > 0) && (
          <div className="mt-5 flex flex-wrap gap-2">
            {article.themes.map((key) => (
              <span
                key={key}
                className="rounded-full bg-surface-alt px-3 py-1 text-[0.75rem] font-medium text-gray-600"
              >
                {themeLabel(key, lang)}
              </span>
            ))}
            {article.zones.map((key) => (
              <span
                key={key}
                className="rounded-full bg-surface-alt px-3 py-1 text-[0.75rem] font-medium text-gray-600"
              >
                {zoneLabel(key, lang)}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-3 pt-8">
          <Link
            href={articleUrl(lang, slug)}
            className="inline-flex items-center gap-2 font-display text-[0.95rem] font-semibold text-navy link-underline"
          >
            {t.readMore}
            <ArrowIcon />
          </Link>

          {article.source?.url && (
            <ExternalLink href={article.source.url} className="text-gray-500">
              {t.sourceLabel}
            </ExternalLink>
          )}
        </div>
      </div>
    </RevealOnScroll>
  );
};

export default async function NewsContent({ lang }) {
  const t = getDictionary(lang, "news");
  const articles = await getPublishedArticles();
  const localizedArticles = articles.map((article) => flattenForLang(article, lang));

  return (
    <main>
      <PageHero
        tone="dark"
        className="max-w-4xl"
        {...t.hero}
        overlay={
          <div
            className="pointer-events-none absolute -right-40 top-0 h-[40rem] w-[40rem] rounded-full opacity-30 blur-3xl"
            style={{
              background:
                "radial-gradient(closest-side, rgba(255,106,0,0.3), transparent 70%)",
            }}
            aria-hidden="true"
          />
        }
      />

      <section className="bg-white py-24 lg:py-32">
        <div className="container-x">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4 border-b border-gray-200 pb-6">
            <p className="eyebrow text-orange">
              {interpolate(t.selection, {
                count: localizedArticles.length.toString().padStart(2, "0"),
              })}
            </p>
            <p className="font-display text-[0.7rem] font-medium uppercase tracking-widest text-gray-400">
              {t.period}
            </p>
          </div>

          {localizedArticles.length === 0 ? (
            <p className="py-16 text-center text-[0.95rem] text-gray-600">
              {EMPTY_MESSAGE[lang] ?? EMPTY_MESSAGE.fr}
            </p>
          ) : (
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
              {localizedArticles.map((article, i) => (
                <ArticleCard
                  key={article.key}
                  article={article}
                  index={i}
                  lang={lang}
                  t={t}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
