"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import VrcaBadge from "./VrcaBadge";

/**
 * Real project photography used by the homepage carousel.
 */
const heroImages = [
  {
    src: "/actualphotos/8.jpg",
    alt: "Healthcare reception and corridor with wood-grain hygienic wall cladding, glass partitions, and coved flooring",
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
      aria-label="Find us on Procore (opens in new tab)"
      className="inline-block w-fit shrink-0 cursor-pointer rounded-md opacity-95 transition-opacity hover:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- third-party Procore badge asset */}
      <img
        src={PROCORE_BADGE_SRC}
        alt="Find us on Procore — FRP Installations on the Procore Construction Network"
        width={176}
        height={64}
        className={mobile ? "h-[clamp(1.4rem,3.4svh,2rem)] w-auto" : "h-8 w-auto md:h-10 lg:h-12"}
      />
    </a>
  );

  if (mobile) {
    return (
      <div className="flex w-full flex-row items-center justify-center gap-3 opacity-95">
        {badge}
        <VrcaBadge
          variant="color"
          className="rounded-md border border-black/50 bg-white px-2 py-1"
          imgClassName="h-[clamp(1.4rem,3.4svh,2rem)] w-auto"
        />
      </div>
    );
  }

  return (
    <div className="flex w-full max-w-full flex-col gap-3 text-left">
      <div className="flex items-center gap-4">
        {badge}
        <VrcaBadge variant="color" className="rounded-sm border border-black bg-white px-3 py-1.5" imgClassName="h-5 w-auto md:h-7 lg:h-9" />
      </div>
      <div className="h-0.5 w-full max-w-[300px] bg-linear-to-r from-[#005EB8] to-[#64A70B]" />
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
  variant = "pills",
  compact = false,
}: {
  activeIndex: number;
  onSelect: (index: number) => void;
  className?: string;
  variant?: "pills" | "segments";
  compact?: boolean;
}) {
  return (
    <div className={className}>
      {heroImages.map((slide, idx) => {
        const isActive = idx === activeIndex;
        return (
          <button
            key={idx}
            type="button"
            onClick={() => onSelect(idx)}
            aria-label={`Show slide ${idx + 1}: ${slide.alt}`}
            aria-current={isActive}
            className={`inline-flex items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 ${
              compact ? "h-6 w-7" : "h-11"
            }`}
          >
            <span
              aria-hidden
              className={
                variant === "segments"
                  ? `block rounded-full transition-all duration-500 ease-out ${
                      isActive
                        ? "h-[4px] w-9 bg-white"
                        : "h-[3px] w-7 bg-white/35 hover:bg-white/55"
                    }`
                  : `block rounded-full transition-[width,background-color,opacity] duration-500 ease-out ${
                      isActive
                        ? "h-1.5 w-7 bg-white/90 shadow-[0_0_14px_rgba(0,0,0,0.35)]"
                        : "h-1.5 w-3.5 bg-white/45 hover:bg-white/65"
                    }`
              }
            />
          </button>
        );
      })}
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
 * text wordmark, tagline, and CTAs. `items-end` lines the stack’s bottom up
 * with the card’s bottom edge.
 */
export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const timerRef = useRef<number | null>(null);
  const regionRef = useRef<HTMLElement | null>(null);

  const advance = useCallback((step = 1) => {
    setActiveIndex((prev) => (prev + step + heroImages.length) % heroImages.length);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (isPaused || reduceMotion) return;
    timerRef.current = window.setInterval(() => {
      advance(1);
    }, SLIDE_DURATION_MS);
    return () => {
      if (timerRef.current !== null) window.clearInterval(timerRef.current);
    };
  }, [advance, isPaused, reduceMotion]);

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
      className="relative h-[100svh] overflow-hidden"
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
                isActive && !reduceMotion
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

      {/* Desktop wash — left-weighted navy so type stays readable. */}
      <div
        className="pointer-events-none absolute inset-0 hidden md:block"
        style={{
          background:
            "linear-gradient(to right, rgba(16,35,63,0.72) 0%, rgba(16,35,63,0.42) 35%, rgba(16,35,63,0.08) 65%, rgba(16,35,63,0) 100%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 hidden bg-linear-to-t from-black/30 via-transparent to-transparent md:block" />
      {/* Mobile wash — left-weighted navy so the photo stays photographic. */}
      <div
        className="pointer-events-none absolute inset-0 md:hidden"
        style={{
          background: `
            linear-gradient(
              90deg,
              rgba(11,28,52,0.62) 0%,
              rgba(11,28,52,0.38) 52%,
              rgba(11,28,52,0.12) 100%
            ),
            linear-gradient(
              180deg,
              rgba(11,28,52,0.04) 0%,
              rgba(11,28,52,0.08) 55%,
              rgba(11,28,52,0.30) 100%
            )
          `,
        }}
      />

      {/* ── Foreground layer ── */}
      <div className="pointer-events-none relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col md:absolute md:inset-0">
        {/* Heading — one slot, each slide supplies its own eyebrow + headline.
             All variants stack in a single grid cell and crossfade in sync
             with the background slideshow. */}
        <div className="pointer-events-auto relative z-40 shrink-0 px-5 pt-[3.25rem] pb-0 md:absolute md:inset-x-0 md:top-[28dvh] md:px-8 md:pb-24 md:pt-0 lg:top-[30dvh] lg:pb-0 lg:pl-10 lg:pr-8">
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
                className={`col-start-1 row-start-1 text-left ${
                  idx === activeIndex
                    ? "relative z-10 opacity-100 transition-opacity duration-500 ease-out motion-reduce:transition-none"
                    : "pointer-events-none relative z-0 opacity-0 transition-none motion-reduce:transition-none"
                }`}
                aria-hidden={idx !== activeIndex}
              >
                <p className="mb-1.5 text-[clamp(0.6rem,1.55svh,0.72rem)] font-semibold uppercase tracking-[0.24em] text-[#9BCB4A] md:mb-5 md:text-[0.72rem]">
                  {slide.eyebrow}
                </p>
                <h2 className="max-w-[16ch] text-[clamp(1.28rem,3.5svh+0.4vw,1.8rem)] font-semibold leading-[1.05] tracking-[-0.045em] text-white [text-shadow:0_2px_8px_rgb(7_21_34_/_0.40),0_10px_32px_rgb(7_21_34_/_0.24)] md:max-w-[14ch] md:text-6xl md:font-bold md:leading-[1.06] md:tracking-tight lg:text-7xl">
                  {slide.headline}
                </h2>
                <Link
                  href={slide.ctaHref}
                  tabIndex={idx === activeIndex ? 0 : -1}
                  className="group mt-2 inline-flex items-center gap-2 text-[clamp(0.75rem,1.9svh,0.95rem)] font-normal text-white transition-colors hover:text-white/80 md:mt-9 md:gap-2 md:text-base md:font-medium md:hover:text-[#9BCB4A]"
                >
                  <span className="md:border-b md:border-white/40 md:pb-0.5 md:transition-colors md:group-hover:border-[#9BCB4A]">
                    {slide.ctaLabel}
                  </span>
                  <svg
                    className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.6}
                      d="M14 7l5 5m0 0-5 5m5-5H4"
                    />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
          <HeroCarouselDots
            activeIndex={activeIndex}
            onSelect={setActiveIndex}
            variant="segments"
            compact
            className="pointer-events-auto mt-1 flex w-fit items-center justify-start gap-0.5 md:hidden"
          />
        </div>

        {/* Bottom: mobile = dots → Procore + card column. md+ = dots, then partner + card in one row (items-end aligns bottoms). */}
        <div className="pointer-events-none relative z-20 mt-auto flex w-full shrink-0 flex-col items-center px-4 pb-2 max-md:gap-2 md:absolute md:inset-0 md:bottom-3 md:mt-0 md:items-end md:justify-end md:gap-2 md:px-8 md:pb-8 md:pt-0 lg:px-10">
          <HeroCarouselDots
            activeIndex={activeIndex}
            onSelect={setActiveIndex}
            className="pointer-events-auto hidden w-full shrink-0 items-center justify-center gap-1.5 pb-0.5 opacity-90 md:flex md:w-auto md:shrink-0 md:justify-end md:pb-0 md:opacity-100 md:drop-shadow-[0_1px_6px_rgba(0,0,0,0.45)]"
          />
          <div className="pointer-events-auto flex w-full max-w-full flex-col items-stretch justify-center md:flex-row md:items-end md:justify-between md:gap-10 md:px-0 md:pb-0 lg:gap-14">
            <div className="hidden min-w-0 flex-1 lg:block">
              <HeroPartnerStack layout="desktop" />
            </div>
            <div className="flex w-full flex-col items-stretch md:ml-auto md:w-[clamp(420px,36vw,560px)] md:shrink-0">
              <div className="mb-2 hidden w-full md:block lg:hidden">
                <HeroPartnerStack layout="mobile" />
              </div>
              <div className="flex w-full flex-col border border-white/80 bg-white/[0.97] px-5 pt-4 pb-5 shadow-[0_24px_60px_rgba(9,25,45,0.18),0_4px_14px_rgba(9,25,45,0.08)] backdrop-blur-sm max-md:rounded-[1.25rem] md:rounded-none md:px-8 md:py-7 md:shadow-[0_26px_70px_-42px_rgba(16,35,63,0.75)]">
                <div className="mb-2.5 h-[3px] w-20 bg-linear-to-r from-[#005EB8] to-[#64A70B] md:mb-4 md:h-0.5 md:w-28" />

                <h1 className="brand-wordmark mb-0.5 text-[clamp(1.05rem,2.7svh,1.35rem)] font-bold leading-[1.05] tracking-[-0.035em] text-[#0f172a] md:mb-1.5 md:text-[clamp(1.6rem,2.4vw,2.4rem)] md:font-extrabold">
                  FRP Installations Inc.
                </h1>
                <p className="brand-wordmark mb-2 text-[clamp(0.52rem,1.4svh,0.68rem)] font-semibold uppercase tracking-[0.21em] text-[#64A70B] md:mb-5 md:text-[0.78rem]">
                  Wall Protection Solutions
                </p>

                <p className="mb-2.5 line-clamp-2 max-w-[36ch] text-[clamp(0.68rem,1.8svh,0.85rem)] leading-snug text-slate-600 md:mb-5 md:line-clamp-none md:max-w-none md:text-base md:leading-relaxed">
                  Healthcare and institutional interior protection systems across
                  British Columbia.
                </p>

                <div className="mb-2.5 grid grid-cols-2 border-y border-slate-200 py-2 md:mb-6 md:gap-4 md:py-3">
                  <div className="pr-5">
                    <div className="text-[clamp(1.05rem,2.9svh,1.4rem)] font-medium leading-none tracking-[-0.04em] text-[#10233F] md:text-2xl md:font-semibold">
                      700+
                    </div>
                    <div className="mt-1 text-[clamp(0.5rem,1.3svh,0.62rem)] font-semibold uppercase tracking-[0.18em] text-slate-500 md:mt-2 md:text-[0.68rem]">
                      Projects
                    </div>
                  </div>
                  <div className="border-l border-slate-200 pl-5 md:pl-6">
                    <div className="text-[clamp(1.05rem,2.9svh,1.4rem)] font-medium leading-none tracking-[-0.04em] text-[#10233F] md:text-2xl md:font-semibold">
                      16+
                    </div>
                    <div className="mt-1 text-[clamp(0.5rem,1.3svh,0.62rem)] font-semibold uppercase tracking-[0.18em] text-slate-500 md:mt-2 md:text-[0.68rem]">
                      UPCC Clinics
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-stretch gap-1.5 md:gap-3 lg:flex-row">
                  <Link
                    href="/quote"
                    className="group inline-flex w-full items-center justify-center gap-3 rounded-[4px] bg-[#0565BD] px-5 py-1.5 text-[clamp(0.72rem,1.75svh,0.88rem)] font-medium text-white shadow-[0_6px_18px_rgba(0,94,184,0.16)] transition-all hover:-translate-y-px hover:bg-[#004A91] hover:shadow-[0_9px_24px_rgba(0,94,184,0.22)] md:rounded-none md:px-5 md:py-3 md:text-sm md:shadow-none"
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
                    className="inline-flex w-full items-center justify-center rounded-[4px] border border-[#005EB8]/45 bg-white px-4 py-1.5 text-[clamp(0.72rem,1.75svh,0.88rem)] font-medium text-[#005EB8] transition-colors hover:border-[#005EB8] hover:bg-slate-50 md:rounded-none md:border-slate-200 md:px-5 md:py-3 md:text-sm md:text-[#10233F] md:hover:border-[#64A70B]/45 md:hover:bg-transparent md:hover:text-[#10233F]"
                  >
                    Healthcare Work
                  </Link>
                </div>

                <div className="mt-3 border-t border-slate-200 pt-3 md:hidden">
                  <HeroPartnerStack layout="mobile" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
