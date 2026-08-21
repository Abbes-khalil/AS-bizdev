import BulletList from "@/components/ui/BulletList";
import CtaBlock from "@/components/ui/CtaBlock";
import PageHero from "@/components/ui/PageHero";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import StepList from "@/components/ui/StepList";
import TextCard from "@/components/ui/TextCard";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { organisationJsonLd } from "@/lib/seo/headTags";

export const generateMetadata = () => buildMetadata("network", "en");

// ============================================
// PAGE CONTENT — edit here (headings, copy, buttons)
// ============================================
const CONTENT = {
  hero: {
    eyebrow: "Our network",
    titleLead: "We do not start",
    titleAccent: "from scratch.",
    intro:
      "AS Biz Dev progressively builds up a knowledge of companies, decision-makers, sectors and local networks in order to accelerate our clients' business development.",
  },

  base: {
    eyebrow: "A structured professional network",
    titleLead: "A proprietary base,",
    titleAccent: "and a broader relational environment.",
    intro:
      "AS Biz Dev has a structured proprietary base of close to 7,000 professional contacts, complemented by its personal network, professional relationships and the various ecosystems the company takes part in. This broader relational environment represents several thousand decision-makers and professional contacts that can be mobilised or identified depending on the market and the project. This is not a simple mailing list, but a structured relational and informational asset.",
    functionsTitle: "Functions represented",
    functions: [
      "General Management",
      "Sales Management",
      "Export Management",
      "Business Development",
      "Procurement",
      "Industrial Management",
      "Subsidiary Management",
      "Operational management",
    ],
  },

  pillars: {
    eyebrow: "What this changes",
    titleLead: "The quality of the network, more than",
    titleAccent: "the number of contacts.",
    items: [
      {
        title: "Access to the right decision level",
        body: "The value of a commercial base does not lie only in the number of contacts. AS Biz Dev focuses on identifying people with a real capacity to decide, recommend, prescribe, buy, distribute, develop a partnership or open access to a market.",
      },
      {
        title: "Knowledge that crosses market, sector and decision-maker",
        body: "Country × Sector × Company × Function × Decision level. For example: identifying industrial decision-makers in Morocco, finding technical distributors in Ivory Coast, identifying agrifood players in Tunisia, finding partners in Senegal, or identifying commercial contacts in the United Arab Emirates.",
      },
    ],
  },

  ecosystem: {
    eyebrow: "An ecosystem of complementary networks",
    titleLead: "Networks that complement",
    titleAccent: "our knowledge of the markets.",
    intro:
      "AS Biz Dev does not rely solely on its own contact base. We also draw on various professional, economic and institutional networks.",
    items: [
      {
        title: "APM — Association Progrès du Management",
        body: "A French network of business leaders, organised around clubs that let leaders train, share their experience and exchange with peers. For AS Biz Dev, this environment brings us into contact with an ecosystem of SME and mid-cap leaders facing concrete growth, organisation and business development challenges.",
      },
      {
        title: "GIZ — Deutsche Gesellschaft für Internationale Zusammenarbeit",
        body: "The German international cooperation agency, present in many emerging countries, notably across Africa, running economic development, cooperation, training and local ecosystem programmes. AS Biz Dev draws on networks and ecosystems built around GIZ to enrich its knowledge of local players.",
      },
      {
        title: "Business France",
        body: "The French public agency that helps French companies with their international development, with teams and networks in many countries. AS Biz Dev collaborates with Business France and is referenced in its programmes and networks, which complements our ability to support SMEs in their international development.",
      },
    ],
  },

  difference: {
    eyebrow: "What sets us apart",
    titleLead: "Turning the network",
    titleAccent: "into business.",
    intro:
      "A contact file only has value if it makes it possible to generate relevant commercial actions faster.",
    steps: [
      { title: "Know", body: "Understand the market, its players, its sectors, its distribution channels and its local specifics." },
      { title: "Identify", body: "Find the companies, the decision-makers, the prospects, the distributors, the partners and the integrators." },
      { title: "Connect", body: "Mobilise our contact base, our professional network, our network of business leaders, our local partners, and the APM, GIZ, Business France and other relevant network ecosystems." },
      { title: "Execute", body: "Move to action: prospecting, first contacts, meetings, partner search, account development, distributor management, pipeline follow-up, sales forecasting, sales management." },
    ],
  },

  closing: {
    quote: "We do not sell an address book.",
    body: "We use market knowledge, data, professional networks and our ability to execute in order to accelerate our clients' business development. Our value does not lie only in our ability to identify the right contacts. It lies in our ability to turn these connections into commercial actions, opportunities and market development.",
  },

  cta: {
    eyebrow: "Go further",
    heading: "Let's talk about your market",
    label: "Contact us",
  },
};

// ============================================
// COMPONENT — network page layout, leave alone unless it's a technical change
// ============================================
export default function NetworkEn() {
  const lang = "en";
  const t = CONTENT;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organisationJsonLd("en")),
        }}
      />

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
    </>
  );
}
