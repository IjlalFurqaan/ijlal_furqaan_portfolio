# 🎬 Ijlal Furqaan — Netflix-Style Portfolio

A Netflix-inspired developer portfolio built with **React + TypeScript**. Pick a profile (recruiter, developer, stalker, adventurer) and browse my experience, skills, projects, certifications, and live GitHub repos — Netflix style.



## ✨ What's inside

- 🌐 **3D intro** — rotating wireframe sphere + particle field (react-three-fiber) with the Netflix "ta-dum" on enter
- 🎭 **Audience profiles** — different landing rows for recruiters, developers, and casual visitors
- 📄 **Local content, no CMS** — everything is in [`src/data/portfolioData.ts`](src/data/portfolioData.ts); edit one file to update the whole site
- 🐙 **Live GitHub page** — fetches my latest public repos from the GitHub API at `/github`
- 💼 **Work & Education timelines** — separate pages for Deutsche Börse/Mphasis experience and Marburg/Osmania education
- 🛂 **Work permit page** — visa status at a glance for recruiters in Germany
- 📱 Fully responsive, Vercel-ready (`vercel.json` handles SPA routing)

## 🛠️ Tech Stack

React 19 · TypeScript 6 · React Router 7 · three.js + @react-three/fiber · react-icons · react-vertical-timeline-component · GitHub REST API

## 🚀 Getting started

```bash
npm install
npm start        # dev server at http://localhost:3000
npm run build    # production build in /build
```

## ✏️ Customizing

1. **All text content**: edit `src/data/portfolioData.ts` (banner, timeline, skills, projects, certifications, contact info, GitHub username).
2. **Resume button**: drop your resume as `public/resume.pdf`.
3. **Logo**: replace `src/images/ijlal-logo.svg` (used on the intro screen and navbar).
4. **Avatar**: replace `src/images/profile-avatar.svg` with your photo (update the import in `src/pages/ContactMe.tsx` if you change the filename).

## 📬 Contact

- LinkedIn: [ijlal-furqaan](https://www.linkedin.com/in/ijlal-furqaan-32b7251b6)
- GitHub: [IjlalFurqaan](https://github.com/IjlalFurqaan)
- Email: ijlalfurqaan5@gmail.com
