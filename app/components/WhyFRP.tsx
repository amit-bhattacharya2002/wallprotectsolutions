"use client";

import Image from "next/image";
import Link from "next/link";
import PlaceholderBadge from "./PlaceholderBadge";

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
        <div className="section-header reveal mx-auto mb-12 max-w-3xl text-center lg:mb-14">
          <span className="eyebrow">Why Choose Us</span>
          <h2 className="section-title mb-4">
            Healthcare&apos;s trusted wall protection partner
          </h2>
          <p className="section-lead mx-auto">
            We are a specialist healthcare and institutional interior protection subcontractor — not a generalist installer. We supply and install complete systems and take responsibility for product selection, quality, and warranty alignment.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-x-8 gap-y-7 md:grid-cols-2 lg:grid-cols-4 mb-12 lg:mb-14 reveal">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border-t border-slate-200 pt-5 max-md:text-center md:text-left"
            >
              <div className="text-4xl md:text-5xl font-semibold text-[#0f172a] mb-3 tracking-tight">
                {stat.number}
              </div>
              <div className="text-xs text-[#134e4a] font-semibold uppercase tracking-[0.14em] mb-2">
                {stat.label}
              </div>
              <p className="text-gray-500 text-sm leading-relaxed font-normal">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Differentiators — now "humanized" on desktop with a 4:3 trades photo
             floated right of the copy. Stacks full-width above on mobile. */}
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-start">
          <div>
            <span className="eyebrow">Why contractors choose us</span>
            <h3 className="text-2xl md:text-3xl font-semibold text-[#0f172a] tracking-tight mb-4 leading-tight">
              More than an installer — a construction partner
            </h3>

            {/* Mobile-first: humanizing image stacks above the copy on small
                 screens, then lives in the right column on lg+. */}
            <div
              className="relative isolate mb-6 overflow-hidden rounded-[1.25rem] shadow-[0_24px_60px_-34px_rgba(15,23,42,0.45)] lg:hidden"
              style={{ aspectRatio: "4/3" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1600&q=80"
                alt="Trades installer at work — representative placeholder"
                fill
                sizes="100vw"
                loading="eager"
                className="object-cover filter-[saturate(0.85)_brightness(0.97)]"
              />
              <PlaceholderBadge />
            </div>

            <p className="text-gray-600 leading-relaxed font-normal mb-6 text-base">
              We focus on selecting the right system for the environment rather than promoting a single manufacturer or product. Different wall protection and hygienic systems perform best in different applications, budgets, and maintenance conditions.
            </p>
            <div className="grid grid-cols-1 gap-x-6 gap-y-4 min-[420px]:grid-cols-2">
              {differentiators.map((item, index) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group flex min-w-0 items-start gap-3 border-t border-slate-200 pt-4 text-sm text-gray-600 transition-colors hover:text-[#0f172a]"
                >
                  <span className="mt-0.5 shrink-0 text-xs font-semibold text-[#134e4a] tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 font-medium leading-snug">{item.label}</span>
                </Link>
              ))}
            </div>
            <div className="mt-8 max-md:flex max-md:justify-center md:block">
              <Link
                href="/healthcare"
                className="inline-flex items-center gap-2 text-[#134e4a] font-medium transition-all hover:gap-3"
              >
                View our healthcare experience
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Desktop column: humanizing photo + sector caption card. Hidden on
               mobile (the photo renders inline with the copy above). */}
          <div className="relative hidden lg:block sticky-side">
            <div
              className="relative isolate overflow-hidden rounded-3xl shadow-[0_28px_80px_-38px_rgba(15,23,42,0.55)]"
              style={{ aspectRatio: "4/3" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1600&q=80"
                alt="Trades installer at work — representative placeholder"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                loading="eager"
                className="object-cover filter-[saturate(0.85)_brightness(0.97)]"
              />
              <PlaceholderBadge />
              <div className="absolute inset-0 bg-linear-to-t from-[#2a4663] via-[#2a4663]/45 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="text-white/80 text-sm mb-2 uppercase tracking-wider">Sectors served</div>
                <div className="text-white font-medium text-lg">
                  Healthcare · Institutional · Education · Food Service · Industrial
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#134e4a] rounded-2xl -z-10 opacity-60" />
          </div>
        </div>
      </div>
    </section>
  );
}
