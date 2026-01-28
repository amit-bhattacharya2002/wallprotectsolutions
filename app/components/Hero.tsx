"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-dvh bg-[#0f172a] overflow-hidden flex flex-col"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />
      {/* Subtle orange glow */}
      <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-[#f97316]/5 rounded-full blur-[120px]" />

      {/* Content wrapper */}
      <div className="relative z-10 flex-1 flex flex-col">
        {/* Main content - centered vertically, takes remaining space */}
        <div className="flex-1 flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <div className="max-w-4xl">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 md:px-4 md:py-2 mb-5 md:mb-6">
                <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#f97316] flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white/80 text-xs md:text-sm font-medium">Trusted by 500+ businesses across BC</span>
              </div>

              <h1 className="leading-[0.95] tracking-tight text-white font-semibold">
                <span className="block text-[clamp(2.2rem,5vw,5.5rem)]">The</span>
                <span className="block text-[clamp(2.2rem,5vw,5.5rem)]">
                  wall protection
                </span>
                <span className="block text-[clamp(2.2rem,5vw,5.5rem)] text-[#f97316]">
                  experts
                </span>
                <span className="block text-[clamp(2.2rem,5vw,5.5rem)]">
                  you can trust
                </span>
              </h1>

              <p className="max-w-xl text-base md:text-lg lg:text-xl text-white/80 leading-relaxed font-normal mt-6 md:mt-8">
                Premium FRP panel sales, installation, and service across British
                Columbia. Building protection solutions since 2015.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 mt-8 md:mt-10">
                <Link
                  href="/quote"
                  className="group inline-flex items-center justify-center gap-3 bg-white text-[#0f172a] px-6 py-3 md:px-8 md:py-4 rounded-full font-medium transition-all hover:bg-[#f97316] hover:text-white shadow-lg shadow-white/10"
                >
                  Get a Free Quote
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>

                <Link
                  href="#projects"
                  className="inline-flex items-center justify-center gap-3 text-white/80 hover:text-white font-medium transition-colors py-3 sm:py-0"
                >
                  View our work
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section with stats and navigation */}
        <div className="border-t mt-4 border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-3 md:py-4">
            {/* Mobile: Stats row */}
            <div className="flex md:hidden items-center justify-center gap-6 pb-3 mb-3 border-b border-white/10">
              <div className="text-center">
                <div className="text-lg font-semibold text-white">500+</div>
                <div className="text-xs text-white/40">Projects</div>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="text-center">
                <div className="text-lg font-semibold text-white">10+</div>
                <div className="text-xs text-white/40">Years</div>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="text-center">
                <div className="text-lg font-semibold text-white flex items-center justify-center gap-1">
                  5.0
                  <svg className="w-3 h-3 text-[#f97316]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div className="text-xs text-white/40">Rating</div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              {/* Stats - left side on desktop */}
              <div className="hidden md:flex items-center gap-4 lg:gap-6">
                <div className="flex items-center gap-2">
                  <span className="text-lg lg:text-xl font-semibold text-white">500+</span>
                  <span className="text-xs lg:text-sm text-white/40">Projects</span>
                </div>
                <div className="w-px h-4 bg-white/20" />
                <div className="flex items-center gap-2">
                  <span className="text-lg lg:text-xl font-semibold text-white">10+</span>
                  <span className="text-xs lg:text-sm text-white/40">Years</span>
                </div>
                <div className="w-px h-4 bg-white/20" />
                <div className="flex items-center gap-2">
                  <span className="text-lg lg:text-xl font-semibold text-white flex items-center gap-1">
                    5.0
                    <svg className="w-3 h-3 lg:w-4 lg:h-4 text-[#f97316]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </span>
                  <span className="text-xs lg:text-sm text-white/40">Google</span>
                </div>
              </div>

              {/* Navigation */}
              <nav className="flex items-center justify-center gap-5 md:gap-6 lg:gap-8 w-full md:w-auto">
                {[
                  { label: "Services", href: "#services" },
                  { label: "About", href: "#why-frp" },
                  { label: "Projects", href: "#projects" },
                  { label: "Contact", href: "#contact" },
                ].map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-xs md:text-sm text-white/40 hover:text-white/80 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
