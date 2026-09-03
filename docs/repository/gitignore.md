---
title: Ignore files with gitignore
description: Prevent generated files, secrets, dependencies, and local settings from entering a Git repository.
tags:
  - Git
  - Repository
  - Command
  - Reference
---

# Ignore files with `.gitignore`

A `.gitignore` file defines patterns for files Git should not report as untracked. Place it at the repository root for project-wide rules.

## Common patterns

```gitignore
# Python cache and virtual environments
__pycache__/
.venv/

# Environment files and local secrets
.env
.env.*

# Build output
dist/
build/
```

## Pattern behavior

| Pattern         | Matches                                          |
| --------------- | ------------------------------------------------ |
| `*.log`         | Log files in any directory                       |
| `/dist/`        | Root-level `dist` directory                      |
| `**/generated/` | Any directory named `generated`                  |
| `!keep.log`     | Re-includes a matching path after a broader rule |

Check why a path is ignored:

```bash
git check-ignore -v <path>
```

!!! warning "Ignored does not mean untracked"

    `.gitignore` does not affect files already committed. Remove a tracked file from the index while keeping it locally with `git rm --cached <file>`.

For personal machine-specific rules, use `.git/info/exclude` instead of changing the shared `.gitignore`.
