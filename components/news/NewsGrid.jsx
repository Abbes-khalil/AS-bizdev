"use client";

import { useState } from "react";

import ArrowIcon from "@/components/ui/ArrowIcon";
import ExternalLink from "@/components/ui/ExternalLink";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import ArticleModal from "@/components/news/ArticleModal";
import { themeLabel, zoneLabel } from "@/lib/i18n/content/news/taxonomy";

const ArticleCard = ({ article, index, lang, t, onOpen }) => (
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
      <img src={article.image} alt="" className="h-44 w-full object-cover" loading="lazy" />
    ) : (
      <div className="h-44 w-full bg-surface-alt" aria-hidden="true" />
    )}

    <div className="flex flex-1 flex-col p-6 lg:p-7">
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
        <button
          type="button"
          onClick={() => onOpen(article)}
          className="inline-flex items-center gap-2 font-display text-[0.95rem] font-semibold text-navy link-underline"
        >
          {t.readMore}
          <ArrowIcon />
        </button>

        {article.source?.url && (
          <ExternalLink href={article.source.url} className="text-gray-500">
            {t.sourceLabel}
          </ExternalLink>
        )}
      </div>
    </div>
  </RevealOnScroll>
);

/**
 * Client island for /actualites: opens a post as an in-place widget (dark
 * backdrop over the page) instead of navigating to a separate article page.
 */
export default function NewsGrid({ articles, lang, t }) {
  const [openArticle, setOpenArticle] = useState(null);

  return (
    <>
      <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
        {articles.map((article, i) => (
          <ArticleCard
            key={article.key}
            article={article}
            index={i}
            lang={lang}
            t={t}
            onOpen={setOpenArticle}
          />
        ))}
      </div>

      <ArticleModal article={openArticle} lang={lang} t={t} onClose={() => setOpenArticle(null)} />
    </>
  );
}
