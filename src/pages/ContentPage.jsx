import CtaBlock from "../components/CtaBlock";
import PageHero from "../components/PageHero";
import RevealOnScroll from "../components/RevealOnScroll";
import { ASSET } from "../components/siteData";
import { useT } from "../i18n";

/**
 * Renders one of the long-form content pages (values / expertise / solutions).
 * Copy lives in `src/i18n/content/pages.js`; `kind` selects the section.
 */
export default function ContentPage({ kind }) {
  const page = useT("pages")[kind];
  const total = page.items.length;

  return (
    <main>
      <PageHero
        className="mx-auto max-w-3xl"
        {...page}
        beforeIntro={
          page.epigraph && (
            <blockquote className="mt-8 border-l-2 border-orange pl-6 italic text-[1.0625rem] leading-[1.7] text-navy">
              {page.epigraph}
            </blockquote>
          )
        }
      />

      <section className="bg-white pb-24 lg:pb-32">
        <div className="container-x">
          <div className="space-y-24 lg:space-y-32">
            {page.items.map((item, i) => (
              <RevealOnScroll
                as="article"
                key={item.title}
                variant={i % 2 ? "left" : "right"}
                className={`grid items-center gap-10 lg:gap-16 lg:grid-cols-2 ${i % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-card bg-gray-100 shadow-lift">
                  <img
                    src={ASSET + item.src}
                    alt={item.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-badge bg-white/95 px-3 py-1.5 shadow-soft backdrop-blur">
                    <span className="font-display text-[0.7rem] font-medium uppercase tracking-widest text-navy">
                      0{i + 1} — {page.eyebrow}
                    </span>
                  </div>
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-0 h-1 w-1/3 bg-orange"
                  />
                </div>
                <div>
                  <p className="font-display text-[0.75rem] font-medium uppercase tracking-widest text-orange">
                    0{i + 1} / 0{total}
                  </p>
                  <h2 className="mt-4 font-display display-md font-semibold tracking-tight text-navy">
                    {item.title}
                  </h2>
                  {item.intro && (
                    <p className="mt-6 max-w-xl text-[1.0625rem] leading-[1.7] text-gray-700">
                      {item.intro}
                    </p>
                  )}
                  {item.lead && (
                    <p className="mt-6 max-w-xl text-[1.0625rem] leading-[1.7] italic text-navy">
                      {item.lead}
                    </p>
                  )}
                  {item.body && (
                    <p className="mt-6 max-w-xl text-[1.0625rem] leading-[1.7] text-gray-700">
                      {item.body}
                    </p>
                  )}
                  {item.subsections?.length > 0 && (
                    <div className="mt-8 space-y-8">
                      {item.subsections.map((sub) => (
                        <div key={sub.heading}>
                          <h3 className="font-display text-[1.125rem] font-semibold leading-tight text-navy">
                            {sub.heading}
                          </h3>
                          <p className="mt-3 max-w-xl text-[1.0625rem] leading-[1.7] text-gray-700">
                            {sub.body}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <CtaBlock {...page.cta} className="mt-24 lg:mt-32" />
        </div>
      </section>
    </main>
  );
}
