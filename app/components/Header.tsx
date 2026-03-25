"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SiteSearch from "./SiteSearch";

const navigation = [
  {
    name: "Company",
    href: "/about",
    children: [
      { name: "About", href: "/about" },
      { name: "Industries Served", href: "/industries" },
      { name: "Manufacturer Partners", href: "/manufacturers" },
      { name: "Careers", href: "/careers" },
    ],
  },
  {
    name: "Systems",
    href: "/systems",
    children: [
      { name: "Wall Protection Systems", href: "/systems/wall-protection" },
      { name: "Hygienic Wall Cladding", href: "/systems/hygienic-wall-cladding" },
      { name: "FRP Wall Systems", href: "/systems/frp-wall-systems" },
      { name: "FRL / Decorative Wall Systems", href: "/systems/frl-decorative" },
      { name: "PVC Liner Systems", href: "/systems/pvc-liner" },
      { name: "Wet Wall Systems", href: "/systems/wet-wall" },
      { name: "Architectural Specialties", href: "/systems/architectural-specialties" },
      { name: "Stainless Protection", href: "/systems/stainless-protection" },
    ],
  },
  { name: "Healthcare", href: "/healthcare" },
  { name: "Projects", href: "/projects" },
  {
    name: "Support",
    href: "/pre-construction",
    children: [
      { name: "Pre-Construction", href: "/pre-construction" },
      { name: "Resources", href: "/resources" },
      { name: "FAQ", href: "/faq" },
      { name: "Why FRP?", href: "/frp-benefits" },
      { name: "Service Areas", href: "/city" },
    ],
  },
  { name: "Contact", href: "/contact" },
];

function isPathActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function isItemActive(item: (typeof navigation)[number]) {
    if (isPathActive(pathname, item.href)) {
      return true;
    }

    return item.children?.some((child) => isPathActive(pathname, child.href)) ?? false;
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const tagName = target?.tagName;
      const isTypingField =
        tagName === "INPUT" ||
        tagName === "TEXTAREA" ||
        target?.isContentEditable;

      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setIsSearchOpen(true);
        setIsMobileMenuOpen(false);
      }

      if (event.key === "/" && !isTypingField) {
        event.preventDefault();
        setIsSearchOpen(true);
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* Combined Header Container */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-sm border-b border-gray-100"
            : "bg-transparent"
        }`}
      >
        {/* Top Contact Bar */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`hidden md:flex items-center justify-between py-2 border-b transition-colors duration-500 ${
            isScrolled ? "border-gray-200" : "border-white/10"
          }`}>
            <div className="flex items-center gap-6">
              <a
                href="tel:604-715-9469"
                className={`flex items-center gap-2 text-sm transition-colors ${
                  isScrolled ? "text-gray-600 hover:text-[#0f172a]" : "text-white/70 hover:text-white"
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                604-715-9469
              </a>
              <a
                href="mailto:info@frpinstallations.com"
                className={`flex items-center gap-2 text-sm transition-colors ${
                  isScrolled ? "text-gray-600 hover:text-[#0f172a]" : "text-white/70 hover:text-white"
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@frpinstallations.com
              </a>
            </div>
            <div className={`flex items-center gap-2 text-sm transition-colors duration-500 ${
              isScrolled ? "text-gray-600" : "text-white/70"
            }`}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Serving all of British Columbia
            </div>
          </div>
        </div>

        {/* Main Header */}
        <header
          className={`transition-all duration-500 ${
            isScrolled ? "py-3" : "py-4 md:py-5"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="group flex flex-col leading-none">
                <span className={`text-lg font-semibold tracking-tight transition-colors leading-tight ${
                  isScrolled ? "text-[#0f172a]" : "text-white"
                }`}>
                  FRP Installations Inc.
                </span>
                <span className={`text-xs font-medium tracking-wide transition-colors leading-tight ${
                  isScrolled ? "text-[#0d9488]" : "text-[#0d9488]"
                }`}>
                  Wall Protection Solutions
                </span>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
                {navigation.map((item) => (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className={`text-[0.95rem] font-medium transition-colors flex items-center gap-1 ${
                        isScrolled ? "text-gray-600 hover:text-[#0f172a]" : "text-white/80 hover:text-white"
                      } ${isItemActive(item) ? (isScrolled ? "text-[#0f172a]" : "text-white") : ""}`}
                    >
                      {item.name}
                      {item.children && (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </Link>

                    {/* Dropdown */}
                    {item.children && activeDropdown === item.name && (
                      <div className="absolute top-full left-0 pt-2">
                        <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[240px]">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block px-4 py-2.5 text-sm text-gray-600 hover:text-[#0f172a] hover:bg-gray-50 transition-colors"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(true)}
                  className={`inline-flex items-center justify-center rounded-full border p-2.5 transition-all ${
                    isScrolled
                      ? "border-gray-200 bg-white text-gray-600 hover:border-[#0d9488]/30 hover:text-[#0f172a]"
                      : "border-white/15 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                  aria-label="Open search"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="m21 21-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0Z" />
                  </svg>
                </button>
                <Link
                  href="/quote"
                  className={`text-sm font-medium px-4 xl:px-5 py-2.5 rounded-full transition-all whitespace-nowrap ${
                    isScrolled
                      ? "bg-[#0f172a] text-white hover:bg-[#1e293b]"
                      : "bg-white text-[#0f172a] hover:bg-white/90"
                  }`}
                >
                  Get a Quote
                </Link>
              </nav>

              {/* Mobile Actions */}
              <div className="lg:hidden flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(true)}
                  className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                    isScrolled
                      ? "bg-gray-100 text-[#0f172a] hover:bg-[#0d9488] hover:text-white"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                  aria-label="Search the site"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="m21 21-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0Z" />
                  </svg>
                </button>
                <a
                  href="tel:604-715-9469"
                  className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                    isScrolled
                      ? "bg-gray-100 text-[#0f172a] hover:bg-[#0d9488] hover:text-white"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                  aria-label="Call us"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </a>
                <a
                  href="mailto:info@frpinstallations.com"
                  className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                    isScrolled
                      ? "bg-gray-100 text-[#0f172a] hover:bg-[#0d9488] hover:text-white"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                  aria-label="Email us"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                    isScrolled ? "bg-gray-100 text-[#0f172a]" : "bg-white/10 text-white"
                  }`}
                  aria-label="Menu"
                >
                  <div className="w-4 h-3 relative flex flex-col justify-between">
                    <span className={`w-full h-0.5 transition-all duration-300 origin-center ${
                      isScrolled ? "bg-[#0f172a]" : "bg-white"
                    } ${isMobileMenuOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
                    <span className={`w-full h-0.5 transition-all duration-300 ${
                      isScrolled ? "bg-[#0f172a]" : "bg-white"
                    } ${isMobileMenuOpen ? "opacity-0" : ""}`} />
                    <span className={`w-full h-0.5 transition-all duration-300 origin-center ${
                      isScrolled ? "bg-[#0f172a]" : "bg-white"
                    } ${isMobileMenuOpen ? "-rotate-45 -translate-y-[5px]" : ""}`} />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel - Slide from right */}
      <div
        className={`lg:hidden fixed top-0 right-0 bottom-0 z-50 w-[85%] max-w-[360px] bg-white shadow-2xl transition-transform duration-300 ease-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex flex-col leading-none">
            <span className="text-base font-semibold tracking-tight text-[#0f172a] leading-tight">
              FRP Installations Inc.
            </span>
            <span className="text-xs font-medium text-[#0d9488] leading-tight tracking-wide">
              Wall Protection Solutions
            </span>
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Content */}
        <div className="overflow-y-auto h-[calc(100%-80px)]">
          <nav className="p-5">
            <button
              type="button"
              onClick={() => {
                setIsSearchOpen(true);
                setIsMobileMenuOpen(false);
              }}
              className="mb-5 flex w-full items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-4 text-left text-[#0f172a] transition-colors hover:border-[#0d9488]/30 hover:bg-[#0d9488]/5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
                <svg className="h-5 w-5 text-[#0d9488]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="m21 21-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0Z" />
                </svg>
              </div>
              <div>
                <div className="text-sm text-gray-500">Search the site</div>
                <div className="font-medium">Products, services, and brands</div>
              </div>
            </button>
            {navigation.map((item) => (
              <div key={item.name} className="border-b border-gray-100 last:border-b-0">
                {item.children ? (
                  <>
                    <button
                      onClick={() => setMobileDropdownOpen(mobileDropdownOpen === item.name ? null : item.name)}
                      className={`w-full flex items-center justify-between py-4 text-lg font-medium transition-colors ${
                        isItemActive(item)
                          ? "text-[#0d9488]"
                          : "text-[#0f172a]"
                      }`}
                    >
                      {item.name}
                      <svg
                        className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                          mobileDropdownOpen === item.name ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className={`overflow-hidden transition-all duration-200 ${
                      mobileDropdownOpen === item.name ? "max-h-[400px] pb-3" : "max-h-0"
                    }`}>
                      <div className="pl-4 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`flex items-center gap-3 py-2.5 px-3 rounded-lg transition-colors ${
                              pathname === child.href
                                ? "bg-[#0d9488]/10 text-[#0d9488]"
                                : "text-gray-600 hover:bg-gray-50"
                            }`}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-current opacity-50" />
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-4 text-lg font-medium transition-colors ${
                      pathname === item.href
                        ? "text-[#0d9488]"
                        : "text-[#0f172a] hover:text-[#0d9488]"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="px-5 pb-5">
            <Link
              href="/quote"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-4 bg-[#0f172a] text-white rounded-xl font-medium hover:bg-[#1e293b] transition-colors"
            >
              Get a Quote
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Mobile Contact Info */}
          <div className="mx-5 p-5 bg-gray-50 rounded-xl">
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-4 font-medium">Contact Us</p>
            <div className="space-y-4">
              <a
                href="tel:604-715-9469"
                className="flex items-center gap-3 text-[#0f172a] hover:text-[#0d9488] transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <svg className="w-5 h-5 text-[#0d9488]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Call us</div>
                  <div className="font-medium">604-715-9469</div>
                </div>
              </a>
              <a
                href="mailto:info@frpinstallations.com"
                className="flex items-center gap-3 text-[#0f172a] hover:text-[#0d9488] transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <svg className="w-5 h-5 text-[#0d9488]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Email us</div>
                  <div className="font-medium">info@frpinstallations.com</div>
                </div>
              </a>
            </div>
          </div>

          {/* Service Area Badge */}
          <div className="mx-5 mt-5 mb-8 flex items-center gap-2 text-sm text-gray-500">
            <svg className="w-4 h-4 text-[#0d9488]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Serving all of British Columbia
          </div>
        </div>
      </div>
      <SiteSearch isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
