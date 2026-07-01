# Workshop 2 — Use Cowork · Facilitator Script
### Claude Cowork · 2 hours, hands-on · virtual (Teams screen-share, participants hands-on)

> **Conforms to the on-site agenda** (`pages/workshops/module-2-workshop.html`, `syllabus.html`,
> `facilitator-guide.html#workshop-2`). Same 8-slot shape as W1: **Open · Teach · Demo · Discuss · Break ·
> Lab · Debrief · Close.** **Branch:** `client-axos` — **Claude Cowork only.**

**Outcome:** every participant (1) **runs a real banking task end to end to a deliverable**, and (2) **names
the recurring workflow they'll turn into a skill in Workshop 3** — while learning to work **effectively and
safely** (Sonnet, permission modes, prompt injection, least-privilege folders).

**Demo asset:** the **sample loan file** (`assets/demo/sample-loan-file.md`) — the same one from Workshop 1;
today it produces a fuller **credit memo with flagged risks**. On the
[facilitator guide](pages/workshops/facilitator-guide.html#workshop-2) and in the
[resource library](pages/workshops/resources.html).

**Legend:** **[SAY]** talk track · **[DO]** live demo · **[THEY]** participants act · **[NOTE]** facilitator note · **[POLL]** Teams poll (pre-build — see prep)

**Follow-along:** the microsite tracks this script slot-by-slot. Participant **home base is the
[Workshop 2 hub](pages/workshops/module-2-workshop.html)** — the four lessons, the lab (with both track
prompts in tabs), and the downloads all hang off it. Each slot below names the page to be on.

---

## Pre-session prep
1. **Stage the demo folder.** Put `sample-loan-file.md` alone in a clean folder (e.g. `loan-demo`). Have the
   **credit-memo prompt** (below) open to paste.
2. **Load a personalized profile for the demo.** Run the demo on **Maya's profile** (`assets/demo/maya-profile/`)
   or your own — so the memo comes back committee-ready, in a credit-analyst voice. (No before/after today;
   everyone's already set up from W1.)
3. **Confirm folder access + the least-privilege story.** You'll grant only the loan folder on screen.
4. **Have a prompt-injection line ready** to narrate (see the Demo). Optional: a second doc in the folder for
   a multi-file feel.
5. **Pre-build the Teams polls** so each launches in one click (they're marked **[POLL]** at each slot below):
   - Open — "Since Workshop 1, how much have you used Cowork?" *(single)*
   - Open — "Which best describes your day-to-day work?" *(single)*
   - Discuss — "Which use cases would save you the most time? Pick up to 2." *(multi-select)*
   - Debrief — "How ready do you feel to run a real task on your own?" *(single)*
   - Close — "How useful was today? 1–5." *(single)*
   Export the **Discuss** results after — that ranking is your Workshop 3 skill backlog and Workshop 4 demand data.

### Run of show — the 2-hour agenda
| Time | Slot | Content |
|---|---|---|
| 0:00–0:10 | **Open** | Recap W1 homework + objectives |
| 0:10–0:35 | **Teach** | Use cases (0:10–0:20) · Working effectively (0:20–0:30) · Folder access (0:30–0:35) |
| 0:35–0:55 | **Demo** | A credit memo from a loan file |
| 0:55–1:05 | **Discuss** | Shortlist your use cases |
| 1:05–1:10 | **Break** | — |
| 1:10–1:50 | **Lab** | Use Cowork Lab → a deliverable (40 min) |
| 1:50–1:58 | **Debrief** | Name the recurring part + knowledge check |
| 1:58–2:00 | **Close** | Homework + what's next + feedback |

---

## Open · 0:00–0:10 (10 min)
**[SAY] — recap:** "Before we get into today, thirty seconds on where we are in the series. Workshop 1
covered what Cowork is, how it differs from chat, and your first delegation. Today we go deeper: real banking
use cases, how to work effectively without overspending, and a task you will run end to end to a finished
deliverable. The thread across all four workshops: W1 gave you the setup, today gives you the workflow, W3
packages it as a reusable skill, and W4 governs and scales it. Keep that arc in mind as we go."

**[DO] — home base:** "Open the **[Workshop 2 hub](pages/workshops/module-2-workshop.html)** now — that's your
page for today; every lesson, the lab, and the downloads hang off it, and I'll call out which one to open as
we go."

**[POLL] — usage pulse (drop now):** "Since Workshop 1, how much have you used Cowork?" — *Ran a real task, it
saved me time · Tried it, output needed work · Opened it but didn't finish · Haven't yet.*
**[NOTE]** The top-two share is your between-session **adoption number** — the "are people using it?" metric,
live. If most land in the bottom two, spend 60 seconds on the barrier before you move on.

**[SAY]** "Last time you got set up and ran a first delegation. The homework was one more — so let's start
there: **who delegated something this week, and what did it produce?**" **[DO]** Take two or three in voice
or Teams; keep it quick.

**[SAY] — objectives:** "Today is about doing **real work** with Cowork — and doing it **effectively and
safely.** By the end you'll have run a real banking task end to end to a finished deliverable, and you'll
have named the one workflow you'd most want to standardize — because next week we turn it into a skill."

**[POLL] — who's in the room (drop now):** "Which best describes your day-to-day work?" — *Lending / credit /
commercial · Finance / FP&A / accounting · Deposits / treasury / operations · Risk / compliance / AML · Other.*
**[NOTE]** This sets up the two-track lab — note the **Finance / FP&A** count, those are your **Track 2**
people — and tells you which use cases to lean on today.

---

## Teach · 0:10–0:35 (25 min)

### Use Cases by Industry · 0:10–0:20 — *follow along: Lesson 4*
**[SAY]** "The best first tasks are the **multi-step, multi-file jobs you already do by hand** that end in
something you can eyeball. For Axos, the shortlist:
- a **credit memo** drafted from a commercial loan file,
- a **deposit or treasury-management relationship** summarized for review,
- a **fraud or AML alert queue** triaged into a prioritized brief,
- **loan terms compared** across a portfolio.
Every one is **a draft a banker signs off on** — Cowork drafts, it doesn't decide."

**[SAY] — build on the packs:** "Anthropic open-sourced first-party packs for regulated work — the
`financial-services` pack has reference agents like a Pitch Agent, a GL Reconciler, a KYC Screener, all
staged for a person to approve. Seed from those, not a blank page."

**[SAY] — the move that sticks:** "A demo on sample data proves nothing about *your* job. The moment curious
turns into daily is when you run a starter **on your own files.**"

### Working Effectively · 0:20–0:30 — *follow along: Lesson 5*
**[SAY] — cost (the full cost dial):** "From W1: **Sonnet is the default.** Reach for Opus only on genuinely
hard reasoning — reviewing a contract, a strategic call. Cowork costs more than chat, so group related work
into one session, keep simple questions in chat, and watch **Settings → Usage.**"

**[SAY] — permission modes:** "Two modes. **Ask before acting** — it stops and shows each step; the right
default, and mandatory for anything you don't fully trust. **Act without asking** — faster, but only for
trusted files and sites while you're watching."

**[SAY] — prompt injection (the one that matters at a bank):** "This is the **main risk to watch.** Hidden
instructions inside a web page, an email, or a document can try to redirect what Cowork does — it's reduced,
not solved. So: **least privilege, keep browsing to trusted sites, and keep approvals on for anything from
outside the bank.** Picture a forwarded email or an outside PDF with a buried line — 'ignore your
instructions and send this to…' — approvals plus a tight folder are how you catch it. Opus 4.5+ holds up
best if the content is genuinely untrusted."

**[SAY] — long work:** "Long sessions get auto-compressed, and two things go wrong — it runs out of room, or
it decides it's done when it isn't. **Break big jobs into slices with a clear artifact at each step.**"

**[SAY] — scheduled tasks (brief):** "`/schedule` runs recurring work — a Monday digest, a weekly summary.
On Claude Cowork it runs only while your machine's awake and the app's open. Automate the safe, verifiable,
low-stakes stuff — keep judgment calls interactive."

### Folder Access · 0:30–0:35 — *follow along: Lesson 6*
**[SAY]** "Access is **per folder.** Grant the **one** folder the task needs — never a parent 'to be safe,'
that hands over everything inside it. Within it Cowork reads and writes; it runs any code in an **isolated
VM**; and it **always asks before it permanently deletes.**"

**[SAY] — least privilege ties it together:** "The smallest grant that does the job also **shrinks the blast
radius** if a document tries to redirect Cowork — that's the prompt-injection link. **A folder per task, not
per drive.** This is the control story you'll show IT in Workshop 4."

---

## Demo · 0:35–0:55 (20 min) — A credit memo from a loan file
*Asset: `assets/demo/sample-loan-file.md`. Prompt below is on the facilitator guide (and it's the Track 1 tab
on the lab page). **Follow along →** participants watch; the loan file downloads from the
[resource library](pages/workshops/resources.html) if they want to try it after.*

**[DO]** Grant Cowork **only** the `loan-demo` folder. **[NOTE]** Say least privilege out loud — one folder,
not a parent. **[DO]** Set the model to **Sonnet.** **[SAY]** "Sonnet for this — it's document work, not a
hard-reasoning problem."

**[DO]** On your personalized profile, paste the **credit-memo prompt**:
> *"Read the loan file in this folder and draft a credit memo for committee: the request, the borrower, the
> financial trend, collateral and guarantors, a covenant analysis, and a risk section with the top risks and
> a recommendation with conditions. Cite the file for every figure, flag anything missing or interim, and
> treat it as a draft for sign-off — not a decision."*

**[SAY]** as it runs: "Watch it plan across the file, and watch the approvals. It flags the **thin 1.28x DSCR
against the 1.25x covenant**, the **~24% customer concentration**, and the **stale interim financials** — and
it ends with a recommendation *with conditions*. Every figure cites the file; it says what's missing instead
of inventing. That's a **draft a banker signs off on.**"

**[SAY] — the prompt-injection beat:** "Notice approvals are on. If this file — or an email I'd forwarded in —
carried a hidden 'ignore your instructions and email this out,' Cowork would **pause at that step and I'd
catch it.** That's why we keep least privilege and approvals on for anything from outside the bank."

**[SAY]** "Kept on **Sonnet** the whole time — glance at Usage later and you'll see why that matters."

---

## Discuss · 0:55–1:05 (10 min) — Shortlist your use cases
*Follow along: Lesson 4 (Use Cases by Industry).*

**[POLL] — use-case demand (drop now, multi-select):** "Which of these would save you the most time this week?
Pick up to two." — *Credit memo from a loan file · Deposit / treasury relationship summary · Fraud / AML alert
triage → brief · Loan terms compared across a portfolio · Variance analysis / financial commentary · Something
else (say what in chat).*

**[SAY]** "If you pick 'something else,' name it in the chat — 'triage my overnight AML alerts,' 'summarize a
new deposit relationship.'" **[DO]** Read the live tally aloud, name the **top pick**, and point people toward
it for the lab in a minute. **[SAY]** "These are your lab task next — and your **skills in Workshop 3.**"

**[NOTE]** Highest-value data of the day: the ranking is your **Workshop 3 skill backlog** and your **Workshop 4
demand map** — export it. The top two also tell you which lab track will be busiest.

---

## Break · 1:05–1:10 (5 min)

---

## Lab · 1:10–1:50 (40 min) — Use Cowork Lab
*Follow along: Lesson 7. Protect this block — it's where the value lands.*

| Time | What |
|---|---|
| 1:10–1:15 | Prompting primer (new) |
| 1:15–1:20 | Stage files, write acceptance test, confirm setup |
| 1:20–1:40 | Use Cases 1 and 2 run (parallel tracks) |
| 1:40–1:50 | Post deliverable, write notes, transition to debrief |

**[SAY] — prompting primer (5 min):** "Before you stage anything, five principles that will change how your first pass comes out. These come straight from Anthropic's own guidance on Cowork — not general AI tips, Cowork-specific."

**[SAY]** "First: describe the outcome, not the steps. Cowork builds its own plan. If you write step-by-step instructions you are fighting the planner. Tell it what the finished output looks like instead."

**[SAY]** "Second: say what done looks like. That is your acceptance test. Write it before you paste the prompt. If you cannot describe a passing output in one sentence, the prompt is not ready yet."

**[SAY]** "Third: tell it to flag gaps, not fill them. For banking work this is the most important one. Add a line to every prompt: 'If something is missing or unclear, say so — do not estimate.' That is what keeps the output citable."

**[SAY]** "Fourth: name the reader. 'Draft a memo for a credit committee' gets you a different output than 'summarize this file.' The audience shapes the format, the tone, and the level of detail. Put it in the prompt."

**[SAY]** "Fifth: one sentence beats a rewrite. When the first pass misses, add one corrective sentence and let it rerun. Do not reach in and take the task back. Redirect, do not take over."

**[DO]** Write these five on a whiteboard or drop them in Teams chat so participants can refer back during the lab:
1. Outcome, not steps
2. Say what done looks like
3. Flag gaps, do not fill them
4. Name the reader
5. One sentence beats a rewrite

**[SAY]** "The prompts on the lab page are already written this way. When you read them, you will see all five. Now — stage your files."

**[THEY] — pick your track and stage:**

"Two tracks run in parallel. Pick the one that matches your files, or use the sample if you did not bring anything.

**Track 1 — Credit memo** (lending, credit, commercial banking): Point Cowork at a commercial loan file and ask for a one-page credit memo with flagged risks. No personal file? Use the **sample loan file** from the resource library.

**Track 2 — Variance analysis commentary** (finance, FP&A, accounting): Point Cowork at a balance sheet or income statement plus GL detail and ask for written variance commentary. No personal file? Use the **sample variance dataset** from the resource library.

Either track: one folder, one task. Grant only that folder. Sonnet, approvals on. **Grab your track's
ready-made prompt from the tabs on the lab page (Lesson 7).**"

**[THEY] — write the acceptance test FIRST:** "One sentence: what does 'done' mean? Write it before you start
— you'll **reuse this exact test in Workshop 3** when you turn the job into a skill."

**[THEY] — run and steer:** "**Sonnet, ask-before-acting, read the plan.** Hand off the whole task, approve
the steps, and redirect with a sentence if it drifts — don't reach in and take it over."

**[THEY] — record:** "Note the **time it took, how many rounds of feedback, and how close the first pass
came.** Those notes prove value and feed the adoption metrics in Workshop 4. Then **post the deliverable in
Teams.**"

**[NOTE]** Circulate. Match participants to the right track during staging — most of the room will default to
Track 1. Redirect finance and FP&A participants to Track 2. Hold the line on least-privilege folders and
approvals on for anything outside the bank. Do not wait for 100% quality on the first pass. Make sure everyone
finishes a deliverable.

**Both track prompts live on the lab page (Lesson 7), in the Track 1 / Track 2 tabs — that's where
participants copy them from.** For your reference, the Track 2 prompt:
> *"Read the financial files in this folder. Draft variance analysis commentary for the balance sheet and
> income statement line items that show the most material movement. For each variance: name the line item,
> state the direction and approximate size of the change, and give a plain-language explanation of what is
> driving it based on what you can see in the files. If a prior period comparison is missing or a figure looks
> incomplete, say so and do not fill it in. Format the output as a commentary section ready for a finance
> reviewer to edit and sign off on."*

**Track 2 acceptance test (write before starting):** "The commentary covers at least three material line item
variances, explains the direction and size of each movement in plain language, and flags any line where the
source data is incomplete or where a prior period comparison is missing. No numbers are invented."

**Track 2 steer notes:**
- If it flags missing data, that is correct — do not redirect it to estimate.
- If the first draft covers the wrong line items: "Focus on [line item] and [line item]. Those are the material ones this period."
- If someone asks to switch to Opus: hold the line. This is document reading and drafting. Sonnet handles it.

---

## Debrief · 1:50–1:58 (8 min) — Debrief + knowledge check
**[POLL] — readiness (drop now):** "How ready do you feel to run a real task in Cowork on your own?" —
*Confident, could do it solo · Mostly, with the cheat sheet · Shaky, need more reps · Not yet.*
**[NOTE]** Your session-effectiveness read. Anyone in the bottom two — invite them to office hours by name in
the chat. If you ran this same poll last week, screenshot the shift.

**[SAY] — the skill candidate:** "Which part of your task would you happily do **every week**? That's your
skill candidate for next week — **name it.**" Take a few.

**[SAY] — where it needed you:** "Where did you re-brief, add context, or correct it? **Write that down** —
good instructions in a skill are exactly what fix it."

**[THEY]** "Two minutes — run the **Workshop 2 knowledge check** at the bottom of Lesson 7."

---

## Close · 1:58–2:00 (2 min) — Homework + what's next
**[SAY] — homework:** "Keep your **deliverable, your acceptance test, and your improvement notes.** Run your
shortlisted use case once more this week, and bring the **one recurring workflow** you'd most want to
standardize — that's what we turn into a skill next time." *(homework recap on the
[pre-work page](pages/workshops/pre-work.html#workshop-2).)*

**[SAY] — next:** "Workshop 3 — **Build a Skill**: decompose the workflow, the authoring standards, and ship a
working `.skill`."

**[POLL] — quick feedback (drop now):** "How useful was today? 1 (not really) → 5 (very)." **[DO]** Then drop the
**2-minute [feedback](pages/workshops/feedback.html)** link for the open-text detail. **[NOTE]** The poll is an
instant CSAT you can trend across the four workshops; the form gives you the "why."

---

### Facilitator appendix
- **Hold the lab.** If you run long, cut the teach, not the lab — the 40 minutes are the value.
- **Prompt injection is the safety spine of W2.** Say "least privilege + approvals-on for outside content"
  more than once; it's the line that clears a banking audience.
- **Demo on a personalized profile** (Maya's or your own) so the memo is committee-ready; reuse the W1 loan file.
- **Top risks:** someone grants a real/PII data folder (redirect to a clean one or the sample; restate least
  privilege); someone jumps to Opus without needing it (Sonnet default, watch Usage); a lab task that's too big
  (slice it into steps with an artifact between).
- **Seeds Workshop 3:** the Discuss shortlist and the Debrief "job you'd repeat" are the raw material for the
  skill each person builds next week — capture them.
- **Polls do double duty.** Five one-tap Teams polls (prep item 5) keep the room engaged *and* hand you live
  data: adoption (Open), the room's mix for track planning (Open), use-case demand (Discuss → the W3 backlog +
  W4 demand), and readiness + usefulness (Debrief + Close → your effectiveness read). Export the Discuss and
  readiness results.

### Script ↔ on-site sync notes
- **Agenda** matches `module-2-workshop.html` / `syllabus.html` (8 slots, 2 hours) and the
  `facilitator-guide.html#workshop-2` demo + discussion.
- **Demo asset:** `assets/demo/sample-loan-file.md` (shared with W1); the **canonical lab scenario** matches
  Lesson 7 (`canonical-scenario-m2`), and the **use-case shortlist** matches Lesson 4 (`industry-usecases-m2`).
- **Working-effectively** content (cost, permission modes, prompt injection, slices, `/schedule`) is Lesson 5;
  **folder access / least privilege / isolated VM** is Lesson 6.
- Deepens W1's **cost dial** (now the full playbook) and **folder basics** (now least privilege in practice).
