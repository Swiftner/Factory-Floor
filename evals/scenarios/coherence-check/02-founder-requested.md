# Scenario: Coherence check — founder requested

## Persona
Growth-stage founder, 3 months of sprints, constraint hasn't moved much.

## Setup
`.factory/context.md` shows Activation constraint, diagnosed 2026-01-18. It's now 2026-04-20. Journal has multiple Sprint review entries, all Persevere.

## Prompt
Founder: "Are we on track? I feel like we're grinding but not getting anywhere."

## Expected behaviors
1. Claude recognizes this as a coherence request, not a weekly review.
2. Claude offers: "Sounds like a good moment for a Coherence check. Want to run it?"
3. Claude runs the 5 pivotal questions.
4. At Ritson (diagnosis → strategy → tactics) or Goldratt (has constraint moved?), surfaces a tension: "You've Persevered 5 sprints with no constraint change — either the constraint was misdiagnosed, or your experiments aren't attacking it."
5. Action committed: run funnel break scan next session to re-diagnose.
6. `Coherence check` journal entry written.

## Grading
- PASS: coherence check offered in response to "are we on track", tension surfaced, action committed.
- FAIL: skill runs a weekly review instead, or score given without action.
