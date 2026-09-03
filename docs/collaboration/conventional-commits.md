---
title: Write conventional commit messages
description: Use a consistent commit message format that makes Git history easier to scan and automate.
tags:
  - Git
  - Collaboration
  - Reference
---

# Write conventional commit messages

Conventional Commits are a team convention, not a Git requirement. A message follows this shape:

```text
<type>[optional scope]: <description>
```

Examples:

```text
feat(auth): add password reset flow
fix: handle empty repository state
docs: explain stash recovery
refactor(parser): simplify token scanning
```

## Common types

| Type       | Use for                                |
| ---------- | -------------------------------------- |
| `feat`     | A user-visible feature                 |
| `fix`      | A bug correction                       |
| `docs`     | Documentation only                     |
| `refactor` | Code structure without behavior change |
| `test`     | Tests                                  |
| `chore`    | Maintenance and tooling                |

Keep the subject short, imperative, and specific. Add a body when the reason or tradeoff needs more context.

!!! note "Breaking changes"

    Mark a breaking change with `!`, such as `feat!: remove the legacy API`, and explain the migration in the commit body or footer.
