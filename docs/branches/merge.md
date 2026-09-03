---
title: Merge a branch
description: Integrate completed Git branch work into a target branch and verify the result.
tags:
  - Git
  - Branch
  - Command
  - Reference
---

# Merge a branch

A merge integrates commits from one branch into the branch you currently have checked out. Always stand on the destination branch.

## Merge locally

```bash
# Move to the destination branch.
git switch main

# Update it before merging when it tracks a remote.
git pull --ff-only origin main

# Integrate the feature branch.
git merge feature/<short-description>
```

If the feature branch has no commits that are unique from `main`, Git reports that it is already up to date. If it is directly ahead, Git may perform a fast-forward merge.

## Resolve a conflict

If Git reports conflicts:

```bash
# See conflicted files.
git status

# After editing and resolving each file.
git add <resolved-file>

git commit
```

To abandon the merge before committing:

```bash
git merge --abort
```

!!! note "Review the result"

    Run `git diff HEAD^ HEAD` or `git log --oneline --decorate -n 5` after a successful merge to verify the resulting history.

## Delete the merged branch

```bash
git branch -d feature/<short-description>
git push origin --delete feature/<short-description>
```

Only delete the remote branch after confirming the pull request or local merge is complete.
