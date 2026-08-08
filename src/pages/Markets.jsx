import ArrowIcon from "../components/ArrowIcon";
import CtaBlock from "../components/CtaBlock";
import PageHero from "../components/PageHero";
import RevealOnScroll from "../components/RevealOnScroll";
import RouteLink from "../components/RouteLink";
import Section from "../components/Section";
import useSeo from "../hooks/useSeo";
import { useT } from "../i18n";

const ZoneCard = ({ zone, index, moreLabel }) => (
  <RevealOnScroll
    as="article"
    variant="up"
    delay={0.05}
    index={index}
    className="flex h-full flex-col rounded-card border border-gray-200 bg-white p-[2rem] transition-all duration-300 hover:-translate-y-1 hover:border-navy hover:shadow-lift lg:p-[2.5rem]"
  >
    <h2 className="font-display text-[1.75rem] font-semibold leading-[1.2] tracking-[-0.02em] text-navy">
      {zone.title}
    </h2>
    <p className="mt-[1rem] text-[1rem] leading-[1.7] text-gray-700">
      {zone.body}
    </p>
    <RouteLink routeKey={zone.routeKey} className="btn-ghost mt-[2rem] self-start">
      {moreLabel}
      <ArrowIcon />
    </RouteLink>
  </RevealOnScroll>
);

/** Markets hub (§6, §10). */
export default function Markets() {
  const t = useT("markets");
  useSeo("markets");

  return (
    <main>
      <PageHero layout="split" {...t.hub.hero} />

      <Section tone="alt">
        <div className="grid gap-[1.5rem] lg:grid-cols-2 lg:gap-[2rem]">
          {t.hub.zones.map((zone, index) => (
            <ZoneCard
              key={zone.routeKey}
              zone={zone}
              index={index}
              moreLabel={t.hub.more}
            />
          ))}
        </div>

        <CtaBlock {...t.hub.cta} className="mt-[4rem]" />
      </Section>
    </main>
  );
}
