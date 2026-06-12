# GIF walkthroughs

Short screen-capture GIFs embedded in the lessons to *show* a flow instead of describing it. They double as a live-demo fallback when conference wifi or a client tenant blocks something mid-session.

## Pipeline

1. Record a short screen capture of the flow (QuickTime / Kap / ScreenFlow).
2. Trim to the essential clicks; convert to an optimized GIF (e.g. `gifski`, `ffmpeg`, or Kap's GIF export). Keep each well under a few MB.
3. Drop it here with the filename the lesson references, replacing the `PLACEHOLDER-*` name.

## Embed pattern (already placed in lessons as placeholders)

```html
<img src="../../assets/gifs/PLACEHOLDER-folder-access.gif"
     alt="Granting Cowork folder access"
     loading="lazy"
     data-client-slot="gif-folder-access">
<!-- TODO: record GIF -->
```

`<img>` is not a recognized slide card, so GIFs never leak onto the generated slide decks. The `data-client-slot` marks the asset as swappable per client stack (Microsoft vs. Google vs. local-files-only).

## Needed (P1)

- `PLACEHOLDER-cosetup-paste.gif` — pasting the co-setup skill into Cowork
- `PLACEHOLDER-connector-consent.gif` — the M365 connector consent flow
- `PLACEHOLDER-folder-access.gif` — granting folder access for a task
- `PLACEHOLDER-skill-install.gif` — installing your first skill
- `PLACEHOLDER-plugin-install.gif` — installing a plugin from a marketplace

Record one per stack where the flow differs.
