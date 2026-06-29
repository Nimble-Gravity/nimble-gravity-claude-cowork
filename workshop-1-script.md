# Workshop 1 — Setup & Foundations · Facilitator Script
### Claude Cowork · 2 hours, hands-on · virtual (Teams screen-share, participants hands-on)

> **Conforms to the on-site agenda** (`pages/workshops/module-1-workshop.html`, `syllabus.html`,
> `facilitator-guide.html#workshop-1`). This is the detailed spine under the facilitator guide — same
> 8-slot shape: **Open · Teach · Demo · Discuss · Break · Lab · Debrief · Close.**
> **Branch:** `client-axos` — **Claude Cowork only** (no Copilot; the audit gap is *managed*).

**Outcome:** every participant leaves with (1) Cowork personalized to their role (`claude.md` + `about-me/`),
and (2) **one real delegation run end-to-end that produced a deliverable.**

**Demo asset:** the **sample loan file** (`assets/demo/sample-loan-file.md`) + the **exact prompt** are on the
[facilitator guide](pages/workshops/facilitator-guide.html) and in the [resource library](pages/workshops/resources.html).

**Legend:** **[SAY]** talk track · **[DO]** live demo · **[THEY]** participants act · **[NOTE]** facilitator note

---

## Pre-session prep
1. **Stage the demo folder.** Download `sample-loan-file.md`, put it alone in a clean folder (e.g.
   `loan-demo`). Have the **exact prompt** open to paste.
2. **Set up the before/after.** Back up your real setup (copy your **global instructions**; duplicate your
   `about-me/` folder and `claude.md`), then have a **cold path** ready — a fresh session with cleared global
   instructions and no `about-me/`, *or* a pre-captured screenshot of the cold result. You'll restore at Close.
3. **Confirm M365 admin consent** for your account *and* the cohort. If it's not in, use the fallback below.
4. **Know the fallback:** if a connector won't authorize, `/cowork-cosetup` **still runs without the M365
   harvest** — it just asks more questions. Nothing breaks.

### Run of show — the 2-hour agenda
| Time | Slot | Content |
|---|---|---|
| 0:00–0:10 | **Open** | Welcome, objectives, maturity poll |
| 0:10–0:35 | **Teach** | What Is Cowork? (0:10–0:22) · Get Set Up (0:22–0:35) |
| 0:35–0:55 | **Demo** | Summarize a loan file — **cold, then after co-setup** |
| 0:55–1:05 | **Discuss** | One task you'd hand off |
| 1:05–1:10 | **Break** | — |
| 1:10–1:50 | **Lab** | Your first Cowork session (40 min) |
| 1:50–1:58 | **Debrief** | Debrief + knowledge check |
| 1:58–2:00 | **Close** | Homework + what's next + feedback |

---

## Open · 0:00–0:10 (10 min)
**[SAY]** "Quick show of hands — who's opened Cowork, stared at a blank screen, and closed it again? Normal
starting point. By the time we finish, Cowork will know your role, write in your voice, and you'll have
handed it one real piece of your work and watched it produce something you can use. No code. And the
question every one of you should have — *'should I let an AI touch my work, at a bank?'* — I'll answer
directly at the end, because the answer is the reason we can run this at Axos at all."

**[DO]** **Maturity poll** — everyone opens the [AI maturity poll](pages/training/index.html#maturity). Ask
for a show of hands per level; **pitch the session to the middle.**

**[DO]** Pre-flight, 30 sec: "In Teams chat, drop a **1** if Cowork's installed, **2** if you also ran the
setup command." Tells you how much of the Lab is *do-now* vs *verify*.

---

## Teach · 0:10–0:35 (25 min)

### What Is Cowork? · 0:10–0:22 — *follow along: Lesson 1*
**[SAY]** "One distinction makes everything click. **Chat is collaborate. Cowork is delegate.** In a chat,
Claude can't open your files, so whatever it suggests, *you* go do. In Cowork, you describe the *result*,
hand it the files, and it does the work and checks in as it goes. You get back a finished document, not a
transcript you still have to act on. Without training, people use Cowork exactly like chat and never see
the difference — that's the gap we close today."

**[SAY] — guardrails (the bank's answer):** "Three, and they *are* the safety answer: it **only touches
folders you hand it**; it **runs code in an isolated VM**; it **always asks before it permanently deletes.**"

**[SAY] — what it's built on:** "Claude Cowork is the **Claude Code engine** inside the desktop app — the
same agent developers use, no terminal. We teach Claude Cowork, exclusively."

**[NOTE]** No Copilot framing on this branch. Governance depth is Workshop 4 — one line, move on.

### Get Set Up · 0:22–0:35 — *follow along: Lesson 2 + Lesson 3 "Mind the cost"*
**[SAY] — connectors:** "Let Cowork see where you already work. Connect **Microsoft 365**: an admin consents
**once**, it uses **delegated permissions** — sees only what *you* can — and **every call lands in your M365
audit log.** That's why it clears at a bank." **[SAY] — fallback:** "If your connector won't authorize,
**don't fight it** — run `/cowork-cosetup` anyway; it just asks more questions instead of pre-filling."

**[SAY] — the cost dial (say it now, repeat it):** "Three habits keep this cheap and sharp. **Sonnet is the
dial** — leave it there; Opus only for genuinely hard reasoning (Workshop 2). **One task per session** —
long threads cost more and drift; fresh session for the next task. **Chat for the small stuff** — don't spin
up a delegation for a one-liner — and watch **Settings → Usage.**"

**[SAY] — co-setup overview:** "Setup is one command — `/cowork-cosetup`. It **reads first, then asks**:
pulls your role and team from M365 and has you confirm, adapts to your role, and anything you skip it marks
`[FILL IN]`. It writes a **`claude.md`** entry file plus an **`about-me/` folder** — your voice, your rules,
a living `team` and `memory`. You'll run it in the lab."

---

## Demo · 0:35–0:55 (20 min) — Summarize a loan file, before → after
*Asset: `assets/demo/sample-loan-file.md` + the exact prompt — on the [facilitator guide](pages/workshops/facilitator-guide.html#workshop-1).*

**[SAY]** "Here's the difference setup makes — same file, same prompt, run twice." **[DO]** Grant Cowork the
`loan-demo` folder (the sample loan file). **[NOTE]** Least privilege out loud: one folder, not a parent.

### (a) Cold — before co-setup
**[DO]** On your **cold path** (stripped/clean session), paste the **exact prompt**:
> *"Read the loan file in this folder and write a one-page credit summary I can take to committee. Cover:
> the borrower and the request, the key financials and any trends, collateral and guarantors, covenant
> headroom, and the top three risks to flag. Don't invent numbers — if something isn't in the file, say so."*

**[SAY]** as it runs: "Watch the right side — that's the **plan.** Read the plan before the result; fixing a
wrong plan costs nothing." **[DO]** Approve a step; open the finished summary. **[SAY]** "Useful — but
generic. Neutral tone, generic structure. Remember it; we'll run the *exact same sentence* again."

### (b) After — with your real personalized profile
**[DO]** Switch to your real (personalized) account and paste the **identical** prompt against the same file.
**[SAY]** "Same file, same sentence. Now it comes back in *my* voice, in the committee-memo format I actually
use, framed for a credit role — it flags the thin DSCR headroom, the customer concentration, the stale
financials — and it says what's *missing* instead of inventing it. That's `claude.md` and `about-me/` doing
the work. And this is **20 minutes of setup, not 2 months.**"

**[SAY] — bank framing:** "This is a **draft a banker signs off on** — Cowork drafts, it doesn't decide.
Kept on **Sonnet** the whole time."

---

## Discuss · 0:55–1:05 (10 min) — One task you'd hand off
**[SAY]** "Go around — name **one repetitive, document-heavy task** from your week you'd hand off. Concrete
wins: *'summarize my deposit-relationship notes,' 'first-pass a compliance doc.'*" **[DO]** Capture answers
in Teams — **these seed Workshop 2's use-case shortlist.**

---

## Break · 1:05–1:10 (5 min)

---

## Lab · 1:10–1:50 (40 min) — Your first Cowork session
*Follow along: Lesson 3. Protect this block — it's where the value lands.*

**[THEY] — finish setup:** "Run `/cowork-cosetup` if you haven't, and confirm the files exist — `claude.md`
plus the `about-me/` folder. Open `voice-profile.md` and `writing-rules.md` and make them sound like you;
those two are worth getting right. **Connector won't connect? Run it anyway.**"

**[THEY] — the two-prompt aha:** "New session, two prompts:
1. *'Recap what you know about me.'*
2. *'Given who I am, what are the three highest-leverage things you could help me with this week?'*
Paste your best second answer into Teams. If the mirror's blurry, your profile's thin — fix
`voice-profile.md` and re-run."

**[THEY] — first delegation → a deliverable:** "Now delegate one real task that ends in something you can
check. **Sonnet, ask-before-acting on, one clean folder, fresh session.** Starters: summarize a **loan file
or deposit relationship**; work through a **compliance/policy doc** for points and gaps; or draft a
**recurring memo** in your voice. No file handy? Use the **sample loan file** and the demo prompt. Read the
plan, approve each step, check the result against your bar — then **post the deliverable in Teams.**"

**[NOTE]** Circulate — help with access and folder grants. Don't wait for 100%; setup spills to homework.
Make sure **everyone has a deliverable** before Debrief (champions mop up). House rule: **delegate something
good, you post it.**

---

## Debrief · 1:50–1:58 (8 min) — Debrief + knowledge check
**[SAY] — what surprised you?** Take two or three.

**[SAY] — the safety answer (close the loop):** "I promised to answer *'should I let AI touch my work at a
bank?'* It's exactly what we did:
- It only sees the **folders you grant**; code runs in an **isolated VM**; it **asks before it deletes.**
- Connectors use **delegated permissions** and land in your **M365 audit log.**
- The June-2026 audit-coverage gap is **managed** — least privilege, approvals on, the admin dashboard +
  Analytics API. Work needing **zero-retention or centralized audit** routes to Anthropic's audited surfaces
  (the API or Claude Code Enterprise), not the Cowork interface. Governance in depth is Workshop 4."

**[THEY]** "Two minutes — run the **knowledge check** at the bottom of Lesson 3 to lock it in."

---

## Close · 1:58–2:00 (2 min) — Homework + what's next
**[SAY] — homework:** "Before next session: run **one more real delegation** and post it in Teams — the
people who try one thing between sessions are the ones still using this in a month. Finish your `[FILL IN]`s."
**[SAY] — next:** "Workshop 2 — real use cases for your role, working effectively without overspending, and
the failure modes to watch." **[DO]** Drop the **2-minute [feedback](pages/workshops/feedback.html)** link.

**[NOTE — off-mic] Restore your account:** paste your backed-up global instructions back and restore your
real `about-me/`. Don't leave it on the cold demo profile.

---

### Facilitator appendix
- **Hold the lab.** If you run long, **cut the teach, not the lab** — it's the 40 minutes that matter.
- **Connector struggles (keep moving):** *"Run `/cowork-cosetup` anyway — no harvest just means a few more
  questions."*
- **Before/after logistics:** switching from a cold to a personalized account live can be fiddly — a
  **pre-captured screenshot** of the cold result is a fine stand-in; run the *after* live.
- **Top risks:** pre-work/consent gaps (use the fallback + a "watch now, do tonight" path); someone grants a
  real data folder (redirect to a clean one, restate least privilege); cosetup not installed (copy-paste the
  `SKILL.md` from Lesson 2).
- **Lines worth keeping verbatim:** "shared desk — everything you want it to do goes in here," "a new hire's
  manual on day one," "the notebook it checks every morning," "vague instructions, vague outputs."

### Script ↔ on-site sync notes
- **Agenda** matches `module-1-workshop.html` / `syllabus.html` (8 slots, 2 hours) and the
  `facilitator-guide.html#workshop-1` demo + discussion.
- **Demo asset:** `assets/demo/sample-loan-file.md`; the **exact prompt** is the held-constant before/after
  prompt and matches the code block on the facilitator guide.
- **Entry file** is `claude.md`; the relevance prompt matches Lesson 3 Prompt 2 and the cosetup skill.
- **Cost dial** lands in Teach (Lesson 3 "Mind the cost"); deep version is Lesson 5.
