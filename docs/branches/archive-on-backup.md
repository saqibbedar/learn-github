---
title: Archive files on a backup branch
description: Preserve files on a dedicated Git branch before removing them from the main branch.
tags:
  - Git
  - Branch
  - Command
  - Reference
---

# Archive files on a backup branch

Use a backup branch when files must leave `main` but should remain recoverable in Git history.

## Create the backup branch

Start from a clean working tree, then create and publish the branch:

```bash
git status --short
git switch -c backup

git push --set-upstream origin backup
```

The `-u` option in `git push -u` is short for `--set-upstream`; it connects the local branch to `origin/backup`.

## Remove the files from `main`

```bash
git switch main
git rm <file-1> <file-2>
git commit -m "Remove archived files from main"
git push origin main
```

The files remain available on the `backup` branch, while `main` records their removal.

!!! tip "Use a tag for permanent archives"

    If the snapshot is a historical release rather than an active line of work, a tag may communicate that intent better than a long-lived branch.
