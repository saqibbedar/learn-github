---
title: Understand origin and upstream remotes
description: Configure origin and upstream remote roles for personal forks and ordinary GitHub repositories.
tags:
  - Git
  - Remote
  - GitHub
  - Reference
---

# Understand `origin` and `upstream`

Remote names describe roles. `origin` normally means the repository you cloned or your writable fork. `upstream` commonly means the original project in a fork workflow.

## Inspect remotes

```bash
git remote -v
git remote get-url origin
```

## Add or change a remote

```bash
git remote add upstream https://github.com/<owner>/<repository>.git
git remote set-url origin https://github.com/<your-username>/<repository>.git
```

## Sync a fork

```bash
git fetch upstream
git switch main
git merge --ff-only upstream/main
git push origin main
```

The fast-forward-only merge keeps your fork's `main` aligned without creating a merge commit.

!!! note "Remote names are configurable"

    Git does not require the names `origin` or `upstream`. The important part is knowing where each remote points and what role it plays.
