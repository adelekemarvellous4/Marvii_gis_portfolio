# Adeleke Marvellous Ayomide GIS Portfolio website

This project is a production-ready static developer/GIS portfolio. The HTML shell is intentionally small, while reusable UI, page sections, project data, and interactivity are organized into focused files.

## Folder structure

```text
Marvii_gis_portfolio/
├── index.html
├── components/
│   ├── Footer.js
│   ├── Navigation.js
│   ├── ProjectCard.js
│   └── ProjectDetailView.js
├── sections/
│   ├── AboutSection.js
│   ├── CertificationsSection.js
│   ├── ContactSection.js
│   ├── FaqSection.js
│   ├── HeroSection.js
│   ├── ProjectsSection.js
│   ├── PromisesSection.js
│   └── StatsSection.js
├── data/
│   └── projects.js
├── css/
│   ├── style.css
│   └── responsive.css
├── js/
│   └── script.js
└── assets/
```

## Files

- `index.html` -> static page shell and script order
- `components/` -> reusable UI such as navigation, footer, project cards, and project detail pages
- `sections/` -> page sections such as Hero, About, Projects, Certifications, FAQ, and Contact
- `data/projects.js` -> project content used by cards, the library, and case-study pages
- `css/style.css` -> main styling
- `css/responsive.css` -> phone and tablet responsive layout rules
- `js/script.js` -> app bootstrap, filtering, pagination, case-study routing, and interactivity
- `assets/` -> images, screenshots, certificates, icons, documents, and project visuals

## How to use

1. Keep all files in the same folder structure shown above.
2. Open `index.html` in your browser or deploy the folder to any static host.
3. Put project images inside `assets/` and update image paths in `data/projects.js`.
4. Case study links open inside the same webpage using URLs like `#project/akure-carbon`.

## Common issue

If the page opens but looks unstyled, it usually means one of these happened:

- the `css` folder is missing
- `style.css` or `responsive.css` is in the wrong location
- the file paths in `index.html` were changed

## Notes

- External resources like Google Fonts and Font Awesome still load from CDN.
- No build step is required for this static version.
- Placeholder external links can be replaced in `data/projects.js` as project assets are published.
