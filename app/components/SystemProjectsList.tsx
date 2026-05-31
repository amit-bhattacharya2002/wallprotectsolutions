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
                  ? "text-[#5eead4] hover:text-white"
                  : "text-[#134e4a] hover:text-[#0d9488]"
              }`}
            >
              <span
                className={`h-1.5 w-1.5 shrink-0 rounded-full transition-colors ${
                  isDark
                    ? "bg-[#5eead4] group-hover:bg-white"
                    : "bg-[#134e4a] group-hover:bg-[#0d9488]"
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
