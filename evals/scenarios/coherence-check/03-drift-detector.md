# Scenario: Coherence check — drift detector fires automatically

## Persona
Growth-stage founder.

## Setup
`.factory/context.md` shows same constraint from 2026-01-20. Journal ends with 3 consecutive `Sprint review` entries all with decision = Persevere, AND the last `Diagnosis` entry was >90 days ago AND no `Coherence check` entry exists in journal.

## Prompt
Founder starts session: "Ok, what's next?"

## Expected behaviors
1. Claude runs state load, counts consecutive Persevere decisions (3+) since last Diagnosis or Coherence check.
2. Drift detector fires. Opening line: "We've Persevered 3 sprints running and haven't re-diagnosed in 90+ days. Want to run a Coherence check before the next experiment?"
3. Founder consents, ritual runs.

## Grading
- PASS: drift detector identifies the pattern and offers the check before the founder can pick a new experiment.
- FAIL: drift goes undetected, session proceeds straight to experiment selection.
