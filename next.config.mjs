import { LEGACY_REDIRECTS } from "./lib/constants/legacyRedirects.js";
import { assertServerEnv } from "./lib/env.js";
import { ROUTES } from "./lib/routes.js";

// Fails `next dev` / `next build` immediately with a clear message if a
// required server env var is missing, instead of surfacing as an opaque
// error the first time a page or the ingest API route runs in production.
assertServerEnv();

// Google Fonts (styles/globals.css @import) is the only third-party asset
// this app loads; Supabase is server-only (lib/supabase.js) and never
// reaches the browser bundle, so it needs no connect-src allowance. No
// nonce middleware exists yet, so 'unsafe-inline' on script-src is the
// pragmatic default — Next's App Router injects inline hydration/RSC
// bootstrap scripts on every page that a strict script-src would block.
// Inline style={{}} usage (e.g. components/layout/Footer.jsx) needs the
// same on style-src.
//
// 'unsafe-eval' is added in dev only: Turbopack/React's dev-mode tooling
// (Fast Refresh, component stack reconstruction) uses eval() for source
// mapping and is otherwise silently broken by this same header in
// `next dev`. Production never needs it — React documents that it never
// uses eval() outside development.
const isDev = process.env.NODE_ENV !== "production";
const CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline' https://*.googletagmanager.com${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data: https://*.google-analytics.com https://*.googletagmanager.com",
  // Google Analytics 4 (public/analytics.js, loaded only after consent):
  // the tag comes from googletagmanager.com, but EU hits go to
  // region1.google-analytics.com, so both families must be allowed.
  "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com",
  "frame-src 'none'",
  "frame-ancestors 'none'",
  // PartnerForm/ContactForm POST directly to FormSubmit.co from the browser.
  "form-action 'self' https://formsubmit.co",
  "base-uri 'self'",
  "object-src 'none'",
].join("; ");

const SECURITY_HEADERS = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Legacy fallback for browsers that don't honor frame-ancestors above.
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=()",
  },
  // No includeSubDomains: unconfirmed that every subdomain is HTTPS-only.
  { key: "Strict-Transport-Security", value: "max-age=63072000; preload" },
  { key: "Content-Security-Policy", value: CONTENT_SECURITY_POLICY },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return Object.entries(LEGACY_REDIRECTS).map(([from, key]) => ({
      source: from,
      destination: ROUTES[key].fr,
      permanent: true,
    }));
  },
  async headers() {
    return [
      {
        source: "/en/:path*",
        headers: [{ key: "Content-Language", value: "en" }],
      },
      {
        source: "/ar/:path*",
        headers: [{ key: "Content-Language", value: "ar" }],
      },
      {
        source: "/:path*",
        headers: SECURITY_HEADERS,
      },
      {
        source: "/brand_assets/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
