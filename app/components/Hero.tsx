"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Real project photography used by the homepage carousel.
 */
const heroImages = [
  {
    src: "/actualphotos/hero-wall-protection-matters.jpg",
    alt: "Hygienic production environment with white wall cladding and stainless process line",
  },
  
  {
    src: "/actualphotos/hero-healthcare-corridor.jpg",
    alt: "Bright healthcare corridor with installed wall protection panels",
  },
  {
    src: "/actualphotos/14.jpg",
    alt: "Restaurant interior with finished wall protection behind service area",
  },
  {
    src: "/actualphotos/hero-hygienic-production-room-v2.jpg",
    alt: "Hygienic production room with FRP wall panel installation",
  },
];

/**
 * Copy that rotates in sync with the background carousel. Length must match
 * `heroImages` — we index both with the same `activeIndex`.
 */
const slideCopy = [
  {
    eyebrow: "Healthcare Corridors",
    headline: "Wall protection, installed where it matters most.",
    ctaLabel: "See our healthcare work",
    ctaHref: "/healthcare",
  },
  {
    eyebrow: "Institutional Scope",
    headline: "Hygienic corridor systems for live hospital work.",
    ctaLabel: "Browse interior systems",
    ctaHref: "/systems",
  },
  {
    eyebrow: "Wall Protection Specialists",
    headline: "Surfaces built to outlast the traffic they carry.",
    ctaLabel: "Explore wall protection systems",
    ctaHref: "/systems/wall-protection",
  },
  {
    eyebrow: "FRP Wall Panels",
    headline: "FRP systems installed to spec, on schedule.",
    ctaLabel: "Explore FRP wall systems",
    ctaHref: "/systems/frp-wall-systems",
  },
];

const SLIDE_DURATION_MS = 7000;

const PROCORE_PROFILE_HREF = "https://network.procore.com/p/frp-installations-coquitlam";
const PROCORE_BADGE_SRC = "https://network.procore.com/assets/static/procore-white-badge.svg";

function HeroPartnerStack({ layout }: { layout: "mobile" | "desktop" }) {
  const mobile = layout === "mobile";

  const badge = (
    <a
      href={PROCORE_PROFILE_HREF}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block w-fit shrink-0 cursor-pointer rounded-md opacity-95 transition-opacity hover:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- third-party Procore badge asset */}
      <img
        src={PROCORE_BADGE_SRC}
        alt="Find us on Procore — FRP Installations on the Procore Construction Network"
        width={176}
        height={64}
        className={mobile ? "h-9 w-auto sm:h-10" : "h-10 w-auto md:h-12 lg:h-16"}
      />
    </a>
  );

  if (mobile) {
    return (
      <div className="flex w-full flex-row items-start justify-between gap-3 sm:gap-4">
        <div className="flex min-w-0 flex-1 flex-col items-start gap-2">
          <div className="h-0.5 w-12 shrink-0 bg-[#0d9488] sm:w-16" aria-hidden />
          <p className="min-w-0 text-left text-sm font-semibold leading-snug tracking-tight text-white">
            Wall Protection Construction Partner.
          </p>
        </div>
        <span className="shrink-0">{badge}</span>
      </div>
    );
  }

  return (
    <div className="flex w-full max-w-full flex-col gap-3 text-left">
      {badge}
      <div className="h-0.5 w-full max-w-[300px] bg-[#0d9488]" />
      <p className="text-sm font-semibold tracking-tight text-white md:text-lg">Wall Protection Construction Partner.</p>
      <p className="text-xs leading-relaxed text-white/75 md:text-sm">
        Specializing in healthcare and institutional interior protection systems across British Columbia.
      </p>
    </div>
  );
}

function HeroCarouselDots({
  activeIndex,
  onSelect,
  className,
}: {
  activeIndex: number;
  onSelect: (index: number) => void;
  className?: string;
}) {
  return (
    <div className={className}>
      {heroImages.map((slide, idx) => (
        <button
          key={idx}
          type="button"
          onClick={() => onSelect(idx)}
          aria-label={`Show slide ${idx + 1}: ${slide.alt}`}
          aria-current={idx === activeIndex}
          className={`h-1 rounded-full transition-[width,background-color,opacity] duration-500 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 md:h-1.5 ${
            idx === activeIndex
              ? "w-5 bg-white/55 shadow-[0_0_12px_rgba(255,255,255,0.12)] md:w-7 md:bg-white/90 md:shadow-[0_0_14px_rgba(0,0,0,0.35)]"
              : "w-2 bg-white/18 hover:bg-white/32 md:w-3.5 md:bg-white/45 md:hover:bg-white/65"
          }`}
        />
      ))}
    </div>
  );
}

/**
 * Hero layout notes
 *
 * Background is a cross-fading carousel of real project photos with a
 * slow Ken Burns zoom (1.05 → 1.00) that re-triggers on each cycle so the
 * background never feels static. A left-to-right navy ink gradient (~40%
 * opacity at the left edge, transparent on the right) keeps white type
 * legible regardless of which image is currently showing.
 *
 * Eyebrow + headline track the same `activeIndex` as the background (copy
 * snaps off / fades in so two headlines never sit half-visible on top of each
 * other). Arrow keys advance/reverse the carousel when focus is inside
 * the hero region (a11y). Interval auto-advances every 7s; hovering or
 * focusing the region pauses rotation so users can read.
 *
 * Carousel dots: subtle on mobile (row above the FRP card). From md up they
 * sit above a bottom row: partner stack (left) and brand card (right) with
 * composite logo image, duotone accents, then CTAs. `items-end` lines the
 * stack’s bottom up with the card’s bottom edge.
 */
export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<number | null>(null);
  const regionRef = useRef<HTMLElement | null>(null);

  const advance = useCallback((step = 1) => {
    setActiveIndex((prev) => (prev + step + heroImages.length) % heroImages.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = window.setInterval(() => {
      advance(1);
    }, SLIDE_DURATION_MS);
    return () => {
      if (timerRef.current !== null) window.clearInterval(timerRef.current);
    };
  }, [advance, isPaused]);

  // Keyboard navigation — only hijack arrow keys when focus is within the hero
  // region, so we don't break page-level scroll elsewhere.
  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      const region = regionRef.current;
      if (!region) return;
      const active = document.activeElement;
      if (!(active instanceof Node) || !region.contains(active)) return;
      if (event.key === "ArrowRight") {
        event.preventDefault();
        advance(1);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        advance(-1);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [advance]);

  return (
    <section
      id="home"
      ref={regionRef}
      className="relative h-dvh overflow-hidden"
      aria-roledescription="carousel"
      aria-label="Featured wall protection project imagery"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {/* ── Background layer: cross-fading slides with Ken Burns ── */}
      {heroImages.map((slide, index) => {
        const isActive = index === activeIndex;
        return (
          <div
            key={index}
            aria-hidden={!isActive}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              // `key={activeIndex}` re-mounts this inner div on each rotation
              // so the Ken Burns animation restarts from 1.05× every time
              // this slide becomes active. Only the active slide runs the
              // animation; others stay neutral to avoid wasted GPU work.
              key={isActive ? activeIndex : `idle-${index}`}
              className="absolute inset-0"
              style={
                isActive
                  ? {
                      animation: `kenburns ${SLIDE_DURATION_MS + 1000}ms ease-out forwards`,
                    }
                  : undefined
              }
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                // Slide 0 gets `priority` (preload + fetchpriority=high) for
                // LCP. The remaining slides still need to load eagerly — they sit at
                // opacity:0 inside fixed-position parents, where native
                // `loading="lazy"` heuristics can defer the fetch and leave
                // a blank slot when the carousel rotates onto them.
                priority={index === 0}
                loading={index === 0 ? undefined : "eager"}
                className="object-cover filter-[saturate(0.85)_brightness(0.97)]"
                sizes="100vw"
              />
            </div>
          </div>
        );
      })}

      {/* Left-side navy ink gradient (~40% opacity) keeps the headline legible
           regardless of which image is currently visible. */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(12,24,48,0.72) 0%, rgba(12,24,48,0.4) 35%, rgba(12,24,48,0.05) 65%, rgba(12,24,48,0) 100%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />

      {/* ── Foreground layer ── */}
      <div className="pointer-events-none max-w-7xl mx-auto absolute inset-0 z-10">
        {/* Heading — one slot, each slide supplies its own eyebrow + headline.
             All variants stack in a single grid cell and crossfade in sync
             with the background slideshow. */}
        <div className="pointer-events-auto absolute inset-x-0 top-[22dvh] z-40 px-5 pb-6 max-sm:top-[18dvh] max-sm:px-4 max-sm:pb-8 md:top-[30dvh] md:pb-0 md:pl-8 lg:pl-10 lg:pr-8">
          {/*
            Stacked in one grid cell. Do NOT crossfade outgoing + incoming copy
            with the same long opacity transition — both sit at ~50% opacity in
            the middle of the tween and the headlines read as jumbled (worse
            on narrow widths). Outgoing snaps off; only the active line fades in.
          */}
          <div className="isolate grid" aria-live="polite">
            {slideCopy.map((slide, idx) => (
              <div
                key={idx}
                className={`col-start-1 row-start-1 ${
                  idx === activeIndex
                    ? "relative z-10 opacity-100 transition-opacity duration-500 ease-out motion-reduce:transition-none"
                    : "pointer-events-none relative z-0 opacity-0 transition-none motion-reduce:transition-none"
                }`}
                aria-hidden={idx !== activeIndex}
              >
                <p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#5eead4] md:mb-5">
                  {slide.eyebrow}
                </p>
                <h2 className="max-w-[18ch] text-left text-[clamp(1.45rem,6.2vw,2.1rem)] font-semibold leading-[1.06] tracking-tight text-white max-sm:max-w-[19ch] sm:max-w-[20ch] sm:text-4xl md:max-w-[14ch] md:text-6xl lg:text-7xl">
                  {slide.headline}
                </h2>
                <Link
                  href={slide.ctaHref}
                  tabIndex={idx === activeIndex ? 0 : -1}
                  className="group mt-7 inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-[#5eead4] max-sm:mt-6 md:mt-9 md:text-base"
                >
                  <span className="border-b border-white/40 pb-0.5 transition-colors group-hover:border-[#5eead4]">
                    {slide.ctaLabel}
                  </span>
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.75}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom: mobile = dots → Procore + card column. md+ = dots, then partner + card in one row (items-end aligns bottoms). */}
        <div className="pointer-events-none absolute inset-x-0 bottom-4 z-20 flex max-w-full flex-col items-center gap-3 px-4 pb-[max(0.25rem,env(safe-area-inset-bottom))] max-md:gap-3 md:inset-0 md:bottom-3 md:flex md:flex-col md:items-end md:justify-end md:gap-2 md:px-8 md:pb-8 md:pt-0 lg:px-10">
          <HeroCarouselDots
            activeIndex={activeIndex}
            onSelect={setActiveIndex}
            className="pointer-events-auto flex w-full shrink-0 items-center justify-center gap-1.5 pb-0.5 opacity-90 max-sm:scale-90 md:w-auto md:shrink-0 md:justify-end md:pb-0 md:opacity-100 md:drop-shadow-[0_1px_6px_rgba(0,0,0,0.45)] md:scale-100"
          />
          <div className="pointer-events-auto flex w-full max-w-full flex-col items-stretch justify-center md:flex-row md:items-end md:justify-between md:gap-10 md:px-0 md:pb-0 lg:gap-14">
            <div className="hidden min-w-0 flex-1 md:block">
              <HeroPartnerStack layout="desktop" />
            </div>
            <div className="flex w-full flex-col items-stretch md:ml-auto md:w-[clamp(420px,36vw,560px)] md:shrink-0">
              <div className="mb-1.5 w-full md:mb-0 md:hidden">
                <HeroPartnerStack layout="mobile" />
              </div>
              <div className="flex w-full flex-col overflow-hidden bg-white shadow-2xl shadow-black/20 ring-1 ring-slate-900/[0.06]">
                {/* Brand strip — full composite logo (`public/logos/logo with normal font wps.png`, 1940×611). */}
                <div className="bg-[#ffffff] px-4 py-5 sm:px-5 sm:py-6 md:px-6 md:py-6">
                  <h1 className="m-0">
                    <div className="relative mx-auto aspect-[1940/611] w-full max-w-[min(100%,520px)] md:mx-0">
                      <Image
                        src="/logos/logo%20with%20normal%20font%20wps.png"
                        alt="FRP Installations Inc. — Wall Protection Solutions"
                        fill
                        className="object-contain object-left"
                        sizes="(max-width: 768px) 100vw, 520px"
                      />
                    </div>
                  </h1>

                  {/* <div
                    className="mt-6 h-px w-full max-w-xl bg-[linear-gradient(90deg,#1a3673_0_58%,#699e43_58%_100%)] sm:mt-7"
                    aria-hidden
                  /> */}
                </div>

                <div className="relative h-2.5 w-full shrink-0 overflow-hidden" aria-hidden>
                  <div
                    className="absolute inset-y-0 left-0 w-[56%] bg-[#1a3673]"
                    style={{
                      clipPath: "polygon(0 0, 100% 0, calc(100% - 14px) 100%, 0 100%)",
                    }}
                  />
                  <div
                    className="absolute inset-y-0 right-0 w-[56%] bg-[#699e43]"
                    style={{
                      clipPath: "polygon(14px 0, 100% 0, 100% 100%, 0 100%)",
                    }}
                  />
                </div>

                <div className="relative bg-white px-4 pb-5 pt-4 sm:px-5 md:px-6 md:pb-6 md:pt-5">
                  <p className="mb-4 max-w-prose text-left text-xs leading-relaxed text-slate-600 md:mb-6 md:text-base">
                    Healthcare and institutional interior protection systems across
                    British Columbia.
                  </p>

                  <div className="flex flex-col items-stretch gap-2 md:flex-col md:gap-3 lg:flex-row">
                    <Link
                      href="/quote"
                      className="group inline-flex w-full items-center justify-center gap-2 bg-[#2a4663] px-3 py-2.5 text-xs font-medium text-white transition-all hover:bg-[#0d9488] md:px-5 md:py-3 md:text-sm"
                    >
                      Get a Quote
                      <svg
                        className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 md:h-4 md:w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                    <Link
                      href="/healthcare"
                      className="inline-flex w-full items-center justify-center gap-2 border border-slate-200 px-3 py-2.5 text-xs font-medium text-slate-600 transition-all hover:border-[#0d9488] hover:text-[#0d9488] md:px-5 md:py-3 md:text-sm"
                    >
                      Healthcare Work
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
