import BulletList from "@/components/ui/BulletList";
import CtaBlock from "@/components/ui/CtaBlock";
import PageHero from "@/components/ui/PageHero";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import StepList from "@/components/ui/StepList";
import TextCard from "@/components/ui/TextCard";
import { getDictionary } from "@/lib/i18n/dictionaries";

/**
 * "Notre réseau" — contact base, decision-level access, the APM/GIZ/Business
 * France ecosystem, and the Connaître/Identifier/Connecter/Exécuter framework
 * (§5–§8).
 */
export default function NetworkContent({ lang }) {
  const t = getDictionary(lang, "network");

  return (
    <main>
      <PageHero layout="split" {...t.hero} />

      <Section tone="alt">
        <SectionHeading
          eyebrow={t.base.eyebrow}
          titleLead={t.base.titleLead}
          titleAccent={t.base.titleAccent}
          intro={t.base.intro}
        />

        <RevealOnScroll variant="up" className="mt-[1.75rem] max-w-2xl">
          <h3 className="font-display text-[1rem] font-semibold tracking-[-0.02em] text-navy">
            {t.base.functionsTitle}
          </h3>
          <BulletList items={t.base.functions} columns={2} className="mt-[1.25rem]" />
        </RevealOnScroll>
      </Section>

      <Section>
        <SectionHeading
          eyebrow={t.pillars.eyebrow}
          titleLead={t.pillars.titleLead}
          titleAccent={t.pillars.titleAccent}
        />

        <div className="mt-[2.5rem] grid gap-[1.25rem] md:grid-cols-2">
          {t.pillars.items.map((item, index) => (
            <TextCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </Section>

      <Section tone="alt">
        <SectionHeading
          eyebrow={t.ecosystem.eyebrow}
          titleLead={t.ecosystem.titleLead}
          titleAccent={t.ecosystem.titleAccent}
          intro={t.ecosystem.intro}
        />

        <div className="mt-[2.5rem] grid gap-[1.25rem] md:grid-cols-3">
          {t.ecosystem.items.map((item, index) => (
            <TextCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow={t.difference.eyebrow}
          titleLead={t.difference.titleLead}
          titleAccent={t.difference.titleAccent}
          intro={t.difference.intro}
        />

        <div className="mt-[2.5rem]">
          <StepList steps={t.difference.steps} />
        </div>
      </Section>

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
        <CtaBlock {...t.cta} lang={lang} />
      </Section>
    </main>
  );
}
