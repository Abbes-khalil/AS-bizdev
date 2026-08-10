"use client";

import ArrowIcon from "../components/ArrowIcon";
import PageHero from "../components/PageHero";
import RouteLink from "../components/RouteLink";
import Section from "../components/Section";
import { useLang } from "../i18n/LanguageProvider";

const COPY = {
  fr: {
    eyebrow: "Erreur 404",
    titleLead: "Cette page",
    titleAccent: "n'existe pas.",
    intro:
      "Le lien est peut-être ancien, ou la page a été déplacée lors de la refonte du site.",
    home: "Retour à l'accueil",
    markets: "Voir les marchés",
  },
  en: {
    eyebrow: "Error 404",
    titleLead: "This page",
    titleAccent: "does not exist.",
    intro:
      "The link may be an old one, or the page was moved when the site was rebuilt.",
    home: "Back to home",
    markets: "See the markets",
  },
};

export default function NotFound() {
  const { lang } = useLang();
  const t = COPY[lang] ?? COPY.fr;

  return (
    <main>
      <PageHero
        eyebrow={t.eyebrow}
        titleLead={t.titleLead}
        titleAccent={t.titleAccent}
        intro={t.intro}
      />

      <Section>
        <div className="flex flex-wrap gap-4">
          <RouteLink routeKey="home" className="btn-primary">
            {t.home}
            <ArrowIcon />
          </RouteLink>
          <RouteLink routeKey="markets" className="btn-secondary">
            {t.markets}
          </RouteLink>
        </div>
      </Section>
    </main>
  );
}
