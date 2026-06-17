# Axos Bank — client variant

This branch (`client-axos`) is the Axos Bank instantiation of the Cowork enablement
microsite. It branches from the generic template/product base; only the marked
client-swappable regions are changed here. See `CLIENT-CUSTOMIZATION.md` for the
mechanism and the full slot list.

## Scope: Claude Cowork only

This branch is **Claude Cowork only** — all Copilot Cowork context has been stripped per
the engagement decision, and everything is rooted in Claude Cowork process and Anthropic
best practices. Specifically:

- Removed the "two products / one engine" framing; the workshop teaches Claude Cowork
  exclusively (lesson 01 now covers what it's built on — the Claude Code engine).
- Setup is a single Claude Cowork track (no Track A / Track B). The co-setup skill writes
  **`cowork-instructions.md`** (renamed from `copilot-instructions.md`) — **verify the exact
  filename the product expects** during setup, since this is our naming choice.
- Governance is Claude-only: the June-2026 audit-coverage gap is now **managed** (least
  privilege, approvals on, the admin dashboard + Analytics API, and re-verify each cycle)
  rather than routed to Copilot Cowork. Workloads needing zero-retention or centralized
  audit use Anthropic's audited surfaces (the API or Claude Code Enterprise).
- Skill/plugin portability is **Claude Cowork ↔ Claude Code** (no M365 / MOS3 conversion).

The M365 *connector* is kept — that's Claude Cowork connecting to Microsoft 365 data, a
Claude Cowork capability, not the Copilot Cowork product. Re-verify the audit-coverage gap
each cohort; it's date-sensitive and Anthropic is closing it.

## What's customized (generic banking content)

| Where | Slot / region | Axos content |
|---|---|---|
| `pages/training/03-first-cowork-session.html` | `starter-tasks-m1` | Loan-file / deposit / compliance-doc starters |
| `pages/training/04-use-cases-by-industry.html` | `industry-usecases-m2` | Credit memo, deposit/treasury summary, fraud/AML triage, portfolio loan comparison |
| `pages/training/07-use-cowork-lab.html` | `canonical-scenario-m2` | Commercial loan file → one-page credit summary with flagged risks |
| `pages/training/15-governance-and-adoption.html` | `adoption-dashboard-m4` | Axos Power BI adoption dashboard reference |
| `index.html` | hero eyebrow, `<title>`, "Who it's for" | Axos framing (commercial/consumer banking, lending, treasury, risk/compliance/ops) |
| `pages/training/index.html` | hero eyebrow | Axos framing |

All use cases are framed as **drafts a banker signs off on** — Cowork drafts, it doesn't decide.

## What's still pending (needs Axos input)

- **Branding:** real Axos logo, brand colors, and the memo-skill letterhead/format
  (`skills/memo-generation/reference/memo-format.md`). Not yet applied — currently the
  generic Nimble Gravity look.
- **Real use cases:** run the discovery checklist
  (`pages/customization/discovery-checklist.html`) with Axos to replace the seed
  use cases with their actual workflows and verticals.
- **Stack & products:** confirm Microsoft 365 vs. other stack, and which Claude products
  are licensed (Claude Code, Claude Cowork, Copilot Cowork, API/Foundry). Record the
  GIF walkthroughs for the confirmed stack in `assets/gifs/`.
- **Regulated-banking routing:** Axos is a regulated bank — confirm whether day-one work
  runs on Claude Cowork (local) or routes to Copilot Cowork (in-tenant, Purview-audited)
  given the June-2026 audit gap. Module 4 / lesson 15 (Governance for IT) is the surface
  for this decision.

## Access / hosting (important)

Per `ACCESS.md`, **do not deploy this branch to the public GitHub Pages site.** Axos-
branded content should run on a gated host (private repo + Enterprise Pages, an
auth-fronted host, or inside Axos's own tenant). The public template repo stays generic.

## Delivery: four 2-hour workshops + portal

The four modules are delivered as **four separate 2-hour, facilitator-led workshops**
(one per module), and the site is a **portal** for Axos employees. Added (all additive —
the 15 lessons and the 5-place lesson manifest are unchanged):

- `pages/workshops/module-1..4-workshop.html` — per-module **workshop hubs** with a timed
  120-min agenda, objectives, materials, and pre-work/homework links.
- `pages/workshops/pre-work.html` — pre-work + homework, one section per workshop.
- `pages/workshops/resources.html` — the resource/downloads library.
- `pages/workshops/facilitator-guide.html` — demo scripts, discussion prompts, timing, troubleshooting.
- Homepage + training index reframed around the four 2-hour workshops; a global **Resources**
  nav link and footer portal links make the portal reachable from any page.
- New `.agenda` CSS pattern (`styles/shared.css` / `DESIGN-SYSTEM.md`).
- M1 deepened with one section each in lessons 01 (good first tasks at Axos) and 02 (verify your setup).

## Progress, certificate, and syllabus (client-only)

- `pages/workshops/my-progress.html` — a localStorage **profile + progress dashboard + a
  printable certificate** that unlocks once all four module quizzes pass. It is a
  **personal record, not an official Axos training record** (no accounts, no server, not
  verifiable, per-device, lost if the cache clears). The authoritative
  login / attendance / certificate is a **separate track that should run through Axos IT** —
  their LMS (SCORM/xAPI) or Entra SSO — which would also unlock the facilitator engagement
  readout deferred earlier.
- `pages/workshops/syllabus.html` — a printable **master program syllabus**: all four
  2-hour agendas at a glance plus a schedule (`data-client-slot="schedule-dates"` — fill in
  the cohort's dates).
- The per-hub agendas were expanded with finer sub-steps and inline facilitator cues
  (`.agenda-body ul` / `.agenda-cue`).

## Change-management layer (OCM readiness — P1)

An OCM review found the curriculum strong but the change wrapper thin. First production-
readiness pieces added to the portal:

- `pages/workshops/why-cowork.html` — "Start Here": a sponsor-message slot
  (`data-client-slot="sponsor-message"` — drop in a signed exec note), the case for change,
  WIIFM by role, and an explicit "augmentation, not replacement" answer on jobs.
- `pages/workshops/acceptable-use.html` — "Rules of the Road": data do/don'ts, the audit-gap
  caveat, five ground rules, and a personal acknowledgment gate (localStorage, clearly **not a
  legal record**). Carries a prominent **"DRAFT — pending Legal / Compliance / InfoSec sign-off"**
  banner; slots: `policy-status`, `data-classification`, `ground-rules`, `who-to-ask`.
- Wired as the front door: homepage hero CTA + "Before you begin" section + TOC, the footer
  (every page), and a prerequisite note on the Workshop 1 hub.

### Added: change plan, manager kit, FAQ, feedback

- `client-notes/axos-change-plan.md` — compressed OCM plan (sponsor roadmap, ~6-week comms
  calendar, lean measurement) sized to the 2–4 week engagement.
- `pages/workshops/for-managers.html` — manager enablement kit (role, five actions, a script,
  the "is this my job?" answer, champions).
- `pages/workshops/faq.html` — participant FAQ / resistance management (jobs, measurement,
  data/security, practical, after) using native `<details>` accordions.
- `pages/workshops/feedback.html` — post-session + 30-day pulses with Microsoft Form slots
  (`feedback-form-post`, `feedback-form-30day`); a feedback link sits on each hub's close.

**Still needs Axos:** named executive **sponsor** + a signed sponsor note (slot on Why Cowork);
**Legal/Compliance/InfoSec sign-off** on the Rules of the Road; the **two Microsoft Forms**
built in-tenant; **locked dates**; a **pilot cohort**; **facilitator certification**; and the
**authoritative LMS/SSO certification** (the current certificate is a personal localStorage
record, not the system of record).
