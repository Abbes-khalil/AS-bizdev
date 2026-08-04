import { useEffect, useState } from "react";

import LangSwitcher from "../i18n/LangSwitcher";
import { useT } from "../i18n";

const Logo = ({ label, className = "" }) => (
  <a
    href="/"
    aria-label={label}
    className={`group inline-flex items-center gap-3 ${className}`}
  >
    <span className="grid h-10 w-10 place-items-center rounded-xl bg-navy text-white shadow-soft transition-transform duration-300 group-hover:scale-105 group-focus-visible:scale-105">
      <span className="font-display text-[1.05rem] font-bold leading-none tracking-tight">
        AS
      </span>
    </span>
    <span className="flex flex-col leading-none">
      <span className="font-display text-[1.05rem] font-semibold tracking-tight text-navy">
        AS Biz Dev
      </span>
      <span className="mt-1 font-display text-[0.65rem] font-medium uppercase tracking-widest text-gray-500"></span>
    </span>
  </a>
);

const HamburgerIcon = ({ open }) => (
  <div className="relative h-4 w-5" aria-hidden="true">
    <span
      className={`absolute left-0 top-0 h-[1.5px] w-5 origin-center bg-current transition-transform duration-300 ${
        open ? "translate-y-[7px] rotate-45" : ""
      }`}
    />
    <span
      className={`absolute left-0 top-1/2 h-[1.5px] w-5 -translate-y-1/2 bg-current transition-opacity duration-200 ${
        open ? "opacity-0" : "opacity-100"
      }`}
    />
    <span
      className={`absolute left-0 top-full h-[1.5px] w-5 origin-center bg-current transition-transform duration-300 ${
        open ? "-translate-y-[7px] -rotate-45" : ""
      }`}
    />
  </div>
);

export default function Navbar({ active }) {
  const { nav: t, navigation: navItems } = useT("common");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      document.documentElement.classList.toggle(
        "is-scrolled",
        window.scrollY > 12,
      );
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <a href="#main" className="skip-link">
        {t.skipLink}
      </a>

      <header className="fixed inset-x-0 top-0 z-50 h-[80px] border-b border-transparent bg-white/0 backdrop-blur-0 transition-all duration-300 ease-emphasized [.is-scrolled_&]:border-gray-200 [.is-scrolled_&]:bg-white/95 [.is-scrolled_&]:backdrop-blur-lg [.is-scrolled_&]:shadow-soft">
        <div className="container-x flex h-full items-center justify-between">
          <Logo label={t.homeAria} />

          <div className="flex items-center gap-3">
            <nav
              className="hidden items-center gap-1 lg:flex"
              aria-label={t.primaryAria}
            >
              {navItems.map(([label, href]) => {
                const isActive = active === href;
                return (
                  <a
                    key={href}
                    href={href}
                    aria-current={isActive ? "page" : undefined}
                    className={`group relative rounded-btn px-4 py-2 font-display text-[0.9rem] font-medium tracking-tight transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
                      isActive ? "text-navy" : "text-gray-700 hover:text-navy"
                    }`}
                  >
                    {label}
                    <span
                      aria-hidden="true"
                      className={`pointer-events-none absolute inset-x-3 -bottom-0.5 h-[2px] origin-left rounded-full bg-orange transition-transform duration-300 ease-out ${
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100"
                      }`}
                    />
                  </a>
                );
              })}
            </nav>

            <LangSwitcher className="hidden lg:inline-flex" />

            <button
              type="button"
              aria-label={open ? t.closeMenu : t.openMenu}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(!open)}
              className="grid h-11 w-11 place-items-center rounded-btn border border-gray-200 bg-white text-navy transition-colors hover:border-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-white lg:hidden"
            >
              <HamburgerIcon open={open} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile sheet */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 bg-white pt-[80px] transition-transform duration-500 ease-emphasized lg:hidden ${
          open ? "translate-y-0" : "translate-y-full"
        }`}
        aria-hidden={!open}
        role="dialog"
        aria-modal="true"
        aria-label={t.mobileAria}
      >
        <div className="container-x flex h-full flex-col justify-between pb-10 pt-6">
          <nav aria-label={t.mobileAria}>
            <ul className="space-y-1">
              {navItems.map(([label, href], idx) => (
                <li
                  key={href}
                  className="border-b border-gray-200"
                  style={{ transitionDelay: `${idx * 30}ms` }}
                >
                  <a
                    href={href}
                    aria-current={active === href ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline justify-between py-5 font-display text-2xl font-semibold tracking-tight text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-md"
                  >
                    <span>
                      <span className="mr-3 font-display text-[0.75rem] font-medium uppercase tracking-widest text-gray-400">
                        0{idx + 1}
                      </span>
                      {label}
                    </span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 15L15 5M15 5H7M15 5V13"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="space-y-4">
            <LangSwitcher />
            <a
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary w-full"
            >
              {t.mobileCta}
            </a>
            <p className="font-display text-[0.7rem] font-medium uppercase tracking-widest text-gray-400">
              {t.mobileCaption}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}