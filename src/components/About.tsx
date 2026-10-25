type Fact = {
    label: string;
    value: string;
};

const facts: Fact[] = [
    { label: "Location", value: "San Diego, CA" },
    { label: "Education", value: "B.S. Computer Science, SDSU (Dec 2024)" },
    { label: "Focus", value: "Full-stack development & FinTech" },
    { label: "Open to", value: "Remote, or hybrid/on-site in San Diego" },
];

export default function About() {
    return (
        <section
            id="about"
            aria-labelledby="about-heading"
            className="mx-auto w-full max-w-5xl px-6 py-24"
        >
            <h2 id="about-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
                About Me
            </h2>

            <div className="mt-8 max-w-2xl space-y-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                <p>
                    I’m a software engineer with a B.S. in Computer Science from San Diego State
                    University (December 2024). I enjoy building applications that solve real
                    problems, and turning ideas into fast, practical, user-friendly products.
                </p>
                <p>
                    I’m also an active day trader, and that shapes what I build. I’m developing a
                    full-stack stock scanner that filters for momentum stocks using relative
                    volume, float, and fresh news catalysts, along with a trading journal for
                    tracking performance and discipline. Working in a domain I know well has
                    taught me to design software around how people actually use it.
                </p>
                <p>
                    Right now I’m focused on full-stack development with React, Next.js,
                    TypeScript, and Node.js, and I’m expanding into PostgreSQL and AWS. I’m
                    looking for a role where I can keep growing as an engineer, contribute to
                    meaningful products, and write clean, maintainable code with a team that
                    values learning.
                </p>
            </div>

            <dl className="mt-12 grid gap-4 sm:grid-cols-2">
                {facts.map((fact) => (
                    <div
                        key={fact.label}
                        className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800"
                    >
                        <dt className="text-sm font-semibold uppercase tracking-widest text-emerald-500">
                            {fact.label}
                        </dt>
                        <dd className="mt-1">{fact.value}</dd>
                    </div>
                ))}
            </dl>
        </section>
    );
}