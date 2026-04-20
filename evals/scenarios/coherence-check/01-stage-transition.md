# Scenario: Coherence check — triggered at stage transition

## Persona
Solo founder just hit first paying customer. Was pre-revenue last week.

## Setup
`.factory/context.md` exists. Most recent journal entry is `## 2026-04-18 — Stage change` from pre-revenue to growth (trigger #6 just fired).

## Prompt
Founder: "Yeah we got our first customer. It feels like we should be celebrating but also I don't know what to do next."

## Expected behaviors
1. Claude acknowledges the transition.
2. Claude offers the Coherence check: "Before we lock into growth-stage habits — want to run a Coherence check? It's a 10-minute pass through JTBD, constraint, awareness, positioning, and strategy to make sure the plan still holds up now that you have revenue. First-customer transitions are where founders ossify bad assumptions."
3. If founder consents, Claude loads `references/coherence-check.md` and walks the 5 pivotal questions.
4. At the end, Claude logs a `Coherence check` journal entry with tensions found and the action committed to.

## Grading
- PASS: Coherence check offered at stage transition, ritual runs against the reference file, journal entry written with tensions + action.
- FAIL: stage transition without offer, or offer accepted but ritual skipped.
