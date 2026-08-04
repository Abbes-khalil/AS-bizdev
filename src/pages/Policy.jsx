import RevealOnScroll from "../components/RevealOnScroll";
import { CONTACT_EMAIL } from "../components/siteData";
import { useT } from "../i18n";

export default function Policy() {
  const t = useT("policy");

  return (
    <main>
      <section className="relative overflow-hidden bg-white">
        <div
          className="pointer-events-none absolute inset-0 pattern-dots opacity-[0.12]"
          aria-hidden="true"
        />
        <div className="relative container-x py-20 lg:py-28">
          <RevealOnScroll variant="up" className="max-w-3xl">
            <div className="inline-flex items-center gap-3">
              <span
                className="h-1 w-10 rounded-full bg-orange"
                aria-hidden="true"
              />
              <p className="eyebrow text-orange">{t.hero.eyebrow}</p>
            </div>
            <h1 className="mt-6 font-display display-xl font-semibold text-navy text-balance">
              {t.hero.titleLead}{" "}
              <span className="italic text-orange">{t.hero.titleAccent}</span>
            </h1>
            <p className="mt-8 text-[1.0625rem] leading-[1.7] text-gray-700">
              {t.hero.intro}
            </p>
            <p className="mt-6 text-[1rem] text-gray-700">
              {t.hero.effectiveDate}
            </p>
            <p className="mt-2 text-[1rem] text-gray-700">
              {t.hero.updatedDate}
            </p>
          </RevealOnScroll>
        </div>
      </section>

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
