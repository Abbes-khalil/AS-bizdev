import RevealOnScroll from "@/components/RevealOnScroll";
import SectionHeading from "@/components/SectionHeading";

/**
 * "Les + AS Biz Dev" — narrative block placed after references and the
 * ecosystem section, before the closing CTA. Purely copy-driven: three
 * cards, each an optional bullet list, no logos or data fetching.
 */
const AsBizDevEdge = ({ eyebrow, titleLead, titleAccent, intro, blocks }) => (
  <div>
    <SectionHeading eyebrow={eyebrow} titleLead={titleLead} titleAccent={titleAccent} intro={intro} />

    <div className="mt-12 grid gap-8 md:grid-cols-3">
      {blocks.map((block, i) => (
        <RevealOnScroll
          key={block.heading}
          as="article"
          variant="up"
          index={i}
          className="rounded-card border border-gray-200 bg-white p-8"
        >
          <h3 className="font-display text-[1.25rem] font-semibold tracking-tight text-navy">
            {block.heading}
          </h3>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-gray-700">{block.body}</p>

          {block.list && (
            <ul role="list" className="mt-4 space-y-2">
              {block.list.map((item) => (
                <li key={item} className="flex items-start gap-2 text-[0.9rem] text-gray-700">
                  <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-orange" />
                  {item}
                </li>
              ))}
            </ul>
          )}
        </RevealOnScroll>
      ))}
    </div>
  </div>
);

export default AsBizDevEdge;
