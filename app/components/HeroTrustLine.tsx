"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/**
 * Each stat has a final numeric value plus a rendered prefix/suffix so the
 * count-up animation only touches the number and leaves the "+" / "%" / "M"
 * decoration stable. `accent` flags the healthcare work percentage, rendered
 * as a quiet healthcare-green accent on navy.
 */
type Stat = {
  prefix?: string;
  value: number;
  suffix: string;
  unit?: string;
  label: string;
  accent?: boolean;
};

const stats: Stat[] = [
  { value: 700, suffix: "+", label: "Projects Completed" },
  { value: 16, suffix: "+", label: "UPCC Clinics" },
  { value: 75, suffix: "%+", label: "Healthcare Work", accent: true },
  { value: 20, suffix: "+", label: "Years Experience" },
  { value: 5, suffix: "M+", unit: "(Million)", label: "Sq Ft Installed" },
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
    <div className="border-t border-slate-200 pt-4 max-md:text-center md:border-l md:border-t-0 md:pl-6">
      <span
        className={`block text-3xl font-semibold tracking-tight leading-none tabular-nums md:text-4xl ${
          stat.accent ? "text-[#4f8f16]" : "text-[#10233F]"
        }`}
      >
        {stat.prefix}
        {current}
        {stat.suffix}
      </span>
      {stat.unit ? (
        <span className="mt-1 block text-[0.65rem] font-medium uppercase tracking-[0.06em] text-slate-400 md:text-[0.7rem]">
          {stat.unit}
        </span>
      ) : null}
      <span className="mt-2 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 md:text-[0.78rem]">
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
      className="relative isolate overflow-hidden border-b border-slate-200 bg-white"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#005EB8]/35 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-9 md:py-10 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.5fr] lg:items-end lg:gap-12">
          <div className="max-lg:text-center">
            <p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#4f8f16]">
              Built for spec-driven projects
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-[#10233F] md:text-3xl">
              Proof before promises.
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 md:text-base md:leading-7">
              Healthcare-heavy experience, manufacturer familiarity, and
              GC-level coordination for wall protection packages across BC.
            </p>
            <Link
              href="/healthcare"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#64A70B] transition-all hover:gap-3 hover:text-[#4f8f16]"
            >
              See healthcare experience
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

          <div className="grid grid-cols-2 gap-x-5 gap-y-6 md:grid-cols-5 md:gap-x-0">
            {stats.map((stat, i) => (
              <CountUpStat key={i} stat={stat} start={hasStarted} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
