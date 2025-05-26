[use]: https://github.com/Andre601/mkdocs-template/generate

# Quick Start for Students

## 1. Install Python
- Download and install Python 3.11 or newer from [python.org](https://www.python.org/downloads/).
- On Windows, check the box to add Python to PATH during installation.

## 2. Clone the Repository
```
git clone <your-repo-url>
cd alexanderlewisstevens.github.io
```

## 3. Install Dependencies
```
pip install -r requirements.txt
```

## 4. Preview the Site Locally
```
mkdocs serve
```
- Open [http://127.0.0.1:8000](http://127.0.0.1:8000) in your browser.

## 5. Build the Site
```
mkdocs build
```

## 6. Push Your Changes to GitHub
```
git add .
git commit -m "Describe your changes"
git push
```

---

# Collaborative Development

## Recommended Workflow (VS Code + Dev Containers)

1. **Install [VS Code](https://code.visualstudio.com/) and the [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers).**
2. **Clone this repository.**
3. **Open the folder in VS Code.**
4. **When prompted, reopen in the Dev Container.**
   - This will build the Docker image and set up all dependencies automatically.
5. **Use the built-in terminal to run:**
   - `make serve` to preview the site at [http://localhost:8000](http://localhost:8000)
   - `make build` to build the static site

All contributors will have a consistent environment, including Python, MkDocs, and all required plugins.

## Manual Development (without Dev Containers)

- Install Python 3.11+
- Run `pip install -r requirements.txt`
- Use `make serve` or `mkdocs serve` to preview

## Troubleshooting
- If `mkdocs` is not found, ensure your Python Scripts directory is in your PATH.
- If port 8000 is in use, try `mkdocs serve -a 127.0.0.1:8001`.
- If you see permission errors, try running the command with `python -m mkdocs`.

## Common Issues
- **Broken links or images:** Check the file paths and ensure referenced files exist.
- **Dependency errors:** Run `pip install -r requirements.txt` again.

---

For more help, contact your instructor or open an issue on GitHub.