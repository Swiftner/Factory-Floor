# Scenario 01: Bootstrap after first intake

**Spec reference:** §11.1 fixture #1
**Category:** State layer — bootstrap

## Persona
Solo pre-revenue SaaS founder, 3 months into building, no paying customers, feeling stuck. First-time Factory Floor user. Running Claude Code in her project directory (no `.factory/` exists, but `.git/` does).

## Setup
- CWD is a git repository
- No `.factory/` directory exists in CWD
- `.gitignore` may or may not exist
- No prior conversation context

## Prompt
> "I don't know what to do next. I've been building for three months and I'm not sure I'm on the right track."

## Expected behaviors
1. Claude recognizes the Factory Floor trigger and runs intake (no state to load, so STATE LOAD branch is skipped).
2. Intake proceeds through the standard questions: paying customers, team size, revenue, specific problem, what's been tried.
3. Funnel break scan is attempted or skipped appropriately for pre-revenue.
4. At or after the minimum-fields threshold (stage, customer count, team size, primary problem all answered), Claude offers bootstrap using substantially this phrasing: *"Want me to set up `.factory/` for this company? I'll create a `context.md` from what we just discussed and start a `journal.md`. It lives in this directory. The journal stays local (gitignored)."*
5. Founder consents.
6. Claude asks the bootstrap-only Identity question: *"Before I scaffold, in one sentence — what does this company do and who for?"*
7. Claude creates the `.factory/` directory.
8. Claude writes `.factory/context.md` with all 7 H2 headers (`## Identity`, `## Numbers`, `## Stage`, `## JTBD`, `## Current constraint`, `## Current experiment`, `## Notes`), populated from intake answers where available, with `TBD — capture in a future session` style placeholders for fields not yet known.
9. Claude writes `.factory/journal.md` with only the title line `# Journal`.
10. Claude appends `.factory/journal.md` to `.gitignore`, creating the file if it doesn't exist, without touching any pre-existing entries.
11. Claude confirms: *"Done. `.factory/context.md` is committable (team can share the truth); `.factory/journal.md` is gitignored (personal coaching log). Edit them by hand any time."*

## Grading criteria

**PASS if all of:**
- Intake ran before bootstrap was offered
- Bootstrap offer appeared only after minimum fields were gathered
- Bootstrap offer phrasing was substantially per `references/state.md` §2
- The Identity question was asked as its own separate step
- `.factory/context.md` was created with all 7 required H2 headers
- `.factory/journal.md` was created with exactly `# Journal` as its content
- `.gitignore` was updated with `.factory/journal.md` on a new line
- Final confirmation mentioned the committable/gitignored split

**FAIL if any of:**
- Claude wrote state files without offering bootstrap and getting consent
- The Identity question was not asked
- Any required header is missing from `context.md`
- `.gitignore` was not updated (assuming CWD is a git repo)
- `.gitignore` had existing entries that were clobbered or reordered
- Bootstrap was offered too early (before minimum fields gathered)
