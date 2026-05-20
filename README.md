# alexanderlewisstevens.github.io

Personal website for Alex Stevens, published with GitHub Pages at:

https://alexanderlewisstevens.github.io/

This site is built from the `main` branch using Jekyll and the Academic Pages theme. GitHub Pages rebuilds and republishes the site automatically whenever changes are pushed to `main`.

## Current Site Links

- Website: https://alexanderlewisstevens.github.io/
- LinkedIn: https://www.linkedin.com/in/alex-stevens-02a492197
- University of Denver profile: https://ritchieschool.du.edu/about/people/alex-l-stevens
- Spectral Residue: https://spectralresidue.com/
- NewsLens Research Dashboard: https://lab.spectralresidue.com/

## HTML Drop Folder

The clear folder for standalone HTML files is:

```text
html/
```

Any `.html` file placed in `html/` is published by GitHub Pages.

Examples:

```text
html/example.html        -> https://alexanderlewisstevens.github.io/html/example.html
html/static-example.html -> https://alexanderlewisstevens.github.io/html/static-example.html
html/my-page.html        -> https://alexanderlewisstevens.github.io/html/my-page.html
```

There are two supported styles:

1. Plain static HTML: add a normal `.html` file with no Jekyll front matter. GitHub Pages publishes it as-is.
2. Jekyll-rendered HTML: add YAML front matter at the top so the file uses the site's layout.

Example Jekyll-rendered HTML file:

```html
---
layout: single
title: "My HTML Page"
permalink: /html/my-page.html
author_profile: true
---

<p>This page is rendered inside the site layout.</p>
```

The HTML landing page is `html/index.html`, and it is published at:

https://alexanderlewisstevens.github.io/html/

## Site Structure

- `_config.yml`: site-wide settings, author information, theme settings, and plugin configuration.
- `_data/navigation.yml`: top navigation links. Public navigation currently shows Publications, Talks, Teaching, and Portfolio.
- `_pages/`: main pages such as the homepage, talks, teaching, portfolio, and publications index.
- `_publications/`: publication entries.
- `_talks/`: talk entries.
- `_teaching/`: teaching entries.
- `_portfolio/`: portfolio entries.
- `html/`: standalone HTML drop folder.
- `files/`: static downloadable files such as PDFs or ZIP files.
- `images/`: profile image, theme images, and other image assets.
- `.devcontainer/`: VS Code Dev Container configuration.
- `Dockerfile` and `docker-compose.yaml`: local Jekyll preview environment.

The blog, sitemap, and RSS feed have been intentionally removed from this site. The template CV and Markdown guide are kept out of the public site until they have real visitor-facing content.

## Local Development

The recommended local workflow is Docker or the VS Code Dev Container. This avoids depending on the system Ruby version.

### VS Code Dev Container

Open the repository in VS Code and run:

```text
Dev Containers: Reopen in Container
```

The container starts Jekyll automatically and forwards:

```text
http://localhost:4000/
```

### Docker

From the repository root:

```bash
docker compose up --build
```

For detached mode:

```bash
docker compose up --build -d
```

Then open:

```text
http://localhost:4000/
```

Jekyll watches the site files and regenerates pages when Markdown or HTML changes. If `_config.yml` changes, restart the container.

## Deployment

Push changes to `main`:

```bash
git push origin main
```

GitHub Pages builds and deploys automatically. Build status can be checked from the repository Actions page or with:

```bash
gh run list --branch main --limit 5
```

## Notes

This repository started from the Academic Pages template, which is based on the Minimal Mistakes Jekyll theme.
