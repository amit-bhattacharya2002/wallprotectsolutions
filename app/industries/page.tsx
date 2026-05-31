import { Header, Footer, PageHero, SitePhoto } from "@/app/components";
import Link from "next/link";
import { industries } from "@/app/data/industries";
import { getProjectsBySlugs } from "@/app/data/projects";
import { sitePhotos } from "@/app/data/site-photos";

export const metadata = {
  title: "Industries Served | FRP Installations Inc. | Wall Protection Solutions",
  description: "Healthcare, education, food service, commercial, and industrial wall protection across British Columbia. 75%+ healthcare focus. 700+ projects completed.",
};

const industryPhotos = sitePhotos.industries;

export default function IndustriesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Industries"
          title="Industries served"
          subtitle="Healthcare is the core of our business — 75%+ of our work. We also serve education, food service, commercial, and industrial sectors across British Columbia."
          quickLinksTitle="Industries"
          quickLinks={[
            { label: "Healthcare", href: "/healthcare" },
            { label: "Education", href: "/industries" },
            { label: "Food Service", href: "/industries" },
            { label: "Commercial", href: "/industries" },
            { label: "Industrial", href: "/industries" },
            { label: "View all systems", href: "/systems" },
          ]}
        />

        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {industries.map((industry, index) => {
              const photo = industryPhotos[industry.slug as keyof typeof industryPhotos];
              const featuredProjects = getProjectsBySlugs(industry.featuredProjectSlugs);
              return (
                <article
                  key={industry.slug}
                  id={industry.slug}
                  className={`scroll-mt-28 ${
                    index > 0 ? "border-t border-gray-200 pt-16 lg:pt-24" : ""
                  } ${index < industries.length - 1 ? "pb-16 lg:pb-24" : ""}`}
                >
                  <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <h2 className="text-2xl md:text-3xl font-semibold text-[#0f172a] tracking-tight">{industry.name}</h2>
                        {industry.primary && (
                          <span className="px-3 py-1 bg-[#134e4a]/10 text-[#134e4a] text-xs font-medium rounded-full">Primary Focus</span>
                        )}
                      </div>
                      <p className="text-gray-600 leading-relaxed font-normal mb-6">{industry.description}</p>
                      {industry.slug === "healthcare" && (
                        <Link href="/healthcare" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-[#134e4a] transition-all hover:gap-3">
                          View healthcare experience
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      )}
                      {featuredProjects.length > 0 && (
                        <div className="border-t border-slate-100 pt-6">
                          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">See projects</p>
                          <ul className="space-y-2.5">
                            {featuredProjects.map((project) => (
                              <li key={project.slug}>
                                <Link
                                  href={`/projects/${project.slug}`}
                                  className="group inline-flex items-center gap-2 text-sm font-medium text-[#134e4a] transition-colors hover:text-[#0d9488]"
                                >
                                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#134e4a] transition-colors group-hover:bg-[#0d9488]" aria-hidden />
                                  {project.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                          <Link
                            href={`/projects#${industry.projectsFilterHash}`}
                            className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#0f172a] transition-all hover:gap-3 hover:text-[#134e4a]"
                          >
                            View all {industry.name.toLowerCase()} projects
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </Link>
                        </div>
                      )}
                    </div>
                    <div>
                      <SitePhoto
                        photo={photo}
                        overlay="gradient"
                        className="mb-6 shadow-[0_22px_60px_-36px_rgba(15,23,42,0.28)]"
                      />
                      <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-4">Systems commonly installed</div>
                      <div className="flex flex-wrap gap-2">
                        {industry.systems.map((sys) => (
                          <span key={sys} className="px-4 py-2 bg-[#f8fafc] border border-gray-200 rounded-full text-sm text-gray-700 font-medium">
                            {sys}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
