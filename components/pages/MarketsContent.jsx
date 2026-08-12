import Link from "next/link";

import ArrowIcon from "@/components/ui/ArrowIcon";
import BulletList from "@/components/ui/BulletList";
import CtaBlock from "@/components/ui/CtaBlock";
import OfferCard from "@/components/ui/OfferCard";
import PageHero from "@/components/ui/PageHero";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { ROUTES } from "@/lib/routes";

/**
 * /marches — the main markets page: a closing quote, then a two-card fork
 * into the Africa and Middle East zone pages (each with its own map).
 */
export default function MarketsContent({ lang }) {
  const t = getDictionary(lang, "markets");

  const zoneOffers = [
    { routeKey: "africa", ...t.zones.africa },
    { routeKey: "middleEast", ...t.zones.middleEast },
  ];

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

      <Section>
        <div className="grid gap-[1.25rem] lg:grid-cols-2 lg:gap-[1.25rem]">
          {zoneOffers.map((offer, index) => (
            <OfferCard
              key={offer.routeKey}
              offer={{ ...offer, title: offer.titleAccent, body: offer.intro }}
              index={index}
              lang={lang}
              moreLabel={t.zonesCta}
            />
          ))}
        </div>
      </Section>

      <Section tone="alt">
        <SectionHeading
          eyebrow={t.capabilities.eyebrow}
          titleLead={t.capabilities.titleLead}
          titleAccent={t.capabilities.titleAccent}
          intro={t.capabilities.intro}
        />

        <BulletList items={t.capabilities.items} className="mt-[2rem] max-w-2xl" />

        <RevealOnScroll variant="up" className="mt-[2rem]">
          <Link href={ROUTES.sectors[lang]} className="btn-ghost">
            {t.sectorsLink}
            <ArrowIcon />
          </Link>
        </RevealOnScroll>
      </Section>

      <Section>
        <CtaBlock {...t.cta} lang={lang} />
      </Section>
    </main>
  );
}
