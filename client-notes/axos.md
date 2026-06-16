# Axos Bank — client variant

This branch (`client-axos`) is the Axos Bank instantiation of the Cowork enablement
microsite. It branches from the generic template/product base; only the marked
client-swappable regions are changed here. See `CLIENT-CUSTOMIZATION.md` for the
mechanism and the full slot list.

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
