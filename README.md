# Tri-City Eye Care — Website

A concise, static informational site for Tri-City Eye Care (Kitchener, ON), built with **Astro + Tailwind**. Designed to give patients what they need (where the clinic is, who the doctors are, what services are offered) without funneling them to the phones — new patients are seen by referral.

## Stack

- [Astro 4](https://astro.build) — static site generator, ships zero JS by default
- [Tailwind CSS 3](https://tailwindcss.com) — utility-first styling
- [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) — auto-generated `sitemap-index.xml`

## Getting started

Requires **Node.js 18.17+** (LTS recommended). Install Node via [nodejs.org](https://nodejs.org) or `winget install OpenJS.NodeJS.LTS`.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output to ./dist
npm run preview  # serve the production build
```

## Project layout

```
src/
├── layouts/BaseLayout.astro     # html shell, head, nav + footer
├── components/
│   ├── Nav.astro                # site header
│   ├── Footer.astro             # site footer
│   └── DoctorCard.astro         # reusable doctor preview card
├── data/
│   ├── doctors.ts               # all 5 doctor bios (single source of truth)
│   └── clinic.ts                # address, phone, fax, map embed
├── pages/
│   ├── index.astro              # home
│   ├── doctors/index.astro      # doctors index
│   ├── doctors/[slug].astro     # per-doctor page (generated from doctors.ts)
│   ├── services.astro
│   ├── find-us.astro
│   ├── referrals.astro          # for referring providers
│   └── 404.astro
└── styles/global.css
```

## Editing content

- **Doctor bios** → [src/data/doctors.ts](src/data/doctors.ts). Each entry generates `/doctors/<slug>` automatically.
- **Address, phone, fax, hours, map** → [src/data/clinic.ts](src/data/clinic.ts).
- **Services list** → [src/pages/services.astro](src/pages/services.astro).
- **Brand colors / fonts** → [tailwind.config.mjs](tailwind.config.mjs).

## Deployment

The build output in `dist/` is plain static HTML. Drop it on any host — Cloudflare Pages, Netlify, GitHub Pages, S3+CloudFront.

For **Cloudflare Pages** (recommended): connect the GitHub repo, set build command `npm run build`, output directory `dist`.
