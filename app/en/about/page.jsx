import Link from "next/link";

import BulletList from "@/components/ui/BulletList";
import CtaBlock from "@/components/ui/CtaBlock";
import PageHero from "@/components/ui/PageHero";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Team from "@/app/as-biz-dev/_components/Team";
import TextCard from "@/components/ui/TextCard";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { organisationJsonLd } from "@/lib/seo/headTags";
import { ROUTES } from "@/lib/routes";

export const generateMetadata = () => buildMetadata("about", "en");

// ============================================
// PAGE CONTENT — edit here (headings, copy, team)
// ============================================
const PHOTOS = {
  stephane: "employe/stephane.webp",
  wafa: "employe/wafa.webp",
  khalil: "employe/khalil.webp",
  kaouther: "employe/kaouther.webp",
  taher: "employe/taher.webp",
  Achwek: "employe/Achwek.jpeg",
};

const CONTENT = {
  hero: {
    eyebrow: "AS Biz Dev",
    titleLead: "Accelerate. Develop.",
    titleAccent: "Manage.",
    intro:
      "AS Biz Dev works with SMEs and B2B companies, industrial ones in particular, that want to develop, structure or strengthen their sales activity in targeted markets across Africa and the Middle East.",
  },

  positioning: {
    eyebrow: "Our positioning",
    titleLead: "We do not stop at",
    titleAccent: "the recommendation stage.",
    intro:
      "What sets us apart is that we work both on commercial acceleration and on running part of the export sales activity operationally, over time.",
    doTitle: "What we do",
    doItems: [
      "Identify opportunities in a targeted market",
      "Find and qualify local partners",
      "Prospect, develop accounts and opportunities",
      "Manage a distributor network over time",
      "Run the pipeline and consolidate sales forecasts",
      "Report on activity, results and risks",
    ],
    dontTitle: "What we do not do",
    dontItems: [
      "Sell generalist consulting with no execution behind it",
      "Claim a global presence we do not have",
      "Deliver a study concluding a market looks interesting, and stop there",
    ],
  },

  method: {
    eyebrow: "How we work",
    titleLead: "Understand, prioritise, act,",
    titleAccent: "manage, measure.",
    intro:
      "We work with your teams and your local partners over time. The vocabulary is the one used in the field: distributors, agents, pipeline, forecast, orders, action plans, conversion rates.",
  },

  principles: {
    eyebrow: "The way we operate",
    titleLead: "Three commitments",
    titleAccent: "we keep.",
    items: [
      {
        title: "Keeping our word",
        body: "No reckless promises, no budget overruns: the client always knows where things stand. We do what we say — including saying so when an action has not produced the expected result.",
      },
      {
        title: "Commitment over time",
        body: "Our tempo is that of the field, the objective and the deadline. We do not present a fait accompli: once the problem is framed, we propose the most reliable solution and we execute it.",
      },
      {
        title: "Responsibility",
        body: "Fair pricing, local suppliers paid on time, travel limited to what is necessary. These are operating commitments, not a posture.",
      },
    ],
  },

  expertise: {
    eyebrow: "Our know-how",
    titleLead: "What we can do",
    titleAccent: "in the field.",
    items: [
      {
        title: "Organising upstream",
        body: "Sourcing, planning, ordering, stock management: we assess what a commercial decision does to the product chain, from factory to customer.",
      },
      {
        title: "Making the offer visible",
        body: "Competitive and market research, product positioning, communication planning: we target the channels that actually reach potential customers in the region.",
      },
      {
        title: "Supporting management",
        body: "Export growth changes the internal organisation. We support the teams involved, and we train them where that is needed.",
      },
    ],
    sectorsCta: "See our sectors",
  },

  team: {
    sectionTitle: "The AS Biz Dev team",
    sectionDescription:
      "Hands-on profiles at the service of your business development across Africa and the Middle East.",
    portraitAlt: "Portrait of {name}, {role}",
    members: [
      {
        photo: PHOTOS.stephane,
        name: "Stéphane Allain",
        role: "Founder",
        bio: "20 years of experience analysing and developing international markets for large corporate groups.",
      },
      {
        photo: PHOTOS.wafa,
        name: "Wafa Zouaoui",
        role: "Head of Operations",
        bio: "19 years of experience in operational and functional management in the B2B sector (Tourism).",
      },
      {
        name: "Achwek Kefifi",
        photo: PHOTOS.Achwek,
        bio: "10 ans d’expérience dans le commerce B2B notamment sur le grand Maghreb.",
      },
      {
        photo: PHOTOS.khalil,
        name: "Khalil Abbes",
        role: "Junior Sales Efficiency & AI Officer",
      },
      {
        photo: PHOTOS.kaouther,
        name: "Kaouther Bousaidi",
        role: "Administrative Assistant",
      },
      {
        photo: PHOTOS.taher,
        name: "Taher Kassem",
        role: "Accounting & Finance",
      },
    ],
  },

  cta: {
    eyebrow: "Go further",
    heading: "Which market do you want to move on?",
    label: "Let's talk about your market",
  },
};

// ============================================
// COMPONENT — AS Biz Dev page layout, leave alone unless it's a technical change
// ============================================
export default function AboutEn() {
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
            eyebrow={t.positioning.eyebrow}
            titleLead={t.positioning.titleLead}
            titleAccent={t.positioning.titleAccent}
            intro={t.positioning.intro}
          />

          <div className="mt-[2.5rem] grid gap-[1.25rem] lg:grid-cols-2 lg:gap-[1.25rem]">
            <RevealOnScroll
              variant="left"
              className="rounded-card border border-gray-200 bg-white p-[2rem]"
            >
              <h3 className="font-display text-[1.125rem] font-semibold tracking-[-0.02em] text-navy">
                {t.positioning.doTitle}
              </h3>
              <BulletList items={t.positioning.doItems} className="mt-[1.25rem]" />
            </RevealOnScroll>

            <RevealOnScroll
              variant="right"
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
            className="mt-[3.25rem] max-w-3xl"
          />

          <div className="mt-[1.75rem] grid gap-[1.25rem] md:grid-cols-3">
            {t.principles.items.map((item, index) => (
              <TextCard
                key={item.title}
                item={item}
                index={index}
                variant={index % 2 === 0 ? "up" : "scale"}
              />
            ))}
          </div>
        </Section>

        <Section tone="alt">
          <SectionHeading
            eyebrow={t.expertise.eyebrow}
            titleLead={t.expertise.titleLead}
            titleAccent={t.expertise.titleAccent}
          />

          <div className="mt-[2.5rem] grid gap-[1.25rem] md:grid-cols-3">
            {t.expertise.items.map((item, index) => (
              <TextCard
                key={item.title}
                item={item}
                index={index}
                variant={index % 2 === 0 ? "left" : "right"}
              />
            ))}
          </div>

          <RevealOnScroll variant="up" className="mt-[1.75rem]">
            <Link href={ROUTES.sectors[lang]} className="btn-ghost">
              {t.expertise.sectorsCta}
            </Link>
          </RevealOnScroll>
        </Section>

        <Team copy={t.team} />

        <Section>
          <CtaBlock {...t.cta} lang={lang} />
        </Section>
      </main>
    </>
  );
}
