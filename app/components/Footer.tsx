"use client";

import Link from "next/link";

const footerLinks = {
  services: [
    { name: "FRP Sales", href: "/services/frp-sales" },
    { name: "FRP Installation", href: "/services/frp-installation" },
    { name: "FRP Service", href: "/services/frp-service" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Wall Protection", href: "/wall-protection" },
    { name: "Projects", href: "/projects" },
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
      {/* Get a Quotation Section */}
      <div className="relative">
        {/* Chevron/Triangle at top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-16 h-16 bg-[#0f172a] rotate-45 border-t border-l border-white/10"></div>
        </div>
        
        <div className="border-b border-white/10 pt-12">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16 lg:py-20 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
              GET A QUOTATION
            </h3>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-3xl mx-auto">
              We strive to provide quotations according to your deadlines based on the project specifications provided. 
              Alternatively, our team can attend your site to take on-site measurements at your convenience. 
              There are no additional costs for our team to make site visits and we would be pleased to meet with you 
              anytime to review your wall protection needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-full font-medium transition-all hover:bg-white hover:text-[#0f172a] min-w-[280px]"
              >
                Submit Project Specifications
              </Link>
              <Link
                href="/schedule-on-site-measurement"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-full font-medium transition-all hover:bg-white hover:text-[#0f172a] min-w-[280px]"
              >
                Schedule On-Site Measurement
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <span className="text-3xl font-semibold tracking-tight text-white">
                FRP<span className="text-[#f97316]">.</span>
              </span>
            </Link>
            <p className="text-white/70 leading-relaxed font-normal max-w-sm mb-8">
              Premium FRP panel sales, installation, and service across British Columbia. 
              Your trusted wall protection partner since 2015.
            </p>
            <div className="space-y-3">
              <a href="tel:604-715-9469" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group">
                <svg className="w-5 h-5 group-hover:text-[#f97316] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                604-715-9469
              </a>
              <a href="mailto:info@frpinstallations.com" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group">
                <svg className="w-5 h-5 group-hover:text-[#f97316] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@frpinstallations.com
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-2">
            <div className="text-sm text-white/30 uppercase tracking-wider mb-6">Services</div>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/80 hover:text-white transition-colors font-normal">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2">
            <div className="text-sm text-white/30 uppercase tracking-wider mb-6">Company</div>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/80 hover:text-white transition-colors font-normal">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div className="lg:col-span-2">
            <div className="text-sm text-white/30 uppercase tracking-wider mb-6">Service Areas</div>
            <ul className="space-y-3">
              {serviceAreas.slice(0, 5).map((area) => (
                <li key={area.slug}>
                  <Link href={`/city/${area.slug}`} className="text-white/80 hover:text-white transition-colors font-normal">
                    {area.name}
                  </Link>
                </li>
              ))}
              <li className="mt-4">
                <Link href="/city" className="text-[#f97316] hover:text-[#fb923c] text-sm transition-colors">
                  View all 50+ cities →
                </Link>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div className="lg:col-span-2">
            <div className="text-sm text-white/30 uppercase tracking-wider mb-6">Office</div>
            <p className="text-white/80 font-normal leading-relaxed">
              145-1685 Pinetree Way<br />
              Coquitlam, BC<br />
              V3E 3A1
            </p>
            <p className="text-white/30 text-sm mt-4">By Appointment Only</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              © {currentYear} FRP Installations Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/quote" className="text-white/40 hover:text-white/80 text-sm transition-colors">
                Get a Quote
              </Link>
              <span className="text-white/20">|</span>
              <Link href="/contact" className="text-white/40 hover:text-white/80 text-sm transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
