import Eyebrow from "@/components/ui/Eyebrow";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

/**
 * Heading block used inside pages: optional eyebrow, a two-part title where
 * the accent half is italic orange, and an optional intro paragraph.
 *
 *   <SectionHeading
 *     eyebrow="Nos valeurs"
 *     titleLead="Parce qu'elles nous rendent"
 *     titleAccent="meilleurs."
 *     intro="…"
 *   />
 */
const SectionHeading = ({
  eyebrow,
  titleLead,
  titleAccent,
  intro,
  bar = false,
  as = "h2",
  className = "max-w-3xl",
  children,
}) => {
  const Title = as;

  return (
    <RevealOnScroll variant="up" className={className}>
      {eyebrow && <Eyebrow bar={bar}>{eyebrow}</Eyebrow>}

      <Title
        className={`${eyebrow ? "mt-4" : ""} font-display text-[2rem] font-semibold leading-[1.15] tracking-tight text-navy text-balance md:text-[2.5rem] lg:text-[2.75rem]`}
      >
        {titleLead}{" "}
        <span className="italic text-orange">{titleAccent}</span>
      </Title>

      {intro && (
        <p className="mt-5 max-w-2xl text-[1.0625rem] leading-[1.7] text-gray-700">
          {intro}
        </p>
      )}

      {children}
    </RevealOnScroll>
  );
};

export default SectionHeading;
