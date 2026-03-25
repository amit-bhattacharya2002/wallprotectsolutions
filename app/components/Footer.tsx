"use client";

import Link from "next/link";

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

  return (
    <footer className="bg-[#0f172a]">
      {/* Get a Quotation CTA */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-14 h-0.5 bg-[#0d9488] mx-auto mb-8" />
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-5">
              Get a quotation
            </h3>
            <p className="text-white/78 text-lg md:text-xl leading-relaxed mb-10 max-w-3xl mx-auto">
              We work directly with GCs, project managers, and design teams. Fast response, accurate pricing, and full pre-construction support included.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-2 bg-[#0d9488] text-white px-8 py-4 rounded-full text-base md:text-lg font-medium transition-colors hover:bg-[#0f766e] min-w-[240px]"
              >
                Submit Project Specifications
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-4 rounded-full text-base md:text-lg font-medium transition-all hover:border-white/40 hover:bg-white/5 min-w-[240px]"
              >
                Contact Us
              </Link>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-sm text-white/52">
              <span>700+ Projects Completed</span>
              <span>·</span>
              <span>16+ UPCC Clinics</span>
              <span>·</span>
              <span>75%+ Healthcare</span>
              <span>·</span>
              <span>20 Yrs Construction Experience</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1fr_1fr] gap-x-10 gap-y-12">
          {/* Logo & Description */}
          <div className="min-w-0">
            <Link href="/" className="inline-block mb-6">
              <div className="flex flex-col leading-none">
                <span className="text-lg font-semibold tracking-tight text-white leading-tight">
                  FRP Installations Inc.
                </span>
                <span className="text-xs font-semibold text-[#0d9488] leading-tight tracking-[0.18em] uppercase mt-1">
                  Wall Protection Solutions
                </span>
              </div>
            </Link>
            <p className="text-white/50 text-[0.9375rem] leading-relaxed font-normal max-w-sm mb-8">
              Specialist healthcare and institutional interior protection subcontractor across British Columbia. Supply and installation of wall protection systems, hygienic cladding, FRP/FRL, and architectural specialties.
            </p>
            <div className="space-y-3">
              <a href="tel:604-715-9469" className="flex items-center gap-3 text-white/50 hover:text-white transition-colors group text-[0.9375rem]">
                <svg className="w-5 h-5 group-hover:text-[#0d9488] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                604-715-9469
              </a>
              <a href="mailto:info@frpinstallations.com" className="flex items-center gap-3 text-white/50 hover:text-white transition-colors group text-[0.9375rem]">
                <svg className="w-5 h-5 group-hover:text-[#0d9488] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@frpinstallations.com
              </a>
            </div>
          </div>

          {/* Systems Links */}
          <div className="min-w-0">
            <div className="text-[11px] text-white/62 uppercase tracking-[0.18em] mb-6">Systems</div>
            <ul className="space-y-3">
              {footerLinks.systems.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/50 hover:text-white transition-colors font-normal text-[0.9375rem]">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="min-w-0">
            <div className="text-[11px] text-white/62 uppercase tracking-[0.18em] mb-6">Company</div>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/50 hover:text-white transition-colors font-normal text-[0.9375rem]">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div className="min-w-0">
            <div className="text-[11px] text-white/62 uppercase tracking-[0.18em] mb-6">Service Areas</div>
            <ul className="space-y-3">
              {serviceAreas.slice(0, 5).map((area) => (
                <li key={area.slug}>
                  <Link href={`/city/${area.slug}`} className="text-white/50 hover:text-white transition-colors font-normal text-[0.9375rem]">
                    {area.name}
                  </Link>
                </li>
              ))}
              <li className="mt-4">
                <Link href="/city" className="text-[#2dd4bf] hover:text-[#5eead4] text-[0.9375rem] transition-colors">
                  View all 50+ cities →
                </Link>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div className="min-w-0">
            <div className="text-[11px] text-white/62 uppercase tracking-[0.18em] mb-6">Office</div>
            <p className="text-white/50 font-normal leading-relaxed text-[0.9375rem]">
              145-1685 Pinetree Way<br />
              Coquitlam, BC<br />
              V3E 3A1
            </p>
            <p className="text-white/62 text-[11px] mt-4 uppercase tracking-[0.16em]">By Appointment Only</p>
            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="text-[11px] text-white/62 uppercase tracking-[0.18em] mb-3">Proof Points</div>
              <div className="space-y-1.5 text-[0.9375rem] text-white/50">
                <div>700+ Projects Completed</div>
                <div>16+ UPCC Clinics</div>
                <div>75%+ Healthcare Work</div>
                <div>20 Yrs Construction Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/68 text-xs md:text-sm">
              © {currentYear} FRP Installations Inc. | Wall Protection Solutions. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/quote" className="text-white/68 hover:text-white text-xs md:text-sm transition-colors">
                Get a Quote
              </Link>
              <span className="text-white/20">|</span>
              <Link href="/healthcare" className="text-white/68 hover:text-white text-xs md:text-sm transition-colors">
                Healthcare Experience
              </Link>
              <span className="text-white/20">|</span>
              <Link href="/contact" className="text-white/68 hover:text-white text-xs md:text-sm transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
