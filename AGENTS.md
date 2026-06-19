# AGENTS.md — GovNav LK

AI guide for agents working on **GovNav LK** — Sri Lanka's government service navigator.

## What this is

RAG-powered chat over structured gov service data (`data/services.json`). Users ask how to renew passports, get NICs, driving licenses, etc. Live at https://gov-navigator-lk.vercel.app.

## Quick start

```bash
npm install
cp .env.example .env.local   # add ANTHROPIC_API_KEY
npm run dev
```

Production requires `ANTHROPIC_API_KEY` in Vercel env vars.

## Stack

| Layer | Tech |
|-------|------|
| App | Next.js 15, React 19, TypeScript |
| AI | Vercel AI SDK + Claude (`@ai-sdk/anthropic`) |
| UI | Tailwind (`lk-maroon`, `lk-gold`, `lk-maroon-dark`) |
| Deploy | Vercel |

## Repository layout

```
app/
  api/chat/route.ts    # RAG chat endpoint
  page.tsx             # Main layout (header, sidebar, chat)
  layout.tsx
components/
  ChatInterface.tsx    # Streaming markdown chat (forwardRef)
  ServiceSidebar.tsx   # Service accordion
data/
  services.json        # Knowledge base
  stream-expansion-ready.json
lib/
  knowledge.ts         # searchServices, getServiceById
  compareServices.ts
```

## Current build status

| Layer | Status |
|-------|--------|
| AI backend + RAG | Done |
| 14-service knowledge base | Done |
| Chat UI | Functional, needs polish |
| Sidebar | Desktop only — mobile menu needed |
| Design tokens | Done |
| Deploy | Live on Vercel |

**Stream focus:** hero, mobile hamburger, Sinhala names in sidebar, color-coded chat sections, trust bar, KB expansion to 20+ services.

See `MASTER-BUILD-PLAN.md` and `PRE-LIVE-BUILD-CHECKLIST.md` for the full stream arc.

## Agent conventions

- Backend is done — don't rebuild RAG/API unless asked
- Use existing Tailwind tokens; Sri Lanka-themed professional UI
- Run `npm run build` before suggesting deploy
- Keep PDPA-safe (no PII storage)
- Include trust disclaimer in UI changes

## Cursor resources

Project uses Sri Lanka Cursor template rules in `.cursor/rules/`. Personal skills: `cursor-sri-lanka-playbook`, `better-design-tips`.
