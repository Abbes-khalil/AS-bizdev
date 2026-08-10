"use client";

import PageHero from "../components/PageHero";
import RevealOnScroll from "../components/RevealOnScroll";
import { CONTACT_EMAIL } from "../constants/site";
import { useT } from "../i18n";

export default function Policy() {
  const t = useT("policy");

  return (
    <main>
      <PageHero {...t.hero}>
        <p className="mt-6 text-[1rem] text-gray-700">{t.hero.effectiveDate}</p>
        <p className="mt-2 text-[1rem] text-gray-700">{t.hero.updatedDate}</p>
      </PageHero>

      <section className="bg-white pb-24 lg:pb-32">
        <div className="container-x">
          <article className="mx-auto max-w-3xl">
            {t.sections.map((section, i) => (
              <RevealOnScroll
                as="section"
                key={section.title}
                variant="up"
                delay={0.05}
                amount={0.2}
                className="grid gap-6 border-t border-gray-200 py-10 first:border-t-0 first:pt-0 lg:grid-cols-[1fr_2fr] lg:gap-12"
              >
                <div>
                  <span className="font-display text-[0.7rem] font-medium uppercase tracking-widest text-orange">
                    0{i + 1}
                  </span>
                  <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-navy">
                    {section.title}
                  </h2>
                </div>
                <div className="text-[1.0625rem] leading-[1.75] text-gray-700">
                  {section.body}
                  {section.email && (
                    <>
                      {" "}
                      <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="text-navy link-underline"
                      >
                        {CONTACT_EMAIL}
                      </a>
                      .
                    </>
                  )}
                </div>
              </RevealOnScroll>
            ))}
          </article>
        </div>
      </section>
    </main>
  );
}
