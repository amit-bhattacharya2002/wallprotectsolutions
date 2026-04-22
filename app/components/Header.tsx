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
  // Row 3 uses `overflow-hidden` during its max-height collapse animation,
  // which would otherwise clip the dropdown panels that open below each nav
  // item. We keep overflow hidden while animating and flip to visible only
  // once the row is fully expanded and idle.
  const [isNavRowExpanded, setIsNavRowExpanded] = useState(true);
  const pathname = usePathname();

  function isItemActive(item: (typeof navigation)[number]) {
    if (isPathActive(pathname, item.href)) {
      return true;
    }

    return item.children?.some((child) => isPathActive(pathname, child.href)) ?? false;
  }

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // When collapsing (isScrolled → true) we want overflow hidden right away
    // so the max-h animation clips cleanly. When expanding back, wait for the
    // ~300ms animation to finish before letting dropdowns overflow.
    const delay = isScrolled ? 0 : 320;
    const timer = window.setTimeout(() => {
      setIsNavRowExpanded(!isScrolled);
    }, delay);
    return () => window.clearTimeout(timer);
  }, [isScrolled]);

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

  /**
   * Shared desktop nav renderer — used both in the main row (when scrolled)
   * and in the dedicated nav row (when not scrolled). Only one instance is
   * visible at a time, so they can share `activeDropdown` state safely.
   */
  const renderNavItems = () =>
    navigation.map((item) => (
      <div
        key={item.name}
        className="group relative"
        onMouseEnter={() => item.children && setActiveDropdown(item.name)}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <Link
          href={item.href}
          className={`relative flex items-center gap-1 pb-0.5 font-normal transition-colors duration-200 ${
            isScrolled ? "text-[0.8rem]" : "text-[0.95rem]"
          } ${
            isItemActive(item)
              ? "text-[#0f172a]"
              : "text-slate-500 hover:text-[#0f172a]"
          }`}
        >
          {item.name}
          {item.children && (
            <svg
              className={`transition-all duration-300 ${
                isScrolled ? "h-3.5 w-3.5" : "h-4 w-4"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          )}
          <span
            className={`absolute inset-x-0 -bottom-1 h-[2px] origin-center bg-[#134e4a] transition-transform duration-200 ${
              isItemActive(item) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
            }`}
          />
        </Link>

        {item.children && activeDropdown === item.name && (
          <div className="absolute left-0 top-full z-50 pt-2">
            <div className="min-w-[240px] rounded-xl border border-slate-100 bg-white py-2 shadow-xl">
              {item.children.map((child) => (
                <Link
                  key={child.name}
                  href={child.href}
                  className="block px-4 py-2.5 text-sm text-slate-500 transition-colors hover:bg-slate-50 hover:text-[#0f172a]"
                >
                  {child.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    ));

  return (
    <>
      {/* Fixed header container — always white */}
      <div className="fixed left-0 right-0 top-0 z-50 border-b border-slate-100 bg-white shadow-sm">
        {/* ── Row 1: Top contact bar (md+) — collapses when scrolled ── */}
        <div
          className={`overflow-hidden bg-slate-50 transition-all duration-300 ease-out ${
            isScrolled ? "max-h-0 opacity-0" : "max-h-14 opacity-100"
          }`}
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="hidden items-center justify-between border-b border-slate-100 py-1.5 md:flex">
              <div className="flex items-center gap-6">
                <a
                  href="tel:604-715-9469"
                  className="flex items-center gap-2 text-xs tracking-[0.02em] text-slate-500 transition-colors hover:text-[#0f172a]"
                >
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  604-715-9469
                </a>
                <a
                  href="mailto:info@frpinstallations.com"
                  className="flex items-center gap-2 text-xs tracking-[0.02em] text-slate-500 transition-colors hover:text-[#0f172a]"
                >
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@frpinstallations.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-xs tracking-[0.02em] text-slate-500">
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Serving all of British Columbia
              </div>
            </div>
          </div>
        </div>

        {/* ── Row 2: Logo + nav (when scrolled) + search bar + CTA ── */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            className={`relative flex items-center gap-3 transition-all duration-300 ease-out md:gap-6 ${
              isScrolled ? "py-2.5" : "py-3 md:py-4"
            }`}
          >
            {/* Logo */}
            <Link
              href="/"
              className="group flex min-w-0 flex-col leading-none lg:shrink-0"
            >
              <span
                className={`font-semibold leading-tight tracking-tight text-[#0f172a] transition-all duration-300 ${
                  isScrolled ? "text-sm md:text-base" : "text-sm md:text-lg"
                }`}
              >
                FRP Installations Inc.
              </span>
              <span
                className={`font-semibold uppercase leading-tight tracking-[0.18em] text-[#134e4a] transition-all duration-300 ${
                  isScrolled
                    ? "text-[0.6rem] md:text-[0.68rem]"
                    : "text-[0.62rem] md:text-[0.72rem]"
                }`}
              >
                Wall Protection Solutions
              </span>
            </Link>

            {/* Desktop nav — absolutely centered on this row ONLY when scrolled */}
            <nav
              className={`absolute left-1/2 -translate-x-1/2 items-center gap-5 xl:gap-6 ${
                isScrolled ? "hidden lg:flex" : "hidden"
              }`}
              aria-label="Primary (compact)"
            >
              {renderNavItems()}
            </nav>

            {/* Desktop: compact site-search icon + Get a Quote.
                 We used to render a full "Search products or brands" input here, but
                 (a) it collided with the "Contact" nav link at mid-viewport widths,
                 and (b) we sell consultative services, not an e-commerce catalog.
                 A single icon that opens the SiteSearch modal (also bound to ⌘K and /)
                 sets the right expectation and frees up the row for navigation. */}
            <div className="ml-auto hidden items-center gap-3 lg:flex">
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-400 transition-colors hover:border-[#0d9488]/40 hover:bg-white hover:text-[#0d9488]"
                aria-label="Open site search"
                title="Search (⌘K)"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.75}
                    d="m21 21-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0Z"
                  />
                </svg>
              </button>
              <Link
                href="/quote"
                className="group inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-[#2a4663] px-5 py-2 text-sm font-medium text-white transition-all hover:bg-[#3a597b]"
              >
                Get a Quote
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>

            {/* Mobile actions */}
            <div className="ml-auto flex shrink-0 items-center gap-1.5 sm:gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-[#0f172a] transition-colors hover:bg-[#0d9488] hover:text-white"
                aria-label="Search the site"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="m21 21-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0Z" />
                </svg>
              </button>
              <a
                href="tel:604-715-9469"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-[#0f172a] transition-colors hover:bg-[#0d9488] hover:text-white"
                aria-label="Call us"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
              <a
                href="mailto:info@frpinstallations.com"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-[#0f172a] transition-colors hover:bg-[#0d9488] hover:text-white"
                aria-label="Email us"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-[#0f172a]"
                aria-label="Menu"
              >
                <div className="relative flex h-3 w-4 flex-col justify-between">
                  <span
                    className={`h-0.5 w-full origin-center bg-[#2a4663] transition-all duration-300 ${
                      isMobileMenuOpen ? "translate-y-[5px] rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`h-0.5 w-full bg-[#2a4663] transition-all duration-300 ${
                      isMobileMenuOpen ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`h-0.5 w-full origin-center bg-[#2a4663] transition-all duration-300 ${
                      isMobileMenuOpen ? "-translate-y-[5px] -rotate-45" : ""
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* ── Row 3: Desktop navigation (lg+) — collapses when scrolled ── */}
        <div
          className={`hidden transition-all duration-300 ease-out lg:block ${
            isNavRowExpanded ? "overflow-visible" : "overflow-hidden"
          } ${
            isScrolled
              ? "max-h-0 border-t-0 opacity-0"
              : "max-h-20 border-t border-slate-100 opacity-100"
          }`}
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <nav
              className="flex items-center gap-7 py-3.5 xl:gap-9"
              aria-label="Primary"
            >
              {renderNavItems()}
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay — sits above the fixed header so the blur covers it too */}
      <div
        className={`fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen ? "visible opacity-100" : "invisible pointer-events-none opacity-0"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel - Slide from right */}
      <div
        className={`fixed bottom-0 right-0 top-0 z-[70] flex w-[85%] max-w-[360px] flex-col bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex shrink-0 items-center justify-between border-b border-slate-100 p-5">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex flex-col leading-none">
            <span className="text-base font-semibold leading-tight tracking-tight text-[#0f172a]">
              FRP Installations Inc.
            </span>
            <span className="text-xs font-medium leading-tight tracking-wide text-[#134e4a]">
              Wall Protection Solutions
            </span>
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-colors hover:bg-slate-200"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Content */}
        <div className="flex-1 overflow-y-auto overscroll-contain">
          <nav className="p-5">
            <button
              type="button"
              onClick={() => {
                setIsSearchOpen(true);
                setIsMobileMenuOpen(false);
              }}
              className="mb-5 flex w-full items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-left text-[#0f172a] transition-colors hover:border-[#0d9488]/30 hover:bg-[#0d9488]/5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
                <svg className="h-5 w-5 text-[#134e4a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="m21 21-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0Z" />
                </svg>
              </div>
              <div>
                <div className="text-sm text-slate-400">Search the site</div>
                <div className="font-medium">Products, services, and brands</div>
              </div>
            </button>
            {navigation.map((item) => (
              <div key={item.name} className="border-b border-slate-100 last:border-b-0">
                {item.children ? (
                  <>
                    <button
                      onClick={() => setMobileDropdownOpen(mobileDropdownOpen === item.name ? null : item.name)}
                      className={`flex w-full items-center justify-between py-4 text-lg font-medium transition-colors ${
                        isItemActive(item) ? "text-[#134e4a]" : "text-[#0f172a]"
                      }`}
                    >
                      {item.name}
                      <svg
                        className={`h-5 w-5 text-slate-400 transition-transform duration-200 ${
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
                      <div className="space-y-1 pl-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors ${
                              pathname === child.href
                                ? "bg-[#134e4a]/10 text-[#134e4a]"
                                : "text-slate-500 hover:bg-slate-50"
                            }`}
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-current opacity-50" />
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
                      pathname === item.href ? "text-[#134e4a]" : "text-[#0f172a] hover:text-[#0d9488]"
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
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#2a4663] py-4 font-medium text-white transition-colors hover:bg-[#3a597b]"
            >
              Get a Quote
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Mobile Contact Info */}
          <div className="mx-5 rounded-xl bg-slate-50 p-5">
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-slate-400">Contact Us</p>
            <div className="space-y-4">
              <a
                href="tel:604-715-9469"
                className="flex items-center gap-3 text-[#0f172a] transition-colors hover:text-[#0d9488]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
                  <svg className="h-5 w-5 text-[#134e4a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-slate-400">Call us</div>
                  <div className="font-medium">604-715-9469</div>
                </div>
              </a>
              <a
                href="mailto:info@frpinstallations.com"
                className="flex items-center gap-3 text-[#0f172a] transition-colors hover:text-[#0d9488]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
                  <svg className="h-5 w-5 text-[#134e4a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-slate-400">Email us</div>
                  <div className="font-medium">info@frpinstallations.com</div>
                </div>
              </a>
            </div>
          </div>

          {/* Service Area Badge */}
          <div className="mx-5 mb-8 mt-5 flex items-center gap-2 text-sm text-slate-400">
            <svg className="h-4 w-4 text-[#134e4a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
