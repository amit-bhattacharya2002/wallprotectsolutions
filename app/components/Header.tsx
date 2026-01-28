"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  // { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { 
    name: "Services", 
    href: "/services/frp-sales",
    children: [
      { name: "FRP Sales", href: "/services/frp-sales" },
      { name: "FRP Installation", href: "/services/frp-installation" },
      { name: "FRP Service", href: "/services/frp-service" },
      { name: "Schedule Site Visit", href: "/schedule-on-site-measurement" },
    ]
  },
  { name: "Wall Protection", href: "/wall-protection" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // Change header background after scrolling past hero section (approximately)
      setIsScrolled(window.scrollY > 100);
    };
    
    // Check initial scroll position
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

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
            <Link href="/" className="group">
              <span className={`text-2xl font-semibold tracking-tight transition-colors ${
                isScrolled ? "text-[#0f172a]" : "text-white"
              }`}>
                FRP
                <span className="text-[#f97316]">.</span>
              </span>
            </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <div 
                key={item.name} 
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`text-sm font-medium transition-colors flex items-center gap-1 ${
                    isScrolled ? "text-gray-600 hover:text-[#0f172a]" : "text-white/80 hover:text-white"
                  } ${pathname === item.href || pathname.startsWith(item.href + '/') ? (isScrolled ? "text-[#0f172a]" : "text-white") : ""}`}
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
                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[200px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-600 hover:text-[#0f172a] hover:bg-gray-50 transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/quote"
              className={`text-sm font-medium px-5 py-2.5 rounded-full transition-all ${
                isScrolled 
                  ? "bg-[#0f172a] text-white hover:bg-[#1e293b]" 
                  : "bg-white text-[#0f172a] hover:bg-white/90"
              }`}
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors ${
              isScrolled ? "text-[#0f172a]" : "text-white"
            }`}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 transition-all duration-300 ${
                isScrolled ? "bg-[#0f172a]" : "bg-white"
              } ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`w-full h-0.5 transition-all duration-300 ${
                isScrolled ? "bg-[#0f172a]" : "bg-white"
              } ${isMobileMenuOpen ? "opacity-0" : ""}`} />
              <span className={`w-full h-0.5 transition-all duration-300 ${
                isScrolled ? "bg-[#0f172a]" : "bg-white"
              } ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>

      </div>
    </header>
      </div>

      {/* Mobile Menu - Separate from header to avoid clipping */}
      <div
        className={`lg:hidden fixed inset-0 top-[65px] z-40 bg-[#0f172a] transition-all duration-500 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <nav className="flex flex-col p-6 gap-4">
          {navigation.map((item) => (
            <div key={item.name}>
              <Link
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-medium text-white hover:text-[#f97316] transition-colors block py-2"
              >
                {item.name}
              </Link>
              {item.children && (
                <div className="ml-4 mt-2 space-y-2">
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      href={child.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-lg text-white/80 hover:text-white transition-colors block py-1"
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/quote"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 text-lg font-medium px-6 py-3 bg-[#f97316] text-white rounded-full text-center"
          >
            Get a Quote
          </Link>
          
          {/* Mobile Contact Info */}
          <div className="mt-8 pt-6 border-t border-white/10 space-y-4">
            <a
              href="tel:604-715-9469"
              className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              604-715-9469
            </a>
            <a
              href="mailto:info@frpinstallations.com"
              className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@frpinstallations.com
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
