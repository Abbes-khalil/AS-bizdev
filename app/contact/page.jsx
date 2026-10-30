import { Suspense } from "react";

import ContactForm from "@/components/forms/ContactForm";
import NoScriptContactFallback from "@/components/forms/NoScriptContactFallback";
import PageHero from "@/components/ui/PageHero";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_HREF } from "@/lib/constants/site";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { organisationJsonLd } from "@/lib/seo/headTags";

export const generateMetadata = () => buildMetadata("contact", "fr");

// ============================================
// CONTENU AFFICHÉ — modifier ici (titres, textes, boutons, erreurs)
// ============================================
const CONTENT = {
  hero: {
    eyebrow: "Construisons la suite",
    titleLead: "Parlons de votre prochain",
    titleAccent: "territoire",
    titleTail: "de croissance.",
    intro:
      "Décrivez-nous votre ambition. Notre équipe vous répondra pour organiser un premier échange — sous 48 heures.",
  },
  form: {
    name: "Nom",
    firstName: "Prénom",
    email: "E-mail",
    message: "Votre message",
    marketPrefill: "Marché concerné :",
    messagePlaceholder:
      "Décrivez votre projet, vos marchés cibles, vos contraintes…",
    consentBefore: "En soumettant ce formulaire, vous acceptez notre",
    consentLink: "politique de confidentialité",
    submit: "Envoyer ma demande",
    submitting: "Envoi…",
    requiredAria: "obligatoire",
  },
  errors: {
    nameRequired: "Merci d'indiquer votre nom.",
    nameShort: "Votre nom semble trop court.",
    firstNameRequired: "Merci d'indiquer votre prénom.",
    firstNameShort: "Votre prénom semble trop court.",
    emailRequired: "Une adresse email est requise.",
    emailInvalid: "Format d'email invalide.",
    messageRequired: "Décrivez votre projet en quelques lignes.",
    messageShort: "Votre message est un peu court — 10 caractères minimum.",
  },
  status: {
    invalid: "Merci de corriger les champs surlignés.",
    submitting: "Envoi en cours…",
    success: "Merci ! Nous organisons un premier échange sous 48 heures.",
    failed:
      "L'envoi n'a pas abouti. Écrivez-nous directement — votre message est déjà prérempli :",
    failedLink: "Ouvrir dans votre messagerie",
    emailSubject: "Demande de contact — asbizdev.com",
  },
  aside: {
    eyebrow: "AS Biz Dev",
    heading: "Afrique · Moyen-Orient",
    body: "Décrivez votre marché cible, vos distributeurs ou vos opportunités en cours. Un premier échange, sans engagement.",
  },
};

// ============================================
// COMPOSANT — mise en page de /contact, ne pas toucher sauf besoin technique
// ============================================
export default function ContactPageFr() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organisationJsonLd("fr")),
        }}
      />

      <main>
        <PageHero
          className="max-w-4xl"
          {...CONTENT.hero}
          overlay={
            <div
              className="pointer-events-none absolute -right-20 top-0 h-[40rem] w-[40rem] opacity-[0.06] pattern-lines"
              aria-hidden="true"
            />
          }
        />

        <section className="bg-white pb-20 lg:pb-24">
          <div className="container-x">
            <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
              <RevealOnScroll variant="up">
                <Suspense fallback={<NoScriptContactFallback lang="fr" />}>
                  <ContactForm lang="fr" copy={CONTENT} />
                </Suspense>
              </RevealOnScroll>

              <RevealOnScroll variant="up" delay={0.15}>
                <aside className="flex flex-col gap-6">
                  <div className="rounded-card bg-navy p-8 text-white">
                    <p className="eyebrow text-orange">{CONTENT.aside.eyebrow}</p>
                    <h2 className="mt-5 font-display text-2xl font-semibold tracking-tight">
                      {CONTENT.aside.heading}
                    </h2>
                    <p className="mt-4 text-[0.95rem] leading-relaxed text-white/75">
                      {CONTENT.aside.body}
                    </p>
                    <div className="mt-6 space-y-2">
                      <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="block text-[0.95rem] text-orange link-underline"
                      >
                        {CONTACT_EMAIL}
                      </a>
                      <a
                        href={CONTACT_PHONE_HREF}
                        className="block text-[0.95rem] text-orange link-underline"
                      >
                        {CONTACT_PHONE}
                      </a>
                    </div>
                  </div>
                </aside>
              </RevealOnScroll>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
