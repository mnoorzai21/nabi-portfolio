type HeroProps = {
  name: string;
  role: string;
  summary: string;
};

export default function Hero({ name, role, summary }: HeroProps) {
    return (
        <section
            id="home"
            aria-labelledby="hero-heading"
            className="mx-auto flex w-full max-w-5xl flex-col justify-center px-6 py-24 sm:py-32"
        >
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-500">
                {role}
            </p>

            <h1 id="hero-heading" className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
                {name}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                {summary}
            </p>

            {/* In-page anchors use <a>; next/link is for navigating between routes. */}
            <div className="mt-10 flex flex-wrap gap-4">
                <a
                    href="#projects"
                    className="rounded-md bg-emerald-600 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                >
                    View Projects
                </a>
                <a
                    href="#contact"
                    className="rounded-md border border-zinc-300 px-5 py-3 text-sm font-semibold hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 dark:border-zinc-700 dark:hover:bg-zinc-900"
                >
                    Contact Me
                </a>
            </div>
        </section>
    );
}