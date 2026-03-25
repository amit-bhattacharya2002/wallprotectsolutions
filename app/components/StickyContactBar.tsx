"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function StickyContactBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 lg:hidden transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-[#0f172a] border-t border-white/10 px-4 py-3 flex items-center gap-3">
        <a
          href="tel:604-715-9469"
          className="flex-1 inline-flex items-center justify-center gap-2 border border-white/20 text-white text-sm font-medium py-3 rounded-full hover:border-white/40 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Call us
        </a>
        <Link
          href="/contact"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-[#0d9488] text-white text-sm font-medium py-3 rounded-full hover:bg-[#0f766e] transition-colors"
        >
          Get a quote
        </Link>
      </div>
    </div>
  );
}
