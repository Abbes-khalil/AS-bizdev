"use client";

import Script from "next/script";
import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

/**
 * Cloudflare Turnstile, managed mode — invisible for most visitors, no
 * puzzle in the common case. Rendered inside the <form>: the widget injects
 * its own hidden `cf-turnstile-response` input, read like any other field
 * via FormData. Exposes `reset()` so the parent can get a fresh token after
 * a submit attempt — Turnstile tokens are single-use.
 */
const TurnstileWidget = forwardRef(function TurnstileWidget(_props, ref) {
  const containerRef = useRef(null);
  const widgetIdRef = useRef(null);

  useEffect(() => {
    if (!SITE_KEY) return undefined;

    const renderWidget = () => {
      if (!window.turnstile || !containerRef.current || widgetIdRef.current) return;
      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: SITE_KEY,
      });
    };

    if (window.turnstile) {
      renderWidget();
    } else {
      window.addEventListener("turnstile-loaded", renderWidget, { once: true });
    }

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, []);

  useImperativeHandle(ref, () => ({
    reset: () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.reset(widgetIdRef.current);
      }
    },
  }));

  if (!SITE_KEY) return null;

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
        onLoad={() => window.dispatchEvent(new Event("turnstile-loaded"))}
      />
      <div ref={containerRef} className="mt-6" />
    </>
  );
});

export default TurnstileWidget;
