---
title: Inspect commits and history
description: Read Git history with log, show, diff, and graph options to understand how a project changed.
tags:
  - Git
  - History
  - Command
  - Reference
---

# Inspect commits and history

History commands answer different questions: what changed, which files changed, and which commits belong to a branch.

## Read the commit list

```bash
# Compact history for the current branch.
git log --oneline

# Include branches and a graph of relationships.
git log --oneline --decorate --graph --all

# Show the latest five commits.
git log --oneline -n 5
```

Useful options:

| Option       | Meaning                           |
| ------------ | --------------------------------- |
| `--oneline`  | Abbreviated commit ID and subject |
| `--decorate` | Show branch and tag names         |
| `--graph`    | Draw parent relationships         |
| `--all`      | Include all local refs            |
| `-n <count>` | Limit the number of commits       |

## Inspect one commit

```bash
# Show the commit message and patch.
git show <commit>

# Show only the changed-file summary.
git show --stat <commit>
```

## Compare snapshots

```bash
# Compare the working tree with the last commit.
git diff HEAD

# Compare two commits.
git diff <older-commit>..<newer-commit>
```

!!! tip "Use IDs from the history"

    Copy a short commit ID from `git log --oneline`. Git accepts an unambiguous abbreviated ID, but a full ID is safest in scripts.
