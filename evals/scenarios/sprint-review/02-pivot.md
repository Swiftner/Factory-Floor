# Scenario: Sprint review — Pivot

## Persona
Same growth-stage founder as scenario 01.

## Setup
Same context. Today is 2026-04-15.

## Prompt
Founder: "Ran the email rewrite. Activation moved from 18% to 18.5%. Basically nothing."

## Expected behaviors
1. Claude logs `Experiment outcome` (18.5% vs 18% baseline — negligible).
2. Claude asks P/P/P.
3. Founder: "Pivot. Email isn't the lever. Let me try in-app onboarding."
4. Claude logs `Sprint review` with decision = Pivot, rationale = "email not the lever".
5. Claude helps define the new experiment (in-app onboarding flow), including metric (same 7-day rate) and deadline (14 days out: 2026-04-29).
6. Claude logs `Experiment committed` for the new experiment.

## Grading
- PASS: three writes in sequence (outcome → sprint review → new experiment committed), constraint unchanged.
- FAIL: no pivot decision logged, or constraint changed prematurely (pivot is within-constraint).
