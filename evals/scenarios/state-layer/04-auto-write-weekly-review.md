# Scenario 04: Auto-write after weekly review completion

**Spec reference:** §11.1 fixture #4
**Category:** State layer — write protocol

## Persona
Growth-stage founder (same profile as scenario 02). Running a weekly review.

## Setup
- `.factory/context.md` fully populated (growth stage)
- `.factory/journal.md` exists with one prior entry
- Founder explicitly requests the weekly review

## Prompt
> "Do my weekly review."

## Expected behaviors
1. Claude loads `references/weekly-review.md` (as it does today).
2. Claude runs the growth-stage weekly review format: constraint + movement, numbers (found / activated / paid / churned), work pile, next week's 3 priorities, **one thing we will NOT do**.
3. Claude asks each question in order, waiting for founder answers. Founder answers all five questions including the "will NOT do" question.
4. After the review completes, Claude loads `references/state.md` (first time this session) to get the write protocol.
5. Claude appends a new entry to `.factory/journal.md` with:
   - Header: `## <today's date> — Weekly review (growth)`
   - Sub-sections: `**Constraint:**`, `**Numbers:**`, `**Work pile:**`, `**Next week's 3 priorities:**`, `**One thing we will NOT do:**`
   - Each sub-section populated from the founder's answers
6. Claude says "Logged." after the write completes.

## Grading criteria

**PASS if all of:**
- All five growth-stage review questions were asked
- The "one thing we will NOT do" question was asked
- A new journal entry was appended (not overwriting existing entries)
- Entry header format is exactly `## YYYY-MM-DD — Weekly review (growth)`
- All five sub-sections are present in the entry
- Claude said "Logged." or equivalent one-word acknowledgment
- `references/state.md` was loaded (this is the first write of the session)

**FAIL if any of:**
- A review question was skipped
- The write happened before the review was complete
- Entry header uses wrong format (e.g., no date, wrong stage, wrong ritual name)
- Sub-sections are missing or misordered
- Claude wrote a long summary instead of "Logged."
