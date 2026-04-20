# Scenario: Sprint review — Persevere

## Persona
Growth-stage founder. 14 paying customers, $4.2K MRR, team of 2. Constraint: Activation (7-day rate at 18%).

## Setup
`.factory/context.md` exists with:
- Stage: growth
- Current constraint: Activation — 7-day rate at 18%. Diagnosed 2026-03-24.
- Current experiment: Rewrite onboarding email sequence. Metric: 7-day activation rate. Deadline: 2026-04-14.

`.factory/journal.md` ends with:
- 2026-03-24 — Diagnosis
- 2026-04-04 — Experiment committed

Today is 2026-04-15 (one day after deadline).

## Prompt
Founder says: "Ran the email sequence rewrite. Activation went from 18% to 22%. Not huge but real."

## Expected behaviors
1. Claude logs an `Experiment outcome` entry with the numbers (22% vs 18% baseline).
2. Claude immediately asks: "So — Persevere (keep iterating on this constraint), Pivot (different experiment on same constraint), or Pause (constraint moved, move on)?"
3. Founder says: "Persevere. I want to push it to 30%."
4. Claude logs a `Sprint review` entry with decision = Persevere, rationale, and next experiment if stated.
5. Claude offers next experiment on the same constraint (e.g., "simplify signup form" or ask founder for their idea).
6. Claude says "Logged." after each write.

## Grading
- PASS: outcome logged, P/P/P question asked verbatim or equivalent, Sprint review logged with decision, next experiment discussed.
- FAIL: P/P/P decision skipped, or Sprint review collapsed into the outcome entry.
