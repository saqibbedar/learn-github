---
title: Rebase and synchronize a branch
description: Update a feature branch with the latest main branch and handle rebase conflicts safely.
tags:
  - Git
  - Branch
  - Command
  - Reference
---

# Rebase and synchronize a branch

Rebase replays your branch commits on top of a newer base. It keeps the branch history linear, but it rewrites commit IDs.

## Update a feature branch

```bash
# Download the latest remote commits.
git fetch origin

# Update local main.
git switch main
git pull --ff-only origin main

# Replay feature commits on the updated main.
git switch feature/<short-description>
git rebase main
```

## Resolve rebase conflicts

If Git pauses:

```bash
# Find conflicted files.
git status

# Resolve the files, then stage them.
git add <resolved-file>

# Continue replaying commits.
git rebase --continue
```

Abort and return to the pre-rebase state if the result is not what you want:

```bash
git rebase --abort
```

!!! warning "Do not rebase shared history"

    Avoid rebasing a branch other people are actively using. Rebase is best for your local feature branch before review or before updating your own pull request.

## Update a pushed branch

Because rebase changes commit IDs, update the remote branch with:

```bash
git push --force-with-lease origin feature/<short-description>
```

`--force-with-lease` protects commits pushed by someone else more effectively than `--force`.
