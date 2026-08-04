import RevealOnScroll from "../components/RevealOnScroll";
import Team from "@/components/ui/team";
import { useT } from "../i18n";

export default function WhoIsWho() {
  const { hero } = useT("team");

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
                <p className="eyebrow text-orange">{hero.eyebrow}</p>
              </div>
              <h1 className="mt-6 font-display display-xl font-semibold text-navy text-balance">
                {hero.titleLead}{" "}
                <span className="italic text-orange">{hero.titleAccent}</span>
              </h1>
            </div>
            <p className="max-w-md text-[1.125rem] leading-[1.7] text-gray-700">
              {hero.intro}
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <Team />
    </main>
  );
}
