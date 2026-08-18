import CtaBlock from "@/components/ui/CtaBlock";
import OfferCard from "@/components/ui/OfferCard";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { organisationJsonLd } from "@/lib/seo/headTags";

export const generateMetadata = () => buildMetadata("solutions", "en");

// ============================================
// PAGE CONTENT — edit here (headings, copy, buttons)
// ============================================
const CONTENT = {
  hero: {
    eyebrow: "Our solutions",
    titleLead: "Two offers,",
    titleAccent: "one field.",
    intro:
      "AS Biz Dev steps in at two moments in the commercial life of a region: when it has to be developed, and when it has to be run. Nothing else.",
  },
  items: [
    {
      routeKey: "acceleration",
      eyebrow: "Offer 01",
      title: "Commercial acceleration",
      body: "Opening a new market, finding customers, sourcing distributors or agents, restarting an under-developed region, launching a new offer. We go all the way to commercial action and to real opportunities.",
      bullets: [
        "Market qualification and real potential",
        "Identifying customers, distributors and partners",
        "Prospecting, first contact, meetings",
        "Pipeline structuring and an action plan per market",
      ],
    },
    {
      routeKey: "pilotage",
      eyebrow: "Offer 02",
      title: "Outsourced export sales management",
      body: "You have distributors, agents, local customers or identified potential, but limited internal resources. We take on all or part of the sales management for the region entrusted to us.",
      bullets: [
        "Managing and growing the distribution network",
        "Pipeline and opportunity management",
        "Consolidated sales forecasting",
        "Reporting on activity, results and risks",
      ],
    },
  ],
  more: "See the offer",
  cta: {
    eyebrow: "Go further",
    heading: "Which market do you want to move on?",
    label: "Let's talk about your market",
  },
};

// ============================================
// COMPONENT — solutions hub layout, leave alone unless it's a technical change
// ============================================
export default function SolutionsEn() {
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
          <div className="grid gap-[1.25rem] lg:grid-cols-2 lg:gap-[1.25rem]">
            {t.items.map((offer, index) => (
              <OfferCard
                key={offer.routeKey}
                offer={offer}
                index={index}
                lang={lang}
                moreLabel={t.more}
                variant={index % 2 === 0 ? "left" : "right"}
              />
            ))}
          </div>

          <CtaBlock {...t.cta} lang={lang} className="mt-[3.25rem]" />
        </Section>
      </main>
    </>
  );
}
