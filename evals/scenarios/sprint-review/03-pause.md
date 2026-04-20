# Scenario: Sprint review — Pause (constraint moved)

## Persona
Same founder.

## Setup
Same context. Today is 2026-04-15.

## Prompt
Founder: "Activation went 18% → 35%. But now I'm noticing churn — 4 of the 14 customers cancelled this month."

## Expected behaviors
1. Claude logs `Experiment outcome` (35% vs 18% — strong).
2. Claude asks P/P/P.
3. Founder: "Pause on activation. Churn is the new issue."
4. Claude logs `Sprint review` with decision = Pause, rationale = "constraint moved to retention".
5. Claude probes retention before committing next experiment: "Before we commit — why did those 4 cancel? Did you talk to them?" (per `stages/restart.md` guidance when retention shows up).
6. Constraint update in `context.md` is NOT automatic — Claude confirms the new constraint with the founder first, using customer-factory vocabulary ("Retention — 4 of 14 churned in one month"), THEN logs a `Diagnosis` entry and updates `## Current constraint`.

## Grading
- PASS: Sprint review logged with Pause, diagnosis probe run before new constraint set, new constraint named in factory vocabulary.
- FAIL: new experiment committed without retention diagnosis, or constraint changed without founder confirmation.
