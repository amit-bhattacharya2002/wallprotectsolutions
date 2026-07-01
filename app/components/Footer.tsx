"use client";

import Link from "next/link";
import VrcaBadge from "./VrcaBadge";
import ProcoreBadge from "./ProcoreBadge";

const footerLinks = {
  systems: [
    { name: "Wall Protection Systems", href: "/systems/wall-protection" },
    { name: "Hygienic Wall Cladding", href: "/systems/hygienic-wall-cladding" },
    { name: "FRP Wall Systems", href: "/systems/frp-wall-systems" },
    { name: "FRL / Decorative Systems", href: "/systems/frl-decorative" },
    { name: "PVC Liner Systems", href: "/systems/pvc-liner" },
    { name: "Wet Wall Systems", href: "/systems/wet-wall" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Healthcare Experience", href: "/healthcare" },
    { name: "Healthcare Knowledge Centre", href: "/resources" },
    { name: "Projects", href: "/projects" },
    { name: "Pre-Construction Support", href: "/pre-construction" },
    { name: "Manufacturer Partners", href: "/manufacturers" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
};

const serviceAreas = [
  { name: "Vancouver", slug: "vancouver" },
  { name: "Burnaby", slug: "burnaby" },
  { name: "Surrey", slug: "surrey" },
  { name: "Coquitlam", slug: "coquitlam" },
  { name: "Richmond", slug: "richmond" },
  { name: "Kelowna", slug: "kelowna" },
  { name: "Victoria", slug: "victoria" },
  { name: "Langley", slug: "langley" },
  { name: "Nanaimo", slug: "nanaimo" },
  { name: "Kamloops", slug: "kamloops" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const proofPoints = [
    "700+ Projects Completed",
    "16+ UPCC Clinics",
    "75%+ Healthcare",
    "20+ Years Construction Experience",
  ];

  return (
    <footer className="relative overflow-hidden bg-[#071522] text-white grain-overlay">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <div
        id="footer-quote"
        className="relative isolate scroll-mt-28 overflow-hidden lg:scroll-mt-24"
      >
        {/* Background photo hidden on mobile — it renders inconsistently there;
             the gradient overlays + footer navy carry the panel on their own. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 hidden bg-cover bg-center md:block"
          style={{
            backgroundImage:
              "url('/actualphotos/hero-hygienic-production-room.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#005EB8]/84 via-[#0d6fc7]/66 to-[#64A70B]/58" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,21,34,0.78)_0%,rgba(7,21,34,0.58)_48%,rgba(7,21,34,0.32)_100%)]" />
        <div className="absolute inset-0 bg-linear-to-b from-[#071522]/32 via-transparent to-[#071522]/62" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.13),transparent_30%),radial-gradient(circle_at_78%_18%,rgba(0,94,184,0.22),transparent_34%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-28 bg-[linear-gradient(180deg,rgba(7,21,34,0)_0%,rgba(7,21,34,0.26)_36%,rgba(7,21,34,0.72)_72%,#071522_100%)]" />
        <div className="relative z-20 mx-auto max-w-7xl px-6 py-16 pb-24 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.82fr] lg:items-end">
            <div className="max-w-4xl">
              <div className="mb-8 h-0.5 w-16 bg-[#9BCB4A]" />
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#9BCB4A]">Start a Scope Review</p>
              <h3 className="mb-6 max-w-3xl text-4xl font-semibold tracking-tight text-white [text-shadow:_0_3px_18px_rgb(7_21_34_/_0.5)] md:text-5xl lg:text-6xl">
                Get pricing clarity before wall protection becomes a site issue.
              </h3>
              <p className="max-w-3xl text-lg font-medium leading-8 text-white/88 [text-shadow:_0_2px_14px_rgb(7_21_34_/_0.4)] md:text-xl">
                Send drawings, photos, or project notes. We help GCs and project teams price the right system, flag details early, and keep closeout documentation clean.
              </p>
            </div>

            <div className="border-y border-white/14 py-6 lg:border-l lg:border-y-0 lg:py-0 lg:pl-8">
              <div className="mb-7 grid grid-cols-2 border-t border-white/12">
                {proofPoints.map((point) => (
                  <div key={point} className="border-b border-white/12 py-4 pr-4 odd:border-r odd:border-white/12 even:pl-4">
                    <div className="text-sm font-semibold leading-snug text-white">{point}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center gap-2 bg-[#005EB8] px-7 py-4 text-base font-semibold text-white transition-colors hover:bg-[#004A91]"
                >
                  Submit Project Specifications
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 border border-white/24 px-7 py-4 text-base font-semibold text-white transition-colors hover:border-white/45 hover:bg-white/8"
                >
                  Talk to a Specialist
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative mx-auto max-w-7xl px-6 pt-14 pb-8 lg:px-8 lg:pt-18 lg:pb-8">
        <div className="grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1fr]">
          {/* Logo, office, contact */}
          <div className="min-w-0 lg:pr-6">
            <Link href="/" className="inline-block mb-6">
              <div className="brand-wordmark flex flex-col leading-none">
                <span className="text-xl font-semibold tracking-tight text-white leading-tight">
                  FRP Installations Inc.
                </span>
                <span className="text-xs font-semibold text-[#9BCB4A] leading-tight tracking-[0.18em] uppercase mt-1">
                  Wall Protection Solutions
                </span>
              </div>
            </Link>
            <p className="mb-7 max-w-sm text-[0.95rem] leading-7 text-white/58">
              Commercial wall protection, FRP, and hygienic cladding installation for healthcare, institutional, food service, and high-use spaces across BC.
            </p>
            <div className="mb-7 border-t border-white/12 py-5">
              <div className="mb-2 text-[11px] uppercase tracking-[0.18em] text-white/62">Office</div>
              <p className="text-[0.9375rem] font-normal leading-relaxed text-white/64">
                145-1685 Pinetree Way
                <br />
                Coquitlam, BC
                <br />
                V3E 3A1
              </p>
              <p className="mt-3 text-[11px] font-normal uppercase tracking-[0.16em] text-[#9BCB4A]/80">
                By Appointment Only
              </p>
            </div>
          </div>

          {/* Systems Links */}
          <div className="min-w-0">
            <div className="mb-6 text-[11px] uppercase tracking-[0.18em] text-white/70">Systems</div>
            <ul className="space-y-3">
              {footerLinks.systems.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[0.9375rem] font-normal text-white/55 transition-colors hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="min-w-0">
            <div className="mb-6 text-[11px] uppercase tracking-[0.18em] text-white/70">Company</div>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[0.9375rem] font-normal text-white/55 transition-colors hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div className="min-w-0">
            <div className="mb-6 text-[11px] uppercase tracking-[0.18em] text-white/70">Service Areas</div>
            <ul className="grid grid-cols-2 gap-x-5 gap-y-3">
              {serviceAreas.slice(0, 10).map((area) => (
                <li key={area.slug} className="min-w-0">
                  <Link href={`/city/${area.slug}`} className="text-[0.9375rem] font-normal text-white/55 transition-colors hover:text-white">
                    {area.name}
                  </Link>
                </li>
              ))}
              <li className="col-span-2 mt-3">
                <Link href="/city" className="text-[0.9375rem] font-semibold text-[#9BCB4A] transition-colors hover:text-white">
                  View all 50+ cities →
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact + credentials strip */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="flex flex-col items-center gap-7 md:flex-row md:justify-between md:gap-10">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-8">
              <a href="tel:604-715-9469" className="group flex items-center gap-3 text-[0.9375rem] text-white/62 transition-colors hover:text-white">
                <span className="flex h-5 w-5 items-center justify-center text-white/45 transition-colors group-hover:text-[#9BCB4A]">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                604-715-9469
              </a>
              <a href="mailto:info@frpinstallations.com" className="group flex items-center gap-3 text-[0.9375rem] text-white/62 transition-colors hover:text-white">
                <span className="flex h-5 w-5 items-center justify-center text-white/45 transition-colors group-hover:text-[#9BCB4A]">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                info@frpinstallations.com
              </a>
            </div>
            <div className="flex items-center gap-6">
              <VrcaBadge variant="white" className="w-40" />
              <ProcoreBadge className="w-28" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/12 pb-[max(3rem,env(safe-area-inset-bottom))] md:pb-0">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-xs text-white/68 md:text-left md:text-sm">
              © {currentYear} FRP Installations Inc. | Wall Protection Solutions. All rights reserved.
            </p>
            <div className="flex max-w-full flex-wrap items-center justify-center gap-x-4 gap-y-2 md:justify-end">
              <Link href="/quote" className="text-xs text-white/68 transition-colors hover:text-white md:text-sm">
                Get a Quote
              </Link>
              <span className="hidden text-white/20 sm:inline" aria-hidden="true">|</span>
              <Link href="/healthcare" className="text-xs text-white/68 transition-colors hover:text-white md:text-sm">
                Healthcare Experience
              </Link>
              <span className="hidden text-white/20 sm:inline" aria-hidden="true">|</span>
              <Link href="/contact" className="text-xs text-white/68 transition-colors hover:text-white md:text-sm">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
