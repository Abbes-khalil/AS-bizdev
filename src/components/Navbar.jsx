"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import DesktopNav from "./nav/DesktopNav";
import LangSwitcher from "../i18n/LangSwitcher";
import MobileNav from "./nav/MobileNav";
import RouteLink from "./RouteLink";
import useActiveRoute from "../hooks/useActiveRoute";
import { useT } from "../i18n";

const Logo = ({ label }) => (
  <RouteLink
    routeKey="home"
    aria-label={label}
    className="group inline-flex items-center gap-3"
  >
    <span className="grid h-10 w-10 place-items-center rounded-xl bg-navy text-white shadow-soft transition-transform duration-300 group-hover:scale-105 group-focus-visible:scale-105">
      <span className="font-display text-[1.05rem] font-bold leading-none tracking-tight">
        AS
      </span>
    </span>
    <span className="font-display text-[1.05rem] font-semibold tracking-tight text-navy">
      AS Biz Dev
    </span>
  </RouteLink>
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

export default function Navbar() {
  const { nav: t, navigation } = useT("common");
  const activeKey = useActiveRoute();
  const pathname = usePathname();
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

  // A client-side navigation must not leave the mobile sheet open behind it.
  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <a href="#main" className="skip-link">
        {t.skipLink}
      </a>

      <header className="fixed inset-x-0 top-0 z-50 h-[80px] border-b border-transparent bg-white/0 backdrop-blur-0 transition-all duration-300 ease-emphasized [.is-scrolled_&]:border-gray-200 [.is-scrolled_&]:bg-white/95 [.is-scrolled_&]:backdrop-blur-lg [.is-scrolled_&]:shadow-soft">
        <div className="container-x flex h-full items-center justify-between">
          <Logo label={t.homeAria} />

          <div className="flex items-center gap-3">
            <DesktopNav
              items={navigation}
              activeKey={activeKey}
              ariaLabel={t.primaryAria}
            />

            <LangSwitcher className="hidden xl:inline-flex" />

            <button
              type="button"
              aria-label={open ? t.closeMenu : t.openMenu}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(!open)}
              className="grid h-11 w-11 place-items-center rounded-btn border border-gray-200 bg-white text-navy transition-colors hover:border-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-white xl:hidden"
            >
              <HamburgerIcon open={open} />
            </button>
          </div>
        </div>
      </header>

      <MobileNav
        open={open}
        items={navigation}
        activeKey={activeKey}
        copy={t}
        onNavigate={() => setOpen(false)}
      />
    </>
  );
}
