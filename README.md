# LOGARITHIK T — Portfolio

Personal portfolio built with TanStack Start (React 19 + Vite 7) and Tailwind CSS v4.

## Requirements
- Node.js 20+
- npm (or bun / pnpm)

## Setup
```bash
npm install
```

Optionally copy the env template:
```bash
cp .env.example .env
```

## Develop
```bash
npm run dev
```
Open the URL printed in the terminal (default `http://localhost:8080`).

## Build
```bash
npm run build
```

## Preview production build
```bash
npm run start
```

## Project Structure
- `src/routes/` — file-based routes (TanStack Router). `__root.tsx` is the shell, `index.tsx` is the home.
- `src/components/portfolio/` — Hero, About, Skills, Projects, Resume, Contact, Nav, Footer.
- `src/components/ui/` — shadcn/ui primitives.
- `src/styles.css` — Tailwind v4 tokens, theme, animations.
- `public/` — static assets including `resume.pdf`.

## Deployment
Any host that supports a Node/Edge server for TanStack Start (Cloudflare Workers, Vercel, Netlify). Run `npm run build` and deploy the generated output per your host's docs.
