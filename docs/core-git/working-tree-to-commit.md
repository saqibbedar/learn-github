---
title: Move changes from working tree to a commit
description: Inspect, stage, review, and commit changes using the Git three-area workflow.
tags:
  - Git
  - Command
  - Reference
---

# Move changes from working tree to a commit

A reliable commit workflow makes the intended snapshot visible before it enters history.

## Inspect the working tree

```bash
# Show branch and file status in a compact form.
git status --short --branch

# Show unstaged edits.
git diff
```

Status short codes use two columns: the first describes the index, and the second describes the working tree. For example, `M ` is staged and ` M` is modified but unstaged.

## Stage deliberately

```bash
# Stage one file.
git add <file>

# Stage several paths.
git add <file-1> <file-2>

# Interactively choose parts of files.
git add --patch
```

Use `git add .` when you have reviewed all changes in the current directory and want to stage them together.

## Review the staged snapshot

```bash
git diff --staged
git status --short
```

`--staged` is an alias for `--cached`. Both show what the next commit will contain.

## Commit and verify

```bash
git commit -m "Describe one focused change"
git show --stat --oneline HEAD
```

!!! note "A commit is a snapshot"

    A commit captures the staged state. Later edits remain in the working tree until you stage and commit them.
