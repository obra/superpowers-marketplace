# Contributing to Superpowers Marketplace

We welcome high-quality Claude Code plugins that enhance productivity and developer workflows!

## Submission Process

1. **Create your plugin** following [Claude Code plugin documentation](https://docs.claude.com/en/docs/claude-code/plugins)
2. **Test thoroughly** - Ensure plugin works end-to-end
3. **Open a PR** adding your plugin to `.claude-plugin/marketplace.json`
4. **Await review** - Maintainers will review within 1 week

## Plugin Requirements

### Must Have

- **Valid plugin.json** - Required fields: name, description, version, author
- **Clear README** - Installation and usage instructions
- **Tested** - Plugin installs and works as described
- **License** - Open source license (MIT, Apache-2.0, etc.)
- **Maintained** - Commitment to fix critical bugs

### Should Have

- **Examples** - Sample use cases or demo
- **Documentation** - Detailed usage guide
- **Tests** - Automated tests for plugin logic
- **Versioning** - Semantic versioning (major.minor.patch)

### Nice to Have

- **Screenshots/GIFs** - Visual examples
- **Changelog** - Version history
- **Contributing guide** - How others can help

## Quality Standards

### Code Quality

- Clean, readable code
- Follows language best practices
- No hardcoded credentials or secrets
- Proper error handling

### Documentation Quality

- Clear installation instructions
- Usage examples
- Troubleshooting section
- API documentation (if applicable)

### Security

- No malicious code
- No unencrypted secrets
- Minimal permissions requested
- Dependencies vetted

## Marketplace Entry Format

Add to `.claude-plugin/marketplace.json`:

```json
{
  "name": "your-plugin-name",
  "source": {
    "source": "github",
    "repo": "your-username/your-plugin"
  },
  "description": "Brief description of what your plugin does",
  "version": "1.0.0",
  "author": {
    "name": "Your Name",
    "email": "you@example.com"
  },
  "homepage": "https://github.com/your-username/your-plugin",
  "repository": "https://github.com/your-username/your-plugin",
  "license": "MIT",
  "keywords": ["relevant", "search", "terms"],
  "category": "productivity",
  "strict": true
}
```

### Categories

Choose the most appropriate:
- `productivity` - General workflow improvements
- `testing` - Test automation and quality tools
- `debugging` - Debugging and diagnostic tools
- `devops` - Deployment and infrastructure
- `collaboration` - Team workflows
- `education` - Learning and training tools

## Review Process

1. **Automated checks** - Plugin manifest validation
2. **Manual review** - Code and documentation review
3. **Testing** - Installation and functionality verification
4. **Feedback** - Requested changes (if needed)
5. **Approval** - Merged and published

## Review Criteria

✅ **Approve if:**
- Meets all requirements
- High code quality
- Clear value proposition
- Good documentation

❌ **Reject if:**
- Security concerns
- Malicious behavior
- Poor quality
- Duplicate functionality (without clear improvement)

⏸️ **Request changes if:**
- Minor issues
- Documentation gaps
- Missing tests
- Unclear usage

## After Approval

1. **Merged** - PR merged to marketplace
2. **Available** - Plugin appears in marketplace within 24 hours
3. **Listed** - Added to README.md
4. **Promoted** - Featured in marketplace updates (high-quality plugins)

## Maintenance Expectations

### Plugin Maintainers

- **Respond** - Reply to issues within 2 weeks
- **Fix** - Address critical bugs within 1 month
- **Update** - Keep compatible with Claude Code updates
- **Deprecate** - Give 3 months notice if abandoning

### Inactive Plugins

If unmaintained for 6+ months:
1. **Warning** - Issue opened on plugin repo
2. **Deprecation notice** - Added to marketplace entry
3. **Removal** - Removed from marketplace after 3 more months

## Plugin Ideas

Need inspiration? Check:
- [Skill requests](https://github.com/obra/superpowers/blob/main/skills/REQUESTS.md)
- [Marketplace issues](https://github.com/obra/superpowers-marketplace/issues)
- [Community discussions](https://github.com/obra/superpowers-marketplace/discussions)

## Questions?

- **Plugin development**: [Claude Code docs](https://docs.claude.com/en/docs/claude-code/plugins)
- **Marketplace questions**: Open an issue
- **General discussion**: Start a discussion

## Code of Conduct

Be respectful, collaborative, and constructive. We're building tools to help developers - let's make it a positive experience for everyone.

## License

By contributing, you agree that your plugin will be listed under the license specified in your plugin.json. The marketplace metadata (this repo) is MIT licensed.
