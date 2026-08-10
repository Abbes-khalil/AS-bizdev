import BulletList from "@/components/BulletList";
import CtaBlock from "@/components/CtaBlock";
import PageHero from "@/components/PageHero";
import RevealOnScroll from "@/components/RevealOnScroll";
import RouteLink from "@/components/RouteLink";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import Team from "@/components/Team";
import TextCard from "@/components/TextCard";
import { getDictionary } from "@/lib/i18n/dictionaries";

/** AS Biz Dev — positioning, method, principles, know-how, team (§2, §5). */
export default function AboutContent({ lang }) {
  const t = getDictionary(lang, "about");

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
          <RouteLink routeKey="sectors" className="btn-ghost">
            {t.expertise.sectorsCta}
          </RouteLink>
        </RevealOnScroll>
      </Section>

      <Team lang={lang} />

      <Section>
        <CtaBlock {...t.cta} />
      </Section>
    </main>
  );
}
