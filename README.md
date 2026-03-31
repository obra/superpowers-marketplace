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

### eight-eyes

**Description:** Multi-agent code review with 8 hook-enforced roles. Each role is scoped to a different failure surface — the security auditor cannot edit files, the skeptic reviews blind without the implementer’s narrative, the verifier must prove acceptance criteria with evidence.

**Categories:** Code Review, Security, Testing, Accessibility, Quality Gates

**Install:**

```bash
/plugin install 8eyes@superpowers-marketplace
```

**What you get:**

- 8 specialized review roles with hook-enforced scope boundaries
- Parallel audit phase (skeptic, security, performance, accessibility)
- Blind skeptic review — no anchoring on implementer’s narrative
- collabctl CLI for mission state, timeline, and consolidated reports
- TDD mode, custom roles, multi-model routing
- 142 tests, stdlib-only Python, cross-platform

**Repository:** https://github.com/AgentBuildersApp/eight-eyes

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
