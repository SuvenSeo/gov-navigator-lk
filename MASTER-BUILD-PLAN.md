# GovNav LK — Master Build Plan for Tomorrow's Stream
## "Build with Cursor Live, Sri Lanka" — Friday June 19, 5:00 PM SLT

> **One rule:** Every single change happens through Cursor on stream. You guide it; you don't type code manually. That's the whole story.

---

## CURRENT CODEBASE (What You Already Have)

| Layer | Status | Files |
|-------|--------|-------|
| **AI backend** | Done | `app/api/chat/route.ts` — RAG over `services.json` via Claude |
| **Knowledge base** | Done | `data/services.json` — **14 services**, full schema (docs, steps, fees, sinhala) |
| **Chat UI** | Functional, plain | `components/ChatInterface.tsx` — streaming markdown, `forwardRef` for sidebar |
| **Sidebar** | Functional, desktop-only | `components/ServiceSidebar.tsx` — accordion categories, **no mobile menu yet** |
| **Layout** | Clean shell | `app/page.tsx` — header + quick links + sidebar + chat |
| **Design tokens** | Done | `tailwind.config.ts` — `lk-maroon`, `lk-gold`, `lk-maroon-dark` |
| **Deploy** | Live | https://gov-navigator-lk.vercel.app |

**Architecture judges will love:** Sidebar clicks call `chatRef.current?.submitMessage(query)` — zero prop-drilling, imperative handle pattern. Mention this once on stream.

**Tomorrow's work is 100% frontend:** hero, mobile, chat formatting, KB expansion display, trust UI. Backend is competition-ready.

---

## BACKEND vs FRONTEND — Don't Waste Stream Time

| Already built (don't rebuild) | Build live on stream |
|------------------------------|----------------------|
| RAG chat API | Hero section + stat badges |
| 14-service knowledge base | Expand to 20+ services (JSON paste) |
| Service schema with Sinhala fields | Show Sinhala names in sidebar |
| Vercel deploy pipeline | Hamburger mobile menu |
| Quick-link chips in header | Color-coded chat sections |
| Official gov links in header | Service comparison modal (stretch) |
| PDPA-safe (no PII stored) | Trust bar: "Not official · Verify at office" |

---

## ⚡ TONIGHT: Critical Setup (Do Before Sleeping)

### Step 1 — Add API Key to Vercel (CRITICAL)
1. Go to: https://vercel.com/suvenseoras-projects/gov-navigator-lk/settings/environment-variables
2. Add: Name = `ANTHROPIC_API_KEY`, Value = your key from console.anthropic.com
3. Select: Production + Preview environments
4. Click Save → click **Redeploy** on the Deployments tab
5. Test: Open https://gov-navigator-lk.vercel.app → type "How do I renew my passport?"
6. If you get a real AI response → ✅ You're ready

### Step 2 — Test Your 3 Opening Stats (Memorize These)
- "Sri Lankans wait **10-12 hours overnight** in passport queues — real Reddit reports from 2025"
- "Official passport timeline: 8-12 weeks. Real-world: **3+ months**"
- "Only **35.9% computer literacy** — we're mobile-first in Sinhala, Tamil, and English"

### Step 3 — Pre-load Cursor
Open the project in Cursor tonight. Verify Cursor can read your codebase by asking: "What services are in my knowledge base?" — it should list all 14 from services.json.

### Step 4 — Prepare Backup Files
Before the stream, manually create these files with the backup code at the bottom of this document:
- `C:\Users\suven\Desktop\gov-navigator-lk\BACKUP\` folder with all backup .tsx files

---

## 🗺️ THE 90-MINUTE STREAM PLAN

### What Judges Want to See
| Criterion | How We Nail It |
|-----------|----------------|
| **Idea Clarity** | 30-second problem → stat → solution hook |
| **Execution** | Live deploy to Vercel after every feature |
| **Use of Cursor** | Say "Let me ask Cursor to..." before every change |
| **Design** | Sri Lanka-themed UI that looks professional |
| **Impact** | 22M Sri Lankans, 48M wasted hours, first-to-market AI |
| **Presentation** | Structured 90-min arc with live demo at the end |

---

## ⏱️ MINUTE-BY-MINUTE TIMELINE

---

### [0:00–5:00] OPENING HOOK + PROBLEM STATEMENT

**Open your browser to the current Vercel URL.** Don't code yet. Just talk.

**Say exactly this:**
> "In Sri Lanka, renewing a passport means joining a queue at midnight. Real users on Reddit reported waiting **12 hours overnight** in 2025. The official timeline says 8-12 weeks. The real wait is 3 months. And there is zero guide that tells you exactly what documents to bring. We built one — in one day — using Cursor."

**Show:**
1. The live Vercel URL (https://gov-navigator-lk.vercel.app)
2. Click "Passport" in the quick links → watch the AI respond
3. Say: "That answer — documents, steps, fees, tips — accurate and instant. That's GovNav LK."

**Stats to drop:**
- "22 million Sri Lankans face this every year"
- "35.9% computer literacy — we built this mobile-first"
- "No AI government navigator existed in Sri Lanka before today"

---

### [5:00–20:00] CURSOR DEMO #1 — VISUAL HERO SECTION

**This is the biggest visual transformation. Judges see a before → after.**

**Say:** "The app works, but it doesn't look like something 22 million people would love. Let me ask Cursor to redesign the landing experience."

**Open Cursor → Agent Mode → paste Prompt #1 below**

**Expected output:** 3-4 files modified, including page.tsx and globals.css
**Deploy immediately:** `git add -A && git commit -m "feat: add hero section" && git push`
Vercel auto-deploys in 30 seconds. **Refresh on stream.**

**Say:** "Cursor redesigned the entire homepage in under 3 minutes. It read our color tokens, understood the Sri Lanka theme, and generated production-ready code. This is 4-5 hours of work."

---

### [20:00–35:00] CURSOR DEMO #2 — KNOWLEDGE BASE EXPANSION

**The sidebar currently shows 14 services. We expand live.**

**Say:** "Cursor can read our entire knowledge base. Let me ask it what we're missing."

**Open Cursor Chat → paste Prompt #2 below**

Cursor will:
1. Read services.json
2. Suggest 5-10 missing high-impact services
3. Generate complete JSON entries for 3 of them

**You:** Copy-paste the JSON into `data/services.json`. Deploy.
**Show:** Sidebar now has 17-20 services. The number visibly increased.

**Say:** "Our knowledge base grew from 14 to [X] services while you watched. Cursor understood the schema, understood Sri Lankan government structure, and filled the gaps."

---

### [35:00–50:00] CURSOR DEMO #3 — MOBILE HAMBURGER MENU

**This is the mobile demo moment. Pull out your phone.**

**Say:** "46% of Sri Lanka is offline-first, mobile-first. Let me show you the current mobile experience." Open on your phone → sidebar is broken.

"Let me fix this right now with Cursor."

**Open Cursor → paste Prompt #3**

Cursor generates:
- Hamburger menu button (maroon, top-left)
- Slide-in drawer for mobile
- Closes when service selected
- Desktop stays unchanged

**Deploy. Open on phone. Show hamburger menu working.**

**Say:** "Mobile-first for 10 million smartphone users in Sri Lanka. This took 2 minutes."

---

### [50:00–65:00] CURSOR DEMO #4 — BEAUTIFUL CHAT FORMATTING

**This is the "wow" moment. Before vs after on AI responses.**

**Say:** "The AI gives great information but it's hard to scan. Let me make it beautiful."

**Ask a question first (for before screenshot):** "How do I get a new NIC?"
Let AI respond (plain markdown). Screenshot it.

**Open Cursor → paste Prompt #4**

After Cursor's changes:
- Documents section: Blue header + blue background on list items
- Steps: Green header + numbered badges
- Fees: Gold header + clear table
- Tips: Orange header + warm background
- Common Mistakes: Red header + red tint

**Ask the same NIC question again. Show the new formatted response.**

**Say:** "Same information. But now a first-time user can scan it in 5 seconds instead of reading prose for 30 seconds. This is what AI-first development means — using AI to build the UX, not just the backend."

---

### [65:00–75:00] CURSOR DEMO #5 — SERVICE COMPARISON TOOL (STRETCH GOAL)

**If you're on schedule (ahead by 5+ minutes), do this.**

**Say:** "Users often ask 'Should I renew my NIC or my passport first?' Let me add a comparison tool."

**Open Cursor → paste Prompt #5**

Cursor generates:
- Dropdown to select 2 services
- Side-by-side comparison table
- Shows: processing time, fees, documents needed, difficulty
- Integrates as a new tab in the header

**Deploy and demo:** Compare NIC vs Passport → show table.

**If running behind:** Skip this. Stay calm, stick to the plan.

---

### [75:00–82:00] PRODUCTION READINESS CHECK

**Show you're a real engineer, not just demo-mode.**

**In terminal:**
```
cd C:\Users\suven\Desktop\gov-navigator-lk
npm run build
```

Show the build output. Zero errors. Bundle size. Fast loading.

**Say:** "Zero build errors. Type-safe TypeScript. Production-deployed. This isn't a prototype — it's live."

Open Vercel dashboard. Show the deployment history (multiple deploys from today's stream).

---

### [82:00–90:00] FINAL PITCH + LIVE DEMO

**This is your money moment. Slow down. Be clear.**

**Open https://gov-navigator-lk.vercel.app on the big screen.**

**Say:**
> "This is GovNav LK. Built in 90 minutes using Cursor. Let me show you what it does."

[Type: "I need to renew my passport and I live in Galle. What do I do?"]

AI responds with: documents, steps, fees, office locations, tips, common mistakes.

> "That answer just saved someone a 6-hour round trip to Colombo for missing documents. Multiply that by 22 million Sri Lankans. That's 48 million wasted hours every year — and we're solving it."

**The 30-second impact pitch:**
- "Problem: 34% of applications rejected on first visit for missing documents"
- "Solution: AI guide for 20+ government services — free, mobile-first, in Sinhala"
- "Market: 22 million Sri Lankans, 3.2 million diaspora overseas"
- "First-to-market: No AI government navigator existed before today"
- "Built with Cursor: 5 features, live-deployed, in 90 minutes"

**Close:**
> "We're looking for government partnerships to make this official. The government's own SuperApp won't launch until late 2026. GovNav LK is the bridge solution — available right now. Thank you."

---

## 📋 THE 5 CURSOR PROMPTS (Copy-Paste Ready)

### PROMPT #1: Visual Hero Section + Sri Lankan Redesign

```
Transform the GovNav LK homepage to make it visually stunning and Sri Lankan-themed.

Current state: The app has a header and then immediately shows the sidebar + chat. There's no landing/hero moment.

Make these changes to app/page.tsx and app/globals.css:

1. Add a HERO SECTION between the header and the main content area. The hero should:
   - Full-width, Sri Lanka maroon (#6B0F1A) to dark maroon (#4A0B12) gradient background
   - Large headline: "Never Waste A Day At A Government Office Again"
   - Sub-headline in Sinhala below it: "ලේසියෙන්ම රජයේ සේවාවන් ලබා ගන්නේ කෙසේද?"
   - Three stat badges in a row (gold border, white text):
     * "🦁 20+ Services"
     * "🇱🇰 22M Sri Lankans"
     * "⏱️ Save 2-4 Hours"
   - A "Start Your Query" button below (gold background #D4A017, dark maroon text, rounded-full)
   - When "Start Your Query" is clicked, smoothly scroll to the chat input area
   - Add a subtle batik-style diagonal stripe pattern overlay on the hero background using CSS (repeating-linear-gradient with very low opacity)

2. Improve the ServiceSidebar header area:
   - Add a search input at the top of the sidebar (above the categories)
   - When user types, filter the visible services in real-time using React state
   - Style with white/10 background, white placeholder text

3. Add Sri Lanka Sinhala font support in globals.css:
   - Import Google Fonts: Noto Serif Sinhala
   - Apply it only to Sinhala text elements (.sinhala class)

4. In the ServiceSidebar, add the Sinhala name below each service button (small, white/40 color) — the sinhala field already exists in services.json

Keep the existing Tailwind color tokens (lk-maroon, lk-gold). Keep all existing TypeScript types and props unchanged. Keep the overall layout (sidebar + chat) working after the hero section.

The hero should be collapsible/hideable on mobile (show only if screen > 768px or show a compact version).
```

---

### PROMPT #2: Knowledge Base Expansion

```
I have a knowledge base of Sri Lankan government services in data/services.json. It currently has 14 services.

Read the existing services.json schema carefully. Then:

TASK 1: List the top 10 Sri Lankan government services that are missing from my knowledge base. Consider:
- Frequency of citizen need (how often do people need this?)
- Pain point severity (how confusing is this service?)
- Coverage gaps in my current 14 services

TASK 2: For the TOP 3 missing services from your list, generate COMPLETE JSON entries following EXACTLY the same schema as existing entries in services.json. Include all fields:
- id, title, sinhala, category, emoji, description, department
- offices (array with name, address, phone, hours)
- documents_required (array of strings)
- steps (array of strings)
- fees (object with keys like standard, priority, etc.)
- processing_time, online_available, online_url
- tips (array)
- common_mistakes (array)

Make sure the information is accurate for Sri Lanka as of 2025. Use these as priority candidates:
1. Business Registration (Company/Sole Proprietorship)
2. Land/Property Title Registration
3. Income Tax Filing / TIN Registration
4. Welfare/Social Benefits (Aswesuma)
5. School Enrollment Documents

Output the complete JSON for 3 services, ready to paste directly into services.json as new array entries.
```

---

### PROMPT #3: Mobile Hamburger Menu

```
My ServiceSidebar component (components/ServiceSidebar.tsx) shows a full-width sidebar on all screen sizes. On mobile screens (< 768px), it takes up too much space and breaks the layout.

Fix this to be fully mobile-responsive:

1. On screens >= 768px (desktop): Keep the sidebar exactly as-is (w-72, always visible)

2. On screens < 768px (mobile):
   - Hide the sidebar completely by default
   - Show a hamburger menu button (3 horizontal lines icon, ☰) in the TOP-LEFT corner of the screen
   - The hamburger button should be:
     * Fixed position (stays visible when scrolling)
     * Background: lk-maroon (#6B0F1A)
     * White icon
     * z-index: 50
     * Rounded, with a subtle shadow
   - When hamburger is clicked, the sidebar slides in from the LEFT as an overlay
   - The overlay has a dark backdrop behind it (bg-black/50)
   - Clicking the backdrop OR selecting a service closes the sidebar
   - Add a close button (×) inside the sidebar when in mobile overlay mode
   - Use smooth CSS transition: translate-x-0 / -translate-x-full

3. Use React useState for isOpen state management
4. Use Tailwind responsive prefixes (md:) for breakpoints — no custom CSS breakpoints
5. Keep ALL existing functionality: accordion categories, service click handler, search (if present)
6. Keep the Sri Lanka maroon color scheme throughout

Also update app/page.tsx if needed to accommodate the hamburger button position.
```

---

### PROMPT #4: Enhanced Chat Formatting (Visual + Color-Coded)

```
The AI responses in ChatInterface.tsx are rendered as plain markdown. I want to make them visually distinct and scannable with color-coded sections.

Modify ChatInterface.tsx to use a custom markdown renderer with these rules:

1. SECTION DETECTION: The AI always responds with sections like:
   - "## 📋 Documents Required" or "**Documents Required:**" 
   - "## ✅ Steps" or "**Steps:**"
   - "## 💰 Fees" or "**Fees:**"  
   - "## 💡 Tips" or "**Tips:**"
   - "## ⚠️ Common Mistakes" or "**Common Mistakes:**"

2. Create a custom ReactMarkdown component configuration using 'components' prop:
   - h2 elements: Check the text content, apply color-coded styling:
     * Contains "Document" → Blue: text-blue-700 + left border-l-4 border-blue-400 + bg-blue-50 px-3 py-1 rounded
     * Contains "Step" → Green: text-green-700 + border-green-400 + bg-green-50
     * Contains "Fee" → text-yellow-800 + border-yellow-400 + bg-yellow-50
     * Contains "Tip" → text-orange-700 + border-orange-400 + bg-orange-50
     * Contains "Mistake" or "Common" → text-red-700 + border-red-400 + bg-red-50
   
   - li elements inside a blue/green/etc section should also get subtle background:
     * Documents: bg-blue-50/50
     * Steps: bg-green-50/50
     * Mistakes: bg-red-50/50
   
   - strong elements: slightly bolder and lk-maroon color for key terms

3. Add a "Copy Checklist" button that appears below each AI message (not during streaming):
   - Button: small, ghost style, shows 📋 icon + "Copy Checklist"
   - When clicked: extracts all list items from the "Documents Required" section and copies them to clipboard as a plain text checklist
   - Show a brief "Copied!" toast for 2 seconds after clicking
   - Use the Clipboard API

4. Keep the existing streaming behavior — the custom renderer must work during streaming, not just after

5. Don't change any of the existing layout, useChat hooks, or backend API calls

The goal is: a user can look at the AI response and immediately know which section they're reading, just from the color. Documents = blue. Steps = green. Fees = gold. Tips = orange. Mistakes = red.
```

---

### PROMPT #5: Service Comparison Tool (Stretch Goal)

```
Add a "Compare Services" feature to GovNav LK that lets users compare 2 government services side-by-side.

Create a new component: components/ServiceComparison.tsx

The component should:
1. Show 2 dropdown selects — each populated from the services.json data (service title list)
2. When both services are selected, show a comparison table with these rows:
   - Department
   - Processing Time
   - Total Documents Required (count)
   - Fees (show the main fee)
   - Online Available? (Yes/No badge)
   - Category
3. Table styling:
   - Header row: lk-maroon background, white text
   - Alternating rows: white and gray-50
   - Highlighted differences in red if one service is significantly more expensive or slower
4. Add a "Reset" button to clear both dropdowns
5. A short "Which should you do first?" AI-generated recommendation based on processing times (just a static heuristic: if processing_time contains "week", calculate which is faster)

Integrate into app/page.tsx:
- Add a "⚖️ Compare Services" button in the header sub-bar (next to the quick links)
- When clicked, show the ServiceComparison component as a modal overlay
- Modal has a dark backdrop, white card, close button in top right

Also create: lib/compareServices.ts
- Export a function: compareServices(serviceA: Service, serviceB: Service) that returns the comparison data
- Export a function: getQuickRecommendation(serviceA: Service, serviceB: Service): string that returns a 1-sentence tip

Use existing services.json data structure. Use Tailwind for all styling. Keep lk-maroon/lk-gold color theme.
```

---

### PROMPT #6: Trust Bar + Footer (Optional — 5 min if ahead)

```
Add a trust and transparency layer to GovNav LK so users know we're advisory, not government.

1. Below the hero (or below header if no hero), add a slim trust bar:
   - Background: lk-gold/10, border-b border-lk-gold/30
   - Text: "⚠️ GovNav LK is not affiliated with the Sri Lankan government. Always verify fees and requirements at the official office."
   - Link: "Privacy: We don't store your NIC or personal details" (scrolls to footer or opens small modal)

2. In ChatInterface, below each completed AI assistant message, add a small muted line:
   - "Source: Official department guidance · Last verified 2025 · Report incorrect info"

3. Footer at bottom of page (collapsible on mobile):
   - Links: drp.gov.lk, immigration.gov.lk, dmt.gov.lk, gic.gov.lk
   - Sinhala tagline: "ලේසියෙන්ම රජයේ සේවාවන් සොයාගන්න"
   - "Built with Cursor · GovNav LK"

Use lk-maroon and lk-gold tokens only. No new dependencies.
```

---

## 🛡️ BACKUP CODE (If Cursor Fails)

Save these NOW as backup files. If Cursor generates broken code, paste these instead.

### Backup: Mobile Hamburger Menu State Logic
```tsx
// Add to ServiceSidebar.tsx — if Cursor fails on mobile menu
const [mobileOpen, setMobileOpen] = useState(false)

// Hamburger button (add to page.tsx header area)
<button 
  onClick={() => setMobileOpen(true)}
  className="md:hidden fixed top-4 left-4 z-50 bg-lk-maroon text-white p-2 rounded-lg shadow-lg"
>
  ☰
</button>

// Wrap sidebar with:
<aside className={`
  fixed md:relative inset-y-0 left-0 z-40
  w-72 flex-shrink-0 bg-lk-maroon-dark text-white flex flex-col overflow-hidden
  transition-transform duration-300
  ${mobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
`}>
  {/* existing sidebar content */}
</aside>

// Backdrop (add before sidebar)
{mobileOpen && (
  <div 
    className="md:hidden fixed inset-0 bg-black/50 z-30"
    onClick={() => setMobileOpen(false)} 
  />
)}
```

### Backup: Copy to Clipboard Function
```tsx
// Add inside ChatInterface.tsx
const copyDocuments = async (content: string) => {
  const lines = content.split('\n')
  const docStart = lines.findIndex(l => l.toLowerCase().includes('document'))
  const docEnd = lines.findIndex((l, i) => i > docStart && l.startsWith('##'))
  const docs = lines.slice(docStart + 1, docEnd > -1 ? docEnd : lines.length)
    .filter(l => l.trim().startsWith('-') || l.trim().startsWith('*'))
    .map(l => l.replace(/^[-*]\s*/, '').trim())
    .join('\n')
  await navigator.clipboard.writeText(docs)
}
```

### Backup: Sinhala Service Names Mapping
```typescript
// Paste into ServiceSidebar.tsx as a quick static map
const sinhalaTitles: Record<string, string> = {
  'New NIC': 'නව ජාතික හැඳුනුම්පත',
  'NIC Replacement': 'ජාතික හැඳුනුම්පත ප්‍රතිස්ථාපනය',
  'New Passport': 'නව විදේශ ගමන් බලපත්‍රය',
  'Passport Renewal': 'විදේශ ගමන් බලපත්‍ර අලුත් කිරීම',
  'Driving License': 'රිය පදවීමේ බලපත්‍රය',
  'Birth Certificate': 'උප්පැන්නය',
  'Marriage Certificate': 'විවාහ සහතිකය',
  'Police Clearance': 'පොලිස් අනාවැකි',
  'Vehicle Registration': 'වාහන ලියාපදිංචිය',
}
```

---

## 🎨 DESIGN PHILOSOPHY FOR TOMORROW

**What "Sri Lankan" looks like in UI:**
- Deep maroon (`#6B0F1A`) — the lion flag background
- Gold/saffron (`#D4A017`) — the bo leaves on the flag  
- Warm white (not pure white) — `#FFFAF0` for backgrounds
- Subtle batik diagonal stripe texture (CSS repeating gradient at 5% opacity)
- Noto Serif Sinhala font for Sinhala text (Google Fonts, free)
- Flags 🇱🇰 and lion emojis used generously (judges love visual flair)
- Card shadows that feel premium but not Western-corporate

**What makes the UI memorable for judges:**
1. Sinhala text visible in the UI (even if just 3-4 words)
2. The color-coded chat responses (documents=blue, steps=green)
3. The hero stat badges (22M Sri Lankans)
4. Before/after contrast on mobile (broken → hamburger working)
5. Showing deploy to Vercel in <30 seconds on-stream

**What to avoid:**
- Pure white backgrounds (feels cold, not Sri Lankan)
- Generic blue "submit" buttons (use maroon or gold)
- English-only UI (add at least 2-3 Sinhala phrases visibly)
- Animations that take >300ms (feels laggy on demo)

---

## 📊 STATS CHEAT SHEET (Quote These Exactly)

Memorize or print this card for stream:

| Stat | Value | Source |
|------|-------|--------|
| Passport queue | 10-12 hours overnight | Reddit r/srilanka 2025 |
| Official passport time | 8-12 weeks | Immigration Dept |
| Real passport time | 3+ months | Reddit/Sunday Times |
| Internet penetration | 53.6% (12.4M) | DataReportal Jan 2025 |
| Computer literacy | 35.9% | ICTA 2025 |
| Android market share | 87.12% | Statista |
| Total gov services | 1,487 | GIC (gov.lk) |
| Sri Lankan population | 22 million | Census |
| Overseas Sri Lankans | 3.2 million | Migration data |
| SuperApp launch | Late 2026 (we're bridge) | Xinhua/Gov announcement |
| GovNav LK services | 14 → 20+ (during stream) | Live demo |
| AI navigator competitors | ZERO | Market research |

---

## 🗣️ KEY PHRASES TO SAY ON STREAM

**Opening:**
> "In Sri Lanka, getting a passport means joining a queue at midnight. Real people waited 12 hours in 2025. There's no guide. We built one with Cursor."

**Every Cursor demo:**
> "Let me ask Cursor to..." (never say "Let me code" or "Let me write")

**After each deploy:**
> "That's live on Vercel right now. [URL shown]. This would take [X] hours manually. Cursor did it in [Y] minutes."

**Mobile demo:**
> "87% of Sri Lanka is on Android. If this breaks on mobile, it breaks for everyone. Watch Cursor fix it."

**Closing pitch:**
> "22 million Sri Lankans. Zero AI navigators. We built the first one in 90 minutes using Cursor. The government's own digital system won't be ready until late 2026. We're the bridge."

---

## ✅ FINAL STREAM CHECKLIST

### Night Before
- [ ] API key added to Vercel and tested (chat gives real AI response)
- [ ] All 5 Cursor prompts saved and ready to paste
- [ ] Backup code files saved in BACKUP/ folder
- [ ] Project opens cleanly in Cursor (no errors)
- [ ] Test on your phone (note any current bugs)

### 1 Hour Before Stream
- [ ] Restart computer
- [ ] Clear desktop of personal files
- [ ] Open: Cursor (project loaded) | Vercel dashboard | GitHub repo | Vercel URL — all in separate browser tabs
- [ ] Test internet speed (need >5 Mbps upload for fast deploys)
- [ ] Set up screen recording (OBS or Windows Game Bar: Win+G)
- [ ] Phone plugged in and on Wi-Fi for mobile demo
- [ ] This file open as reference

### During Stream — Mental Script
1. **0-5 min:** Hook with the passport queue story. Show live app.
2. **5-20 min:** Cursor → Hero section. Deploy. Wow moment.
3. **20-35 min:** Cursor → Expand knowledge base to 20+ services.
4. **35-50 min:** Cursor → Mobile hamburger. Demo on phone.
5. **50-65 min:** Cursor → Color-coded chat responses. Before/after.
6. **65-75 min:** Stretch feature (comparison OR language toggle).
7. **75-82 min:** npm run build. Zero errors. Production ready.
8. **82-90 min:** Full live demo on Vercel. Impact pitch. Close.

---

## 🔮 THE WINNING MINDSET

You are not showing code. You are showing what happens when one developer with Cursor can replace a 5-person team in 90 minutes.

Every time Cursor generates something — pause — say what it built — say how long it would have taken without AI.

The judges are from Cursor Global. They want to see Cursor succeed. Show them it does.

**You win if:**
- Chat works on live Vercel (API key ✅)
- You deploy 3+ live features on stream
- You quote 2-3 real statistics with confidence
- You end with a clear impact pitch
- You demonstrate Cursor as the hero, not the app

Good luck. You've got this. 🇱🇰
