import { Suspense } from "react";

import ArrowIcon from "@/components/ArrowIcon";
import BulletList from "@/components/BulletList";
import CtaBlock from "@/components/CtaBlock";
import MarketExperience from "@/components/MarketExperience";
import PageHero from "@/components/PageHero";
import RevealOnScroll from "@/components/RevealOnScroll";
import RouteLink from "@/components/RouteLink";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { COUNTRIES, SUBREGIONS } from "@/lib/data/countries";
import { getDictionary } from "@/lib/i18n/dictionaries";

/**
 * /marches — the main market experience: an interactive map plus an
 * accessible gallery list, both opening the same on-page modal.
 */
export default function MarketsContent({ lang }) {
  const t = getDictionary(lang, "markets");

  return (
    <main>
      <PageHero layout="split" {...t.hero} />

      <Section tone="navy">
        <RevealOnScroll variant="up" className="mx-auto max-w-3xl text-center">
          <p className="font-display text-[1.75rem] font-semibold italic leading-[1.3] tracking-[-0.02em] text-white lg:text-[2.25rem]">
            {t.closing.quote}
          </p>
          <p className="mt-[1.5rem] text-[1.0625rem] leading-[1.7] text-white/75">
            {t.closing.body}
          </p>
        </RevealOnScroll>
      </Section>

      <Suspense fallback={null}>
        <MarketExperience
          countries={COUNTRIES}
          groups={t.groups}
          filterSectors={SUBREGIONS}
          showFilter
          mapLabel={t.mapLabel}
          filterLabels={t.filters}
          countryCta={t.countryCta}
          modalLabels={t.modal}
        />
      </Suspense>

      <Section tone="alt">
        <SectionHeading
          eyebrow={t.capabilities.eyebrow}
          titleLead={t.capabilities.titleLead}
          titleAccent={t.capabilities.titleAccent}
          intro={t.capabilities.intro}
        />

        <BulletList items={t.capabilities.items} className="mt-[2.5rem] max-w-2xl" />

        <RevealOnScroll variant="up" className="mt-[2.5rem]">
          <RouteLink routeKey="sectors" className="btn-ghost">
            {t.sectorsLink}
            <ArrowIcon />
          </RouteLink>
        </RevealOnScroll>
      </Section>

      <Section>
        <CtaBlock {...t.cta} />
      </Section>
    </main>
  );
}
