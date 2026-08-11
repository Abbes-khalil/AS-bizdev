import CtaBlock from "@/components/CtaBlock";
import OfferCard from "@/components/OfferCard";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { getDictionary } from "@/lib/i18n/dictionaries";

/** Solutions hub — the fork between the two offers, and nothing else (§3). */
export default function SolutionsContent({ lang }) {
  const t = getDictionary(lang, "solutions");

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
              lang={lang}
              moreLabel={t.more}
            />
          ))}
        </div>

        <CtaBlock {...t.cta} lang={lang} className="mt-[4rem]" />
      </Section>
    </main>
  );
}
