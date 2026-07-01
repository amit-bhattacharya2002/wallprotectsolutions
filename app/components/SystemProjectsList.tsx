import Link from "next/link";
import { getProjectsBySlugs } from "@/app/data/projects";

interface SystemProjectsListProps {
  systemName: string;
  projectSlugs: readonly string[];
  className?: string;
  variant?: "light" | "dark";
}

export default function SystemProjectsList({
  systemName,
  projectSlugs,
  className = "",
  variant = "light",
}: SystemProjectsListProps) {
  const projects = getProjectsBySlugs(projectSlugs);
  if (projects.length === 0) return null;

  const isDark = variant === "dark";

  return (
    <div className={`border-t pt-6 ${isDark ? "border-white/15" : "border-slate-100"} ${className}`}>
      <p className={`mb-3 text-xs font-semibold uppercase tracking-[0.14em] ${isDark ? "text-white/50" : "text-gray-500"}`}>
        See projects that used {systemName}
      </p>
      <ul className="space-y-2.5">
        {projects.map((project) => (
          <li key={project.slug}>
            <Link
              href={`/projects/${project.slug}`}
              className={`group inline-flex items-center gap-2 text-sm font-medium transition-colors ${
                isDark
                  ? "text-[#9BCB4A] hover:text-white"
                  : "text-[#64A70B] hover:text-[#64A70B]"
              }`}
            >
              <span
                className={`h-1.5 w-1.5 shrink-0 rounded-full transition-colors ${
                  isDark
                    ? "bg-[#9BCB4A] group-hover:bg-white"
                    : "bg-[#005EB8] group-hover:bg-[#64A70B]"
                }`}
                aria-hidden
              />
              {project.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
