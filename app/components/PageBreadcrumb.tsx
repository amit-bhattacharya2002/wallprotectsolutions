"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// URL segments that should be rendered in all-caps. Anything not listed here
// falls back to simple Title Case.
const ACRONYMS = new Set([
  "FRP",
  "FRL",
  "PVC",
  "UPCC",
  "FAQ",
  "BC",
  "CS",
]);

// Special overrides for segments whose title-cased form doesn't read well
// (e.g. compound healthcare terms or pluralization quirks).
const SEGMENT_LABELS: Record<string, string> = {
  "wall-protection": "Wall Protection",
  "hygienic-wall-cladding": "Hygienic Wall Cladding",
  "frl-decorative": "FRL Decorative",
  "architectural-specialties": "Architectural Specialties",
  "frp-wall-systems": "FRP Wall Systems",
  "stainless-protection": "Stainless Protection",
  "pvc-liner": "PVC Liner",
  "wet-wall": "Wet Wall Systems",
  "frp-benefits": "Why FRP",
  "pre-construction": "Pre-Construction",
  "frp-service": "FRP Service",
  "frp-sales": "FRP Sales",
  "frp-installation": "FRP Installation",
  "crane-composites": "Crane Composites",
  "schedule-on-site-measurement": "Schedule Measurement",
  city: "Service Areas",
  manufacturers: "Manufacturer Partners",
  projects: "Our Work",
  systems: "Systems & Products",
  resources: "Resources",
  industries: "Industries",
  healthcare: "Healthcare",
  about: "About",
  contact: "Contact",
  careers: "Careers",
  quote: "Quote",
  search: "Search",
  faq: "FAQ",
  services: "Services",
};

function prettySegment(segment: string): string {
  if (SEGMENT_LABELS[segment]) return SEGMENT_LABELS[segment];

  return segment
    .split("-")
    .map((word) => {
      const upper = word.toUpperCase();
      if (ACRONYMS.has(upper)) return upper;
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

export default function PageBreadcrumb() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  // Mirror Header.tsx's 80px collapse threshold so the sticky `top` value
  // morphs in lockstep with the header as it shrinks.
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Hide on home and on any unknown path.
  if (!pathname || pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) return null;

  const items = segments.map((segment, idx) => {
    const href = "/" + segments.slice(0, idx + 1).join("/");
    return {
      label: prettySegment(segment),
      href,
      isLast: idx === segments.length - 1,
    };
  });

  return (
    <>
      {/* In-flow spacer sized to the fully-expanded header. Reserves vertical
          space so the sticky breadcrumb bar's natural position sits flush
          below the header on first paint. */}
      <div className="h-15 md:h-10 lg:h-40" aria-hidden="true" />

      <nav
        aria-label="Breadcrumb"
        className={`sticky z-30 border-b border-slate-100 bg-white transition-[top] duration-300 ease-out ${
          isScrolled ? "top-[60px]" : "top-15 md:top-10 lg:top-40"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 py-3 text-xs text-slate-400 md:text-[0.8rem]">
            <li>
              <Link
                href="/"
                className="transition-colors hover:text-[#0f172a]"
              >
                Home
              </Link>
            </li>
            {items.map((item, idx) => (
              <li key={idx} className="flex items-center gap-x-2">
                <svg
                  className="h-3 w-3 shrink-0 text-slate-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                {item.isLast ? (
                  <span
                    className="font-medium text-[#0f172a]"
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-[#0f172a]"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
