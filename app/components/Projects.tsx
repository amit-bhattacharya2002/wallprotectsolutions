"use client";

import { useState } from "react";
import Link from "next/link";

const projects = [
  {
    slug: "crunch-fitness",
    title: "Crunch Fitness",
    category: "Fitness",
    description: "Complete wall protection installation for high-traffic gym facility with 5,000+ SF coverage.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
  },
  {
    slug: "breathe-medical-manufacturing",
    title: "Breathe Medical Manufacturing",
    category: "Healthcare",
    description: "Medical manufacturing facility with cleanroom-grade FRP panels meeting strict sanitary requirements.",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&h=600&fit=crop",
  },
  {
    slug: "craft-beer-market-kelowna",
    title: "Craft Beer Market Kelowna",
    category: "Food & Beverage",
    description: "Commercial kitchen and food preparation areas with sanitary FRP panels meeting health authority standards.",
    image: "https://images.unsplash.com/photo-1555658636-6e4a36218be7?w=800&h=600&fit=crop",
  },
  {
    slug: "fraser-health-authority",
    title: "Fraser Health Authority",
    category: "Healthcare",
    description: "Urgent and Primary Care Center with medical-grade FRP meeting strict health authority requirements.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
  },
  {
    slug: "langley-cannabis-producer",
    title: "Langley Cannabis Producer",
    category: "Agriculture",
    description: "Climate-controlled cultivation facility with full wall coverage across 13,000 SF.",
    image: "https://images.unsplash.com/photo-1589244159943-460088ed5c92?w=800&h=600&fit=crop",
  },
  {
    slug: "bcit-cari-lab",
    title: "BCIT CARI Lab",
    category: "Education",
    description: "Laboratory wall protection for research facility with specialized sanitary requirements.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop",
  },
  {
    slug: "starbucks-fraser-hwy",
    title: "Starbucks Fraser Hwy",
    category: "Food & Beverage",
    description: "Back-of-house kitchen and prep areas with durable FRP wall protection for daily operations.",
    image: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800&h=600&fit=crop",
  },
  {
    slug: "flight-simulator-room",
    title: "Flight Simulator Room",
    category: "Education",
    description: "Specialized wall protection installation for aviation training facility with unique requirements.",
    image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&h=600&fit=crop",
  },
];

const categories = ["All", "Healthcare", "Food & Beverage", "Fitness", "Agriculture", "Education"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="bg-[#f8fafc] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 lg:mb-16">
          <div className="max-w-2xl">
            <span className="text-sm font-medium text-[#f97316] tracking-wider uppercase mb-4 block">
              Our Work
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#0f172a] tracking-tight leading-[1.1] mb-6">
              Featured projects
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed font-normal">
              Explore our recent wall protection installations across British Columbia.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-[#0f172a] font-medium hover:text-[#f97316] transition-colors self-start lg:self-auto group"
          >
            All projects
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#0f172a] text-white shadow-lg"
                  : "bg-white text-gray-600 hover:text-[#0f172a] border border-gray-200 hover:border-gray-400"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* View Project Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-white text-[#0f172a] px-6 py-3 rounded-full text-sm font-medium shadow-lg">
                    View Project
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-sm text-[#f97316] font-medium mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-xl md:text-2xl font-semibold text-[#0f172a] mb-3 tracking-tight group-hover:text-[#f97316] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 font-normal leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="shrink-0 w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-[#0f172a] group-hover:border-[#0f172a] transition-all duration-300">
                    <svg 
                      className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
