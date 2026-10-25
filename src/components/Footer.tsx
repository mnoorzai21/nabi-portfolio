import { socialLinks } from "@/data/socials";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-8 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between dark:text-zinc-400">
        <div>
          <p>© {year} Mohammad Nabi Noorzai</p>
          <p className="mt-1">
            Built with Next.js, TypeScript, and Tailwind CSS ·{" "}
            <a
              href="https://github.com/mnoorzai21/nabi-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-emerald-500"
            >
              View source
            </a>
          </p>
        </div>

        <ul aria-label="Social links" className="flex gap-6">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="hover:text-emerald-500"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}