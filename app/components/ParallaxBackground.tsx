"use client";

import Image from "next/image";
import { useEffect, useRef, type ReactNode } from "react";

const SPEED = 0.32;
const OVERSCAN = 0.34;

type TickFn = () => void;

const ticks = new Set<TickFn>();
let attached = false;
let raf = 0;

function flush() {
  raf = 0;
  ticks.forEach((fn) => fn());
}

function onFrame() {
  if (raf) return;
  raf = requestAnimationFrame(flush);
}

function subscribeParallax(fn: TickFn) {
  ticks.add(fn);
  if (typeof window !== "undefined" && !attached) {
    attached = true;
    window.addEventListener("scroll", onFrame, { passive: true });
    window.addEventListener("resize", onFrame);
  }
  fn();
  return () => {
    ticks.delete(fn);
    if (ticks.size === 0 && attached) {
      attached = false;
      window.removeEventListener("scroll", onFrame);
      window.removeEventListener("resize", onFrame);
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
    }
  };
}

function useParallaxTransform(desktopOnly: boolean, speed: number) {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = window.matchMedia("(min-width: 768px)");

    const apply = () => {
      if (reduce.matches || (desktopOnly && !desktop.matches)) {
        layer.style.transform = "";
        return;
      }

      const root = layer.closest("[data-parallax-root]") ?? layer.parentElement;
      if (!(root instanceof HTMLElement)) return;

      const rect = root.getBoundingClientRect();
      const viewH = window.innerHeight;
      if (rect.bottom < -120 || rect.top > viewH + 120) return;

      const extra = root.offsetHeight * OVERSCAN;
      const raw = (rect.top + rect.height / 2 - viewH / 2) * speed;
      const travel = Math.max(-extra, Math.min(extra, raw));
      layer.style.transform = `translate3d(0, ${travel}px, 0)`;
    };

    reduce.addEventListener("change", apply);
    desktop.addEventListener("change", apply);
    const unsubscribe = subscribeParallax(apply);

    return () => {
      unsubscribe();
      reduce.removeEventListener("change", apply);
      desktop.removeEventListener("change", apply);
    };
  }, [desktopOnly, speed]);

  return layerRef;
}

export function ParallaxLayer({
  children,
  className = "",
  desktopOnly = false,
  speed = SPEED,
}: {
  children: ReactNode;
  className?: string;
  desktopOnly?: boolean;
  speed?: number;
}) {
  const layerRef = useParallaxTransform(desktopOnly, speed);

  return (
    <div data-parallax-root className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`.trim()}>
      <div
        ref={layerRef}
        className="absolute inset-x-0 top-0 h-full will-change-transform md:-top-[34%] md:h-[168%]"
      >
        {children}
      </div>
    </div>
  );
}

export default function ParallaxBackground({
  src,
  alt = "",
  sizes = "100vw",
  priority,
  imageClassName = "",
  className = "",
  desktopOnly = true,
  speed = SPEED,
}: {
  src: string;
  alt?: string;
  sizes?: string;
  priority?: boolean;
  imageClassName?: string;
  className?: string;
  desktopOnly?: boolean;
  speed?: number;
}) {
  return (
    <ParallaxLayer
      className={`${desktopOnly ? "hidden md:block" : ""} ${className}`.trim()}
      desktopOnly={desktopOnly}
      speed={speed}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        aria-hidden={alt ? undefined : true}
        className={`object-cover object-center ${imageClassName}`.trim()}
      />
    </ParallaxLayer>
  );
}
