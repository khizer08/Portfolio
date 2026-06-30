# Syed Khizer — Portfolio

A production-grade, premium dark-themed portfolio built with React, Tailwind CSS v4, Framer Motion, and an interactive React Three Fiber hero scene.

## Stack

- **React 19 + Vite** — fast dev/build tooling
- **Tailwind CSS v4** — design tokens defined in `src/index.css` (`@theme`)
- **Framer Motion** — scroll reveals, magnetic buttons, tilt cards, scroll progress bar
- **React Three Fiber + drei** — interactive 3D "stack" hero visualization (lazy-loaded, with a CSS fallback for low-power devices / reduced motion)
- **lucide-react** — icon set (GitHub/LinkedIn use custom inline SVGs since brand icons were removed upstream)

## Project structure

```
src/
  components/   reusable UI primitives (Button, Reveal, TiltCard, Navbar, Footer, ...)
  sections/     page sections (Hero, About, Skills, Projects, Achievements, Contact)
  three/        3D hero scene + Suspense/error-boundary wrapper with static fallback
  data/         portfolio.js — single source of truth for ALL content/copy
  hooks/        useScrollUtils.js — scroll spy, scrolled state, reduced-motion detection
```

## Editing your content

Everything — name, bio, skills, projects, achievements, certifications, links — lives in
**`src/data/portfolio.js`**. Edit that one file to update the entire site; no need to touch components.

To swap the resume, replace `public/Syed_Khizer_Resume.pdf` (keep the same filename, or update
`resumeUrl` in `src/data/portfolio.js`).

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview   # preview the production build locally
```

## Deployment

This is a static Vite build — deploy the `dist/` folder to Vercel, Netlify, GitHub Pages, or any
static host. For Vercel: framework preset "Vite", build command `npm run build`, output dir `dist`.

## Accessibility & performance notes

- Respects `prefers-reduced-motion` (disables the 3D scene + scroll animations duration)
- Visible keyboard focus states on all interactive elements
- Skip-to-content link for screen reader / keyboard users
- 3D scene is code-split and lazy-loaded so it never blocks first paint
