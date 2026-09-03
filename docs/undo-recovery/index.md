---
title: Undo and recover Git changes
description: Choose the right Git command to discard changes, undo commits, or recover work that appears to be lost.
tags:
  - Git
  - Recovery
  - Reference
---

# Undo and recover Git changes

The correct undo command depends on where the change exists and whether other people may already have pulled it.

| Situation                                 | Use                           |
| ----------------------------------------- | ----------------------------- |
| Discard unstaged file edits               | `git restore <file>`          |
| Unstage a file but keep its edits         | `git restore --staged <file>` |
| Move a private branch backward            | `git reset`                   |
| Undo a published commit safely            | `git revert`                  |
| Find a previous branch or `HEAD` position | `git reflog`                  |

!!! warning "Check before destructive commands"

    Run `git status`, `git diff`, and `git log --oneline --decorate -n 5` before changing history. Stash or branch important work first.

## The decision path

```mermaid
%%{init: {
  "themeVariables": {
    "fontSize": "30px"
  },
  "flowchart": {
    "nodeSpacing": 30,
    "rankSpacing": 150,
    "padding": 15
  }
}}%%
flowchart TD
    A[What needs undoing?] --> B[Uncommitted file change]
    A --> C[Staged change]
    A --> D[Private commit]
    A --> E[Published commit]
    A --> F[Lost branch or commit]
    B --> G[git restore]
    C --> H[git restore --staged]
    D --> I[git reset]
    E --> J[git revert]
    F --> K[git reflog]
```
