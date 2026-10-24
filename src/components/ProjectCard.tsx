import Image from "next/image";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

const imagePositionClasses = {
  top: "object-top",
  center: "object-center",
  bottom: "object-bottom",
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800">
      <Image
        src={project.image}
        alt={project.imageAlt}
        width={1200}
        height={675}
        sizes="(min-width: 768px) 50vw, 100vw"
        className={`aspect-video w-full object-cover ${imagePositionClasses[project.imagePosition ?? "top"]}`}
      />

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold">{project.title}</h3>

        <p className="mt-3 flex-1 text-zinc-600 dark:text-zinc-400">{project.description}</p>

        <ul aria-label="Technologies used" className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <li
              key={item}
              className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex gap-6 text-sm font-semibold">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-600 dark:text-emerald-400"
            >
              Live Demo
              <span className="sr-only"> of {project.title} (opens in a new tab)</span>
            </a>
          )}
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-600"
          >
            Source Code
            <span className="sr-only"> for {project.title} (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </article>
  );
}