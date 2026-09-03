# Contributing to Gitcraft

Thank you for helping improve Gitcraft. This project aims to stay small, accurate, readable, and useful as a Git reference.

## Before you start

- Check existing issues and pull requests before proposing duplicate work.
- Read the relevant page and confirm the command or workflow against Git documentation or a disposable test repository.
- Keep one focused improvement per branch and pull request.

## Contribution workflow

1. Fork [gitcraft](https://github.com/saqibbedar/gitcraft) on GitHub.
2. Clone your fork and add the original repository as `upstream`.

   ```bash
   git clone https://github.com/<your-username>/gitcraft.git
   cd gitcraft
   git remote add upstream https://github.com/saqibbedar/gitcraft.git
   ```

3. Update your local `main` branch.

   ```bash
   git fetch upstream
   git switch main
   git pull --ff-only upstream main
   ```

4. Create a contribution branch. Do not work directly on `main`.

   ```bash
   git switch -c docs/<short-description>
   ```

5. Make the change, build the documentation, and inspect the result.

   ```bash
   uv run zensical build
   git status --short
   git diff
   ```

6. Commit the focused change and push the branch to your fork.

   ```bash
   git add <files>
   git commit -m "docs: clarify stash recovery"
   git push --set-upstream origin docs/<short-description>
   ```

7. Open a pull request from your fork to `saqibbedar/gitcraft:main`. Explain what changed and include the validation you ran.

## Documentation standards

- Prefer short, semantic titles that describe the user task.
- Explain what a command does before showing it.
- Use platform tabs only when commands genuinely differ.
- Use admonitions for important notes, tips, and warnings; do not hide essential instructions in them.
- Use Mermaid diagrams for workflows that are easier to understand visually. Flowcharts should use `flowchart TD` and the project spacing directive.
- Add front matter with a useful `title`, `description`, and relevant search `tags`.
- Link to Markdown source files, not generated HTML files.
- Avoid claims that depend on a particular Git host unless the page says so.

## Scope

Useful future topics include Git tags, `.gitignore` edge cases, Git LFS, remote synchronization, recovery, and collaboration practices. Advanced Git internals and debugging are intentionally outside the current scope.
