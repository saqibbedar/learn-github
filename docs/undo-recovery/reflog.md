---
title: Recover commits with reflog
description: Find previous local HEAD positions and recreate a branch after an accidental reset or branch deletion.
tags:
  - Git
  - Recovery
  - Command
  - Reference
---

# Recover commits with `git reflog`

The reflog records where local references such as `HEAD` and branches pointed recently. It can help recover commits after a reset, rebase, or local branch deletion.

## Find the previous position

```bash
git reflog
```

Look for the commit ID and description from before the mistake. Inspect it before recovering:

```bash
git show <commit>
```

## Create a recovery branch

```bash
git branch recovery/<short-description> <commit>
git switch recovery/<short-description>
```

A recovery branch gives the commit a name so it is not lost while you investigate.

!!! warning "Local record only"

    Reflog entries are local and expire. They are not available on a remote just because the commit was once pushed there.

## Recover a deleted branch

If a local branch was deleted, locate its last commit in the reflog and recreate it:

```bash
git reflog --all
git branch <branch-name> <commit>
```

Do not run cleanup commands until important commits have been recovered and verified.
