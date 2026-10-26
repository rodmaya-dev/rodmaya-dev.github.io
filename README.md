# Rod Maya — Portfolio

Personal portfolio of **Rodrigo "Rod" Maya**, IT Support Engineer and Data Analyst (Oracle, PL/SQL) with 10+ years of enterprise experience, currently finishing a full stack web development program and preparing for the AWS Certified Data Engineer – Associate exam.

🔗 **Live site:** https://rodmaya-dev.github.io/

The visual concept is a database: the sidebar is a schema of "tables" (about, experience, skills, projects, certifications, contact) and the hero is a typing SQL query console.

## Features

- Static, dependency-free site: plain HTML, CSS and JavaScript (ES modules), no build step.
- Content-driven: About, Experience, Skills, Projects and Certifications are rendered from JSON files.
- Project filter (all / fullstack / frontend) with links to live demos and source code.
- Typewriter query animation in the hero (respects `prefers-reduced-motion`).
- Contact section with copy-email button, WhatsApp button (number not shown on screen) and a live clock for the GMT-6 time zone.
- Optional "Download CV" button: it appears automatically only if `assets/Rod_Maya_CV.pdf` exists.
- Responsive layout, keyboard focus styles, skip link, and SEO/social metadata (Open Graph, JSON-LD).

## Project structure

```
rodmaya-dev.github.io/
├── index.html            Page structure and static metadata
├── .nojekyll             Tells GitHub Pages to skip Jekyll processing
├── css/
│   └── style.css         All styles (theme variables in :root)
├── js/
│   ├── main.js           Entry point: loads JSON and renders sections
│   ├── typewriter.js     Hero SQL typing animation
│   └── contact.js        Clock, copy email, CV button detection
├── data/
│   ├── profile.json      About (headline, intro, tags, status) and experience
│   ├── projects.json     Projects with tags, demo and code links
│   ├── skills.json       Skill groups and levels
│   └── certifications.json
└── assets/
    ├── og-image.png      Social preview image
    └── Rod_Maya_CV.pdf   (optional) enables the CV download button
```

## Run locally

The site loads its content with `fetch` and ES modules, so it must be served over HTTP (opening `index.html` by double-click will not load the data).

- **VS Code:** install the *Live Server* extension, right-click `index.html` and choose *Open with Live Server*.
- **Or with Node.js:** `npx serve .` from the project root.

## Updating the content

| To change… | Edit |
| --- | --- |
| Headline, intro, tags, status, work experience | `data/profile.json` |
| Add or edit a project | `data/projects.json` (`tags` drive the filters; `demo` and `code` are optional) |
| Skills and levels | `data/skills.json` |
| Certifications and their status | `data/certifications.json` |
| Page title, meta tags, contact buttons | `index.html` |
| Colors and fonts | CSS variables at the top of `css/style.css` |

## Deployment

The repository is named `rodmaya-dev.github.io`, so GitHub Pages publishes it automatically from the root of the default branch. Push to the branch and the site updates within a minute or two. Settings → Pages should point to the default branch and the `/ (root)` folder.

## Tech

HTML5 · CSS3 (custom properties, grid, flexbox) · JavaScript (ES modules) · IBM Plex fonts via Google Fonts · GitHub Pages

## Contact

- LinkedIn: [linkedin.com/in/rod-maya](https://linkedin.com/in/rod-maya)
- GitHub: [github.com/rodmaya-dev](https://github.com/rodmaya-dev)
- Email: rodrigomaya000@gmail.com

© 2026 Rodrigo Maya. Hand-coded, no template.