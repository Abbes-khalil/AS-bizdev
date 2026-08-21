import RevealOnScroll from "@/components/ui/RevealOnScroll";

/**
 * Numbered sequence — the "Comprendre → Prioriser → Agir → Piloter → Mesurer"
 * spine on the home page, and the six-step process on the acceleration page.
 *
 * Rendered as an ordered list because the order is the message.
 */
const StepList = ({ steps, columns = 3 }) => {
  const grid =
    columns === 5
      ? "sm:grid-cols-2 lg:grid-cols-5"
      : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <ol role="list" className={`grid gap-[1.25rem] ${grid}`}>
      {steps.map((step, index) => (
        <RevealOnScroll
          as="li"
          key={step.title}
          variant="up"
          delay={0.05}
          index={index}
          className="relative flex h-full flex-col rounded-card border border-gray-200 bg-white p-[1.25rem] transition-all duration-300 hover:-translate-y-1 hover:border-navy hover:shadow-lift"
        >
          <span
            aria-hidden="true"
            className="font-display text-[0.75rem] font-medium uppercase tracking-widest text-gray-400"
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          <h3 className="mt-[0.75rem] font-display text-[1.125rem] font-semibold leading-[1.25] tracking-[-0.02em] text-navy">
            {step.title}
          </h3>

          <p className="mt-[0.75rem] text-[0.9375rem] leading-[1.6] text-gray-700">
            {step.body}
          </p>

          <span
            aria-hidden="true"
            className="absolute start-0 top-0 h-[0.25rem] w-0 rounded-t-card bg-orange transition-all duration-500 group-hover:w-full"
          />
        </RevealOnScroll>
      ))}
    </ol>
  );
};

export default StepList;
