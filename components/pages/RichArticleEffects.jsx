"use client";

import { useEffect } from "react";

/**
 * Behaviour of the validated preview, unchanged: AI summary buttons, reveal
 * on scroll, animated counters, reading progress bar and active table of
 * contents entry. Everything is cut under prefers-reduced-motion.
 */
export default function RichArticleEffects({ prompt, note }) {
  useEffect(() => {
    const root = document.querySelector(".ra");
    if (!root) return undefined;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups = [];

    root.querySelectorAll(".ia").forEach((button) => {
      const onClick = () => {
        try {
          navigator.clipboard?.writeText(prompt);
        } catch {
          /* clipboard refused: the link below still carries the question */
        }
        window.open(button.dataset.base + encodeURIComponent(prompt), "_blank", "noopener");
        const status = root.querySelector(".ri-note");
        if (status) status.textContent = note;
      };
      button.addEventListener("click", onClick);
      cleanups.push(() => button.removeEventListener("click", onClick));
    });

    const count = (el) => {
      const end = Number(el.dataset.fin);
      const sep = el.dataset.sep === " " ? " " : el.dataset.sep || "";
      const fmt = (n) => (sep ? String(n).replace(/\B(?=(\d{3})+(?!\d))/g, sep) : String(n));
      if (reduced) {
        el.textContent = fmt(end);
        return;
      }
      let t0 = null;
      const step = (t) => {
        if (!t0) t0 = t;
        const p = Math.min(1, (t - t0) / 1400);
        el.textContent = fmt(Math.round(end * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(step);
      };
      el.textContent = fmt(0);
      requestAnimationFrame(step);
    };

    const items = root.querySelectorAll(".rv");
    if (reduced || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("vu"));
      root.querySelectorAll(".cpt").forEach(count);
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("vu");
            entry.target.querySelectorAll(".cpt").forEach((c) => {
              if (!c.dataset.fait) {
                c.dataset.fait = "1";
                count(c);
              }
            });
            io.unobserve(entry.target);
          });
        },
        { rootMargin: "0px 0px -10% 0px" },
      );
      items.forEach((el) => io.observe(el));
      cleanups.push(() => io.disconnect());
    }

    const links = [...root.querySelectorAll(".sommaire a")];
    const targets = links.map((a) => document.getElementById(a.getAttribute("href").slice(1)));
    const bar = root.querySelector(".ra-prog");
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      if (bar) bar.style.transform = `scaleX(${max > 0 ? h.scrollTop / max : 0})`;
      let active = -1;
      targets.forEach((t, k) => {
        if (t && t.getBoundingClientRect().top < 160) active = k;
      });
      links.forEach((a, k) => a.classList.toggle("actif", k === active));
    };
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    cleanups.push(() => removeEventListener("scroll", onScroll));

    return () => cleanups.forEach((fn) => fn());
  }, [prompt, note]);

  return null;
}
