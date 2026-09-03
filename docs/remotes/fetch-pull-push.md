---
title: Fetch, pull, and push changes
description: Choose between Git fetch, pull, and push when synchronizing local and remote history.
tags:
  - Git
  - Remote
  - Command
  - Reference
---

# Fetch, pull, and push changes

The three commands have different effects:

| Command     | Downloads commits | Changes your current files | Uploads commits |
| ----------- | ----------------- | -------------------------- | --------------- |
| `git fetch` | Yes               | No                         | No              |
| `git pull`  | Yes               | Usually yes                | No              |
| `git push`  | No                | No                         | Yes             |

## Fetch without integrating

```bash
git fetch origin
```

Fetch updates remote-tracking branches such as `origin/main`. Inspect them before deciding how to integrate the changes:

```bash
git log --oneline main..origin/main
```

## Pull and integrate

```bash
git pull --ff-only origin main
```

`--ff-only` allows only a fast-forward update. If local and remote history diverged, Git stops instead of creating an unexpected merge commit.

When you need to choose the integration method explicitly:

```bash
git fetch origin
git merge origin/main
```

## Push local commits

```bash
git push origin main
```

Set tracking when publishing a new branch:

```bash
git push --set-upstream origin feature/<short-description>
```

The short `-u` option means `--set-upstream`. After tracking is configured, `git push` and `git pull` can often omit the remote and branch names.

!!! warning "Do not push blindly"

    Check `git status --short --branch` and `git log --oneline --decorate -n 5` before pushing, especially after a rebase or remote update.
