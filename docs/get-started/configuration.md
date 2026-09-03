---
title: Configure Git
description: Set the Git author identity and useful global defaults before making commits.
tags:
  - Git
  - Guide
  - Command
---

# Configure Git

Git stores an author name and email in each commit. Set them once globally, or omit `--global` to configure only the current repository.

=== "Windows"

    ```powershell
    git config --global user.name "Your Name"
    git config --global user.email "you@example.com"
    git config --global init.defaultBranch main
    ```

=== "Linux / macOS"

    ```bash
    git config --global user.name "Your Name"
    git config --global user.email "you@example.com"
    git config --global init.defaultBranch main
    ```

Check the resulting configuration:

```bash
git config --global --list
```

!!! warning "Use an email you control"

    If you want GitHub to associate commits with your account, use an email added to your GitHub account or GitHub's private noreply address.

!!! note "Repository-specific settings"

    Run `git config user.name "Project Name"` inside a repository when that project needs a different identity.
