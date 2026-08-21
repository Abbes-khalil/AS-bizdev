import Eyebrow from "@/components/ui/Eyebrow";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

/**
 * Top-of-page hero, shared by every page except Home.
 *
 * - `tone="dark"` renders the navy treatment used by News.
 * - `layout="split"` puts the intro in a right-hand column (Who is Who,
 *   Partners); the default stacks it under the title.
 * - `overlay` takes extra decorative background nodes.
 * - `beforeIntro` renders between the title and the intro (the epigraph on the
 *   long-form content pages, which sits above the intro on the origin site).
 * - `children` renders under the intro (Policy's dates).
 */
const PageHero = ({
  eyebrow,
  titleLead,
  titleAccent,
  titleTail,
  intro,
  tone = "light",
  layout = "stacked",
  className = "max-w-4xl",
  overlay,
  beforeIntro,
  children,
}) => {
  const dark = tone === "dark";

  return (
    <section
      className={`relative overflow-hidden ${dark ? "bg-navy text-white" : "bg-white"}`}
    >
      <div
        className={`pointer-events-none absolute inset-0 ${dark ? "grid-bg-dark opacity-40" : "pattern-dots opacity-[0.15]"}`}
        aria-hidden="true"
      />
      {overlay}

      <div
        className={`relative container-x ${dark ? "py-14 lg:py-20" : "py-12 lg:py-16"}`}
      >
        <RevealOnScroll
          variant="up"
          className={
            layout === "split"
              ? "grid items-end gap-8 lg:grid-cols-[1.4fr_0.6fr]"
              : className
          }
        >
          <div>
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}

            <h1
              className={`mt-5 font-display display-xl font-semibold text-balance ${dark ? "text-white" : "text-navy"}`}
            >
              {titleLead} <span className="italic text-orange">{titleAccent}</span>
              {titleTail ? ` ${titleTail}` : ""}
            </h1>

            {layout === "stacked" && beforeIntro}

            {layout === "stacked" && intro && (
              <p
                className={`mt-6 max-w-2xl text-[1.125rem] leading-[1.7] ${dark ? "text-white/75" : "text-gray-700"}`}
              >
                {intro}
              </p>
            )}

            {layout === "stacked" && children}
          </div>

          {layout === "split" && (
            <p className="max-w-md text-[1.125rem] leading-[1.7] text-gray-700">
              {intro}
            </p>
          )}
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default PageHero;
