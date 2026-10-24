import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="mx-auto w-full max-w-5xl px-6 py-24"
    >
      <h2 id="projects-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
        Projects
      </h2>
      <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
        A selection of things I’ve built, from real-time market tools to full-stack web apps.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}