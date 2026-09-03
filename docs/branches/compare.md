---
title: Compare branches
description: Compare Git branch commits and file changes before merging or opening a pull request.
tags:
  - Git
  - Branch
  - Command
  - Reference
---

# Compare branches

Compare branches before merging to understand both the commits and the resulting file changes.

## Compare file changes

```bash
# Show changes from main to feature.
git diff main..feature

# Show a summary of changed files.
git diff --stat main..feature

# Show only changed paths.
git diff --name-status main..feature
```

The two-dot form compares the tips of the two branches. Replace `main` and `feature` with your actual branch names.

## Compare commits

```bash
# Commits reachable from feature but not main.
git log --oneline main..feature

# Commits reachable from either branch but not both.
git log --oneline --left-right main...feature
```

## Compare with the common ancestor

To see what a feature branch introduced since it diverged from `main`:

```bash
git diff main...feature
```

This is often the most useful view before a pull request because it compares the feature with the branch point rather than comparing only the two current tips.

!!! tip "Inspect without changing branches"

    `git diff` and `git log` do not merge, switch, or modify either branch.
