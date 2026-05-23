"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { projects, type Project } from "@/app/data/projects";
import ProjectImage from "@/app/components/ProjectImage";
import { getProjectCoverImage } from "@/app/lib/project-gallery";

const categories = ["All", "Healthcare", "Education", "Food & Beverage", "Special Projects"];
const categoryByHash: Record<string, string> = {
  all: "All",
  healthcare: "Healthcare",
  education: "Education",
  "food-beverage": "Food & Beverage",
  "special-projects": "Special Projects",
};

type ViewMode = "grid" | "list";
const VIEW_STORAGE_KEY = "projects-view-mode";

function ProjectBadges({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-2">
      <span className="px-2.5 py-1 bg-[#2a4663]/80 backdrop-blur-sm text-white text-xs font-medium rounded-full">
        {project.category}
      </span>
      {project.signature && (
        <span className="px-2.5 py-1 bg-[#134e4a] text-white text-xs font-semibold rounded-full">
          Signature Project
        </span>
      )}
    </div>
  );
}

function GridProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group surface-card flex h-full flex-col overflow-hidden bg-white hover:border-[#0d9488] transition-colors"
    >
      <div className="relative aspect-4/3 overflow-hidden">
        <ProjectImage
          src={getProjectCoverImage(project)}
          alt={project.title}
          variant="card"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#2a4663]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-3 left-3">
          <ProjectBadges project={project} />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-semibold text-[#0f172a] tracking-tight mb-1 group-hover:text-[#0d9488] transition-colors">
          {project.title}
        </h3>
        {project.details.location && (
          <p className="text-xs text-gray-400 mb-2">{project.details.location}</p>
        )}
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 mb-3">{project.description}</p>
        {project.details.products && project.details.products[0] && (
          <div className="mt-auto flex items-center gap-3 text-xs text-gray-400 pt-3 border-t border-gray-100">
            <span>{project.details.products[0]}</span>
          </div>
        )}
      </div>
    </Link>
  );
}

function ListProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group surface-card flex overflow-hidden bg-white transition-colors hover:border-[#0d9488]"
    >
      <div className="relative aspect-4/3 w-36 shrink-0 sm:w-44 md:w-52 lg:w-60">
        <ProjectImage
          src={getProjectCoverImage(project)}
          alt={project.title}
          variant="card"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-center gap-2 p-4 sm:p-5 md:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <ProjectBadges project={project} />
        </div>
        <h3 className="text-base font-semibold text-[#0f172a] tracking-tight transition-colors group-hover:text-[#0d9488] sm:text-lg">
          {project.title}
        </h3>
        {project.details.location && (
          <p className="text-xs text-gray-400">{project.details.location}</p>
        )}
        <p className="text-sm leading-relaxed text-gray-600 line-clamp-2 sm:line-clamp-none">
          {project.description}
        </p>
        {project.details.products && project.details.products[0] && (
          <p className="text-xs text-gray-400">{project.details.products[0]}</p>
        )}
      </div>

      <div className="hidden shrink-0 items-center pr-5 text-[#134e4a] opacity-0 transition-all group-hover:opacity-100 sm:flex">
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}

function ViewToggle({
  view,
  onChange,
}: {
  view: ViewMode;
  onChange: (view: ViewMode) => void;
}) {
  return (
    <div
      className="inline-flex rounded-full border border-gray-200 bg-[#f8fafc] p-1"
      role="group"
      aria-label="Project view mode"
    >
      <button
        type="button"
        onClick={() => onChange("grid")}
        aria-pressed={view === "grid"}
        aria-label="Thumbnail view"
        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
          view === "grid"
            ? "bg-white text-[#0f172a] shadow-sm"
            : "text-gray-500 hover:text-[#0f172a]"
        }`}
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
        <span className="hidden sm:inline">Thumbnails</span>
      </button>
      <button
        type="button"
        onClick={() => onChange("list")}
        aria-pressed={view === "list"}
        aria-label="List view"
        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
          view === "list"
            ? "bg-white text-[#0f172a] shadow-sm"
            : "text-gray-500 hover:text-[#0f172a]"
        }`}
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <span className="hidden sm:inline">List</span>
      </button>
    </div>
  );
}

export default function ProjectsGrid() {
  const [active, setActive] = useState("All");
  const [view, setView] = useState<ViewMode>("grid");

  useEffect(() => {
    const stored = window.localStorage.getItem(VIEW_STORAGE_KEY);
    if (stored === "grid" || stored === "list") {
      setView(stored);
    }
  }, []);

  useEffect(() => {
    const scrollToProjects = (behavior: ScrollBehavior) => {
      document.getElementById("all")?.scrollIntoView({ behavior, block: "start" });
    };

    const syncFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      setActive(categoryByHash[hash] ?? "All");

      if (hash) {
        requestAnimationFrame(() => scrollToProjects("smooth"));
      }
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  const handleViewChange = (nextView: ViewMode) => {
    setView(nextView);
    window.localStorage.setItem(VIEW_STORAGE_KEY, nextView);
  };

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="all" className="section-shell bg-white scroll-mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-8 md:mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#134e4a] mb-3">
            Selected Project Work
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0f172a] mb-4">
            Browse representative healthcare and institutional protection packages
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-slate-600">
            These projects reflect the types of environments we work in most often, from hospitals and UPCC clinics to
            education, food service, and specialty commercial spaces across British Columbia.
          </p>
        </div>

        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActive(cat);
                  const hash = Object.entries(categoryByHash).find(([, value]) => value === cat)?.[0] ?? "all";
                  window.history.replaceState(null, "", `#${hash}`);
                  document.getElementById("all")?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  active === cat
                    ? "bg-[#2a4663] text-white"
                    : "bg-[#f8fafc] text-gray-500 hover:text-[#0f172a] hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <ViewToggle view={view} onChange={handleViewChange} />
        </div>

        {view === "grid" ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <GridProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {filtered.map((project) => (
              <ListProjectCard key={project.slug} project={project} />
            ))}
          </div>
        )}

        <p className="text-sm text-gray-400 mt-8 text-center">
          Showing {filtered.length} of {projects.length} featured projects
          {active !== "All" && ` in ${active}`}
        </p>
      </div>
    </section>
  );
}
