# Workshop 3 — Build a Skill · Facilitator Script
### Claude Cowork · 2 hours, hands-on · virtual (Teams screen-share, participants hands-on)

> **Conforms to the on-site agenda** (`pages/workshops/module-3-workshop.html`, `syllabus.html`,
> `facilitator-guide.html#workshop-3`). Same 8-slot shape as W1/W2: **Open · Teach · Demo · Discuss ·
> Break · Lab · Debrief · Close.** **Branch:** `client-axos` — **Claude Cowork only.**

**Outcome:** every participant leaves (1) knowing Anthropic's skill standards well enough to critique a
real `SKILL.md`, and (2) having built, repaired, authored, and chained skills under live pressure in the
**Skill Vault** — the 40-minute escape-room lab.

**Demo asset:** the **workflow-decomposition skill** (`skills/workflow-decomposition/SKILL.md`) and the
**memo-generation skill** (`skills/memo-generation/SKILL.md`) — both on the
[facilitator guide](pages/workshops/facilitator-guide.html#workshop-3) and in the
[resource library](pages/workshops/resources.html).

**Lab asset:** five files distributed before breakout rooms open — on the
[lab page](pages/training/11-build-a-skill-lab.html) and the workshop hub.

**Legend:** **[SAY]** talk track · **[DO]** live demo · **[THEY]** participants act · **[NOTE]** facilitator note · **[POLL]** Teams poll · **[>>]** color commentary — the WHY behind the step

---

## Pre-session prep
1. **Download and install both skills.** Confirm `workflow-decomposition` and `memo-generation` are
   installed and trigger correctly in your Cowork session before the call.
2. **Pre-build the W2 quiz poll.** The Open slot runs the Workshop 2 knowledge-check live — 5 questions,
   single answers, one at a time or as a batch poll. Build it in Teams the day before.
3. **Pull 2–3 skill seeds from the W2 Discuss export.** These are the top-ranked use cases from the W2
   "which would save you the most time" poll. Name them in the Open to make it concrete.
4. **Pre-recruit two heavy users for the Discuss slot.** DM them the day before: *"I'd love you to
   kick off the discussion — would you share your take on good vs bad skills in 90 seconds? No prep
   needed."* This removes cold-call risk from the highest-stakes discussion in W3.
5. **Stage the demo.** Have the memo-generation `SKILL.md` open in a text editor (so you can read
   against it on screen) and the workflow-decomposition skill installed. Run the decomposition live on
   the memo workflow — the prompt is in the Demo section below.
6. **Distribute lab files.** Share all six lab files (on the hub and lab page) in Teams chat *before*
   the break — participants need them staged before the vault clock starts:
   `meeting-extractor-SKILL.md`, `vault-standup-notes.txt`, `client-formatter-SKILL.md`,
   `raw-notes.txt`, `interview-notes-jmalik.txt`, `qa-checklist.txt`.
   **Note:** `meeting-extractor-SKILL.md` must be installed as a Cowork skill before the vault opens
   (Room 1 step 1). Tell participants to create a folder named `meeting-extractor`, put the file
   inside it, and add it via Settings → Skills.
7. **Open the [facilitator view](escape-room/admin.html).** Keep it in a side window during the lab —
   it shows live team progress, hints used, and a reset button for stuck teams.

### Run of show — the 2-hour agenda
| Time | Slot | Content |
|---|---|---|
| 0:00–0:10 | **Open** | W2 knowledge check live + skill seeds |
| 0:10–0:33 | **Teach** | What is a skill? (0:10–0:13) · Decompose (0:13–0:20) · Anatomy (0:20–0:28) · Make it a skill (0:28–0:33) |
| 0:33–0:52 | **Demo** | Live: decompose the memo workflow + read it against the standards |
| 0:52–1:04 | **Discuss** | Good skill vs bad + announce vault teams |
| 1:04–1:10 | **Break** | Team setup + file confirm |
| 1:10–1:50 | **Lab** | The Skill Vault — 40-minute escape room |
| 1:50–1:57 | **Debrief** | One share per team + knowledge check |
| 1:57–2:00 | **Close** | Homework + what's next + feedback |

---

## Open · 0:00–0:10 (10 min)

**[DO] — W2 quiz live (5 min):** Launch the pre-built W2 knowledge-check poll. Read each question and
the correct answer aloud as the results land. Keep it brisk — this is a quick loop-close, not a
lesson review.

**[>>]** *Why open with a quiz?* The W2 knowledge check was deferred as homework for some cohorts; doing it live now closes the accountability loop and — importantly — signals that this series has continuity. Participants who see callbacks to last session's content pay more attention. It's also a 5-minute warm-up that doesn't require anyone to say anything out loud, which lowers the pressure before a more complex session.

**[SAY]** "Before we start — three things you told us after Workshop 2." **[DO]** Name 2–3 use cases
from the W2 Discuss export. *"You said: 'triage my overnight AML alerts,' 'summarize a new deposit
relationship,' 'first-pass my quarterly covenant review.' Today we learn how to turn one of those into
a skill that runs every time, not just when you remember to ask."*

**[>>]** *Why name their use cases out loud?* It closes the feedback loop from W2 — they submitted something and heard it back, which reinforces that the between-session work matters. It also anchors the abstract skill-authoring content to a concrete use case they already care about. Don't invent examples; use actual submissions even if imperfect.

**[SAY] — arc reminder:** "We're in Workshop 3 of 4. W1 you got set up, W2 you ran a real task end to
end. Today you package that workflow into a skill anyone can reuse. W4 pushes it to a team and governs
it. By the end of this session you will have built, broken, fixed, and chained skills in the vault —
in 40 minutes under a clock."

**[DO] — home base:** "Open the **[Workshop 3 hub](pages/workshops/module-3-workshop.html)** — that's
your page today. All four lessons, the lab, and the download links hang off it."

---

## Teach · 0:10–0:33 (23 min)

### What Is a Skill? · 0:10–0:13 (3 min orientation)

**[SAY]** "Before we build one, let's be clear on what we're building. In Workshops 1 and 2 you
typed a prompt — you described a task, Cowork ran it, you got a result. That's a **delegation**. A
skill is the step beyond that: instead of you writing the task description every time, **the skill
holds it.** You install it once, and from then on Cowork reads the skill's description at startup and
knows: *'When someone asks to draft a credit memo, that's this skill. When someone asks to triage
AML alerts, that's that skill.'* You just work. Cowork routes to the right instruction set."

**[SAY]** "Technically: a skill is a folder with one file — `SKILL.md`. YAML frontmatter at the top
gives it a name and a description; a Markdown body below holds the instructions. That's it. The same
file runs in Claude Cowork and in Claude Code — one skill, both surfaces — on the open **Agent
Skills** standard."

**[SAY] — the practical jump:** "Workshop 2 you had a prompt you refined over a few sessions until
it reliably worked. A skill is that prompt, packaged so anyone on your team gets the same quality
result without having to rediscover the right words. That's why Workshop 3 exists: to take the
thing you learned to do and make it something the whole team can do."

**[>>]** *Why carve out a three-minute definition block before the canvas?* Because without it, participants hear "decompose a workflow" and "write a SKILL.md" as two separate technical tasks with no clear relationship to anything they did in W1/W2. The definition creates the through-line: W2 prompt → W3 skill → W4 plugin. That arc is what makes the Skill Vault feel like a meaningful step rather than a new subject. It also prevents the most common confusion in W3: participants who think a skill is something you run manually like a slash command, rather than something that fires automatically when the situation matches.

---

### Decompose Your Workflow · 0:13–0:20 — *follow along: Lesson 8*

**[SAY]** "A skill is only as good as the thinking before you write it. If you sit down and start
writing a `SKILL.md`, you're going to write documentation — and documentation nobody tested is the
single most common way a skill fails. So before the file, a canvas: **steps, data sources, and a
clear picture of good versus bad output.** That canvas is what the skill gets built from."

**[SAY] — the three questions on the canvas:**
- *"What are you trying to produce? Name the deliverable in one line."*
- *"What makes it slow or error-prone today? Name the pain."*
- *"For each step — where does the input come from? A folder, a connector, a specific file format?"*

**[>>]** *Why spend 8 minutes on a canvas before writing anything?* Because almost everyone's instinct is to start with the instructions — the `SKILL.md` body — and iterate from there. But Anthropic's own guidance on agentic work warns against writing skills without defining what good output looks like first. The canvas session front-loads that definition work. It also transforms skill-authoring from a solitary writing task into something a team can reason about together, which matters for W4's shared-plugin story.

**[SAY] — slicing (the most important technical point in L8):** "Anthropic's guidance on long-running
agents is clear: **don't try to do a big task in one shot.** You either run out of context, or the
agent decides the job is done when it isn't. The fix is slices — small enough to leave a clear
artifact at each step. Think of it like building a proposal one slide at a time: you get something
reviewable after each slice, not at the very end."

**[SAY] — evals before docs:** "The last thing on the canvas: write what good looks like and what bad
looks like *before* you write the skill. That's Anthropic's evaluation-driven method in plain terms.
Three realistic test scenarios, a baseline run without the skill, then you write only the instructions
needed to pass."

---

### Anatomy of a Skill · 0:20–0:28 — *follow along: Lesson 9*

**[SAY] — the two parts of a `SKILL.md`:** "A skill is a folder with one file: `SKILL.md`. YAML
frontmatter up top — name and description — and a Markdown body below. That's the open Agent Skills
standard. Anthropic has clear opinions about how to write both."

**[SAY] — the description is the doorway:** "At startup, Claude reads exactly two things from each
skill: the name and the description. That's how it decides which skill to use. So a vague description
— or a first-person one — means the skill never fires. Write it third-person, keyword-dense, and *almost
too eager*: say what the skill does, when to use it, and list the actual words that should trigger it."

> **Example trigger line (say this out loud):**
> *"Use when someone asks to 'write a memo,' 'turn these notes into a memo,' 'draft a summary memo,' or
> 'put this in memo form' — especially for recurring internal or client-facing memos in regulated,
> document-heavy work."*

**[>>]** *Why dwell on the description?* It's the single highest-leverage line in a `SKILL.md`. Every room in the Skill Vault is directly tied to this: Room 1 requires triggering a skill by matching its description; Room 2 requires rewriting a description that's too vague to fire. If participants understand nothing else from this lesson, they should understand that a skill's description is not documentation — it's a selector. The body is secondary.

**[SAY] — body rules, verbatim from Anthropic:** Quote these directly; they're on the lesson page
(`09-anatomy-of-a-skill.html`) and on platform.claude.com (current as of June 2026):
- *"Concise is key. The context window is a public good."* Keep it under 500 lines. Use progressive
  disclosure — point to detail files, don't inline them.
- Instead of MUST, ALWAYS, NEVER — explain the rule and say *why*, so Claude can generalize.
- Include real input/output examples. A few is enough.
- Detail files: keep references one level deep. Nested references three deep never get fully read.

**[NOTE]** Always date-stamp the Anthropic quotes: *"This is from Anthropic's skill-authoring
best-practices doc, current as of June 2026. Re-verify it against the Sources in `cowork-context.md`
before each cohort — it changes."*

**[SAY] — evals before docs (say it again):** "Anthropic's exact words: *'Create evaluations before
writing extensive documentation.'* You build a skill by testing it, not by writing prose and hoping.
Write one Claude, test with a fresh one cold. Run on Haiku, Sonnet, and Opus — a skill that only
works on the largest model isn't finished."

**[>>]** *Why repeat "evals before docs" twice in two lessons?* Because every room in the lab is secretly testing whether they understood it. A participant who internalizes this phrase builds Room 3's Candidate Evaluator with the right shape on the first try. One who doesn't writes a body full of prose and then can't figure out why the door won't open. Repetition here has a mechanical payoff 40 minutes later.

---

### Make It a Skill · 0:28–0:33 — *follow along: Lesson 10*

**[SAY]** "You don't have to start from a blank `SKILL.md`. The fastest path: paste a working prompt
and say **'Turn this into a skill with a description that triggers when I ask for [X].'** Claude
drafts the SKILL.md — frontmatter and body — from your text. This is how most first skills are built,
and it's the exact technique you'll use in your homework."

**[SAY] — the skill-creator loop:** "A first draft fires unreliably and over-explains. The loop fixes
that: capture the trigger intent, draft, test against a baseline without the skill, grade, add only
what the evals demand. Then package it as a `.skill`. The description is the part worth iterating
hardest."

**[SAY] — one thing to know about the optimizer:** "The skill-creator has an auto-tuner called
`run_loop` that can optimize your description automatically — but it needs a raw `ANTHROPIC_API_KEY`.
If your org signs in through SSO only, you can't run it. **That's fine.** Tune the description by
hand: add trigger words, test whether the skill fires on a few realistic prompts, adjust. Slower, same
result."

**[>>]** *Why mention the SSO caveat now?* Because some participants will have Googled the skill-creator and seen the `run_loop` flag, and they'll be confused when it doesn't work in their account. Addressing it in Teach saves a 3-minute derail during the lab. The key message: SSO is not a blocker for shipping a good skill, just for the automated optimizer. Frame it as a note, not a limitation.

---

## Demo · 0:33–0:52 (19 min) — Decompose the memo workflow

*Asset: `skills/workflow-decomposition/SKILL.md` (installed) and `skills/memo-generation/SKILL.md`
(open in a text editor). Follow along → [Lesson 8](pages/training/08-decompose-your-workflow.html)
and [Lesson 9](pages/training/09-anatomy-of-a-skill.html) for participants watching.*

**[SAY]** "I'm going to show you the full cycle in 19 minutes — decompose a workflow, then read the
finished skill against the standards. Everything you're about to see is a key to a door."

**[>>]** *"A key to a door" — say this line.* It's the transition that primes the lab. The vault's narrative (a departing consultant locked the team's playbook) is activated by this phrase. Participants who hear it land in the lab with the right mental model: the skills they just watched you build are literally how you open the rooms. The line also signals that the demo isn't abstract — it's directly load-bearing for what comes next.

### (a) Run the workflow-decomposition skill
**[DO]** New session in Cowork, workflow-decomposition skill installed. Paste this prompt:
> *"I want to build a skill for drafting credit committee memos from commercial loan files. Help me
> decompose the workflow: the steps, the data source for each step, and a clear picture of what a
> good output looks like versus a bad one."*

**[SAY]** as it runs: "Watch it interview me — it's not asking me to write the skill yet, it's
helping me think through what the skill needs to do. Steps, inputs, good output, bad output. This is
the canvas from Lesson 8, built interactively."

**[DO]** Let it produce the decomposition output. **[SAY]** "That's a working canvas: steps, data
sources, good vs bad. Now I'll hand that to the skill author."

**[>>]** *What to do if the skill doesn't trigger.* If the workflow-decomposition skill doesn't fire on your prompt, say it explicitly: *"The description wasn't specific enough to match that intent — I'll adjust the trigger."* This is actually a perfect teaching moment that previews Room 2. Don't apologize; narrate it as intended behavior and fix it live in 30 seconds by adding more trigger words to your prompt.

### (b) Read the memo skill against the standards
**[DO]** Open `skills/memo-generation/SKILL.md` in your text editor, screen-shared. Read through it
as you narrate each standard aloud:

**[SAY]** "Description — third person, keyword-rich: *'Use when someone asks to write a memo, turn
these notes into a memo, draft a summary memo, or put this in memo form, especially for recurring
internal or client-facing memos in regulated, document-heavy work.'* Would that trigger? Yes.
Is it specific enough to fire on intent, not magic words? Yes."

**[SAY]** "Body — under 500 lines. This one is well under. Progressive disclosure: if there were a
300-line format file, it would live at `reference/memo-format.md` and be pointed to from here — not
pasted in. Good vs bad examples: right here in the body — two short paragraphs. Guardrails: never
present as final, never fabricate. That's it."

**[SAY]** "No ALL-CAPS rules. Every guardrail says *why*: 'never fabricate figures — unknown → [NEEDS
INPUT: ...].' That's the rule plus the reason, so Claude can generalize when the situation varies."

**[SAY]** "Evals: *not in the file*, but in a separate test log. The skill was built by running
scenarios without it first — the file is the minimum needed to pass those evals, nothing more."

**[SAY]** "Now: **'Everything you just watched is a key to a door.'** In 8 minutes you'll use these
exact disciplines to escape the vault."

---

## Discuss · 0:52–1:04 (12 min) — Good skill vs bad + vault teams

*Follow along: Lesson 9 good-vs-bad section (`#goodbad`). Pre-recruited heavy users go first.*

**[SAY]** "Let's stress-test it. Here's a sample skill description:" **[DO]** Paste or screen-share
this bad example:
> *"I am a skill that helps you with your work. Use me whenever you need assistance."*

**[SAY]** "Hold it against the rubric. Is it third-person? No — it's first-person. Is it keyword-rich?
No — there's no trigger language. Would Claude pick this skill over any other when you ask for a memo?
Never. It's not wrong, it just doesn't work."

**[DO]** Call on your pre-recruited heavy users: *"[Name], in 90 seconds — what makes a skill
description fail in your experience?"* Take one or two more from the room.

**[SAY] — what bad looks like in full:** "The complete bad skill: first-person or vague description;
a 900-line body of ALL-CAPS rules; no examples; nested references three levels deep; no evals, so
nobody knows whether it works. It reads like documentation nobody tested. A fresh Claude picks it up
cold — and can't use it."

**[>>]** *Why critique the bad example first, before the good?* Because the failure mode is more memorable than the success mode, especially for a banking audience that's trained on audit findings and exception reports. Starting with "here's what fails and why" is how credit analysts think. The good memo skill they just saw in the demo is the implicit counterexample — they can hold it side by side in their head.

**[SAY] — the one thing that's usually wrong:** "In practice, the failure is almost always the
description. Not the body — the description. Everything else in a skill can be mediocre and it might
still work. A bad description and nothing else will ever fire. That's Room 2 of the vault in one
sentence."

**[DO] — vault team announcements (4 min):** "Here's how the vault works: you'll play in teams of
2–4. One person drives Cowork and shares their screen; everyone else advises. Two hints per room: the
first is free, the second adds 2 minutes. Wrong codes cost nothing but time. You have 40 minutes."
**[DO]** Announce breakout room assignments and which participant drives per team. Give teams 30
seconds to find their room before break.

**[>>]** *Why announce team assignments here, not during the break?* The break is only 6 minutes — assigning teams there eats the whole buffer. Announcing assignments at the end of Discuss gives teams the break to do logistics (confirm files downloaded, find their breakout room, decide who drives) so they're clock-ready when the lab opens.

---

## Break · 1:04–1:10 (6 min)

**[DO]** "During the break: confirm all five lab files are downloaded and in a folder you can grant
Cowork access to. Open the [Skill Vault](escape-room/) in a new tab — not in the lab page. Find your
breakout room. Decide who drives Cowork and shares their screen." **[NOTE]** Keep the
[facilitator view](escape-room/admin.html) open — it shows team status live.

**[>>]** *The break is a staging break, not a rest break.* Participants who arrive at the lab without their files staged will burn 5 minutes of the 40-minute clock on logistics. The break announcement above is explicit about this. You'll need to confirm in Teams chat that files are ready before you open the vault clock, and it's worth waiting an extra 30–60 seconds for stragglers rather than starting with 2–3 teams file-less.

---

## Lab · 1:10–1:50 (40 min) — The Skill Vault

*Follow along: Lesson 11. Open the vault at [escape-room/](escape-room/) — participants in breakout
rooms. Keep the [facilitator view](escape-room/admin.html) open throughout.*

**[DO]** "Vault is open. Clock starts when your team enters a team name. One driver per team in
Cowork — the rest advise. Vault in one window, Cowork in the other. Go."

**[>>]** *Why an escape-room format for skill-authoring content?* Three reasons. First, the competitive clock removes the natural tendency to overthink or over-polish — participants who would spend 20 minutes wordsmithing a description in a homework assignment will move at the right pace when there's a leaderboard. Second, the team mechanic means the room's faster thinkers naturally support the slower ones, reducing the facilitator's need to rescue individuals. Third — and most important — every unlock code is gated on the same standards Anthropic holds skills to. The game is a wrapper for discipline; the rules of the game *are* the rules of skill authoring.

### The four rooms — what to watch for

**Room 1 — The Inherited Skill (invoke):**
**[NOTE]** Teams must read the Meeting Extractor skill's description, then construct a prompt that
matches its described intent. Common failure: typing a magic word from the description instead of
describing the task in their own language. Watch for teams who copy-paste keywords from the
description into their prompt — redirect them: *"Read what the skill says it does. Now describe that
task to Cowork in your own words."*

**[>>]** *What Room 1 is teaching.* Skills trigger on intent, not keywords. The Meeting Extractor's description explains the skill's purpose; the prompt should describe a meeting-summary task, not echo the skill's own vocabulary. Teams who understand this move through Room 1 in under 8 minutes. Teams who don't will loop through prompt rewrites until they hit it by accident — and that loop is the lesson.

**Room 2 — The Broken Trigger (repair):**
**[NOTE]** The Client Formatter skill description is deliberately broken: *"A skill."* Teams must
rewrite it to trigger reliably before the skill will produce useful output and reveal the unlock code.
Most teams will overcorrect to 200-word descriptions — remind them: third-person, keyword-rich, specific
about when to use it. Under 1024 characters. Test it by asking: *"Would a fresh Claude choose this skill
from a list of 20?"*

**[>>]** *Room 2 is the highest-transfer room in the vault.* After this exercise, participants will never again write a vague skill description — the cost of vagueness is visceral rather than abstract. The 2-minute hint penalty is also instructive: it mirrors the real cost of iterating on a bad description in production (re-runs, re-tests, re-deploys). If a team is stuck at Room 2 past 20 minutes into the lab, give the first hint free and narrate it: *"The description needs to say when to use it and what should trigger it — keywords the user would actually say."*

**Room 3 — Forge Your Own Key (author from scratch):**
**[NOTE]** Teams author a Candidate Evaluator skill from scratch — no template. Required: four
prescribed sections (Contact Info, Fit Summary, Key Strengths, Concerns), a verdict constrained to
exactly three words. The door only opens if those constraints are met in the output. Common failure:
participants write a body that describes the *structure* of the skill rather than *instructing* Claude
on what to produce. Watch for descriptions that say "this skill evaluates candidates" without
specifying the four sections. Redirect: *"The skill needs to enforce the four sections and the
three-word verdict as constraints — not just mention them."*

**[>>]** *Room 3 proves prescriptive beats vague.* Anthropic's guidance is that instructions should be specific as the task gets more fragile. A candidate evaluation is inherently fragile — format drift or a five-word verdict breaks the process. This room teaches participants to write instructions that *constrain* rather than *suggest*, which is the hardest behavior shift in skill authoring.

**Room 4 — The Playbook Door (chain + QA):**
**[NOTE]** Teams use one prompt to invoke both the repaired Client Formatter (Room 2) and the
Candidate Evaluator (Room 3), then run the QA checklist against the output. Both skills must fire from
a single multi-intent prompt for the door to open. Codes are case-insensitive. The QA checklist prompt
(in the lab step and in `qa-checklist.txt`) now asks for a per-item breakdown — teams see exactly which
items pass or fail, not just a total count.

**Room 4 has two distinct failure modes — know which one you're looking at:**

**Failure mode A — skills don't chain (prompting issue).** Only one skill fires. The output has either
the status update template OR the candidate evaluation, not both. Hint 1 addresses this: "State both
outcomes in one request — evaluate the candidate, then format as a client status update."

**Failure mode B — skills chain but Room 3's output is wrong (skill-writing issue).** Both skills
fire, but the Candidate Evaluator doesn't enforce the right format. QA items 6 or 7 fail:
- Item 6 fails → skill's section names don't match ("Key Strengths" instead of "Strengths," etc.)
- Item 7 fails → Recommendation isn't constrained to Advance/Hold/Decline (output says something like
  "I recommend we move forward with Jasmine")

Teams stuck here often try to rewrite the Room 4 prompt, which won't fix it. **Direct them back to
Room 3:** "Your skill needs to name the four sections explicitly and add a rule that the Recommendation
must be exactly one of: Advance, Hold, or Decline. Fix the skill, reinstall it, and rerun Room 4."
Hint 2 in the vault tells them the same thing once they use it.

**[>>]** *Why two failure modes matter for facilitation.* The vault's per-item QA breakdown makes
failure mode B self-diagnosable in most cases — teams that see "Item 7: FAIL — recommendation not one
of the three allowed words" know what to fix without a hint. But some teams will still try to fix
the Room 4 prompt instead of the Room 3 skill, because "fix the most recent thing" is the natural
instinct. The facilitator's job in that moment is to redirect: the problem is upstream, in the skill
that was written in the previous room. This is actually the highest-value learning moment of the
entire vault — it proves that bad skills create downstream failures, not just bad prompts.

**[NOTE — facilitator view]** Monitor progress through [admin.html](escape-room/admin.html). If a
team hasn't entered Room 2 by the 15-minute mark, drop a team-specific hint in their breakout chat.
If a team is stuck in Room 3 at the 30-minute mark with no code entered, push them toward getting the
four sections right before worrying about the three-word verdict. **At 1:47 — 3 minutes left — call
time** in the main room and ask each team to note where they stopped.

---

## Debrief · 1:50–1:57 (7 min) — One share per team + knowledge check

**[SAY]** "One share per team — what did a room teach you that the lessons didn't? Thirty seconds each."
**[DO]** Take one share per team in voice or Teams. Capture the common themes.

**[SAY] — the meta-lesson:** "Here's what the vault was really testing: every door was gated on the
same discipline Anthropic holds skills to. Room 1: skills trigger on intent, not keywords. Room 2:
the description is the doorway. Room 3: prescriptive instructions keep output from drifting. Room 4:
skills compose when descriptions are sharp enough to be distinct. Those four things are how you ship
a skill that works reliably — not just in the lab."

**[>>]** *Why narrate the meta-lesson explicitly?* The escape-room mechanic is highly engaging but it can leave participants with a vivid memory of the puzzle and a fuzzy memory of the principle. The debrief is the consolidation step — naming the discipline behind each door anchors the experiential learning to transferable knowledge. Say each one clearly and pause after each.

**[THEY]** "Two minutes — run the **Workshop 3 knowledge check** at the bottom of Lesson 11. Not
deferred — do it now while it's fresh."

---

## Close · 1:57–2:00 (3 min) — Homework + what's next

**[SAY] — homework:** "The vault used our scenario. Homework uses yours. Take the workflow you brought
today — or the one you named in Workshop 2 — and run the skill-creator loop on it: decompose it, draft
the `SKILL.md`, test against your evals, tune the description until it triggers reliably, then package
a `.skill`. Bring it to office hours. The workflow-decomposition skill downloads from the lab page —
use it."

**[SAY] — IT track note:** "If you submitted a technical use case — SQL analysis, Tableau prep, ADO
tickets — Workshop 4 has your path. Invite your IT or compliance partners; that session is partly for
them."

**[SAY] — keep your skills tool-agnostic:** "Build in the Claude Code plugin structure — it's the
superset. Keep the `SKILL.md` free of tool-specific assumptions and the same file runs in Claude
Cowork and Claude Code. One skill, both surfaces."

**[SAY] — next:** "Workshop 4 — **Plugins & Rollout**: combine skills into plugins, deploy to a team,
and set up governance and adoption tracking. The capstone deliverable is a one-page rollout plan you
can hand to a sponsor." **[DO]** Drop the **2-minute [feedback](pages/workshops/feedback.html)** link
and the **[cheat sheet](pages/workshops/cheat-sheet.html)** link.

**[>>]** *The "tool-agnostic" line is important context for the cohort's IT sponsors.* Participants who hear Workshop 4 is coming and involves IT/compliance partners will start thinking about whether to bring someone. Make the invitation explicit and direct — "invite your IT or compliance partner" — not just a footnote on the slide.

---

### Facilitator appendix

**Hold the lab.** If you run long anywhere, cut Teach — shorten the anatomy walkthrough or the loop
section — not the vault. The 40 minutes are where the value lands.

**Skill Vault mechanics (recap):**
- Codes are **case-insensitive**; if a team is stuck on a code that looks right, confirm casing isn't the issue.
- Hint 1 is free; Hint 2 costs +2 min on the final time. Use the admin view to track.
- **Reset** is available in the admin view for teams who need a fresh start on a room.
- The format line in each room's last lab step is the hint to give first — it tells teams what the unlock code looks like without revealing the answer.

**Top risks:**
- **Lab files not staged before the vault opens.** Insist on confirming files in Teams chat during the break — don't assume.
- **A team grants a real data folder.** Redirect to the lab file folder; restate least privilege.
- **Someone's SSO blocks the skill-creator optimizer.** That's expected. Point them to the hand-tuning path in Lesson 10. The optimizer is a convenience, not a requirement.
- **A team can't get their skill to trigger.** Almost always the description. Give the free hint: *"Read the description aloud. Would a fresh Claude choose this skill if you asked it to [task]?"*
- **Room 3 is the hardest.** Teams who haven't internalized "prescriptive beats vague" will write a body that describes the skill's intent rather than its required output shape. Give the format constraint hint: *"The skill needs to enforce four specific sections and a verdict in exactly three words as hard constraints, not suggestions."*

**Seeds Workshop 4:**
- Capture the vault leaderboard results — the teams that escaped are your W4 plugin demos.
- Note the use cases from the Debrief shares — the skills participants built in Room 3 and their homework are the W4 shared-plugin candidates.
- If multiple people built a Candidate Evaluator variant in homework, that's your first team-plugin demo for W4.

### Script ↔ on-site sync notes
- **Agenda** matches `module-3-workshop.html` / `syllabus.html` (8 slots, 2 hours) and the
  `facilitator-guide.html#workshop-3` notes.
- **Demo assets:** `skills/workflow-decomposition/SKILL.md` (installed skill); `skills/memo-generation/SKILL.md`
  (open in text editor for the standards walkthrough).
- **Lab assets:** five files from `escape-room/lab-files/` — confirmed downloaded before break.
- **Facilitator view:** `escape-room/admin.html` — open throughout the lab slot.
- **Skill authoring standards** quoted in Teach are from Anthropic's skill-authoring best-practices
  doc on platform.claude.com, dated June 2026 — re-verify before each cohort (the `cowork-context.md`
  Sources block has the reference).
- **Deepens W2:** the skill-seed use cases (Open) come from the W2 Discuss poll export; the
  acceptance-test language from W2 Lab is the same "what does done look like?" prompt used in the
  canvas in L8. Continuity is intentional.
