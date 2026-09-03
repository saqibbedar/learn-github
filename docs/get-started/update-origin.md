---
title: Update the origin remote
description: Add, inspect, change, and test the origin URL used to synchronize a local Git repository.
tags:
  - Git
  - GitHub
  - Command
---

# Update the `origin` remote

`origin` is the conventional name for the remote repository from which a project was cloned. Inspect it before changing it:

```bash
git remote -v
```

## Change the existing URL

```bash
git remote set-url origin <new-repository-url>
```

For example:

```bash
git remote set-url origin https://github.com/<owner>/<repository>.git
```

Confirm the result:

```bash
git remote get-url origin
git remote -v
```

## Add `origin` when it does not exist

```bash
git remote add origin <repository-url>
```

!!! warning "Check the destination"

    `git push` sends commits to the configured remote. Run `git remote -v` before pushing after changing `origin`, especially when moving a project or switching between personal and organization repositories.
