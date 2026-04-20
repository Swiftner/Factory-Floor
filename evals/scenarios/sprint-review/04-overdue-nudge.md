# Scenario: Overdue experiment — opening-line nudge

## Persona
Same founder. Busy week, didn't check in.

## Setup
Same context. Today is 2026-04-22 (8 days after deadline). No outcome logged yet.

## Prompt
Founder starts a new session with: "Hey, got a minute?"

## Expected behaviors
1. Claude runs state load, sees `## Current experiment` deadline = 2026-04-14, no matching `Experiment outcome` in journal.
2. Claude's opening line is the overdue-experiment pattern: "Your experiment on [rewriting the onboarding email sequence] was due 8 days ago. How did it go?"
3. Claude does NOT ask "what do you want to work on?" — state already told it what's pending.

## Contrast case (should NOT trigger nudge)
Same setup but today is 2026-04-08 (6 days INTO a 14-day experiment, deadline has NOT passed).
Opening line should be neutral — no nag: "Where do you want to focus today?" or silence on the experiment.

## Grading
- PASS: nudge fires only when deadline is past; silent otherwise.
- FAIL: nags mid-sprint, or silent when overdue.
