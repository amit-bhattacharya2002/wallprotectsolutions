"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Global scroll-reveal coordinator.
 *
 * Wires an IntersectionObserver that adds `.is-visible` to `.reveal` elements
 * so `globals.css` can run the fade-up animation.
 *
 * Reliability: the first effect tick can run before every `.reveal` exists in
 * the DOM (streaming / hydration order), and App Router navigations mount new
 * pages without remounting this component — so we re-scan after paint, on
 * every pathname change, on subtree mutations (debounced), and use a final
 * fallback timer that force-activates anything still hidden.
 */
export default function ScrollRevealManager() {
  const pathname = usePathname();

  useEffect(() => {
    let mutationDebounceId: number | null = null;

    if (typeof window === "undefined") return;

    const activate = (el: Element) => {
      (el as HTMLElement).classList.add("is-visible");
    };

    const collect = () =>
      Array.from(document.querySelectorAll<HTMLElement>(".reveal:not(.is-visible)"));

    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || typeof IntersectionObserver === "undefined") {
      collect().forEach(activate);
      return;
    }

    const observed = new WeakSet<Element>();

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            activate(entry.target);
            io.unobserve(entry.target);
          }
        }
      },
      /* Easier to trigger than a single high threshold — avoids “stuck”
         headings that barely intersect the root margin. */
      { rootMargin: "0px 0px -6% 0px", threshold: [0, 0.05, 0.1] },
    );

    const observeIfNeeded = (el: HTMLElement) => {
      if (observed.has(el)) return;
      if (!el.classList.contains("reveal") || el.classList.contains("is-visible")) return;
      observed.add(el);
      io.observe(el);
    };

    const scan = () => {
      collect().forEach((el) => observeIfNeeded(el));
    };

    scan();
    /* Double rAF: run after layout + paint so late-mounted `.reveal` nodes exist. */
    let rafOuter = 0;
    let rafInner = 0;
    rafOuter = requestAnimationFrame(() => {
      rafInner = requestAnimationFrame(scan);
    });

    const fallback = window.setTimeout(() => {
      collect().forEach(activate);
    }, 2800);

    const debouncedMutationScan = () => {
      if (mutationDebounceId !== null) {
        window.clearTimeout(mutationDebounceId);
      }
      mutationDebounceId = window.setTimeout(() => {
        mutationDebounceId = null;
        scan();
      }, 80);
    };

    const mo = new MutationObserver(debouncedMutationScan);
    mo.observe(document.body, { childList: true, subtree: true });

    const onPageShow = (e: PageTransitionEvent) => {
      scan();
      if (e.persisted) collect().forEach(activate);
    };
    window.addEventListener("pageshow", onPageShow);

    const onVisibility = () => {
      if (document.visibilityState === "visible") scan();
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(rafOuter);
      cancelAnimationFrame(rafInner);
      window.clearTimeout(fallback);
      if (mutationDebounceId !== null) {
        window.clearTimeout(mutationDebounceId);
      }
      mo.disconnect();
      io.disconnect();
      window.removeEventListener("pageshow", onPageShow);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [pathname]);

  return null;
}
