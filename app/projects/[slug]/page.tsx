import { notFound } from "next/navigation";
import Link from "next/link";
import { Header, Footer } from "@/app/components";
import { projects, getProjectBySlug, getAllProjectSlugs } from "@/app/data/projects";

// Generate static params for all projects
export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({
    slug: slug,
  }));
}

// Generate metadata for each project
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };
  
  return {
    title: `${project.title} | FRP Installations`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  
  if (!project) {
    notFound();
  }

  // Get related projects (same category, excluding current)
  const relatedProjects = projects
    .filter(p => p.category === project.category && p.slug !== project.slug)
    .slice(0, 2);

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-dvh bg-[#0f172a] pt-32 pb-20 lg:pt-40 lg:pb-28 flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]" />
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 text-left">
            <div className="max-w-3xl">
              <Link 
                href="/projects" 
                className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Projects
              </Link>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-[#0d9488] text-sm font-medium uppercase tracking-wider block">
                  {project.category}
                </span>
                {project.signature && (
                  <span className="inline-flex items-center rounded-full bg-[#0d9488]/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#5eead4]">
                    Signature Project
                  </span>
                )}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-6 max-w-3xl">
                {project.title}
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-2xl font-normal leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {/* Main Image */}
                <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-xl mb-10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h2 className="text-2xl font-semibold text-[#0f172a] mb-6">Project Overview</h2>
                <p className="text-gray-600 leading-relaxed font-normal text-lg mb-8">
                  {project.fullDescription}
                </p>

                {/* Gallery */}
                {project.gallery && project.gallery.length > 1 && (
                  <div className="mt-10">
                    <h3 className="text-xl font-semibold text-[#0f172a] mb-6">Project Gallery</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {project.gallery.map((img, index) => (
                        <div key={index} className="aspect-[4/3] rounded-xl overflow-hidden">
                          <img
                            src={img}
                            alt={`${project.title} - Image ${index + 1}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-[#f8fafc] rounded-2xl p-8 sticky top-32">
                  <h3 className="text-lg font-semibold text-[#0f172a] mb-6">Project Details</h3>
                  <div className="space-y-5">
                    {project.details.location && (
                      <div>
                        <div className="text-xs text-gray-600 uppercase tracking-wider mb-1">Location</div>
                        <div className="text-[#0f172a] font-medium">{project.details.location}</div>
                      </div>
                    )}
                    {project.details.squareFootage && (
                      <div>
                        <div className="text-xs text-gray-600 uppercase tracking-wider mb-1">Square Footage</div>
                        <div className="text-[#0f172a] font-medium">{project.details.squareFootage}</div>
                      </div>
                    )}
                    {project.details.duration && (
                      <div>
                        <div className="text-xs text-gray-600 uppercase tracking-wider mb-1">Duration</div>
                        <div className="text-[#0f172a] font-medium">{project.details.duration}</div>
                      </div>
                    )}
                    {project.details.products && (
                      <div>
                        <div className="text-xs text-gray-600 uppercase tracking-wider mb-2">Products Used</div>
                        <div className="flex flex-wrap gap-2">
                          {project.details.products.map((product) => (
                            <span key={product} className="text-sm bg-white px-3 py-1.5 rounded-full text-gray-600 border border-gray-200">
                              {product}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <Link
                      href="/quote"
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#0f172a] text-white px-6 py-3 rounded-full font-medium hover:bg-[#f97316] transition-colors"
                    >
                      Start Similar Project
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <section className="py-20 lg:py-28 bg-[#f8fafc]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <h2 className="text-2xl font-semibold text-[#0f172a] mb-12">Related Projects</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {relatedProjects.map((relatedProject) => (
                  <Link
                    key={relatedProject.slug}
                    href={`/projects/${relatedProject.slug}`}
                    className="group"
                  >
                    <div className="relative aspect-[4/3] mb-6 overflow-hidden rounded-xl bg-gray-100">
                      <img
                        src={relatedProject.image}
                        alt={relatedProject.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <span className="text-sm text-[#f97316] font-medium mb-2 block">
                      {relatedProject.category}
                    </span>
                    <h3 className="text-xl font-semibold text-[#0f172a] mb-2 tracking-tight group-hover:text-[#f97316] transition-colors">
                      {relatedProject.title}
                    </h3>
                    <p className="text-gray-600 font-normal">
                      {relatedProject.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

      </main>
      <Footer />
    </>
  );
}
