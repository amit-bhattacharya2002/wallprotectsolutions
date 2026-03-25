"use client";

import Link from "next/link";

const stats = [
  {
    number: "700+",
    label: "Projects completed",
    description: "Supply and install wall protection and hygienic systems across British Columbia for healthcare and institutional clients.",
  },
  {
    number: "20+",
    label: "Years of commercial construction experience",
    description: "GC-level construction background informing better trade coordination, specification support, and project delivery.",
  },
  {
    number: "16+",
    label: "UPCC clinics completed",
    description: "16+ Urgent Primary Care Centres completed across BC — more than any other wall protection subcontractor in the province.",
  },
  {
    number: "75%+",
    label: "Healthcare work",
    description: "Healthcare is not just one of our sectors — it is the core of our business. We understand the environments, the specs, and the expectations.",
  },
];

const differentiators = [
  { label: "Supply & install accountability", href: "/about" },
  { label: "Healthcare specialization", href: "/healthcare" },
  { label: "Pre-construction support", href: "/pre-construction" },
  { label: "GC-level project understanding", href: "/about" },
  { label: "Manufacturer depth", href: "/manufacturers" },
  { label: "Product-neutral system selection", href: "/systems" },
  { label: "Submittals & shop drawings", href: "/pre-construction" },
  { label: "Active healthcare experience", href: "/healthcare" },
];

export default function WhyFRP() {
  return (
    <section id="why-frp" className="section-shell-lg bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="section-header mb-12 lg:mb-14">
          <span className="eyebrow">Why Choose Us</span>
          <h2 className="section-title mb-4">
            Healthcare&apos;s trusted wall protection partner
          </h2>
          <p className="section-lead">
            We are a specialist healthcare and institutional interior protection subcontractor — not a generalist installer. We supply and install complete systems and take responsibility for product selection, quality, and warranty alignment.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 rounded-[1.4rem] overflow-hidden mb-12 lg:mb-14 shadow-[0_20px_50px_-38px_rgba(15,23,42,0.35)]">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white p-6 lg:p-8 group hover:bg-[#0f172a] transition-all duration-500"
            >
              <div className="text-4xl md:text-5xl font-semibold text-[#0f172a] group-hover:text-white mb-3 tracking-tight transition-colors duration-500">
                {stat.number}
              </div>
              <div className="text-sm text-[#0f172a] font-semibold mb-2 group-hover:text-[#0d9488] transition-colors duration-500">
                {stat.label}
              </div>
              <p className="text-gray-500 text-xs leading-relaxed font-normal group-hover:text-white/70 transition-colors duration-500">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Differentiators */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <span className="eyebrow">Why contractors choose us</span>
            <h3 className="text-2xl md:text-3xl font-semibold text-[#0f172a] tracking-tight mb-4 leading-tight">
              More than an installer — a construction partner
            </h3>
            <p className="text-gray-600 leading-relaxed font-normal mb-6 text-base">
              We focus on selecting the right system for the environment rather than promoting a single manufacturer or product. Different wall protection and hygienic systems perform best in different applications, budgets, and maintenance conditions.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {differentiators.map((item, index) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group surface-card-muted flex items-center gap-3 px-4 py-3 text-sm text-gray-600 hover:border-[#0d9488] hover:bg-[#0d9488] hover:text-white transition-all duration-300"
                >
                  <span className="w-6 h-6 rounded-full bg-[#0d9488]/10 group-hover:bg-white/20 flex items-center justify-center text-xs text-[#0d9488] group-hover:text-white font-medium transition-colors">
                    {index + 1}
                  </span>
                  <span className="font-medium">{item.label}</span>
                </Link>
              ))}
            </div>
            <Link
              href="/healthcare"
              className="inline-flex items-center gap-2 mt-8 text-[#0d9488] font-medium hover:gap-3 transition-all"
            >
              View our healthcare experience
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-4/3 bg-[#0f172a] rounded-[1.5rem] overflow-hidden shadow-[0_28px_80px_-38px_rgba(15,23,42,0.55)]">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop"
                alt="Wall protection installation in healthcare facility"
                className="w-full h-full object-cover opacity-80 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0f172a] via-[#0f172a]/50 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="text-white/80 text-sm mb-2 uppercase tracking-wider">Sectors served</div>
                <div className="text-white font-medium text-lg">
                  Healthcare · Institutional · Education · Food Service · Industrial
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#0d9488] rounded-2xl -z-10 hidden lg:block opacity-60" />
          </div>
        </div>
      </div>
    </section>
  );
}
