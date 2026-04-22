"use client";

import { useEffect } from "react";

/**
 * Global scroll-reveal coordinator.
 *
 * Mounts once (from the root layout) and wires a single IntersectionObserver
 * that toggles `.is-visible` on any `.reveal` element when it enters the
 * viewport. The CSS side (`globals.css`) handles the actual fade-up + the
 * `prefers-reduced-motion` fallback.
 *
 * Robustness notes — `.reveal` sets `opacity: 0` until `is-visible` is added.
 * If the observer ever fails to fire (rapid re-renders disconnecting the IO
 * before the initial async callback, browsers without IO, observers being
 * starved during long tasks, etc.), `.reveal` content would stay invisible
 * forever — including any imagery that happens to live inside one. Two
 * guards prevent that:
 *
 *   1. The effect uses a stable empty dep array so the IO is created exactly
 *      once on mount and never re-torn-down by parent re-renders.
 *   2. A 1.5 s safety timer force-activates any element that still hasn't
 *      received `is-visible`. Worst case the user sees an instant snap to
 *      visible instead of an animation — far better than a blank box.
 */
export default function ScrollRevealManager() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const activate = (el: Element) => el.classList.add("is-visible");
    const collect = () =>
      Array.from(document.querySelectorAll<HTMLElement>(".reveal:not(.is-visible)"));

    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || typeof IntersectionObserver === "undefined") {
      collect().forEach(activate);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            activate(entry.target);
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
    );

    collect().forEach((t) => io.observe(t));

    const fallback = window.setTimeout(() => {
      collect().forEach(activate);
    }, 1500);

    return () => {
      window.clearTimeout(fallback);
      io.disconnect();
    };
  }, []);

  return null;
}
