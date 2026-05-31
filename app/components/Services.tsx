"use client";

import Image from "next/image";
import Link from "next/link";
import SystemsShowcase from "./sections/SystemsShowcase";
import { sitePhotos } from "@/app/data/site-photos";

const ALSO_SUPPLY_SYSTEMS = [
  { label: "PVC liner systems", href: "/systems/pvc-liner" },
  { label: "Wet wall", href: "/systems/wet-wall" },
  { label: "Stainless protection", href: "/systems/stainless-protection" },
  { label: "Architectural specialties", href: "/systems/architectural-specialties" },
] as const;

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
        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_22px_60px_-36px_rgba(15,23,42,0.22)] md:mt-8">
          <div className="grid md:grid-cols-[minmax(220px,280px)_1fr]">
            <div className="relative isolate aspect-16/10 overflow-hidden md:aspect-auto md:min-h-full">
              <Image
                src={sitePhotos.alsoSupplyInstall.src}
                alt={sitePhotos.alsoSupplyInstall.alt}
                fill
                sizes="(min-width: 768px) 280px, 100vw"
                loading="eager"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0B1D3A]/55 via-transparent to-transparent md:bg-linear-to-r md:from-transparent md:via-transparent md:to-white/10" />
              <p className="absolute bottom-3 left-4 right-4 text-xs font-medium text-white/90 md:bottom-4 md:left-5 md:text-sm">
                {sitePhotos.alsoSupplyInstall.caption}
              </p>
            </div>

            <div className="flex flex-col justify-center px-5 py-7 md:px-8 md:py-9 lg:px-10">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#14b8a6]">
                Also supply &amp; install
              </p>
              <p className="mb-5 max-w-2xl text-sm leading-relaxed text-slate-500 md:text-[0.9375rem]">
                Beyond our core wall protection, hygienic cladding, and FRP systems, we supply and install the
                full range of specialty interior protection products.
              </p>

              <div className="flex flex-wrap gap-2.5">
                {ALSO_SUPPLY_SYSTEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-[#f8fafc] px-4 py-2.5 text-sm font-medium text-[#0f172a] transition-colors hover:border-[#14b8a6]/45 hover:bg-[#f0fdfa] hover:text-[#0d9488] md:text-[0.9375rem]"
                  >
                    {item.label}
                    <svg
                      className="h-3.5 w-3.5 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-[#14b8a6]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>

              <div className="mt-6 border-t border-slate-100 pt-5">
                <Link
                  href="/systems"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#134e4a] transition-colors hover:text-[#0d9488] md:text-base"
                >
                  View all systems
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
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
