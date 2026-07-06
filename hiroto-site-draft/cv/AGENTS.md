# AGENTS.md

This folder contains the CV TeX source for the website.

## Project Rules

- Main source: `main.tex`.
- Bibliography: `refs.bib` when needed.
- Figures and source images: `figure/`.
- Build with LuaLaTeX: `latexmk -lualatex -outdir=TeX_pdf main.tex`.
- PDF and auxiliary output go in `TeX_pdf`.
- After a successful build, `.latexmkrc` copies `TeX_pdf/main.pdf` to `../assets/cv.pdf` for the website.
- Do not commit generated TeX auxiliary files or PDFs unless explicitly asked.
- Keep figure references relative, for example `figure/name.png`.
- Prefer small, reviewable edits.
- After editing, run the build when possible and check `git diff`.
- If a LaTeX error occurs, explain the cause before changing files.

## Useful Commands

```bash
latexmk -lualatex -outdir=TeX_pdf main.tex
../scripts/build-cv.sh
git status
git diff
```
