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
  return (
    <div
      className={
        mobile
          ? "flex w-full flex-col items-end gap-1.5 text-right"
          : "flex max-w-full flex-col gap-3 text-left"
      }
    >
      <a
        href={PROCORE_PROFILE_HREF}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block w-fit shrink-0 cursor-pointer rounded-md opacity-95 drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] transition-opacity hover:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- third-party Procore badge asset */}
        <img
          src={PROCORE_BADGE_SRC}
          alt="Find us on Procore — FRP Installations on the Procore Construction Network"
          width={176}
          height={64}
          className={mobile ? "h-10 w-auto" : "h-10 w-auto md:h-12 lg:h-16"}
        />
      </a>
      <div
        className={
          mobile
            ? "h-0.5 w-[min(100%,300px)] shrink-0 bg-[#0d9488]"
            : "h-0.5 w-full max-w-[300px] bg-[#0d9488]"
        }
      />
      <p
        className={
          mobile
            ? "text-sm font-semibold tracking-tight text-white"
            : "text-sm font-semibold tracking-tight text-white md:text-lg"
        }
      >
        Wall Protection Construction Partner.
      </p>
      <p className={mobile ? "text-xs leading-relaxed text-white/75" : "text-xs leading-relaxed text-white/75 md:text-sm"}>
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
 * sit in a tight stack with the card — just above it, both right-aligned in the
 * hero content area (no longer pinned to the viewport top under the header).
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
        <div className="pointer-events-auto absolute inset-x-0 top-[26dvh] px-6 md:top-[30dvh] md:pl-8 lg:pl-10 lg:pr-8">
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
                <p className="mb-4 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#5eead4] md:mb-5">
                  {slide.eyebrow}
                </p>
                <h2 className="max-w-[14ch] text-left text-4xl font-semibold leading-[1.02] tracking-tight text-white md:text-6xl lg:text-7xl">
                  {slide.headline}
                </h2>
                <Link
                  href={slide.ctaHref}
                  tabIndex={idx === activeIndex ? 0 : -1}
                  className="group mt-7 inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-[#5eead4] md:mt-9 md:text-base"
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

        {/* Homepage support line — desktop only: absolute bottom-left */}
        <div className="pointer-events-auto absolute bottom-8 left-8 z-30 hidden flex-col md:flex lg:left-10">
          <HeroPartnerStack layout="desktop" />
        </div>

        {/* Bottom: mobile = centered dots above card; md+ = dots + card stacked at
            bottom-right (`justify-end` + `items-end`) so dots sit directly above the
            white FRP block, right edges aligned. */}
        <div className="pointer-events-none absolute inset-x-0 bottom-3 z-30 flex max-w-full flex-col items-center gap-2 px-3 max-md:gap-1.5 md:inset-0 md:z-20 md:gap-2 md:flex md:flex-col md:items-end md:justify-end md:px-8 md:pb-8 md:pt-0 lg:px-10">
          <HeroCarouselDots
            activeIndex={activeIndex}
            onSelect={setActiveIndex}
            className="pointer-events-auto flex w-full shrink-0 items-center justify-center gap-1.5 opacity-90 max-md:justify-center md:w-auto md:shrink-0 md:justify-end md:opacity-100 md:drop-shadow-[0_1px_6px_rgba(0,0,0,0.45)]"
          />
          <div className="pointer-events-auto z-35 w-full shrink-0 md:hidden">
            <HeroPartnerStack layout="mobile" />
          </div>
          <div className="pointer-events-auto flex w-full max-w-full items-end justify-center md:w-full md:max-w-none md:justify-end md:px-0 md:pb-0">
            <div className="w-full md:w-[clamp(460px,38vw,600px)]">
              <div className="flex w-full flex-col bg-white px-5 py-5 shadow-xl shadow-black/10 md:px-8 md:py-7">
                <div className="mb-3 h-0.5 w-7 bg-[#134e4a] md:mb-4 md:w-9" />

                <h1 className="mb-1 text-2xl font-extrabold leading-[1.05] tracking-tight text-[#0f172a] md:mb-1.5 md:text-[clamp(1.6rem,2.4vw,2.4rem)]">
                  FRP Installations Inc.
                </h1>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#134e4a] md:mb-5 md:text-[0.78rem]">
                  Wall Protection Solutions
                </p>

                <p className="mb-5 text-sm leading-relaxed text-slate-500 md:mb-6 md:text-base">
                  Healthcare and institutional interior protection systems across
                  British Columbia.
                </p>

                <div className="flex flex-row items-stretch gap-2 md:flex-col md:gap-3 lg:flex-row">
                  <Link
                    href="/quote"
                    className="group inline-flex items-center justify-center gap-2 bg-[#2a4663] px-4 py-2.5 text-sm font-medium text-white transition-all hover:bg-[#0d9488] md:px-5 md:py-3 md:text-sm"
                  >
                    Get a Quote
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
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
                    className="inline-flex items-center justify-center gap-2 border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-600 transition-all hover:border-[#0d9488] hover:text-[#0d9488] md:px-5 md:py-3 md:text-sm"
                  >
                    Healthcare Work
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
