"use client";

import { useState } from "react";
import type { NavLink } from "@/data/navigation";

type MobileMenuProps = {
    links: NavLink[];
};

export default function MobileMenu({ links }: MobileMenuProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="sm:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className="rounded-md p-2 text-zinc-600 hover:text-emerald-500 focus-visible:outline-2 focus-visible:outline-emerald-600 dark:text-zinc-400"
      >
        <span aria-hidden="true" className="text-2xl leading-none">
          {isOpen ? "✕" : "☰"}
        </span>
      </button>

      {isOpen && (
        <ul
          id="mobile-menu"
          className="absolute inset-x-0 top-full border-b border-zinc-200 bg-white px-6 py-2 dark:border-zinc-800 dark:bg-zinc-950"
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-base font-medium text-zinc-600 hover:text-emerald-500 dark:text-zinc-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
    );
}