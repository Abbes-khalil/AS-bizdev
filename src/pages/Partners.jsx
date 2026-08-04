import { ASSET, ROUTES } from "../components/siteData";
import RevealOnScroll from "../components/RevealOnScroll";
import { interpolate, useT } from "../i18n";

const PartnerCard = ({ partner, index, partnerLabel, logoAlt }) => (
  <RevealOnScroll
    as="article"
    variant="up"
    delay={0.05}
    index={index}
    className="flex h-full flex-col rounded-card border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-navy hover:shadow-lift"
  >
    <div className="grid h-32 place-items-center">
      <img
        src={ASSET + partner.src}
        alt={interpolate(logoAlt, { name: partner.name })}
        loading="lazy"
        decoding="async"
        width="192"
        height="80"
        className="max-h-20 max-w-[12rem] object-contain opacity-90 transition-all duration-500 hover:opacity-100"
      />
    </div>
    <div className="mt-6 flex items-center gap-3">
      <span aria-hidden="true" className="h-px flex-1 bg-gray-200" />
      <span className="font-display text-[0.65rem] font-medium uppercase tracking-widest text-gray-400">
        {partnerLabel}
      </span>
      <span aria-hidden="true" className="h-px flex-1 bg-gray-200" />
    </div>
    <h3 className="mt-4 font-display text-[1.25rem] font-semibold leading-tight tracking-tight text-navy">
      {partner.name}
    </h3>
    <p className="mt-3 text-[0.95rem] leading-relaxed text-gray-700">
      {partner.description}
    </p>
  </RevealOnScroll>
);

export default function Partners() {
  const t = useT("partners");

  return (
    <main>
      <section className="relative overflow-hidden bg-white">
        <div
          className="pointer-events-none absolute inset-0 pattern-dots opacity-[0.15]"
          aria-hidden="true"
        />
        <div className="relative container-x py-20 lg:py-28">
          <RevealOnScroll
            variant="up"
            className="grid items-end gap-12 lg:grid-cols-[1fr_1fr]"
          >
            <div>
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
            </div>
            <p className="max-w-md text-[1.125rem] leading-[1.7] text-gray-700">
              {t.hero.intro}
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="bg-surface-alt pb-24 lg:pb-32">
        <div className="container-x space-y-20">
          {t.categories.map((category, catIdx) => (
            <div key={category.title}>
              <RevealOnScroll variant="up" className="mb-10">
                <p className="eyebrow text-orange">
                  {t.categoryLabel} 0{catIdx + 1}
                </p>
                <h2 className="mt-3 font-display text-[1.5rem] font-semibold tracking-tight text-navy lg:text-[1.75rem]">
                  {category.title}
                </h2>
              </RevealOnScroll>
              <ul role="list" className="grid gap-6 md:grid-cols-2 lg:gap-8">
                {category.partners.map((partner, i) => (
                  <li key={partner.name}>
                    <PartnerCard
                      partner={partner}
                      index={i}
                      partnerLabel={t.partnerLabel}
                      logoAlt={t.logoAlt}
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <RevealOnScroll
            variant="up"
            className="mt-16 flex flex-col items-center gap-4 text-center"
          >
            <div className="inline-flex items-center gap-3">
              <span
                className="h-1 w-10 rounded-full bg-orange"
                aria-hidden="true"
              />
              <p className="eyebrow text-orange">{t.cta.eyebrow}</p>
            </div>
            <h2 className="font-display display-md font-semibold tracking-tight text-navy text-balance">
              {t.cta.heading}
            </h2>
            <a href={ROUTES.contact} className="btn-primary mt-2">
              {t.cta.label}
            </a>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  );
}
