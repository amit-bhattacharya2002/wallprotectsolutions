import Image from "next/image";
import Link from "next/link";

export default function PreConstructionCTA() {
  return (
    <section className="section-shell relative isolate overflow-hidden bg-white border-t border-gray-100">
      <Image
        src="/actualphotos/4.jpg"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="pointer-events-none -z-10 object-cover object-center opacity-45"
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-white/86" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="reveal rounded-xl bg-white p-6 shadow-[0_22px_60px_-42px_rgba(15,23,42,0.38)] ring-1 ring-slate-200 md:p-8 lg:p-10">
            <div className="mb-6 text-center">
              <span className="eyebrow">Pre-Construction Support</span>
              <h2 className="section-title mb-4">
                We work best when we&apos;re involved early
              </h2>
              <p className="section-lead mx-auto text-sm md:text-base">
                Wall protection and hygienic cladding scopes are frequently value-engineered — and often incorrectly. Getting us involved during design development or tender means you get accurate budget numbers, correct product specifications, and a scope that survives VE without compromising performance.
              </p>
            </div>
            <ul className="space-y-3 mb-8">
              {[
                "Product selection and specification writing",
                "Budget pricing for healthcare and institutional scopes",
                "Long-lead procurement planning",
                "Submittal package preparation",
                "Value engineering review — what to cut and what not to",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-600 text-sm">
                  <svg className="w-4 h-4 text-[#134e4a] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-4 max-sm:items-center sm:flex-row sm:items-center">
              <Link href="/pre-construction" className="inline-flex items-center gap-2 rounded-full bg-[#2a4663] px-6 py-3 font-medium text-white transition-colors hover:bg-[#3a597b]">
                Pre-construction services
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-medium text-[#134e4a] transition-all hover:gap-3">
                Discuss a project
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right: who this is for */}
          <div className="sticky-side">
            <p className="text-xs font-semibold text-slate-600 uppercase tracking-[0.18em] mb-5">Who we work with at pre-construction</p>
            <div className="grid gap-4">
            {[
              {
                role: "General Contractors",
                description: "Budget pricing, scope clarification, and long-lead identification during tender. We respond quickly and our pricing is reliable.",
              },
              {
                role: "Architects & Specification Writers",
                description: "Product selection guidance, specification language, and manufacturer comparison for Division 9 and Division 10 scopes.",
              },
              {
                role: "Project Managers & Owners",
                description: "Value engineering review that protects infection-control performance. We tell you what can be changed and what can\u2019t.",
              },
            ].map((item) => (
              <div key={item.role} className="rounded-xl border border-slate-200 bg-white p-5 shadow-[0_16px_40px_-34px_rgba(15,23,42,0.28)]">
                <h3 className="text-base font-semibold tracking-tight text-[#0f172a] mb-2">{item.role}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
