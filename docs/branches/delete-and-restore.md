---
title: Delete and restore branches
description: Delete local or remote Git branches and recover a deleted branch with reflog when possible.
tags:
  - Git
  - Branch
  - Command
  - Reference
---

# Delete and restore branches

You cannot delete the branch currently checked out. Switch to another branch first.

## Delete a local branch

```bash
git switch main
git branch -d <branch-name>
```

`-d` performs a safety check and refuses to delete a branch with unmerged commits. Use `-D` only when you intentionally want to discard those commits.

## Delete a remote branch

```bash
git push origin --delete <branch-name>
```

This deletes the branch on the remote named `origin`; it does not delete your local branch.

## Restore a branch that still exists remotely

```bash
git fetch origin
git switch --track origin/<branch-name>
```

## Restore a deleted local branch

If the branch was deleted locally but its commits still exist, use the reflog:

```bash
git reflog

git branch <branch-name> <commit>
git switch <branch-name>
```

Choose the commit where the branch pointed before deletion. Reflog entries are local and eventually expire, so recover important work promptly.

!!! warning "Remote deletion is not a backup"

    A deleted remote branch may be difficult to recover for everyone. Confirm the branch is merged or no longer needed before deleting it.
