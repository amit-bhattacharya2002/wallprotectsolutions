import { Footer, Header, PageHero } from "@/app/components";
import Link from "next/link";

export const metadata = {
  title: "Healthcare Experience | FRP Installations Inc. | Wall Protection Solutions",
  description: "16+ Urgent Primary Care Centres completed across BC. Major hospital wall protection work including VGH, Lions Gate, Surrey Memorial, and more. Healthcare-specialist interior protection subcontractor.",
};

const proofBlocks = [
  { number: "700+", label: "Projects Completed" },
  { number: "16+", label: "UPCC Clinics Completed" },
  { number: "75%+", label: "Healthcare Work" },
  { number: "5M+", label: "Sq Ft Installed" },
];

const upccClinics = [
  { name: "Surrey Newton UPCC", gc: "KDS" },
  { name: "Chilliwack UPCC", gc: "KDS" },
  { name: "Mission UPCC", gc: "KDS" },
  { name: "Port Coquitlam UPCC", gc: "KDS" },
  { name: "Cloverdale UPCC", gc: "KDS" },
  { name: "Port Moody UPCC", gc: "KDS" },
  { name: "East Richmond UPCC", gc: "CDC" },
  { name: "Burnaby Edmonds UPCC", gc: "CDC" },
  { name: "Langley UPCC", gc: "CDC" },
  { name: "South Surrey UPCC", gc: "CDC" },
  { name: "Nanaimo UPCC", gc: "Tectonica" },
  { name: "Ucluelet UPCC", gc: "Tectonica" },
  { name: "Duncan UPCC", gc: "Tectonica" },
  { name: "Cranbrook UPCC", gc: "Chandos" },
  { name: "Vancouver SE UPCC", gc: "Chandos" },
  { name: "Kamloops UPCC", gc: "True" },
  { name: "Seymour Clinic", gc: "" },
];

const hospitals = [
  "Vancouver General Hospital (VGH)",
  "Lions Gate Hospital",
  "Royal Columbian Hospital",
  "Surrey Memorial Hospital",
  "Abbotsford Regional Hospital",
  "Peace Arch Hospital",
  "Richmond Hospital",
  "UBC Hospital (UBCH)",
  "BC Cancer — Vancouver",
  "BC Cancer — Surrey",
  "St. Joseph's Hospital",
  "Langley Memorial Hospital",
  "Royal Jubilee Hospital",
  "Mission Memorial Hospital",
  "Lily's Community Health Centre / VCH DTES",
];

const healthcareSystems = [
  {
    name: "Hygienic Wall Cladding",
    detail: "Altro Whiterock (welded seamless), Puraguard, True North, AM-Clad",
    href: "/systems/hygienic-wall-cladding",
  },
  {
    name: "Wall Protection Systems",
    detail: "Construction Specialties Acrovyn, Inpro, Ricochet crash rails, corner guards, wall guards",
    href: "/systems/wall-protection",
  },
  {
    name: "FRL / Decorative Wall Panels",
    detail: "Panolam FRL (400+ colours), Formica HardStop for healthcare corridors and public spaces",
    href: "/systems/frl-decorative",
  },
  {
    name: "Wet Wall Systems",
    detail: "Avonite Wet Walls for healthcare washrooms, shower rooms, and wet areas",
    href: "/systems/wet-wall",
  },
  {
    name: "Architectural Specialties",
    detail: "Expansion joints, entrance mat systems, cubicle curtain tracks — Division 10",
    href: "/systems/architectural-specialties",
  },
  {
    name: "FRP Wall Systems",
    detail: "Traditional FRP for support spaces, utility rooms, kitchens, and washdown areas",
    href: "/systems/frp-wall-systems",
  },
];

const credibilityPoints = [
  "Experience in active healthcare facilities and live renovation environments",
  "Manufacturer-trained and approved installer for Altro hygienic wall systems",
  "Understanding of infection-control classifications by room type",
  "Ability to specify appropriate system level for each clinical space",
  "Submittal, shop drawing, and closeout documentation capability",
  "WorkSafe BC compliant with healthcare site safety requirements",
  "Experience with health authority submittal review and approval processes",
  "GC-level project coordination background — we understand the full project",
];

export default function HealthcarePage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="BC&apos;s specialist healthcare interior protection subcontractor"
          subtitle="Healthcare is not a sector we work in occasionally; it is the core of our business. We have completed 16+ Urgent Primary Care Centres, worked in BC's major hospitals, and installed wall protection and hygienic systems in active clinical environments across the province."
          subtitleClassName="text-lg md:text-xl"
          breadcrumb="Healthcare Experience"
          quickLinksTitle="On this page"
          quickLinks={[
            { label: "UPCC Portfolio", href: "/healthcare#upcc" },
            { label: "Hospital Experience", href: "/healthcare#hospitals" },
            { label: "Healthcare Systems", href: "/healthcare#systems" },
            { label: "Pre-Construction Support", href: "/pre-construction" },
            { label: "Get a Quote", href: "/quote" },
          ]}
          supportingContent={
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {proofBlocks.map((block) => (
                <div key={block.label} className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <div className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-1">{block.number}</div>
                  <div className="text-white/65 text-sm">{block.label}</div>
                </div>
              ))}
            </div>
          }
        />

        {/* Featured Project */}
        <section className="section-shell-lg bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-sm font-medium text-[#134e4a] tracking-wider uppercase mb-4 block">
                  Featured Project
                </span>
                <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] tracking-tight mb-6">
                  Lily&apos;s Community Health Centre / VCH DTES — Vancouver
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed font-normal mb-6">
                  Lily&apos;s Community Health Centre represents the company&apos;s largest completed healthcare interior protection package at approximately <span className="font-semibold text-[#0f172a]">$550,000</span>. This Vancouver Coastal Health facility serves the Downtown Eastside community with a full range of primary care and community health services.
                </p>
                <p className="text-gray-600 leading-relaxed font-normal mb-8">
                  The scope included supply and installation of wall protection systems, hygienic wall cladding, FRL decorative panels, wet wall systems, and architectural specialties throughout the facility — a complete interior protection package delivered as a single accountable subcontract.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/quote"
                    className="inline-flex items-center gap-2 bg-[#2a4663] text-white px-6 py-3 rounded-full font-medium hover:bg-[#3a597b] transition-colors"
                  >
                    Discuss a similar project
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="surface-card-muted p-8 lg:p-10">
                <div className="text-xs text-gray-500 uppercase tracking-widest mb-6">Project Details</div>
                <div className="space-y-5">
                  {[
                    { label: "Client", value: "Vancouver Coastal Health" },
                    { label: "Facility", value: "Lily's Community Health Centre, DTES Vancouver" },
                    { label: "Contract Value", value: "Approx. $550,000" },
                    { label: "Scope", value: "Complete interior protection package — wall protection, hygienic cladding, FRL panels, wet walls, arch. specialties" },
                    { label: "Note", value: "Company's largest single healthcare interior protection package to date" },
                  ].map((item) => (
                    <div key={item.label} className="border-b border-gray-100 pb-5 last:border-0 last:pb-0">
                      <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">{item.label}</div>
                      <div className="text-[#0f172a] font-medium text-sm">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* UPCC Portfolio */}
        <section id="upcc" className="section-shell-lg bg-[#f8fafc] scroll-mt-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-14">
              <span className="text-sm font-medium text-[#134e4a] tracking-wider uppercase mb-4 block">
                UPCC Portfolio
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] tracking-tight mb-6">
                16+ Urgent Primary Care Centres completed across BC
              </h2>
              <p className="text-gray-600 leading-relaxed font-normal">
                The Province of British Columbia&apos;s Urgent and Primary Care Centre program has been one of our most significant areas of healthcare work. We have completed interior protection scopes for 16+ UPCC facilities across the province, working with multiple general contractors.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {upccClinics.map((clinic) => (
                <div key={clinic.name} className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-5 py-4">
                  <div className="w-2 h-2 rounded-full bg-[#134e4a] flex-shrink-0" />
                  <div>
                    <div className="font-medium text-[#0f172a] text-sm">{clinic.name}</div>
                    {clinic.gc && <div className="text-xs text-gray-500 mt-0.5">GC: {clinic.gc}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hospital Experience */}
        <section id="hospitals" className="section-shell-lg section-shell-dark bg-[#2a4663] scroll-mt-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <span className="text-sm font-medium text-[#0d9488] tracking-wider uppercase mb-4 block">
                  Hospital Experience
                </span>
                <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">
                  Major hospital work across British Columbia
                </h2>
                <p className="text-white/70 leading-relaxed font-normal mb-8">
                  Beyond the UPCC program, we have supplied and installed interior protection systems in many of BC&apos;s largest and most recognized hospital facilities — from major Vancouver acute care hospitals to regional facilities across the province.
                </p>
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-2 bg-[#134e4a] text-white px-6 py-3 rounded-full font-medium hover:bg-[#0d9488] transition-colors"
                >
                  Discuss a healthcare project
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {hospitals.map((hospital) => (
                  <div key={hospital} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#5eead4] flex-shrink-0" />
                    <span className="text-white/80 text-sm">{hospital}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Healthcare Systems */}
        <section id="systems" className="section-shell-lg bg-white scroll-mt-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-14">
              <span className="text-sm font-medium text-[#134e4a] tracking-wider uppercase mb-4 block">
                Systems We Install
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] tracking-tight mb-6">
                Healthcare systems commonly installed
              </h2>
              <p className="text-gray-600 leading-relaxed font-normal">
                We supply and install the full range of interior protection systems required in healthcare construction — from fully welded seamless hygienic cladding to corridor wall protection, decorative FRL panels, and Division 10 architectural specialties.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {healthcareSystems.map((system) => (
                <Link
                  key={system.name}
                  href={system.href}
                  className="group p-6 border border-gray-200 rounded-xl hover:border-[#0d9488] transition-colors"
                >
                  <h3 className="text-lg font-semibold text-[#0f172a] mb-3 group-hover:text-[#0d9488] transition-colors">
                    {system.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-normal mb-4">{system.detail}</p>
                  <div className="flex items-center gap-2 text-[#134e4a] text-sm font-medium">
                    Learn more
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Healthcare Contractors Trust Us */}
        <section className="section-shell-lg bg-[#f8fafc]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-sm font-medium text-[#134e4a] tracking-wider uppercase mb-4 block">
                  Why Healthcare Contractors Trust Us
                </span>
                <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] tracking-tight mb-6">
                  Healthcare experience that goes beyond the product
                </h2>
                <p className="text-gray-600 leading-relaxed font-normal mb-8">
                  Working in healthcare environments requires more than knowing how to install a wall panel. It requires understanding clinical spaces, infection-control requirements, documentation standards, and the constraints of working in or near active facilities.
                </p>
                <ul className="space-y-4">
                  {credibilityPoints.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#134e4a] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="surface-card-muted p-10 lg:p-12">
                <div className="text-slate-400 text-xs uppercase tracking-widest mb-6">Pre-Construction Support</div>
                <h3 className="text-2xl font-semibold text-[#0f172a] mb-4">
                  Involved early. Engaged throughout.
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  We engage at pre-construction to help GCs and design teams make the right system decisions before they hit the wall on site. We review room-by-room requirements, flag transitions, and help select the appropriate product level for each clinical space.
                </p>
                <p className="text-slate-500 leading-relaxed text-sm mb-8">
                  This includes value-engineering support — helping find appropriate alternates where a specified product is over or under-specified for the actual infection-control requirement and budget.
                </p>
                <Link
                  href="/pre-construction"
                  className="inline-flex items-center gap-2 text-[#134e4a] font-medium hover:gap-3 transition-all"
                >
                  Pre-construction & specification support
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
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
