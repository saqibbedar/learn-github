---
title: Install Git
description: Install Git on Windows, Linux, or macOS and verify the command-line installation.
tags:
  - Git
  - Guide
---

# Install Git

Git must be installed before you can create or clone repositories.

=== "Windows"

    Download and run the installer from [git-scm.com](https://git-scm.com/download/win). The default options are suitable for most users.

    Verify the installation in PowerShell or Command Prompt:

    ```powershell
    git --version
    ```

=== "Linux"

    Install Git using your distribution's package manager:

    ```bash
    # Debian / Ubuntu
    sudo apt update
    sudo apt install git

    # Fedora
    sudo dnf install git
    ```

    Verify the installation:

    ```bash
    git --version
    ```

=== "macOS"

    Install Apple's command-line tools, which include Git:

    ```bash
    xcode-select --install
    ```

    Alternatively, install Git with Homebrew:

    ```bash
    brew install git
    ```

    Verify the installation:

    ```bash
    git --version
    ```

!!! tip "Next step"

    Configure your author identity before creating commits: `git config --global user.name` and `git config --global user.email`.
