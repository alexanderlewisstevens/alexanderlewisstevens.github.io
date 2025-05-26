[use]: https://github.com/Andre601/mkdocs-template/generate

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

- Install Python 3.7+
- Run `pip install -r requirements.txt`
- Use `make serve` or `mkdocs serve` to preview

This is a test yay
