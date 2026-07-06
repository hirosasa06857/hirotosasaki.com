# CV Workflow

The CV follows the same local LuaLaTeX workflow as the English TeX template.

## Files

```text
cv/main.tex
cv/refs.bib
cv/figure/
cv/TeX_pdf/
assets/cv.pdf
```

Use `cv/main.tex` as the TeX entry point. LaTeX Workshop writes the normal local build output to `cv/TeX_pdf/`.

## Local Editing

Open `hiroto-site-draft` or `hiroto-site-draft/cv` in VS Code, then edit `cv/main.tex`.

Build with LaTeX Workshop:

```text
Cmd + Option + B
```

or run:

```bash
cd hiroto-site-draft/cv
latexmk -lualatex -outdir=TeX_pdf main.tex
```

After a successful build, `cv/.latexmkrc` copies:

```text
cv/TeX_pdf/main.pdf
```

to:

```text
assets/cv.pdf
```

The website CV link points to `assets/cv.pdf`, so the local website preview updates after each successful CV build.

## GitHub Pages

On push to `master` or `main`, GitHub Actions runs:

```bash
./hiroto-site-draft/scripts/build-cv.sh
```

That uses the same `cv/main.tex` source and publishes the generated `assets/cv.pdf` with the website.

Generated PDFs and TeX auxiliary files are ignored by Git.
