import "@/styles/globals.css";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import Layout from "@/components/layout/Layout";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/constants/site";

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
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/apple-touch-icon.png",
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
        {/* The static shell always renders lang="fr" (this route tree is
            shared by every /en/* page too); this runs before hydration to
            correct it immediately for English routes, avoiding a visible
            flash and a wrong lang for the initial render. */}
        <Script id="lang-correct" strategy="beforeInteractive">
          {`document.documentElement.lang = (location.pathname === "/en" || location.pathname.indexOf("/en/") === 0) ? "en" : "fr";`}
        </Script>
        <SpeedInsights />
        <Analytics />
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
