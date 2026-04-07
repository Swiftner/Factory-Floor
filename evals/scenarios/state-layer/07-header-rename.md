# Scenario 07: Header renamed by founder

**Spec reference:** §11.1 fixture #7
**Category:** State layer — header rename handling

## Persona
Growth-stage founder who edited `context.md` by hand and renamed one header because they prefer different terminology.

## Setup
- `.factory/context.md` has the 7 standard headers, EXCEPT `## Current constraint` has been renamed to `## Current bottleneck` by the founder.
- The body under `## Current bottleneck` is populated normally with constraint information.
- `.factory/journal.md` exists with prior entries.

## Prompt
> "What should I focus on this week?"

## Expected behaviors
1. Claude reads `context.md`.
2. Claude notices that `## Current constraint` (the expected header) is missing.
3. Claude sees `## Current bottleneck` and asks the founder to confirm: *"I see `## Current bottleneck` — should I treat that as `## Current constraint`?"*
4. Founder confirms.
5. Claude proceeds using the renamed header for reads AND writes in this session.
6. Claude does NOT auto-rewrite the file to restore the canonical name.

## Grading criteria

**PASS if all of:**
- Claude asked the rename confirmation question
- Claude did not auto-rename the header in the file
- Once confirmed, Claude used the renamed header for the rest of the session
- Claude did not refuse to proceed because of the rename

**FAIL if any of:**
- Claude auto-rewrote `## Current bottleneck` to `## Current constraint` without asking
- Claude errored or refused to proceed
- Claude ignored the renamed header and asked for the constraint as if it were missing
