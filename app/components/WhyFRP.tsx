"use client";

import Link from "next/link";

const stats = [
  {
    number: "500+",
    label: "Projects completed",
    description: "Installations across British Columbia, serving diverse industries with quality craftsmanship.",
  },
  {
    number: "10+",
    label: "Years in business",
    description: "Founded on transparency and collaboration. A decade later, we're still committed to honest relationships.",
  },
  {
    number: "1M+",
    label: "Square feet installed",
    description: "From new construction to renovations, we've been the trusted partner for over a million square feet.",
  },
  {
    number: "12",
    label: "Month warranty",
    description: "We stand behind our work. Every installation is warranted to be free from defects for 12 months.",
  },
];

const benefits = [
  { label: "Cost effective", slug: "cost-effective" },
  { label: "Corrosion resistant", slug: "corrosion-resistance" },
  { label: "Impact resistant", slug: "impact-resistance" },
  { label: "Lightweight", slug: "lightweight" },
  { label: "High strength", slug: "high-strength" },
  { label: "Flexible", slug: "flexibility" },
  { label: "Thermal properties", slug: "thermal-properties" },
  { label: "Non-conductive", slug: "electrical-properties" },
];

export default function WhyFRP() {
  return (
    <section id="why-frp" className="bg-[#f8fafc] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <span className="text-sm font-medium text-[#f97316] tracking-wider uppercase mb-4 block">
            Why FRP?
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#0f172a] tracking-tight leading-[1.1] mb-6">
            Why choose FRP panels?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed font-normal">
            Fiberglass Reinforced Plastic panels are the wall protection solution 
            specified by health authorities and architects throughout North America.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 rounded-2xl overflow-hidden mb-20 lg:mb-24">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white p-8 lg:p-10 group hover:bg-[#0f172a] transition-all duration-500"
            >
              <div className="text-5xl md:text-6xl font-semibold text-[#0f172a] group-hover:text-white mb-4 tracking-tight transition-colors duration-500">
                {stat.number}
              </div>
              <div className="text-[#0f172a] font-semibold mb-3 group-hover:text-[#f97316] transition-colors duration-500">
                {stat.label}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed font-normal group-hover:text-white/80 transition-colors duration-500">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="text-sm font-medium text-[#f97316] tracking-wider uppercase mb-4 block">
              Benefits
            </span>
            <h3 className="text-3xl md:text-4xl font-semibold text-[#0f172a] tracking-tight mb-6 leading-tight">
              Built for durability, designed for performance
            </h3>
            <p className="text-gray-600 leading-relaxed font-normal mb-10 text-lg">
              FRP panels check all the boxes where durability, strength, impact resistance, 
              and sanitation are key requirements. A cost-effective wall covering solution 
              compared to other systems.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {benefits.map((benefit, index) => (
                <Link
                  key={benefit.slug}
                  href={`/frp-benefits/${benefit.slug}`}
                  className="group flex items-center gap-3 px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-gray-600 hover:border-[#f97316] hover:bg-[#f97316] hover:text-white transition-all duration-300 shadow-sm"
                >
                  <span className="w-6 h-6 rounded-full bg-[#f97316]/10 group-hover:bg-white/20 flex items-center justify-center text-xs text-[#f97316] group-hover:text-white font-medium transition-colors">
                    {index + 1}
                  </span>
                  <span className="font-medium">{benefit.label}</span>
                </Link>
              ))}
            </div>
            <Link 
              href="/frp-benefits"
              className="inline-flex items-center gap-2 mt-8 text-[#f97316] font-medium hover:gap-3 transition-all"
            >
              View all benefits
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] bg-[#0f172a] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop"
                alt="FRP Installation"
                className="w-full h-full object-cover opacity-80 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/50 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="text-white/80 text-sm mb-2 uppercase tracking-wider">Industries served</div>
                <div className="text-white font-medium text-lg">
                  Healthcare • Food & Beverage • Agriculture • Education • Industrial
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#f97316] rounded-2xl -z-10 hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
