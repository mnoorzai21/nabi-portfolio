import { navLinks } from "@/data/navigation";
import MobileMenu from "@/components/MobileMenu";

export default function Header() {
    return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4"
      >
        <a href="#home" className="text-lg font-bold tracking-tight">
          MN<span className="text-emerald-500">.</span>
        </a>

        <ul className="hidden gap-4 text-sm font-medium sm: flex sm:gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-zinc-600 transition-colors hover:text-emerald-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-600 dark:text-zinc-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
          <MobileMenu links={navLinks} />
      </nav>
    </header>
  );
}