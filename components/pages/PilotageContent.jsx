import BulletList from "@/components/ui/BulletList";
import CtaBlock from "@/components/ui/CtaBlock";
import PageHero from "@/components/ui/PageHero";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { getDictionary } from "@/lib/i18n/dictionaries";

const FunctionCard = ({ item, index }) => (
  <RevealOnScroll
    as="article"
    variant="up"
    delay={0.05}
    index={index}
    className="flex h-full flex-col rounded-card border border-gray-200 bg-white p-[1.75rem] transition-all duration-300 hover:-translate-y-1 hover:border-navy hover:shadow-lift"
  >
    <h3 className="font-display text-[1.25rem] font-semibold uppercase leading-[1.2] tracking-[-0.02em] text-navy">
      {item.title}
    </h3>
    <p className="mt-[0.5rem] text-[0.9375rem] leading-[1.5] text-orange">
      {item.lead}
    </p>
    <BulletList items={item.bullets} marker="dash" className="mt-[1.25rem]" />
  </RevealOnScroll>
);

/** Offer 2 — Pilotage commercial export externalisé (§9). */
export default function PilotageContent({ lang }) {
  const t = getDictionary(lang, "pilotage");

  return (
    <main>
      <PageHero layout="split" {...t.hero} />

      <Section tone="alt">
        <SectionHeading
          eyebrow={t.situations.eyebrow}
          titleLead={t.situations.titleLead}
          titleAccent={t.situations.titleAccent}
        />

        <RevealOnScroll variant="up" className="mt-[2.5rem]">
          <BulletList items={t.situations.items} columns={2} />
          <p className="mt-[2rem] max-w-2xl text-[1.0625rem] leading-[1.7] text-gray-700">
            {t.situations.outro}
          </p>
        </RevealOnScroll>
      </Section>

      <Section>
        <SectionHeading
          eyebrow={t.functions.eyebrow}
          titleLead={t.functions.titleLead}
          titleAccent={t.functions.titleAccent}
        />

        <div className="mt-[3rem] grid gap-[1.5rem] md:grid-cols-2 lg:grid-cols-3">
          {t.functions.items.map((item, index) => (
            <FunctionCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </Section>

      <Section tone="navy">
        <RevealOnScroll variant="up" className="max-w-3xl">
          <p className="eyebrow text-orange">{t.promise.eyebrow}</p>
          <h2 className="mt-4 font-display display-md font-semibold tracking-tight text-white text-balance">
            {t.promise.titleLead}{" "}
            <span className="italic text-orange">{t.promise.titleAccent}</span>
          </h2>
          <p className="mt-6 text-[1.0625rem] leading-[1.7] text-white/75">
            {t.promise.body}
          </p>
          <p className="mt-4 text-[1.0625rem] leading-[1.7] text-white/75">
            {t.promise.note}
          </p>
          <p className="mt-8 rounded-btn border border-white/20 px-[1.25rem] py-[1rem] text-[0.875rem] leading-[1.6] text-white/60">
            {t.promise.scope}
          </p>
        </RevealOnScroll>
      </Section>

      <Section tone="alt">
        <CtaBlock {...t.cta} lang={lang} />
      </Section>
    </main>
  );
}
