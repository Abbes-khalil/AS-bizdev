"use client";

import Link from "next/link";

import { ROUTES } from "@/lib/routes";
import { ASSET } from "@/lib/siteData";
import { CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/constants/site";
import { interpolate, useLang, useT } from "@/lib/i18n/dictionaries";

const SocialIcon = ({ href, label, children }) => (
  <a
    href={href}
    aria-label={label}
    rel="noopener noreferrer"
    target="_blank"
    className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white/80 transition-all duration-300 hover:border-orange hover:bg-orange hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
  >
    {children}
  </a>
);

export default function Footer() {
  const { lang } = useLang();
  const { footer: t, footerLinks, nav } = useT("common");

  return (
    <footer className="relative overflow-hidden bg-navy text-white">
      <div
        className="pointer-events-none absolute inset-0 grid-bg-dark opacity-30"
        aria-hidden="true"
      />
      {/* Decorative orange diagonal corner */}
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-[40rem] w-[40rem] opacity-[0.05]"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,106,0,0.8), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative">
        {/* Top wordmark CTA */}
        <div className="container-x pt-24 lg:pt-32">
          <div className="inline-flex items-center gap-3">
            <span
              className="h-1 w-10 rounded-full bg-orange"
              aria-hidden="true"
            />
            <p className="eyebrow text-white/60">{t.ctaEyebrow}</p>
          </div>
          <Link
            href={ROUTES.contact[lang]}
            className="mt-6 inline-flex items-baseline gap-4 font-display text-[clamp(2.25rem,6vw,5rem)] font-semibold leading-[0.95] tracking-tight text-white transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-navy rounded-md"
          >
            <span>{t.ctaLine1}</span>
            <span className="italic text-orange">{t.ctaLine2}</span>
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              aria-hidden="true"
              className="self-center"
            >
              <path
                d="M6 30L30 6M30 6H12M30 6V24"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        <div className="container-x mt-20 grid gap-12 border-t border-white/10 pt-16 lg:grid-cols-[1.2fr_1fr_1fr_1fr_1fr]">
          <div>
            <Link
              href={ROUTES.home[lang]}
              aria-label={nav.homeAria}
              className="inline-flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
            >
              <img
                src={ASSET + "asbizdev.png"}
                alt="AS Biz Dev"
                className="h-7 w-auto"
              />
              <span className="mt-1 font-display text-[0.65rem] font-medium uppercase tracking-widest text-white/60">
                {t.brandTagline}
              </span>
            </Link>
            <p className="mt-6 max-w-xs text-[0.95rem] leading-relaxed text-white/70">
              {t.tagline}
            </p>
            <div className="mt-8 flex items-center gap-3">
              <SocialIcon
                href="https://www.linkedin.com/company/as-biz-dev/?originalSubdomain=fr"
                label={t.linkedinLabel}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
                </svg>
              </SocialIcon>
              <SocialIcon
                href="https://www.facebook.com/profile.php?id=100085701123233"
                label={t.facebookLabel}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.52c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z" />
                </svg>
              </SocialIcon>
            </div>
          </div>

          <nav aria-label={footerLinks[0].title}>
            <p className="eyebrow text-white/50">{footerLinks[0].title}</p>
            <ul className="mt-6 space-y-3">
              {footerLinks[0].items.map(({ key, label }) => (
                <li key={key}>
                  <Link
                    href={ROUTES[key][lang]}
                    className="text-[0.95rem] text-white/80 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-navy rounded px-1 py-1 -mx-1"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {footerLinks.slice(1).map(({ title, items }) => (
            <nav key={title} aria-label={title}>
              <p className="eyebrow text-white/50">{title}</p>
              <ul className="mt-6 space-y-3">
                {items.map(({ key, label }) => (
                  <li key={key}>
                    <Link
                      href={ROUTES[key][lang]}
                      className="text-[0.95rem] text-white/80 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-navy rounded px-1 py-1 -mx-1"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
          <span className="inline-block text-[0.95rem] text-orange">
            <br />
            <br />
            <br />
            {CONTACT_EMAIL} <br /> {CONTACT_PHONE}
          </span>
        </div>

        {/* Bottom bar */}
        <div className="container-x mt-20 border-t border-white/10 py-8">
          <div className="flex flex-col items-start justify-between gap-4 text-xs text-white/60 sm:flex-row sm:items-center">
            <p>
              {interpolate(t.copyright, { year: new Date().getFullYear() })}
            </p>
            <div className="flex items-center gap-6">
              <Link
                href={ROUTES.legalNotice[lang]}
                className="rounded px-1 py-1 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
              >
                {t.legalNotice}
              </Link>
              <Link
                href={ROUTES.policy[lang]}
                className="rounded px-1 py-1 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
              >
                {t.policy}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
