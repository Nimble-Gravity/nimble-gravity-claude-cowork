# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

A **Nimble Gravity** Cowork-enablement microsite — a four-module program that gets **knowledge workers** (not coders) productive with **Cowork**, the agentic engine that brings Claude Code's capabilities into the Claude desktop app. It leads with **Claude Cowork** (Anthropic) and routes regulated, Microsoft-stack work to **Copilot Cowork** (Microsoft, same engine, in-tenant). The arc: get set up → use it by industry → build your first skill → deploy plugins and govern adoption. No build step, no framework, no package manager.

The framework (nav, footer, design system, slide engine, page template) was forked from an earlier workshop template. The original Acme/loan SDLC lessons and phase pages are preserved under `pages/_reference-acme/` as worked examples — not linked from the live site. The Cowork content is grounded in a content-research report and the "Cowork Next Steps" meeting; key facts (and date-sensitive caveats like the June-2026 audit gap) live in `cowork-context.md`.

To run locally:
```bash
./serve
# Visit http://localhost:8000
```

For a plain static server without live reload:
```bash
python -m http.server
```

## Architecture

```
index.html              — Homepage / workshop landing page (hero + TOC + module overview)
nav.js                  — Self-contained top-nav component (IIFE; injects its own CSS)
footer.js               — Self-contained footer component (Nimble Gravity wordmark + brand link)
training-sidebar.js     — Left module/lesson sidebar for training pages
styles/shared.css       — Shared design system: tokens plus cross-page layout/components
DESIGN-SYSTEM.md        — Layout/spacing rules + "How slides are generated" (card classes)
cowork-context.md       — Subject brief: the two products, researched facts, sources, scenario
pages/training/*.html   — The 12 Cowork lessons + 4 slide decks + slide engine + theme
pages/_reference-acme/  — Original Acme lessons + the old SDLC phase folders, preserved (not linked)
```

**Every page** follows this structure: `<link>` to shared.css → `<style>` block for page-specific CSS → `<script src="footer.js">` then `<script src="nav.js">` (and `training-sidebar.js` on training pages) at the start of `<body>` → one primary intro pattern (`hero` or `page-header`) → section divs → page-footer div → optional inline `<script>`.

**The module manifest is duplicated in several places — keep them in sync** when adding/renaming/reordering lessons: the `CRAFTS` array in `nav.js` (the `filePrefix[]` plus the positionally-zipped `pages[]`/`labels[]`), the `MODULES` array in `training-sidebar.js`, the `window.SLIDES_CFG` in each `pages/training/module-N-slides.html`, the footer stage chips in `footer.js`, and the homepage lesson lists — the `.toc-list` **and** the per-lesson `.module-grid` cards in root `index.html`, plus the `.module-lessons` cards in `pages/training/index.html`. New lessons **append** a new numeric prefix (13+) inserted at the correct array index (display order = array order, not filename order); always add the new prefix to the owning module's `filePrefix[]` or the page renders with an empty sub-nav. See `CLIENT-CUSTOMIZATION.md` for the full per-lesson checklist.

**nav.js** detects whether the page is in `/pages/` and adjusts root-relative links accordingly (assuming pages are exactly two directory levels deep). The nav/module structure is driven entirely by the hardcoded `CRAFTS` manifest — there is no external page-list fetch.

**Slides build themselves from lesson HTML.** A deck file (`module-N-slides.html`) is just a small `window.SLIDES_CFG` config; `slides-engine.js` fetches each listed lesson and extracts slides from known card classes. See DESIGN-SYSTEM.md "How slides are generated" before authoring lessons.

**shared.css** provides the shared visual system: Google Fonts imports, CSS custom properties, base resets, and a growing set of cross-page components/layout patterns used by multiple pages. Before creating a new reusable page pattern, check `DESIGN-SYSTEM.md`.

Do not add a second standalone header bar beneath the global nav when a page already has a hero or page-header. Orientation details belong inside the primary intro pattern, not in an extra top strip. Do not add top-of-page reading progress strips as a default page pattern.
When adding badges, chips, tags, or small craft labels, reuse the shared badge language in `styles/shared.css`. New variants should normally be modifier classes that only change color, not one-off HTML inline styles or page-specific typography/padding.

## CSS Conventions

- All colors reference CSS variables from shared.css — never hardcode hex values that duplicate an existing variable.
- Responsive breakpoints: `900px` (two-column collapse) and `768px` (single-column / mobile padding).
- Reusable layout or card patterns that appear across pages should be implemented in `shared.css` and documented in `DESIGN-SYSTEM.md`.
- Shared editorial card grids should stretch cards to the tallest sibling in the row. Use grid-level `align-items: stretch`, explicit `height: 100%` on grid children when needed, and an internal stack pattern so equal-height cards still read cleanly.
- Page-specific class names are scoped by page unless the pattern is intentionally shared.
- Dark sections use `var(--navy)` background; text colors flip to `var(--white)` / `var(--slatel)` / `var(--mint-on-dark)`.

## Domain Context

The audience is **knowledge workers in regulated enterprise** (financial services, insurance, capital markets, PE, healthcare, legal) — Nimble Gravity's sweet spot. The subject is **Cowork**: lead with **Claude Cowork** (Anthropic — desktop app, local folders, isolated VM), and route compliance-bound work to **Copilot Cowork** (Microsoft — same engine, in-tenant, Purview-audited). Read `cowork-context.md` (audience, researched facts, sources, caveats) before writing content. Tone is practitioner-to-practitioner — not marketing copy.

The 4-module arc (each module = two learning lessons + a lab; run over two weeks or one intensive):

1. **Setup & Foundations** — delegate vs. chat; the engine (Claude Code's, in Claude Desktop, local + VM); personalization via Global/Folder/Project instructions and the M365 connector; the Claude-vs-Copilot routing; a first delegated session.
2. **Use Cowork** — industry use cases (seeded from Anthropic's open-sourced finance/legal packs); working effectively (Sonnet-default cost discipline, permission modes, prompt injection, `/schedule`); a hands-on lab.
3. **Build a Skill** — decompose a workflow into a blueprint; `SKILL.md` the Anthropic way (keyword-rich description, body < 500 lines, progressive disclosure, **evals before docs**); a lab running the skill-creator loop to ship a `.skill`.
4. **Plugins & Rollout** — skills → plugins (bundles, marketplaces, portability via the Claude Code superset + M365 conversion); private-marketplace deployment + the owner-pushes/members-copy model; a capstone on governance (the audit gap → route regulated to Copilot Cowork) and adoption (Analytics API + OpenTelemetry dashboard, phased rollout).

Guidelines for content:

- Lead with Claude Cowork; present Copilot Cowork as the **in-tenant alternative for regulated clients** — the deciding fact is the audit gap (as of June 2026, Claude Cowork activity is not in Anthropic's Compliance API/audit logs and history is local).
- Make every lab a **real delegation that produces a deliverable** — "without enablement, users treat Cowork like Chat."
- Module 3 is the highest-scrutiny section: quote Anthropic's skill-authoring best-practices verbatim and date-stamp it.
- Lessons are research-grounded but carry `SCAFFOLD` / `TODO` markers where Nimble Gravity IP (industry examples, the adoption-dashboard build) drops in. **Date-sensitive** — re-verify the audit gap, Copilot Cowork preview status, model lineup, and repo/plugin counts against the **Sources** in `cowork-context.md` before each cohort.
