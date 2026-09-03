---
title: Prepare a clear pull request
description: Organize a focused branch and pull request that is easy to review, test, and merge.
tags:
  - Git
  - GitHub
  - Collaboration
  - Reference
---

# Prepare a clear pull request

A good pull request gives reviewers a small, understandable change with enough context to verify it.

## Before opening the request

```bash
git status --short --branch
git fetch origin
git rebase origin/main
git diff origin/main...HEAD
git log --oneline origin/main..HEAD
```

Run the project's tests and formatters after rebasing. Push an updated branch with `--force-with-lease` only when the rebase rewrote its history.

## Include useful context

Describe:

- the problem or user need;
- the approach and important tradeoffs;
- tests or checks run;
- documentation or migration impact;
- links to related issues.

Keep unrelated formatting changes out of the request. They make review harder and increase conflict risk.

!!! tip "One purpose per pull request"

    A focused pull request is easier to review, revert, and release. Split unrelated improvements into separate branches.
