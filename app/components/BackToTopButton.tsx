"use client";

import { useEffect, useState } from "react";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed right-4 z-40 h-11 w-11 rounded-full border border-white/20 bg-[#2a4663]/90 text-white shadow-[0_18px_36px_-20px_rgba(15,23,42,0.65)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#5eead4]/60 hover:bg-[#2a4663] hover:text-[#5eead4] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0d9488] focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:h-12 sm:w-12 sm:right-5 lg:right-6 ${
        isVisible ? "bottom-24 opacity-100 lg:bottom-6" : "pointer-events-none bottom-20 opacity-0 lg:bottom-4"
      }`}
    >
      <svg className="mx-auto h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}
