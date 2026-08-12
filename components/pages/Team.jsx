import { useId } from "react";
import { UserStar } from "lucide-react";

import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { ASSET } from "@/lib/siteData";
import { getDictionary, interpolate } from "@/lib/i18n/dictionaries";

const TeamCard = ({ member, index, portraitAlt }) => (
  <RevealOnScroll
    as="article"
    variant="up"
    delay={0.08}
    index={index}
    className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-gray-200 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-navy hover:shadow-lift"
  >
    <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100">
      <img
        alt={interpolate(portraitAlt, { name: member.name, role: member.role })}
        className="absolute inset-0 h-full w-full object-cover object-top grayscale transition-all duration-500 group-hover:scale-[1.04] group-hover:grayscale-0"
        decoding="async"
        loading="lazy"
        src={`${ASSET}${member.photo}`}
      />
      <span
        aria-hidden="true"
        className="absolute left-0 top-0 h-[0.25rem] w-0 bg-orange transition-all duration-500 group-hover:w-full"
      />
    </div>

    <div className="flex flex-1 flex-col p-[1.25rem]">
      <h3 className="font-display text-[1.125rem] font-semibold leading-[1.25] tracking-[-0.02em] text-navy">
        {member.name}
      </h3>
      <p className="mt-[0.35rem] text-[0.875rem] font-medium leading-[1.4] text-orange">
        {member.role}
      </p>
      {member.bio && (
        <p className="mt-[1rem] text-[0.875rem] leading-[1.6] text-gray-700">
          {member.bio}
        </p>
      )}
    </div>
  </RevealOnScroll>
);

/**
 * Team roster grid. Members come from `src/i18n/content/team.js`; pass
 * `members` only to override them (previews, tests).
 */
export default function Team({ lang, members, title, description }) {
  const t = getDictionary(lang, "team");
  const clipId = useId().replace(/:/g, "");

  const roster = members ?? t.members;
  const heading = title ?? t.sectionTitle;
  const intro = description ?? t.sectionDescription;

  return (
    <section className="relative w-full overflow-hidden bg-white py-[4rem] md:py-[6rem]">
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
          className="mx-auto mb-[3rem] flex max-w-3xl flex-col items-center text-center"
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
                portraitAlt={t.portraitAlt}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
