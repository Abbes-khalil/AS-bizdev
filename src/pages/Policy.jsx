export default function Policy() {
  const sections = [
    "Collecte des données personnelles",
    "Utilisation des données personnelles",
    "Partage des données personnelles",
    "Sécurité des données",
    "Vos droits",
    "Transferts internationaux",
    "Modifications de notre Politique de confidentialité",
    "Contact",
  ];
  return (
    <main>
      <section className="relative overflow-hidden bg-white">
        <div
          className="pointer-events-none absolute inset-0 pattern-dots opacity-[0.12]"
          aria-hidden="true"
        />
        <div className="relative container-x py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3">
              <span className="h-1 w-10 rounded-full bg-orange" aria-hidden="true" />
              <p className="eyebrow text-orange">AS Biz Dev</p>
            </div>
            <h1 className="mt-6 font-display display-xl font-semibold text-navy text-balance">
              Politique de{" "}
              <span className="italic text-orange">confidentialité.</span>
            </h1>
            <p className="mt-8 text-[1.125rem] text-gray-700">
              Date d'entrée en vigueur : 20 janvier 2021.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white pb-24 lg:pb-32">
        <div className="container-x">
          <article className="mx-auto max-w-3xl">
            {sections.map((title, i) => (
              <section
                key={title}
                className="grid gap-6 border-t border-gray-200 py-10 first:border-t-0 first:pt-0 lg:grid-cols-[1fr_2fr] lg:gap-12"
              >
                <div>
                  <span className="font-display text-[0.7rem] font-medium uppercase tracking-widest text-orange">
                    0{i + 1}
                  </span>
                  <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-navy">
                    {title}
                  </h2>
                </div>
                <p className="text-[1.0625rem] leading-[1.75] text-gray-700">
                  AS Biz Dev s'engage à protéger la vie privée des visiteurs de son
                  site Web. Nous recueillons et utilisons les informations
                  nécessaires pour fournir, maintenir et améliorer nos services,
                  répondre à vos demandes et respecter nos obligations légales.
                  Pour exercer vos droits, contactez-nous à{" "}
                  <a href="mailto:contact@asbizdev.com" className="text-navy link-underline">
                    contact@asbizdev.com
                  </a>
                  .
                </p>
              </section>
            ))}
          </article>
        </div>
      </section>
    </main>
  );
}
