"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const systems = [
  {
    title: "Wall Protection Systems",
    description: "Acrovyn, Inpro, crash rails, corner guards, and wall guards for healthcare corridors and high-traffic environments",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    href: "/systems/wall-protection",
  },
  {
    title: "Hygienic Wall Cladding",
    description: "Altro Whiterock welded seamless systems, Puraguard, True North, and AM-Clad for infection-sensitive healthcare environments",
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
    href: "/systems/hygienic-wall-cladding",
  },
  {
    title: "Healthcare Specialist",
    description: "16+ UPCC clinics, major BC hospitals, 75%+ healthcare work — deep experience in active healthcare renovation environments",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    href: "/healthcare",
  },
  {
    title: "Supply & Install Partner",
    description: "We supply and install complete systems — controlling product, coordination, and warranty alignment for GC peace of mind",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    href: "/about",
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const timeout = setTimeout(() => setActiveIndex(0), 100);
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % systems.length);
    }, 3000);
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative h-dvh bg-[#0f172a] overflow-hidden flex flex-col"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-linear-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />
      {/* Teal glow accent */}
      <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-[#0d9488]/8 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -left-1/4 w-[400px] h-[400px] bg-[#0891b2]/5 rounded-full blur-[100px]" />

      {/* Content wrapper */}
      <div className="relative z-10 flex-1 flex flex-col">
        {/* Main content */}
        <div className="flex-1 flex items-center pt-4 md:pt-5">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
              <div className="max-w-2xl">
                {/* Trust Badge */}
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 md:px-4 md:py-2 mb-5 md:mb-6">
                  <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#0d9488] flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white/80 text-xs md:text-sm font-medium">16+ UPCC Clinics · 700+ Projects Across British Columbia</span>
                </div>

                <h1 className="leading-[0.96] tracking-tight text-white font-semibold">
                  <span className="block text-[clamp(2rem,4.1vw,4.6rem)]">Wall Protection</span>
                  <span className="block text-[clamp(2rem,4.1vw,4.6rem)] text-[#0d9488]">
                    Construction
                  </span>
                  <span className="block text-[clamp(2rem,4.1vw,4.6rem)]">
                    Partner
                  </span>
                </h1>

                <p className="max-w-xl text-base md:text-lg text-white/78 leading-relaxed mt-4 md:mt-5">
                  Specializing in healthcare and institutional interior protection systems across British Columbia.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 mt-6 md:mt-8">
                  <Link
                    href="/quote"
                    className="group inline-flex items-center justify-center gap-3 bg-white text-[#0f172a] px-6 py-3 md:px-8 md:py-4 rounded-full font-medium transition-all hover:bg-[#0d9488] hover:text-white shadow-lg shadow-white/10"
                  >
                    Get a Quote
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>

                  <Link
                    href="/healthcare"
                    className="inline-flex items-center justify-center gap-3 text-white/80 hover:text-white font-medium transition-colors py-3 sm:py-0"
                  >
                    Healthcare Experience
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Right side - Rotating system cards */}
              <div className="hidden lg:flex flex-col items-center justify-center">
                <div className="relative w-full max-w-md z-10">
                  <div className="relative h-[280px] xl:h-[300px]">
                    {systems.map((system, index) => (
                      <Link
                        key={index}
                        href={system.href}
                        className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 group ${
                          index === activeIndex
                            ? "opacity-100 translate-y-0 z-10"
                            : "opacity-0 translate-y-8 pointer-events-none z-0"
                        }`}
                      >
                        {/* Icon */}
                        <div className="w-24 h-24 flex items-center justify-center mb-6">
                          <svg
                            className="w-14 h-14 text-[#0d9488]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d={system.icon}
                            />
                          </svg>
                        </div>
                        {/* Text */}
                        <div className="text-center">
                          <h3 className="text-[1.7rem] xl:text-[1.95rem] font-semibold text-white mb-3 group-hover:text-[#0d9488] transition-colors">
                            {system.title}
                          </h3>
                          <p className="text-[15px] text-white/70 max-w-sm leading-relaxed">
                            {system.description}
                          </p>
                        </div>
                        {/* Learn more hint */}
                        <div className="mt-4 flex items-center gap-2 text-white/50 group-hover:text-[#0d9488] transition-colors">
                          <span className="text-sm">Learn more</span>
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Dot indicators */}
                  <div className="flex items-center justify-center gap-2 mt-4">
                    {systems.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`transition-all duration-300 rounded-full ${
                          index === activeIndex
                            ? "w-6 h-1.5 bg-[#0d9488]"
                            : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
                        }`}
                        aria-label={`View ${systems[index].title}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section with proof blocks and navigation */}
        <div className="border-t mt-8 pt-4 border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 p-4">
            {/* Mobile: Stats row */}
            <div className="flex md:hidden items-center justify-center gap-6 pb-3 mb-3 border-b border-white/10">
              <div className="text-center">
                <div className="text-lg font-semibold text-white">700+</div>
                <div className="text-xs text-white/40">Projects</div>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="text-center">
                <div className="text-lg font-semibold text-white">16+</div>
                <div className="text-xs text-white/40">UPCC Clinics</div>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="text-center">
                <div className="text-lg font-semibold text-[#0d9488]">75%+</div>
                <div className="text-xs text-white/40">Healthcare</div>
              </div>
            </div>

            <div className="hidden xl:flex items-end justify-between gap-10">
              <div className="grid gap-y-5">
                <div className="flex items-center justify-start gap-4 2xl:gap-5">
                  <div className="flex items-center gap-2">
                    <span className="text-lg 2xl:text-xl font-semibold text-white">700+</span>
                    <span className="text-xs 2xl:text-sm text-white/40 whitespace-nowrap">Projects</span>
                  </div>
                  <div className="w-px h-4 bg-white/20" />
                  <div className="flex items-center gap-2">
                    <span className="text-lg 2xl:text-xl font-semibold text-white">16+</span>
                    <span className="text-xs 2xl:text-sm text-white/40 whitespace-nowrap">UPCC Clinics</span>
                  </div>
                  <div className="w-px h-4 bg-white/20" />
                  <div className="flex items-center gap-2">
                    <span className="text-lg 2xl:text-xl font-semibold text-[#0d9488]">75%+</span>
                    <span className="text-xs 2xl:text-sm text-white/40 whitespace-nowrap">Healthcare Work</span>
                  </div>
                </div>

                <div className="flex items-center justify-start gap-4 2xl:gap-5">
                  <div className="flex items-center gap-2">
                    <span className="text-lg 2xl:text-xl font-semibold text-white">20</span>
                    <span className="text-xs 2xl:text-sm text-white/40 whitespace-nowrap">Yrs Experience</span>
                  </div>
                  <div className="w-px h-4 bg-white/20" />
                  <div className="flex items-center gap-2">
                    <span className="text-lg 2xl:text-xl font-semibold text-white">~$550K</span>
                    <span className="text-xs 2xl:text-sm text-white/40 whitespace-nowrap">Largest Healthcare Package</span>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex flex-col items-end min-w-[26rem] shrink-0">
                <span className="text-[11px] uppercase tracking-[0.2em] text-white/30 mb-3">
                  Quick Links
                </span>
                <nav className="flex items-center justify-end gap-8 2xl:gap-10">
                  {[
                    { label: "Systems", href: "#services" },
                    { label: "Healthcare", href: "/healthcare" },
                    { label: "Projects", href: "#projects" },
                    { label: "Contact", href: "#contact" },
                    { label: "Search Site", href: "/search" },
                  ].map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="text-sm 2xl:text-[15px] text-white/40 hover:text-white/80 transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>

            <div className="hidden md:grid xl:hidden grid-cols-2 gap-x-10 gap-y-4 pt-1">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold text-white">700+</span>
                  <span className="text-xs text-white/40 whitespace-nowrap">Projects</span>
                </div>
                <div className="w-px h-4 bg-white/20" />
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold text-white">16+</span>
                  <span className="text-xs text-white/40 whitespace-nowrap">UPCC Clinics</span>
                </div>
                <div className="w-px h-4 bg-white/20" />
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold text-[#0d9488]">75%+</span>
                  <span className="text-xs text-white/40 whitespace-nowrap">Healthcare Work</span>
                </div>
                <div className="w-px h-4 bg-white/20" />
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold text-white">20</span>
                  <span className="text-xs text-white/40 whitespace-nowrap">Yrs Experience</span>
                </div>
                <div className="w-px h-4 bg-white/20" />
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold text-white">~$550K</span>
                  <span className="text-xs text-white/40 whitespace-nowrap">Largest Healthcare Package</span>
                </div>
              </div>

              <div className="flex flex-col items-end">
                <span className="text-[11px] uppercase tracking-[0.2em] text-white/30 mb-3">
                  Quick Links
                </span>
                <nav className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3">
                  {[
                    { label: "Systems", href: "#services" },
                    { label: "Healthcare", href: "/healthcare" },
                    { label: "Projects", href: "#projects" },
                    { label: "Contact", href: "#contact" },
                    { label: "Search Site", href: "/search" },
                  ].map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="text-lg text-white/60 hover:text-white/40 transition-colors duration-200 whitespace-nowrap"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
