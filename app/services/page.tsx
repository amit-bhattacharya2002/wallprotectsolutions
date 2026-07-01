import Link from "next/link";
import { Footer, Header, PageHero, SitePhoto } from "@/app/components";
import { sitePhotos } from "@/app/data/site-photos";

export const metadata = {
  title: "FRP Services | Sales, Installation & Service | FRP Installations Inc.",
  description:
    "FRP panel sales, installation, and service across British Columbia. Wall protection and hygienic panel support for healthcare, institutional, commercial, and industrial projects.",
};

const services = [
  {
    title: "FRP Installation",
    href: "/services/frp-installation",
    summary:
      "Professional wall and ceiling panel installation for commercial kitchens, healthcare facilities, wet areas, clean rooms, and high-use spaces.",
    details: ["Site measurement", "Panel installation", "Trim and accessory coordination"],
  },
  {
    title: "FRP Sales",
    href: "/services/frp-sales",
    summary:
      "Premium FRP panels and accessories from leading manufacturers, matched to the application, specification, and budget.",
    details: ["Panel supply", "Accessory packages", "Manufacturer guidance"],
  },
  {
    title: "FRP Service",
    href: "/services/frp-service",
    summary:
      "Repair, replacement, and service support for existing FRP and wall protection installations across active facilities.",
    details: ["Panel replacement", "Damage repair", "Facility support"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          visual="photo"
          backgroundPhoto={sitePhotos.services.installation}
          eyebrow="Services"
          title="FRP sales, installation, and service"
          subtitle="A single service hub for FRP panel supply, professional installation, and ongoing wall protection support across British Columbia."
          quickLinksTitle="Service areas"
          quickLinks={[
            { label: "FRP Installation", href: "/services/frp-installation" },
            { label: "FRP Sales", href: "/services/frp-sales" },
            { label: "FRP Service", href: "/services/frp-service" },
            { label: "Get a Quote", href: "/quote" },
          ]}
        />

        <section className="border-b border-slate-200 bg-[#f8fafc] py-12 lg:py-16">
          <div className="mx-auto grid max-w-7xl items-start gap-10 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
            <SitePhoto
              photo={sitePhotos.services.sales}
              overlay="gradient"
              className="shadow-[0_22px_60px_-36px_rgba(15,23,42,0.28)]"
            />
            <div className="sticky-side">
              <span className="mb-3 block text-sm font-medium uppercase tracking-[0.16em] text-[#64A70B]">
                Construction partner
              </span>
              <h2 className="mb-4 text-2xl font-semibold tracking-tight text-[#0f172a] md:text-3xl">
                Product supply and field execution under one roof
              </h2>
              <p className="text-base leading-relaxed text-gray-600">
                We help project teams choose the right FRP wall system, coordinate material availability,
                and install the finished scope. That makes the service pages easier to migrate from older
                search traffic while giving visitors a clear path into the right service.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12 max-w-3xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#64A70B]">
                Service lines
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-[#0f172a] md:text-4xl">
                Choose the support your project needs
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group flex h-full flex-col border border-slate-200 bg-white p-7 transition-colors hover:border-[#64A70B]"
                >
                  <h3 className="mb-3 text-xl font-semibold tracking-tight text-[#0f172a] group-hover:text-[#64A70B]">
                    {service.title}
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-slate-600">{service.summary}</p>
                  <div className="mt-auto border-t border-slate-200 pt-4">
                    {service.details.map((detail) => (
                      <div key={detail} className="border-b border-slate-200 py-2 text-sm text-slate-700 last:border-b-0">
                        {detail}
                      </div>
                    ))}
                  </div>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#64A70B] transition-all group-hover:gap-3">
                    View service
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
