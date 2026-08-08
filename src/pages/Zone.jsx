import CtaBlock from "../components/CtaBlock";
import MarketList from "../components/MarketList";
import PageHero from "../components/PageHero";
import Section from "../components/Section";
import { countriesByZone } from "../data/countries";
import useSeo from "../hooks/useSeo";
import { useT } from "../i18n";

/**
 * One geographic zone and the countries it contains.
 *
 * @param zone "africa" | "middleEast" — also the route key, so the page is
 *             driven entirely by data and needs no per-zone component.
 */
export default function Zone({ zone }) {
  const t = useT("markets");
  useSeo(zone);

  const countries = countriesByZone(zone);

  return (
    <main>
      <PageHero layout="split" {...t.zones[zone]} />

      <Section tone="alt">
        <MarketList
          countries={countries}
          empty={t.empty}
          moreLabel={t.hub.more}
        />

        <CtaBlock {...t.hub.cta} className="mt-[4rem]" />
      </Section>
    </main>
  );
}
