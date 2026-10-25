import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="mx-auto w-full max-w-5xl px-6 py-24"
    >
      <h2 id="skills-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
        Skills
      </h2>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="rounded-lg border border-zinc-200 p-6 dark:border-zinc-800"
          >
            <h3 className="text-lg font-semibold">{category.title}</h3>

            <ul className="mt-4 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}