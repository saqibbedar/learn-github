---
title: Track large files with Git LFS
description: Store large binaries outside normal Git objects while keeping versioned pointers in the repository.
tags:
  - Git
  - GitLFS
  - Repository
  - Reference
---

# Track large files with Git LFS

Git LFS (Large File Storage) replaces large tracked files with small pointer files in Git while storing the real content in LFS storage. It is useful for datasets, media, archives, and model files.

## Install Git LFS

=== "Windows"

    Install Git LFS from [git-lfs.com](https://git-lfs.com/), then run:

    ```powershell
    git lfs install
    ```

=== "Linux / macOS"

    Install Git LFS with your package manager, then run:

    ```bash
    git lfs install
    ```

## Track and publish files

```bash
# Track a pattern from now on.
git lfs track "*.bin"

# Commit the generated attributes rule and the file.
git add .gitattributes <large-file>
git commit -m "Track binary assets with Git LFS"
git push origin main
```

The `git lfs track` command updates `.gitattributes`. Commit that file so other contributors use the same LFS rules.

## Inspect LFS state

```bash
git lfs ls-files
git lfs status
git lfs env
```

!!! warning "LFS is not a bypass for repository policy"

    Check the hosting provider's storage and bandwidth limits before committing large files. Do not use LFS to hide secrets; rotate a secret instead.
