"use client";

import Image from "next/image";
import Link from "next/link";
import PlaceholderBadge from "./PlaceholderBadge";
import SystemsShowcase from "./sections/SystemsShowcase";

const alsoSupplyInstallImage =
  "https://images.unsplash.com/photo-1653769443470-6206792c2350?auto=format&fit=crop&w=1200&q=80";

export default function Services() {
  return (
    <div
      id="services"
      role="region"
      aria-labelledby="services-heading"
      className="m-0 bg-white pt-8 pb-4 md:pt-15 md:pb-5 lg:pt-18 lg:pb-6"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="section-header reveal mx-auto mb-4 max-w-3xl text-center md:mb-5">
          <span className="eyebrow">Core Systems</span>
          <h2 id="services-heading" className="section-title mb-4">
            Supply &amp; install wall protection systems
          </h2>
          <p className="section-lead mx-auto">
            We are not labour-only. We supply and install complete wall protection and hygienic systems, taking
            responsibility for product selection, quality, coordination, and warranty alignment on every project.
          </p>
        </div>
      </div>

      <SystemsShowcase />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mt-6 overflow-hidden rounded-[1.35rem] bg-[#f8fafc] md:mt-8">
          <div className="grid items-stretch gap-0 md:grid-cols-[220px_1fr]">
            <div className="relative isolate hidden overflow-hidden md:block" style={{ aspectRatio: "4/3" }}>
              <Image
                src={alsoSupplyInstallImage}
                alt="Also supply and install — representative placeholder"
                fill
                sizes="(min-width: 768px) 220px, 0px"
                loading="eager"
                className="object-cover filter-[saturate(0.85)_brightness(0.97)]"
              />
              <PlaceholderBadge />
            </div>
            <div className="px-5 pt-7 pb-6 text-center md:px-8 md:pt-9 md:pb-7 md:text-left">
              <div className="mb-3 text-sm uppercase tracking-[0.16em] text-slate-400">Also supply &amp; install</div>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 md:justify-start">
                {["PVC liner systems", "Wet wall", "Stainless protection", "Architectural specialties"].map(
                  (item) => (
                    <span key={item} className="whitespace-nowrap text-base font-medium text-[#0f172a] md:text-lg">
                      {item}
                    </span>
                  ),
                )}
                <Link
                  href="/systems"
                  className="inline-flex items-center gap-2 whitespace-nowrap text-base font-medium text-[#134e4a] transition-colors hover:text-[#0d9488] md:text-lg"
                >
                  View all systems
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
