# GovNav LK — Pre-Live Build Checklist
## Do ALL of this BEFORE the stream. Frontend polish happens live with Cursor.

---

## TONIGHT vs ON STREAM

| Do TONIGHT (backend + infra) | Do ON STREAM (frontend + Cursor demo) |
|------------------------------|----------------------------------------|
| API key on Vercel + test chat | Hero section + stat badges (Prompt #1) |
| Push to GitHub + Vercel deploy | Sidebar search UI (part of Prompt #1) |
| System prompt + RAG tuned | Mobile hamburger menu (Prompt #3) |
| 6 expansion services pre-written (`data/stream-expansion-ready.json`) | Paste expansion live OR ask Cursor (Prompt #2) |
| `compareServices.ts` utility ready | Service comparison modal (Prompt #5) |
| `.env.example` for repo | Color-coded chat UI (Prompt #4) |
| `npm run build` passes | Trust bar / footer (Prompt #6) |
| Test on phone (note bugs, don't fix yet) | Sinhala names visible in sidebar |
| Backup code snippets saved | Deploy each feature live on Vercel |
| Memorize 3 stats + opening hook | Full pitch + live demo |

---

## PHASE 1: INFRASTRUCTURE (30 min) — CRITICAL

- [ ] **GitHub:** Code at https://github.com/SuvenSeo/gov-navigator-lk
- [ ] **Vercel:** New project linked to `gov-navigator-lk` repo
- [ ] **API key:** `ANTHROPIC_API_KEY` in Vercel → Production + Preview
- [ ] **Redeploy** after adding env var
- [ ] **Test live:** Ask "How do I renew my passport?" on production URL
- [ ] **Screenshot** working AI response (proof for yourself)

**Without API key on Vercel, you lose the competition. Everything else is optional.**

---

## PHASE 2: BACKEND (Already done in repo — verify)

- [x] RAG chat API (`app/api/chat/route.ts`)
- [x] Knowledge base 14 services (`data/services.json`)
- [x] System prompt with `## 📋 Documents Required` headers (ready for color-coded UI)
- [x] API key missing → friendly 503 error
- [x] `searchServices`, `getServiceById` helpers (`lib/knowledge.ts`)
- [x] `compareServices` utility for stretch goal (`lib/compareServices.ts`)
- [x] 6 pre-written services for stream (`data/stream-expansion-ready.json`)
- [x] `.env.example` for local dev

### Optional tonight (if you have time)
- [ ] Merge `data/stream-expansion-ready.json` into `services.json` now (starts at 20 services — less "wow" on stream but stronger app)
- [ ] Add API key to local `.env.local` for local testing
- [ ] Run 3 test questions: NIC, passport, driving license — verify format

---

## PHASE 3: CONTENT PREP (45 min)

- [ ] Read `data/stream-expansion-ready.json` — know the 6 services you're adding live
- [ ] During stream: open `services.json`, paste entries, `git push`, show sidebar grow
- [ ] OR ask Cursor Prompt #2 to generate + paste (more impressive for judges)

**Pre-written expansion services:**
1. Business Registration (Sole Proprietorship)
2. Land / Property Title Registration
3. Income Tax Filing (TIN)
4. Aswesuma Welfare Benefits
5. Pvt Ltd Company Registration (eROC)
6. Traffic Fine Payment (GovPay)

---

## PHASE 4: STREAM TOOLING (30 min)

- [ ] Save backup snippets from `MASTER-BUILD-PLAN.md` to `BACKUP/` folder
- [ ] Test all 5 Cursor prompts in Cursor Agent (dry run, don't commit)
- [ ] Open browser tabs: Cursor | Vercel dashboard | GitHub | Live URL
- [ ] Phone on Wi-Fi for mobile demo
- [ ] Screen recording ready (OBS or Win+G)
- [ ] Clear desktop of personal files

---

## PHASE 5: PITCH PREP (20 min)

Memorize:

| Stat | Line |
|------|------|
| Queue | "Passport queues: 10–12 hours overnight — real Reddit reports 2025" |
| Delay | "Official: 8–12 weeks. Real world: 3+ months" |
| Literacy | "Only 35.9% computer literate — we're mobile-first" |
| Gap | "1,487 services on gov.lk — zero AI navigator until today" |
| Timing | "Government SuperApp won't launch until late 2026 — we're the bridge" |

**Opening hook:**
> "In Sri Lanka, renewing a passport means joining a queue at midnight. We built the guide that tells you exactly what to bring — with Cursor, in one day."

---

## PHASE 6: 1 HOUR BEFORE STREAM

- [ ] Restart computer
- [ ] Test internet upload speed (>5 Mbps)
- [ ] Confirm Vercel URL loads + chat responds
- [ ] `git status` clean (or know what's uncommitted)
- [ ] This file + `MASTER-BUILD-PLAN.md` open for reference
- [ ] Sleep 6+ hours if possible

---

## WHAT NOT TO DO BEFORE STREAM

- Don't build the hero section (save for live demo)
- Don't add mobile hamburger (save for live demo)
- Don't color-code chat UI (save for live demo)
- Don't add Sinhala toggle i18n system (stretch only)
- Don't over-expand KB past 14 unless you want to demo 20→26 instead of 14→20

---

## DEPLOY COMMANDS (for stream)

```bash
git add -A
git commit -m "feat: describe what Cursor just built"
git push origin main
# Vercel auto-deploys in ~30 seconds — refresh live URL
```

---

## SUCCESS = READY WHEN

1. https://gov-navigator-lk.vercel.app loads
2. Chat returns real AI answer on passport question
3. `npm run build` zero errors locally
4. GitHub repo `SuvenSeo/gov-navigator-lk` is up to date
5. You know which 5 Cursor prompts to paste and in what order
6. Phone tested once (sidebar will look broken — that's intentional for demo)

You're not building tomorrow. You're **performing** tomorrow.
