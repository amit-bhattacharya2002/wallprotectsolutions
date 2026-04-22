import { PageHero, Footer, Header } from "@/app/components";
import Link from "next/link";

export const metadata = {
  title: "About FRP Installations Inc. | Wall Protection Solutions",
  description: "Healthcare and institutional interior protection subcontractor serving British Columbia. 700+ projects, 16+ UPCC clinics, 20 years of commercial construction experience. Supply and install wall protection systems.",
};

const stats = [
  { number: "700+", label: "Projects Completed" },
  { number: "20+", label: "Years Construction Experience" },
  { number: "16+", label: "UPCC Clinics Completed" },
  { number: "75%+", label: "Healthcare Work" },
];

const differentiators = [
  {
    title: "Supply & Install Accountability",
    description: "We do not take labour-only contracts. We supply and install complete wall protection and hygienic systems, controlling product selection, procurement, and warranty alignment. One point of accountability — not a separate supply chain for the GC to manage.",
  },
  {
    title: "Healthcare Specialization",
    description: "Healthcare represents 75%+ of our overall business. We have completed 16+ Urgent Primary Care Centres across BC and work in major hospitals throughout the province. We understand infection-control requirements, active-facility constraints, and health authority specification standards.",
  },
  {
    title: "Pre-Construction & Specification Support",
    description: "We engage at the pre-construction stage to review specifications, suggest value-engineered alternates, identify long-lead materials, and help the project team select the right system for each space. Our involvement early saves time and cost downstream.",
  },
  {
    title: "GC-Level Construction Understanding",
    description: "Our background in commercial general contracting means we understand the broader project — schedules, trade coordination, site constraints, and the documentation requirements of large healthcare projects. We speak the language of the GC and design team.",
  },
];

const philosophy = [
  "Application suitability and infection-control classification",
  "Specification alignment and health authority requirements",
  "Budget constraints and value-engineering potential",
  "Durability and long-term maintenance requirements",
  "Transitions into adjacent materials and finishes",
  "Manufacturer lead times and regional availability",
];

const clients = [
  "Vancouver General Hospital",
  "Lions Gate Hospital",
  "Surrey Memorial Hospital",
  "Royal Columbian Hospital",
  "BC Cancer — Vancouver",
  "Lily's Community Health Centre / VCH DTES",
  "16+ UPCC Clinics across BC",
  "Fraser Health Authority",
  "BCIT",
  "Multiple Restaurant Chains & Food Service Facilities",
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="About FRP Installations Inc."
          subtitle="Healthcare and institutional interior protection subcontractor serving British Columbia. We supply and install complete wall protection and hygienic systems — not labour only."
          breadcrumb="About Us"
          quickLinksTitle="Explore"
          quickLinks={[
            { label: "Healthcare Experience", href: "/healthcare" },
            { label: "Projects Portfolio", href: "/projects" },
            { label: "Systems We Install", href: "/systems" },
            { label: "Pre-Construction Support", href: "/pre-construction" },
            { label: "Contact Us", href: "/contact" },
          ]}
        />

        {/* Our Story */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-sm font-medium text-[#134e4a] tracking-wider uppercase mb-4 block">
                  Our Story
                </span>
                <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] tracking-tight mb-6">
                  Built on healthcare. Positioned for growth.
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed font-normal">
                  <p>
                    FRP Installations Inc. was founded with a background in commercial general contracting — which means we came into the wall protection space with a broader project understanding than most specialty subcontractors. We understand schedules, trade coordination, specification requirements, and the documentation demands of large institutional projects.
                  </p>
                  <p>
                    Over 20 years, healthcare became the core of our business. We have now completed over 700 projects across British Columbia, with 75% or more of our work in healthcare and institutional environments — hospitals, clinics, UPCC facilities, long-term care, and medical office buildings.
                  </p>
                  <p>
                    We are not simply an FRP installer. We are a specialist wall protection and hygienic systems subcontractor. We supply and install complete systems from leading manufacturers including Construction Specialties, Altro, Inpro, Panolam, Marlite, and others — selecting the right product for the application, not promoting a single brand.
                  </p>
                  <p>
                    Over the next 12–18 months, we are transitioning from the FRP Installations Inc. brand toward Wall Protection Solutions Inc. — a name that better reflects the breadth of what we do and the clients we serve.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-4/3 bg-[#2a4663] rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop"
                    alt="Wall protection installation team at work"
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-[#134e4a] text-white p-6 rounded-xl">
                  <div className="text-4xl font-bold">20+</div>
                  <div className="text-white/80 text-sm mt-1">Years Commercial Construction</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 lg:py-28 bg-[#2a4663]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
                Company Snapshot
              </h2>
              <p className="text-white/70 font-normal max-w-2xl mx-auto">
                Numbers that reflect our depth of experience in healthcare and institutional interior protection.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-5xl md:text-6xl font-semibold text-white mb-2 tracking-tight">
                    {stat.number}
                  </div>
                  <div className="text-white/70 font-normal">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Differentiators */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <span className="text-sm font-medium text-[#134e4a] tracking-wider uppercase mb-4 block">
                Why Contractors Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] tracking-tight mb-6">
                More than a subcontractor — a construction partner
              </h2>
              <p className="text-gray-600 leading-relaxed font-normal">
                General contractors and design teams choose us because we bring more to the project than installation labour. We bring product knowledge, specification depth, and the project management discipline that comes from a commercial GC background.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {differentiators.map((item, index) => (
                <div key={item.title} className="p-8 border border-gray-200 rounded-xl hover:border-[#0d9488] transition-colors">
                  <div className="text-sm text-[#134e4a] font-medium mb-4">0{index + 1}</div>
                  <h3 className="text-xl font-semibold text-[#0f172a] mb-3">{item.title}</h3>
                  <p className="text-gray-600 font-normal leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Selection Philosophy */}
        <section className="py-20 lg:py-28 bg-[#f8fafc]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-sm font-medium text-[#134e4a] tracking-wider uppercase mb-4 block">
                  Product Selection Philosophy
                </span>
                <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] tracking-tight mb-6">
                  The right system for the environment
                </h2>
                <p className="text-gray-600 leading-relaxed font-normal mb-6 text-lg">
                  We focus on selecting the right system for the environment rather than promoting a single manufacturer or product. Different wall protection and hygienic systems perform best in different applications, budgets, and maintenance conditions.
                </p>
                <p className="text-gray-600 leading-relaxed font-normal mb-8">
                  This is especially relevant in healthcare, where overspecifying can waste project budget and underspecifying can create long-term performance and infection-control problems.
                </p>
                <p className="text-sm font-medium text-[#0f172a] mb-4">Factors we consider in system selection:</p>
                <ul className="space-y-3">
                  {philosophy.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#134e4a] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#2a4663] rounded-2xl p-10 lg:p-12">
                <p className="text-white/40 text-xs uppercase tracking-widest mb-4">Manufacturer Partners</p>
                <p className="text-white/80 leading-relaxed mb-6">
                  Over the years we have developed particularly strong relationships with manufacturers such as Construction Specialties and Altro, whose products are widely used in healthcare and institutional environments.
                </p>
                <p className="text-white/60 leading-relaxed text-sm">
                  We regularly work with products from leading manufacturers including Construction Specialties, Altro, Inpro, Panolam, Marlite, Valto, Formica, Avonite, and others — always selecting based on the right fit for the project.
                </p>
                <div className="mt-8 pt-8 border-t border-white/10">
                  <Link
                    href="/manufacturers"
                    className="inline-flex items-center gap-2 text-[#5eead4] font-medium hover:gap-3 transition-all"
                  >
                    View all manufacturer partners
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clients */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-sm font-medium text-[#134e4a] tracking-wider uppercase mb-4 block">
                Clients & Facilities
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] tracking-tight mb-4">
                Trusted by BC's leading healthcare builders
              </h2>
              <p className="text-gray-600 font-normal max-w-2xl mx-auto">
                We are proud to have supplied and installed interior protection systems in some of British Columbia's most prominent healthcare and institutional facilities.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {clients.map((client) => (
                <span
                  key={client}
                  className="px-6 py-3 bg-[#f8fafc] border border-gray-200 rounded-full text-gray-700 font-medium"
                >
                  {client}
                </span>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link
                href="/healthcare"
                className="inline-flex items-center gap-2 text-[#134e4a] font-medium hover:gap-3 transition-all"
              >
                View our full healthcare experience
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Brand Transition Note */}
        <section className="py-16 bg-[#f8fafc] border-t border-gray-100">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <p className="text-gray-500 text-sm leading-relaxed">
              <span className="font-medium text-[#0f172a]">Brand transition in progress.</span> FRP Installations Inc. is transitioning over the next 12–18 months toward Wall Protection Solutions Inc. — a name that better reflects the full scope of the systems we supply and install. Our legal entity, contacts, and relationships remain unchanged throughout this transition.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
