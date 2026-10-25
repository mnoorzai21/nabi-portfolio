import { socialLinks } from "@/data/socials";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="mx-auto w-full max-w-5xl px-6 py-24"
    >
      <h2 id="contact-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
        Contact
      </h2>

      <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
        I’m open to remote roles and to hybrid or on-site software engineering roles in San
        Diego. The best way to reach me is email.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {socialLinks.map((contact) => (
          <div
            key={contact.label}
            className="rounded-lg border border-zinc-200 p-6 dark:border-zinc-800"
          >
            <h3 className="text-sm font-semibold uppercase tracking-widest text-emerald-500">
              {contact.label}
            </h3>
            <a
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="mt-2 block break-words font-medium hover:text-emerald-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-600"
            >
              {contact.display}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}