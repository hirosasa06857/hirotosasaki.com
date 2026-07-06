#!/usr/bin/env bash
set -euo pipefail

site_dir="$(cd "$(dirname "$0")/.." && pwd)"
cv_dir="$site_dir/cv"

if [ ! -f "$cv_dir/main.tex" ]; then
  echo "No CV source found at $cv_dir/main.tex"
  echo "Put your CV TeX entry file there, then run this script again."
  exit 1
fi

cd "$cv_dir"
latexmk -lualatex -interaction=nonstopmode -halt-on-error -outdir=TeX_pdf main.tex

echo "Built $site_dir/assets/cv.pdf"
