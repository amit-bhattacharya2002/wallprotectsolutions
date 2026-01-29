"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const services = [
  { 
    title: "Premium Panel Supply",
    description: "Top-quality FRP panels from industry-leading manufacturers",
    icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
    href: "/services/frp-sales"
  },
  { 
    title: "Expert Installation",
    description: "Precision installation by certified professionals",
    icon: "M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437",
    href: "/services/frp-installation"
  },
  { 
    title: "Ongoing Maintenance",
    description: "Comprehensive service and repair solutions",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z",
    href: "/services/frp-service"
  },
  { 
    title: "Complete Protection",
    description: "End-to-end wall protection for commercial spaces",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    href: "/wall-protection"
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    // Start animation immediately on mount
    const timeout = setTimeout(() => setActiveIndex(0), 100);
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
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
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div className="max-w-2xl">
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

              {/* Right side - Single rotating service with icon */}
              <div className="hidden lg:flex flex-col items-center justify-center">
                <div className="relative w-full max-w-md z-10">
                  {/* Main animated content */}
                  <div className="relative h-[320px]">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        href={service.href}
                        className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 group ${
                          index === activeIndex
                            ? "opacity-100 translate-y-0 z-10"
                            : "opacity-0 translate-y-8 pointer-events-none z-0"
                        }`}
                      >
                        {/* Icon */}
                        <div className="w-24 h-24 flex items-center justify-center mb-6">
                          <svg
                            className="w-14 h-14 text-[#f97316]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d={service.icon}
                            />
                          </svg>
                        </div>
                        {/* Text */}
                        <div className="text-center">
                          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3 group-hover:text-[#f97316] transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-lg text-white/70 max-w-sm">
                            {service.description}
                          </p>
                        </div>
                        {/* Learn more hint */}
                        <div className="mt-4 flex items-center gap-2 text-white/50 group-hover:text-[#f97316] transition-colors">
                          <span className="text-sm">Learn more</span>
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
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
