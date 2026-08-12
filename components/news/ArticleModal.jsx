"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Globe2 } from "lucide-react";
import { useEffect, useRef } from "react";

import ExternalLink from "@/components/ui/ExternalLink";
import { LOGO_IMAGE, SITE_NAME } from "@/lib/constants/site";
import { themeLabel, zoneLabel } from "@/lib/i18n/content/news/taxonomy";

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

const PostText = ({ block, id }) => {
  if (block.type === "list") {
    return (
      <ul className="list-disc space-y-1 pl-5 text-[0.95rem] leading-7 text-gray-800">
        {block.items.map((item, i) => (
          <li key={`${id}-${i}`}>{item}</li>
        ))}
      </ul>
    );
  }

  return (
    <p className="whitespace-pre-line text-[0.95rem] leading-7 text-gray-800">
      {block.text}
    </p>
  );
};

/**
 * The LinkedIn-style post widget shown in place of a page navigation — a
 * dark backdrop over the current page, with the post itself in a white card
 * on top. No route change, no separate article page.
 */
const ArticleModal = ({ article, lang, t, onClose }) => {
  const reduceMotion = useReducedMotion();
  const dialogRef = useRef(null);
  const previousFocus = useRef(null);

  useEffect(() => {
    if (!article) return undefined;

    previousFocus.current = document.activeElement;
    const dialog = dialogRef.current;
    dialog?.querySelector('[data-autofocus="true"]')?.focus();

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key !== "Tab" || !dialog) return;

      const focusable = Array.from(dialog.querySelectorAll(FOCUSABLE));
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      previousFocus.current?.focus?.();
    };
  }, [article, onClose]);

  if (!article) return null;

  const dateLabel = article.publishedAt ?? t.dateToValidate;
  const hashtags = [
    ...article.themes.map((key) => themeLabel(key, lang)),
    ...article.zones.map((key) => zoneLabel(key, lang)),
  ];

  return (
    <AnimatePresence>
      {article && (
        <div className="fixed inset-0 z-[70] flex items-end justify-center sm:items-center sm:p-6">
          <motion.div
            className="absolute inset-0 bg-navy/70 backdrop-blur-sm"
            aria-hidden="true"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />

          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="article-modal-title"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.97, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.97, y: 16 }}
            transition={{ duration: 0.25, ease: [0.2, 0, 0, 1] }}
            className="relative flex max-h-[88vh] w-full max-w-xl flex-col overflow-y-auto rounded-t-[1.5rem] bg-white shadow-lift sm:max-h-[85vh] sm:rounded-card"
          >
            <button
              type="button"
              data-autofocus="true"
              onClick={onClose}
              aria-label={t.close}
              className="absolute right-[1.25rem] top-[1.25rem] z-10 grid h-10 w-10 place-items-center rounded-full border border-gray-200 bg-white text-navy transition-colors hover:border-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M1 1L15 15M15 1L1 15"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </button>

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
                    aria-label={lang === "en" ? "Public post" : "Publication publique"}
                  />
                </p>
              </div>
            </div>

            <div className="space-y-4 px-6 pb-2">
              <h2
                id="article-modal-title"
                className="font-display text-[1.15rem] font-semibold leading-snug text-navy"
              >
                {article.title}
              </h2>

              {article.content.map((block, i) => (
                <PostText key={`${article.key}-${i}`} id={`${article.key}-${i}`} block={block} />
              ))}

              {hashtags.length > 0 && (
                <p className="text-[0.9rem] font-medium text-navy/80">
                  {hashtags.map((tag) => `#${tag.replace(/\s+/g, "")}`).join(" ")}
                </p>
              )}
            </div>

            {article.image && (
              <img src={article.image} alt={article.title} className="mt-4 w-full object-cover" loading="lazy" />
            )}

            {article.source?.url && (
              <div className="border-t border-gray-200 px-6 py-4">
                <ExternalLink href={article.source.url} className="text-orange">
                  {t.sourceLabel}
                </ExternalLink>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ArticleModal;
