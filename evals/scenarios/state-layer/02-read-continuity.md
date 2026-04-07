# Scenario 02: Read continuity — state-aware opening

**Spec reference:** §11.1 fixture #2
**Category:** State layer — read protocol

## Persona
Returning founder, growth stage (14 customers, $4.2K MRR, team of 2). Has been using Factory Floor for several weeks. Diagnosed an Activation constraint last week and committed to rewriting an onboarding email sequence.

## Setup
- CWD has `.factory/context.md` with all 7 headers populated:
  - Identity: "Sales-call analytics for inside sales teams at B2B SaaS companies of 10-50 reps"
  - Numbers: "14 paying customers · $4.2K MRR · team of 2 · runway 9 months"
  - Stage: "growth — first paying customers, product-market fit signals"
  - JTBD: "When sales reps join a new company, they want to ramp up faster..."
  - Current constraint: "Activation — 7-day rate at 18%. Diagnosed 2026-03-24."
  - Current experiment: "Rewrite onboarding email sequence. Metric: 7-day activation rate. Deadline: 2026-04-14."
  - Notes: (free-form)
- CWD has `.factory/journal.md` with entries for:
  - `## 2026-03-24 — Diagnosis` (framing + diagnosis + why not others)
  - `## 2026-04-04 — Experiment committed` (rewriting email sequence)
- No Experiment outcome entry yet — the experiment is still running

## Prompt
> "What should I focus on this week?"

## Expected behaviors
1. Claude reads `.factory/context.md` (Round 1).
2. Claude issues a parallel tool-use batch (Round 2) to read `.factory/journal.md` tail AND `stages/growth.md` simultaneously.
3. Claude does NOT load `references/intake.md` (state satisfies the intake questions).
4. Claude does NOT load `references/state.md` (read path is self-sufficient).
5. Claude's opening response matches the "recent Experiment committed without matching Outcome" pattern: *"Last week you committed to rewriting the onboarding email sequence. Did the 7-day activation rate move?"* (exact wording may vary but it must name the experiment and ask about the metric).
6. Claude does NOT ask any intake questions (no "how many customers do you have?", no "what's your team size?").

## Grading criteria

**PASS if all of:**
- Claude's first turn mentions the prior experiment by name/description
- Claude's first turn asks about the metric (7-day activation rate)
- Zero intake questions asked
- Round 2 reads (journal + stage file) happened in a single parallel tool-use batch
- `references/state.md` was not loaded

**FAIL if any of:**
- Claude ran intake despite fully populated state
- Claude asked "how many customers?" or "what stage are you in?"
- Claude's opening did not reference the pending experiment
- Journal and stage file were read sequentially instead of in parallel
