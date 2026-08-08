import BulletList from "../components/BulletList";
import CtaBlock from "../components/CtaBlock";
import PageHero from "../components/PageHero";
import RevealOnScroll from "../components/RevealOnScroll";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import Team from "../components/Team";
import useSeo from "../hooks/useSeo";
import { useT } from "../i18n";

const TextCard = ({ item, index }) => (
  <RevealOnScroll
    as="article"
    variant="up"
    delay={0.05}
    index={index}
    className="flex h-full flex-col rounded-card border border-gray-200 bg-white p-[1.75rem] transition-all duration-300 hover:-translate-y-1 hover:border-navy hover:shadow-lift"
  >
    <h3 className="font-display text-[1.25rem] font-semibold leading-[1.25] tracking-[-0.02em] text-navy">
      {item.title}
    </h3>
    <p className="mt-[0.875rem] text-[0.9375rem] leading-[1.7] text-gray-700">
      {item.body}
    </p>
  </RevealOnScroll>
);

/** AS Biz Dev — positioning, method, principles, know-how, team (§2, §5). */
export default function About() {
  const t = useT("about");
  useSeo("about");

  return (
    <main>
      <PageHero layout="split" {...t.hero} />

      <Section tone="alt">
        <SectionHeading
          eyebrow={t.positioning.eyebrow}
          titleLead={t.positioning.titleLead}
          titleAccent={t.positioning.titleAccent}
          intro={t.positioning.intro}
        />

        <div className="mt-[3rem] grid gap-[1.5rem] lg:grid-cols-2 lg:gap-[2rem]">
          <RevealOnScroll
            variant="up"
            className="rounded-card border border-gray-200 bg-white p-[2rem]"
          >
            <h3 className="font-display text-[1.125rem] font-semibold tracking-[-0.02em] text-navy">
              {t.positioning.doTitle}
            </h3>
            <BulletList items={t.positioning.doItems} className="mt-[1.25rem]" />
          </RevealOnScroll>

          <RevealOnScroll
            variant="up"
            delay={0.1}
            className="rounded-card border border-dashed border-gray-200 p-[2rem]"
          >
            <h3 className="font-display text-[1.125rem] font-semibold tracking-[-0.02em] text-navy">
              {t.positioning.dontTitle}
            </h3>
            <BulletList
              items={t.positioning.dontItems}
              marker="cross"
              className="mt-[1.25rem]"
            />
          </RevealOnScroll>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow={t.method.eyebrow}
          titleLead={t.method.titleLead}
          titleAccent={t.method.titleAccent}
          intro={t.method.intro}
        />

        <SectionHeading
          eyebrow={t.principles.eyebrow}
          titleLead={t.principles.titleLead}
          titleAccent={t.principles.titleAccent}
          className="mt-[4rem] max-w-3xl"
        />

        <div className="mt-[2.5rem] grid gap-[1.5rem] md:grid-cols-3">
          {t.principles.items.map((item, index) => (
            <TextCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </Section>

      <Section tone="alt">
        <SectionHeading
          eyebrow={t.expertise.eyebrow}
          titleLead={t.expertise.titleLead}
          titleAccent={t.expertise.titleAccent}
        />

        <div className="mt-[3rem] grid gap-[1.5rem] md:grid-cols-3">
          {t.expertise.items.map((item, index) => (
            <TextCard key={item.title} item={item} index={index} />
          ))}
        </div>

        <RevealOnScroll variant="up" className="mt-[2rem]">
          <p className="rounded-btn border border-gray-200 px-[1.25rem] py-[1rem] text-[0.875rem] leading-[1.6] text-gray-500">
            {t.expertise.sectorsNote}
          </p>
        </RevealOnScroll>
      </Section>

      <Team />

      <Section>
        <CtaBlock {...t.cta} />
      </Section>
    </main>
  );
}
