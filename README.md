# Ganesh Shinde – Portfolio

My personal portfolio site as an **AI product engineer & full‑stack developer**, showcasing the AI products, B2B platforms, and devtools work I’ve shipped.

The site is built with a focus on **clarity for founders and hiring managers**: fast, minimal UI, strong project case studies, and a clear story around AI systems and ownership.

## 🌐 Live

- Portfolio: https://ganeshshinde2003.netlify.app/

## 🧠 What this portfolio highlights

- **AI systems**
  - HealthAI – AI‑powered health analysis and reporting using Vertex AI (Gemini).
  - Stratifai – AI marketing strategist that turns a product URL/description into a full marketing strategy.

- **B2B & workflows**
  - Napkin – B2B buyer/seller platform with unified order and communication flows (including email‑to‑chat ingestion).

- **Developer tooling & full‑stack work**
  - Cloudinary Image Editor – multi‑source upload, albums, and advanced image editing (blur, grayscale, BG removal, generative fill).
  - SCM & CI/CD work at Black Duck – GitLab integration and dynamic pipeline generation for security scans.

The goal is to make it obvious that I can own **end‑to‑end product slices**: from data, prompts, and backend workflows to frontend UX and reliability.

## 🏗 Tech stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Components:** Custom components + utility primitives (CanvasRevealEffect, cards, grids)
- **Deployment:** Vercel

This setup follows modern Next.js portfolio best practices (App Router, TS, Tailwind, Framer Motion). [web:71]

## 🔍 Sections

- **Hero** – who I am, what I build, and what I’m open to.
- **Grid / Highlights** – 6 tiles summarizing my main strengths:
  - 0→1 AI health systems
  - AI marketing strategist (Stratifai)
  - B2B workflows & unified comms (Napkin)
  - SCM & CI/CD automation
  - Front‑end craft with purpose
  - Ownership, speed & systems thinking
- **Projects**
  - Detailed cards for HealthAI, Stratifai, Napkin, Cloudinary Image Editor (with links to live demos and repos).
- **Approach**
  - 3‑phase process for building AI products:
    1. Understand product & data
    2. Design & build the system
    3. Iterate, measure, ship
- **Experience**
  - Black Duck – Software Engineer (Frontend & CI/CD Systems)
  - Bewell – Founding AI & Full‑Stack Engineer / AI & Frontend Engineer
  - Earlier full‑stack / frontend internships (Haraay Studio, ParaTalks, OSCode, LoGrow)
- **Testimonials**
  - Real quotes from founders, CTOs, and senior engineers I’ve worked with.
- **Contact**
  - Links to GitHub, LinkedIn, and a direct way to reach me.

## 🚀 Getting started (local development)

```bash
# 1. Clone the repo
git clone https://github.com/YOUR-USERNAME/YOUR-PORTFOLIO-REPO.git
cd YOUR-PORTFOLIO-REPO

# 2. Install dependencies
npm install
# or
pnpm install

# 3. Run the dev server
npm run dev
# or
pnpm dev

# 4. Open in browser
# http://localhost:3000
```

## 🧩 Project configuration

Most of the content is driven from simple data objects:

- `NAV_LINKS` – navigation items
- `HERO` – hero name, title, subtitle, location
- `gridItems` – 6 “highlight” tiles
- `PROJECTS` – featured projects (HealthAI, Stratifai, Napkin, Cloudinary Image Editor)
- `EXPERIENCES` – work experience cards
- `TESTIMONIALS` – client and founder quotes
- `SOCIALS` – GitHub, LinkedIn, etc.

To update content, edit the corresponding data files (e.g. `data.ts` / `constants.ts`) without touching layout code.

## 📦 Scripts

```bash
# Start dev server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint
npm run lint
```

(Adjust scripts if your `package.json` uses different names.)

## 🧭 Roadmap

Things I might add over time:

- More detailed case study pages for:
  - HealthAI (architecture, evals, failure modes)
  - Stratifai (founder case study, before/after workflows)
- A dedicated “For founders” page with tailored content and CTAs.
- Light/dark mode toggle (if not already included in the template).

## 🤝 License

Personal portfolio – feel free to look at the code for inspiration, but please don’t copy it 1:1 as your own portfolio.

---

If you’re a founder or team building AI products and want someone who can own **AI + product + engineering** end‑to‑end, this portfolio is meant to show exactly that.  
You can reach me via the contact links on the site.
