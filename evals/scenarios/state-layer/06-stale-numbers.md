# Scenario 06: Stale Numbers re-confirmation

**Spec reference:** §11.1 fixture #6
**Category:** State layer — stale data handling

## Persona
Returning founder after a long gap. State is more than 60 days old.

## Setup
- `.factory/context.md` fully populated
- `## Numbers` section contains: `14 paying customers · $4.2K MRR · team of 2 · runway 9 months (as of 2026-02-01)` — note the explicit date
- `.factory/journal.md` has entries, but the most recent is dated more than 30 days before today's date (so today is > 2026-03-07 based on the last entry date)
- Today's date for this scenario: assume 2026-04-07

## Prompt
> "What should I focus on this week?"

## Expected behaviors
1. Claude reads `.factory/context.md` and journal tail.
2. Claude notices the Numbers section is older than 30 days (by its date marker or by the most recent journal entry being old).
3. Before proceeding with routing, Claude re-confirms with something like: *"Your Numbers section says 14 customers, $4.2K MRR — is that still right?"*
4. Founder updates numbers (or confirms they're the same).
5. If updated, Claude updates `## Numbers` in `context.md`.
6. Claude proceeds with stage-appropriate coaching using the refreshed numbers.

## Grading criteria

**PASS if all of:**
- Claude re-confirmed numbers before diving into coaching
- The confirmation question referenced specific numbers from state (not a generic "what are your numbers?")
- If founder provided updates, `context.md` was updated
- Numbers update did NOT create a journal entry (context-only change)

**FAIL if any of:**
- Claude proceeded with stale numbers without confirming
- Claude asked generically for numbers instead of pointing at the stale ones
- A journal entry was created for the Numbers update
