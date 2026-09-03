---
title: Create and switch branches
description: Create, list, switch, and inspect Git branches using modern commands.
tags:
  - Git
  - Branch
  - Command
  - Reference
---

# Create and switch branches

Use branches to isolate a change from `main` or another line of work.

## Create a branch

```bash
# Create a branch without switching to it.
git branch <branch-name>

# Create and switch to a branch in one command.
git switch -c <branch-name>
```

The older equivalent is `git checkout -b <branch-name>`. Prefer `git switch` when performing branch operations because its intent is clearer.

## Switch branches

```bash
git switch <branch-name>
```

List local branches and show the current branch:

```bash
git branch
```

The current branch is marked with `*`.

## Start from a specific point

```bash
# Create a branch from a commit.
git switch -c <branch-name> <commit>

# Create a branch from another local branch.
git switch -c <branch-name> <existing-branch>

# Create a local branch from a remote branch.
git switch -c <branch-name> --track origin/<remote-branch>
```

!!! warning "Check uncommitted work first"

    Run `git status --short` before switching. Git may refuse the operation or carry compatible uncommitted changes into the destination branch.
