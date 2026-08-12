import RevealOnScroll from "@/components/ui/RevealOnScroll";

/** Plain title + body card used across About, Sectors and Network pages. */
const TextCard = ({ item, index }) => (
  <RevealOnScroll
    as="article"
    variant="up"
    delay={0.05}
    index={index}
    className="flex h-full flex-col rounded-card border border-gray-200 bg-white p-[1.25rem] transition-all duration-300 hover:-translate-y-1 hover:border-navy hover:shadow-lift"
  >
    <h3 className="font-display text-[1.25rem] font-semibold leading-[1.25] tracking-[-0.02em] text-navy">
      {item.title}
    </h3>
    <p className="mt-[0.875rem] text-[0.9375rem] leading-[1.7] text-gray-700">
      {item.body}
    </p>
  </RevealOnScroll>
);

export default TextCard;
