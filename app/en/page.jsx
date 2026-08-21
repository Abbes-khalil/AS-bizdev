import Image from "next/image";

import ArrowIcon from "@/components/ui/ArrowIcon";
import MotionCta from "@/components/ui/MotionCta";
import OfferCard from "@/components/ui/OfferCard";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import StepList from "@/components/ui/StepList";
import { ASSET } from "@/lib/siteData";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { organisationJsonLd } from "@/lib/seo/headTags";
import { ROUTES } from "@/lib/routes";

export const generateMetadata = () => buildMetadata("home", "en");

// ============================================
// PAGE CONTENT — edit here (headings, copy, buttons)
// ============================================
const CONTENT = {
  hero: {
    titleLead: "Accelerate your business development across",
    titleAccent: "Africa & the Middle East",
    paragraphs: [
      "AS Biz Dev helps SMEs open, grow and manage their export markets.",
      "From finding customers and distributors through to managing your local sales activity on your behalf.",
    ],
    ctaPrimary: "Let's talk about your market",
    ctaSecondary: "See how we work",
    mapAlt:
      "Map of AS Biz Dev's areas of operation across Africa and the Middle East.",
  },

  twoWays: {
    eyebrow: "Two ways to work with AS Biz Dev",
    titleLead: "Grow a market, or",
    titleAccent: "run it for you.",
    intro:
      "We step in at two different moments in the commercial life of a region. The two offers can be combined or taken separately.",
    more: "Learn more",
    items: [
      {
        routeKey: "acceleration",
        label: "Accelerate a market",
        body: "You want to enter a new country, grow a region, find customers or build a distribution network. AS Biz Dev turns your growth ambition into a commercial action plan and supports its execution in the field.",
      },
      {
        routeKey: "pilotage",
        label: "Outsource sales management",
        body: "You already have customers, distributors or opportunities but lack the resources to manage and grow the activity properly. AS Biz Dev takes on all or part of the sales management for the region: distributors, pipeline, forecast, action plans and reporting.",
      },
    ],
  },

  approach: {
    eyebrow: "What sets us apart",
    titleLead: "Strategy",
    titleAccent: "and execution.",
    intro:
      "We do not stop at defining a strategy or handing over recommendations. Depending on what the company needs, we identify the opportunities, find the local partners, develop the markets, and then run the sales activity for the region over time.",
    steps: [
      { title: "Understand", body: "Real market potential, competition in place, decision-making processes." },
      { title: "Prioritise", body: "Selected targets, accounts and channels, and the market-entry sequence." },
      { title: "Act", body: "First contact, prospecting, meetings, distributor search." },
      { title: "Manage", body: "Pipeline, action plans, day-to-day management of local partners." },
      { title: "Measure", body: "Sales forecasts, gaps, results, next steps." },
    ],
  },

  markets: {
    eyebrow: "Markets",
    titleLead: "Named markets,",
    titleAccent: "not a world map.",
    intro:
      "We do not claim a global presence. We work on identified markets across Africa and the Middle East, and we name them.",
    cta: "See the markets",
  },

  partner: {
    eyebrow: "Become a partner",
    titleLead: "You know your market.",
    titleAccent: "Let's build opportunities together.",
    intro:
      "AS Biz Dev is building a focused network of commercial and sector partners across its priority markets in Africa and the Middle East.",
    cta: "Register my profile",
  },
};

// ============================================
// COMPONENT — home page layout, leave alone unless it's a technical change
// ============================================
export default function HomePageEn() {
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
        {/* HERO — who we help, what we do, where, in one screen (§7). */}
        <section className="relative overflow-hidden bg-white">
          <div className="relative container-x pt-8 pb-12 md:pt-10 md:pb-14 lg:pt-14 lg:pb-16">
            <div className="grid items-center gap-12 lg:grid-cols-[1.9fr_1fr] lg:gap-10 xl:gap-14">
              <RevealOnScroll variant="up">
                <h1 className="font-display max-w-xl text-[2.5rem] font-semibold leading-[1.15] tracking-tight text-navy md:text-[3rem] lg:max-w-none lg:text-[2.5rem] xl:text-[2.75rem]">
                  <span className="block text-balance">{t.hero.titleLead}</span>
                  <span className="block text-balance italic text-orange">
                    {t.hero.titleAccent}
                  </span>
                </h1>

                {t.hero.paragraphs.map((paragraph, index) => (
                  <p
                    key={paragraph}
                    className={`${index === 0 ? "mt-8" : "mt-4"} max-w-xl text-[1.0625rem] leading-[1.65] text-gray-700 text-pretty`}
                  >
                    {paragraph}
                  </p>
                ))}

                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <MotionCta href={ROUTES.contact[lang]} className="btn-primary">
                    {t.hero.ctaPrimary}
                    <ArrowIcon />
                  </MotionCta>
                  <MotionCta href={ROUTES.solutions[lang]} className="btn-secondary">
                    {t.hero.ctaSecondary}
                  </MotionCta>
                </div>
              </RevealOnScroll>

              <RevealOnScroll variant="right" delay={0.15} className="relative">
                <div className="relative mx-auto aspect-square w-full">
                  <Image
                    src={ASSET + "maps.webp"}
                    alt={t.hero.mapAlt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-contain"
                  />
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* TWO WAYS TO WORK WITH US — the fork the whole site is built on. */}
        <Section tone="alt">
          <SectionHeading
            eyebrow={t.twoWays.eyebrow}
            titleLead={t.twoWays.titleLead}
            titleAccent={t.twoWays.titleAccent}
            intro={t.twoWays.intro}
          />

          <div className="mt-[2.5rem] grid gap-[1.25rem] lg:grid-cols-2 lg:gap-[1.25rem]">
            {t.twoWays.items.map((offer, index) => (
              <OfferCard
                key={offer.routeKey}
                offer={offer}
                index={index}
                lang={lang}
                moreLabel={t.twoWays.more}
              />
            ))}
          </div>
        </Section>

        {/* STRATEGY + EXECUTION (§5). */}
        <Section>
          <SectionHeading
            eyebrow={t.approach.eyebrow}
            titleLead={t.approach.titleLead}
            titleAccent={t.approach.titleAccent}
            intro={t.approach.intro}
          />

          <div className="mt-[2.5rem]">
            <StepList steps={t.approach.steps} columns={5} />
          </div>
        </Section>

        {/* MARKETS — named markets, never a world map (§6). */}
        <Section tone="navy">
          <div className="grid items-end gap-[1.25rem] lg:grid-cols-[1.4fr_0.6fr]">
            <RevealOnScroll variant="up">
              <p className="eyebrow text-orange">{t.markets.eyebrow}</p>
              <h2 className="mt-4 font-display display-md font-semibold tracking-tight text-white text-balance">
                {t.markets.titleLead}{" "}
                <span className="italic text-orange">
                  {t.markets.titleAccent}
                </span>
              </h2>
              <p className="mt-6 max-w-2xl text-[1.0625rem] leading-[1.7] text-white/75">
                {t.markets.intro}
              </p>
            </RevealOnScroll>

            <RevealOnScroll variant="up" delay={0.1} className="lg:justify-self-end">
              <MotionCta href={ROUTES.markets[lang]} className="btn-primary">
                {t.markets.cta}
                <ArrowIcon />
              </MotionCta>
            </RevealOnScroll>
          </div>
        </Section>

        {/* PARTNER NETWORK (§11). */}
        <Section tone="alt">
          <div className="grid items-end gap-[1.25rem] lg:grid-cols-[1.4fr_0.6fr]">
            <SectionHeading
              eyebrow={t.partner.eyebrow}
              titleLead={t.partner.titleLead}
              titleAccent={t.partner.titleAccent}
              intro={t.partner.intro}
            />

            <RevealOnScroll variant="up" delay={0.1} className="lg:justify-self-end">
              <MotionCta href={ROUTES.becomePartner[lang]} className="btn-navy">
                {t.partner.cta}
                <ArrowIcon />
              </MotionCta>
            </RevealOnScroll>
          </div>
        </Section>
      </main>
    </>
  );
}
