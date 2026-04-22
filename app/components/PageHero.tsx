"use client";

import Link from "next/link";
import type { ReactNode } from "react";

interface QuickLink {
  label: string;
  href: string;
}

interface MetaItem {
  value: string;
  label: string;
}

interface BackLink {
  href: string;
  label: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  /**
   * Small accent label rendered above the title, e.g. "Healthcare" or
   * "Hygienic Cladding". Shows in mint (`#5eead4`) caps.
   */
  eyebrow?: string;
  /**
   * Optional inline badge element rendered alongside the eyebrow — use for
   * tags like "Signature Project".
   */
  badge?: ReactNode;
  /**
   * Small "← Back to X" link rendered above everything else. Use on detail
   * pages that need an explicit return path.
   */
  backLink?: BackLink;
  /**
   * Compact stat strip rendered below the subtitle, separated by a thin
   * rule. Helps heroes feel "full" on pages that have proof points.
   */
  meta?: MetaItem[];
  quickLinks?: QuickLink[];
  quickLinksTitle?: string;
  supportingContent?: ReactNode;
  subtitleClassName?: string;
  /**
   * @deprecated The breadcrumb is now rendered by `<PageBreadcrumb>` in
   * `app/layout.tsx`. This prop is accepted for back-compat but ignored.
   */
  breadcrumb?: string;
  /**
   * @deprecated Hero height is now content-driven. This prop is accepted
   * for back-compat but ignored.
   */
  fullHeight?: boolean;
}

function isNativeAnchor(href: string) {
  return href.startsWith("mailto:") || href.startsWith("tel:") || href.includes("#");
}

const arrowPath = "M17 8l4 4m0 0l-4 4m4-4H3";

export default function PageHero({
  title,
  subtitle,
  eyebrow,
  badge,
  backLink,
  meta,
  quickLinks,
  quickLinksTitle,
  supportingContent,
  subtitleClassName,
}: PageHeroProps) {
  const hasEyebrowRow = Boolean(eyebrow || badge);
  return (
    <section className="relative overflow-hidden bg-[#0f212a] pt-14 pb-16 md:pt-20 md:pb-20 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0 bg-linear-to-br from-[#2a4663] via-[#3a597b] to-[#2a4663]" />
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />
      {/* Ambient orbs — two complementary glows for a richer, less empty feel */}
      <div className="pointer-events-none absolute -top-32 right-[-8%] h-[520px] w-[520px] rounded-full bg-[#5eead4]/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-[-25%] left-[-8%] h-[440px] w-[440px] rounded-full bg-[#134e4a]/30 blur-[160px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-left">
        <div
          className={
            quickLinks
              ? "grid lg:grid-cols-[1fr_280px] gap-12 lg:gap-16 items-start"
              : undefined
          }
        >
          <div className="text-left">
            {backLink && (
              <Link
                href={backLink.href}
                className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors mb-6"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                {backLink.label}
              </Link>
            )}

            {hasEyebrowRow && (
              <div className="flex flex-wrap items-center gap-3 mb-4">
                {eyebrow && (
                  <span className="text-[#0d9488] text-xs md:text-sm font-semibold uppercase tracking-[0.18em]">
                    {eyebrow}
                  </span>
                )}
                {badge}
              </div>
            )}

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-6 max-w-3xl">
              {title}
            </h1>

            {subtitle && (
              <p
                className={`max-w-3xl font-normal leading-relaxed text-white/78 ${
                  subtitleClassName ?? "text-lg"
                }`}
              >
                {subtitle}
              </p>
            )}

            {meta && meta.length > 0 && (
              <div className="mt-10 flex flex-wrap gap-x-10 gap-y-6 border-t border-white/10 pt-8">
                {meta.map((item) => (
                  <div key={item.label}>
                    <div className="text-2xl md:text-3xl font-semibold text-[#5eead4] tracking-tight">
                      {item.value}
                    </div>
                    <div className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-white/55">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {supportingContent && (
              <div className="mt-10">{supportingContent}</div>
            )}
          </div>

          {quickLinks && (
            <div className="hidden lg:block text-left">
              <p className="text-xs font-medium text-white/45 uppercase tracking-[0.14em] mb-3">
                {quickLinksTitle ?? "Quick links"}
              </p>
              <div className="space-y-0.5">
                {quickLinks.map((link) =>
                  isNativeAnchor(link.href) ? (
                    <a
                      key={`${link.label}-${link.href}`}
                      href={link.href}
                      className="group flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-sm text-white/65 hover:text-white hover:bg-white/5 transition-all"
                    >
                      {link.label}
                      <svg
                        className="w-3.5 h-3.5 shrink-0 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d={arrowPath}
                        />
                      </svg>
                    </a>
                  ) : (
                    <Link
                      key={`${link.label}-${link.href}`}
                      href={link.href}
                      className="group flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-sm text-white/65 hover:text-white hover:bg-white/5 transition-all"
                    >
                      {link.label}
                      <svg
                        className="w-3.5 h-3.5 shrink-0 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d={arrowPath}
                        />
                      </svg>
                    </Link>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
