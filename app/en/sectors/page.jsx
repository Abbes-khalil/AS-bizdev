import Link from "next/link";

import ArrowIcon from "@/components/ui/ArrowIcon";
import CrossFactorDiagram from "@/app/nos-secteurs/_components/CrossFactorDiagram";
import CtaBlock from "@/components/ui/CtaBlock";
import OfferCard from "@/components/ui/OfferCard";
import PageHero from "@/components/ui/PageHero";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import SectorExplorer from "@/app/nos-secteurs/_components/SectorExplorer";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { organisationJsonLd } from "@/lib/seo/headTags";
import { ROUTES } from "@/lib/routes";

export const generateMetadata = () => buildMetadata("sectors", "en");

// ============================================
// PAGE CONTENT — edit here (headings, copy, sectors)
// ============================================
const CONTENT = {
  hero: {
    eyebrow: "Our sectors",
    titleLead: "Sector environments",
    titleAccent: "we actually know.",
    intro:
      "AS Biz Dev works in sectors where our experience, our contact base and our networks let us identify the relevant economic players, distribution circuits and contacts.",
  },
  heroNote:
    "Our approach is not to claim expertise across every sector, but to mobilise concrete knowledge of the ecosystems where we can genuinely act.",

  explorer: {
    eyebrow: "Our areas of knowledge",
    titleLead: "Eight environments,",
    titleAccent: "one concrete knowledge base.",
    areasLabel: "Areas covered",
    actorsLabel: "Players we can identify",
    highlightLabel: "Key focus area",
    developingLabel: "Domain in development",
  },

  items: [
    {
      id: "industry",
      highlight: true,
      title: "Industry & Equipment",
      intro:
        "A key focus area of AS Biz Dev's positioning. Our knowledge of these environments helps identify the relevant companies and contacts faster.",
      areas: [
        "Industrial equipment",
        "Mechanics",
        "Metalworking",
        "Automation",
        "Electricity",
        "Electronics",
        "Plastics",
        "Packaging",
        "Technical equipment",
        "Industrial subcontracting",
      ],
      actors: [
        "Manufacturers",
        "Buyers",
        "Equipment makers",
        "Integrators",
        "Specialised distributors",
        "Commercial or technical partners",
      ],
    },
    {
      id: "distribution",
      title: "Distribution & Sales Networks",
      intro:
        "AS Biz Dev can work both on finding and selecting new partners and on managing and growing an existing network.",
      areas: [
        "Distributors",
        "Importers",
        "Sales agents",
        "Integrators",
        "Traders",
        "Local partners",
        "B2B networks",
      ],
    },
    {
      id: "agrifood",
      title: "Agrifood & Agriculture",
      areas: [
        "Food industry",
        "Processing",
        "Production",
        "Agriculture",
        "Distribution",
        "Professional equipment",
      ],
    },
    {
      id: "health",
      title: "Healthcare & Pharmaceuticals",
      areas: [
        "Pharmaceutical industry",
        "Laboratories",
        "Specialised distribution",
        "Health",
        "Medical equipment",
      ],
    },
    {
      id: "construction",
      title: "Construction & Technical Equipment",
      areas: [
        "Construction",
        "Building",
        "HVAC",
        "Refrigeration",
        "Technical equipment",
        "Specialised suppliers",
        "Specialised distributors",
      ],
    },
    {
      id: "automotive",
      title: "Automotive & Mobility",
      areas: [
        "Industrial players",
        "Equipment makers",
        "Distributors",
        "Suppliers",
        "Mobility-related companies",
      ],
    },
    {
      id: "transport",
      title: "Transport & Logistics",
      areas: ["Transport", "Logistics", "Freight", "Warehousing", "Supply chain"],
    },
    {
      id: "energy",
      status: "developing",
      title: "Energy & Infrastructure",
      intro:
        "A domain to be developed progressively, depending on actual markets, missions, partners and references available.",
      areas: [],
    },
  ],

  cross: {
    eyebrow: "What this enables",
    titleLead: "Knowledge that crosses",
    titleAccent: "market, sector and decision-maker.",
    intro:
      "The value of our approach comes from crossing several dimensions to move straight to commercial action.",
    factors: ["Country", "Sector", "Company", "Function", "Decision level"],
    outcome: "Commercial action",
    examples: [
      "Identifying industrial decision-makers in Morocco",
      "Finding technical distributors in Ivory Coast",
      "Identifying agrifood players in Tunisia",
      "Finding partners in Senegal",
      "Identifying commercial contacts in the United Arab Emirates",
    ],
  },

  marketsLink: {
    eyebrow: "Go further",
    titleLead: "Sector knowledge that fits into",
    titleAccent: "targeted markets.",
    body: "Our areas of knowledge take on their value when crossed with a concrete understanding of local markets, companies and decision circuits.",
    cta: "Discover our markets",
  },

  offers: {
    eyebrow: "Two ways to mobilise this knowledge",
    titleLead: "From identification",
    titleAccent: "to sales management.",
    items: [
      {
        routeKey: "acceleration",
        label: "Accelerate",
        body: "Identify prospects, buyers, distributors, integrators and partners to create new commercial opportunities.",
      },
      {
        routeKey: "pilotage",
        label: "Manage",
        body: "Manage distributors, grow accounts, track opportunities, structure the pipeline and consolidate sales forecasts.",
      },
    ],
    more: "Learn more",
  },

  cta: {
    eyebrow: "Go further",
    heading: "Want to grow your activity in one of these sectors?",
    label: "Let's talk about your project",
  },
};

// ============================================
// COMPONENT — sectors page layout, leave alone unless it's a technical change
// ============================================
export default function SectorsEn() {
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
          <RevealOnScroll variant="up" className="max-w-3xl">
            <p className="text-[0.9375rem] italic leading-[1.7] text-gray-500">
              {t.heroNote}
            </p>
          </RevealOnScroll>

          <SectionHeading
            eyebrow={t.explorer.eyebrow}
            titleLead={t.explorer.titleLead}
            titleAccent={t.explorer.titleAccent}
            className="mt-[1.75rem] max-w-3xl"
          />

          <div className="mt-[1.75rem]">
            <SectorExplorer items={t.items} copy={t.explorer} ariaLabel={t.explorer.eyebrow} />
          </div>
        </Section>

        <Section>
          <SectionHeading
            eyebrow={t.cross.eyebrow}
            titleLead={t.cross.titleLead}
            titleAccent={t.cross.titleAccent}
            intro={t.cross.intro}
            className="mx-auto max-w-2xl text-center"
          />

          <div className="mt-[2.5rem]">
            <CrossFactorDiagram
              factors={t.cross.factors}
              outcome={t.cross.outcome}
              examples={t.cross.examples}
            />
          </div>
        </Section>

        <Section tone="navy">
          <RevealOnScroll variant="up" className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
            <p className="eyebrow text-orange">{t.marketsLink.eyebrow}</p>
            <h2 className="font-display display-md font-semibold tracking-tight text-white text-balance">
              {t.marketsLink.titleLead}{" "}
              <span className="italic text-orange">{t.marketsLink.titleAccent}</span>
            </h2>
            <p className="max-w-2xl text-[1.0625rem] leading-[1.7] text-white/75">
              {t.marketsLink.body}
            </p>
            <Link href={ROUTES.markets[lang]} className="btn-primary mt-2">
              {t.marketsLink.cta}
              <ArrowIcon />
            </Link>
          </RevealOnScroll>
        </Section>

        <Section tone="alt">
          <SectionHeading
            eyebrow={t.offers.eyebrow}
            titleLead={t.offers.titleLead}
            titleAccent={t.offers.titleAccent}
          />

          <div className="mt-[2.5rem] grid gap-[1.25rem] lg:grid-cols-2 lg:gap-[1.25rem]">
            {t.offers.items.map((offer, index) => (
              <OfferCard key={offer.routeKey} offer={offer} index={index} lang={lang} moreLabel={t.offers.more} />
            ))}
          </div>
        </Section>

        <Section>
          <CtaBlock {...t.cta} lang={lang} />
        </Section>
      </main>
    </>
  );
}
