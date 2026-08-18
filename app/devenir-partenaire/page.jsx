import BulletList from "@/components/ui/BulletList";
import PageHero from "@/components/ui/PageHero";
import PartnerForm from "@/components/forms/PartnerForm";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { organisationJsonLd } from "@/lib/seo/headTags";

export const generateMetadata = () => buildMetadata("becomePartner", "fr");

/**
 * Field and option keys mirror `lib/constants/partnerForm.js`; only labels
 * live here, so the stored payload never depends on the language the
 * visitor filled the form in.
 */
// ============================================
// CONTENU AFFICHÉ — modifier ici (titres, textes, champs du formulaire)
// ============================================
const CONTENT = {
  hero: {
    eyebrow: "Devenir partenaire",
    titleLead: "Vous connaissez votre marché.",
    titleAccent: "Construisons des opportunités ensemble.",
    intro:
      "AS Biz Dev développe un réseau ciblé de partenaires commerciaux et sectoriels sur ses marchés prioritaires en Afrique et au Moyen-Orient.",
  },

  intent: {
    eyebrow: "De quoi il s'agit",
    titleLead: "Un référencement professionnel,",
    titleAccent: "rien d'autre.",
    body: "Nous recherchons des professionnels disposant d'une connaissance réelle de leur marché, d'un réseau local et d'une capacité à contribuer au développement commercial de PME souhaitant développer leur activité dans leur pays.",
    notTitle: "Ce référencement n'est pas",
    notItems: [
      "une offre d'emploi",
      "un annuaire public",
      "une promesse automatique de mission",
    ],
  },

  profiles: {
    eyebrow: "Profils recherchés",
    titleLead: "Nous ne cherchons pas",
    titleAccent: "tout le monde.",
    items: [
      "Business developers indépendants",
      "Agents commerciaux",
      "Consultants commerciaux disposant d'un réseau local",
      "Distributeurs",
      "Intégrateurs",
      "Experts sectoriels",
      "Sociétés de représentation commerciale",
      "Sociétés disposant d'une capacité réelle d'introduction auprès de donneurs d'ordre",
    ],
    note: "Les profils sont qualifiés par pays, secteurs, fonction, réseau, expérience, type de clients accessibles, capacité de prospection, capacité d'animation commerciale et langues.",
  },

  form: {
    eyebrow: "Formulaire",
    titleLead: "Référencer",
    titleAccent: "mon profil.",
    intro:
      "Les champs marqués d'un astérisque sont nécessaires pour qualifier un profil. Comptez une dizaine de minutes.",
    submit: "Envoyer mon profil",
    submitting: "Envoi…",
    requiredAria: "obligatoire",
    optional: "facultatif",
    consentBefore: "En envoyant ce formulaire, j'accepte que mes données soient enregistrées et utilisées par AS Biz Dev dans le cadre de son référencement de partenaires, conformément à la",
    consentLink: "politique de confidentialité",
    sections: {
      identity: {
        title: "Identité",
        description: "Qui vous êtes et comment vous joindre.",
      },
      location: {
        title: "Implantation",
        description: "Où vous êtes établi et où vous intervenez réellement.",
      },
      expertise: {
        title: "Expertise",
        description: "Votre profil, vos secteurs et votre expérience.",
      },
      network: {
        title: "Réseau commercial",
        description:
          "Auprès de quels types de clients ou d'organisations disposez-vous d'un réseau actif ?",
      },
      capabilities: {
        title: "Capacités",
        description: "Ce que vous êtes en mesure de prendre en charge.",
      },
      presentation: {
        title: "Présentation",
        description:
          "Votre expérience, votre connaissance du marché et votre réseau professionnel.",
      },
    },
    fields: {
      firstName: { label: "Prénom" },
      lastName: { label: "Nom" },
      company: { label: "Société" },
      role: { label: "Fonction" },
      email: { label: "E-mail professionnel" },
      phone: { label: "Téléphone" },
      linkedin: { label: "LinkedIn", placeholder: "https://linkedin.com/in/…" },
      website: { label: "Site internet", placeholder: "https://…" },
      baseCountry: { label: "Pays de résidence ou d'implantation" },
      city: { label: "Ville" },
      coveredCountries: {
        label: "Pays réellement couverts commercialement",
        placeholder: "Un pays par ligne, ou séparés par des virgules.",
      },
      profileType: { label: "Votre profil" },
      sectors: {
        label: "Secteurs maîtrisés",
        placeholder:
          "Décrivez les secteurs sur lesquels vous intervenez réellement.",
      },
      experience: { label: "Années d'expérience" },
      languages: {
        label: "Langues professionnelles",
        placeholder: "Français, anglais, arabe…",
      },
      networkTypes: { label: "Types de clients ou d'organisations" },
      capabilities: { label: "Ce que vous pouvez prendre en charge" },
      presentation: {
        label: "Votre présentation",
        placeholder:
          "Présentez votre expérience, votre connaissance du marché et le type de réseau professionnel dont vous disposez.",
      },
      references: {
        label: "Références et documents",
        placeholder:
          "Liens vers votre CV, votre profil société, une présentation ou vos références.",
      },
    },
    options: {
      independentBizDev: "Business developer indépendant",
      salesAgent: "Agent commercial",
      salesConsultant: "Consultant commercial avec réseau local",
      distributor: "Distributeur",
      integrator: "Intégrateur",
      sectorExpert: "Expert sectoriel",
      salesRepresentationCompany: "Société de représentation commerciale",
      introductionCapability:
        "Capacité d'introduction auprès de donneurs d'ordre",
      industrials: "Industriels",
      keyAccounts: "Grands comptes",
      smes: "PME",
      distributors: "Distributeurs",
      integrators: "Intégrateurs",
      epc: "EPC",
      administrations: "Administrations",
      institutions: "Institutions",
      other: "Autres",
      prospectIdentification: "Identification de prospects",
      prospecting: "Prospection",
      appointmentSetting: "Prise de rendez-vous",
      commercialRepresentation: "Représentation commerciale",
      distributorManagement: "Animation de distributeurs",
      accountDevelopment: "Développement de comptes",
      distributorSearch: "Recherche de distributeurs",
      opportunityFollowUp: "Suivi d'opportunités",
      marketWatch: "Veille marché",
      negotiationSupport: "Accompagnement des négociations",
      lt5: "Moins de 5 ans",
      "5to10": "5 à 10 ans",
      "10to20": "10 à 20 ans",
      gt20: "Plus de 20 ans",
      selectPlaceholder: "Sélectionnez…",
    },
  },

  errors: {
    required: "Ce champ est nécessaire pour qualifier votre profil.",
    emailInvalid: "Format d'e-mail invalide.",
    urlInvalid: "Indiquez une adresse commençant par https://",
    chooseOne: "Sélectionnez au moins une option.",
    tooShort: "Quelques lignes de plus nous aideraient à vous situer.",
    consent: "Votre accord est nécessaire pour enregistrer votre profil.",
  },

  status: {
    invalid: "Merci de corriger les champs surlignés.",
    submitting: "Envoi en cours…",
    success:
      "Merci. Votre profil est enregistré. Nous revenons vers vous si une mission correspond à votre marché et à votre réseau.",
    failed:
      "L'envoi n'a pas abouti. Écrivez-nous directement — votre message est déjà prérempli :",
    failedLink: "Ouvrir dans votre messagerie",
    emailSubject: "Référencement partenaire — asbizdev.com",
  },
};

// ============================================
// COMPOSANT — mise en page de /devenir-partenaire (§11–§13), ne pas toucher sauf besoin technique
// ============================================
export default function BecomePartnerFr() {
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
        <PageHero layout="split" {...t.hero} />

        <Section tone="alt">
          <div className="grid gap-[1.25rem] lg:grid-cols-2 lg:gap-[3rem]">
            <SectionHeading
              eyebrow={t.intent.eyebrow}
              titleLead={t.intent.titleLead}
              titleAccent={t.intent.titleAccent}
              intro={t.intent.body}
              className=""
            />

            <RevealOnScroll
              variant="up"
              delay={0.1}
              className="rounded-card border border-dashed border-gray-200 p-[2rem]"
            >
              <h3 className="font-display text-[1.125rem] font-semibold tracking-[-0.02em] text-navy">
                {t.intent.notTitle}
              </h3>
              <BulletList
                items={t.intent.notItems}
                marker="cross"
                className="mt-[1.25rem]"
              />
            </RevealOnScroll>
          </div>
        </Section>

        <Section>
          <SectionHeading
            eyebrow={t.profiles.eyebrow}
            titleLead={t.profiles.titleLead}
            titleAccent={t.profiles.titleAccent}
          />

          <RevealOnScroll variant="up" className="mt-[1.75rem]">
            <BulletList items={t.profiles.items} columns={2} />
            <p className="mt-[1.75rem] max-w-3xl text-[0.9375rem] leading-[1.7] text-gray-500">
              {t.profiles.note}
            </p>
          </RevealOnScroll>
        </Section>

        <Section tone="alt" id="formulaire">
          <SectionHeading
            eyebrow={t.form.eyebrow}
            titleLead={t.form.titleLead}
            titleAccent={t.form.titleAccent}
            intro={t.form.intro}
          />

          <RevealOnScroll variant="up" className="mt-[1.75rem]">
            <PartnerForm copy={t} />
          </RevealOnScroll>
        </Section>
      </main>
    </>
  );
}
