WORKSHOP 4 — GOVERN & ROLL OUT
TELEPROMPTER TALK TRACK — FULL 2 HOURS

Plain-text, line-broken for scrolling.
[CUES IN CAPS AND BRACKETS] are actions, not speech — do not read them.
Everything else is spoken.

Presenter: Derrikk. Kevin drives the screen once, 0:33-0:52,
narrating the NG adoption dashboard. Derrikk interjects 3x.
Facts verified 22 July 2026. Answer key is in workshop-4-script.md.


================================================================
0:00 - 0:10   OPEN
[SHARE SCREEN: Workshop 4 hub page]
================================================================

Good morning, everyone. Thanks for making the time.

Quick bit of housekeeping before we start,
because I know the invite for this one went out widely.

This session was scoped for IT, security and compliance.
Some of you were told you didn't need to be here.
You're welcome anyway.

Here's how I'd like to run it.

If you're here to observe — observe.
There is no pressure to speak,
and you'll still get plenty out of the first half.

If you own an admin console, or a policy, or a control,
then this whole session is aimed squarely at you,
and I'm going to be looking to you for the questions.

[PAUSE]

For anyone joining cold:
three sessions taught knowledge workers to delegate real work to Cowork.
Today is the one that answers — under what controls.
And then you'll run a live control review against a clock.

One more thing I want on the table before we start.

Cowork has a real audit-coverage gap today.
I'm going to show you exactly where it is,
in Anthropic's own words.
We are not going to talk around it.

The question this session answers isn't "is it perfect."
It's — can we run it responsibly, and prove that we did.

[PAUSE]

Last thing — let me introduce Kevin.
Kevin built the adoption dashboard I'll show you later,
and he's been living in the admin console and the analytics
across a number of these deployments.
He'll take a question from me in a few minutes,
he's driving the demo in about twenty-five minutes,
and he is the person to aim your hardest technical questions at.

[CUE: point at the hub page]

This page is your home base for today.
Five lessons, the lab, and the file pack all hang off it.


================================================================
0:10 - 0:15   TEACH 1 — PACKAGE IT AS A PLUGIN
[OPEN: Lesson 1 — Package It as a Plugin]
================================================================

Five minutes on plugins,
because today they matter for exactly one reason.

The clean split is this.
Individual users use skills and connectors.
A plugin is for teams.

It bundles those skills, the connectors, agents, hooks and commands
into one install you hand to a group of people.

And critically — it's the thing your admin can require,
or offer, or hide, from a specific group.
That's why it's in the governance session.

Who actually builds them?
Rarely an individual.
Sometimes a department lead packaging up their team's way of working.
But most often it's the enterprise saying —
these are the tools you should be using, here's the plugin.

[SCROLL: the admin click-path section]

Now, this room is going to be the one clicking these buttons,
so let me give you the actual path.

It all lives at Organization settings, then Plugins.

Prerequisite first, and this catches people —
Cowork AND Skills both have to be enabled.
If that page looks empty, that is almost always why.

There are three ways in.

Add plugins, then Browse Anthropic sources,
pulls in Anthropic's own marketplaces.
Knowledge Work is already there by default.

Add plugins, then Upload a file,
creates your own marketplace from zip files.
Good while you're still iterating.
And note — uploading a plugin with the same name
overwrites the previous version automatically.
That's your update mechanism, and it's also your accident.

Add plugin, then GitHub, syncs from a repo.
It has to be private or internal — public repos get rejected.
And syncs fire when a version-bump pull request
merges to the default branch.
A direct push does not trigger a sync.

The limits: fifty megabytes a plugin.
A hundred plugins if you upload by hand,
five hundred if you sync from GitHub.

[SCROLL: the folder-structure tree]

And one thing worth recognising when someone hands you a zip.

The manifest lives in dot-claude-plugin, plugin dot json.
That directory holds ONLY the manifest.
Every other folder — skills, agents, hooks, commands —
sits at the plugin root, not inside it.
Nesting them in there is the single most common reason
a plugin silently doesn't load.

Two more.
Skills and agents are markdown.
Hooks, MCP servers and monitors are JSON.
And a CLAUDE dot md at the plugin root is ignored —
it is not loaded as context.
If you want instructions to reach Claude, they go in a skill.

That's plugins. Let's talk about who gets them.


================================================================
0:15 - 0:23   TEACH 2 — ROLES & ACCESS (RBAC)
[OPEN: Lesson 2 — Roles & Access]
================================================================

This is the lesson your IT partner came for.

Claude Enterprise gives you three static roles —
User, Admin, Owner —
plus a single Primary Owner.

And Anthropic is absolute about Owner.
Their words: Owners and Primary Owners
always have full access to all features.

There is no way to narrow an Owner.

So the moment you hand someone Owner
because they need to pull a report,
you have given them everything.

[PAUSE]

The tool you actually want is Custom roles.
Organization settings, then Roles.

A Custom role grants a named set of capabilities
and admin areas to a group.

There are six admin areas.
Identity and Access. Billing. Analytics.
Privacy. User Management. Libraries.

Each one set to No access, Can view, or Can manage.

So — "she pulls the usage numbers for the steering committee" —
that is a role.
It is not an Owner seat.

[SCROLL: custom roles inherit nothing]

Now here's the misconfiguration everybody makes.
I'm going to read this one straight.

"Members assigned to custom roles
don't automatically inherit organization-enabled capabilities.
Every capability a Custom role member needs
must be explicitly granted."

Read that twice.

You enable Cowork org-wide.
You create a Custom role for the pilot group.
Nobody in the pilot group can use Cowork —
because the role didn't list it.

The org toggle is the ceiling.
The role is the grant.

[PAUSE — let that land]

[SCROLL: the three tabs]

Three tabs decide what a group can reach.

Capabilities — per-feature toggles.
Cowork, Claude Code, Web Search, Memory, Projects, Code Execution.
That is your phased rollout mechanism, by the way.
Enable Cowork for the pilot group and nobody else.

Connectors — Always allow, Needs approval, or Blocked.
Anything reaching customer or loan data belongs on Needs approval.
One catch: connector settings are organization-wide.
There's no per-group connector control,
so the strictest requirement governs everyone.

Models — enable or disable specific models,
cap effort levels, set the default.
Remember that tab. It comes back in about twenty minutes.

[SCROLL: groups and permission math]

Two rules that surprise everyone.

Nested identity-provider groups do not sync.
Only direct members.
A group that inherits its membership from a parent group
arrives empty, and nobody gets the capability.

And permission math.
Capabilities are additive — a user in several groups
gets the union of their permissions.

[SCROLL: install preferences]

Same for plugins, and this one matters.

Four install preferences.
Required — installed, cannot be removed.
Installed by default — installed, but they can uninstall.
Available for install — it's in the catalogue, they choose.
Not available — hidden.

Here's the trap.
When someone is in several groups with different settings,
the MOST PERMISSIVE one wins.

So "Not available" is not a block.
If that person is also in a group where it's Available,
they get it.

If a plugin genuinely must not reach someone,
the control is their group membership — not the preference.

And finally, sequencing.
SSO first, then RBAC. Always.
Enforcing roles against an identity source that hasn't settled
is how administrators lock themselves out of their own tenant.


================================================================
0:23 - 0:29   TEACH 3 — SET UP & GOVERN
[OPEN: Lesson 3 — Set Up & Govern]
================================================================

I'm going to move quickly through setup,
because most of this is already done here.

Six steps, and the order matters.
Enable the capability.
Bind identity — SSO, then SCIM.
Deploy the desktop app through Intune.
Lock the edges — network egress allowlists,
mount controls, desktop extension allowlists.
Publish the approval and folder policy.
Set model caps at setup, not after the first invoice.

Treat that as a checklist to confirm, not a tutorial.
The value is spotting the one step that isn't done.

[SCROLL: folder scope]

The control that matters most is folder scope.

Users pick which folders Cowork can read and write.
There are no per-file permissions.
So the grant IS the control,
and least privilege means picking a narrow project folder
instead of a drive root.

That one decision contains more risk
than everything else on this page.

[PAUSE]

Now I want to correct an impression
the first three sessions may have left.

We have talked a lot about Cowork being local.
Desktop app. Local folders.

That is true about where the files live.
It is NOT true about where the work happens.

When Cowork answers a request,
that call goes out to Anthropic's API.

Whatever it read from the folder you granted
leaves the machine to be processed.

The files are local.
The reasoning over them is not.

[PAUSE]

So the folder grant isn't a convenience setting.
It's an access-control decision.
Scope it as though everything inside it is being sent out —
because functionally, it is.

[HAND TO KEVIN — about 90 seconds]

Kevin, you've been fielding this one from a few customers.
What actually happens to spend controls
when you move from Team to Enterprise?

[KEVIN ANSWERS — Enterprise removes several cost controls,
no clean per-user cap, gateway required.
IF HE RUNS PAST TWO MINUTES, TAKE IT BACK — he gets the floor in Discuss.]

So — model caps are the lever you actually have.
Which brings us to the surface you don't have.

[SCROLL: the audit gap]

This is the deciding fact for a regulated bank,
so I'm going to be precise about it.

Anthropic's own Cowork admin guide says —
and I'm quoting —
"the Compliance API and Audit Logs
do not cover Claude Cowork yet."

Cowork is excluded from Audit Logs,
the Compliance API, and Data Exports.
Every tier. Enterprise included.
And conversation history lives locally on the machine.

For context, Anthropic shipped the Compliance API in May,
with twenty-eight integrations —
Purview, Okta, CrowdStrike and others.
Cowork just isn't in its scope yet.

That was verified against their documentation
on the twenty-first of July.
Re-check it before you circulate anything.

[SCROLL: three planes]

So what compensates?

Three planes.

Control plane — the Compliance API. Tenant administration.

Agent plane — OpenTelemetry.
The closest thing to session visibility you have today.

Network plane — an on-device proxy or LLM gateway.
That's your DLP hook,
because native DLP alerting on Cowork conversations isn't available.

A shared user account identifier lets you correlate across them.

And the routing decision.
Some work needs zero retention or centralised audit today.
That work does not belong in the Cowork interface.
Route it to the API, or to Claude Code Enterprise.

Deciding that per workload, in writing, with a named example —
that's what turns awareness into a control.

There's a stronger option for a bank on the Microsoft stack,
and it's worth naming in this room.
Claude on Azure AI Foundry.

Materially better posture for high-assurance work,
because the infrastructure is genuinely yours —
real components you install inside your own boundary,
rather than a setting you toggle.

The trade is effort. It's a deployment project, not a checkbox.
And that same gateway layer
is where per-user spend control becomes possible.


================================================================
0:29 - 0:33   TEACH 4 — ANALYTICS (FRAME ONLY)
[OPEN: Lesson 4 — Analytics & Adoption]
[DO NOT TEACH THE EDUCATION LOOP HERE — that's Kevin's slot]
================================================================

Four minutes on measurement, then we go live.

Three surfaces, three different jobs.

Admin dashboard — is anyone using it?
Sessions and active users, refreshed at T plus one.

Analytics API, Enterprise only —
who, how deeply, at what cost.
Per-user activity, daily and weekly and monthly actives,
skill and connector rankings, per-user cost by model.

OpenTelemetry — what actually happened.
Tool calls, files read and modified, skills used,
and whether each action was approved manually or auto-initiated.

One setup gotcha.
OTel emits nothing until you configure it.
Anthropic's words — events are only exported
when an admin configures an OTLP endpoint.
No data flows by default.

And one thing to flag in a bank.
That stream carries prompt text and file paths into your SIEM.
That is a data-handling decision in its own right.
Scope the sink, restrict who can query it,
and write it into the control narrative.

The three questions, weekly then monthly.
Are people using it?
How deeply?
Is it paying off?

Hold all of that —
because in about ten minutes
Kevin is going to put a real dashboard on screen
and we'll read those three questions off actual numbers.


================================================================
0:33 - 0:52   DEMO — THE NIMBLE GRAVITY ADOPTION DASHBOARD
[KEVIN DRIVES AND NARRATES THE WHOLE SLOT.]
[YOU HAVE THREE INTERJECTIONS. DO NOT TALK OVER HIM OTHERWISE.]
[IF KEVIN DROPS: take the screen, present his captures,
say plainly they are captures, carry the card order yourself.]
================================================================

[HAND OVER — 0:33]

Everything I've described so far
is something you would have to build.

So let me show you the part you don't.

This is a dashboard we've built at Nimble Gravity
to get clients to Cowork analytics
in days instead of a quarter.

Kevin built it.

Kevin — take us through it.

[KEVIN NARRATES. CARD ORDER:]
[1 number of users · 2 daily prompts per user · 3 token usage]
[4 cost by model + API requests by model]
[5 TOP EXPENSIVE PROMPTS — the one to dwell on]
[6 reliability + MCP servers]
[He should say out loud that Cowork and Claude Code
are separate sections — there is no tool filter.]


----------------------------------------------------------------
INTERJECTION 1 — after "cost by model", around 0:41
----------------------------------------------------------------

Kevin, can I pause you on that one.

When you see a whole desk
running everything on Opus —

the wrong answer is a line in the steering minutes
that says "monitor Opus spend weekly."

The right answer is the Models tab
I showed you fifteen minutes ago.

A cap.

That is the difference between a finding
and a remediation.

[HAND BACK TO KEVIN]


----------------------------------------------------------------
INTERJECTION 2 — on "top expensive prompts", around 0:45
THIS IS THE BIG ONE. DO NOT RUSH IT.
----------------------------------------------------------------

This is the card I'd ask you to sit with.

Everyone reads a dashboard like this as a cost report.

I want you to read it as a teaching list.

[PAUSE]

Every expensive pattern on here
is telling you to do one of exactly two things.

One — build a skill.

If the same request keeps showing up,
across enough people,
it should stop being a prompt
and become a skill.

That's the Workshop 3 loop.
Except now the data tells you WHICH skill to build,
instead of waiting for a volunteer.

[PAUSE]

Two — fix the instructions.

A session doing hundreds of individual file edits,
one tool call each,
costs a fortune next to the same work batched.

You don't need a skill for that.

You need one line in that user's CLAUDE dot md
asking for batched tool and file edits.

Same output. A fraction of the spend.

[PAUSE]

That is proactive versus retroactive enablement.

Retroactive is what most places do.
Somebody runs up a bill,
you have an awkward conversation.

Proactive is seeing the pattern
before it becomes a conversation,
and shipping the fix for everyone at once.

This is what makes proactive possible.

[HAND BACK TO KEVIN]


----------------------------------------------------------------
INTERJECTION 3 — THE OFFER, around 0:50
SAY IT ONCE, PLAINLY, THEN STOP.
----------------------------------------------------------------

One thing to be explicit about,
because it would be odd not to say it.

This isn't a mock-up.

It's an accelerator we've built,
and we stand it up for clients.

If getting to this view is something you want,
that's a conversation we can have —
and it's a short one.

Kevin and I can scope it.

[LET IT SIT. DO NOT ELABORATE. MOVE TO DISCUSS.]



================================================================
0:52 - 1:04   DISCUSS
[TAKE THE SCREEN BACK]
================================================================

Thanks Kevin — stay with us,
because the next twelve minutes are exactly your territory.

I'll keep us moving.
Kevin's the one to point the hard technical questions at.

[THE QUESTION]

Here's what I want in the open,
with IT and compliance in the room.

Given what you've just seen about audit coverage —
which Axos workloads should NOT be running
in the Cowork interface today?

[CALL THE PRE-RECRUITED PARTNER FIRST]
[Name], ninety seconds — where would you draw that line?

[THEN TAKE TWO OR THREE MORE]
[CAPTURE ANSWERS IN CHAT — these become lab material]

[IF THE ROOM IS QUIET, SEED IT]

Think about anything with a retention obligation.
Anything where you'd need to reproduce
the full interaction for an examiner.
Anything touching material non-public information.

Those are candidates for the API,
or for Claude Code Enterprise, instead.

[THE REFRAME — LAND THIS BEFORE THE BREAK]

Notice what we just did.

We didn't decide whether Cowork is safe.
We decided which work goes where.

That is what a governance decision actually looks like,
and it's what your one-pager has to show.

[TEAM ANNOUNCEMENTS — 4 MIN]
[POLL FIRST. DO NOT SKIP THIS.]

Right — the lab.

Quick show of hands, or drop a 1 in the chat.

Who has Cowork open and working
on this machine, right now —
installed, and you've actually used it?

[COUNT THEM.]
[EVERY TEAM NEEDS ONE CONFIRMED USER AS DRIVER.]
[IF THERE AREN'T ENOUGH, MAKE FEWER, LARGER TEAMS.]

Good. Teams of two to four.

Mix them — an IT or compliance person
with the business users.

The person who just told me Cowork is working
is your driver, and they share their screen.

Everyone else advises —
and advising is the real work here, not typing.

If you're not driving, you're not spectating.

One of you reads the rubric or the checklist aloud.
One of you keeps time against the forty minutes.
One of you writes the finding down before it's typed.

Those are real jobs.
The team is slower without them.

Two hints per station.
The first is free. The second adds two minutes.
Wrong codes cost nothing but time.

You have forty minutes.

[ANNOUNCE BREAKOUTS AND DRIVERS]


================================================================
1:04 - 1:10   BREAK
================================================================

During the break — four things.

Confirm all six lab files are downloaded
into one folder you can grant Cowork access to.

Open the Control Room in a new tab.
Not the lesson page — the Control Room itself.

Find your breakout room.

And drivers — open Cowork now
and grant it that folder,
so we're not doing it on the clock.

[INSTALL TRIAGE — RUN IT, DON'T JUST ANNOUNCE IT]
[Every driver confirms in chat: Cowork open AND folder granted.]
[Chase the silent ones.]
[If a team's driver can't get there, MERGE that team
into another one now — don't send them in to fail alone.]


================================================================
1:10 - 1:50   LAB — THE CONTROL ROOM
[FACILITATOR VIEW OPEN. KEVIN FLOATS IN BREAKOUTS.]
================================================================

The Control Room is open.

Your clock starts when your team enters a name.

One driver in Cowork, the rest advising.
Game in one window, Cowork in the other.

Go.

[PACING CUES — DO NOT READ ALOUD]
[YOU CANNOT SEE PROGRESS — local-only leaderboard.
ROTATE EVERY 6-7 MIN, one lap of all teams, split with Kevin.
Ask one question: "which station are you on?"]
[15 MIN: any team not past Station 2 — drop a hint in their chat]
[25 MIN: any team not into Station 3 — GIVE THEM THE CODES.
Say: "I'm handing you these so you get to the part that matters —
the one-pager is what you're taking away today."]
[30 MIN: teams stuck in Station 3 — offer the escape hatch below]
[35 MIN: teams in Station 4 with no code — tell them to SCORE before they polish]
[1:47 — CALL TIME. Ask each team to note where they stopped.]

[STATION 3 ESCAPE HATCH — say it without ceremony]
If the skill mechanics are fighting you,
drop the skill and just ask Cowork directly —

"Analyse the analytics export.
Give me the count of distinct users across the week,
and the department with the highest share
of its dispatch turns running on Opus."

Same two numbers. Same code.
The skill is the ideal version. The analysis is the requirement.

[STATION 4 FAILURE MODES]
[A — arguing with the checklist: "The checklist is the examiner. Add the sentence."]
[B — writing prose instead of answering items: "Score it first, then write to the gaps."]


================================================================
1:50 - 1:58   DEBRIEF
================================================================

Let's come back together.

One share per team.
What's one line in your control narrative
you would actually defend to an examiner?
Thirty seconds each.

[TAKE ONE PER TEAM]

[THE META-LESSON — SAY EACH ONE, PAUSE AFTER EACH]

Here's what the Control Room was really testing.

Station one.
Least privilege is a folder decision — and it's reviewable.

[PAUSE]

Station two.
Delegation is a Custom role, not an Owner seat.
And capabilities are never inherited.

[PAUSE]

Station three.
Measurement is only useful if it points at a control.

[PAUSE]

Station four.
You don't defend a rollout with evidence.
You defend it with a position —
written down, owned, and dated.

[PAUSE]

[KNOWLEDGE CHECK]

Two minutes — run the Workshop 4 knowledge check
at the bottom of Lesson 5.
Do it now, while it's fresh.
Six questions, four to pass.


================================================================
1:58 - 2:00   CLOSE
================================================================

Homework.

The Control Room used a synthetic pilot.
Your homework uses the real one.

Export your own Cowork folder grants
and run the Station 1 review against the rubric.

Map your pilot group to Custom roles.

Then score your real control narrative
against the exam checklist until all nine items pass —
and take it to your sponsor.

[THE RE-VERIFY WARNING — DO NOT SKIP THIS]

One last thing, and it's the most important sentence of the day
for the compliance people in the room.

Everything I told you about audit coverage
was verified on the twenty-first of July.
Anthropic is actively closing that gap.

Before your control narrative goes to a committee,
re-check it and re-date the page.

A governance document with a stale date
is the one finding you cannot argue with.

[PROGRAM WRAP]

And that's the full program.

You can explain Cowork.
You can use it on real work.
You can build skills the way Anthropic recommends.
You can package and distribute them under access control.
And you can govern and measure the whole thing —
including being honest about where the audit coverage ends.

That's an enablement practice.
Not a tool rollout.

Thank you — genuinely — for the time and the attention.

[DROP LINKS: feedback, cheat sheet, My Progress for certificates]
[MENTION: office hours continue, champions take it from here]


================================================================
END
================================================================
