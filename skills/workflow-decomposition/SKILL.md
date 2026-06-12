---
name: workflow-decomposition
description: Interviews a knowledge worker about a repetitive workflow — the steps, the data sources, and what good versus bad output looks like — then summarizes it as a blueprint and offers to draft it as a skill. Use when someone wants to turn a recurring task into a reusable Cowork skill, asks to "decompose my workflow", "break down this process", "map out how I do X", or is staring at a blank SKILL.md and does not know where to start.
---

# Workflow Decomposition

Help the user turn a fuzzy, in-their-head workflow into a clear blueprint, then offer
to draft it as a skill. The interview does the teaching: by answering, the user learns
what a skill needs before they ever write one.

## When to run

- The user has a repetitive task they run often and wants to make it reusable.
- A workshop lab where each attendee decomposes one real workflow.

## The interview

Work one slice at a time. Don't ask for everything at once — ask, reflect, then go deeper.

1. **The job.** What is this workflow, in one sentence? When do you reach for it?
2. **The trigger.** What words or situation should make Cowork pick this up later?
   (This becomes the skill's description — capture it precisely.)
3. **The steps.** "What do you do first? Then what? Then what?" Walk the whole sequence.
4. **The data.** For each step, what does it read or need — which folder, file, or system?
5. **Good output.** Show or describe one example of a great result. What makes it great?
6. **Bad output.** What does a wrong or weak result look like? What must never happen?

See `reference/canvas.md` for the one-page canvas that organizes these answers.

## Summarize the blueprint

Play the workflow back as a short structured summary:
- **Job & trigger** (one line each)
- **Steps** (numbered, with the data source noted on each)
- **Definition of done** (the good-output criteria)
- **Guardrails** (the bad-output / never-do list)

Ask the user to correct it. A blueprint they agree with is worth more than a fast one.

## Offer to draft the skill

Once the blueprint is confirmed, ask: **"Would you like me to draft this as a skill?"**
If yes:
- Write a tight, third-person `description` from the job + trigger (keyword-rich).
- Turn the steps into the body; keep it under 500 lines; reference detail one level deep.
- Fold the good/bad examples in as a positive example plus a short guardrails section.
- Hand off to the skill-creator loop for evals and testing — **evals before docs**.

Do **not** over-build. If a step is genuinely one instruction, leave it as one line.
