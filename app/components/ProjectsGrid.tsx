"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { projects } from "@/app/data/projects";

const categories = ["All", "Healthcare", "Education", "Food & Beverage", "Agriculture", "Fitness", "Special Projects"];
const categoryByHash: Record<string, string> = {
  all: "All",
  healthcare: "Healthcare",
  education: "Education",
  "food-beverage": "Food & Beverage",
  agriculture: "Agriculture",
  fitness: "Fitness",
  "special-projects": "Special Projects",
};

export default function ProjectsGrid() {
  const [active, setActive] = useState("All");

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
            education, food service, agriculture, and specialty commercial spaces across British Columbia.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-12">
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

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group surface-card flex h-full flex-col overflow-hidden bg-white hover:border-[#0d9488] transition-colors"
            >
              {/* Image */}
              <div className="relative aspect-4/3 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2a4663]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-3 left-3">
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
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-base font-semibold text-[#0f172a] tracking-tight mb-1 group-hover:text-[#0d9488] transition-colors">
                  {project.title}
                </h3>
                {project.details.location && (
                  <p className="text-xs text-gray-400 mb-2">{project.details.location}</p>
                )}
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 mb-3">
                  {project.description}
                </p>
                {project.details.squareFootage && (
                  <div className="mt-auto flex items-center gap-3 text-xs text-gray-400 pt-3 border-t border-gray-100">
                    <span>{project.details.squareFootage}</span>
                    {project.details.products && project.details.products[0] && (
                      <>
                        <span>·</span>
                        <span>{project.details.products[0]}</span>
                      </>
                    )}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* Count */}
        <p className="text-sm text-gray-400 mt-8 text-center">
          Showing {filtered.length} of {projects.length} featured projects
          {active !== "All" && ` in ${active}`}
        </p>
      </div>
    </section>
  );
}
