"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const STAGGER_MAX = 5;

function shouldSkipAutoReveal(el: HTMLElement): boolean {
  if (el.classList.contains("reveal")) return true;
  if (el.dataset.revealAuto === "true") return true;
  if (el.closest(".reveal")) return true;
  if (el.querySelector(".reveal")) return true;
  if (el.closest("[data-no-reveal]")) return true;
  if (el.hasAttribute("data-no-reveal")) return true;
  if (el.classList.contains("absolute") || el.classList.contains("fixed")) return true;
  if (el.getAttribute("aria-hidden") === "true") return true;
  return false;
}

function tagReveal(el: HTMLElement, staggerIndex: number) {
  if (shouldSkipAutoReveal(el)) return;
  el.classList.add("reveal");
  el.dataset.revealAuto = "true";
  const delay = Math.min(staggerIndex, STAGGER_MAX);
  if (delay > 0) {
    el.classList.add(`reveal-stagger-${delay}`);
  }
}

function isLayoutContainer(el: HTMLElement): boolean {
  return (
    el.classList.contains("grid") ||
    el.classList.contains("flex") ||
    [...el.classList].some((cls) => cls.startsWith("grid") || cls.startsWith("flex"))
  );
}

function revealTargetsInContainer(container: HTMLElement) {
  const children = Array.from(container.children).filter(
    (child): child is HTMLElement => child instanceof HTMLElement && !shouldSkipAutoReveal(child),
  );

  if (children.length === 1 && isLayoutContainer(children[0]) && children[0].children.length > 1) {
    Array.from(children[0].children).forEach((cell, index) => {
      if (cell instanceof HTMLElement) tagReveal(cell, index);
    });
    return;
  }

  children.forEach((child, index) => tagReveal(child, index));
}

function isSkippableSection(section: HTMLElement): boolean {
  if (section.hasAttribute("data-no-reveal") || section.classList.contains("no-reveal")) return true;
  if (section.querySelector(":scope h1")) return true;
  if (section.querySelector('[aria-live="polite"]')) return true;
  return false;
}

/** Auto-tag section content blocks so interior pages get scroll reveal without per-page edits. */
function autoApplyReveal() {
  document.querySelectorAll<HTMLElement>("main section").forEach((section) => {
    if (isSkippableSection(section)) return;
    const container = section.querySelector(":scope > div");
    if (container instanceof HTMLElement) {
      revealTargetsInContainer(container);
    }
  });

  document.querySelectorAll<HTMLElement>("main > div:not([data-no-reveal])").forEach((block) => {
    if (block.querySelector("section")) return;
    const container =
      block.querySelector(":scope > .max-w-7xl") ??
      block.querySelector(":scope > div.relative");
    if (!(container instanceof HTMLElement)) return;

    const target =
      container.children.length === 1 && container.children[0] instanceof HTMLElement
        ? container.children[0]
        : container;

    if (target instanceof HTMLElement) {
      revealTargetsInContainer(target);
    }
  });
}

/**
 * Global scroll-reveal coordinator.
 *
 * Wires an IntersectionObserver that adds `.is-visible` to `.reveal` elements
 * so `globals.css` can run the fade-up animation. Also auto-applies `.reveal`
 * to main section content blocks site-wide.
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
      autoApplyReveal();
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
      // Negative bottom margin so the fade starts as the block enters the
      // viewport, not while it's still well below the fold.
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );

    const isInViewport = (el: HTMLElement) => {
      const rect = el.getBoundingClientRect();
      const viewportBottom = window.innerHeight * 0.88;
      return rect.top < viewportBottom && rect.bottom > 0;
    };

    const observeIfNeeded = (el: HTMLElement) => {
      if (observed.has(el)) return;
      if (!el.classList.contains("reveal") || el.classList.contains("is-visible")) return;
      observed.add(el);
      if (isInViewport(el)) {
        activate(el);
        return;
      }
      io.observe(el);
    };

    const scan = () => {
      autoApplyReveal();
      collect().forEach((el) => observeIfNeeded(el));
    };

    scan();
    let rafOuter = 0;
    let rafInner = 0;
    rafOuter = requestAnimationFrame(() => {
      rafInner = requestAnimationFrame(scan);
    });

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

    const onPageShow = () => {
      scan();
    };
    window.addEventListener("pageshow", onPageShow);

    const onVisibility = () => {
      if (document.visibilityState === "visible") scan();
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(rafOuter);
      cancelAnimationFrame(rafInner);
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
