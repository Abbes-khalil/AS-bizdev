import BulletList from "@/components/ui/BulletList";
import CtaBlock from "@/components/ui/CtaBlock";
import PageHero from "@/components/ui/PageHero";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { ROUTES } from "@/lib/routes";
import { breadcrumbJsonLd, organisationJsonLd } from "@/lib/seo/headTags";
import { SITE_URL } from "@/lib/constants/site";

export const generateMetadata = () => buildMetadata("pilotage", "en");

// ============================================
// PAGE CONTENT — edit here (headings, copy, buttons)
// ============================================
const CONTENT = {
  hero: {
    eyebrow: "Offer 02 — Outsourced export sales management",
    titleLead: "Your export sales activity, run as an",
    titleAccent: "extension of your team.",
    intro:
      "AS Biz Dev takes on, on behalf of an SME, all or part of the management of its sales activity across a defined region.",
  },

  situations: {
    eyebrow: "Who this is for",
    titleLead: "Four situations we meet",
    titleAccent: "regularly.",
    items: [
      "You have distributors but no time to manage them.",
      "Your sales forecasts lack visibility.",
      "The opportunities exist but follow-up is irregular.",
      "You want to grow a region without immediately hiring a dedicated sales team.",
    ],
    outro:
      "We work directly with your distributors, partners, prospects and internal teams.",
  },

  functions: {
    eyebrow: "Scope",
    titleLead: "Five functions",
    titleAccent: "covered.",
    items: [
      {
        title: "Manage",
        lead: "the distributor network.",
        bullets: [
          "Regular contact with distributors",
          "Business reviews and activity follow-up",
          "Setting priorities and action plans",
          "Tracking targets and surfacing blockers",
        ],
      },
      {
        title: "Develop",
        lead: "accounts, markets and opportunities.",
        bullets: [
          "Prospecting and account development",
          "Identifying and qualifying new distributors",
          "Assessing potential and supporting negotiation",
          "Progressive onboarding into the network",
        ],
      },
      {
        title: "Run",
        lead: "the pipeline and the action plans.",
        bullets: [
          "Identifying and qualifying opportunities",
          "Follow-up, prioritisation, chasing",
          "Keeping the pipeline current",
          "Coordination with your teams",
        ],
      },
      {
        title: "Forecast",
        lead: "sales and consolidate the numbers.",
        bullets: [
          "Collecting information from partners",
          "Analysing opportunities and consolidating forecasts",
          "Keeping the forecast up to date",
          "Identifying gaps, flagging risks and opportunities",
        ],
      },
      {
        title: "Report",
        lead: "activity, results and next actions.",
        bullets: [
          "Sales activity, opportunities, pipeline",
          "Sales forecasts and actions under way",
          "Results and risks",
          "Next steps",
        ],
      },
    ],
  },

  promise: {
    eyebrow: "What this changes",
    titleLead: "An operational sales capability,",
    titleAccent: "without an immediate local structure.",
    body: "The company gains an operational sales capability in its export markets without having to build a dedicated team or a full local structure straight away.",
    note: "The level of outsourcing stays flexible: AS Biz Dev can take on a targeted assignment or run the sales activity of a defined region on an ongoing basis.",
  },

  cta: {
    eyebrow: "Go further",
    heading: "Which region would you entrust to us?",
    label: "Let's talk about your region",
  },
};

const FunctionCard = ({ item, index }) => (
  <RevealOnScroll
    as="article"
    variant="up"
    delay={0.05}
    index={index}
    className="flex h-full flex-col rounded-card border border-gray-200 bg-white p-[1.25rem] transition-all duration-300 hover:-translate-y-1 hover:border-navy hover:shadow-lift"
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

// ============================================
// COMPONENT — Offer 2, Outsourced export sales management layout, leave alone unless it's a technical change
// ============================================
export default function PilotageEn() {
  const lang = "en";
  const t = CONTENT;

  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: `${SITE_URL}${ROUTES.home.en}` },
    { name: "Solutions", url: `${SITE_URL}${ROUTES.solutions.en}` },
    { name: "Outsourced export sales management", url: `${SITE_URL}${ROUTES.pilotage.en}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organisationJsonLd("en")),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <main>
        <PageHero layout="split" {...t.hero} />

        <Section tone="alt">
          <SectionHeading
            eyebrow={t.situations.eyebrow}
            titleLead={t.situations.titleLead}
            titleAccent={t.situations.titleAccent}
          />

          <RevealOnScroll variant="up" className="mt-[1.75rem]">
            <BulletList items={t.situations.items} columns={2} />
            <p className="mt-[1.75rem] max-w-2xl text-[1.0625rem] leading-[1.7] text-gray-700">
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

          <div className="mt-[2.5rem] grid gap-[1.25rem] md:grid-cols-2 lg:grid-cols-3">
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
          </RevealOnScroll>
        </Section>

        <Section tone="alt">
          <CtaBlock {...t.cta} lang={lang} />
        </Section>
      </main>
    </>
  );
}
