import { useState } from "react";

import Modal from "../components/Modal";
import RevealOnScroll from "../components/RevealOnScroll";
import { interpolate, useT } from "../i18n";

const ContentBlock = ({ block, id }) => {
  if (block.type === "heading") {
    return (
      <h3 className="pt-5 font-display text-2xl font-semibold leading-tight text-navy sm:text-3xl">
        {block.text}
      </h3>
    );
  }

  if (block.type === "subheading") {
    return (
      <h4 className="pt-2 font-display text-xl font-semibold leading-tight text-navy">
        {block.text}
      </h4>
    );
  }

  if (block.type === "list") {
    return (
      <ul className="space-y-3">
        {block.items.map((item, i) => (
          <li
            key={`${id}-${i}`}
            className="flex items-start gap-3 text-[1rem] leading-8 text-gray-700"
          >
            <span
              className="mt-[0.8rem] h-1.5 w-1.5 shrink-0 rounded-full bg-orange"
              aria-hidden="true"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "highlight") {
    return (
      <div className="border-l-4 border-orange bg-orange-50 px-5 py-4">
        <p className="font-medium leading-8 text-navy">{block.text}</p>
      </div>
    );
  }

  return <p className="text-[1rem] leading-8 text-gray-700">{block.text}</p>;
};

export default function News() {
  const t = useT("news");
  const [selectedNumber, setSelectedNumber] = useState(null);

  const selectedArticle =
    t.articles.find((article) => article.number === selectedNumber) ?? null;

  return (
    <main>
      <section className="relative overflow-hidden bg-navy text-white">
        <div
          className="pointer-events-none absolute inset-0 grid-bg-dark opacity-40"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-40 top-0 h-[40rem] w-[40rem] rounded-full opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(255,106,0,0.3), transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div className="relative container-x py-24 lg:py-32">
          <RevealOnScroll variant="up" className="max-w-4xl">
            <div className="inline-flex items-center gap-3">
              <span
                className="h-1 w-10 rounded-full bg-orange"
                aria-hidden="true"
              />
              <p className="eyebrow text-orange">{t.hero.eyebrow}</p>
            </div>
            <h1 className="mt-6 font-display display-xl font-semibold text-white text-balance">
              {t.hero.titleLead}{" "}
              <span className="italic text-orange">{t.hero.titleAccent}</span>{" "}
              {t.hero.titleTail}
            </h1>
            <p className="mt-8 max-w-2xl text-[1.125rem] leading-[1.7] text-white/75">
              {t.hero.intro}
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-32">
        <div className="container-x">
          <div className="mb-10 flex items-end justify-between border-b border-gray-200 pb-6">
            <p className="eyebrow text-orange">
              {interpolate(t.selection, {
                count: t.articles.length.toString().padStart(2, "0"),
              })}
            </p>
            <p className="font-display text-[0.7rem] font-medium uppercase tracking-widest text-gray-400">
              {t.period}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
            {t.articles.map((article, i) => (
              <RevealOnScroll
                as="article"
                key={article.number}
                variant="up"
                delay={0.05}
                index={i}
                className="group relative flex flex-col overflow-hidden rounded-card border border-gray-200 bg-white shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-1 w-0 bg-orange transition-all duration-500 group-hover:w-full"
                />
                <div className="p-8 lg:p-10">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="eyebrow text-orange">{t.label}</span>
                    <span className="font-display text-[0.7rem] font-medium uppercase tracking-widest text-gray-400">
                      {article.number}
                    </span>
                  </div>

                  <h2 className="mt-12 font-display text-[1.5rem] font-semibold leading-tight tracking-tight text-navy lg:text-[1.625rem]">
                    {article.title}
                  </h2>

                  <p className="mt-5 line-clamp-6 text-[0.95rem] leading-relaxed text-gray-700">
                    {article.preview}
                  </p>

                  <button
                    type="button"
                    onClick={() => setSelectedNumber(article.number)}
                    className="mt-auto inline-flex w-fit items-center gap-2 pt-8 font-display text-[0.95rem] font-semibold text-navy link-underline"
                  >
                    {t.readMore}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M1 7H13M13 7L7 1M13 7L7 13"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <Modal
        isOpen={selectedArticle !== null}
        onClose={() => setSelectedNumber(null)}
        titleId="selected-article-title"
      >
        {selectedArticle && (
          <article>
            <div className="pr-12 sm:pr-14">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 pb-5">
                <span className="eyebrow text-orange">{t.label}</span>
                <span className="font-display text-xs font-medium uppercase tracking-widest text-gray-400">
                  {selectedArticle.number}
                </span>
              </div>

              <h2
                id="selected-article-title"
                className="mt-8 font-display text-3xl font-semibold leading-tight tracking-tight text-navy sm:text-4xl"
              >
                {selectedArticle.title}
              </h2>
            </div>

            <div className="mt-8 space-y-6">
              {selectedArticle.content.map((block, i) => (
                <ContentBlock
                  key={`${selectedArticle.number}-${i}`}
                  id={`${selectedArticle.number}-${i}`}
                  block={block}
                />
              ))}
            </div>
          </article>
        )}
      </Modal>
    </main>
  );
}
