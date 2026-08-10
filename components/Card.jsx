import { ASSET } from "@/lib/siteData";

export function ImageCard({ src, title, description, href = "/nossolutions", number, eyebrow }) {
  return (
    <a
      href={href}
      className="group block card-base card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-white"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
        <img
          src={ASSET + src}
          alt=""
          loading="lazy"
          decoding="async"
          width="640"
          height="480"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[800ms] ease-emphasized group-hover:scale-[1.04] group-focus-visible:scale-[1.04]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent opacity-60"
          aria-hidden="true"
        />
        {/* Orange accent line at top */}
        <span
          aria-hidden="true"
          className="absolute left-0 top-0 h-1 w-0 bg-orange transition-all duration-500 group-hover:w-full group-focus-visible:w-full"
        />
      </div>
      <div className="p-7 lg:p-8">
        <div className="flex items-baseline justify-between gap-4">
          {eyebrow ? (
            <span className="eyebrow text-orange">{eyebrow}</span>
          ) : number ? (
            <span className="font-display text-[0.75rem] font-medium uppercase tracking-widest text-gray-400">
              {number}
            </span>
          ) : null}
          <span
            aria-hidden="true"
            className="grid h-9 w-9 place-items-center rounded-full border border-gray-200 text-navy transition-all duration-300 group-hover:border-orange group-hover:bg-orange group-hover:text-white group-focus-visible:border-orange group-focus-visible:bg-orange group-focus-visible:text-white"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M1 7H13M13 7L7 1M13 7L7 13"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
        <h3 className="mt-5 font-display text-[1.5rem] font-semibold leading-tight tracking-tight text-navy lg:text-[1.625rem]">
          {title}
        </h3>
        {description && (
          <p className="mt-3 text-[0.95rem] leading-relaxed text-gray-700">
            {description}
          </p>
        )}
      </div>
    </a>
  );
}
