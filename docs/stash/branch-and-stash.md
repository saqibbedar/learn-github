---
title: Move stashed work to a new branch
description: Move unfinished local changes to a new Git branch without leaving temporary work on the current branch.
tags:
  - Git
  - Stash
  - Branch
  - Reference
---

# Move stashed work to a new branch

Sometimes work starts on the wrong branch. Stash the changes, create the correct branch, and apply the snapshot there.

## Recommended workflow

```bash
# Confirm what will be saved.
git status --short

# Save tracked and untracked work with a descriptive message.
git stash push -u -m "Work for the new feature"

# Create and switch to the destination branch.
git switch -c <branch-name>

# Restore the work and remove the stash if successful.
git stash pop

# Review the restored work.
git status --short
git diff
```

The `-c` option means create a new branch. If the branch already exists, switch to it without `-c`:

```bash
git switch <branch-name>
git stash pop
```

!!! note "Use `apply` for extra caution"

    Replace `git stash pop` with `git stash apply` when you want to keep the stash until the restored changes have been checked.

## Move only selected files

Use a pathspec when the stash should contain only particular paths:

```bash
git stash push -u -m "Move documentation changes" -- docs/ README.md
```

Check the result with `git stash show --patch` before switching branches.

## Alternative: create a branch directly

When the current changes are already exactly the work you want to move, Git can create a branch and apply the latest stash in one operation:

```bash
git stash push -u -m "Work in progress"
git stash branch <branch-name> stash@{0}
```

`git stash branch` creates and checks out the branch, applies the stash, and drops it if the application succeeds.

## Why not commit first?

A temporary commit can work, but it adds a commit to the wrong branch and may need cleanup later. Stashing keeps unfinished work separate from the branch history while you decide where it belongs.
