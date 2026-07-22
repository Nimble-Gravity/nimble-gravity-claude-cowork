# Workshop 4 — Govern & Roll Out · Facilitator Script
### Claude Cowork · 2 hours, hands-on · virtual (Teams screen-share, participants hands-on)

> **Conforms to the on-site agenda** (`pages/workshops/module-4-workshop.html`, `syllabus.html`,
> `facilitator-guide.html#workshop-4`). Same 8-slot shape as W1/W2/W3: **Open · Teach · Demo · Discuss ·
> Break · Lab · Debrief · Close.** **Branch:** `client-axos` — **Claude Cowork only.**

**Outcome:** every participant leaves (1) able to explain Axos's Cowork access model and audit position
to someone who has to sign off on it, and (2) holding a one-page control narrative they produced under
a clock in **The Control Room** — the 40-minute control-review simulation.

**This is the session with IT and compliance in the room.** The content pivoted to governance, RBAC,
analytics, and setup practice for exactly that reason. Plugins are covered in five minutes as the
*unit of governed distribution*, not as an authoring topic — that was Workshop 3.

**Demo asset:** the **Nimble Gravity adoption dashboard** — our own IP, live on Kevin's screen, plus
his screenshots on Derrikk's machine as a fallback. There is **no admin-console demo** this cohort.

**Lab assets:** six files distributed before breakout rooms open — on the
[capstone page](pages/training/16-the-control-room.html) and the workshop hub.

**Legend:** **[SAY]** talk track · **[DO]** live demo · **[THEY]** participants act · **[NOTE]** facilitator note · **[POLL]** Teams poll · **[>>]** color commentary — the WHY behind the step

---

## ⚠️ Read this first — the date-sensitive fact

Everything in the governance half of this session was **re-verified against Anthropic's documentation
on 2026-07-21**. The decisive fact — *"the Compliance API and Audit Logs do not cover Claude Cowork
yet"* — is quoted from Anthropic's own Cowork Enterprise Administrator Guide.

**Before you present:** re-check that quote and the RBAC details against the Sources block in
`cowork-context.md`. Anthropic is actively closing this gap, and a compliance audience will know if
you are a release behind. If it has closed, say so and pivot the framing to "here is what changed" —
the lab still works, because Station 4's checklist tests whether you can *state your audit position*,
not whether the gap exists.

---

## Pre-session prep

1. **Brief Kevin properly — he has the screen for 19 minutes and he's narrating.** This is the single
   biggest dependency in the session. Walk the card order with him beforehand, agree where you'll
   interject, and agree who says the offer line at the end. **Neither presenter has admin-console
   access this cohort** — there is no console demo, and nobody should improvise one.
2. **Get Kevin's screenshots onto your machine regardless.** His connection dropped mid-sentence during
   prep. If it drops live you present the captures, say plainly they're captures, and carry the card
   order yourself. Also agree the breakout split for the Lab, and give him the 90-second spend-controls
   cue so it doesn't land cold.
3. **Expect a mixed room.** The invite went wider than the IT/compliance scope it was written for, so
   plan for an engaged core plus observers. The Open handles this explicitly; the Lab folds observers
   into teams rather than leaving them adrift.
4. **Pre-recruit your IT/compliance partner for the Discuss slot.** DM them the day before: *"I'd like
   you to open the discussion on which Axos workloads shouldn't run in the Cowork interface — 90
   seconds, no prep."* This is the highest-stakes discussion of the series and it must not open cold.
5. **Distribute lab files.** Share all six in Teams chat *before* the break:
   `cowork-access-register.csv`, `least-privilege-rubric.md`, `role-matrix-DRAFT.md`,
   `rbac-reference.md`, `analytics-export.csv`, `exam-checklist.txt`.
   **Note:** unlike W3, nothing needs installing before the clock starts — teams only need the six
   files in one folder they can grant Cowork access to.
6. **Open the [facilitator view](control-room/admin.html).** Keep it in a side window during the lab.
   **Local-only mode this cohort** — it shows teams that played *in your browser*, so treat the badge
   at the top as the source of truth and lean on breakout-room check-ins for progress.

### Run of show — the 2-hour agenda

**Two presenters. Kevin has the screen once, for nineteen minutes.** Everything else is Derrikk.
Kevin is on camera the whole session as the technical answer-man, and he **drives and narrates the
entire Demo slot** — it is a walkthrough of the Nimble Gravity adoption dashboard, our own IP.
Derrikk interjects with the framing, then takes the screen back for Discuss.

| Time | Slot | Owner | Screen |
|---|---|---|---|
| 0:00–0:10 | **Open** | **Derrikk** — audience framing, arc, introduce Kevin | Derrikk |
| 0:10–0:15 | **Teach** · Package as a Plugin | **Derrikk** | Derrikk |
| 0:15–0:23 | **Teach** · Roles & Access (RBAC) | **Derrikk** | Derrikk |
| 0:23–0:29 | **Teach** · Set Up & Govern | **Derrikk**, + ~90s Kevin on spend controls | Derrikk |
| 0:29–0:33 | **Teach** · Analytics — frame only | **Derrikk** (concept; Kevin supplies the evidence at 0:33) | Derrikk |
| **0:33–0:52** | **Demo** · The NG adoption dashboard — 19 min | **Kevin drives + narrates; Derrikk interjects** | **Kevin** |
| 0:52–1:04 | **Discuss** · What leaves the Cowork interface? | **Derrikk** facilitates, **Kevin** answers | Derrikk |
| 1:04–1:10 | **Break** | — | — |
| 1:10–1:50 | **Lab** · The Control Room | **Derrikk** runs; **Kevin** floats as SME | Breakouts |
| 1:50–1:58 | **Debrief** | **Derrikk** | Derrikk |
| 1:58–2:00 | **Close** | **Derrikk** | Derrikk |

**The three handoff lines — say them close to verbatim:**

- **Into Kevin's Teach interjection (~0:26):** *"Kevin, you've been fielding this one from a few
  customers — what actually happens to spend controls when you move from Team to Enterprise?"*
- **Into the Demo (0:33):** *"Everything I've described so far is something you'd have to build. So
  let me show you the part you don't. This is a dashboard we've built at Nimble Gravity to get clients
  to Cowork analytics in days instead of a quarter. Kevin built it — Kevin, take us through it."*
- **Back out (0:52):** *"Thanks Kevin — stay with us, because the next twelve minutes are exactly your
  territory. Everyone: which Axos workloads should* not *be running in the Cowork interface?"*

**Kevin's prep:** dashboard open and ready to share · screenshots of the key cards sent to Derrikk
beforehand (his connection dropped during prep — if it drops live, Derrikk presents the captures and
says plainly they're captures) · three answers loaded, because these *will* be asked: per-user spend
control, Azure AI Foundry, and where the audit gap leaves them.

> ⚠️ **Neither presenter has admin-console access this cohort.** There is no console demo and no live
> Cowork demo — the Demo slot is the dashboard walkthrough, start to finish. **Do not improvise a
> console tour from stock screenshots in front of this audience.**

---

## Open · 0:00–0:10 (10 min)

> **No W3 recap this session.** The quiz and the vault callback are cut. The room is mixed —
> the invite went wider than intended — so the Open does audience-setting instead of loop-closing.

**[SAY] — name the room, first thing (2 min):** "Quick bit of housekeeping. This session was scoped
for IT, security and compliance — and some of you were told you didn't need to be here. You're
welcome anyway. Here's how I'd like to run it: **if you're here to observe, observe** — no pressure to
speak, and you'll still get something out of the first half. If you own an admin console, a policy, or
a control, this whole session is aimed at you, and I'm going to be looking to you for the questions."

**[>>]** *Say this out loud rather than hoping it sorts itself out.* Nick's invite went to everyone
despite the session being scoped to IT, so you have an engaged core and a curious tail. An unmanaged
mixed room fails in a specific way: the observers stay silent, the facilitator reads that silence as
"no questions," and the engaged handful who actually needed the session never get their airtime.
Naming the split in the first two minutes gives observers explicit permission to lurk *and* tells the
core that the floor is theirs. It costs 90 seconds and it changes the whole discussion dynamic.

**[SAY] — arc reminder, one sentence:** "For anyone joining cold: three sessions taught knowledge
workers to delegate real work to Cowork. Today is the one that answers *under what controls* — and
then you'll run a live control review against a clock."

**[NOTE — read the room before the Lab.]** Teams and breakouts are running **as designed**, so fold
observers into teams rather than leaving them adrift. If it turns out the tail is larger than the
core, pair each observer with a driver and give them the checklist-reading job — it keeps them
occupied and genuinely helps at Station 4.

**[SAY] — arc reminder:** "Workshop 1 you got set up. W2 you ran a real task. W3 you packaged it into a
skill. Today: who's allowed to run it, what we can prove about it, and how we know it's working. And
then you'll do a control review under a 40-minute clock."

**[SAY] — the honest framing, say this early:** "One thing I want on the table before we start.
Cowork has a real audit-coverage gap today, and I'm going to show you exactly where it is — in
Anthropic's own words. We're not going to talk around it. The question this session answers isn't
'is it perfect' — it's **'can we run it responsibly and prove we did.'**"

**[>>]** *Naming the gap in the first five minutes is a deliberate credibility play.* If a compliance
participant discovers the audit gap themselves at minute 40, you have lost them — it reads as though
you were selling around it. If you name it at minute 4, every subsequent control you describe reads as
a considered response rather than a defence. This single move is the difference between a session that
ends in a rollout plan and one that ends in an escalation.

**[DO] — home base:** "Open the **[Workshop 4 hub](pages/workshops/module-4-workshop.html)** — all five
lessons, the lab, and the file pack hang off it."

---

## Teach · 0:10–0:33 (23 min)

### Package It as a Plugin · 0:10–0:15 (5 min) — *follow along: Lesson 1*

**[SAY]** "Five minutes on plugins, because today they matter for one reason only: **a plugin is the
unit an administrator can control.** A skill is a folder. A plugin is a bundle — skills, connectors,
sub-agents, commands, hooks — and critically, it's the thing your admin can *require*, *offer*, or
*hide* from a specific group. That's why it's in the governance session."

**[SAY] — the click-path, because this room will actually do it:** "It all lives at **Organization
settings → Plugins**. Prerequisite first: **Cowork *and* Skills both have to be enabled** — if that page
looks empty, that's why. Three ways in. **Add plugins → Browse Anthropic sources** pulls in Anthropic's
own marketplaces; Knowledge Work is already there by default. **Add plugins → Upload a file** creates
your own marketplace from `.zip` files — quick to iterate, and uploading the same plugin name overwrites
the previous version. **Add plugin → GitHub** syncs from a repo as `owner/repo` — it has to be private
or internal, public repos are rejected, and syncs fire on a version-bump PR merging to the default
branch, not on a direct push."

**[SAY] — the limits:** "50 MB a plugin. 100 plugins if you upload by hand, 500 if you sync from GitHub.
Names are lowercase-with-hyphens, 64 characters."

**[>>]** *Give the click-path even though you can't demo it.* Neither of us has console access this
cohort, and the audience is the people who'll be clicking these buttons next week. Naming the exact
menu path and button labels is the next best thing to showing it, and it's honest — you're describing
documented behaviour rather than pretending to a tenant you don't have. Point them at Lesson 1 on the
site, which has the same path written out with the limits.

**[>>]** *Resist the urge to re-teach plugin authoring here.* In previous runs this slot expanded to
fifteen minutes and ate the RBAC content. The business users already built skills in W3, and the IT
partners don't need authoring detail — they need to know that a plugin is an administrable object.
If you're running long anywhere in Teach, this is the slot to compress further, not RBAC.

---

### Roles & Access · 0:15–0:23 (8 min) — *follow along: Lesson 2*

**[SAY] — the headline:** "Claude Enterprise gives you three static roles — User, Admin, Owner — plus
one Primary Owner. And Anthropic is absolute about Owner: *'Owners and Primary Owners always have full
access to all features.'* **There is no way to narrow an Owner.** So the moment you hand someone Owner
because they need to pull a report, you've given them everything."

**[SAY] — the tool you actually want:** "**Custom roles**, at Organization settings → Roles. A Custom
role grants a named set of capabilities and admin areas to a group. Six admin areas — Identity &
Access, Billing, Analytics, Privacy, User Management, Libraries — each set to No access, Can view, or
Can manage. So *'she pulls usage numbers for the steering committee'* is a role. It is not an Owner seat."

**[SAY] — the misconfiguration everyone makes.** Quote it directly:
> *"Members assigned to custom roles don't automatically inherit organization-enabled capabilities.
> Every capability a 'Custom' role member needs must be explicitly granted."*

"Read that twice. You enable Cowork org-wide. You create a Custom role for the pilot group. Nobody in
the pilot group can use Cowork — because the role didn't list it. The org toggle is the *ceiling*.
The role is the *grant*."

**[>>]** *This is the single most useful thing you will say all day.* It is the defect that burns a
morning of a real rollout, it is Station 2 of the lab, and it is the kind of specific, operational detail
that convinces an IT audience you've actually deployed this rather than read a brochure. Say it slowly
and let someone write it down.

**[SAY] — three tabs:** "**Capabilities** — per-feature toggles for Cowork, Claude Code, Web Search,
Memory, Projects, Code Execution. That's your phased rollout mechanism: enable Cowork for the pilot
group and nobody else. **Connectors** — Always allow, Needs approval, or Blocked, per tool if you want.
One catch: connector settings are *organization-wide*, no per-group control, so the strictest
requirement governs everyone. **Models** — enable or disable models, cap effort levels, set the
default. Remember that tab; it comes back in the analytics section."

**[SAY] — two rules that surprise everyone:** "Nested IdP groups **don't sync** — only direct members.
A group inheriting membership from a parent group arrives empty. And permission math: capabilities are
**additive**, a user in several groups gets the union. But **spend limits are the opposite — the most
restrictive limit wins.** A second group never loosens a cap."

**[SAY] — sequencing:** "SSO first, then RBAC. Always. Enforcing roles against an identity source that
hasn't settled is how administrators lock themselves out of their own tenant."

---

### Set Up & Govern · 0:23–0:29 (6 min) — *follow along: Lesson 3*

**[SAY] — the setup sequence, briskly:** "Six steps, and the order matters. Enable the capability. Bind
identity — SSO then SCIM. Deploy the desktop app through Intune. Lock the edges: network egress
allowlists, mount controls, desktop extension allowlists. Publish the approval and folder policy. Set
model caps at setup, not after the first invoice."

**[NOTE — keep this shallow. Axos has already done most of it.]** They've stood up Intune (with some
teething problems they're working through themselves) and they haven't engaged us on activation. Read
the six steps as *a checklist to confirm*, not a tutorial to deliver — the value is spotting the one
step that isn't done, not walking all six. Anthropic's own marketing bundles setup into activation,
which is why it looks bigger than it needs to be here. **If you're short on time, this is the second
thing to cut** (after the plugin slot).

**[SAY] — the control that matters most:** "Folder scope. Users pick which folders Cowork can read and
write. **There are no per-file permissions.** So the grant *is* the control, and least privilege means
picking a narrow project folder instead of a drive root. That one decision contains more risk than
everything else on the slide."

**[SAY] — the correction, and say it deliberately:** "I want to correct an impression the first three
sessions may have left. We've talked a lot about Cowork being local — desktop app, local folders. That
is true about *where the files live*. It is **not** true about where the work happens. **When Cowork
answers a request, that call goes out to Anthropic's API.** Whatever it read from the folder you
granted leaves the machine to be processed. The files are local; the reasoning over them is not."

**[SAY] — the consequence:** "So the folder grant isn't a convenience setting, it's an access-control
decision. Scope it as though everything inside it is being sent out — because functionally, it is."

**[>>]** *This is the single most important correction in the session, and it's the one an examiner or
a CISO will land on.* "It runs locally" is the phrase people take away from a Cowork demo, and in a
regulated bank that misconception is genuinely dangerous — it makes an over-broad folder grant feel
harmless. Correcting it here, unprompted and in your own words, is also the strongest credibility move
you can make with the compliance people in the room: you're volunteering the uncomfortable fact rather
than being caught by it. Don't soften it and don't bury it in the middle of a list.

**[SAY] — the gap, precisely.** Read Anthropic's words verbatim:
> *"the Compliance API and Audit Logs do not cover Claude Cowork yet."*

"Cowork is excluded from **Audit Logs, the Compliance API, and Data Exports** — every tier, Enterprise
included. History lives locally on the machine. For context, Anthropic shipped the Compliance API in
May with 28 integrations including Purview, Okta, and CrowdStrike. Cowork just isn't in its scope yet."

**[NOTE]** Date-stamp it out loud: *"Verified against Anthropic's documentation on 21 July 2026.
Re-verify before you circulate anything."*

**[SAY] — what compensates:** "Three planes. **Control plane** — the Compliance API, covering tenant
administration. **Agent plane** — OpenTelemetry, the closest thing to session visibility you have.
**Network plane** — an on-device proxy or LLM gateway, which is your DLP hook, because native DLP
alerting on Cowork conversations isn't available. A shared user account identifier lets you correlate
across them."

**[SAY] — and the routing decision:** "Some work needs zero retention or centralized audit *today*.
That work does not belong in the Cowork interface — route it to the API or Claude Code Enterprise.
Deciding that per workload, in writing, with a named example, is what turns awareness into a control."

### 🔁 Hand to Kevin here (~0:26, about 90 seconds)

**[DO]** This is Kevin's only speaking slot before the Demo. Cue him by name and give him the question
rather than the answer:

> **[SAY]** *"Kevin, you've been fielding this one from a few customers — what actually happens to spend
> controls when you move from Team to Enterprise?"*

**[NOTE]** What he'll cover: Enterprise **removes** several cost controls that Team has; there is no
clean per-user spend cap; organizations that need one are enforcing it through an API management
gateway. **Take the handback explicitly** — *"So: model caps are the lever you actually have. Which
brings us to the surface you don't have…"* — and move to the audit gap. If he runs past two minutes,
park it: this question resurfaces in Discuss and he'll have the floor there.

**[>>]** *Why give Kevin a slot before the Demo at all?* Two reasons. It establishes him as a source of
answers before he has to hold the screen, so when the handoff comes at 0:43 the room already knows why
they're listening to him. And this particular correction is more credible from the person who's been
answering the question repeatedly than from the person running the deck.

**[SAY] — the Microsoft-shop option, worth naming in this room:** "There's a stronger option for a bank
on the Microsoft stack: **Claude on Azure AI Foundry.** It's a materially better posture for
high-assurance work because the infrastructure is genuinely yours — real components you install and
configure inside your own boundary — rather than a setting you toggle. The trade is effort: it's a
deployment project, not a checkbox. And that same gateway layer is where per-user spend control
becomes possible, which is the other thing you can't do natively."

**[>>]** *Expect this to be the question the IT partners actually care about.* It connects the audit
gap, the data-egress correction, and the missing spend controls into one answer, and it's the natural
next engagement. If someone pushes for detail beyond the shape of it, take it offline — the depth is a
scoping conversation, not a workshop slot.

---

### Analytics & Adoption · 0:29–0:33 (4 min) — *follow along: Lesson 4*

**[SAY] — three surfaces, three jobs:** "**Admin dashboard** — is anyone using it? Sessions and active
users at T+1. **Analytics API**, Enterprise only — who, how deeply, at what cost: per-user activity,
DAU/WAU/MAU, skill and connector rankings, per-user cost by model. **OpenTelemetry** — what actually
happened: tool calls, files read and modified, skills used, and whether each action was approved
manually or auto-initiated."

**[SAY] — the setup gotcha:** "OTel emits nothing until you configure it. Anthropic's words: *'events
are only exported when an admin configures an OTLP endpoint. No data flows by default.'* Organization
settings → Cowork, OTLP endpoint, protocol, auth headers."

**[SAY] — the thing to flag to a bank:** "That stream carries **prompt text and file paths** into your
SIEM. That's a data-handling decision in its own right. Scope the sink, restrict who can query it, and
write it into the control narrative."

**[SAY] — the three questions:** "Weekly, then monthly. Are people using it? How deeply? Is it paying
off? Weekly active usage trending up is the headline."

**[SAY] — hand forward, don't spend it here:** "Hold that, because in about ten minutes Kevin's going to
put a real dashboard on screen and we'll read those three questions off actual Axos numbers."

**[>>]** *This slot is the frame; Kevin's slot is the evidence. Do not teach the education loop here.*
The temptation is to explain the whole spend-signal idea now and then have Kevin illustrate it — that
kills it twice over. Said abstractly at 0:31 it's a platitude; said at 0:45 over a real "top expensive
prompts" card it's a genuine insight. Four minutes, three surfaces, the no-data-by-default gotcha, the
prompt-text warning, and out. **You own the concept; he owns the proof.**

---

## Demo · 0:33–0:52 (19 min) — The Nimble Gravity adoption dashboard

> **Kevin drives and narrates the whole slot. Derrikk interjects.** One handoff in at 0:33, one
> handback at 0:52. There is **no console demo and no Cowork demo** in this session — neither
> presenter has admin-console access, and nobody should improvise one.
>
> **This is our IP, and we're naming it as an offer.** Standing up Cowork analytics from scratch means
> pulling the Analytics API and the OpenTelemetry stream into a BI layer and then designing the views
> — a project. We ship this out of the box. Say so plainly.

**[SAY] — the setup, then hand over (0:33):**
> *"Everything I've described so far is something you'd have to build. So let me show you the part you
> don't. This is a dashboard we've built at Nimble Gravity to get clients to Cowork analytics in days
> instead of a quarter. Kevin built it — Kevin, take us through it."*

**[>>]** *Why this framing and not "here's a dashboard".* The room has just sat through twenty-three
minutes of controls, gaps and caveats — necessary, but it is all constraint. This slot is the first
time today they get handed something that makes their life easier, and the contrast is the point. Set
it up as relief, not as another thing to absorb.

### What Kevin covers — the card order

Agree this order with him beforehand. It builds from "is it alive" to "what do I do about it," which
is the same arc as the three questions in Lesson 4.

| # | Card | The line that matters |
|---|---|---|
| 1 | **Number of users** | Is this thing alive? Fastest read in a steering meeting. |
| 2 | **Daily prompts per user** | Not to rank people — to see the *shape*. Heavy users vs the long tail who opened it twice. |
| 3 | **Token usage** | Volume over time. Sets up everything that follows. |
| 4 | **Cost by model** · **API requests by model** | Where the money actually goes. The Opus concentration shows up here. |
| 5 | **Top expensive prompts** | **Spend the most time here.** It is a backlog, not a naughty list. |
| 6 | **Reliability** · **MCP servers** | Operational health, and what's actually connected. |

**[NOTE]** Cowork and Claude Code appear as **their own sections** on the combined board — there is
**no tool filter**. Have Kevin say this out loud when he first scrolls past it, or someone will spend
the next ten minutes hunting for a dropdown.

### Derrikk's interjections — three, and only three

Kevin has the floor. Do not narrate over him continuously; land these three and get out of the way.

**Interjection 1 — after "cost by model" (~0:41):**
> *"Pause on that one. When you see a whole desk running everything on Opus — the wrong answer is a
> line in the steering minutes saying 'monitor Opus spend weekly.' The right answer is the Models tab
> I showed you fifteen minutes ago. A cap. That's the difference between a finding and a remediation."*

**Interjection 2 — on "top expensive prompts", the big one (~0:45):**
> *"This is the card I'd ask you to sit with. Everyone reads a dashboard like this as a cost report. I
> want you to read it as a **teaching list**. Every expensive pattern on here is telling you to do one
> of exactly two things."*
>
> *"One — build a skill. If the same request keeps showing up across enough people, it should stop
> being a prompt and become a skill. That's the Workshop 3 loop, except now the data tells you which
> skill to build instead of waiting for a volunteer."*
>
> *"Two — fix the instructions. A session doing hundreds of individual file edits, one tool call each,
> costs a fortune next to the same work batched. You don't need a skill for that. You need one line in
> that user's `CLAUDE.md` asking for batched tool and file edits. Same output, a fraction of the spend."*
>
> *"That's **proactive versus retroactive** enablement. Retroactive is what most places do — somebody
> runs up a bill, you have an awkward conversation. Proactive is seeing the pattern before it becomes
> a conversation and shipping the fix for everyone at once. This is what makes proactive possible."*

**[>>]** *This is the strongest five minutes in the module — protect it.* It is the only part of W4
that hands the business users something they actively want, and it flips the session from a constraint
conversation into an enablement one. It also closes the loop back to Workshop 3: the skills they built
last week now have an evidence-driven pipeline behind them. If the slot is running long, cut cards 6
and 3 — never this.

**Interjection 3 — the offer, at the end (~0:50):**
> *"One thing to be explicit about, because it would be odd not to say it. This isn't a mock-up — it's
> an accelerator we've built and we stand it up for clients. If getting to this view is something you
> want, that's a conversation we can have, and it's a short one. Kevin and I can scope it."*

**[>>]** *Make the offer once, plainly, then stop.* This is a training session, and the room includes
people who were told they didn't need to be here. One clear sentence naming the asset and the next
step is useful information; anything more turns a workshop into a pitch and costs you the credibility
you spent the first half building. Say it, let it sit, move to Discuss.

### If Kevin's connection drops

It died mid-sentence during prep, so plan for it. Take the screen back, present his captures, say
plainly that they're captures, and carry the card order yourself — the framing and the education loop
are yours anyway. **Do not spend ninety seconds waiting for him to reconnect.**

---

## Discuss · 0:52–1:04 (12 min) — What leaves the Cowork interface? + teams

> **Derrikk facilitates, Kevin answers.** You run the room and keep time; Kevin is the technical
> authority on anything that lands on routing, spend, Foundry, or the audit gap. Say this out loud as
> you open so people know who to aim at: *"I'll keep us moving — Kevin's the one to point the hard
> technical questions at."*

*Pre-recruited IT/compliance partner goes first.*

**[SAY]** "Here's the question I want in the open, with IT and compliance in the room. Given what I just
showed you about audit coverage — **which Axos workloads should not run in the Cowork interface today?**"

**[DO]** Call your pre-recruited partner: *"[Name], 90 seconds — where would you draw that line?"* Then
take two or three more from the room. Capture answers in the chat or on a shared slide; **these become
Station 4 material** for several teams.

**[SAY] — seed it if the room is quiet:** "Think about anything with a retention obligation. Anything
where you'd need to reproduce the full interaction for an examiner. Anything touching material
non-public information. Those are candidates for the API or Claude Code Enterprise instead."

**[>>]** *Why this discussion and not a plugin-candidates discussion?* The old W4 asked which skills
should become team plugins — a fine question that the wrong half of the room can answer. This one puts
the business users and the compliance partners in genuine dialogue, and it produces the exact artifact
Station 4 scores (checklist item 3 requires a named workload routed to an audited surface). Teams that
engage here finish the lab meaningfully faster.

**[SAY] — the reframe to land before the break:** "Notice what we just did. We didn't decide whether
Cowork is safe. We decided **which work goes where.** That's what a governance decision actually looks
like, and it's what your one-pager has to show."

**[DO] — POLL FIRST, then announce teams (4 min).** Do not skip the poll.

> **[SAY]** *"Quick show of hands, or drop a 1 in the chat: who has Cowork open and working on this
> machine right now — installed, and you've used it?"*

**[NOTE]** Count them. **Every team needs at least one confirmed Cowork user, and that person is the
driver.** The invite went wide and this room is a mixed split — some of you have shipped a skill, some
have never opened the app. If you assign teams without checking, you will get a team of four people
who all thought someone else had it working, and they will lose the whole forty minutes.

If there aren't enough confirmed users for four teams, **make fewer, larger teams.** Three teams of
five that can all actually run Cowork beats five teams of three where two are dead on arrival.

**[SAY] — then announce:** "Teams of 2–4. **Mix them — an IT or compliance person with the business
users.** The person who just told me Cowork is working is your driver, and they share their screen.
Everyone else advises — and advising is the real work here, not typing. Two hints per station: first
is free, second adds 2 minutes. Wrong codes cost nothing but time. Forty minutes."

**[SAY] — give the non-drivers a job, by name:** "If you're not driving, you're not spectating. One of
you reads the rubric or the checklist aloud. One of you keeps time against the forty minutes. One of
you writes down the finding before it's typed. Those are real jobs and the team is slower without them."

**[>>]** *This is the single beat that decides whether breakouts work today.* In Workshop 3 everyone
present had Cowork running, so drivers were interchangeable. Today they are not, and the failure is
silent — a team discovers at minute six that nobody can grant a folder, and by the time they flag it
you're twenty minutes in. Sixty seconds of polling removes it. Assigning the non-drivers explicit
roles is what keeps the observers from going quiet, which is the second-most-likely failure.

**[>>]** *Insist on mixed teams.* Station 1 and Station 3 favour business users comfortable delegating to
Cowork; Station 2 favours whoever knows what SCIM is. Homogeneous teams stall on one of the two. Mixed
teams also produce the cross-functional conversation that the rollout actually needs — which is,
quietly, the real deliverable of this workshop.

---

## Break · 1:04–1:10 (6 min)

**[DO]** "During the break, four things. Confirm all **six** lab files are downloaded into one folder
you can grant Cowork access to. Open the [Control Room](control-room/) in a new tab — not the lesson
page. Find your breakout room. And **drivers — open Cowork now and grant it that folder**, so we're not
doing it on the clock."

**[NOTE — run an install triage during the break, don't just announce it.]** Ask every driver to
confirm in chat that Cowork is open *and* the folder is granted. Chase the silent ones. If a team's
driver can't get there, **merge that team into another one now** rather than sending them into a
breakout to discover it alone. A team of five that works beats two teams where one is dead.

**[>>]** *Staging break, not a rest break — same as W3.* Teams arriving without files staged burn five
minutes of a forty-minute clock. Confirm in Teams chat before you open the clock; wait the extra 60
seconds for stragglers rather than starting with file-less teams.

---

## Lab · 1:10–1:50 (40 min) — The Control Room

*Follow along: Lesson 5. Open at [control-room/](control-room/) — participants in breakouts. Keep the
[facilitator view](control-room/admin.html) open (local-only this cohort — see prep note 6).*

> **Derrikk runs the room; Kevin floats.** You own the clock and the hint calls. Kevin is most useful
> dropping into breakouts and answering IT questions in chat — **he does not need the main screen for
> the next 40 minutes.** Agree before the session who takes which breakouts so you aren't both landing
> in the same one.

### ⚠️ Two things that will bite in a mixed-install room

**1. You cannot see progress. Go and look.**
The leaderboard is local-only this cohort, so the facilitator view shows nothing for breakout teams.
**Rotate on a fixed cadence — every 6–7 minutes, one lap of all teams, split with Kevin.** Ask one
question when you drop in: *"which station are you on?"* A team that's still on Station 1 at the
15-minute mark is stuck and won't tell you unprompted.

**2. Station 3 is the choke point — have the escape hatch ready.**
It asks teams to author *and install* a Cowork skill. A Workshop 3 veteran does that in five minutes;
someone who opened Cowork this morning does not. **If a team is struggling with the skill mechanics,
let them drop the skill and just ask Cowork for the analysis directly:**

> *"Analyse `analytics-export.csv`. Give me the count of distinct users across the week, and the
> department with the highest share of its dispatch turns running on Opus."*

That produces the same two numbers and therefore the same code. The skill is the ideal version; the
analysis is the requirement. **Say this without ceremony** — don't make it sound like a consolation.

### Giving codes to keep teams moving

The stations are linear and code-gated, so a team stuck on Station 2 **cannot skip ahead to the
capstone.** That matters, because Station 4 is the actual deliverable.

**At the 25-minute mark, any team not into Station 3 gets given the codes they're missing.** Say it
plainly: *"I'm going to hand you these so you get to the part that matters — the one-pager is the
thing you're taking away from today."*

**[>>]** *Handing over a code feels like breaking the game. It isn't.* The game exists to produce the
control narrative; a team that spends forty minutes perfecting Station 2 and never writes the
one-pager has had a worse session than one that was handed two codes and spent fifteen minutes
arguing about the audit position. Protect the deliverable, not the puzzle. The answer key is in the
facilitator appendix — keep it open and unshared.

**[DO]** "The Control Room is open. Clock starts when your team enters a name. One driver in Cowork, the
rest advising. Game in one window, Cowork in the other. Go."

**[>>]** *Why a timed simulation for governance content?* The same three reasons the vault worked in W3, plus one
specific to this material. The clock stops teams over-polishing; the team mechanic means fast thinkers
carry slower ones; and every code is gated on a real control. The addition here: governance content is
the easiest material in the program to *nod along to and not absorb*. Nobody argues with "apply least
privilege." Making them count seven actual violations in a real register converts agreement into skill.

### The four stations — what to watch for

**Station 1 — The Access Map (delegate an access review):**
**[NOTE]** Teams test 18 grants against a 4-rule rubric. **Answer: 7 non-compliant rows; the worst
offender is in Commercial Lending.** Common failure: counting *violations* instead of *rows* — the
rubric says count each row once, and teams that miss that line get 10 or 11. Redirect: *"Re-read the
counting instruction in the rubric."*

**[>>]** *What Station 1 teaches.* That an access review is a real, delegable piece of work — and that
folder scope is where the risk actually lives. Teams that scope their own Cowork grant to just the lab
folder without being told have already understood the lesson.

**Station 2 — The Broken Role Matrix (repair the RBAC design):**
**[NOTE]** Seven defect areas; the code needs two of them. **Answer: 4 people move off Owner** (two of
the six genuinely administer the org), **and the mandatory-disclaimer plugin must be Required.** Common
failure: teams count all six Owners, or count only the obviously-wrong ones. Push them to the "what they
actually need to do" column — anyone whose need maps to exactly one of the six admin areas gets a
Custom role.

**[>>]** *Station 2 is the highest-transfer station, exactly as Room 2 was in the vault.* After repairing this
matrix, participants will never again hand out Owner casually, and they will never again forget that
Custom roles grant nothing implicitly. If a team is stuck past the 20-minute mark, give hint 1 free.

**Station 3 — Read the Room (author a skill, run it on the export):**
**[NOTE]** Teams author a `cowork-adoption-review` skill with four prescribed sections, then run it on
the export. **Answer: Capital Markets, 12 weekly active users.** Two common failures: (a) computing
Opus share across the whole file instead of per department, and (b) counting *rows* or *sessions*
instead of distinct users. Both are caught by the "sanity-check by hand" step — push teams to it.

**[>>]** *Station 3 is the W3 callback.* It is the only station that asks them to author a skill, and it
deliberately reuses the discipline they learned in the vault — prescribe the output shape, don't
describe it. Teams that write a vague skill get a drifting readout and can't find the number.

**Station 4 — The Control Narrative (chain everything + QA):**
**[NOTE]** Teams fold all three artifacts into a one-page control narrative and score it against a
9-item checklist. **The station only clears on a clean sweep: 9 and the verdict word.** Most first drafts
fail items 2, 6, and 7 — the three monitoring planes, the explicit-capability-grant rule, and naming
the OTel collector plus the no-data-by-default caveat.

**Two failure modes — know which you're looking at:**
- **A — they're arguing with the checklist.** "Item 3 doesn't apply to us." It does; the checklist is
  the spec. Redirect: *"The checklist is the examiner. Add the sentence."*
- **B — they're writing prose instead of answering items.** A beautiful page that fails four items.
  Redirect: *"Score it first, then write to the gaps. The checklist is your outline."*

**[>>]** *Station 4 is where the capstone deliverable actually gets produced* — the one-pager that used to
be a quiet writing exercise is now the final station. That's the whole design of the pivot: the artifact a
sponsor needs is the thing that lets them out of the room. Teams will iterate three or four times, and
each iteration is a real editing pass on a real governance document.

**[NOTE — pacing]** If a team hasn't cleared Station 2 by the 15-minute mark, drop a hint in their breakout
chat. If a team is in Station 4 at the 35-minute mark with no code, tell them to score before they polish.
**At 1:47 — 3 minutes left — call time** and ask each team to note where they stopped.

---

## Debrief · 1:50–1:58 (8 min) — One share per team + knowledge check

**[SAY]** "One share per team — what's one line in your control narrative you'd actually defend to an
examiner? Thirty seconds each."

**[SAY] — the meta-lesson, say each one and pause:** "Here's what the Control Room was really testing.
**Station 1:** least privilege is a folder decision, and it's reviewable. **Station 2:** delegation is a
Custom role, not an Owner seat — and capabilities are never inherited. **Station 3:** measurement is only
useful if it points at a control. **Station 4:** you don't defend a rollout with evidence, you defend it
with a position — written down, owned, and dated."

**[>>]** *Same reason as W3: consolidate or the puzzle overwrites the principle.* A timed simulation leaves
a vivid memory of the game and a fuzzy memory of the content unless you name the discipline behind each
station explicitly. This matters more in W4 than W3, because the people who most need the principle — the
IT and compliance partners — are the ones least likely to have driven the keyboard.

**[THEY]** "Two minutes — run the **Workshop 4 knowledge check** at the bottom of Lesson 5. Do it now
while it's fresh." *(6 questions, 4 to pass.)*

---

## Close · 1:58–2:00 (2 min) — Homework + program wrap

**[SAY] — homework:** "The Control Room used a synthetic Axos pilot. Your homework uses the real one.
Export your own Cowork folder grants and run the Station 1 review against the rubric. Map your pilot group
to Custom roles. Then score your real control narrative against `exam-checklist.txt` until all nine
items pass — and take it to your sponsor."

**[SAY] — the re-verify warning, don't skip it:** "One last thing, and it's the most important sentence
of the day for the compliance people in the room. Everything I told you about audit coverage was
verified on **21 July 2026**. Anthropic is actively closing that gap. **Before your control narrative
goes to a committee, re-check it and re-date the page.** A governance document with a stale date is the
one finding you cannot argue with."

**[SAY] — program wrap:** "That's the full program. You can explain Cowork, use it on real work, build
skills the way Anthropic recommends, package and distribute them under access control, and govern and
measure the whole thing — including being honest about where the audit coverage ends. That's an
enablement practice, not a tool rollout."

**[DO]** Drop the **[final feedback](pages/workshops/feedback.html)** link, the
**[cheat sheet](pages/workshops/cheat-sheet.html)**, and
**[My Progress](pages/workshops/my-progress.html)** for certificates. Mention office hours and that
champions take it from here.

---

### Facilitator appendix

**Hold the lab.** If you run long, cut from Teach — compress the plugin slot, then the analytics slot.
**Never cut RBAC, and never cut the audit-gap quote.** The 40 minutes in the Control Room are where the
value lands.

**Answer key (do not share):**
| Station | Code | Derivation |
|---|---|---|
| 1 · The Access Map | `7Commercial` | 7 non-compliant rows; worst offender (4 rules) is C. Duarte, Commercial Lending |
| 2 · The Broken Role Matrix | `4Required` | 4 of 6 Owners move to Custom roles; disclaimer plugin must be Required |
| 3 · Read the Room | `Capital12` | Capital Markets ≈88.7% Opus share; 12 distinct weekly active users |
| 4 · The Control Narrative | `9Ready` | All 9 checklist items pass → verdict READY |

Codes are case- and whitespace-insensitive. Hint 1 free; hint 2 costs +2 min.
Reset is available per team in the facilitator view.

**Two-presenter risks:**
- **Kevin drops during the Demo.** His connection died in prep. Take the screen back, present the
  screenshots, say plainly they're captures, and keep narrating the education loop — the teaching
  content is yours, not his. Don't spend 90 seconds waiting for him to reconnect.
- **The handback at 0:52 gets lost.** Two presenters plus a discussion opening is where sessions drift.
  Say the handback line, then immediately pose the Discuss question. Don't let it become open floor.
- **You both dive into the same breakout.** Split the list before the session starts.
- **Kevin over-runs the 90-second Teach interjection.** Park it — he gets the floor properly in Discuss.
- **Someone asks to see the admin console.** Neither of you has access to their tenant. Say so and move;
  the settings are named on Lesson 2. Do not improvise a console tour.

**Top risks:**
- **Lab files not staged.** Confirm in Teams chat during the break. Six files, one folder.
- **A team grants a real data folder.** Redirect to the lab folder — and note the irony out loud; it's
  a teaching moment for Station 1.
- **Someone challenges the audit-gap claim.** Good. Show them the quote and the date. If Anthropic has
  shipped coverage since 21 July 2026, concede immediately and reframe: the lab tests whether you can
  *state* your audit position, which is still required.
- **A compliance participant wants to litigate policy in the room.** Acknowledge, capture it for the
  Discuss slot or office hours, and move — this session is 2 hours and the lab is not compressible.
- **Local-only leaderboard confusion.** The facilitator view only sees teams from your browser this
  cohort. Rely on breakout check-ins; say so up front so nobody thinks the board is broken.

**Closes the program:**
- Capture the Control Room results and the strongest control narratives — those are the seeds of the
  Axos governance one-pager NG delivers.
- Note which workloads the Discuss slot flagged for audited surfaces; that list is a deliverable in
  its own right.
- Anyone who cleared Station 2 quickly is an RBAC champion. Name them to the sponsor.

### Script ↔ on-site sync notes
- **Agenda** matches `module-4-workshop.html` / `syllabus.html` (8 slots, 2 hours) and
  `facilitator-guide.html#workshop-4`.
- **Lesson map:** 12 Package It as a Plugin · 13 Roles & Access · 14 Set Up & Govern ·
  15 Analytics & Adoption · 16 The Control Room (lab + knowledge check).
- **Lab assets:** six files from `control-room/lab-files/` — confirmed downloaded before break.
- **Facilitator view:** `control-room/admin.html` — open throughout the lab slot.
- **Governance facts** quoted in Teach were verified against Anthropic's documentation on
  **2026-07-21**; the Sources block in `cowork-context.md` has the references. Re-verify each cohort.
- **Deepens W3:** Station 3 reuses the skill-authoring discipline from the Skill Vault (prescribe the
  output shape); the Open callbacks the vault leaderboard. Continuity is intentional.
