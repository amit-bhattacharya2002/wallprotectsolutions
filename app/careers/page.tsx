import { Footer, Header, PageHero } from "@/app/components";

export const metadata = {
  title: "Careers | FRP Installations Inc. | Wall Protection Solutions",
  description: "Join a specialist healthcare wall protection subcontractor in BC. We are looking for installers, project managers, and estimators who want to build a long-term career in a growing specialty trade.",
};

const roles = [
  {
    title: "Installers",
    description: "Experienced wall protection and panel installers for healthcare and institutional project environments. You will work on hospital renovations, UPCC clinics, and institutional facilities across BC. Experience with FRP, wall protection systems, or related trades preferred — but we train the right people.",
  },
  {
    title: "Project Managers",
    description: "Project managers to coordinate wall protection scopes on healthcare and institutional construction projects. You will manage submittals, procurement, site coordination, and closeout documentation. GC or specialty subcontractor PM experience is the best fit.",
  },
  {
    title: "Estimators",
    description: "Estimators to price wall protection, hygienic cladding, and related architectural specialty scopes. Construction estimating experience required. Familiarity with healthcare or institutional tendering preferred.",
  },
];

const whyUs = [
  "700+ projects completed across British Columbia",
  "16+ UPCC clinics — serious, repeat healthcare work",
  "Major hospital work at VGH, Lions Gate, Surrey Memorial, and others",
  "A growing business building for the long term",
  "Strong manufacturer relationships with C/S, Altro, Inpro, and Panolam",
  "A team that takes pride in doing the work properly",
];

export default function CareersPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Build something with us"
          subtitle="We are a specialist healthcare and institutional wall protection subcontractor in BC, and we are building for the long term. If you want to grow with a serious company doing serious work, we want to hear from you."
          breadcrumb="Careers"
          quickLinksTitle="Roles"
          quickLinks={[
            { label: "Installers", href: "#installers" },
            { label: "Project Managers", href: "#project-managers" },
            { label: "Estimators", href: "#estimators" },
            { label: "Send Your Resume", href: "mailto:info@frpinstallations.com?subject=Career Inquiry" },
          ]}
        />

        {/* Who we are looking for */}
        <section className="section-shell-lg bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-14">
              <span className="text-sm font-medium text-[#0d9488] tracking-wider uppercase mb-4 block">Roles</span>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] tracking-tight mb-4">Who we are looking for</h2>
              <p className="text-gray-600 leading-relaxed font-normal">We are always interested in hearing from experienced people in the wall protection, specialty interiors, and construction trade space — whether or not we have an active posting.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {roles.map((role, index) => (
                <div
                  key={role.title}
                  id={role.title.toLowerCase().replace(/\s+/g, "-")}
                  className="surface-card scroll-mt-32 p-8 hover:border-[#0d9488] transition-colors"
                >
                  <div className="text-sm text-[#0d9488] font-medium mb-4">0{index + 1}</div>
                  <h3 className="text-xl font-semibold text-[#0f172a] mb-4">{role.title}</h3>
                  <p className="text-gray-600 font-normal leading-relaxed text-sm">{role.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why work here */}
        <section className="section-shell-lg bg-[#f8fafc]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-sm font-medium text-[#0d9488] tracking-wider uppercase mb-4 block">Why Join Us</span>
                <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] tracking-tight mb-6">Serious work. Long-term growth.</h2>
                <p className="text-gray-600 leading-relaxed font-normal mb-8">
                  We are not a generalist contractor that does some wall panels on the side. Wall protection and hygienic systems are all we do — and healthcare is the core of our business. That means the work is consistent, the projects are significant, and the people we hire have a real opportunity to grow with the business.
                </p>
                <ul className="space-y-4">
                  {whyUs.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#0d9488] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="surface-card-muted p-10">
                <h3 className="text-xl font-semibold text-[#0f172a] mb-4">Get in touch</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Send us your resume and a brief note about your background. We respond to every application and are always open to conversations with the right people — whether or not we have an active posting that matches.
                </p>
                <a
                  href="mailto:info@frpinstallations.com?subject=Career Inquiry"
                  className="inline-flex items-center gap-2 bg-[#0d9488] text-white px-6 py-3 rounded-full font-medium hover:bg-[#0f766e] transition-colors"
                >
                  Send Your Resume
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
