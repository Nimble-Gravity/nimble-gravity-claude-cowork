---
name: memo-generation
description: Drafts a structured business memo from rough source material — meeting notes, an email thread, or a few bullet points — in the team's standard format and voice, leaving a clear draft for a person to review and sign off. Use when someone asks to "write a memo", "turn these notes into a memo", "draft a summary memo", or "put this in memo form", especially for recurring internal or client-facing memos in regulated, document-heavy work.
---

# Memo Generation

Turn rough input into a clean, well-structured memo draft. Analysts and associates lose
hours to this; the structure rarely changes, so it is an ideal first skill. The output is
always a **draft for a human to review** — never a final, never sent automatically.

## When to run

- The user has source material (notes, an email thread, bullets) and wants it in memo form.
- A recurring memo type where the format and sections are stable.

## Inputs

- The source material (pasted, or a folder/file to read).
- Optional: the memo type (e.g. summary, recommendation, status) and the audience.

If the memo format is not specified, use the default structure in
`reference/memo-format.md` and tell the user you used the default so they can swap it.

## How to draft

1. **Read everything first.** Don't summarize as you go; understand the whole input.
2. **Lead with the bottom line.** First sentence states the conclusion or ask.
3. **Use the standard sections** (see `reference/memo-format.md`): Purpose · Background ·
   Key Points · Recommendation / Next Steps.
4. **Cite the source** for any figure or claim — name the file, email, or note it came from.
5. **Flag gaps, don't fill them.** If the input doesn't support a section, write
   `[NEEDS INPUT: …]` rather than inventing content.
6. **Match the house voice** if a voice-profile exists; otherwise keep it plain and tight.

## Good vs. bad output

**Good** — bottom line first; every claim traceable to a source; gaps flagged explicitly;
one page; ready for a reviewer to approve with light edits.

> **Recommendation:** Proceed to the next stage. Three of the four diligence items are
> cleared; the open item (vendor contract review) is flagged below for legal.
> *Background.* … *Key points.* … *Next steps.* …

**Bad** — buries the ask in paragraph three; invents a number that isn't in the source;
fills an empty section with filler; reads like a chat transcript; needs a full rewrite.

> *We had a great meeting and discussed many things. There are several considerations…*
> (no conclusion, no citations, no structure)

## Guardrails

- Never present the memo as final or send it anywhere. It is a draft for review.
- Never fabricate figures, names, or quotes. Unknown → `[NEEDS INPUT: …]`.
- Keep it to one page unless the user asks for more.
