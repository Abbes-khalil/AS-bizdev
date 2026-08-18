import "@/styles/globals.css";

import Layout from "@/components/layout/Layout";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/constants/site";
import { Analytics } from "@vercel/analytics/next";

/**
 * `metadataBase` is what lets every page's relative `openGraph.images`
 * (e.g. "/brand_assets/og-image.png") resolve to an absolute HTTPS URL in
 * the rendered <meta property="og:image"> tag — without it Next falls back
 * to the deploy's own origin (localhost in dev, the preview URL on Vercel
 * previews), which is wrong wherever the page is actually shared from.
 * Every page's own generateMetadata() already sets its own openGraph, so
 * this root-level one is the fallback for any route that doesn't (e.g. a
 * future page added without full metadata).
 */
export const metadata = {
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: "/brand_assets/asbizdev.png",
  },
  openGraph: {
    siteName: SITE_NAME,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    images: [OG_IMAGE],
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
        <Analytics />
      </body>
    </html>
  );
}
