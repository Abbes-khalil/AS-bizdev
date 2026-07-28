import { ASSET } from "../components/siteData";

const people = [
  ["stephane.jpg", "Stéphane Allain", "Fondateur", "20 ans d'expérience dans l'analyse et le développement des marchés internationaux pour le compte de grands groupes."],
  ["wafa.webp", "Wafa Zouaoui", "Responsable des Opérations", "19 ans d'expérience dans le management opérationnel et fonctionnel dans le secteur B2B (Tourisme)."],
  ["Chekib-.webp", "Chekib Yeger", "Commercial Afrique francophone", "13 ans d'expérience dans la force de vente principalement chez le leader mondial des verres correcteurs et d'équipement d'optique ophtalmique."],
  ["bechir.webp", "Béchir Zouaoui", "Senior Graphic Designer", "Plus de 13 ans d'expérience dans le monde du design et du développement web design."],
  ["khalil.webp", "Khalil Abbes", "Chargé junior d'efficacité commerciale et IA", "Conception et développement des expériences digitales."],
  ["kaouther.webp", "Kaouther Bousaidi", "Assistante Administrative", "Coordination administrative et soutien aux opérations."],
  ["taher.webp", "Taher Kassem", "Comptabilité & Finance", "Suivi comptable et financier des projets."],
];

export default function WhoIsWho() {
  return (
    <main>
      <section className="relative overflow-hidden bg-white">
        <div
          className="pointer-events-none absolute inset-0 pattern-dots opacity-[0.15]"
          aria-hidden="true"
        />
        <div className="relative container-x py-20 lg:py-28">
          <div className="grid items-end gap-12 lg:grid-cols-[1fr_1fr]">
            <div>
              <div className="inline-flex items-center gap-3">
                <span className="h-1 w-10 rounded-full bg-orange" aria-hidden="true" />
                <p className="eyebrow text-orange">L'équipe</p>
              </div>
              <h1 className="mt-6 font-display display-xl font-semibold text-navy text-balance">
                Who is{" "}
                <span className="italic text-orange">Who.</span>
              </h1>
            </div>
            <p className="max-w-md text-[1.125rem] leading-[1.7] text-gray-700">
              Les talents qui accompagnent vos projets internationaux, de la
              réflexion stratégique au déploiement opérationnel.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface-alt pb-24 lg:pb-32">
        <div className="container-x">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8" role="list">
            {people.map(([src, name, role, bio], i) => (
              <li key={name}>
                <article
                  tabIndex={0}
                  className="group relative h-full overflow-hidden rounded-card bg-white shadow-soft transition-all duration-500 ease-emphasized hover:-translate-y-1 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-surface-alt"
                >
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-100">
                    <img
                      src={ASSET + "employe/" + src}
                      alt={`Portrait de ${name}, ${role}`}
                      width="400"
                      height="500"
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-focus-visible:scale-105 group-focus-visible:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" aria-hidden="true" />
                    <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-badge bg-white/95 px-3 py-1.5 shadow-soft backdrop-blur">
                      <span className="font-display text-[0.7rem] font-medium uppercase tracking-widest text-navy">
                        0{i + 1}
                      </span>
                    </div>
                    {/* Orange accent line at top */}
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-0 h-1 w-0 bg-orange transition-all duration-500 group-hover:w-full group-focus-visible:w-full"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="font-display text-[1.5rem] font-semibold tracking-tight text-navy">
                      {name}
                    </h2>
                    <p className="mt-2 text-[0.875rem] font-medium text-orange">{role}</p>
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-gray-700">{bio}</p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
