---
title: Choose restore, reset, or revert
description: Use Git restore, reset, and revert to undo changes according to their location and sharing status.
tags:
  - Git
  - Recovery
  - Command
  - Reference
---

# Choose `restore`, `reset`, or `revert`

These commands solve different problems. The safest choice depends on whether the change is in a file, the index, or commit history.

## Discard working-tree changes

```bash
# Restore one file from HEAD.
git restore <file>

# Restore all tracked working-tree changes.
git restore .
```

This discards unstaged edits. It does not remove staged changes.

## Unstage without discarding edits

```bash
git restore --staged <file>
```

`--staged` moves the file out of the index while leaving its working-tree edits intact.

## Move a private branch backward

```bash
# Move HEAD and the current branch, keeping changes staged.
git reset --soft HEAD~1

# Move HEAD and discard the commit's changes from the index, keeping files edited.
git reset --mixed HEAD~1
```

`--mixed` is the default. Avoid resetting commits that have already been shared.

## Create an inverse commit

```bash
git revert <commit>
```

`revert` creates a new commit that reverses an earlier commit. It is the usual choice for published history because it does not rewrite existing commit IDs.

!!! tip "Simple rule"

    Use `restore` for files, `reset` for private history, and `revert` for shared history.
