"use client";

import Image from "next/image";
import Link from "next/link";
import PlaceholderBadge from "./PlaceholderBadge";

/**
 * Core system rows with product imagery. Each row is a clickable card that
 * lifts 4px on hover with a navy-tinted soft shadow, reveals a small teal
 * "View system →" link in its action column, and runs a gentle sliding
 * cover to preview the selected state. Image dimensions are locked via an
 * aspect ratio wrapper so swapping the URLs later is layout-stable.
 *
 * NOTE: Imagery below is Unsplash placeholder photography. Swap with real
 * project photography before production launch (see `isPlaceholder`).
 */
const services = [
  {
    title: "Wall Protection Systems",
    description:
      "Supply and installation of Acrovyn wall protection sheets, crash rails, corner guards, wall guards, handrails, and door and frame protection. BC distributor for Construction Specialties; full access to Inpro and Ricochet product lines.",
    href: "/systems/wall-protection",
    image:
      "https://images.unsplash.com/photo-1695668544161-19e9286576c3?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Interior with suspended lighting — representative placeholder",
    isPlaceholder: true,
  },
  {
    title: "Hygienic Wall Cladding",
    description:
      "Altro-trained and approved installer for Whiterock seamless welded systems and Puraguard. Also supply and install True North and AM-Clad hygienic wall systems — helping specify the right system for the infection-control requirement and budget.",
    href: "/systems/hygienic-wall-cladding",
    image:
      "https://images.unsplash.com/photo-1563468304224-1fc761a1cbb5?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Hygienic cladding in a clinical corridor — representative placeholder",
    isPlaceholder: true,
  },
  {
    title: "FRP & FRL Wall Systems",
    description:
      "Traditional and decorative FRP wall panels from Valto (Glasbord, Varietex), Stabilit/Graham (Exceliner, Glasliner), and Marlite. Panolam FRL distributor relationship for 400+ colour decorative wall panel options in healthcare and institutional interiors.",
    href: "/systems/frp-wall-systems",
    image:
      "https://images.unsplash.com/photo-1735448213878-6d52000a1961?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "FRP / FRL wall system install — representative placeholder",
    isPlaceholder: true,
  },
];

/** Subtle accent photo for the "Also supply & install" roundup row. */
const alsoSupplyInstallImage =
  "https://images.unsplash.com/photo-1653769443470-6206792c2350?auto=format&fit=crop&w=1200&q=80";

export default function Services() {
  return (
    <section id="services" className="section-shell-lg bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 grid gap-8 lg:mb-14 lg:grid-cols-2 lg:gap-14">
          <div className="section-header reveal">
            <span className="eyebrow">Core Systems</span>
            <h2 className="section-title">
              Supply &amp; install wall protection systems
            </h2>
          </div>

          <div className="flex lg:items-end">
            <p className="section-lead max-w-xl">
              We are not labour-only. We supply and install complete wall protection and hygienic systems, taking responsibility for product selection, quality, coordination, and warranty alignment on every project.
            </p>
          </div>
        </div>

        {/* Services list */}
        <div className="flex flex-col gap-4 md:gap-5">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="system-card group relative grid items-stretch overflow-hidden rounded-[1.25rem] border border-slate-200 bg-white transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-[#0d9488]/40 hover:shadow-[0_22px_50px_-28px_rgba(42,70,99,0.45)] md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr]"
            >
              {/* Left: product image */}
              <div
                className="relative isolate overflow-hidden bg-slate-100"
                style={{ aspectRatio: "4/3" }}
              >
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 320px, (min-width: 768px) 280px, 100vw"
                  loading="eager"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter-[saturate(0.85)_brightness(0.97)]"
                />
                {service.isPlaceholder ? <PlaceholderBadge /> : null}
              </div>

              {/* Right: copy + action */}
              <div className="relative flex flex-col gap-4 px-6 py-7 md:px-8 md:py-8 lg:flex-row lg:items-center lg:gap-10 lg:px-10">
                <div className="flex-1">
                  <h3 className="mb-2 text-2xl font-semibold tracking-tight text-[#0f172a] transition-colors duration-300 group-hover:text-[#0d9488] md:text-3xl">
                    {service.title}
                  </h3>
                  <p className="text-base font-normal leading-relaxed text-gray-600 md:text-[1.0625rem]">
                    {service.description}
                  </p>
                </div>

                <div className="flex shrink-0 items-center gap-3 lg:flex-col lg:items-end lg:gap-2">
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0d9488] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    View system
                    <svg
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 transition-all duration-300 group-hover:border-[#0d9488] group-hover:bg-[#0d9488] md:h-12 md:w-12">
                    <svg
                      className="h-5 w-5 text-gray-500 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* "Also supply & install" — now anchored by a subtle accent image
             so the section doesn't fall off a visual cliff. */}
        <div className="mt-10 overflow-hidden rounded-[1.35rem] bg-[#f8fafc]">
          <div className="grid items-stretch gap-0 md:grid-cols-[220px_1fr]">
            <div
              className="relative isolate hidden overflow-hidden md:block"
              style={{ aspectRatio: "4/3" }}
            >
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
            <div className="px-5 py-6 md:px-8 md:py-7">
              <div className="mb-3 text-sm uppercase tracking-[0.16em] text-slate-400">
                Also supply &amp; install
              </div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                {[
                  "PVC liner systems",
                  "Wet wall",
                  "Stainless protection",
                  "Architectural specialties",
                ].map((item) => (
                  <span
                    key={item}
                    className="whitespace-nowrap text-base font-medium text-[#0f172a] md:text-lg"
                  >
                    {item}
                  </span>
                ))}
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
    </section>
  );
}
