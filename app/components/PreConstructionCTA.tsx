import Link from "next/link";

const supportSteps = [
  {
    phase: "Tender",
    title: "Scope review and budget pricing",
    description: "We review drawings, specs, alternates, and risk areas so the number going in is tied to a buildable scope.",
  },
  {
    phase: "Submittals",
    title: "Samples, data sheets, and shop drawings",
    description: "We prepare the package project teams need to keep approvals moving across manufacturers and system types.",
  },
  {
    phase: "Procurement",
    title: "Lead times and substitutions",
    description: "We flag long-lead materials early and recommend practical alternates when schedule or budget pressure appears.",
  },
  {
    phase: "Site",
    title: "Transitions and closeout",
    description: "We coordinate details at corners, doors, wet zones, adjacent finishes, and documentation before they become field issues.",
  },
];

export default function PreConstructionCTA() {
  return (
    <section className="section-shell bg-white border-t border-gray-100">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:gap-16 lg:items-start">
          <div className="reveal">
            <div className="mb-6 border-b border-slate-200 pb-6">
              <span className="eyebrow">Pre-Construction Support</span>
              <h2 className="section-title mb-4 max-w-xl">
                We work best when we&apos;re involved early
              </h2>
              <p className="section-lead text-sm md:text-base">
                Wall protection and hygienic cladding scopes are frequently value-engineered, and often incorrectly. Getting us involved during design development or tender means the budget, product selection, and field details are tied together early.
              </p>
            </div>
            <ul className="mb-8 space-y-3">
              {[
                "Specification and product alignment",
                "Budget pricing for healthcare and institutional work",
                "Value engineering that protects performance",
                "Submittals, samples, and closeout support",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-600 text-sm">
                  <svg className="w-4 h-4 text-[#64A70B] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-4 max-sm:items-center sm:flex-row sm:items-center">
              <Link href="/pre-construction" className="inline-flex items-center gap-2 rounded-full bg-[#005EB8] px-6 py-3 font-medium text-white transition-colors hover:bg-[#004A91]">
                Pre-construction services
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-medium text-[#64A70B] transition-all hover:gap-3 hover:text-[#4f8f16]">
                Discuss a project
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="reveal reveal-stagger-1">
            <div className="overflow-hidden rounded-[1.25rem] border border-slate-200 bg-[#f8fafc]">
              <div className="grid border-b border-slate-200 bg-white px-5 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 sm:grid-cols-[0.34fr_0.66fr] md:px-6">
                <span>Phase</span>
                <span className="hidden sm:block">How we reduce scope risk</span>
              </div>
              {supportSteps.map((item) => (
                <div key={item.phase} className="grid gap-3 border-b border-slate-200 bg-white/70 px-5 py-5 last:border-b-0 sm:grid-cols-[0.34fr_0.66fr] md:px-6">
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#4f8f16]">{item.phase}</div>
                  <div>
                    <h3 className="mb-2 text-base font-semibold tracking-tight text-[#0f172a]">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 grid gap-4 border-t border-slate-200 pt-5 sm:grid-cols-3">
              {["GCs", "Architects", "Owners / PMs"].map((role) => (
                <div key={role} className="text-sm font-semibold text-slate-700">{role}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
