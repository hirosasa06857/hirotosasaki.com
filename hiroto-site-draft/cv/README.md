# CV Source

Put the TeX source for the CV in this folder.

Expected entry point:

```text
cv/main.tex
```

Local LaTeX Workshop output goes to:

```text
cv/TeX_pdf/main.pdf
```

After a successful build, `.latexmkrc` copies the PDF to the website path:

```text
assets/cv.pdf
```

To update the PDF locally, run this from the repository root:

```bash
./hiroto-site-draft/scripts/build-cv.sh
```

On GitHub, the Pages workflow builds `cv/main.tex` automatically before publishing the site.

See `../docs/CV_WORKFLOW.md` for details.
