"use client";

import Link from "next/link";

const services = [
  {
    title: "Wall Protection Systems",
    description:
      "Supply and installation of Acrovyn wall protection sheets, crash rails, corner guards, wall guards, handrails, and door and frame protection. BC distributor for Construction Specialties; full access to Inpro and Ricochet product lines.",
    href: "/systems/wall-protection",
  },
  {
    title: "Hygienic Wall Cladding",
    description:
      "Altro-trained and approved installer for Whiterock seamless welded systems and Puraguard. Also supply and install True North and AM-Clad hygienic wall systems — helping specify the right system for the infection-control requirement and budget.",
    href: "/systems/hygienic-wall-cladding",
  },
  {
    title: "FRP & FRL Wall Systems",
    description:
      "Traditional and decorative FRP wall panels from Valto (Glasbord, Varietex), Stabilit/Graham (Exceliner, Glasliner), and Marlite. Panolam FRL distributor relationship for 400+ colour decorative wall panel options in healthcare and institutional interiors.",
    href: "/systems/frp-wall-systems",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-shell-lg bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 mb-12 lg:mb-14">
          <div className="section-header">
            <span className="eyebrow">Core Systems</span>
            <h2 className="section-title">
              Supply & install wall protection systems
            </h2>
          </div>

          <div className="flex lg:items-end">
            <p className="section-lead max-w-xl">
              We are not labour-only. We supply and install complete wall protection and hygienic systems, taking responsibility for product selection, quality, coordination, and warranty alignment on every project.
            </p>
          </div>
        </div>

        {/* Services list */}
        <div className="border-t border-gray-200">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative block px-4 py-10 md:py-12 lg:py-14 border-b border-gray-200 overflow-hidden"
            >
              {/* Sliding background */}
              <div className="absolute inset-0 bg-linear-to-r from-[#0f172a] via-[#10213a] to-[#0f172a] -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out" />

              <div className="relative z-10 grid gap-4 md:grid-cols-12 md:gap-8 items-start md:items-center">
                <div className="md:col-span-5">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#0f172a] group-hover:text-[#0d9488] transition-colors duration-300 tracking-tight">
                    {service.title}
                  </h3>
                </div>

                <div className="md:col-span-6">
                  <p className="text-gray-600 group-hover:text-white/74 leading-relaxed font-normal transition-colors duration-300 text-base md:text-lg">
                    {service.description}
                  </p>
                </div>

                <div className="md:col-span-1 flex items-center justify-start md:justify-end pt-2 md:pt-0">
                  <div className="w-11 h-11 md:w-12 md:h-12 rounded-full border border-gray-200 group-hover:border-white/30 group-hover:bg-white/10 flex items-center justify-center transition-all duration-300">
                    <svg
                      className="w-5 h-5 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all duration-300"
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

        {/* View all systems link */}
        <div className="mt-10 rounded-[1.35rem] bg-[#f8fafc] px-5 py-5 md:px-6">
          <div className="text-sm uppercase tracking-[0.16em] text-slate-400 text-center mb-3">
            Also supply & install
          </div>
          <div className="flex flex-wrap items-center justify-evenly gap-x-6 gap-y-3 text-center">
            {[
              "PVC liner systems",
              "Wet wall",
              "Stainless protection",
              "Architectural specialties",
            ].map((item) => (
              <span
                key={item}
                className="text-base md:text-lg font-medium text-[#0f172a] whitespace-nowrap"
              >
                {item}
              </span>
            ))}
            <Link
              href="/systems"
              className="inline-flex items-center gap-2 text-base md:text-lg font-medium text-[#0d9488] whitespace-nowrap hover:text-[#0f766e] transition-colors"
            >
              View all systems
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
