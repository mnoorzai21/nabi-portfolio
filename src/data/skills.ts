export type SkillCategory = {
    title: string;
    skills: string[];
}

export const skillCategories: SkillCategory[] = [
    {
        title: "Languages",
        skills: ["TypeScript", "JavaScript", "Python", "HTML", "CSS"],
    },
    {
        title: "Frontend",
        skills: ["React", "Next.js", "Tailwind CSS", "Apollo Client", "Bootstrap"],
    },
    {
        title: "Backend",
        skills: ["Node.js", "Express", "GraphQL (Apollo Server)", "REST APIs"],
    },
    {
        title: "Databases",
        skills: ["MongoDB (Mongoose)", "PostgreSQL & SQL (learning)"],
    },
    {
        title: "Tools & DevOps",
        skills: ["Git & GitHub", "GitHub Actions (CI/CD)", "Vercel", "Render", "GitHub Pages"],
    },
];