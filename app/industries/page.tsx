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
          visual="photo"
          backgroundPhoto={sitePhotos.industries.healthcare}
          eyebrow="Industries"
          title="Industries served"
          subtitle="Healthcare is the core of our business — 75%+ of our work. We also serve education, food service, commercial, and industrial sectors across British Columbia."
          quickLinksTitle="Industries"
          quickLinks={[
            { label: "Healthcare", href: "/healthcare" },
            { label: "Education", href: "/industries#education" },
            { label: "Food Service", href: "/industries#food-service" },
            { label: "Commercial", href: "/industries#commercial-public" },
            { label: "Industrial", href: "/industries#industrial-agricultural" },
            { label: "View all systems", href: "/systems" },
          ]}
        />

        {industries.map((industry, index) => {
          const photo = industryPhotos[industry.slug as keyof typeof industryPhotos];
          const featuredProjects = getProjectsBySlugs(industry.featuredProjectSlugs);
          const photoFirst = index % 2 === 1;

          return (
            <section
              key={industry.slug}
              id={industry.slug}
              className={`scroll-mt-28 py-16 lg:py-24 ${index % 2 === 0 ? "bg-white" : "bg-[#f8fafc]"}`}
            >
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
                  <div className={photoFirst ? "lg:order-2" : undefined}>
                    {industry.primary ? (
                      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#64A70B]">
                        Primary Focus
                      </p>
                    ) : null}
                    <h2 className="text-2xl font-semibold tracking-tight text-[#0f172a] md:text-3xl">
                      {industry.name}
                    </h2>
                    <p className="mt-5 max-w-xl text-base font-normal leading-relaxed text-gray-600">
                      {industry.description}
                    </p>
                    {industry.slug === "healthcare" ? (
                      <Link
                        href="/healthcare"
                        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#64A70B] transition-all hover:gap-3"
                      >
                        View healthcare experience
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    ) : null}
                  </div>
                  <div className={photoFirst ? "lg:order-1" : undefined}>
                    <SitePhoto
                      photo={photo}
                      overlay="gradient"
                      className="shadow-[0_22px_60px_-36px_rgba(15,23,42,0.28)]"
                    />
                  </div>
                </div>

                <div className="mt-10">
                  <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                    Systems commonly installed
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {industry.systems.map((sys) => (
                      <li
                        key={sys}
                        className={`px-3.5 py-1.5 text-sm font-medium text-slate-700 ${
                          index % 2 === 0 ? "bg-[#f8fafc]" : "bg-white"
                        }`}
                      >
                        {sys}
                      </li>
                    ))}
                  </ul>
                </div>

                {featuredProjects.length > 0 ? (
                  <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">
                        See projects
                      </p>
                      <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
                        {featuredProjects.map((project) => (
                          <li key={project.slug}>
                            <Link
                              href={`/projects/${project.slug}`}
                              className="text-sm font-medium text-[#64A70B] transition-colors hover:text-[#4f8f16]"
                            >
                              {project.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link
                      href={`/projects#${industry.projectsFilterHash}`}
                      className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-[#0f172a] transition-all hover:gap-3 hover:text-[#64A70B]"
                    >
                      View all {industry.name.toLowerCase()} projects
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                ) : null}
              </div>
            </section>
          );
        })}
      </main>
      <Footer />
    </>
  );
}
