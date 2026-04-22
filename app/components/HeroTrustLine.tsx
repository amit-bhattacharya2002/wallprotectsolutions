"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import PlaceholderBadge from "./PlaceholderBadge";

/**
 * Each stat has a final numeric value plus a rendered prefix/suffix so the
 * count-up animation only touches the number and leaves the "+" / "%" / "M"
 * decoration stable. `teal` flags the hero number in the original design
 * (healthcare work percentage) — kept for continuity, now rendered on navy.
 */
type Stat = {
  prefix?: string;
  value: number;
  suffix: string;
  label: string;
  teal?: boolean;
};

const stats: Stat[] = [
  { value: 700, suffix: "+", label: "Projects Completed" },
  { value: 16, suffix: "+", label: "UPCC Clinics" },
  { value: 75, suffix: "%+", label: "Healthcare Work", teal: true },
  { value: 20, suffix: "+", label: "Years Experience" },
  { value: 5, suffix: "M+", label: "Sq Ft Installed" },
];

/**
 * Ease-out cubic — classic count-up curve. Fast start, gentle settle.
 */
function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

/**
 * Single stat cell with number that counts up from 0 to `value` once the
 * container scrolls into view. Respects `prefers-reduced-motion` by snapping
 * straight to the final value.
 */
function CountUpStat({ stat, start }: { stat: Stat; start: boolean }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!start) return;
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const duration = prefersReduced ? 0 : 1200;
    const startedAt = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = duration === 0 ? 1 : Math.min(1, (now - startedAt) / duration);
      setCurrent(Math.round(stat.value * easeOutCubic(t)));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, stat.value]);

  return (
    <div className="flex flex-col items-center justify-center px-4 py-2 text-center md:px-5">
      <span
        className={`block text-3xl md:text-4xl font-bold tracking-tight leading-none tabular-nums ${
          stat.teal ? "text-[#5eead4]" : "text-white"
        }`}
      >
        {stat.prefix}
        {current}
        {stat.suffix}
      </span>
      <span className="mt-2 block text-xs md:text-sm text-white/70 leading-snug">
        {stat.label}
      </span>
    </div>
  );
}

export default function HeroTrustLine() {
  // Lazy init so SSR stays 0 but any client that lacks IntersectionObserver
  // (extremely rare) skips straight to the final values.
  const [hasStarted, setHasStarted] = useState(() =>
    typeof window !== "undefined" && typeof IntersectionObserver === "undefined",
  );
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (hasStarted) return;
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setHasStarted(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [hasStarted]);

  return (
    <div
      ref={containerRef}
      className="relative isolate overflow-hidden border-b border-white/5 bg-[#0c1830]"
    >
      {/* Dim, out-of-focus install photo backdrop. Heavy navy overlay on top
          lets the stats read crisply without the photo fighting for attention. */}
      <Image
        src="https://images.unsplash.com/photo-1735448213878-6d52000a1961?auto=format&fit=crop&w=2400&q=80"
        alt=""
        aria-hidden="true"
        fill
        priority={false}
        sizes="100vw"
        className="pointer-events-none object-cover opacity-60 blur-[2px] filter-[saturate(0.7)]"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ backgroundColor: "rgba(12, 24, 48, 0.88)" }}
      />
      <PlaceholderBadge />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-10 md:py-12 lg:px-8">
        <div className="flex flex-col gap-8 md:gap-10">
          <div>
            <p className="mb-4 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#5eead4]">
              Trusted Across British Columbia
            </p>
            <div className="grid w-full grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-8">
              {stats.map((stat, i) => (
                <CountUpStat key={i} stat={stat} start={hasStarted} />
              ))}
            </div>
          </div>

          <div className="max-w-full border-t border-white/10 pt-6">
            <p className="text-center text-base leading-relaxed text-white/80 md:text-lg">
              Trusted by general contractors across British Columbia for interior wall protection systems, with a deep focus on healthcare environments, from active hospital renovations to UPCC clinics and medical facilities.
            </p>
            <Link
              href="/healthcare"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 text-sm font-medium text-[#5eead4] transition-all hover:gap-3"
            >
              Our Healthcare Experience
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
