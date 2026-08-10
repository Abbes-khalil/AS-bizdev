import BulletList from "@/components/BulletList";
import CtaBlock from "@/components/CtaBlock";
import PageHero from "@/components/PageHero";
import RevealOnScroll from "@/components/RevealOnScroll";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import StepList from "@/components/StepList";
import { getDictionary } from "@/lib/i18n/dictionaries";

const SituationQuote = ({ quote, index }) => (
  <RevealOnScroll
    as="li"
    variant="up"
    delay={0.05}
    index={index}
    className="rounded-card border border-gray-200 bg-white p-[1.75rem]"
  >
    <blockquote className="font-display text-[1.0625rem] font-medium leading-[1.5] tracking-[-0.02em] text-navy">
      {quote}
    </blockquote>
  </RevealOnScroll>
);

/** Offer 1 — Accélération commerciale (§8). */
export default function AccelerationContent({ lang }) {
  const t = getDictionary(lang, "acceleration");

  return (
    <main>
      <PageHero layout="split" {...t.hero} />

      <Section tone="alt">
        <SectionHeading
          eyebrow={t.situations.eyebrow}
          titleLead={t.situations.titleLead}
          titleAccent={t.situations.titleAccent}
        />

        <ul role="list" className="mt-[2.5rem] grid gap-[1.25rem] md:grid-cols-2">
          {t.situations.items.map((quote, index) => (
            <SituationQuote key={quote} quote={quote} index={index} />
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeading
          eyebrow={t.process.eyebrow}
          titleLead={t.process.titleLead}
          titleAccent={t.process.titleAccent}
        />

        <div className="mt-[3rem]">
          <StepList steps={t.process.steps} />
        </div>
      </Section>

      <Section tone="alt">
        <SectionHeading
          eyebrow={t.interventions.eyebrow}
          titleLead={t.interventions.titleLead}
          titleAccent={t.interventions.titleAccent}
          intro={t.interventions.intro}
        />

        <RevealOnScroll variant="up" className="mt-[2.5rem]">
          <BulletList items={t.interventions.items} columns={2} />
        </RevealOnScroll>

        <CtaBlock {...t.cta} className="mt-[4rem]" />
      </Section>
    </main>
  );
}
