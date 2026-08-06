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

### Superpowers: Developing for Claude Code

**Description:** Skills and resources for developing Claude Code plugins, skills, MCP servers, and extensions

**Categories:** Development, Documentation, Claude Code, Plugin Development

**Install:**
```bash
/plugin install superpowers-developing-for-claude-code@superpowers-marketplace
```

**What you get:**
- `working-with-claude-code` skill with 42+ official documentation files
- `developing-claude-code-plugins` skill for streamlined development workflows
- Self-update mechanism for documentation
- Complete reference for plugin development, skills, MCP servers, and extensions

**Repository:** https://github.com/obra/superpowers-developing-for-claude-code

---

### Private Journal MCP

**Description:** Private journaling MCP server with semantic search

**Categories:** Journaling, Memory, MCP

**Install:**
```bash
/plugin install private-journal-mcp@superpowers-marketplace
```

**What you get:**
- Multi-section private journaling (feelings, project notes, technical insights, user context, world knowledge)
- Local AI semantic search via embeddings
- Read recent entries with full content retrieval
- Dual storage: project-local and user-global journals

**Repository:** https://github.com/obra/private-journal-mcp

---

### SDD Superpowers

**Description:** Specification-Driven Development (SDD) for Claude Code — write specs first, generate code from them

**Categories:** Workflow, Planning, Specification, TDD

**Install:**
```bash
/plugin install sdd-superpowers@superpowers-marketplace
```

**What you get:**
- 8-skill SDD workflow: `sdd-brainstorm` → `sdd-specify` → `sdd-research` → `sdd-plan` → `sdd-tasks` → `sdd-execute` → `sdd-review`
- Four hard gates: no code without a failing test, no completion claim without verification evidence
- Bundled support skills (TDD, systematic-debugging, verification-before-completion, etc.)
- Spec → plan → tasks → subagent dispatch pipeline

**Repository:** https://github.com/hllj/sdd-superpowers

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
