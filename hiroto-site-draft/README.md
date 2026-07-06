# Hiroto Sasaki Website Draft

Static website draft for `hirotosasaki.com`.

## Files

- `index.html`: one-page academic profile site.
- `style.css`: layout and visual styling.
- `script.js`: English/Japanese language switch.
- `assets/`: place `profile.jpg` here. `cv.pdf` is generated from `cv/main.tex`.

## Language URLs

- English: `index.html`
- Japanese: `index.html?lang=ja`

## Local Preview

Open `index.html` directly in a browser, or run a small local server:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/hiroto-site-draft/`.

## Deployment Idea

The repository includes a GitHub Pages workflow at `.github/workflows/pages.yml`.
On push to `master` or `main`, it publishes this folder.

## CV Workflow

Put the CV TeX entry file at:

```text
cv/main.tex
```

The GitHub Pages workflow builds it into:

```text
assets/cv.pdf
```

That is the file linked from the CV section of the website.

Locally, the CV follows the usual VS Code + LaTeX Workshop flow:

```bash
cd cv
latexmk -lualatex -outdir=TeX_pdf main.tex
```

The `cv/.latexmkrc` file copies the successful build result to `assets/cv.pdf`.
See `docs/CV_WORKFLOW.md` for the full CV workflow.
