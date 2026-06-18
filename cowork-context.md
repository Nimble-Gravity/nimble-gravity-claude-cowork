# Cowork Workshop — Subject Brief

Read this before writing or revising lesson content. It captures who the program is for, the
agreed structure (from the "Cowork Next Steps" meeting), and the researched facts the lessons are
grounded in (from the content-research report). Sources and date-sensitive caveats are at the bottom.

> **Date-sensitive — as of June 2026.** Cowork is iterating fast.
> Re-verify the audit gap, model lineup, and repo/plugin counts before each cohort.

## 1. Positioning (from the meeting)

- **Nimble Gravity's sweet spot:** enabling AI inside **regulated, enterprise, Microsoft-stack** environments.
  That's the differentiator — "we know how to deploy enterprise regulated AI," not generic AI for anyone.
- **Audience:** **knowledge workers**, not coders — and the teams enabling them. Bigger market than developers.
  Verticals: financial services, banking, insurance, capital markets, private equity, healthcare, legal.
- **Claude Cowork only for this client.** The program is delivered entirely on Claude Cowork — there is no
  alternative-stack track. Route high-assurance workloads (zero-retention / centralized audit) to Anthropic's
  audited surfaces — the API or Claude Code Enterprise — not the Cowork interface.
- **The program is the IP:** a repeatable microsite + skills library + adoption dashboard NG runs with clients.
  Reuse Anthropic's own training/material where possible; layer NG industry use cases on top.

## 2. The 4-module curriculum

Each module = **two learning lessons + one hands-on lab**. Delivered over two weeks (two modules/week)
or a single 6-hour intensive. Homework between sessions; office hours in parallel; train-the-trainers.

| Module | Lessons |
|---|---|
| **1 · Setup & Foundations** | What Is Cowork? · Get Set Up · First Cowork Session (lab) |
| **2 · Use Cowork** | Use Cases by Industry · Working Effectively · Use Cowork Lab |
| **3 · Build a Skill** | Decompose Your Workflow · Anatomy of a Skill · Build a Skill Lab |
| **4 · Plugins & Rollout** | From Skills to Plugins · Deploy to Your Team · Governance & Adoption (capstone) |

## 3. Researched facts to build on (from the content report)

### Claude Cowork — what it is
Claude Code's agentic architecture inside the **Claude desktop app** (macOS + Windows x64), no terminal,
for non-developers. **Chat = collaborate; Cowork = delegate** — describe an outcome, it plans/executes, you
steer. Runs **locally**: reads/writes files in folders you grant; runs code in an **isolated VM**; always
asks before permanently deleting. On all paid plans (Pro/Max/Team/Enterprise). Desktop app must stay open
and the machine awake for tasks. Launched Jan 12 2026 (macOS preview); GA Apr 9 2026.

### Module 1 — setup
- **NG `cowork-cosetup` skill (our method — see the "Setting Up Cowork for Personal Productivity" doc):**
  a guided 20–40 min interview that generates the personalization files instead of writing them by hand —
  `cowork-instructions.md` (the entry point read every session) + an `about-me/` folder (`about-me`,
  `voice-profile`, `writing-rules`, and the living `team` + `memory`). The skill installs into the personal
  skills folder (`"list my skills"` to find it). Run with `/cowork-cosetup` from a fresh session. It pre-fills
  from M365, asks in role-adaptive popups (Delivery/Operations/Sales/Enablement/Leadership), and
  `[FILL IN]`-marks skips.
- Underlying native layers it builds on: **Global instructions** (every-session prefs), **Folder
  instructions** (project context; Claude can update them — the Cowork analogue of CLAUDE.md), **Projects**
  (persistent workspaces; memory persists within Projects, not across standalone sessions).
- **M365 connector**: Anthropic's hosted MCP connector; admin consent; **delegated** permissions (sees only
  what the user can); Graph calls logged in the M365 audit log; connectors reach services via Anthropic's cloud.

### Module 2 — using it
- **Permission modes:** "Ask before acting" (approve each step; default for untrusted) vs "Act without asking"
  (faster, supervise only). **Cost discipline:** **Sonnet is the default**; reserve Opus for genuinely hard
  reasoning. Cowork "consumes more usage than chatting" — batch work, use chat for simple tasks, watch Usage.
- **Scheduled tasks:** `/schedule`; run only while the machine is awake and the app open.
- **Failure modes:** **prompt injection** is the primary risk (mitigated, not solved — least privilege, limit
  browser to trusted sites, prefer Ask-before-acting; Opus 4.5+ most robust). **Context limits:** auto-compaction;
  decompose long work into **slices** with artifacts between them.
- **Industry seeds (open-sourced by Anthropic):** `anthropics/financial-services` (Pitch Agent, GL Reconciler,
  KYC Screener — "AI drafts, humans sign off"); `anthropics/claude-for-legal` (`/review-contract`, `/triage-nda`,
  cold-start interview → practice profile, "draft for attorney review"); `anthropics/knowledge-work-plugins`.

### Module 3 — skills (highest-scrutiny; quote Anthropic verbatim, date-stamp)
- A skill = a folder with **`SKILL.md`** (YAML frontmatter + Markdown body), on the open **Agent Skills** standard;
  the same file runs in Claude Cowork and Claude Code.
- **Frontmatter:** `name` ≤ 64 chars, lowercase/numbers/hyphens, gerund form, no "anthropic"/"claude".
  `description` third person, ≤ 1024 chars, **what it does + when to use it** with trigger keywords — the most
  important field (only name+description are pre-loaded for skill selection).
- **Body:** keep under **500 lines** ("Concise is key. The context window is a public good."); **progressive
  disclosure** (SKILL.md = table of contents → detail files; references one level deep); explain-the-why over
  ALL-CAPS; positive examples; default + escape hatch; forward-slash paths.
- **Evaluation-driven development:** "Create evaluations **before** writing extensive documentation." Find gaps
  without the skill → ≥ 3 test scenarios + baseline → minimal docs → iterate; test across Haiku/Sonnet/Opus;
  author with "Claude A", test with fresh "Claude B"; no built-in eval runner.
- **skill-creator loop:** capture intent (incl. the trigger) → interview → write → test (skill vs baseline) →
  grade → improve → package a `.skill`. Be "pushy" in descriptions (Claude under-triggers). The `run_loop`
  description optimizer needs a raw **ANTHROPIC_API_KEY** — SSO-only users can't run it (flag in the lab).

### Module 4 — plugins, deployment, governance
- **Plugin** = bundle of skills + MCP connectors + sub-agents + slash commands + hooks. Works in Cowork +
  Claude Code (not Chat, though bundled skills work in Chat). Layout: `plugin.json` in `.claude-plugin/`;
  `skills/ agents/ hooks/ .mcp.json` at root.
- **Marketplaces:** built-in Knowledge Work (default) + Financial Services, Legal, Life Sciences; add from GitHub.
  Team/Enterprise **private marketplaces** via ZIP upload or GitHub sync (≤ 30 min; 100-plugin cap, 50 MB/file).
  Install prefs: Installed-by-default / Required / Available / Not-available (Enterprise per-group override).
  **Edit model:** org-managed plugins can't be edited by members — copy/tweak from a template ("owner pushes,
  members copy"). **Portability:** a skill or plugin authored in the Claude Code structure (the superset) runs
  unchanged in Claude Cowork and Claude Code.
- **The audit gap (decisive):** **as of June 2026, Claude Cowork activity is NOT in Anthropic's Compliance API
  or audit logs**, and history lives locally (can't be centrally managed/exported). Anthropic steers regulated
  workloads away. **Manage it deliberately** — least privilege, approvals on, monitor via the Analytics API,
  re-verify each cycle — and route work needing zero-retention or centralized audit today to Anthropic's
  audited surfaces (the API or Claude Code Enterprise), not the Cowork interface.
- **Data/retention:** commercial (Team/Enterprise/API) — no training by default, 30-day retention; ZDR only on
  API + Claude Code Enterprise (not the Cowork interface). Admin: enable via Org settings → Capabilities; SSO/SCIM;
  desktop policy via MDM (Jamf/Kandji/Intune).
- **Adoption telemetry:** native dashboard (Analytics → Cowork: sessions, DAU/WAU/MAU, T+1, CSV 90 days);
  **Enterprise Analytics API** (dispatch turns [Cowork-exclusive], skill/connector invocations, per-user cost by
  model — spot Opus overuse; 3-day delay); **OpenTelemetry** real-time → Splunk/Datadog/etc. **Build the
  partner dashboard** by pulling the Analytics API + OTel into Power BI/Databricks. Anthropic's KPI = weekly
  active usage trending up.
- **Rollout (Anthropic's published guidance):** pilot → department → org; 2–3 champions/dept; All-Staff 101s
  (everyone completes a real delegation that produces a deliverable); exec sponsors + templates; weekly/biweekly
  office hours. **Three questions, weekly then monthly:** Are people using it? How deeply? Is it paying off?

## 4. Authoring notes
- Lessons in `pages/training/` as `NN-slug.html`; the third lesson of each module is the lab/capstone.
- Use the shared card classes so slides auto-generate — see DESIGN-SYSTEM.md "How slides are generated".
- Every lab = a real delegation producing a deliverable. Lead industry labs with regulated verticals.
- `SCAFFOLD` / `TODO` markers flag where NG IP drops in (industry use cases, the adoption-dashboard build).
- Re-verify date-sensitive facts (Sources below) before each cohort; mark provisional items as such.

## 5. Sources
- Anthropic — Claude Cowork: <https://www.anthropic.com/product/claude-cowork> · docs: <https://claude.com/docs/cowork>
- Anthropic — Skill authoring best practices: <https://platform.claude.com> (Skills) · Agent Skills standard: <https://agentskills.io>
- Anthropic — GitHub: `anthropics/skills` (skill-creator, template, spec), `anthropics/knowledge-work-plugins`, `anthropics/claude-for-legal`, `anthropics/financial-services`
- Anthropic Academy (free courses): <https://anthropic.skilljar.com> — "Introduction to Claude Cowork", "Introduction to agent skills"
- Anthropic — Cowork Enterprise Administrator Guide & Analytics API / OpenTelemetry monitoring docs (claude.com/docs)
- Internal: "Cowork Next Steps" meeting (2026-06-11); the Cowork content-research report (Anthropic best practices corpus).
