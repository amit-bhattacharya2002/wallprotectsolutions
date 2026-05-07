"use client";

/* eslint-disable @next/next/no-img-element -- parallax requires plain img per spec */

import Link from "next/link";
import { useLayoutEffect, useRef, useState, type RefObject } from "react";
import type { MotionValue } from "framer-motion";
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import SystemsShowcaseMobile from "./SystemsShowcase.mobile";

export interface ShowcaseSystem {
  id: string;
  number: string;
  name: string;
  manufacturer: string;
  description: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  pinPosition: { x: number; y: number };
}

const SYSTEMS: ShowcaseSystem[] = [
  {
    id: "wall-protection",
    number: "01",
    name: "Wall Protection Systems",
    manufacturer: "Construction Specialties · Inpro · Ricochet",
    description:
      "Supply and installation of Acrovyn wall protection sheets, crash rails, corner guards, wall guards, handrails, and door and frame protection. BC distributor for Construction Specialties; full access to Inpro and Ricochet product lines.",
    href: "/systems/wall-protection",
    imageSrc: "/images/showcase/wall-protection.jpg",
    imageAlt: "Healthcare corridor with Acrovyn wall protection wainscot",
    pinPosition: { x: 72, y: 55 },
  },
  {
    id: "hygienic-wall-cladding",
    number: "02",
    name: "Hygienic Wall Cladding",
    manufacturer: "Altro Whiterock · Puraguard · True North · AM-Clad",
    description:
      "Altro-trained and approved installer for Whiterock seamless welded systems and Puraguard. Also supply and install True North and AM-Clad hygienic wall systems — helping specify the right system for the infection-control requirement and budget.",
    href: "/systems/hygienic-wall-cladding",
    imageSrc: "/images/showcase/hygienic-cladding.jpg",
    imageAlt: "Food processing facility with seamless hygienic wall cladding",
    pinPosition: { x: 65, y: 25 },
  },
  {
    id: "frp-wall-systems",
    number: "03",
    name: "FRP & FRL Wall Systems",
    manufacturer: "Valto · Stabilit/Graham · Marlite · Panolam",
    description:
      "Traditional and decorative FRP wall panels from Valto (Glasbord, Varietex), Stabilit/Graham (Exceliner, Glasliner), and Marlite. Panolam FRL distributor relationship for 400+ colour decorative wall panel options in healthcare and institutional interiors.",
    href: "/systems/frp-wall-systems",
    imageSrc: "/images/showcase/frp-systems.jpg",
    imageAlt: "Healthcare facility with decorative wood-grain FRP wall panels",
    pinPosition: { x: 75, y: 55 },
  },
];

const N = SYSTEMS.length;
const FADE = 0.07;

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
      setGeom(null);
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
      stroke="#14b8a6"
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
          className="absolute inline-flex h-full w-full rounded-full bg-[#14b8a6] opacity-40"
          animate={{ scale: [1, 2.6], opacity: [0.45, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
        />
        <span className="relative h-3 w-3 rounded-full bg-[#14b8a6] ring-2 ring-white shadow-[0_0_0_3px_rgba(20,184,166,0.18)]" />
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
        <p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-[#14b8a6] md:text-[0.8rem]">
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
          className="mt-6 inline-flex items-center gap-1.5 text-base font-semibold text-[#14b8a6] transition-colors hover:text-[#0d9488]"
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
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  const connectorGeom = useConnectorGeometry(stickyRef, cardAnchorEl);

  return (
    <div ref={scrollRef} className="relative h-[300vh] w-full">
      <div ref={stickyRef} className="sticky top-0 h-screen w-full overflow-hidden bg-black">
        {SYSTEMS.map((sys, i) => (
          <FullBleedImage key={sys.id} sys={sys} index={i} scrollYProgress={scrollYProgress} />
        ))}

        <div className="pointer-events-none absolute inset-0 z-15 bg-linear-to-r from-black/50 via-black/12 to-transparent" />

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
                scrollYProgress={scrollYProgress}
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
              scrollYProgress={scrollYProgress}
              onCardAnchorMount={i === 0 ? setCardAnchorEl : undefined}
            />
          ))}
        </div>

        <div className="pointer-events-none absolute inset-0 z-30">
          {SYSTEMS.map((sys, i) => (
            <PinOverlay key={`pin-${sys.id}`} sys={sys} index={i} scrollYProgress={scrollYProgress} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SystemsShowcase() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <section className="bg-[#FAFAFA]" aria-label="Three systems, one unified installation">
      {isDesktop ? <SystemsShowcaseDesktop /> : <SystemsShowcaseMobile />}
    </section>
  );
}
