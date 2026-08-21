import "@/styles/globals.css";
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
  verification: {
    google: "GbOxjBP_zEy5FRPMeQc77o8M_V7Wc8Qo8KabSY8TxKs",
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
    <html lang="fr" dir="ltr" suppressHydrationWarning>
      <head>
        {/* The static shell always renders lang="fr"/dir="ltr" (this route
            tree is shared by every /en/* and /ar/* page too). A plain inline
            script in <head> — not next/script, which is for loading external
            JS and warns when used for a one-line DOM correction like this —
            runs during HTML parsing, before hydration, so English and Arabic
            routes never show the wrong lang/dir. Pattern per Next's
            "preventing flash before hydration" guide; suppressHydrationWarning
            above is scoped to this one attribute mismatch. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var p=location.pathname,l="fr";if(p==="/en"||p.indexOf("/en/")===0)l="en";else if(p==="/ar"||p.indexOf("/ar/")===0)l="ar";document.documentElement.lang=l;document.documentElement.dir=l==="ar"?"rtl":"ltr";})();`,
          }}
        />
      </head>
      <body>
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
