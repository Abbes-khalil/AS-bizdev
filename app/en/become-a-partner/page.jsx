import BulletList from "@/components/ui/BulletList";
import PageHero from "@/components/ui/PageHero";
import PartnerForm from "@/components/forms/PartnerForm";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { organisationJsonLd } from "@/lib/seo/headTags";

export const generateMetadata = () => buildMetadata("becomePartner", "en");

/**
 * Field and option keys mirror `lib/constants/partnerForm.js`; only labels
 * live here, so the stored payload never depends on the language the
 * visitor filled the form in.
 */
// ============================================
// PAGE CONTENT — edit here (headings, copy, form fields)
// ============================================
const CONTENT = {
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
};

// ============================================
// COMPONENT — /en/become-a-partner layout, leave alone unless it's a technical change
// ============================================
export default function BecomePartnerEn() {
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
