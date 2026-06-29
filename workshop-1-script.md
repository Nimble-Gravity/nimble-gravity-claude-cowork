# Workshop 1 — Setup & Foundations
### Facilitation script · Claude Cowork · ~90 min core (fits the 120-min Workshop 1 hub) · virtual (Teams screen-share, participants hands-on)

> **Branch:** `client-axos` — **Claude Cowork only** (no Copilot routing; the audit gap is *managed*).
> **Synced with the microsite Module 1** (`pages/training/01–03`). Each block lists a **Follow along →**
> page so participants can track on the site. Complements `pages/workshops/facilitator-guide.html` and the
> `pages/workshops/module-1-workshop.html` hub agenda — keep this file and those pages in step.

**Outcome:** every participant leaves with (1) Cowork personalized to their role, and (2) **one real
delegation run end-to-end that produced a deliverable.**

**Assumes:** pre-work attempted (desktop app installed; some ran `/cowork-cosetup`; admin consent for
M365 granted). Built to work if half the room hasn't. **Sonnet** is the default.

**Legend:** **[SAY]** talk track · **[DO]** live demo · **[THEY]** participants act · **[NOTE]** facilitator note

---

## Pre-session prep (do before you go live)
1. **Back up, then strip your account to cold** — so the before/after runs live on your own screen:
   - Copy your **global instructions** text into a scratch note; **duplicate your `about-me/` folder**
     and your `claude.md` entry file somewhere safe. *(Restore point — Block 7.)*
   - Demo from a **fresh empty folder** with **cleared Cowork global instructions** and **connectors not
     yet loaded.** Reliably cold without deleting your real `about-me/`.
2. **Confirm M365 admin consent** is granted — for **your demo account *and* the cohort.** If not, the
   live connect fails; have the fallback ready (below).
3. **Seed the demo folder** with 8–10 junk files (screenshots, stray PDFs, `Untitled 3.docx`) for the
   Block 3 cleanup.
4. **Know your fallback:** if any connector won't cooperate, `/cowork-cosetup` **still runs without the
   M365 harvest** — it just asks more questions instead of pre-filling. Nothing breaks.

### Run of show
| # | Block | Time | Follow along → |
|---|---|---|---|
| 0 | Cold open / the promise | 5 | — |
| 1 | Frame: delegate, don't chat | 12 | Lesson 1 — What Is Cowork? |
| 2 | Step 1 — install, folder, model + the cost dial | 15 | Lesson 1 + Lesson 3 "Mind the cost" |
| 3 | Step 1 — first delegation demo (cleanup) | 8 | Lesson 3 — permission mode / run & review |
| 4 | Steps 2–4 — make it yours: cold → connect M365 → cosetup → after | 26 | Lesson 2 + Lesson 3 recap |
| 5 | More connectors (preview) | 2 | Lesson 2 — connectors |
| 6 | Hands-on: your first real delegation → deliverable | 18 | Lesson 3 — pick a task |
| 7 | Wrap: safety answer + restore + homework | 7 | Lesson 3 — knowledge check |

> ~93 min core. In the 120-min hub, the extra time covers arrivals/intros, Q&A, and stragglers on setup.

---

## 0 · Cold open — the promise (5 min)
**[SAY]** "Quick show of hands — who's opened Cowork, stared at a blank screen, and closed it again?
That's the normal starting point. By the time we finish, Cowork will know your role, write in your
voice, and you'll have handed it one real piece of your work and watched it produce something you can
use. No code. If you can install an app and type a sentence, you can do this. And the question every one
of you should have — *'should I let an AI touch my work, at a bank?'* — I'll answer directly, because the
answer is the reason we can run this at Axos at all."

**[DO]** Pre-flight, 30 sec: "In Teams chat, drop a **1** if Cowork's installed, **2** if you also ran the
setup command." Gauges how much of Block 4 is *do-now* vs *verify*.

---

## 1 · Frame — delegate, don't chat (12 min)
**Follow along →** Lesson 1, *What Is Cowork?*

**[SAY]** "One distinction makes everything click. **Chat is collaborate. Cowork is delegate.** In a chat,
Claude can't open your files, so whatever it suggests, *you* go do. In Cowork, you describe the *result*,
hand it the files, and it does the work and checks in as it goes. You get back a finished document, not a
transcript you still have to act on. Anthropic says it bluntly: without training, people use Cowork
exactly like chat and never see the difference. That gap is why we're here."

**[SAY] — the guardrails (the bank's answer):** "Three of them, and they *are* the safety answer:
1. It **only touches folders you hand it** — you choose the blast radius.
2. It **runs code in an isolated VM** on your machine.
3. It **always asks before permanently deleting** anything."

**[SAY] — what it's built on (brief):** "Claude Cowork is the **Claude Code engine** inside the Claude
desktop app — the same agent developers use, with no terminal. We teach Claude Cowork, exclusively;
Lesson 1 covers what it's built on. Where the work touches regulated data, the controls are the story —
we'll close on that."

**[NOTE]** This branch dropped the "two products / Copilot" framing — don't introduce Copilot. Governance
(the managed audit gap) is Workshop 4; one sentence here, then move.

---

## 2 · Step 1 — install, folder, model + the cost dial (15 min)
**Follow along →** Lesson 1 (guardrails); the cost dial is Lesson 3, *"Mind the cost."*

**[DO]** Open the Claude desktop app → **Cowork** tab. "This is Cowork, not Chat — different thing."

**[DO]** Create a working folder, `cowork-workshop`. **[SAY]** "Think of this as your **shared desk with
Cowork. Everything you want it to work on goes in here. Everything you don't, stays outside.** That folder
*is* your security boundary."

**[THEY]** "Everyone make one empty folder in Documents called `cowork-workshop` — **not** a real shared
drive, nothing with client data. Grant Cowork access to just that one."

**[NOTE]** For Axos: say it out loud — **don't grant a parent folder "to be safe"; that hands over
everything inside it.** A folder per task, not per drive.

**[DO]** Open the model selector → turn on **extended thinking**, set **Sonnet**.

### The cost dial — model, session size, usage
**[SAY]** "Three habits that keep this cheap and sharp. Think of them as one dial: how much you spend, and
how good the output is.
**One — your model is the dial.** Leave it on **Sonnet** with extended thinking on. Opus is incredible for
genuinely hard reasoning but burns far more — *when* it earns its keep is a Workshop 2 conversation.
**Two — one task per session.** A session carries everything said so far as context, so long threads cost
more and drift. Batch related steps together, then **start a fresh session for the next task.**
**Three — spend tokens where they earn it.** Use plain **Chat** for quick questions — don't spin up a
delegation for a one-liner; and keep an eye on **Settings → Usage** so there are no surprises.
The full playbook — when Opus pays off, slicing long work, reading the usage dashboard — is Workshop 2."

**[NOTE]** Don't over-explain tokens to a non-technical room — "context the session carries" and "Chat for
small stuff" is the right altitude. The Usage dashboard detail is Workshop 2; resist demoing it here.

---

## 3 · Step 1 — first delegation, live (8 min)
**Follow along →** Lesson 3, *permission mode* + *run & review.*

**[NOTE]** Safest possible first delegation — no sensitive data — and it teaches the whole plan/approval loop.

**[DO]** Type live into the seeded folder:
> "Clean up this folder — organize the loose files into folders by category, rename anything that needs a
> clearer name, leave anything already named deliberately, and don't touch anything already inside a subfolder."

**[SAY]** as it runs: "Watch the right side — that's the **plan**, it's giving itself a task list. **Read the
plan before you read the result** — fixing a wrong plan costs nothing; fixing finished work costs a lot."

**[DO]** At an approval pause, narrate it, then type *"Before you do anything, which files are you about to
delete?"* **[SAY]** "That's **ask-before-acting** mode — the right default. You never approve something you
don't understand. That loop — it plans, it pauses, you read, you approve or redirect — is the muscle for
the whole day."

---

## 4 · Steps 2–4 — make it yours: the live before → after (26 min)
**Follow along →** Lesson 2, *Get Set Up* (connectors + cosetup); Lesson 3 recap (two-prompt aha).

**[SAY]** "Right now Cowork knows *nothing* about you — a brilliant new hire with no manual. Steps two
through four write that manual. I stripped my own account back to nothing this morning so you can see the
before and after for real."

### (a) Cold before
**[DO]** Run the held-constant prompt:
> **"Given who I am, what are the three highest-leverage things you could help me with this week?"**

**[SAY]** Narrate the generic menu. "That's Cowork cold. Remember this answer — we'll run the *exact same
sentence* in a few minutes."

### (b) Connect M365 — the connector moment
**[SAY]** "First thing that changes it: let it see where I already work." **[DO]** Settings → Connectors →
**Microsoft 365** → consent.
**[SAY] — safety at the click (bank-grade):** "Three things that matter here: an admin consents **once**;
it uses **delegated permissions** — it sees **only what I can see**; and **every call is logged in your
M365 audit log.** That last one is why this clears at a bank."

**[SAY] — the fallback, said out loud:** "If your connector won't cooperate — consent not through yet, or
it just hiccups — **don't fight it.** Run the setup command anyway. Without the M365 harvest it simply asks
you a few more questions instead of pre-filling. **You still get the full personalization; it just takes a
little longer.**" *(This is the "Can't connect? Run it anyway" tip on Lesson 2.)*

**[NOTE]** Expect 2–3 people to stall on the connector. Point them to the fallback and keep moving.

### (c) Build it live — `/cowork-cosetup`
**[DO]** Fresh session → `/cowork-cosetup`. **[SAY]** "It **reads first, then asks** — pulls my role and
team from M365 and asks me to *confirm*, not asking cold. It adapts to your role — delivery, ops, sales,
enablement, leadership. Anything you'd rather not answer, you skip — it drops a `[FILL IN]`. **A setup with
a few gaps beats one you never finish.**"

**[SAY] — what it's writing (briefly):** "Two things: **global instructions** it reads at the start of
every session, and an **`about-me/` folder** — your role and tools, your `voice-profile`, your
`writing-rules`, plus a living `team` and a `memory` file — **the notebook it checks every morning** so it
never loses where your projects stand. The entry file it writes is **`claude.md`**. You *could* build these
by hand. We don't — one command does it."

**[THEY]**
- **Did pre-work:** open `voice-profile.md` and `writing-rules.md`, check they sound like you — those two
  are worth getting right.
- **Didn't:** run `/cowork-cosetup` now, get through the role questions; finish the rest as homework.
  **Connector won't connect? Run it anyway** — the fallback above applies to you too.
- **Don't have the skill?** Lesson 2 (§4) has the copy-paste install — paste the `SKILL.md` into a fresh
  session and ask Cowork to "make this a skill," then run it from a new session.

**[NOTE]** ~12 min hands-on — circle / watch Teams, champions help. Don't wait for 100%; setup continues as
homework.

### (d) After — same prompt
**[DO]** Re-run the **identical** held-constant prompt → role- and work-specific answer. **[SAY]** "Same
sentence. Generic menu before; *your actual job* now. And this is **20 minutes of setup, not 2 months.**"
**[THEY]** Two-prompt aha: *"Recap what you know about me"* then the held-constant prompt; paste your best
second-answer line into Teams. **[SAY]** "If the mirror's blurry, your profile's thin — two minutes in
`voice-profile.md`, re-run. Vague in, vague out."

---

## 5 · More connectors (preview) (2 min)
**Follow along →** Lesson 2, *connectors.*

**[SAY]** "M365's the big one. Two more to know exist: a **Claude-in-Chrome** extension that lets it browse
pages — useful but **beta and optional**, skip it today; and a growing **connector marketplace**. Same rule
every time: **least privilege — connect what the task needs, add the rest later.** We put connectors to
real work in Workshop 2."

---

## 6 · Hands-on — your first real delegation (18 min)
**Follow along →** Lesson 3, *pick a first task* (the starters card).

**[SAY]** "The point of the day: hand it one *real* piece of your work that ends in something you can check.
For Axos, good first ones: **summarize a loan file or deposit relationship** framed for your role; **work
through a compliance or policy document** for the key points and gaps; or **draft a recurring memo** in your
voice. Keep it low-sensitivity for round one. Sonnet, **ask-before-acting** on, into your `cowork-workshop`
folder — and remember: **fresh session for this task.** When you move to your homework delegation tomorrow,
start another one."

**[THEY]** Each person runs one task end-to-end: state the outcome → read the plan → approve each step →
check the result against the goal.

**[SAY]** "Two reps if you can — once with a sharp brief, once vague — and compare. That difference is the
lesson that sticks."

**[NOTE]** This **is** the success metric (100% produced a deliverable in Session 1). Make sure everyone has
*something* before close; champions mop up. Every Axos use case is **a draft a banker signs off on** —
Cowork drafts, it doesn't decide.

**[THEY]** Post your deliverable (or screenshot) in Teams. House rule from here on: **when you delegate
something good, you post it.**

---

## 7 · Wrap — the safety answer + restore + homework (7 min)
**Follow along →** Lesson 3, *knowledge check* (the quiz at the bottom of the page).

**[SAY] — close the loop:** "I promised to answer *'should I let AI touch my work at a bank?'* It's exactly
what we did:
- It only sees the **folders you grant.**
- Code runs in an **isolated VM**, and it **asks before it deletes.**
- Connectors use **delegated permissions** and land in your **M365 audit log.**
- And the June-2026 audit-coverage gap is **managed** — least privilege, approvals on, plus the admin
  dashboard and Analytics API. Anything needing **zero-retention or centralized audit** routes to
  Anthropic's audited surfaces (the API or Claude Code Enterprise), not the Cowork interface. Governance in
  depth is Workshop 4.
You're not trusting a black box. You're granting one folder and reading what it's about to do."

**[THEY]** "Two minutes — run the **knowledge check** at the bottom of Lesson 3 to lock it in."

**[SAY] — homework:** "Before next session: run **one more real delegation** and post it in Teams — the
people who try one thing between sessions are the ones still using this in a month. And finish your
`[FILL IN]`s."

**[SAY] — preview:** "Workshop 2 — real use cases for your role, working effectively without overspending,
and the failure modes to watch. Today you got set up; next you put it to work."

**[NOTE — for you, off-mic] Restore your account:** paste your backed-up global instructions back and
restore your real `about-me/` folder. Don't leave your account on the throwaway demo profile.

---

### Facilitator appendix
- **Connector struggles (say it kindly, keep moving):** *"Run `/cowork-cosetup` anyway — no harvest just
  means a few more questions. You lose nothing but a couple of minutes."*
- **Compress to 60:** narrate Block 3 from a clip; make Block 6 homework-only; Block 5 stays one line.
- **Expand to fill 120:** second rep in Block 6 on a participant's own doc; 3–4 people screen-share results;
  pull the Workshop 2 cost playbook forward.
- **Top risks:** pre-work/consent gaps (have the fallback + a "watch now, do tonight" path); someone connects
  real data (redirect to clean folder, restate least privilege); cosetup not installed (copy-paste-the-skill
  path from Lesson 2).
- **Transcript lines worth keeping verbatim:** "shared desk — everything you want it to do goes in here," "a
  new hire's manual on day one," "the notebook it checks every morning," "don't build a spaceship when a
  bicycle will do," "vague instructions, vague outputs."

---

### Script ↔ microsite sync notes
- **Branch positioning:** Claude Cowork only — no Copilot; the audit gap is *managed* (see `client-notes/axos.md`).
- **Entry file name:** `claude.md` (matches Lesson 2, the skill, the brief, and `resources.html`).
- **Held-constant prompt** matches Lesson 3 Prompt 2 and the `cowork-cosetup` skill's after-setup prompt.
- **Cost dial** (Block 2) matches Lesson 3 "Mind the cost"; the deep version lives in Lesson 5.
- **Connector fallback** (Block 4b) matches the "Can't connect? Run it anyway" tip on Lesson 2.
- **Overlap:** `pages/workshops/facilitator-guide.html` is the on-site facilitator guide; this script is the
  detailed Workshop 1 spine and can be folded into it.
