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

  const featuredFacts = [
    { label: "Sector", value: featuredProject.category },
    { label: "Location", value: featuredProject.details.location ?? "British Columbia" },
    { label: "Scope", value: featuredProject.signature ? "Signature healthcare package" : "Supply and install" },
  ];

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
            className="inline-flex items-center gap-2 text-[#64A70B] font-medium hover:gap-3 transition-all group hover:text-[#4f8f16]"
          >
            View all projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="mb-12">
          <Link href={`/projects/${featuredProject.slug}`} className="group block">
            <div className="grid overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_24px_70px_-42px_rgba(15,23,42,0.32)] transition-colors hover:border-[#64A70B]/35 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="relative aspect-16/10 overflow-hidden lg:aspect-auto lg:min-h-[420px]">
                <ProjectImage
                  src={getProjectCoverImage(featuredProject)}
                  alt={featuredProject.title}
                  variant="hero"
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-[#0f3a36]/82 via-[#0f3a36]/24 to-transparent p-6">
                  <span className="inline-flex rounded-full bg-white/92 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#10233F]">
                    Featured case study
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-start justify-center bg-linear-to-br from-white to-slate-50 p-8 text-left lg:p-12">
                <div className="mb-5 grid w-full grid-cols-1 gap-3 border-y border-slate-200 py-5 sm:grid-cols-3">
                  {featuredFacts.map((fact) => (
                    <div key={fact.label}>
                      <div className="mb-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-slate-400">{fact.label}</div>
                      <div className="text-sm font-semibold leading-snug text-[#10233F]">{fact.value}</div>
                    </div>
                  ))}
                </div>
                <h3 className="text-2xl lg:text-3xl font-semibold text-[#0f172a] tracking-tight mb-3 group-hover:text-[#64A70B] transition-colors">
                  {featuredProject.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">{featuredProject.description}</p>
                {featuredProject.details.products && (
                  <ul className="mb-6 grid max-w-sm grid-cols-1 gap-2 sm:max-w-none sm:grid-cols-2">
                    {featuredProject.details.products.slice(0, 4).map((item) => (
                      <li
                        key={item}
                        className="flex items-center justify-start gap-2 border-t border-slate-100 pt-2 text-sm text-gray-600"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#64A70B]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="flex w-full items-center justify-start gap-2 text-sm font-medium text-[#64A70B] transition-all group-hover:gap-3">
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
          <div className="mb-6 flex flex-col gap-2 text-center md:text-left">
            <p className="text-sm font-medium uppercase tracking-wider text-gray-500">More recent project work</p>
            <p className="text-sm text-slate-500">A few representative scopes across healthcare, UPCC, food service, and institutional interiors.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group cursor-pointer surface-card flex h-full flex-col overflow-hidden bg-white hover:border-[#64A70B]/35 transition-colors"
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
                  <span className="text-xs text-[#4f8f16] font-medium mb-2 block">{project.category}</span>
                  <h3 className="text-base font-semibold text-[#0f172a] mb-1 group-hover:text-[#64A70B] transition-colors tracking-tight">
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
            className="inline-flex items-center gap-2 bg-[#005EB8] text-white px-8 py-4 rounded-full font-medium hover:bg-[#004A91] transition-colors"
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
