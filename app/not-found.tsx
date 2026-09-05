import Link from "next/link";
import type { Metadata } from "next";
import { Header, Footer } from "@/app/components";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The page you requested could not be found. Explore wall protection systems, healthcare projects, or contact FRP Installations Inc. for a quote.",
  robots: { index: false, follow: true },
};

const helpfulLinks = [
  {
    href: "/systems",
    title: "Wall Protection Systems",
    description: "Hygienic cladding, FRP/FRL panels, wet wall, and more",
  },
  {
    href: "/healthcare",
    title: "Healthcare",
    description: "Hospital and clinic interior protection across BC",
  },
  {
    href: "/projects",
    title: "Projects",
    description: "700+ completed installations province-wide",
  },
  {
    href: "/quote",
    title: "Get a Quote",
    description: "Request pricing for your next project",
  },
  {
    href: "/faq",
    title: "FAQ",
    description: "Common questions about systems and installation",
  },
  {
    href: "/contact",
    title: "Contact",
    description: "Speak with our Coquitlam-based team",
  },
];

export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        <section className="relative flex min-h-dvh flex-col justify-center overflow-hidden bg-[#0f172a] text-white pt-28 md:pt-36">
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 20% 20%, rgba(0,94,184,0.55), transparent 55%), radial-gradient(ellipse 70% 50% at 90% 80%, rgba(100,167,11,0.18), transparent 50%)",
            }}
            aria-hidden
          />
          <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#9BCB4A] mb-6">
              Error 404
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight max-w-3xl mb-6">
              This page isn&apos;t on our plans.
            </h1>
            <p className="text-lg md:text-xl text-white/75 max-w-2xl leading-relaxed mb-10">
              The link may be outdated, or the page may have moved. FRP Installations
              Inc. supplies and installs healthcare and institutional wall protection
              across British Columbia — use the links below to get back on track.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-[#005EB8] hover:bg-[#004A91] text-white font-medium transition-colors"
              >
                Back to Home
              </Link>
              <Link
                href="/search"
                className="inline-flex items-center justify-center px-7 py-3.5 border border-white/30 hover:border-white/60 hover:bg-white/5 text-white font-medium transition-colors"
              >
                Search the Site
              </Link>
              <a
                href="tel:604-715-9469"
                className="inline-flex items-center justify-center px-7 py-3.5 border border-white/30 hover:border-white/60 hover:bg-white/5 text-white font-medium transition-colors"
              >
                Call 604-715-9469
              </a>
            </div>
          </div>
        </section>

        <section className="section-shell-lg bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0f172a] tracking-tight mb-3">
              Popular destinations
            </h2>
            <p className="text-gray-600 mb-10 max-w-2xl">
              Looking for systems, project examples, or a quote? These pages cover
              what most visitors need.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {helpfulLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group block border border-[#e2e8f0] p-6 hover:border-[#005EB8] hover:shadow-sm transition-all"
                >
                  <h3 className="text-lg font-semibold text-[#0f172a] group-hover:text-[#005EB8] transition-colors mb-2">
                    {link.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {link.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#005EB8]">
                    Go to page
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell bg-[#f8fafc] border-t border-[#e2e8f0]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div>
                <h2 className="text-2xl font-semibold text-[#0f172a] tracking-tight mb-2">
                  Still need help?
                </h2>
                <p className="text-gray-600 max-w-xl">
                  Our team can point you to the right system, project reference, or
                  quote path. Mon–Fri 8am–5pm PST.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <a
                  href="mailto:info@frpinstallations.com"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#005EB8] hover:bg-[#004A91] text-white font-medium transition-colors"
                >
                  info@frpinstallations.com
                </a>
                <Link
                  href="/schedule-on-site-measurement"
                  className="inline-flex items-center justify-center px-6 py-3 border border-[#005EB8] text-[#005EB8] hover:bg-[#005EB8] hover:text-white font-medium transition-colors"
                >
                  Schedule Site Measurement
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
