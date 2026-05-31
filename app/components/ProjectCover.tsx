import type { Project } from "@/app/data/projects";
import { projectHasMedia } from "@/app/lib/project-gallery";
import ProjectImage from "./ProjectImage";

interface ProjectCoverProps {
  project: Project;
  alt: string;
  variant?: "card" | "hero" | "related";
  priority?: boolean;
  className?: string;
  placeholderClassName?: string;
}

export default function ProjectCover({
  project,
  alt,
  variant = "card",
  priority = false,
  className = "object-cover",
  placeholderClassName = "",
}: ProjectCoverProps) {
  if (!projectHasMedia(project)) {
    return (
      <div
        className={`flex h-full w-full items-center justify-center bg-[#f1f5f9] ${placeholderClassName}`}
        aria-hidden="true"
      >
        <span className="px-4 text-center text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
          Photo coming soon
        </span>
      </div>
    );
  }

  return (
    <ProjectImage
      src={project.image}
      alt={alt}
      variant={variant}
      priority={priority}
      className={className}
    />
  );
}
