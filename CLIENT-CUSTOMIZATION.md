# Client Customization

How to tailor this microsite for a specific client engagement **without forking the framework**. The generic site is the template; a client engagement swaps content in a small set of clearly-marked seams and leaves everything else (nav, design system, slide engine, skills mechanism) untouched.

> Scope note: this documents the **mechanism only**. No client-specific content (e.g. Antares) ships in `main`. Per the engagement plan, client packs are built on a client branch after the discovery call confirms scope.

## Branch convention (documented, not yet created)

```
main                     ← shared template (this repo)
└─ cowork                ← product track (current content)
   └─ client-<name>      ← one branch per engagement; edits ONLY inside marked slots
```

A client branch should touch only the swappable regions below. If a change has to happen outside a slot, it probably belongs back in the template — raise it rather than diverging the fork.

## Swappable regions: `data-client-slot`

Every client-replaceable region is wrapped in an element carrying a `data-client-slot="<key>"` attribute. The attribute is inert: it changes no rendering and is ignored by the slide engine (`slides-engine.js` reads classes/elements, never attributes), so marking a slot can never break a page or a deck.

Rules:
- Put the attribute on an **inner wrapper** (a `<span>` or `<div>` inside the section), never on a `.section` that must still generate a slide.
- Keep the generic placeholder content meaningful — the template must read well with no client applied.
- To find every slot in the repo: `grep -rn 'data-client-slot' .`

### Current slots

| Key | File | What to replace |
|---|---|---|
| `industry-usecases-m2` | `pages/training/04-use-cases-by-industry.html` | The 2–3 seed industry use cases, re-cast to the client's verticals. |
| `canonical-scenario-m2` | `pages/training/07-use-cowork-lab.html` | The canonical lab scenario, set to the client's real workflow. |
| `adoption-dashboard-m4` | `pages/training/15-governance-and-adoption.html` | Link to the client's (or NG's) adoption-dashboard reference build. |
| `gif-*` | folder-access walkthrough & how-to sections | GIF walkthroughs recorded for the client's stack (see `assets/gifs/`). |

Add new slots as the engagement needs them; record each one in this table.

## Other swappable assets

- **Skills** (`skills/`): the generic `cowork-cosetup`, `workflow-decomposition`, and `memo-generation` skills can be re-skinned (e.g. memo-generation on client letterhead/format). Keep the generic versions in the template; client variants live on the client branch.
- **Discovery checklist** (`pages/customization/discovery-checklist.html`): run before the engagement; its answers drive which slots get filled.
- **Footer kicker / hero copy** (`footer.js`, `index.html`): light brand framing only; usually left generic.

## Stack-specific setup tracks

`pages/training/02-getting-set-up.html` already encodes the **Track A (Claude Cowork) / Track B (Copilot Cowork)** split using the `dev-grid-2` + `.dev-card` pattern. That two-column pattern is the reusable home for stack variation — to add another stack (e.g. a Google-shop track), add a `.dev-card`; nothing structural changes. Building out additional stack tracks beyond A/B is P2.

## Adding or renaming a lesson? Update all 5 manifests

This is the one cross-cutting gotcha. The lesson list is duplicated in **five** places and they drift silently:
1. `nav.js` → `CRAFTS[n]` (`filePrefix[]` + positionally-zipped `pages[]` / `labels[]`)
2. `training-sidebar.js` → `MODULES[n].lessons[]`
3. `pages/training/module-N-slides.html` → `window.SLIDES_CFG.lessons[]`
4. `footer.js` → stage chips (only if a module *name* changes)
5. `index.html` → the `.toc-list` **and** the `.module-grid` (the list is hardcoded twice here)

New lessons **append** a new numeric prefix (13+) and are inserted at the right index in each array — display order is array order, not filename order. Always add the new prefix to the owning module's `filePrefix[]` in `nav.js`, or the page renders with an empty sub-nav.
