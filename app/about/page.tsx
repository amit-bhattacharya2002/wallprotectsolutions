import { PageHero, Footer, Header, VrcaBadge, ProcoreBadge, AboutStory, AboutPhilosophy } from "@/app/components";
import Link from "next/link";
import { sitePhotos } from "@/app/data/site-photos";

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
          visual="photo"
          backgroundPhoto={sitePhotos.about.story}
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
          supportingContent={
            <div className="flex flex-wrap items-center gap-5 sm:gap-6">
              <ProcoreBadge imgClassName="h-12 w-auto md:h-14" />
              <VrcaBadge variant="white" imgClassName="h-10 w-auto md:h-12" />
            </div>
          }
        />

        <AboutStory />

        {/* Stats */}
        <section className="brand-blue-surface py-14 lg:py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
                Company Snapshot
              </h2>
              <p className="text-white/70 font-normal max-w-2xl mx-auto">
                Numbers that reflect our depth of experience in healthcare and institutional interior protection.
              </p>
            </div>
            <div className="brand-glass overflow-hidden">
              <div className="grid gap-px bg-white/20 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-white/5 px-6 py-7 text-center">
                    <div className="text-5xl md:text-6xl font-semibold text-white mb-2 tracking-tight">
                      {stat.number}
                    </div>
                    <div className="font-normal text-white/80">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Core Differentiators */}
        <section className="py-14 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-10 grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-end lg:gap-12">
              <div className="max-w-2xl">
                <span className="text-sm font-medium text-[#64A70B] tracking-wider uppercase mb-4 block">
                  Why Contractors Choose Us
                </span>
                <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] tracking-tight mb-6">
                  More than a subcontractor — a construction partner
                </h2>
                <p className="text-gray-600 leading-relaxed font-normal">
                  General contractors and design teams choose us because we bring more to the project than installation labour. We bring product knowledge, specification depth, and the project management discipline that comes from a commercial GC background.
                </p>
              </div>
              <div className="flex justify-start lg:justify-end">
                <div className="border-l-2 border-[#64A70B] pl-6 leading-none" aria-label="FRP Installations Inc. | Wall Protection Solutions">
                  <span className="block text-2xl font-semibold tracking-tight text-[#0f172a] md:text-3xl">
                    FRP Installations Inc.
                  </span>
                  <span className="mt-3 block text-sm font-semibold uppercase tracking-[0.18em] text-[#64A70B] md:text-base">
                    Wall Protection Solutions
                  </span>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
              {differentiators.map((item, index) => (
                <div key={item.title} className="border border-gray-200 p-6 transition-colors hover:border-[#64A70B] lg:p-7">
                  <div className="text-sm text-[#64A70B] font-medium mb-4">0{index + 1}</div>
                  <h3 className="text-xl font-semibold text-[#0f172a] mb-3">{item.title}</h3>
                  <p className="text-gray-600 font-normal leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <AboutPhilosophy />

        {/* Clients */}
        <section className="bg-white pt-14 pb-8 lg:pt-20 lg:pb-10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-8">
              <span className="text-sm font-medium text-[#64A70B] tracking-wider uppercase mb-4 block">
                Clients & Facilities
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] tracking-tight mb-4">
                Trusted by BC&apos;s leading healthcare builders
              </h2>
              <p className="text-gray-600 font-normal max-w-2xl mx-auto">
                We are proud to have supplied and installed interior protection systems in some of British Columbia&apos;s most prominent healthcare and institutional facilities.
              </p>
            </div>
            <ul className="divide-y divide-gray-200 border-y border-gray-200 md:flex md:flex-wrap md:justify-center md:gap-3 md:divide-y-0 md:border-0">
              {clients.map((client) => (
                <li
                  key={client}
                  className="py-3.5 text-sm font-medium text-gray-700 md:rounded-full md:border md:border-gray-200 md:bg-[#f8fafc] md:px-6 md:py-3 md:text-center"
                >
                  {client}
                </li>
              ))}
            </ul>
            <div className="mt-12 text-center">
              <Link
                href="/healthcare"
                className="inline-flex items-center gap-2 text-[#64A70B] font-medium hover:gap-3 transition-all"
              >
                View our full healthcare experience
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Memberships & Affiliations */}
        <section className="bg-white pb-14 lg:pb-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-8 border-t border-gray-100 pt-12 sm:grid-cols-[1fr_auto] lg:pt-14">
              <div className="max-w-xl">
                <span className="mb-4 block text-sm font-medium uppercase tracking-wider text-[#64A70B]">
                  Memberships &amp; Affiliations
                </span>
                <h2 className="mb-4 text-2xl font-semibold tracking-tight text-[#0f172a] md:text-3xl">
                  A proud member of the construction community
                </h2>
                <p className="font-normal leading-relaxed text-gray-600">
                  FRP Installations Inc. is a proud member of the Vancouver Regional
                  Construction Association (VRCA) and part of the Procore Construction
                  Network — reflecting our commitment to industry standards, safety,
                  and professional practice across British Columbia.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-start gap-6 sm:justify-end md:gap-8">
                <VrcaBadge variant="color" className="w-52 md:w-60" />
                <ProcoreBadge className="w-32 md:w-36" />
              </div>
            </div>
          </div>
        </section>

        {/* Brand Transition Note — globals.css sets section{padding:6–10rem}; override here */}
        <section className="border-t border-gray-100 bg-[#f8fafc] py-10 md:py-12">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
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
