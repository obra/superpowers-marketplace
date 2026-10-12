# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Repository Is

This is a **plugin marketplace registry** for Claude Code — a metadata-only catalog that lists installable plugins. There is no executable code, build system, or test suite. The primary artifact is `.claude-plugin/marketplace.json`.

## How It Works

Users install plugins via:
```
/plugin marketplace add obra/superpowers-marketplace
/plugin install <plugin-name>@superpowers-marketplace
```

Claude Code reads `marketplace.json` to locate each plugin's Git URL, then fetches and installs it.

## marketplace.json Structure

Each entry in the `plugins` array follows this shape:

```json
{
  "name": "plugin-name",
  "source": {
    "source": "url",
    "url": "https://github.com/obra/plugin-name.git"
  },
  "description": "One-line description of the plugin.",
  "version": "x.y.z",
  "strict": true
}
```

The `version` field should match the latest release tag of the plugin's repository. To update a plugin version, change both `marketplace.json` and the corresponding entry in `README.md`.

## Maintenance Pattern

When a plugin releases a new version:
1. Update `version` in `.claude-plugin/marketplace.json`
2. Update the version reference in `README.md` if present
3. Bump `marketplace.json`'s top-level `"version"` field (semver patch)
4. Commit: `git commit -m "Update <plugin-name> to v<version>"`
