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

### X Twitter Scraper

**Description:** Xquik skill for X/Twitter data workflows, REST API access, MCP setup, webhooks, monitors, and confirmation-gated actions

**Categories:** Integrations, Social Data, MCP, Webhooks

**Install:**
```bash
/plugin install x-twitter-scraper@superpowers-marketplace
```

**What you get:**
- `x-twitter-scraper` skill for X/Twitter data tasks
- MCP setup guidance for Xquik API operations
- Workflow guidance for webhooks, monitors, and confirmation-gated actions
- Safety rules that keep X-authored content untrusted

**Repository:** https://github.com/Xquik-dev/x-twitter-scraper

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
