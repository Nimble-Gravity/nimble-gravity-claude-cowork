---
name: cowork-cosetup
description: Interviews a new Claude Cowork user and writes their personalization files — cowork-instructions.md plus an about-me/ folder — so Cowork knows their role, voice, priorities, and team from the first session. Use at first-time setup, when onboarding someone to Claude Cowork, when a user asks to "set me up", "personalize Cowork", or run "co-setup", or whenever Cowork is giving generic, role-blind answers that ignore who the user is.
---

# Cowork Co-Setup

Run a short guided interview, then write the personalization files that make Cowork
play back who the user is and tailor its help to their actual job. The interview is
the point: most users never write these files by hand, so Cowork stays generic. This
skill produces them in 20–40 minutes.

## When to run

- A fresh Cowork user with no `cowork-instructions.md` yet (the common case).
- A returning user who wants to refresh their profile after a role change.

Do **not** silently overwrite an existing profile — if `cowork-instructions.md`
already exists, summarize what's there and ask before changing it.

## What you produce

```
cowork-instructions.md      ← entry point, read at the start of every session
about-me/
  about-me.md                ← role, responsibilities, priorities, tools
  voice-profile.md           ← how the user writes and wants drafts to sound
  writing-rules.md           ← do / don't rules for any drafted output
  team.md                    ← living: who they work with and how (update over time)
  memory.md                  ← living: durable facts worth remembering across sessions
```

These live in your Claude Cowork skills/instructions location — ask Cowork to "list
my skills" to find it.

Note for the user: these are **context/instruction files, not skills**. Installing a
skill is a separate step and is what creates the skills folder.

## The interview

1. **Pre-fill, don't interrogate.** If an M365 connector is available, read name, role,
   and team first and confirm them rather than asking cold.
2. **Adapt to the role.** Ask role-shaped questions — Delivery, Operations, Sales,
   Enablement, or Leadership. See `reference/interview.md` for the question bank and
   the file templates.
3. **Keep it short.** Aim for 20–40 minutes. Mark anything the user skips with
   `[FILL IN]` so the file is honest about what's missing — never invent an answer.
4. **Read it back.** Summarize what you heard before writing, so the user can correct it.

## Writing the files

- Write `cowork-instructions.md` as a short entry point that points to the `about-me/`
  files — progressive disclosure, not one giant file.
- Keep each `about-me/` file focused on its one topic.
- Use plain, first-person statements ("I lead…", "I prefer drafts that…").
- Leave `team.md` and `memory.md` deliberately thin; they grow with use.

## After setup

Tell the user to start a **fresh session** and run two prompts to feel the difference:
1. "Recap what you know about me." — Cowork should play back role, voice, priorities.
2. "Given who I am, what can you help me with?" — the offers should now fit their job.

If the playback is generic, a file is empty or wrong — open it, fix it, and re-run.
