import RevealOnScroll from "../components/RevealOnScroll";

const sections = [
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
    body: (
      <>
        Conformément au Règlement Général sur la Protection des Données
        (RGPD), vous disposez d'un droit d'accès, de rectification, de
        suppression, de limitation du traitement, de portabilité de vos
        données, ainsi que du droit de vous opposer au traitement et d'en
        retirer votre consentement à tout moment. Pour exercer ces droits,
        contactez-nous à{" "}
        <a
          href="mailto:contact@asbizdev.com"
          className="text-navy link-underline"
        >
          contact@asbizdev.com
        </a>
        .
      </>
    ),
  },
  {
    title: "Transferts internationaux",
    body: "Vos données peuvent être transférées et traitées dans des pays situés en dehors de l'Espace économique européen (EEE). Dans ce cas, nous nous assurons que ces transferts sont réalisés conformément aux exigences du RGPD et qu'ils bénéficient d'un niveau de protection adéquat.",
  },
  {
    title: "Modifications de notre Politique de confidentialité",
    body: "Nous pouvons être amenés à mettre à jour cette Politique de confidentialité périodiquement. Toute modification sera publiée sur cette page avec une date de révision actualizada. Nous vous invitons à la consulter régulièrement.",
  },
  {
    title: "Contact",
    body: (
      <>
        Pour toute question relative à cette Politique de confidentialité ou à
        la protection de vos données personnelles, vous pouvez nous contacter à
        l'adresse suivante :{" "}
        <a
          href="mailto:contact@asbizdev.com"
          className="text-navy link-underline"
        >
          contact@asbizdev.com
        </a>
        .
      </>
    ),
  },
];

export default function Policy() {
  return (
    <main>
      <section className="relative overflow-hidden bg-white">
        <div
          className="pointer-events-none absolute inset-0 pattern-dots opacity-[0.12]"
          aria-hidden="true"
        />
        <div className="relative container-x py-20 lg:py-28">
          <RevealOnScroll variant="up" className="max-w-3xl">
            <div className="inline-flex items-center gap-3">
              <span className="h-1 w-10 rounded-full bg-orange" aria-hidden="true" />
              <p className="eyebrow text-orange">AS Biz Dev</p>
            </div>
            <h1 className="mt-6 font-display display-xl font-semibold text-navy text-balance">
              Politique de{" "}
              <span className="italic text-orange">confidentialité.</span>
            </h1>
            <p className="mt-8 text-[1.0625rem] leading-[1.7] text-gray-700">
              AS Biz Dev s'engage à protéger la vie privée des visiteurs de son
              site Web. La présente Politique de Confidentialité explique
              comment nous collectons, utilisons, divulguons et protégeons vos
              données personnelles, conformément au Règlement Général sur la
              Protection des Données (RGPD).
            </p>
            <p className="mt-6 text-[1rem] text-gray-700">
              Date d'entrée en vigueur : 20 janvier 2021.
            </p>
            <p className="mt-2 text-[1rem] text-gray-700">
              Cette Politique de Confidentialité a été mise à jour le 05
              novembre 2023.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="bg-white pb-24 lg:pb-32">
        <div className="container-x">
          <article className="mx-auto max-w-3xl">
            {sections.map((section, i) => (
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
                </div>
              </RevealOnScroll>
            ))}
          </article>
        </div>
      </section>
    </main>
  );
}
