"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { SitePhotoMeta } from "@/app/data/site-photos";

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
   * "Hygienic Cladding". Shows in mint (`#9BCB4A`) caps.
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
  /** Visual surface for inner-page heroes. */
  visual?: "dark" | "photo" | "editorial";
  /** Tone for photo-backed heroes. Defaults to the darker photo treatment. */
  photoTone?: "dark" | "lightBlue" | "blueGreen";
  /** Optional real project photo used by the photo-backed hero variant. */
  backgroundPhoto?: SitePhotoMeta | string;
  /** Tighter bottom padding for long hero titles on system pages. */
  compact?: boolean;
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

function resolveBackgroundPhoto(photo?: SitePhotoMeta | string) {
  if (!photo) return null;
  return typeof photo === "string" ? { src: photo, alt: "" } : photo;
}

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
  visual = "dark",
  photoTone = "dark",
  backgroundPhoto,
  compact = false,
}: PageHeroProps) {
  const hasEyebrowRow = Boolean(eyebrow || badge);
  const paddingClass = compact
    ? "pt-16 pb-12 md:pt-20 md:pb-14 lg:pt-24 lg:pb-16"
    : "pt-16 pb-16 md:pt-22 md:pb-20 lg:pt-28 lg:pb-24";
  const isEditorial = visual === "editorial";
  const isPhoto = visual === "photo";
  const isLightBluePhoto = isPhoto && photoTone === "lightBlue";
  const isBlueGreenPhoto = isPhoto && photoTone === "blueGreen";
  const needsProminentPhotoText = !isEditorial;
  const resolvedPhoto = resolveBackgroundPhoto(backgroundPhoto);
  const sectionClass = isEditorial
    ? "min-h-[440px] bg-[#f8fafc] text-[#0f172a]"
    : "grain-overlay min-h-[480px] brand-blue-surface text-white";
  const titleClass = isEditorial
    ? "text-[#0f172a]"
    : "text-white [text-shadow:_0_2px_6px_rgb(7_21_34_/_0.7),_0_4px_28px_rgb(7_21_34_/_0.55)]";
  const eyebrowClass = isEditorial ? "text-[#64A70B]" : "text-[#9BCB4A]";
  const subtitleClass = isEditorial
    ? "text-slate-600"
    : "text-white [text-shadow:_0_1px_4px_rgb(7_21_34_/_0.72),_0_3px_18px_rgb(7_21_34_/_0.5)]";
  const quickLabelClass = isEditorial
    ? "text-slate-500"
    : "text-white/88 [text-shadow:_0_2px_12px_rgb(7_21_34_/_0.58)]";
  const quickLinkClass = isEditorial
    ? "border-slate-200/80 bg-white/70 text-slate-700 hover:border-[#64A70B]/35 hover:bg-white hover:text-[#64A70B]"
    : needsProminentPhotoText
      ? "border-white/34 bg-[#07365a]/76 text-white shadow-[0_20px_48px_-30px_rgba(0,18,40,0.95)] backdrop-blur-md hover:border-[#9BCB4A]/70 hover:bg-[#063253]/88 hover:text-white"
      : "border-white/10 bg-white/6 text-slate-100 hover:border-[#9BCB4A]/45 hover:bg-white/10 hover:text-[#9BCB4A]";
  const quickIconClass = isEditorial ? "text-[#64A70B]" : "text-[#9BCB4A]";

  return (
    <section className={`page-hero relative overflow-hidden ${sectionClass} ${paddingClass}`}>
      {isPhoto && resolvedPhoto ? (
        <>
          <Image
            src={resolvedPhoto.src}
            alt=""
            aria-hidden="true"
            fill
            priority
            sizes="100vw"
            className="object-cover scale-[1.02] opacity-[0.58] saturate-[0.9] contrast-110"
          />
          {isBlueGreenPhoto || isLightBluePhoto || isPhoto ? (
            <>
              <div className="absolute inset-0 bg-linear-to-r from-[#0868C4]/84 via-[#0d6fc7]/66 to-[#0868C4]/6" />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,21,34,0.45)_0%,rgba(7,21,34,0.28)_48%,rgba(7,21,34,0.1)_100%)]" />
              <div className="absolute inset-0 bg-linear-to-b from-[#071522]/15 via-transparent to-[#071522]/35" />
              <div className="absolute inset-y-0 left-0 w-full max-w-[980px] bg-linear-to-r from-[#071522]/25 via-[#071522]/10 to-transparent" />
            </>
          ) : null}
        </>
      ) : isEditorial ? (
        <>
          <div className="absolute inset-x-0 top-0 h-px bg-slate-200/90" />
          <div className="absolute inset-0 bg-linear-to-b from-white via-[#f8fafc] to-[#eef5f4]" />
          <div className="absolute inset-0 opacity-[0.045]" style={{
            backgroundImage: "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }} />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-linear-to-r from-[#0868C4] via-[#0d6fc7] to-[#0868C4]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,21,34,0.78)_0%,rgba(7,21,34,0.56)_48%,rgba(7,21,34,0.28)_100%)]" />
          <div className="absolute inset-0 bg-linear-to-b from-[#071522]/32 via-transparent to-[#071522]/58" />
          <div className="absolute inset-0 opacity-[0.055]" style={{
            backgroundImage: "linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.16) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }} />
          <div className="absolute inset-x-0 top-0 h-px bg-white/15" />
        </>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-left">
        <div
          className={
            quickLinks
              ? "grid lg:grid-cols-[1fr_320px] gap-10 lg:gap-16 items-start"
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
                  <span className={`${eyebrowClass} text-xs md:text-sm font-semibold uppercase tracking-[0.18em]`}>
                    {eyebrow}
                  </span>
                )}
                {badge}
              </div>
            )}

            <h1 className={`mb-6 max-w-5xl font-[var(--font-red-hat-display)] text-4xl font-bold tracking-tight ${titleClass} text-balance md:text-5xl lg:text-6xl`}>
              {title}
            </h1>

            {subtitle && (
              <p
                className={`max-w-3xl text-pretty font-[var(--font-red-hat-display)] font-medium leading-relaxed ${subtitleClass} ${
                  subtitleClassName ?? "text-lg"
                }`}
              >
                {subtitle}
              </p>
            )}

            {meta && meta.length > 0 && (
              <div className={`mt-10 flex flex-wrap gap-x-10 gap-y-6 border-t pt-8 ${isEditorial ? "border-slate-200" : "border-white/12"}`}>
                {meta.map((item) => (
                  <div key={item.label}>
                    <div className={`text-2xl md:text-3xl font-semibold tracking-tight ${isEditorial ? "text-[#64A70B]" : "text-[#9BCB4A]"}`}>
                      {item.value}
                    </div>
                    <div className={`mt-1 text-xs font-medium uppercase tracking-[0.14em] ${isEditorial ? "text-slate-500" : "text-white/55"}`}>
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
              <p className={`mb-3 text-xs font-semibold uppercase tracking-[0.16em] ${quickLabelClass}`}>
                {quickLinksTitle ?? "Quick links"}
              </p>
              <div className="space-y-2.5">
                {quickLinks.map((link) =>
                  isNativeAnchor(link.href) ? (
                    <a
                      key={`${link.label}-${link.href}`}
                      href={link.href}
                      className={`group flex items-center justify-between gap-3 border px-4 py-3.5 text-sm font-semibold shadow-[0_18px_42px_-34px_rgba(15,23,42,0.65)] transition-all ${quickLinkClass}`}
                    >
                      {link.label}
                      <svg
                        className={`w-3.5 h-3.5 shrink-0 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all ${quickIconClass}`}
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
                      className={`group flex items-center justify-between gap-3 border px-4 py-3.5 text-sm font-semibold shadow-[0_18px_42px_-34px_rgba(15,23,42,0.65)] transition-all ${quickLinkClass}`}
                    >
                      {link.label}
                      <svg
                        className={`w-3.5 h-3.5 shrink-0 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all ${quickIconClass}`}
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
