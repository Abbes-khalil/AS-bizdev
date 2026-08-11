import Link from "next/link";

import ArrowIcon from "@/components/ArrowIcon";
import OfferCard from "@/components/OfferCard";
import RevealOnScroll from "@/components/RevealOnScroll";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import StepList from "@/components/StepList";
import { ASSET } from "@/lib/siteData";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { ROUTES } from "@/lib/routes";

export default function HomeContent({ lang }) {
  const t = getDictionary(lang, "home");

  return (
    <main>
      {/* HERO — who we help, what we do, where, in one screen (§7). */}
      <section className="relative overflow-hidden bg-white">
        <div className="relative container-x pt-[160px] pb-20 md:pt-[180px] md:pb-24 lg:pt-[200px] lg:pb-28">
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
                <Link href={ROUTES.contact[lang]} className="btn-primary">
                  {t.hero.ctaPrimary}
                  <ArrowIcon />
                </Link>
                <Link href={ROUTES.solutions[lang]} className="btn-secondary">
                  {t.hero.ctaSecondary}
                </Link>
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

      {/* TWO WAYS TO WORK WITH US — the fork the whole site is built on. */}
      <Section tone="alt">
        <SectionHeading
          eyebrow={t.twoWays.eyebrow}
          titleLead={t.twoWays.titleLead}
          titleAccent={t.twoWays.titleAccent}
          intro={t.twoWays.intro}
        />

        <div className="mt-[3rem] grid gap-[1.5rem] lg:grid-cols-2 lg:gap-[2rem]">
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

        <div className="mt-[3rem]">
          <StepList steps={t.approach.steps} columns={5} />
        </div>
      </Section>

      {/* MARKETS — named markets, never a world map (§6). */}
      <Section tone="navy">
        <div className="grid items-end gap-[2rem] lg:grid-cols-[1.4fr_0.6fr]">
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
            <Link href={ROUTES.markets[lang]} className="btn-primary">
              {t.markets.cta}
              <ArrowIcon />
            </Link>
          </RevealOnScroll>
        </div>
      </Section>

      {/* PARTNER NETWORK (§11). */}
      <Section tone="alt">
        <div className="grid items-end gap-[2rem] lg:grid-cols-[1.4fr_0.6fr]">
          <SectionHeading
            eyebrow={t.partner.eyebrow}
            titleLead={t.partner.titleLead}
            titleAccent={t.partner.titleAccent}
            intro={t.partner.intro}
          />

          <RevealOnScroll variant="up" delay={0.1} className="lg:justify-self-end">
            <Link href={ROUTES.becomePartner[lang]} className="btn-navy">
              {t.partner.cta}
              <ArrowIcon />
            </Link>
          </RevealOnScroll>
        </div>
      </Section>
    </main>
  );
}
