/**
 * "Devenir partenaire" page and its registration form (§11, §12, §13).
 *
 * Field and option keys mirror `src/constants/partnerForm.js`; only labels
 * live here, so the stored payload never depends on the language the visitor
 * filled the form in.
 */
const partnerProgram = {
  fr: {
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
  },

  en: {
    hero: {
      eyebrow: "Become a partner",
      titleLead: "You know your market.",
      titleAccent: "Let's build opportunities together.",
      intro:
        "AS Biz Dev is building a focused network of commercial and sector partners across its priority markets in Africa and the Middle East.",
    },

    intent: {
      eyebrow: "What this is",
      titleLead: "A professional registration,",
      titleAccent: "nothing more.",
      body: "We are looking for professionals with real knowledge of their market, a local network, and the ability to contribute to the business development of SMEs looking to grow in their country.",
      notTitle: "This registration is not",
      notItems: [
        "a job offer",
        "a public directory",
        "an automatic promise of assignments",
      ],
    },

    profiles: {
      eyebrow: "Profiles we look for",
      titleLead: "We are not looking for",
      titleAccent: "everyone.",
      items: [
        "Independent business developers",
        "Sales agents",
        "Sales consultants with a local network",
        "Distributors",
        "Integrators",
        "Sector experts",
        "Commercial representation companies",
        "Companies with genuine access to industrial buyers",
      ],
      note: "Profiles are qualified by country, sectors, role, network, experience, type of customers reachable, prospecting capability, distributor management capability and languages.",
    },

    form: {
      eyebrow: "Form",
      titleLead: "Register",
      titleAccent: "my profile.",
      intro:
        "Fields marked with an asterisk are needed to qualify a profile. Allow around ten minutes.",
      submit: "Send my profile",
      submitting: "Sending…",
      requiredAria: "required",
      optional: "optional",
      consentBefore: "By sending this form, I agree that my data will be stored and used by AS Biz Dev as part of its partner registration, in line with the",
      consentLink: "privacy policy",
      sections: {
        identity: {
          title: "Identity",
          description: "Who you are and how to reach you.",
        },
        location: {
          title: "Location",
          description: "Where you are based and where you actually operate.",
        },
        expertise: {
          title: "Expertise",
          description: "Your profile, your sectors and your experience.",
        },
        network: {
          title: "Commercial network",
          description:
            "What types of customers or organisations do you have an active network with?",
        },
        capabilities: {
          title: "Capabilities",
          description: "What you are able to take on.",
        },
        presentation: {
          title: "Presentation",
          description:
            "Your experience, your knowledge of the market and your professional network.",
        },
      },
      fields: {
        firstName: { label: "First name" },
        lastName: { label: "Last name" },
        company: { label: "Company" },
        role: { label: "Role" },
        email: { label: "Business email" },
        phone: { label: "Phone" },
        linkedin: { label: "LinkedIn", placeholder: "https://linkedin.com/in/…" },
        website: { label: "Website", placeholder: "https://…" },
        baseCountry: { label: "Country of residence or incorporation" },
        city: { label: "City" },
        coveredCountries: {
          label: "Countries you actually cover commercially",
          placeholder: "One country per line, or separated by commas.",
        },
        profileType: { label: "Your profile" },
        sectors: {
          label: "Sectors you know",
          placeholder: "Describe the sectors you actually work in.",
        },
        experience: { label: "Years of experience" },
        languages: {
          label: "Working languages",
          placeholder: "French, English, Arabic…",
        },
        networkTypes: { label: "Types of customers or organisations" },
        capabilities: { label: "What you can take on" },
        presentation: {
          label: "Your presentation",
          placeholder:
            "Describe your experience, your knowledge of the market and the kind of professional network you have.",
        },
        references: {
          label: "References and documents",
          placeholder:
            "Links to your CV, your company profile, a presentation or your references.",
        },
      },
      options: {
        independentBizDev: "Independent business developer",
        salesAgent: "Sales agent",
        salesConsultant: "Sales consultant with a local network",
        distributor: "Distributor",
        integrator: "Integrator",
        sectorExpert: "Sector expert",
        salesRepresentationCompany: "Commercial representation company",
        introductionCapability: "Access to industrial buyers",
        industrials: "Industrials",
        keyAccounts: "Key accounts",
        smes: "SMEs",
        distributors: "Distributors",
        integrators: "Integrators",
        epc: "EPC contractors",
        administrations: "Public administrations",
        institutions: "Institutions",
        other: "Other",
        prospectIdentification: "Prospect identification",
        prospecting: "Prospecting",
        appointmentSetting: "Appointment setting",
        commercialRepresentation: "Commercial representation",
        distributorManagement: "Distributor management",
        accountDevelopment: "Account development",
        distributorSearch: "Distributor search",
        opportunityFollowUp: "Opportunity follow-up",
        marketWatch: "Market watch",
        negotiationSupport: "Negotiation support",
        lt5: "Less than 5 years",
        "5to10": "5 to 10 years",
        "10to20": "10 to 20 years",
        gt20: "More than 20 years",
        selectPlaceholder: "Select…",
      },
    },

    errors: {
      required: "This field is needed to qualify your profile.",
      emailInvalid: "Invalid email format.",
      urlInvalid: "Enter an address starting with https://",
      chooseOne: "Select at least one option.",
      tooShort: "A few more lines would help us place you.",
      consent: "Your agreement is required to store your profile.",
    },

    status: {
      invalid: "Please correct the highlighted fields.",
      submitting: "Sending…",
      success:
        "Thank you. Your profile is registered. We will come back to you if an assignment matches your market and your network.",
      failed:
        "We couldn't send your profile. Email us directly — it's already filled in for you:",
      failedLink: "Open in your mail app",
      emailSubject: "Partner registration — asbizdev.com",
    },
  },
};

export default partnerProgram;
