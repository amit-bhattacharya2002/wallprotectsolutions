"use client";

import Link from "next/link";

interface QuickLink {
  label: string;
  href: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
  quickLinks?: QuickLink[];
  quickLinksTitle?: string;
  supportingContent?: React.ReactNode;
  subtitleClassName?: string;
  fullHeight?: boolean;
}

function isNativeAnchor(href: string) {
  return href.startsWith("mailto:") || href.startsWith("tel:") || href.includes("#");
}

export default function PageHero({
  title,
  subtitle,
  breadcrumb,
  quickLinks,
  quickLinksTitle,
  supportingContent,
  subtitleClassName,
  fullHeight = true,
}: PageHeroProps) {
  return (
      <section className={`relative bg-[#0f172a] pt-32 pb-20 lg:pt-40 lg:pb-28 ${fullHeight ? "min-h-dvh flex items-center" : ""}`}>
      <div className="absolute inset-0 bg-linear-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`, backgroundSize: "40px 40px" }}
      />
      <div className="absolute top-1/3 right-0 h-[420px] w-[420px] rounded-full bg-[#0d9488]/8 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-left">
        <div className={quickLinks ? "grid lg:grid-cols-[1fr_260px] gap-12 lg:gap-16 items-center" : undefined}>
          {/* Left: text */}
          <div className="text-left">
            {breadcrumb && (
              <p className="text-[#0d9488] text-sm font-medium uppercase tracking-wider mb-4">
                {breadcrumb}
              </p>
            )}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-6">
              {title}
            </h1>
            {subtitle && (
              <p className={`max-w-3xl font-normal leading-relaxed text-white/78 ${subtitleClassName ?? "text-lg"}`}>
                {subtitle}
              </p>
            )}
            {supportingContent && (
              <div className="mt-10">
                {supportingContent}
              </div>
            )}
          </div>

          {/* Right: quick links */}
          {quickLinks && (
            <div className="hidden lg:block text-left">
              <p className="text-xs font-medium text-white/45 uppercase tracking-wider mb-3">
                {quickLinksTitle ?? "Quick links"}
              </p>
              <div className="space-y-0.5">
                {quickLinks.map((link) => (
                  isNativeAnchor(link.href) ? (
                    <a
                      key={link.href}
                      href={link.href}
                      className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-sm text-white/65 hover:text-white hover:bg-white/6 transition-all group"
                    >
                      {link.label}
                      <svg className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 4l-4 4m4-4H3" />
                      </svg>
                    </a>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-sm text-white/65 hover:text-white hover:bg-white/6 transition-all group"
                    >
                      {link.label}
                      <svg className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 4l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  )
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
