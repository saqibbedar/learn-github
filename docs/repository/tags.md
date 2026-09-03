---
title: Create and manage Git tags
description: Mark important commits with lightweight or annotated Git tags and publish them to a remote.
tags:
  - Git
  - Repository
  - Command
  - Reference
---

# Create and manage Git tags

Tags give stable names to important commits, such as release versions. Unlike branches, tags normally do not move.

## Create tags

```bash
# Lightweight tag pointing at the current commit.
git tag v1.0.0

# Annotated tag with a message and tag metadata.
git tag -a v1.0.0 -m "Release 1.0.0"
```

Annotated tags are generally better for releases because they store a message, tagger, and timestamp.

## Inspect tags

```bash
git tag --list
git show v1.0.0
```

Create a tag on a specific commit:

```bash
git tag -a v1.0.0 <commit> -m "Release 1.0.0"
```

## Push and remove tags

```bash
# Push one tag.
git push origin v1.0.0

# Push all local tags.
git push origin --tags

# Remove a tag locally.
git tag --delete v1.0.0

# Remove a tag from the remote.
git push origin --delete v1.0.0
```

!!! note "Tags and releases"

    A Git tag is a repository reference. A GitHub release can be built around a tag and may include release notes and downloadable assets.
