import CrossFactorDiagram from "@/components/pages/CrossFactorDiagram";
import CtaBlock from "@/components/ui/CtaBlock";
import Link from "next/link";

import OfferCard from "@/components/ui/OfferCard";
import PageHero from "@/components/ui/PageHero";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import SectorExplorer from "@/components/pages/SectorExplorer";
import ArrowIcon from "@/components/ui/ArrowIcon";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { ROUTES } from "@/lib/routes";

/** Sectors AS Biz Dev has a real understanding of, not a specialism list. */
export default function SectorsContent({ lang }) {
  const t = getDictionary(lang, "sectors");

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
          className="mt-[1.75rem] max-w-3xl"
        />

        <div className="mt-[1.75rem]">
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

        <div className="mt-[2.5rem]">
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
          <Link href={ROUTES.markets[lang]} className="btn-primary mt-2">
            {t.marketsLink.cta}
            <ArrowIcon />
          </Link>
        </RevealOnScroll>
      </Section>

      <Section tone="alt">
        <SectionHeading
          eyebrow={t.offers.eyebrow}
          titleLead={t.offers.titleLead}
          titleAccent={t.offers.titleAccent}
        />

        <div className="mt-[2.5rem] grid gap-[1.25rem] lg:grid-cols-2 lg:gap-[1.25rem]">
          {t.offers.items.map((offer, index) => (
            <OfferCard key={offer.routeKey} offer={offer} index={index} lang={lang} moreLabel={t.offers.more} />
          ))}
        </div>
      </Section>

      <Section>
        <CtaBlock {...t.cta} lang={lang} />
      </Section>
    </main>
  );
}
