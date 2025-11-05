## Tech choices for this site

Chosen stack (updated):

- Framework: Next.js (app router + TypeScript) — you prefer app router; I restored the `app/` directory.
- Styling: Tailwind CSS
- Component primitives / design system: shadcn/ui (Radix primitives + Tailwind-friendly components)
- Package manager: bun (preferred locally). CI can be configured to use bun in the workflow.
- Hosting: Vercel (recommended) — IMPORTANT: app router is not compatible with `next export`/GitHub Pages static export. See notes below.
- CI: GitHub Actions for build and optional deploy (to Vercel or to a static host if pages router used)

Important compatibility note:

- The Next.js app router cannot be reliably exported as a fully static site with `next export`. That means GitHub Pages is not a straightforward option when using the app router.
- Options:
  1.  Keep app router (recommended) and deploy to Vercel (or another host that supports Next.js server/ssr features). Vercel gives the easiest DX and previews.
  2.  Switch to the pages router and use `next export` to produce a static `out/` directory that can be published to GitHub Pages.

Tell me which option you'd like. I restored the app router per your preference, but if you want GitHub Pages specifically I can convert back to pages-router static export.

Next steps after your choice:

- If you want Vercel: I will keep the app router, wire shadcn/ui, and add a GitHub Actions CI that builds the app; we can connect to Vercel for automatic deploys on push.
- If you want GitHub Pages: I will migrate the app to the pages router and enable `next export` again.
