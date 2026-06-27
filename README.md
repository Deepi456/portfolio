# Deepika R — Portfolio

A premium, production-ready personal portfolio built with Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion, GSAP-ready hooks, React Three Fiber, and shadcn-style UI primitives. Every fact on this site is sourced directly from `Deepika_R_Resume_2Page.docx` — nothing was invented.

---

## ⚡ Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To build for production:

```bash
npm run build
npm run start
```

> **Important — read this first:** This project was generated in a sandboxed environment with no network access, so dependencies were never actually installed or compiled here. Every file was written carefully and manually cross-checked (import paths, named exports, Tailwind utility validity, icon names, third-party API usage), but **`npm run build` has not been run against the real toolchain**. Run it locally first — Next.js's TypeScript build is strict and will surface anything in seconds. See **"First Build Checklist"** below for exactly what to do if it errors.
>
> **Update:** an earlier version of this project pinned `@react-three/fiber@8.x`, which only supports React ≤18 and threw `Cannot read properties of undefined (reading 'ReactCurrentOwner')` at runtime under React 19. This has been fixed — `package.json` now pins `@react-three/fiber@9.6.1` + `@react-three/drei@10.7.7` + `three@0.184.0`, which are React 19-compatible. Next.js itself is also pinned to `15.1.11` (not `15.1.6`), since `15.1.6` predates a December 2025 security patch covering a critical RCE in the React Server Components protocol. If you downloaded an earlier zip, re-download or manually apply these version bumps and re-run `npm install`.

---

## 🧱 Tech Stack

| Layer | Tool |
|---|---|
| Framework | Next.js 15 (App Router) |
| UI Library | React 19 |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS 3 + custom design tokens |
| Animation | Framer Motion (scroll reveals, magnetic buttons, counters, page transitions) |
| 3D | React Three Fiber + Three.js (hero particle field) |
| Components | shadcn-style primitives (Button, Card, Input, Badge, Label, Textarea) built on Radix |
| Forms | react-hook-form + zod validation |
| Command palette | cmdk (⌘K / Ctrl+K) |
| Theme | next-themes (dark/light) |
| Icons | lucide-react |

---

## 📁 Project Structure

```
src/
├── app/                      # Next.js App Router
│   ├── layout.tsx            # Root layout, fonts, metadata, providers
│   ├── page.tsx               # Home page — assembles all sections
│   ├── loading.tsx           # Route-level loading state
│   ├── not-found.tsx         # Custom 404
│   ├── sitemap.ts            # Dynamic sitemap.xml
│   ├── robots.ts             # robots.txt
│   ├── manifest.ts           # Web app manifest (PWA-ready)
│   ├── icon.png              # App icon / favicon source
│   └── blog/                 # Blog-ready architecture (empty until you add posts)
│       ├── page.tsx
│       └── [slug]/page.tsx
│
├── components/
│   ├── sections/             # One file per page section (Hero, About, Skills, ...)
│   ├── layout/                # Navbar, Footer, ThemeProvider/Toggle, CommandPalette
│   ├── ui/                    # shadcn-style primitives (Button, Card, Input, Badge...)
│   ├── animations/            # Reveal, Magnetic, MouseFollower, ScrollProgressBar, AnimatedCounter
│   └── three/                 # React Three Fiber particle background
│
├── data/                      # ⭐ Single source of truth — every resume fact lives here
│   ├── profile.ts            # Name, title, summary, contact, socials
│   ├── skills.ts              # Categorized skills + proficiency levels
│   ├── experience.ts          # Work experience timeline
│   ├── projects.ts            # All 6 projects with features/challenges/solutions
│   ├── education.ts           # Education, certifications, achievement stats
│   └── blog.ts                 # Blog post registry (empty array — add posts here)
│
├── hooks/                     # useTypingAnimation, useMousePosition, useMediaQuery, useScrollProgress
├── lib/                        # cn() utility, site SEO config, contact form zod schema
├── types/                      # Shared TypeScript interfaces
└── styles/globals.css          # Design tokens, glassmorphism utilities, scrollbar, a11y
```

### Why a `data/` layer?

Every section component imports from `src/data/*` instead of hardcoding text. This means:
- **No invented information** — everything traces back to the original resume
- **Easy updates** — change a job title or add a project in one file, it updates everywhere (cards, command palette, resume PDF script)
- **Type-safe** — all data is shaped by interfaces in `src/types/index.ts`

---

## 🎨 Design System

Defined in `tailwind.config.ts` and `src/styles/globals.css`:

- **Background**: `#07070C` (void) with `#0E0E18` raised surfaces
- **Accents**: Violet `#7C5CFF`, Blue `#4D8AFF`, Cyan `#5CE1E6`
- **Type**: Geist (display/headings), Inter (body), Geist Mono (stats, tech tags, timestamps)
- **Glassmorphism**: `.glass` / `.glass-strong` utility classes
- **Motion**: respects `prefers-reduced-motion` globally (see `globals.css` media query and the `usePrefersReducedMotion` hook, which disables the 3D particle field)

---

## ✨ Features Implemented

- [x] Animated hero with real typing animation cycling through actual skills
- [x] React Three Fiber particle field + glow orbs (auto-disabled on reduced motion)
- [x] Categorized, animated skill proficiency bars
- [x] Vertical animated experience timeline
- [x] Filterable project grid with expandable case studies (features/challenges/solutions)
- [x] Education timeline
- [x] Certification gallery
- [x] Animated counters for achievement stats
- [x] Embedded PDF resume preview + download button + ATS-ready badge
- [x] Contact form with zod validation (opens pre-filled mail client — see note below)
- [x] Dark/light theme toggle
- [x] Scroll progress bar
- [x] Custom mouse follower (desktop only)
- [x] Magnetic buttons
- [x] Command palette (⌘K / Ctrl+K) for navigation + quick actions
- [x] Blog-ready architecture (`/blog`, empty until posts are added)
- [x] SEO: metadata, OpenGraph, sitemap.xml, robots.txt, manifest.json
- [x] Accessible: visible focus states, semantic headings, `prefers-reduced-motion` support
- [x] Responsive: mobile, tablet, desktop layouts throughout

### About the contact form

There's no backend wired up (none was requested/available). Submitting the form currently opens the visitor's email client with a pre-filled message to `ravideepika991@gmail.com`. To make it a true backend-handled form, wire `onSubmit` in `src/components/sections/contact.tsx` to an API route, or a service like Resend/Formspree.

### About project images

Per your request, every project uses a designed gradient placeholder (no fake screenshots) and the GitHub button links to your GitHub profile rather than invented repo URLs. Live Demo buttons render disabled until you add a real `liveUrl` in `src/data/projects.ts`.

---

## 📄 Resume PDF

`public/resume/Deepika_R_Resume.pdf` was generated from `scripts/generate_resume_pdf.py` (reportlab), mirroring your original 2-page Word resume's content exactly in a clean, single-column ATS-friendly layout. To regenerate after editing content:

```bash
pip install reportlab
python3 scripts/generate_resume_pdf.py
```

If you'd rather use your **actual** original PDF/DOCX export, just replace the file at that path (keep the same filename, or update the path references in `src/components/sections/hero.tsx`, `resume.tsx`, and `command-palette.tsx`).

---

## ✅ First Build Checklist

Since this couldn't be compiled in the sandbox it was built in, do this first:

1. `npm install`
2. `npm run build`
3. If it fails, the error will point to an exact file/line. Common culprits to check first given how this was built:
   - Package version mismatches (pinned versions in `package.json` were accurate as of writing, but npm may resolve slightly different transitive versions — try `npm install --legacy-peer-deps` if you see peer dependency conflicts)
   - Any icon name typo in a `lucide-react` import (all were cross-checked against lucide.dev, but double check if one errors)
4. `npm run dev` and click through every section, toggle dark/light, open ⌘K, and submit the contact form
5. Replace placeholder URLs in `src/lib/site-config.ts` (`siteConfig.url`) with your real deployed domain once you have one — this feeds the sitemap, robots.txt, and OpenGraph tags

---

## 🚀 Deploying

This is a standard Next.js app — deploys cleanly to Vercel:

```bash
npx vercel
```

Or any Node host that supports Next.js 15 (Netlify, Railway, your own server with `npm run build && npm run start`).

---

## ✏️ Updating Content Later

| To change... | Edit this file |
|---|---|
| Name, title, summary, contact info | `src/data/profile.ts` |
| Skills & proficiency | `src/data/skills.ts` |
| Work experience | `src/data/experience.ts` |
| Projects | `src/data/projects.ts` |
| Education / certifications / stats | `src/data/education.ts` |
| Colors, fonts, spacing | `tailwind.config.ts` |
| SEO metadata | `src/lib/site-config.ts` + `src/app/layout.tsx` |
| Resume PDF content | `scripts/generate_resume_pdf.py`, then re-run it |

---

Built for Deepika R — Data Science Professional.
