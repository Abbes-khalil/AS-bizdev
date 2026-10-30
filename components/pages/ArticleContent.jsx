import { Globe2 } from "lucide-react";
import Link from "next/link";

import ExternalLink from "@/components/ui/ExternalLink";
import Section from "@/components/ui/Section";
import { LOGO_IMAGE, SITE_NAME } from "@/lib/constants/site";
import { parseInline } from "@/lib/data/inlineText";
import { themeLabel, zoneLabel } from "@/lib/i18n/content/news/taxonomy";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { ROUTES } from "@/lib/routes";

const Inline = ({ text }) =>
  parseInline(text).map((run, i) => {
    if (run.type === "bold") {
      return (
        <strong key={i} className="font-semibold text-navy">
          {run.text}
        </strong>
      );
    }
    if (run.type === "link") {
      return run.href.startsWith("/") ? (
        <Link key={i} href={run.href} className="text-orange link-underline">
          {run.text}
        </Link>
      ) : (
        <ExternalLink key={i} href={run.href} className="text-orange">
          {run.text}
        </ExternalLink>
      );
    }
    return run.text;
  });

const PostText = ({ block, id }) => {
  if (block.type === "list") {
    return (
      <ul className="list-disc space-y-1 ps-5 text-[0.95rem] leading-7 text-gray-800">
        {block.items.map((item, i) => (
          <li key={`${id}-${i}`}>
            <Inline text={item} />
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "heading") {
    return (
      <h2 className="pt-4 font-display text-[1.1rem] font-semibold leading-snug text-navy">
        <Inline text={block.text} />
      </h2>
    );
  }

  if (block.type === "subheading") {
    return (
      <h3 className="pt-2 font-display text-[1rem] font-semibold leading-snug text-navy">
        <Inline text={block.text} />
      </h3>
    );
  }

  if (block.type === "highlight") {
    return (
      <p className="rounded-[0.75rem] bg-gray-50 px-4 py-3 text-[0.95rem] font-medium leading-7 text-navy">
        <Inline text={block.text} />
      </p>
    );
  }

  return (
    <p className="whitespace-pre-line text-[0.95rem] leading-7 text-gray-800">
      <Inline text={block.text} />
    </p>
  );
};

/**
 * Article detail page (§24) — styled like a native LinkedIn post rather
 * than an editorial article, since the content is scraped from LinkedIn.
 * Data-driven from Supabase — see docs/ARTICLES_SUPABASE.md. Fields AS Biz
 * Dev hasn't supplied yet (date, author, image) show placeholder copy
 * rather than invented values.
 */
export default function ArticleContent({ article, lang }) {
  const t = getDictionary(lang, "news");
  const content = article[lang] ?? article.fr;
  const dateLabel = article.publishedAt ?? t.dateToValidate;
  const hashtags = [
    ...article.themes.map((key) => themeLabel(key, lang)),
    ...article.zones.map((key) => zoneLabel(key, lang)),
  ];

  return (
    <main>
      <Section tone="alt">
        <div className="mx-auto max-w-2xl">
          <Link
            href={ROUTES.news[lang]}
            className="mb-6 inline-flex items-center gap-2 text-[0.9rem] font-medium text-gray-500 link-underline"
          >
            <span aria-hidden="true" className="rtl:-scale-x-100">←</span> {t.label}
          </Link>

          <article className="overflow-hidden rounded-[1rem] border border-gray-200 bg-white shadow-soft">
            <div className="flex items-start gap-3 p-6">
              <img
                src={LOGO_IMAGE}
                alt=""
                className="h-12 w-12 shrink-0 rounded-full border border-gray-200 bg-white object-contain p-1"
              />
              <div className="min-w-0">
                <p className="truncate font-display text-[1rem] font-semibold text-navy">
                  {SITE_NAME}
                </p>
                <p className="truncate text-[0.85rem] text-gray-500">{t.label}</p>
                <p className="mt-0.5 flex items-center gap-1 text-[0.8rem] text-gray-400">
                  {article.author ?? dateLabel}
                  <span aria-hidden="true">·</span>
                  <Globe2
                    size={13}
                    aria-label={
                      lang === "en"
                        ? "Public post"
                        : lang === "ar"
                          ? "منشور عام"
                          : "Publication publique"
                    }
                  />
                </p>
              </div>
            </div>

            <div className="space-y-4 px-6 pb-2">
              <h1 className="font-display text-[1.15rem] font-semibold leading-snug text-navy">
                {content.title}
              </h1>

              {content.content.map((block, i) => (
                <PostText key={`${article.key}-${i}`} id={`${article.key}-${i}`} block={block} />
              ))}

              {hashtags.length > 0 && (
                <p className="text-[0.9rem] font-medium text-navy/80">
                  {hashtags.map((tag) => `#${tag.replace(/\s+/g, "")}`).join(" ")}
                </p>
              )}
            </div>

            {article.image && (
              <img
                src={article.image}
                alt={content.title}
                className="mt-4 w-full object-cover"
                loading="lazy"
              />
            )}

            {article.source?.url && (
              <div className="border-t border-gray-200 px-6 py-4">
                <ExternalLink href={article.source.url} className="text-orange">
                  {t.sourceLabel}
                </ExternalLink>
              </div>
            )}
          </article>
        </div>
      </Section>
    </main>
  );
}
