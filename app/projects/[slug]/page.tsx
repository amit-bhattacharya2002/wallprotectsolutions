import { notFound } from "next/navigation";
import Link from "next/link";
import { Header, Footer, PageHero } from "@/app/components";
import ProjectDetailMedia from "@/app/components/ProjectDetailMedia";
import ProjectCover from "@/app/components/ProjectCover";
import { projects, getProjectBySlug, getAllProjectSlugs } from "@/app/data/projects";
import { getProjectCoverImage, projectHasMedia, resolveProjectGallery } from "@/app/lib/project-gallery";
import { getProductHref } from "@/app/lib/product-links";

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({
    slug: slug,
  }));
}

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

  const gallery = resolveProjectGallery(project);
  const coverImage = getProjectCoverImage(project);
  const hasMedia = projectHasMedia(project);

  const relatedProjects = projects
    .filter((p) => p.category === project.category && p.slug !== project.slug)
    .slice(0, 2);

  return (
    <>
      <Header />
      <main>
        <PageHero
          backLink={{ href: "/projects", label: "Back to Projects" }}
          eyebrow={project.category}
          badge={
            project.signature ? (
              <span className="inline-flex items-center rounded-full bg-[#134e4a]/25 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#0d9488]">
                Signature Project
              </span>
            ) : undefined
          }
          title={project.title}
          subtitle={project.description}
          subtitleClassName="text-lg md:text-xl"
        />

        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
              <div className="lg:col-span-2">
                <ProjectDetailMedia
                  title={project.title}
                  coverImage={coverImage}
                  coverAlt={project.title}
                  images={gallery.images}
                  hasMedia={hasMedia}
                >
                  <h2 className="text-2xl font-semibold text-[#0f172a] mb-6">Project Overview</h2>
                  <p className="text-gray-600 leading-relaxed font-normal text-lg mb-8">
                    {project.fullDescription}
                  </p>
                </ProjectDetailMedia>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-[#f8fafc] rounded-2xl p-8 sticky top-32">
                  <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#134e4a]">Project Details</h3>
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
                        <div className="text-xs text-gray-600 uppercase tracking-wider mb-3">Products Used</div>
                        <ul className="space-y-3">
                          {project.details.products.map((product) => (
                            <li key={product} className="flex items-baseline gap-2.5">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#134e4a]" aria-hidden="true" />
                              <Link
                                href={getProductHref(product)}
                                className="text-base font-medium leading-snug text-[#0f172a] underline decoration-[#134e4a]/35 underline-offset-[0.2em] transition-colors hover:text-[#134e4a] hover:decoration-[#134e4a]"
                              >
                                {product}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <Link
                      href="/quote"
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#2a4663] text-white px-6 py-3 rounded-full font-medium hover:bg-[#f97316] transition-colors"
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
                      <ProjectCover
                        project={relatedProject}
                        alt={relatedProject.title}
                        variant="related"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <span className="text-sm text-[#f97316] font-medium mb-2 block">
                      {relatedProject.category}
                    </span>
                    <h3 className="text-xl font-semibold text-[#0f172a] mb-2 tracking-tight group-hover:text-[#f97316] transition-colors">
                      {relatedProject.title}
                    </h3>
                    <p className="text-gray-600 font-normal">{relatedProject.description}</p>
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
