"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function StickyContactBar() {
  const [visible, setVisible] = useState(false);
  const [showBar, setShowBar] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const scrollingDown = y > lastScrollY.current;
      const pastThreshold = y > 400;

      setVisible(pastThreshold);
      if (!pastThreshold) {
        setShowBar(false);
      } else if (scrollingDown && y > 600) {
        setShowBar(false);
      } else {
        setShowBar(true);
      }

      lastScrollY.current = y;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 lg:hidden ${
        visible && showBar ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex items-center gap-2 border-t border-white/10 bg-[#2a4663] px-3 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))]">
        <a
          href="tel:604-715-9469"
          aria-label="Call us at 604-715-9469"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-white/40"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>
        <Link
          href="/quote"
          className="inline-flex h-11 min-w-0 flex-1 items-center justify-center rounded-full bg-[#0d9488] px-4 text-sm font-medium text-white transition-colors hover:bg-[#14b8a6]"
        >
          Get a quote
        </Link>
      </div>
    </div>
  );
}
