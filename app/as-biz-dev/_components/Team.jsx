import { useId } from "react";
import { UserStar } from "lucide-react";

import RevealOnScroll from "@/components/ui/RevealOnScroll";
import TeamCard from "@/app/as-biz-dev/_components/TeamCard";

/**
 * Team roster grid. `copy` (sectionTitle, sectionDescription, portraitAlt,
 * members) comes from the page that renders this — `app/as-biz-dev/page.jsx`
 * or `app/en/about/page.jsx`. Pass `members`/`title`/`description` only to
 * override the page's roster (previews, tests).
 */
export default function Team({ copy, members, title, description }) {
  const clipId = useId().replace(/:/g, "");

  const roster = members ?? copy.members;
  const heading = title ?? copy.sectionTitle;
  const intro = description ?? copy.sectionDescription;

  return (
    <section className="relative w-full overflow-hidden bg-white py-[3.25rem] md:py-[5rem]">
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-0 text-gray-200"
        fill="none"
        height="154"
        viewBox="0 0 460 154"
        width="460"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath={`url(#${clipId})`}>
          <path
            d="M-87.463 458.432C-102.118 348.092 -77.3418 238.841 -15.0744 188.274C57.4129 129.408 180.708 150.071 351.748 341.128C278.246 -374.233 633.954 380.602 548.123 42.7707"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="40"
          />
        </g>
        <defs>
          <clipPath id={clipId}>
            <rect fill="white" height="154" width="460" />
          </clipPath>
        </defs>
      </svg>

      <div className="relative z-10 mx-auto max-w-[1280px] px-[1.5rem] lg:px-[2.5rem]">
        <RevealOnScroll
          variant="up"
          className="mx-auto mb-[2.5rem] flex max-w-3xl flex-col items-center text-center"
        >
          <div className="mb-[1.5rem] grid h-[3rem] w-[3rem] place-items-center rounded-[0.75rem] bg-navy text-white">
            <UserStar aria-hidden="true" size={24} strokeWidth={2} />
          </div>

          <h2 className="relative mb-[1rem] font-display text-[2rem] font-semibold leading-[1.15] tracking-[-0.03em] text-navy sm:text-[2.5rem]">
            {heading}
            <svg
              aria-hidden="true"
              className="absolute -top-2 -right-8 -z-10 w-[6rem] text-orange/30"
              fill="currentColor"
              height="86"
              viewBox="0 0 108 86"
              width="108"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M38.8484 16.236L15 43.5793L78.2688 15L18.1218 71L93 34.1172L70.2047 65.2739"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="28"
              />
            </svg>
          </h2>
          <p className="max-w-2xl text-[1rem] leading-[1.7] text-gray-700">
            {intro}
          </p>
        </RevealOnScroll>

        <ul
          role="list"
          className="grid grid-cols-1 gap-[1.25rem] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-[1.25rem]"
        >
          {roster.map((member, index) => (
            <li key={member.name} className="h-full">
              <TeamCard
                member={member}
                index={index}
                portraitAlt={copy.portraitAlt}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
