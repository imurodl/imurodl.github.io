## Next.js + Tailwind + shadcn starter for imurodl.github.io

This repository will host your personal site built with Next.js, Tailwind CSS, and shadcn UI.

Local dev (using bun)

1. Install dependencies with bun:

```bash
bun install
```

2. Run dev server:

```bash
bun run dev
```

Build

```bash
bun run build
```

Important hosting note

- You asked for the app router (modern Next.js app router). The app router is not compatible with `next export` and therefore cannot be published directly to GitHub Pages as a static export.
- Options:
  - Keep the app router (what I restored) and deploy to Vercel (recommended) or any host that supports Next.js server features.
  - If you must use GitHub Pages, I can switch the project back to the pages router and add a static export workflow that publishes the `out/` directory to `gh-pages`.

Tell me which hosting option you prefer and I will wire the CI/deploy flow accordingly.

Shadcn/ui

Follow https://ui.shadcn.com/docs to integrate components. After installing the packages, you can run the shadcn CLI to generate components.

Deployment

Recommended: deploy to Vercel (connect your GitHub repo and set the custom domain). If you prefer GitHub Pages or Netlify, tell me and I'll add a deploy workflow.

# imurodl.github.io
