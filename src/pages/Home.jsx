import ArrowIcon from "../components/ArrowIcon";
import { ImageCard } from "../components/Card";
import RevealOnScroll from "../components/RevealOnScroll";
import SectionHeading from "../components/SectionHeading";
import { ASSET, ROUTES } from "../components/siteData";
import { interpolate, useT } from "../i18n";

export default function Home() {
  const t = useT("home");
  // Values and solutions are defined once, on their own pages.
  const pages = useT("pages");

  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden bg-white">
        <div className="relative container-x pt-[160px] pb-20 md:pt-[180px] md:pb-24 lg:pt-[200px] lg:pb-28">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <RevealOnScroll variant="up">
              <h1 className="font-display text-[2.5rem] font-semibold leading-[1.15] tracking-tight text-navy text-balance md:text-[3rem] lg:text-[3.25rem]">
                {t.hero.title}
              </h1>
              {t.hero.paragraphs.map((paragraph, i) => (
                <p
                  key={i}
                  className={`${i === 0 ? "mt-8" : "mt-4"} max-w-xl text-[1.0625rem] leading-[1.65] text-gray-700 text-pretty`}
                >
                  {paragraph}
                </p>
              ))}
              <div className="mt-10">
                <a href={ROUTES.contact} className="btn-primary">
                  {t.hero.cta}
                </a>
              </div>
            </RevealOnScroll>

            <RevealOnScroll variant="right" delay={0.15} className="relative">
              <div className="relative mx-auto aspect-square w-full max-w-[520px] overflow-hidden rounded-card border border-gray-200 bg-gray-100 shadow-lift">
                <img
                  src={ASSET + "maps.webp"}
                  alt={t.hero.mapAlt}
                  width="640"
                  height="800"
                  fetchPriority="high"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* PACKS */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            titleLead={t.packs.titleLead}
            titleAccent={t.packs.titleAccent}
            intro={t.packs.intro}
          >
            <ul className="mt-8 space-y-3 text-[1.0625rem] leading-[1.7] text-gray-700">
              {t.packs.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span
                    className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-orange"
                    aria-hidden="true"
                  />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-2xl text-[1.0625rem] leading-[1.7] text-gray-700">
              {t.packs.outro}
            </p>
          </SectionHeading>

          <div className="mt-12 grid gap-6 md:grid-cols-3 lg:gap-8">
            {t.packs.items.map((pack, i) => (
              <RevealOnScroll
                as="article"
                key={pack.title}
                variant="up"
                delay={0.1}
                index={i}
                className="rounded-card border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-navy hover:shadow-lift lg:p-10"
              >
                <h3 className="font-display text-[1.5rem] font-semibold leading-tight tracking-tight text-navy lg:text-[1.625rem]">
                  {interpolate(t.packs.itemLabel, { title: pack.title })}
                </h3>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-gray-700">
                  {pack.body}
                </p>
                <a
                  href={ROUTES.solutions}
                  className="mt-6 inline-flex items-center gap-2 font-display text-[0.9rem] font-medium text-navy link-underline"
                >
                  {t.packs.more}
                  <ArrowIcon />
                </a>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="bg-surface-alt py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow={t.solutions.eyebrow}
            titleLead={t.solutions.titleLead}
            titleAccent={t.solutions.titleAccent}
            intro={t.solutions.intro}
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {pages.solutions.items.map((item, i) => (
              <RevealOnScroll
                key={item.title}
                variant="up"
                delay={0.1}
                index={i}
              >
                <ImageCard
                  src={item.src}
                  title={item.title}
                  description={item.teaser ?? item.intro}
                  href={ROUTES.solutions}
                />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* POSITIONNEMENT */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <RevealOnScroll variant="up" className="relative">
              <div className="relative mx-auto aspect-[4/3] w-full max-w-[560px] overflow-hidden rounded-card border border-gray-200 bg-gray-100 shadow-lift">
                <img
                  src={ASSET + "accela-scaled.webp"}
                  alt={t.about.imageAlt}
                  width="1024"
                  height="748"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </RevealOnScroll>
            <RevealOnScroll variant="right" delay={0.15}>
              <p className="eyebrow text-orange">{t.about.eyebrow}</p>
              <h2 className="mt-4 font-display text-[2rem] font-semibold leading-[1.15] tracking-tight text-navy text-balance md:text-[2.5rem] lg:text-[2.75rem]">
                {t.about.titleLead}{" "}
                <span className="italic text-orange">{t.about.titleAccent}</span>
              </h2>
              <p className="mt-6 text-[1.0625rem] leading-[1.7] text-gray-700">
                {t.about.body}
              </p>
              <p className="mt-4 text-[1.0625rem] leading-[1.7] italic text-navy">
                {t.about.quote}
              </p>
              <a href={ROUTES.whoIsWho} className="btn-ghost mt-8">
                {t.about.cta}
                <ArrowIcon />
              </a>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* NOS VALEURS */}
      <section className="bg-surface-alt py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow={t.values.eyebrow}
            titleLead={t.values.titleLead}
            titleAccent={t.values.titleAccent}
            intro={t.values.intro}
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3 lg:gap-8">
            {pages.values.items.map((value, i) => (
              <RevealOnScroll
                as="article"
                key={value.title}
                variant="up"
                delay={0.1}
                index={i}
                className="rounded-card border border-gray-200 bg-white p-2 transition-all duration-300 hover:-translate-y-1 hover:border-navy hover:shadow-lift"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-card bg-gray-100">
                  <img
                    src={ASSET + value.src}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    width="640"
                    height="480"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-[1.5rem] font-semibold leading-tight tracking-tight text-navy lg:text-[1.625rem]">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-gray-700">
                    {value.teaser ?? value.intro}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
