"use client";

import Image from "next/image";
import Link from "next/link";
import { sitePhotos } from "@/app/data/site-photos";

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

const proofRows = [
  {
    label: "Scope Control",
    title: "Supply and install only",
    description: "We keep product, procurement, installation quality, and warranty alignment under one accountable scope.",
  },
  {
    label: "Project Fit",
    title: "Healthcare and institutional depth",
    description: "UPCCs, hospitals, clinics, schools, and sanitary production areas are the environments we understand best.",
  },
  {
    label: "Before Site",
    title: "Submittals, alternates, and details",
    description: "We support tender reviews, product comparisons, long-lead planning, transitions, samples, and closeout documentation.",
  },
  {
    label: "System Selection",
    title: "Product-neutral recommendations",
    description: "FRP is one option. We also work across welded hygienic systems, wall protection, FRL, wet wall, stainless, and Division 10.",
  },
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

        <div className="reveal mb-12 grid overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_24px_70px_-46px_rgba(15,23,42,0.34)] lg:mb-14 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="border-b border-slate-200 p-6 last:border-b-0 md:p-7 lg:border-b-0 lg:border-r lg:last:border-r-0">
              <div className="mb-3 text-4xl font-semibold tracking-tight text-[#10233F] md:text-5xl">
                {stat.number}
              </div>
              <div className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#4f8f16]">
                {stat.label}
              </div>
              <p className="text-sm leading-relaxed text-slate-500">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-[0.92fr_1.08fr] gap-10 lg:gap-16 items-start">
          <div>
            <span className="eyebrow">Why contractors choose us</span>
            <h3 className="text-2xl md:text-3xl font-semibold text-[#0f172a] tracking-tight mb-4 leading-tight">
              More than an installer — a construction partner
            </h3>

            <div
              className="relative isolate mb-6 overflow-hidden rounded-[1.25rem] shadow-[0_24px_60px_-34px_rgba(15,23,42,0.45)] lg:hidden"
              style={{ aspectRatio: "4/3" }}
            >
              <Image
                src={sitePhotos.healthcare.trust.src}
                alt={sitePhotos.healthcare.trust.alt}
                fill
                sizes="100vw"
                loading="eager"
                className="object-cover filter-[saturate(0.85)_brightness(0.97)]"
              />
            </div>

            <p className="text-gray-600 leading-relaxed font-normal mb-6 text-base">
              We focus on selecting the right system for the environment rather than promoting one manufacturer everywhere. Different wall protection and hygienic systems perform best in different applications, budgets, traffic patterns, and maintenance conditions.
            </p>
            <div className="border-y border-slate-200">
              {[
                "Wall protection systems",
                "Hygienic cladding",
                "FRP / FRL panels",
                "Wet wall and stainless protection",
              ].map((item, index) => (
                <div key={item} className="flex items-center gap-4 border-b border-slate-200 py-4 last:border-b-0">
                  <span className="w-7 shrink-0 text-xs font-semibold tabular-nums tracking-[0.16em] text-[#4f8f16]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 max-md:flex max-md:justify-center md:block">
              <Link
                href="/healthcare"
                className="inline-flex items-center gap-2 text-[#64A70B] font-medium transition-all hover:gap-3 hover:text-[#4f8f16]"
              >
                View our healthcare experience
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div
              className="relative isolate overflow-hidden rounded-3xl shadow-[0_28px_80px_-38px_rgba(15,23,42,0.55)]"
              style={{ aspectRatio: "4/3" }}
            >
              <Image
                src={sitePhotos.healthcare.trust.src}
                alt={sitePhotos.healthcare.trust.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                loading="eager"
                className="object-cover filter-[saturate(0.85)_brightness(0.97)]"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0f3a36] via-[#0f3a36]/48 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="text-white/80 text-sm mb-2 uppercase tracking-wider">Sectors served</div>
                <div className="text-white font-medium text-lg">
                  Healthcare · Institutional · Education · Food Service · Industrial
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#64A70B] rounded-2xl -z-10 opacity-45" />
          </div>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-4">
          {proofRows.map((item) => (
            <div key={item.title} className="border-t border-slate-200 pt-5">
              <div className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#4f8f16]">{item.label}</div>
              <h4 className="mb-3 text-base font-semibold leading-snug text-[#0f172a]">{item.title}</h4>
              <p className="text-sm leading-relaxed text-slate-500">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
