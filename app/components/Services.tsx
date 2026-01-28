"use client";

import Link from "next/link";

const services = [
  {
    number: "01",
    title: "FRP Sales",
    description:
      "Premium FRP panels from leading manufacturers including Marlite, Crane Composites, Graham, and Panolam. Wide variety of colors, textures, and finishes to match your vision.",
    href: "/services/frp-sales",
  },
  {
    number: "02",
    title: "FRP Installation",
    description:
      "Professional panel installation for walls and ceilings across British Columbia. Our highly skilled team ensures quality craftsmanship with zero headaches on site.",
    href: "/services/frp-installation",
  },
  {
    number: "03",
    title: "FRP Service",
    description:
      "Expert consultation and product recommendations for hassle-free, long-lasting wall protection. We stand behind our work with a 12-month installation warranty.",
    href: "/services/frp-service",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 mb-16 lg:mb-20">
          <div>
            <span className="text-sm font-medium text-[#f97316] tracking-wider uppercase mb-4 block">
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#0f172a] tracking-tight leading-[1.05]">
              Complete wall protection solutions
            </h2>
          </div>

          <div className="flex lg:items-end">
            <p className="text-lg text-gray-600 leading-relaxed font-normal max-w-xl">
              From consultation to installation, we deliver end-to-end FRP panel
              solutions backed by industry-leading manufacturers and expert craftsmanship.
            </p>
          </div>
        </div>

        {/* Services list */}
        <div className="border-t border-gray-200">
          {services.map((service) => (
            <Link
              key={service.number}
              href={service.href}
              className="group relative block px-4 py-10 md:py-12 lg:py-14 border-b border-gray-200 overflow-hidden"
            >
              {/* Sliding background */}
              <div className="absolute inset-0 bg-[#0f172a] -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out" />

              <div className="relative z-10 grid gap-4 md:grid-cols-12 md:gap-8 items-start md:items-center">
                <div className="md:col-span-1">
                  <span className="text-sm text-gray-500 group-hover:text-white/80 font-medium transition-colors duration-300">
                    {service.number}
                  </span>
                </div>

                <div className="md:col-span-4">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#0f172a] group-hover:text-[#f97316] transition-colors duration-300 tracking-tight">
                    {service.title}
                  </h3>
                </div>

                <div className="md:col-span-6">
                  <p className="text-gray-600 group-hover:text-white/70 leading-relaxed font-normal transition-colors duration-300 text-base md:text-lg">
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
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Trusted Partners */}
        <div className="mt-16 lg:mt-20 pt-12 border-t border-gray-200">
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-8 text-center">
            Trusted Manufacturer Partners
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
            {[
              { name: "Marlite", href: "/wall-protection/manufacturers/marlite" },
              { name: "Crane Composites", href: "/wall-protection/manufacturers/crane-composites" },
              { name: "Graham", href: "/wall-protection/manufacturers/graham" },
              { name: "Panolam", href: "/wall-protection/manufacturers/panolam" },
              { name: "Nudo", href: "/wall-protection/manufacturers/nudo" },
            ].map((partner) => (
              <Link
                key={partner.name}
                href={partner.href}
                className="text-gray-500 font-medium text-lg hover:text-[#0f172a] transition-colors"
              >
                {partner.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
