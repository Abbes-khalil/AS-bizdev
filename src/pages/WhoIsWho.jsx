import RevealOnScroll from "../components/RevealOnScroll";
import Team from "@/components/ui/team";

export default function WhoIsWho() {
  return (
    <main>
      <section className="relative overflow-hidden bg-white">
        <div
          className="pointer-events-none absolute inset-0 pattern-dots opacity-[0.15]"
          aria-hidden="true"
        />
        <div className="relative container-x py-20 lg:py-28">
          <RevealOnScroll
            variant="up"
            className="grid items-end gap-12 lg:grid-cols-[1fr_1fr]"
          >
            <div>
              <div className="inline-flex items-center gap-3">
                <span
                  className="h-1 w-10 rounded-full bg-orange"
                  aria-hidden="true"
                />
                <p className="eyebrow text-orange">L'équipe</p>
              </div>
              <h1 className="mt-6 font-display display-xl font-semibold text-navy text-balance">
                Who is <span className="italic text-orange">Who.</span>
              </h1>
            </div>
            <p className="max-w-md text-[1.125rem] leading-[1.7] text-gray-700">
              Les talents qui accompagnent vos projets internationaux, de la
              réflexion stratégique au déploiement opérationnel.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <Team />
    </main>
  );
}
