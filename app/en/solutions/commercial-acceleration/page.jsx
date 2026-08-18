import BulletList from "@/components/ui/BulletList";
import CtaBlock from "@/components/ui/CtaBlock";
import PageHero from "@/components/ui/PageHero";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import StepList from "@/components/ui/StepList";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { ROUTES } from "@/lib/routes";
import { breadcrumbJsonLd, organisationJsonLd } from "@/lib/seo/headTags";
import { SITE_URL } from "@/lib/constants/site";

export const generateMetadata = () => buildMetadata("acceleration", "en");

// ============================================
// PAGE CONTENT — edit here (headings, copy, buttons)
// ============================================
const CONTENT = {
  hero: {
    eyebrow: "Offer 01 — Commercial acceleration",
    titleLead: "Turning potential into",
    titleAccent: "real commercial activity.",
    intro:
      "AS Biz Dev does not deliver a study concluding that a market looks interesting. The point is to go all the way to commercial action and to real opportunities.",
  },

  situations: {
    eyebrow: "Starting point",
    titleLead: "You probably recognise yourself in",
    titleAccent: "one of these sentences.",
    items: [
      "“We want to develop this country but don't know where to start.”",
      "“We have identified potential but have no sales resources available.”",
      "“We are looking for distributors.”",
      "“Our presence in this market is still too thin.”",
    ],
  },

  process: {
    eyebrow: "How AS Biz Dev responds",
    titleLead: "Six steps, from market qualification",
    titleAccent: "to first results.",
    steps: [
      { title: "Market qualification", body: "Real commercial potential, competition in place, access constraints, decision-making circuits." },
      { title: "Target identification", body: "Priority targets, potential customers, distributors and agents to qualify." },
      { title: "Building the action plan", body: "Approach sequence per market, resources committed, milestones and success criteria." },
      { title: "Prospecting and partner search", body: "First contact, prospecting, arranging meetings, qualifying distributors." },
      { title: "Developing opportunities", body: "Account development, support on first negotiations, pipeline structuring." },
      { title: "Follow-up and measurement", body: "Opportunity progress, gaps against plan, decisions to take next." },
    ],
  },

  interventions: {
    eyebrow: "Types of engagement",
    titleLead: "What we",
    titleAccent: "take on.",
    intro: "Depending on the project, the engagement covers all or part of the following.",
    items: [
      "Commercial potential analysis",
      "Market qualification",
      "Defining priority targets",
      "Identifying potential customers",
      "Identifying and qualifying distributors",
      "Sourcing agents and commercial partners",
      "First contact and prospecting",
      "Arranging meetings",
      "Account development",
      "Support on first negotiations",
      "Structuring the sales pipeline",
      "Preparing an action plan per market",
    ],
  },

  cta: {
    eyebrow: "Go further",
    heading: "Which market do you want to open or restart?",
    label: "Let's talk about your market",
  },
};

const SituationQuote = ({ quote, index }) => (
  <RevealOnScroll
    as="li"
    variant="up"
    delay={0.05}
    index={index}
    className="rounded-card border border-gray-200 bg-white p-[1.25rem]"
  >
    <blockquote className="font-display text-[1.0625rem] font-medium leading-[1.5] tracking-[-0.02em] text-navy">
      {quote}
    </blockquote>
  </RevealOnScroll>
);

// ============================================
// COMPONENT — Offer 1, Commercial acceleration layout, leave alone unless it's a technical change
// ============================================
export default function AccelerationEn() {
  const lang = "en";
  const t = CONTENT;

  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: `${SITE_URL}${ROUTES.home.en}` },
    { name: "Solutions", url: `${SITE_URL}${ROUTES.solutions.en}` },
    { name: "Commercial acceleration", url: `${SITE_URL}${ROUTES.acceleration.en}` },
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

          <ul role="list" className="mt-[1.75rem] grid gap-[1.25rem] md:grid-cols-2">
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

          <div className="mt-[2.5rem]">
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

          <RevealOnScroll variant="up" className="mt-[1.75rem]">
            <BulletList items={t.interventions.items} columns={2} />
          </RevealOnScroll>

          <CtaBlock {...t.cta} lang={lang} className="mt-[3.25rem]" />
        </Section>
      </main>
    </>
  );
}
