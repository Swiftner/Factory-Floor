# State — Write Protocol, Bootstrap, Edge Cases

Load before **writing** to `.factory/`, or when bootstrapping. Read protocol and
schema are in `SKILL.md`.

**Mindset:** state is the founder's record, not yours. Write only on a real trigger,
say one word about it, never rewrite what they wrote by hand. When in doubt, ask.

**The journal is a prediction ledger, not a diary.** Its job is to close the feedback
loop a startup otherwise never closes. Every experiment goes in with a prediction and
a confidence number *before* it runs, and gets scored when it returns. Skipping the
prediction field defeats the point of the file.

---

## 1. Write triggers

| # | Trigger | Detection | Write |
|---|---|---|---|
| 1 | Weekly review complete | Ran to the end, including the "one thing we will NOT do" question | Append `## YYYY-MM-DD — Weekly review (<stage>)` |
| 2 | Experiment committed | Explicit affirmative: "ok I'll do that", "yes, let's run it", "I'll try that" | Append `## YYYY-MM-DD — Experiment committed` AND update `## Current experiment`. **Must include prediction + confidence** — if you don't have them, ask before writing |
| 3 | Diagnosis accepted | You named the constraint in factory vocabulary AND they affirmed, OR immediately accepted an experiment attacking it | Append `## YYYY-MM-DD — Diagnosis` AND update `## Current constraint`. Must record both their initial framing and the diagnosis. If 2 and 3 fire together, Diagnosis first, both dated today |
| 4 | Experiment outcome | They report results at or after the deadline. Ambiguous which? Ask; default to the current one | Append `## YYYY-MM-DD — Experiment outcome`, **including whether the prediction was right** |
| 5 | Killed early | Stopped before the deadline | Append `## YYYY-MM-DD — Kill decision` AND clear `## Current experiment` |
| 6 | Stage transition | Numbers crossed a router threshold AND they confirm | Update `## Stage` AND append `## YYYY-MM-DD — Stage change` |
| 7 | Numbers changed | Presented as a status update, not an aside — integer change to customers, >10% MRR, team, runway | Update `## Numbers`. **No journal entry** |

**After writing, say "Logged."** One word. Don't list what was written.

**Override.** If they say "don't log this" / "keep this off the record" / anything
equivalent: reply exactly **"OK, not logging this one."** Then write nothing for the
rest of the session — no journal, no context — until they explicitly re-authorize.
Don't raise it again.

**Write failure.** Tell them exactly what would have been written, in a code block,
and keep coaching. Don't retry silently. **Never claim a write succeeded when it didn't.**

---

## 2. Templates

```markdown
## YYYY-MM-DD — Diagnosis
**Their framing:** <what they thought it was — verbatim where possible>
**Probed:** <what you asked to surface it>
**Diagnosis:** <factory step + magnitude — "Activation — 7-day rate 18%">
**Why not the others:** <brief rule-out>
**Confidence:** <High / Medium / Low>
```

```markdown
## YYYY-MM-DD — Experiment committed
**Experiment:** <what's being run>
**Constraint:** <which factory step>
**Metric + baseline:** <number to watch, where it is now>
**Their prediction:** <the number they expect — taken BEFORE you commented>
**Their confidence:** <0-100%>
**When:** <day, time, and the first physical action>
**Deadline:** <YYYY-MM-DD>
```

```markdown
## YYYY-MM-DD — Experiment outcome
**Experiment:** <what was run>
**Predicted / actual:** <their number vs what happened>
**Prediction correct?** <yes / no / partially>
**What we learned:** <one or two things>
**Next:** <keep going, kill it, try something new>
```

```markdown
## YYYY-MM-DD — Kill decision
**Killed:** <experiment or initiative>
**Why:** <the signal that triggered it>
**Learned:** <even killed experiments teach something>
**Instead:** <next experiment, or "nothing — refocus on X">
```

```markdown
## YYYY-MM-DD — Stage change
**From / To:** <old> → <new>
**Trigger:** <first paying customer, crossed $100K MRR, lost all customers…>
**What changes:** <brief — the stage file has the guidance>
```

**Weekly review** entries follow the stage format in `references/weekly-review.md`,
plus `**One thing we will NOT do:**` and `**Prediction scored:**`.

---

## 3. Bootstrap

Runs when `.factory/` doesn't exist AND intake has surfaced stage, customer count,
team size, and the problem they brought. **Don't offer before that bar.** Offer once
per session:

> "Want me to set up `.factory/` for this company? I'll create a `context.md` from
> what we just discussed and start a `journal.md`. It lives in this directory. The
> journal stays local (gitignored)."

Declined → don't offer again this session, don't nag.

Consented → in order:

**1.** Ask the one bootstrap-only question: *"Before I scaffold, in one sentence —
what does this company do and who for?"* This fills `## Identity`; intake never
captures it.

**2.** Create `.factory/`.

**3.** Write `context.md`:

```markdown
# <Company name if known>

## Identity
<answer to the bootstrap question>

## Numbers
<customers, MRR/ARR, team size, runway if mentioned>

## Stage
<stage> — <one-line justification>

## JTBD
<if it came up; otherwise "TBD — capture in a future session">

## Current constraint
<factory-step vocabulary if the scan ran; otherwise "TBD — run the funnel break scan">

## Current experiment


## Notes

```

**4.** Write `journal.md` containing only `# Journal`.

**5.** Gitignore the journal. Append `.factory/journal.md` to `.gitignore` if not
already there; create it if absent. **Never modify existing lines.** No `.git/` →
skip silently and warn in step 6.

**6.** Confirm:

> "Done. `.factory/context.md` is committable (the team can share the truth);
> `.factory/journal.md` is gitignored (personal coaching log). Edit either by hand
> any time."

Not a git repo — add: "Heads-up: this isn't a git repository, so I couldn't gitignore
the journal. If you initialize git later, add `.factory/journal.md` to `.gitignore`."

---

## 4. Example

```markdown
# Swiftner

## Identity
Sales-call analytics for inside sales teams at B2B SaaS companies of 10-50 reps.

## Numbers
14 paying customers · $4.2K MRR · team of 2 · runway 9 months

## Stage
growth — first paying customers, focus is repeatable sales

## JTBD
When reps join a new company they want to ramp faster, so they hit quota in Q1.

## Current constraint
Activation — 7-day rate at 18%. Diagnosed 2026-03-24. Confidence: high.

## Current experiment
Rewrite onboarding emails to reach first "aha" in <10 min.
Metric: 7-day activation, baseline 18%. Predicted: 30% (confidence 70%).
Deadline: 2026-04-14.

## Notes
- ICP: inside-sales leaders at Norwegian B2B SaaS, 10-50 reps
- Do NOT chase enterprise — burned on that in 2025
- Prediction record: 4 of 9 correct
```

---

## 5. Edge cases

**Partial `.factory/`.** Only `context.md` → read it, skip the journal tail; the
first write creates `journal.md`. Only `journal.md` → read the tail and offer:
*"I see a journal but no context file. Want me to recreate it from the last few entries?"*

**Missing header.** Ask for that field, then write it under a freshly added section.
**Never refuse to proceed over a missing header.**

**Renamed header.** *"I see `## Current bottleneck` — treat that as `## Current
constraint`?"* Use their name this session. **Don't auto-rewrite.**

**State contradicts them.** Trust the founder. *"Sounds like the state is stale. Want
me to log a Stage change and update context.md?"* Only on consent.

**Numbers over 30 days old.** Re-confirm before routing: *"Your Numbers say 14
customers, $4.2K MRR — still right?"* Update; no journal entry.

**Wrong `.factory/`.** *"This says [identity]. Is this the wrong directory?"* **Never
delete or overwrite without explicit consent.**

**No filesystem (Claude Desktop).** Auto-write is off. At a trigger, show exactly what
you *would* have written in a code block and let them paste it. Deliberately
second-class; documented in the README.
