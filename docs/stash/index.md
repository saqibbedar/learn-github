---
title: Git stash
description: Temporarily set aside uncommitted Git changes and restore them safely when you are ready.
tags:
  - Git
  - Stash
  - Reference
---

# Git stash

A stash is a local snapshot of work that is not ready to commit. It lets you temporarily return to a clean working tree, switch branches, update your branch, or investigate another change.

Use a stash for short-lived work. It is not a replacement for a commit, backup, or collaboration mechanism.

## Choose the right action

| Situation                                            | Recommended action                  |
| ---------------------------------------------------- | ----------------------------------- |
| The work is complete                                 | Commit it                           |
| The work is incomplete but must be set aside briefly | Stash it                            |
| The work must be shared or preserved long-term       | Create a branch and commit it       |
| The changes are disposable                           | Revert or discard them deliberately |

The detailed pages cover the everyday stash lifecycle and the workflow for moving unfinished work to a new branch.

!!! warning "Stashes are local"

    A stash normally exists only in your local repository. It is not pushed to GitHub and can be lost if the local repository is deleted or corrupted.
