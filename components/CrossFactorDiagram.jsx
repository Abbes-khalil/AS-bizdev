import ArrowIcon from "@/components/ArrowIcon";
import RevealOnScroll from "@/components/RevealOnScroll";

/**
 * "Pays × Secteur × Entreprise × Fonction × Niveau de décision → Action
 * commerciale" — the factors that get crossed, visually, rather than as one
 * long sentence.
 */
const CrossFactorDiagram = ({ factors, outcome, examples }) => (
  <div>
    <RevealOnScroll variant="up" className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
      {factors.map((factor, index) => (
        <div key={factor} className="flex items-center gap-3">
          <span className="rounded-btn border border-navy/15 bg-white px-4 py-2.5 font-display text-[0.8125rem] font-semibold uppercase tracking-wide text-navy">
            {factor}
          </span>
          {index < factors.length - 1 && (
            <span aria-hidden="true" className="font-display text-[0.9375rem] text-gray-300">
              ×
            </span>
          )}
        </div>
      ))}
    </RevealOnScroll>

    <RevealOnScroll variant="up" delay={0.1} className="mt-6 flex flex-col items-center gap-3">
      <svg width="14" height="24" viewBox="0 0 14 24" fill="none" aria-hidden="true" className="text-gray-300">
        <path
          d="M7 1V22M7 22L1 16M7 22L13 16"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="rounded-btn bg-navy px-5 py-2.5 font-display text-[0.8125rem] font-semibold uppercase tracking-wide text-white">
        {outcome}
      </span>
    </RevealOnScroll>

    <div className="mt-[3rem] grid gap-3 sm:grid-cols-2">
      {examples.map((example, index) => (
        <RevealOnScroll
          key={example}
          variant="up"
          delay={0.05}
          index={index}
          className="flex items-start gap-3 rounded-card border border-gray-200 bg-white p-4 text-[0.9375rem] leading-[1.6] text-gray-700"
        >
          <ArrowIcon className="mt-[0.3rem] shrink-0 text-orange" />
          {example}
        </RevealOnScroll>
      ))}
    </div>
  </div>
);

export default CrossFactorDiagram;
