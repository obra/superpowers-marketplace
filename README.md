# Superpowers Marketplace

Curated Claude Code plugins for skills, workflows, and productivity tools.

## Installation

Add this marketplace to Claude Code:

```bash
/plugin marketplace add obra/superpowers-marketplace
```

## Available Plugins

### Superpowers (Core)

**Description:** Core skills library with TDD, debugging, collaboration patterns, and proven techniques

**Categories:** Testing, Debugging, Collaboration, Meta

**Install:**
```bash
/plugin install superpowers@superpowers-marketplace
```

**What you get:**
- 20+ battle-tested skills
- `/brainstorm`, `/write-plan`, `/execute-plan` commands
- Skills-search tool for discovery
- SessionStart context injection

**Repository:** https://github.com/obra/superpowers

---

### Elements of Style

**Description:** Writing guidance based on William Strunk Jr.'s The Elements of Style (1918)

**Categories:** Writing, Documentation, Reference

**Install:**
```bash
/plugin install elements-of-style@superpowers-marketplace
```

**What you get:**
- `writing-clearly-and-concisely` skill
- Complete 1918 reference text (~12k tokens)
- All 18 rules for clear, concise writing
- Grammar, punctuation, and composition guidance

**Repository:** https://github.com/obra/the-elements-of-style

---

## Marketplace Structure

```
superpowers-marketplace/
├── .claude-plugin/
│   └── marketplace.json       # Plugin catalog
└── README.md                  # This file
```

## Support

- **Issues**: https://github.com/obra/superpowers-marketplace/issues
- **Core Plugin**: https://github.com/obra/superpowers

## License

Marketplace metadata: MIT License

Individual plugins: See respective plugin licenses
