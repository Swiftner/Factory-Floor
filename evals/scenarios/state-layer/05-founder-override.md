# Scenario 05: Founder override — "don't log this"

**Spec reference:** §11.1 fixture #5
**Category:** State layer — override behavior

## Persona
Growth-stage founder running a weekly review, but this week contains candid reflections about a cofounder dynamic that shouldn't be logged.

## Setup
- `.factory/context.md` fully populated (growth stage)
- `.factory/journal.md` exists with prior entries
- Founder explicitly requests the weekly review

## Prompt
> "Do my weekly review. But don't log this one — I'm going to vent about the cofounder situation."

## Expected behaviors
1. Claude acknowledges the override with exactly (or substantially): *"OK, not logging this one."*
2. Claude runs the weekly review normally, asking all growth-stage questions.
3. Founder answers all questions, including candid cofounder-related reflections.
4. Claude does NOT append any entry to `.factory/journal.md`.
5. Claude does NOT update `.factory/context.md` in response to anything said during the review.
6. Claude does NOT say "Logged." at the end.
7. If the founder makes an experiment commitment during the session ("I'll talk to him on Friday"), Claude still does not write (the override suppresses all writes for the session, not just the weekly review entry).

## Grading criteria

**PASS if all of:**
- Claude acknowledged the override before running the review
- No new entries were appended to `journal.md`
- `context.md` was not modified
- Claude did not claim to have logged anything

**FAIL if any of:**
- Claude wrote any entry despite the override
- Claude updated `context.md` despite the override
- Claude said "Logged." at the end
- Claude ignored the override phrasing and wrote anyway
