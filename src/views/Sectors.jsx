"use client";

import CrossFactorDiagram from "../components/CrossFactorDiagram";
import CtaBlock from "../components/CtaBlock";
import OfferCard from "../components/OfferCard";
import PageHero from "../components/PageHero";
import RevealOnScroll from "../components/RevealOnScroll";
import RouteLink from "../components/RouteLink";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import SectorExplorer from "../components/SectorExplorer";
import ArrowIcon from "../components/ArrowIcon";
import { useT } from "../i18n";

/** Sectors AS Biz Dev has a real understanding of, not a specialism list. */
export default function Sectors() {
  const t = useT("sectors");

  return (
    <main>
      <PageHero layout="split" {...t.hero} />

      <Section tone="alt">
        <RevealOnScroll variant="up" className="max-w-3xl">
          <p className="text-[0.9375rem] italic leading-[1.7] text-gray-500">
            {t.heroNote}
          </p>
        </RevealOnScroll>

        <SectionHeading
          eyebrow={t.explorer.eyebrow}
          titleLead={t.explorer.titleLead}
          titleAccent={t.explorer.titleAccent}
          className="mt-[2.5rem] max-w-3xl"
        />

        <div className="mt-[2.5rem]">
          <SectorExplorer items={t.items} copy={t.explorer} ariaLabel={t.explorer.eyebrow} />
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow={t.cross.eyebrow}
          titleLead={t.cross.titleLead}
          titleAccent={t.cross.titleAccent}
          intro={t.cross.intro}
          className="mx-auto max-w-2xl text-center"
        />

        <div className="mt-[3rem]">
          <CrossFactorDiagram
            factors={t.cross.factors}
            outcome={t.cross.outcome}
            examples={t.cross.examples}
          />
        </div>
      </Section>

      <Section tone="navy">
        <RevealOnScroll variant="up" className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <p className="eyebrow text-orange">{t.marketsLink.eyebrow}</p>
          <h2 className="font-display display-md font-semibold tracking-tight text-white text-balance">
            {t.marketsLink.titleLead}{" "}
            <span className="italic text-orange">{t.marketsLink.titleAccent}</span>
          </h2>
          <p className="max-w-2xl text-[1.0625rem] leading-[1.7] text-white/75">
            {t.marketsLink.body}
          </p>
          <RouteLink routeKey="markets" className="btn-primary mt-2">
            {t.marketsLink.cta}
            <ArrowIcon />
          </RouteLink>
        </RevealOnScroll>
      </Section>

      <Section tone="alt">
        <SectionHeading
          eyebrow={t.offers.eyebrow}
          titleLead={t.offers.titleLead}
          titleAccent={t.offers.titleAccent}
        />

        <div className="mt-[3rem] grid gap-[1.5rem] lg:grid-cols-2 lg:gap-[2rem]">
          {t.offers.items.map((offer, index) => (
            <OfferCard key={offer.routeKey} offer={offer} index={index} moreLabel={t.offers.more} />
          ))}
        </div>
      </Section>

      <Section>
        <CtaBlock {...t.cta} />
      </Section>
    </main>
  );
}
