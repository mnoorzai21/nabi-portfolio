# Developer Portfolio: Mohammad Nabi Noorzai

My personal portfolio site, built with Next.js, TypeScript, and Tailwind CSS. It gives recruiters and hiring managers one place to see my projects, skills, and resume, and to contact me.

**Live site:** https://mnoorzai.vercel.app

![Portfolio home page with the header, hero introduction, and buttons to view projects, contact me, and download my resume](docs/portfolio.jpg)

## Features

- Responsive single-page layout with a mobile menu for small screens
- Projects, skills, and social links rendered from typed data files, so adding a project means editing one file
- One-click resume download (PDF)
- Link preview card for LinkedIn, Slack, and other sites, using an Open Graph image generated at build time
- Accessible: semantic HTML, visible keyboard focus, and smooth scrolling that respects reduced-motion settings

## Tech Stack

- **Frontend:** Next.js 16 (App Router), React, TypeScript, Tailwind CSS, Geist font
- **Backend:** None yet; every page is statically rendered at build time (a contact form using a Server Action is planned)
- **Database:** None; content lives in TypeScript files in `src/data/`
- **Testing & CI:** ESLint and TypeScript type checking (`npm run build`); Vercel builds a preview deployment for every pull request
- **Hosting:** Vercel, deploying automatically on every merge to `main`

## How It Works

```
src/data/*.ts  →  src/components/*.tsx  →  src/app/page.tsx  →  next build (static HTML)  →  Vercel
 (content)          (UI sections)            (page layout)
```

- **Content is separate from the UI.** Each section reads its data from `src/data/` (for example `projects.ts`), so updating content never touches component code.
- **Server Components by default.** Only `MobileMenu` is a Client Component (`"use client"`), because it needs `useState` to open and close; everything else ships as plain HTML with no JavaScript.
- **SEO and sharing are handled by the App Router.** `layout.tsx` sets the metadata, canonical URL, and Open Graph tags, and `opengraph-image.tsx` generates the 1200×630 preview image.

