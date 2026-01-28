import { PageHero, Footer, Header } from "@/app/components";
import Link from "next/link";
import { projects } from "@/app/data/projects";

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero 
          title="Our Projects"
          subtitle="Explore our recent wall protection installations across British Columbia."
          breadcrumb="Projects"
        />

        {/* Projects Grid */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Filter Note */}
            <div className="mb-12">
              <p className="text-gray-600 font-normal">
                The below projects showcase our recent wall protection installations across British Columbia. 
                Click on any project to view full details.
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="group"
                >
                  <div className="relative aspect-[4/3] mb-6 overflow-hidden rounded-xl bg-gray-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-[#0f172a]/0 group-hover:bg-[#0f172a]/20 transition-colors duration-300" />
                    
                    {/* View Project Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="bg-white text-[#0f172a] px-6 py-2 rounded-full text-sm font-medium">
                        View Project
                      </span>
                    </div>
                  </div>
                  <span className="text-sm text-[#f97316] font-medium mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold text-[#0f172a] mb-2 tracking-tight group-hover:text-[#f97316] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 font-normal leading-relaxed">
                    {project.description}
                  </p>
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
