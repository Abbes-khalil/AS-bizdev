import PageHero from "@/components/ui/PageHero";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { CONTACT_EMAIL } from "@/lib/constants/site";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { organisationJsonLd } from "@/lib/seo/headTags";

export const generateMetadata = () => buildMetadata("policy", "fr");

/**
 * Sections carry an optional `email: true` flag — the component then appends
 * a mailto link after the body text rather than embedding markup here.
 */
// ============================================
// CONTENU AFFICHÉ — modifier ici (titres, textes)
// ============================================
const CONTENT = {
  hero: {
    eyebrow: "AS Biz Dev",
    titleLead: "Politique de",
    titleAccent: "confidentialité.",
    intro:
      "AS Biz Dev s'engage à protéger la vie privée des visiteurs de son site Web. La présente Politique de Confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos données personnelles, conformément au Règlement Général sur la Protection des Données (RGPD).",
    effectiveDate: "Date d'entrée en vigueur : 20 janvier 2021.",
    updatedDate:
      "Cette Politique de Confidentialité a été mise à jour le 28 octobre 2026.",
  },
  sections: [
    {
      title: "Collecte des données personnelles",
      body: "Nous recueillons les informations que vous nous fournissez directement (nom, adresse e-mail, numéro de téléphone, adresse postale, ainsi que toute information que vous choisissez de nous communiquer via nos formulaires). Nous collectons également de manière automatique certaines informations lors de votre visite sur notre site : adresse IP, type de navigateur, pages visitées, horodatages de connexion, et données issues de cookies ou autres traceurs.",
    },
    {
      title: "Utilisation des données personnelles",
      body: "Les informations que nous collectons sont utilisées pour fournir, maintenir et améliorer nos services, répondre à vos demandes, communiquer avec vous au sujet de nos services et offres, analyser l'audience de notre site et respecter nos obligations légales.",
    },
    {
      title: "Partage des données personnelles",
      body: "Nous ne partageons pas vos données personnelles avec des tiers, sauf dans les cas suivants : avec votre consentement préalable, pour répondre à une obligation légale, pour protéger nos droits ou notre propriété, ou dans le cadre d'une transaction commerciale (fusion, acquisition ou cession d'actifs).",
    },
    {
      title: "Sécurité des données",
      body: "Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées (pare-feu, chiffrement, contrôles d'accès physiques et administratifs) pour protéger vos données contre tout accès non autorisé, altération, divulgation ou destruction.",
    },
    {
      title: "Vos droits",
      body: "Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression, de limitation du traitement, de portabilité de vos données, ainsi que du droit de vous opposer au traitement et d'en retirer votre consentement à tout moment. Pour exercer ces droits, contactez-nous à",
      email: true,
    },
    {
      title: "Transferts internationaux",
      body: "Vos données peuvent être transférées et traitées dans des pays situés en dehors de l'Espace économique européen (EEE). Dans ce cas, nous nous assurons que ces transferts sont réalisés conformément aux exigences du RGPD et qu'ils bénéficient d'un niveau de protection adéquat.",
    },
    {
      title: "Mesure d'audience et cookies",
      body: "Avec votre accord, ce site mesure sa fréquentation avec Google Analytics (Google Ireland Limited) : pages consultées, source de la visite, type d'appareil et pays approximatif. Ces mesures servent uniquement à comprendre ce qui est consulté. Rien n'est déposé ni mesuré tant que vous n'avez pas accepté, votre choix est conservé un an, et vous pouvez le modifier à tout moment avec le lien « Gérer mes cookies » en bas de chaque page. Le site utilise aussi Vercel Web Analytics, une mesure sans cookie qui ne permet pas de vous identifier.",
    },
    {
      title: "Modifications de notre Politique de confidentialité",
      body: "Nous pouvons être amenés à mettre à jour cette Politique de confidentialité périodiquement. Toute modification sera publiée sur cette page avec une date de révision actualisée. Nous vous invitons à la consulter régulièrement.",
    },
    {
      title: "Contact",
      body: "Pour toute question relative à cette Politique de confidentialité ou à la protection de vos données personnelles, vous pouvez nous contacter à l'adresse suivante :",
      email: true,
    },
  ],
};

// ============================================
// COMPOSANT — mise en page de /politiques-de-confidentialite, ne pas toucher sauf besoin technique
// ============================================
export default function PolicyFr() {
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
        <PageHero {...t.hero}>
          <p className="mt-6 text-[1rem] text-gray-700">{t.hero.effectiveDate}</p>
          <p className="mt-2 text-[1rem] text-gray-700">{t.hero.updatedDate}</p>
        </PageHero>

        <section className="bg-white pb-20 lg:pb-24">
          <div className="container-x">
            <article className="mx-auto max-w-3xl">
              {t.sections.map((section, i) => (
                <RevealOnScroll
                  as="section"
                  key={section.title}
                  variant="up"
                  delay={0.05}
                  amount={0.2}
                  className="grid gap-6 border-t border-gray-200 py-10 first:border-t-0 first:pt-0 lg:grid-cols-[1fr_2fr] lg:gap-12"
                >
                  <div>
                    <span className="font-display text-[0.7rem] font-medium uppercase tracking-widest text-orange">
                      0{i + 1}
                    </span>
                    <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-navy">
                      {section.title}
                    </h2>
                  </div>
                  <div className="text-[1.0625rem] leading-[1.75] text-gray-700">
                    {section.body}
                    {section.email && (
                      <>
                        {" "}
                        <a
                          href={`mailto:${CONTACT_EMAIL}`}
                          className="text-navy link-underline"
                        >
                          {CONTACT_EMAIL}
                        </a>
                        .
                      </>
                    )}
                  </div>
                </RevealOnScroll>
              ))}
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
