# Factory Floor Evals

Structured evaluation framework to test for overfitting.

## Structure

```
evals/
├── personas/       # Founder archetypes with backstory + biases
├── scenarios/      # Situations they bring to the coach
├── judges/         # Evaluation criteria + scoring rubrics
└── runs/           # Timestamped eval results
```

## How to run

1. Pick a persona + scenario combination
2. Sub-agent role-plays AS the persona talking to factory-floor
3. Factory-floor responds (via another sub-agent loading SKILL.md)
4. Judge scores the response against criteria

## Scoring

- **0** — Generic, wrong routing, or missed the real problem
- **1** — Relevant but surface-level, didn't probe deeper
- **2** — Sharp: found the constraint, asked the question behind the question, assigned experiment

## Anti-overfitting rules

- Personas have hidden biases the skill should catch
- Scenarios have red herrings the skill should ignore
- New scenarios added regularly, old ones rotated out
- Judge doesn't know which version of skill is being tested
