# Cursor Automations — Recommended Recipes

Patterns from the [Cursor Automations workshop](https://youtu.be/nlIWMtdOlHI) and Cursor Sri Lanka resources. Create these in **Cursor → Automations** (or ask the agent to use the `automate` skill).

## 1. New PR quality pass

**Trigger:** Pull request opened (your repo)

**Instructions:**
- Read the PR diff
- Run lint and tests if configured in the repo
- Comment with: summary, risks, missing tests, suggested follow-ups
- Do not push commits unless explicitly asked

**Tools:** GitHub MCP (if connected), terminal

---

## 2. Weekly dependency / health check

**Trigger:** Schedule (e.g. Monday 9am)

**Instructions:**
- Check for outdated dependencies (package manager appropriate to repo)
- Run tests
- Open a summary issue or draft PR with safe upgrade suggestions only

**Tools:** Terminal, GitHub MCP

---

## 3. UI polish before merge

**Trigger:** Manual or PR label `needs-design-pass`

**Instructions:**
- Apply Better Design Tips checklist: fonts, palette, one reference, no generic gradients
- Suggest concrete CSS/component changes only in changed UI files
- Include accessibility notes (contrast, focus, reduced motion)

**Tools:** Read repo files; no external deploy

---

## 4. Project bootstrap (new repo)

**Trigger:** Manual — run when you create a new project

**Instructions:**
1. Copy `.cursor/` and `AGENTS.md` from `~/Projects/cursor-project-template`
2. Detect stack from manifest files (package.json, pyproject.toml, etc.)
3. Fill `project-context.mdc` and `AGENTS.md` placeholders
4. Propose one design direction if the project has a UI

**Tools:** Filesystem, terminal

---

## How to create

In Cursor chat: *"Create a Cursor automation for [recipe name above]"* — the agent will use the `automate` skill and open the Automations editor with a draft.

## References

- Workshop: https://youtu.be/nlIWMtdOlHI
- Sri Lanka resources: https://cursorsrilanka.com/resources
- Plugin template (extend Cursor itself): https://github.com/cursor/plugin-template
