# Building a Cursor Plugin (from Sri Lanka resources)

Optional extension path after rules/skills/automations are working.

## When to build a plugin

- You repeat the same commands across many projects
- You want to share team workflows via Cursor marketplace
- Better Design Tips or Learn checklists should be one-click commands

## Start here

1. Template: https://github.com/cursor/plugin-template
2. Create flow: https://cursor.directory/plugins/new
3. Spec: https://github.com/cursor/plugin-template (plugin.json, skills/, rules/, mcp.json)

## Plugin ideas mapped to Sri Lanka resources

| Plugin | Contents |
|--------|----------|
| **design-tips** | Commands: pick style, lock fonts, inspiration checklist |
| **learn-checkpoints** | 13 commands — one per Cursor Learn module |
| **project-bootstrap** | Command to copy template `.cursor/` into cwd |

## Structure (minimal)

```
my-plugin/
├── .cursor-plugin/plugin.json
├── skills/design-pass/SKILL.md
├── rules/ui-design.mdc
└── README.md
```

## Next step

Ask in Cursor: *"Help me create a Cursor plugin for [design-tips / bootstrap / learn-checkpoints] using the plugin template."*

Use the built-in `create-skill` and Harness plugin standards if publishing to a team.
