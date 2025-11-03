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

### Neurodivergent Visual Organization

**Description:** Visual organization tools designed for neurodivergent thinking patterns - transform overwhelming tasks into compassionate, actionable Mermaid diagrams

**Categories:** Productivity, Accessibility, ADHD, Autism, Executive Function, Mental Health

**Install:**
```bash
/plugin install neurodivergent-visual-org@superpowers-marketplace
```

**What you get:**
- `neurodivergent-visual-org` skill with 8 pattern libraries (90KB+ of compassionate templates)
- Task breakdowns (3-10 minute micro-steps, energy-aware sequencing)
- Decision tools (trees, matrices, elimination filters for analysis paralysis)
- Project maps (phases, dependencies, MVP breakdowns)
- Current state boards (Kanban, priority matrices, triage flows)
- Time-boxing (Pomodoro, energy mapping, focus sessions for time blindness)
- Habit building (tiny habits, routine sequences, momentum tracking)
- Accountability support (body doubling, check-ins, crisis protocols)
- Focus regulation (pre-task calm-down, sensory tools, recovery protocols)

**Perfect for:**
- ADHD, autism, and other neurodivergent conditions
- Executive dysfunction and decision paralysis
- Time blindness and overwhelm
- Anyone needing external structure for focus

**Repository:** https://github.com/JackReis/neurodivergent-visual-org

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
