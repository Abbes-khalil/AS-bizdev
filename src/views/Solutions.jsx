import CtaBlock from "../components/CtaBlock";
import OfferCard from "../components/OfferCard";
import PageHero from "../components/PageHero";
import Section from "../components/Section";
import useSeo from "../hooks/useSeo";
import { useT } from "../i18n";

/** Solutions hub — the fork between the two offers, and nothing else (§3). */
export default function Solutions() {
  const t = useT("solutions");
  useSeo("solutions");

  return (
    <main>
      <PageHero layout="split" {...t.hero} />

      <Section tone="alt">
        <div className="grid gap-[1.5rem] lg:grid-cols-2 lg:gap-[2rem]">
          {t.items.map((offer, index) => (
            <OfferCard
              key={offer.routeKey}
              offer={offer}
              index={index}
              moreLabel={t.more}
            />
          ))}
        </div>

        <CtaBlock {...t.cta} className="mt-[4rem]" />
      </Section>
    </main>
  );
}
