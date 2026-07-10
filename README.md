# Tarachand Kumawat — Portfolio

A single-page portfolio built with React + Vite, styled around a "systems architecture" theme, with a dark/light toggle. Deploys as a free static site on GitHub Pages.

## 1. Local setup

Requires [Node.js](https://nodejs.org/) 18+ installed.

```bash
# from inside this project folder
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`) to preview the site locally.

## 2. Project structure

```
├── public/
│   ├── resume/                 → my downloadable resume PDF
│   ├── certificates/           → certificate image + PDF
│   └── favicon.svg
├── src/
│   ├── components/             → one file per section (Hero, About, Skills, ...)
│   ├── data/resumeData.js      → ALL my content lives here — edit this file
│   │                             to update text, add projects, certifications, etc.
│   ├── hooks/                  → theme toggle + scroll-reveal animation hooks
│   ├── App.jsx
│   ├── index.css               → design tokens (colors, fonts, spacing)
│   └── main.jsx
├── index.html
├── vite.config.js              → base path is set to /tarachand-kumawat/
└── package.json
```

To update any content (job history, projects, links, etc.) in the future, I only need to edit `src/data/resumeData.js` — the components read from it automatically.

## 3. Deploying to GitHub Pages

This repo is already configured for `https://tckumawat16.github.io/tarachand-kumawat/`.


### Deploy

```bash
npm run deploy
```

This command (via the `gh-pages` package) will:
1. Run `npm run build` automatically (via the `predeploy` script) — this compiles the site into a `dist/` folder.
2. Push the contents of `dist/` to a `gh-pages` branch on GitHub repo.

### Enable Pages (only needed the first time)

1. Go to repo on GitHub → **Settings** → **Pages**.
2. Under "Build and deployment" → **Source**, select **Deploy from a branch**.
3. Branch: choose `gh-pages`, folder `/ (root)`. Save.
4. Wait 1–2 minutes. Site will be live at:
   **https://tckumawat16.github.io/tarachand-kumawat/**

### Updating the site later

Whenever I need to make changes:

```bash
git add .
git commit -m "Update portfolio content"
git push origin main        # keeps source code backed up on GitHub
npm run deploy               # publishes the updated build to gh-pages
```

## 4. Customizing

- **Colors/fonts**: edit the CSS variables at the top of `src/index.css`.
- **Content**: edit `src/data/resumeData.js`.
- **Resume file**: replace `public/resume/Tarachand_Kumawat_Resume.pdf` with an updated version (keep the same filename, or update the path in `resumeData.js`).
- **Certificates**: add new entries to the `certifications` array in `resumeData.js`, and drop the image/PDF into `public/certificates/`.
