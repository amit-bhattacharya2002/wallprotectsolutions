"use client";

import Link from "next/link";
import ProjectImage from "@/app/components/ProjectImage";
import {
  getHomepageFeaturedProject,
  getHomepageProjects,
} from "@/app/data/projects";
import { getProjectCoverImage } from "@/app/lib/project-gallery";

export default function Projects() {
  const featuredProject = getHomepageFeaturedProject();
  const otherProjects = getHomepageProjects();

  if (!featuredProject) return null;

  return (
    <section id="projects" className="section-shell-lg bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-14 flex flex-col items-center gap-6 text-center">
          <div className="section-header reveal mx-auto max-w-3xl">
            <span className="eyebrow">Our Work</span>
            <h2 className="section-title mb-4">700+ projects across BC</h2>
            <p className="section-lead mx-auto">
              Healthcare is the core of our portfolio — hospitals, UPCC clinics, and long-term care
              facilities. We also work across education, food service, and commercial sectors.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-[#134e4a] font-medium hover:gap-3 transition-all group"
          >
            View all projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="mb-12">
          <Link href={`/projects/${featuredProject.slug}`} className="group block">
            <div className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_22px_60px_-36px_rgba(15,23,42,0.3)] transition-colors hover:border-[#0d9488] lg:grid-cols-2">
              <div className="relative aspect-16/10 overflow-hidden lg:aspect-auto lg:min-h-[420px]">
                <ProjectImage
                  src={getProjectCoverImage(featuredProject)}
                  alt={featuredProject.title}
                  variant="hero"
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 bg-[#134e4a] text-white text-xs font-semibold rounded-full uppercase tracking-wider">
                    Featured Project
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-start justify-center bg-linear-to-br from-white to-slate-50 p-8 text-left lg:p-12">
                <div className="mb-4 flex items-center justify-start gap-2">
                  <span className="px-3 py-1 bg-[#134e4a]/10 text-[#134e4a] text-xs font-semibold rounded-full">
                    {featuredProject.category}
                  </span>
                  {featuredProject.signature && (
                    <span className="text-gray-400 text-xs">Signature Project</span>
                  )}
                </div>
                <h3 className="text-2xl lg:text-3xl font-semibold text-[#0f172a] tracking-tight mb-3 group-hover:text-[#0d9488] transition-colors">
                  {featuredProject.title}
                </h3>
                {featuredProject.details.location && (
                  <p className="text-sm text-gray-500 mb-4">{featuredProject.details.location}</p>
                )}
                <p className="text-gray-600 leading-relaxed mb-6">{featuredProject.description}</p>
                {featuredProject.details.products && (
                  <ul className="mb-6 grid max-w-sm grid-cols-1 gap-2 sm:max-w-none sm:grid-cols-2">
                    {featuredProject.details.products.slice(0, 4).map((item) => (
                      <li
                        key={item}
                        className="flex items-center justify-start gap-2 text-sm text-gray-600"
                      >
                        <svg className="w-4 h-4 text-[#134e4a] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="flex w-full items-center justify-start gap-2 text-sm font-medium text-[#134e4a] transition-all group-hover:gap-3">
                  View project details
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div>
          <p className="mb-6 text-center text-sm font-medium uppercase tracking-wider text-gray-500 md:text-left">
            More recent project work
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group cursor-pointer surface-card flex h-full flex-col overflow-hidden bg-white hover:border-[#0d9488] transition-colors"
              >
                <div className="relative isolate aspect-4/3 overflow-hidden">
                  <ProjectImage
                    src={getProjectCoverImage(project)}
                    alt={project.title}
                    variant="card"
                    className="object-cover transition-transform duration-700 group-hover:scale-105 filter-[saturate(0.85)_brightness(0.97)]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="text-xs text-[#134e4a] font-medium mb-2 block">{project.category}</span>
                  <h3 className="text-base font-semibold text-[#0f172a] mb-1 group-hover:text-[#0d9488] transition-colors tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 font-normal leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 bg-[#2a4663] text-white px-8 py-4 rounded-full font-medium hover:bg-[#0d9488] transition-colors"
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
