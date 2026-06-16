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
| `pages/training/06-use-cowork-lab.html` | `canonical-scenario-m2` | Commercial loan file → one-page credit summary with flagged risks |
| `pages/training/12-governance-and-adoption.html` | `adoption-dashboard-m4` | Axos Power BI adoption dashboard reference |
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
