import { LogoCard } from "../components/Card";

export default function Partners() {
  const logos = [
    ["TS.webp", "Tech & Solutions"],
    ["Incenteev.webp", "Incenteev"],
    ["BBC.webp", "BBC Group"],
    ["ADMG.webp", "ADMG"],
    ["SySmic.webp", "SySmic"],
    ["Emba.webp", "Emba"],
  ];
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
                <p className="eyebrow text-orange">Notre réseau</p>
              </div>
              <h1 className="mt-6 font-display display-xl font-semibold text-navy text-balance">
                Ils nous font{" "}
                <span className="italic text-orange">confiance.</span>
              </h1>
            </div>
            <p className="max-w-md text-[1.125rem] leading-[1.7] text-gray-700">
              Des partenaires engagés à nos côtés pour développer des solutions
              utiles, durables et adaptées aux réalités du terrain.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface-alt pb-24 lg:pb-32">
        <div className="container-x">
          <ul role="list" className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {logos.map(([logo, name]) => (
              <li key={logo}>
                <LogoCard
                  name={name}
                  src={`partenaires/${logo}`}
                  description="Un partenaire engagé à nos côtés pour développer des solutions utiles, durables et adaptées aux réalités du terrain."
                />
              </li>
            ))}
          </ul>

          <div className="mt-24 flex flex-col items-center gap-4 text-center">
            <div className="inline-flex items-center gap-3">
              <span className="h-1 w-10 rounded-full bg-orange" aria-hidden="true" />
              <p className="eyebrow text-orange">Devenir partenaire</p>
            </div>
            <h2 className="font-display display-md font-semibold tracking-tight text-navy text-balance">
              Vous souhaitez rejoindre notre réseau ?
            </h2>
            <a href="/contact" className="btn-primary mt-2">
              Nous écrire
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
