import BulletList from "@/components/ui/BulletList";
import PageHero from "@/components/ui/PageHero";
import PartnerForm from "@/components/forms/PartnerForm";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { getDictionary } from "@/lib/i18n/dictionaries";

/** Devenir partenaire — a professional registration, not a job ad (§11–§13). */
export default function BecomePartnerContent({ lang }) {
  const t = getDictionary(lang, "partnerProgram");

  return (
    <main>
      <PageHero layout="split" {...t.hero} />

      <Section tone="alt">
        <div className="grid gap-[2rem] lg:grid-cols-2 lg:gap-[3rem]">
          <SectionHeading
            eyebrow={t.intent.eyebrow}
            titleLead={t.intent.titleLead}
            titleAccent={t.intent.titleAccent}
            intro={t.intent.body}
            className=""
          />

          <RevealOnScroll
            variant="up"
            delay={0.1}
            className="rounded-card border border-dashed border-gray-200 p-[2rem]"
          >
            <h3 className="font-display text-[1.125rem] font-semibold tracking-[-0.02em] text-navy">
              {t.intent.notTitle}
            </h3>
            <BulletList
              items={t.intent.notItems}
              marker="cross"
              className="mt-[1.25rem]"
            />
          </RevealOnScroll>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow={t.profiles.eyebrow}
          titleLead={t.profiles.titleLead}
          titleAccent={t.profiles.titleAccent}
        />

        <RevealOnScroll variant="up" className="mt-[2.5rem]">
          <BulletList items={t.profiles.items} columns={2} />
          <p className="mt-[2rem] max-w-3xl text-[0.9375rem] leading-[1.7] text-gray-500">
            {t.profiles.note}
          </p>
        </RevealOnScroll>
      </Section>

      <Section tone="alt" id="formulaire">
        <SectionHeading
          eyebrow={t.form.eyebrow}
          titleLead={t.form.titleLead}
          titleAccent={t.form.titleAccent}
          intro={t.form.intro}
        />

        <RevealOnScroll variant="up" className="mt-[2.5rem]">
          <PartnerForm copy={t} />
        </RevealOnScroll>
      </Section>
    </main>
  );
}
