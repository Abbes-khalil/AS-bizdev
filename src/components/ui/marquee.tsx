"use client";

import {
  Children,
  type CSSProperties,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

import { cn } from "@/lib/utils";

export interface MarqueeProps {
  children: ReactNode;
  className?: string;
  pauseOnHover?: boolean;
  speed?: number;
  reverse?: boolean;
  ariaLabel?: string;
}

type MarqueeStyle = CSSProperties & {
  "--marquee-duration": string;
  "--marquee-direction": "normal" | "reverse";
};

export function Marquee({
  children,
  className,
  pauseOnHover = false,
  speed = 40,
  reverse = false,
  ariaLabel,
}: MarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState(30);
  const [paused, setPaused] = useState(false);
  const items = Children.toArray(children);

  useEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    const halfWidth = track.scrollWidth / 2;

    if (halfWidth > 0) {
      setDuration(Math.max(8, halfWidth / speed));
    }
  }, [children, speed]);

  const marqueeStyle: MarqueeStyle = {
    "--marquee-duration": `${duration}s`,
    "--marquee-direction": reverse ? "reverse" : "normal",
  };

  return (
    <div
      aria-label={ariaLabel}
      role={ariaLabel ? "region" : undefined}
      tabIndex={ariaLabel ? 0 : undefined}
      className={cn(
        "marquee-viewport group relative flex w-full overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-4",
        className,
      )}
      onBlur={() => pauseOnHover && setPaused(false)}
      onFocus={() => pauseOnHover && setPaused(true)}
      onMouseEnter={() => pauseOnHover && setPaused(true)}
      onMouseLeave={() => pauseOnHover && setPaused(false)}
      style={marqueeStyle}
    >
      <div
        ref={trackRef}
        className="animate-marquee-track flex w-max shrink-0 items-stretch gap-[var(--gap,1.5rem)] pr-[var(--gap,1.5rem)]"
        style={{ animationPlayState: paused ? "paused" : "running" }}
      >
        {items.map((child, index) => (
          <div key={`primary-${index}`} className="shrink-0">
            {child}
          </div>
        ))}
        {items.map((child, index) => (
          <div
            key={`duplicate-${index}`}
            aria-hidden="true"
            className="marquee-duplicate shrink-0"
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
