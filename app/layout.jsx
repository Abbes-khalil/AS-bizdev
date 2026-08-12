import "@/styles/globals.css";

import Layout from "@/components/layout/Layout";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";

export const metadata = {
  icons: {
    icon: "/brand_assets/asbizdev.png",
  },
};

export const viewport = {
  themeColor: "#D9342B",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        {/*
          RevealOnScroll renders its "hidden" state (opacity:0) into the
          server-rendered HTML — Framer Motion only reveals it once React
          hydrates and whileInView/useReducedMotion run. With JS disabled,
          blocked, or slow to load, that content would stay invisible
          forever. <noscript> CSS only applies when scripting is off, so it
          can't interfere with the (working) JS-driven reduced-motion path.
        */}
        <noscript>
          <style>{`[data-scroll-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <LanguageProvider>
          <Layout>{children}</Layout>
        </LanguageProvider>
      </body>
    </html>
  );
}
