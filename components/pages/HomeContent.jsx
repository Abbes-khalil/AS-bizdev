import ArrowIcon from "@/components/ui/ArrowIcon";
import HeroMarketsMap from "@/components/home/HeroMarketsMap";
import MotionCta from "@/components/ui/MotionCta";
import OfferCard from "@/components/ui/OfferCard";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import StepList from "@/components/ui/StepList";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { ROUTES } from "@/lib/routes";

export default function HomeContent({ lang }) {
  const t = getDictionary(lang, "home");

  return (
    <main>
      {/* HERO — who we help, what we do, where, in one screen (§7). */}
      <section className="relative overflow-hidden bg-white">
        <div className="relative container-x pt-8 pb-12 md:pt-10 md:pb-14 lg:pt-14 lg:pb-16">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <RevealOnScroll variant="up">
              <h1 className="font-display text-[2.5rem] font-semibold leading-[1.15] tracking-tight text-navy text-balance md:text-[3rem] lg:text-[3.25rem]">
                {t.hero.titleLead}{" "}
                <span className="italic text-orange">{t.hero.titleAccent}</span>
              </h1>

              {t.hero.paragraphs.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={`${index === 0 ? "mt-8" : "mt-4"} max-w-xl text-[1.0625rem] leading-[1.65] text-gray-700 text-pretty`}
                >
                  {paragraph}
                </p>
              ))}

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <MotionCta href={ROUTES.contact[lang]} className="btn-primary">
                  {t.hero.ctaPrimary}
                  <ArrowIcon />
                </MotionCta>
                <MotionCta href={ROUTES.solutions[lang]} className="btn-secondary">
                  {t.hero.ctaSecondary}
                </MotionCta>
              </div>
            </RevealOnScroll>

            <RevealOnScroll variant="right" delay={0.15} className="relative">
              <div className="relative mx-auto aspect-square w-full max-w-[520px] overflow-hidden rounded-card border border-gray-200 bg-gray-100 p-6 shadow-lift">
                <HeroMarketsMap lang={lang} ariaLabel={t.hero.mapAlt} />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* TWO WAYS TO WORK WITH US — the fork the whole site is built on. */}
      <Section tone="alt">
        <SectionHeading
          eyebrow={t.twoWays.eyebrow}
          titleLead={t.twoWays.titleLead}
          titleAccent={t.twoWays.titleAccent}
          intro={t.twoWays.intro}
        />

        <div className="mt-[2.5rem] grid gap-[1.25rem] lg:grid-cols-2 lg:gap-[1.25rem]">
          {t.twoWays.items.map((offer, index) => (
            <OfferCard
              key={offer.routeKey}
              offer={offer}
              index={index}
              lang={lang}
              moreLabel={t.twoWays.more}
            />
          ))}
        </div>
      </Section>

      {/* STRATEGY + EXECUTION (§5). */}
      <Section>
        <SectionHeading
          eyebrow={t.approach.eyebrow}
          titleLead={t.approach.titleLead}
          titleAccent={t.approach.titleAccent}
          intro={t.approach.intro}
        />

        <div className="mt-[2.5rem]">
          <StepList steps={t.approach.steps} columns={5} />
        </div>
      </Section>

      {/* MARKETS — named markets, never a world map (§6). */}
      <Section tone="navy">
        <div className="grid items-end gap-[1.25rem] lg:grid-cols-[1.4fr_0.6fr]">
          <RevealOnScroll variant="up">
            <p className="eyebrow text-orange">{t.markets.eyebrow}</p>
            <h2 className="mt-4 font-display display-md font-semibold tracking-tight text-white text-balance">
              {t.markets.titleLead}{" "}
              <span className="italic text-orange">
                {t.markets.titleAccent}
              </span>
            </h2>
            <p className="mt-6 max-w-2xl text-[1.0625rem] leading-[1.7] text-white/75">
              {t.markets.intro}
            </p>
          </RevealOnScroll>

          <RevealOnScroll variant="up" delay={0.1} className="lg:justify-self-end">
            <MotionCta href={ROUTES.markets[lang]} className="btn-primary">
              {t.markets.cta}
              <ArrowIcon />
            </MotionCta>
          </RevealOnScroll>
        </div>
      </Section>

      {/* PARTNER NETWORK (§11). */}
      <Section tone="alt">
        <div className="grid items-end gap-[1.25rem] lg:grid-cols-[1.4fr_0.6fr]">
          <SectionHeading
            eyebrow={t.partner.eyebrow}
            titleLead={t.partner.titleLead}
            titleAccent={t.partner.titleAccent}
            intro={t.partner.intro}
          />

          <RevealOnScroll variant="up" delay={0.1} className="lg:justify-self-end">
            <MotionCta href={ROUTES.becomePartner[lang]} className="btn-navy">
              {t.partner.cta}
              <ArrowIcon />
            </MotionCta>
          </RevealOnScroll>
        </div>
      </Section>
    </main>
  );
}
