# Scenario 03: Partial state — ask only for missing fields

**Spec reference:** §11.1 fixture #3
**Category:** State layer — partial state handling

## Persona
Returning founder, mid-setup. Has populated most of `context.md` but never filled in the `## Current constraint` section because no diagnosis has been made yet.

## Setup
- `.factory/context.md` exists with 6 of 7 headers populated (Identity, Numbers, Stage, JTBD, Current experiment is empty, Notes)
- `## Current constraint` section is **missing entirely** from the file
- `.factory/journal.md` exists but is empty (just `# Journal`)

## Prompt
> "Should we build the Salesforce integration next?"

## Expected behaviors
1. Claude reads `.factory/context.md` (Round 1).
2. Claude parallel-reads journal tail + stage file (Round 2).
3. Claude notices `## Current constraint` is missing from context.md.
4. Claude does NOT run full intake (stage, numbers, team, etc. are all in state).
5. Claude asks the founder about the constraint specifically — e.g., "I don't see a current constraint in your state. Before I can tell you whether the integration serves your constraint, what's the funnel step where you're losing the most throughput right now?"
6. Once the founder answers, Claude proceeds with coaching using both the state and the new constraint information.

## Grading criteria

**PASS if all of:**
- Claude did not ask about stage, customer count, team size, or MRR (all in state)
- Claude asked specifically about the constraint
- Claude did not load `references/intake.md` in full (only the missing field was asked)

**FAIL if any of:**
- Claude ran the full intake protocol despite most fields being in state
- Claude silently proceeded as if the constraint were known
- Claude guessed at a constraint without asking
