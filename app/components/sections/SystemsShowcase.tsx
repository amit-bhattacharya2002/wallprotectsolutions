"use client";

/* eslint-disable @next/next/no-img-element -- parallax requires plain img per spec */

import Link from "next/link";
import { useLayoutEffect, useRef, useState, type RefObject } from "react";
import type { MotionValue } from "framer-motion";
import { motion, useMotionTemplate, useScroll, useSpring, useTransform } from "framer-motion";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import { usePrefersReducedMotion } from "../../../hooks/usePrefersReducedMotion";
import SystemsShowcaseMobile from "./SystemsShowcase.mobile";
import SystemsShowcaseGrid from "./SystemsShowcase.grid";
import { SYSTEMS, type ShowcaseSystem } from "./SystemsShowcase.data";

type ShowcaseViewMode = "interactive" | "grid";
const VIEW_STORAGE_KEY = "systems-showcase-view";

const N = SYSTEMS.length;
/** Wider overlap between slides = softer crossfade when scrubbing or flick-scrolling */
const FADE = 0.11;

function smoothstep01(t: number): number {
  const s = Math.min(1, Math.max(0, t));
  return s * s * (3 - 2 * s);
}

function visibility(p: number, i: number): number {
  const start = i / N;
  const end = (i + 1) / N;
  const half = FADE / 2;
  const isFirst = i === 0;
  const isLast = i === N - 1;

  if (!isFirst) {
    if (p < start - half) return 0;
    if (p < start + half) return smoothstep01((p - (start - half)) / FADE);
  }

  if (!isLast) {
    if (p > end + half) return 0;
    if (p > end - half) return smoothstep01(((end + half) - p) / FADE);
  }

  return 1;
}

function activeT(p: number, i: number): number {
  const start = i / N;
  const end = (i + 1) / N;
  return Math.min(1, Math.max(0, (p - start) / (end - start)));
}

function imageState(
  p: number,
  i: number,
  pin: { x: number; y: number },
): { opacity: number; scale: number; originX: number; originY: number; pinOpacity: number } {
  const v = visibility(p, i);
  const t = activeT(p, i);
  const e = smoothstep01(t);

  const scale = 1 + e * 0.24;

  const originX = 50 + (pin.x - 50) * e;
  const originY = 50 + (pin.y - 50) * e;

  let pinTiming: number;
  if (t < 0.22) pinTiming = smoothstep01(t / 0.22);
  else if (t < 0.85) pinTiming = 1;
  else pinTiming = smoothstep01((1 - t) / 0.15);

  return { opacity: v, scale, originX, originY, pinOpacity: v * pinTiming };
}

function cardState(p: number, i: number): { opacity: number } {
  return { opacity: visibility(p, i) };
}

function FullBleedImage({
  sys,
  index,
  scrollYProgress,
}: {
  sys: ShowcaseSystem;
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  const opacity = useTransform(scrollYProgress, (p) => imageState(p, index, sys.pinPosition).opacity);
  const scale = useTransform(scrollYProgress, (p) => imageState(p, index, sys.pinPosition).scale);
  const originX = useTransform(scrollYProgress, (p) => imageState(p, index, sys.pinPosition).originX);
  const originY = useTransform(scrollYProgress, (p) => imageState(p, index, sys.pinPosition).originY);
  const transformOrigin = useMotionTemplate`${originX}% ${originY}%`;
  return (
    <motion.div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ opacity, zIndex: index + 1 }}
    >
      <motion.div className="absolute inset-0" style={{ scale, transformOrigin }}>
        <img
          src={sys.imageSrc}
          alt={sys.imageAlt}
          className="absolute inset-0 h-full w-full object-cover object-center"
          draggable={false}
          loading={index === 0 ? "eager" : "lazy"}
        />
      </motion.div>
    </motion.div>
  );
}

function useConnectorGeometry(
  stickyRef: RefObject<HTMLElement | null>,
  cardAnchorEl: HTMLElement | null,
) {
  const [geom, setGeom] = useState<{ w: number; h: number; ax: number; ay: number } | null>(null);

  useLayoutEffect(() => {
    const sticky = stickyRef.current;
    if (!sticky || !cardAnchorEl) {
      queueMicrotask(() => setGeom(null));
      return;
    }

    const measure = () => {
      const sr = sticky.getBoundingClientRect();
      const ar = cardAnchorEl.getBoundingClientRect();
      setGeom({
        w: sr.width,
        h: sr.height,
        ax: ar.left + ar.width / 2 - sr.left,
        ay: ar.top + ar.height / 2 - sr.top,
      });
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(sticky);
    ro.observe(cardAnchorEl);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [stickyRef, cardAnchorEl]);

  return geom;
}

function CardToPinConnector({
  sys,
  index,
  scrollYProgress,
  ax,
  ay,
  w,
  h,
}: {
  sys: ShowcaseSystem;
  index: number;
  scrollYProgress: MotionValue<number>;
  ax: number;
  ay: number;
  w: number;
  h: number;
}) {
  const opacity = useTransform(scrollYProgress, (p) => {
    const c = cardState(p, index).opacity;
    const pin = imageState(p, index, sys.pinPosition).pinOpacity;
    return Math.min(c, pin) * 0.92;
  });

  const x2 = (sys.pinPosition.x / 100) * w;
  const y2 = (sys.pinPosition.y / 100) * h;

  return (
    <motion.line
      x1={ax}
      y1={ay}
      x2={x2}
      y2={y2}
      stroke="#64A70B"
      strokeWidth={2}
      strokeLinecap="round"
      vectorEffect="non-scaling-stroke"
      style={{
        opacity,
        filter: "drop-shadow(0 0 6px rgba(20,184,166,0.35))",
      }}
    />
  );
}

function PinOverlay({
  sys,
  index,
  scrollYProgress,
}: {
  sys: ShowcaseSystem;
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  const pinOpacity = useTransform(scrollYProgress, (p) => imageState(p, index, sys.pinPosition).pinOpacity);

  return (
    <motion.div
      className="pointer-events-none absolute z-30 -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${sys.pinPosition.x}%`, top: `${sys.pinPosition.y}%`, opacity: pinOpacity }}
    >
      <span className="relative flex h-5 w-5 items-center justify-center">
        <motion.span
          className="absolute inline-flex h-full w-full rounded-full bg-[#64A70B] opacity-35"
          animate={{ scale: [1, 2.6], opacity: [0.45, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
        />
        <span className="relative h-3 w-3 rounded-full bg-[#64A70B] ring-2 ring-white shadow-[0_0_0_3px_rgba(100,167,11,0.18)]" />
      </span>
    </motion.div>
  );
}

function SystemCard({
  sys,
  index,
  scrollYProgress,
  onCardAnchorMount,
}: {
  sys: ShowcaseSystem;
  index: number;
  scrollYProgress: MotionValue<number>;
  onCardAnchorMount?: (el: HTMLSpanElement | null) => void;
}) {
  const opacity = useTransform(scrollYProgress, (p) => cardState(p, index).opacity);
  const pointerEvents = useTransform(opacity, (o) => (o > 0.5 ? "auto" : "none"));

  return (
    <motion.div
      className="absolute inset-y-0 left-0 right-0 flex items-center px-6 md:px-10 lg:px-16 xl:px-20"
      style={{ opacity, pointerEvents }}
    >
      <div className="relative max-w-2xl rounded-2xl border border-white/60 bg-white/85 p-7 shadow-[0_30px_70px_-30px_rgba(11,29,58,0.45)] backdrop-blur-xl md:p-9 lg:p-10">
        {onCardAnchorMount ? (
          <span
            ref={onCardAnchorMount}
            className="pointer-events-none absolute right-0 top-1/2 h-0 w-0 -translate-y-1/2"
            aria-hidden
          />
        ) : null}
        <p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-[#9BCB4A] md:text-[0.8rem]">
          System {sys.number} / 03
        </p>
        <h3 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-[#0B1D3A] md:text-4xl">
          {sys.name}
        </h3>
        <p className="mt-3 text-[0.9375rem] italic leading-relaxed text-[#6B7280] md:text-base">
          {sys.manufacturer}
        </p>
        <p className="mt-5 text-base leading-relaxed text-[#374151] md:text-[1.0625rem] md:leading-[1.65]">
          {sys.description}
        </p>
        <Link
          href={sys.href}
          className="mt-6 inline-flex items-center gap-1.5 text-base font-semibold text-[#9BCB4A] transition-colors hover:text-white"
        >
          Learn more
          <span aria-hidden>→</span>
        </Link>
      </div>
    </motion.div>
  );
}

function SystemsShowcaseDesktop() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const [cardAnchorEl, setCardAnchorEl] = useState<HTMLSpanElement | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  /** Eases velocity spikes from fast scroll / trackpad flicks without feeling mushy */
  const smoothScrollYProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 36,
    mass: 0.22,
    restDelta: 0.0008,
  });

  const showcaseProgress = prefersReducedMotion ? scrollYProgress : smoothScrollYProgress;

  const connectorGeom = useConnectorGeometry(stickyRef, cardAnchorEl);

  return (
    <div ref={scrollRef} className="relative h-[260vh] w-full">
      <div ref={stickyRef} className="sticky top-0 h-screen w-full overflow-hidden bg-black">
        {SYSTEMS.map((sys, i) => (
          <FullBleedImage key={sys.id} sys={sys} index={i} scrollYProgress={showcaseProgress} />
        ))}

        <div className="pointer-events-none absolute inset-0 z-15 bg-linear-to-r from-[#0a2926]/54 via-[#0f3a36]/16 to-transparent" />

        {connectorGeom ? (
          <svg
            className="pointer-events-none absolute inset-0 z-18 h-full w-full overflow-visible"
            aria-hidden
          >
            {SYSTEMS.map((sys, i) => (
              <CardToPinConnector
                key={`conn-${sys.id}`}
                sys={sys}
                index={i}
                scrollYProgress={showcaseProgress}
                ax={connectorGeom.ax}
                ay={connectorGeom.ay}
                w={connectorGeom.w}
                h={connectorGeom.h}
              />
            ))}
          </svg>
        ) : null}

        <div className="absolute inset-0 z-20">
          {SYSTEMS.map((sys, i) => (
            <SystemCard
              key={sys.id}
              sys={sys}
              index={i}
              scrollYProgress={showcaseProgress}
              onCardAnchorMount={i === 0 ? setCardAnchorEl : undefined}
            />
          ))}
        </div>

        <div className="pointer-events-none absolute inset-0 z-30">
          {SYSTEMS.map((sys, i) => (
            <PinOverlay key={`pin-${sys.id}`} sys={sys} index={i} scrollYProgress={showcaseProgress} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SystemsShowcase() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [view, setView] = useState<ShowcaseViewMode>(() => {
    if (typeof window === "undefined") return "interactive";
    const stored = window.localStorage.getItem(VIEW_STORAGE_KEY);
    if (stored === "interactive" || stored === "grid" || stored === "list") {
      return stored === "list" ? "grid" : stored;
    }
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      return "grid";
    }
    return "interactive";
  });

  const handleViewChange = (nextView: ShowcaseViewMode) => {
    setView(nextView);
    window.localStorage.setItem(VIEW_STORAGE_KEY, nextView);
  };

  const showInteractive = isDesktop && view === "interactive";
  const showDesktopGrid = isDesktop && view === "grid";

  return (
    <div className="m-0 py-0" role="region" aria-label="Three systems, one unified installation">
      {isDesktop && (
        <div className="mx-auto mb-5 flex max-w-7xl justify-end px-6 lg:mb-6 lg:px-8">
          <SystemsShowcaseViewToggle view={view} onChange={handleViewChange} />
        </div>
      )}

      {showInteractive ? (
        <SystemsShowcaseDesktop />
      ) : showDesktopGrid ? (
        <SystemsShowcaseGrid />
      ) : (
        <SystemsShowcaseMobile />
      )}
    </div>
  );
}

function SystemsShowcaseViewToggle({
  view,
  onChange,
}: {
  view: ShowcaseViewMode;
  onChange: (view: ShowcaseViewMode) => void;
}) {
  return (
    <div
      className="inline-flex rounded-full border border-gray-200 bg-[#f8fafc] p-1"
      role="group"
      aria-label="Systems showcase view mode"
    >
      <button
        type="button"
        onClick={() => onChange("interactive")}
        aria-pressed={view === "interactive"}
        aria-label="Interactive scroll view"
        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
          view === "interactive"
            ? "bg-white text-[#0f172a] shadow-sm"
            : "text-gray-500 hover:text-[#0f172a]"
        }`}
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
        Interactive
      </button>
      <button
        type="button"
        onClick={() => onChange("grid")}
        aria-pressed={view === "grid"}
        aria-label="Grid overview"
        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
          view === "grid"
            ? "bg-white text-[#0f172a] shadow-sm"
            : "text-gray-500 hover:text-[#0f172a]"
        }`}
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
        Grid
      </button>
    </div>
  );
}
