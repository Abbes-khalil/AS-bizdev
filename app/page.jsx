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

export const generateMetadata = () => buildMetadata("home", "fr");

// ============================================
// CONTENU AFFICHÉ — modifier ici (titres, textes, boutons)
// ============================================
const CONTENT = {
  hero: {
    titleLead: "Accélérez votre développement commercial en",
    titleAccent: "Afrique & Moyen-Orient",
    paragraphs: [
      "AS Biz Dev accompagne les PME dans l'ouverture, le développement et le pilotage de leurs marchés export.",
      "De la recherche de clients et de distributeurs jusqu'au pilotage commercial externalisé de votre activité locale.",
    ],
    ctaPrimary: "Parlons de votre marché",
    ctaSecondary: "Découvrir notre approche",
    mapAlt:
      "Carte des zones d'intervention d'AS Biz Dev en Afrique et au Moyen-Orient.",
  },

  twoWays: {
    eyebrow: "Deux façons de travailler avec AS Biz Dev",
    titleLead: "Développer un marché, ou en",
    titleAccent: "piloter l'activité.",
    intro:
      "Nous intervenons à deux moments différents de la vie commerciale d'une zone. Les deux offres se combinent ou se choisissent séparément.",
    more: "En savoir plus",
    items: [
      {
        routeKey: "acceleration",
        label: "Accélérer un marché",
        body: "Vous souhaitez ouvrir un pays, développer une zone, identifier des clients ou construire un réseau de distribution. AS Biz Dev transforme votre ambition de développement en plan d'action commercial et accompagne son exécution sur le terrain.",
      },
      {
        routeKey: "pilotage",
        label: "Externaliser le pilotage commercial",
        body: "Vous disposez déjà de clients, de distributeurs ou d'opportunités mais manquez de ressources pour animer et développer efficacement votre activité. AS Biz Dev prend en charge tout ou partie du pilotage commercial de la zone : distributeurs, pipeline, forecast, plans d'action et reporting.",
      },
    ],
  },

  approach: {
    eyebrow: "Notre différence",
    titleLead: "Stratégie",
    titleAccent: "et exécution.",
    intro:
      "Nous ne nous limitons pas à définir une stratégie ou à remettre des recommandations. Selon les besoins de l'entreprise, nous identifions les opportunités, recherchons les partenaires locaux, développons les marchés puis assurons dans la durée le pilotage commercial de la zone confiée.",
    steps: [
      { title: "Comprendre", body: "Potentiel réel du marché, concurrence en place, circuits de décision." },
      { title: "Prioriser", body: "Cibles, comptes et canaux retenus, séquence d'attaque du marché." },
      { title: "Agir", body: "Prise de contact, prospection, rendez-vous, recherche de distributeurs." },
      { title: "Piloter", body: "Pipeline, plans d'action, animation des partenaires locaux." },
      { title: "Mesurer", body: "Prévisions de ventes, écarts, résultats, prochaines étapes." },
    ],
  },

  markets: {
    eyebrow: "Marchés",
    titleLead: "Des marchés nommés,",
    titleAccent: "pas une carte du monde.",
    intro:
      "Nous n'annonçons pas une présence mondiale. Nous travaillons sur des marchés identifiés en Afrique et au Moyen-Orient, et nous les nommons.",
    cta: "Voir les marchés",
  },

  partner: {
    eyebrow: "Devenir partenaire",
    titleLead: "Vous connaissez votre marché.",
    titleAccent: "Construisons des opportunités ensemble.",
    intro:
      "AS Biz Dev développe un réseau ciblé de partenaires commerciaux et sectoriels sur ses marchés prioritaires en Afrique et au Moyen-Orient.",
    cta: "Référencer mon profil",
  },
};

// ============================================
// COMPOSANT — mise en page de l'accueil, ne pas toucher sauf besoin technique
// ============================================
export default function HomePageFr() {
  const lang = "fr";
  const t = CONTENT;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organisationJsonLd("fr")),
        }}
      />

      <main>
        {/* HERO — who we help, what we do, where, in one screen (§7). */}
        <section className="relative overflow-hidden bg-white">
          <div className="relative container-x pt-8 pb-12 md:pt-10 md:pb-14 lg:pt-14 lg:pb-16">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <RevealOnScroll variant="up">
                <h1 className="font-display text-[2.5rem] font-semibold leading-[1.15] tracking-tight text-navy text-balance md:text-[3rem] lg:text-[3.25rem]">
                  {t.hero.titleLead}{" "}
                  <span className="italic text-orange">{t.hero.titleAccent}</span>
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
