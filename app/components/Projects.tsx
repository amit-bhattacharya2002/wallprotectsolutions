"use client";

import Link from "next/link";

const featuredProject = {
  slug: "fraser-health-authority",
  title: "Fraser Health Authority — UPCC",
  category: "Healthcare",
  scope: "Urgent & Primary Care Centre",
  location: "Fraser Health Region, BC",
  description:
    "Supply and install of wall protection systems, hygienic cladding, and FRP panels across a full Urgent and Primary Care Centre build-out. Coordinated directly with the GC on submittals, long-lead procurement, and phased installation to meet health authority requirements.",
  highlights: ["Full wall protection scope", "FRP & hygienic cladding", "Submittal package included", "Health authority compliant"],
  image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=800&fit=crop",
};

const otherProjects = [
  {
    slug: "bcit-cari-lab",
    title: "BCIT CARI Lab",
    category: "Education",
    description: "Sanitary FRP wall protection for a research and applied science laboratory facility.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop",
  },
  {
    slug: "langley-cannabis-producer",
    title: "Langley Cannabis Producer",
    category: "Agriculture",
    description: "13,000 SF climate-controlled cultivation facility with full FRP wall coverage.",
    image: "https://images.unsplash.com/photo-1589244159943-460088ed5c92?w=800&h=600&fit=crop",
  },
  {
    slug: "craft-beer-market-kelowna",
    title: "Craft Beer Market Kelowna",
    category: "Food & Beverage",
    description: "Commercial kitchen and food prep areas meeting health authority sanitary standards.",
    image: "https://images.unsplash.com/photo-1555658636-6e4a36218be7?w=800&h=600&fit=crop",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-shell-lg bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div className="section-header">
            <span className="eyebrow">Our Work</span>
            <h2 className="section-title mb-4">
              700+ projects across BC
            </h2>
            <p className="section-lead">
              Healthcare is the core of our portfolio — hospitals, UPCC clinics, and long-term care facilities. We also work across education, food service, agriculture, and commercial sectors.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-[#0d9488] font-medium hover:gap-3 transition-all self-start lg:self-auto group"
          >
            View all projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Featured Healthcare Project */}
        <div className="mb-12">
          <Link href={`/projects/${featuredProject.slug}`} className="group block">
            <div className="grid lg:grid-cols-2 rounded-[1.5rem] overflow-hidden border border-slate-200 hover:border-[#0d9488] transition-colors bg-white shadow-[0_22px_60px_-36px_rgba(15,23,42,0.3)]">
              {/* Image */}
              <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 bg-[#0d9488] text-white text-xs font-semibold rounded-full uppercase tracking-wider">
                    Featured Project
                  </span>
                </div>
              </div>
              {/* Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center bg-linear-to-br from-white to-slate-50">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-[#0d9488]/10 text-[#0d9488] text-xs font-semibold rounded-full">{featuredProject.category}</span>
                  <span className="text-gray-400 text-xs">{featuredProject.scope}</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-semibold text-[#0f172a] tracking-tight mb-3 group-hover:text-[#0d9488] transition-colors">
                  {featuredProject.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{featuredProject.location}</p>
                <p className="text-gray-600 leading-relaxed mb-6">{featuredProject.description}</p>
                <ul className="grid grid-cols-2 gap-2 mb-6">
                  {featuredProject.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-[#0d9488] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2 text-[#0d9488] text-sm font-medium group-hover:gap-3 transition-all">
                  View project details
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Other project sectors */}
        <div>
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-6">
            We also work across other sectors
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group cursor-pointer surface-card flex h-full flex-col overflow-hidden bg-white hover:border-[#0d9488] transition-colors"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="text-xs text-[#0d9488] font-medium mb-2 block">{project.category}</span>
                  <h3 className="text-base font-semibold text-[#0f172a] mb-1 group-hover:text-[#0d9488] transition-colors tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 font-normal leading-relaxed line-clamp-2">{project.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 bg-[#0f172a] text-white px-8 py-4 rounded-full font-medium hover:bg-[#0d9488] transition-colors"
          >
            View more projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
