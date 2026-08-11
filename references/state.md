# State — Write Protocol, Bootstrap, Edge Cases

Load before **writing** to `.factory/`, or when bootstrapping it. The read protocol
and schema are in `SKILL.md` and don't need this file.

**The mindset:** state is the founder's record, not yours. Write only on a real
trigger, say one word about it, and never rewrite something they wrote by hand.
When in doubt, ask — never auto-correct.

---

## 1. Write triggers

Write ONLY when one of these fires.

| # | Trigger | Detection | Write |
|---|---|---|---|
| 1 | Weekly review complete | Ran to the end — all stage questions answered AND the "one thing we will NOT do" question answered | Append `## YYYY-MM-DD — Weekly review (<stage>)` to `journal.md` |
| 2 | Experiment committed | Explicit affirmative to an assigned experiment: "ok I'll do that", "yes, let's run it", "sure, this week", "I'll try that" | Append `## YYYY-MM-DD — Experiment committed` to `journal.md` AND update `## Current experiment` in `context.md` |
| 3 | Diagnosis accepted | You named the constraint in customer-factory vocabulary AND they affirmed ("yes that's it", "agreed", "makes sense") OR immediately accepted an experiment attacking it | Append `## YYYY-MM-DD — Diagnosis` to `journal.md` AND update `## Current constraint` in `context.md` |
| 4 | Experiment outcome | They report results at or after the deadline. Ambiguous which experiment? Ask; default to the current one in `context.md` | Append `## YYYY-MM-DD — Experiment outcome` to `journal.md` |
| 5 | Experiment killed early | They stopped it before the deadline | Append `## YYYY-MM-DD — Kill decision` to `journal.md` AND clear `## Current experiment` |
| 6 | Stage transition | Numbers crossed a threshold in the `SKILL.md` router AND they confirm | Update `## Stage` in `context.md` AND append `## YYYY-MM-DD — Stage change` |
| 7 | Numbers changed | Presented as a status update, not a passing aside — any integer change to customer count, >10% MRR/ARR change, team size, runway | Update `## Numbers` in `context.md`. **No journal entry** — Numbers churn freely |

**Trigger 3 detail:** the entry MUST include both the founder's initial framing and
the actual diagnosis. When 3 and 2 fire from the same exchange, write Diagnosis
first, then Experiment committed — both dated today.

### After writing

Say **"Logged."** One word. Don't list what was written — the file is right there.

### Founder override

If they say "don't log this" / "don't write to my factory" / "keep this off the
record" / "don't save this" or any clear equivalent:

Reply with exactly **"OK, not logging this one."** Then coach normally for the rest
of the session and write **nothing** — no journal entries, no context updates —
until they explicitly re-authorize ("actually, log it"). Don't raise it again.

### Write failure

If a write fails (disk, permissions, directory not writable), tell the founder
exactly what would have been written, in a code block, and keep coaching. Don't
retry silently. **Never claim a write succeeded when it didn't.**

---

## 2. Entry templates

```markdown
## YYYY-MM-DD — Weekly review (pre-revenue)
**Conversations:** <count + who>
**What we learned:** <one or two key learnings>
**Hypothesis check:** <still believed? evidence for/against?>
**Next week's one thing:** <single most important thing to learn or test>
**One thing we will NOT do:** <what's tempting but off-limits>
```

```markdown
## YYYY-MM-DD — Weekly review (growth)
**Constraint:** <factory step + movement this week>
**Numbers:** <found / activated / paid / churned>
**Work pile:** <in progress, shipped, stuck >2 weeks>
**Next week's 3 priorities:** <three bullets, each serving the constraint>
**One thing we will NOT do:** <what's tempting but off-limits>
```

```markdown
## YYYY-MM-DD — Weekly review (scaling)
**Funnel snapshot:** <biggest drop-off, vs last week>
**Buffer/flow:** <where work piles up, where capacity is idle>
**Initiative traffic lights:** <🟢/🟡/🔴 per initiative>
**Policy constraint scan:** <rule/process/habit slowing things down, if any>
**Next week's focus:** <one thing the team rallies around>
**One thing we will NOT do:** <what's tempting but off-limits>
```

```markdown
## YYYY-MM-DD — Diagnosis
**Founder's initial framing:** <what they thought it was — verbatim where possible>
**Symptom probed:** <what you asked to surface the real constraint>
**Diagnosis:** <factory step + magnitude — e.g. "Activation — 7-day rate at 18%">
**Why not the others:** <brief rule-out of the other steps>
**Confidence:** <High / Medium / Low>
```

```markdown
## YYYY-MM-DD — Experiment committed
**Experiment:** <what's being run>
**Constraint it attacks:** <which factory step>
**Metric:** <what number to watch — with baseline>
**Deadline:** <YYYY-MM-DD>
```

```markdown
## YYYY-MM-DD — Experiment outcome
**Experiment:** <what was run>
**Did the metric move?** <yes / no / partially, with numbers>
**What we learned:** <one or two key learnings>
**Next:** <keep going, kill it, try something new>
```

```markdown
## YYYY-MM-DD — Kill decision
**What was killed:** <experiment or initiative>
**Why:** <signal that triggered the kill>
**What we learned:** <even killed experiments teach something>
**What we'll try instead:** <next experiment, or "nothing — refocus on X">
```

```markdown
## YYYY-MM-DD — Stage change
**From:** <old stage>
**To:** <new stage>
**Trigger:** <first paying customer, crossed $100K MRR, lost all customers, etc.>
**What changes about how we work:** <brief — the stage file has the full guidance>
```

---

## 3. Bootstrap

Runs when `.factory/` doesn't exist AND intake has surfaced enough to populate
`context.md`: stage, customer count, team size, and the problem they brought.
**Don't offer before that bar.**

Offer **once per session**, after the funnel break scan or the minimum-fields bar:

> "Want me to set up `.factory/` for this company? I'll create a `context.md` from
> what we just discussed and start a `journal.md`. It lives in this directory. The
> journal stays local (gitignored)."

**Declined?** Don't offer again this session. Don't nag.

**Consented?** In order:

**Step 1 — ask the one bootstrap-only question:**

> "Before I scaffold, in one sentence — what does this company do and who for?"

This fills `## Identity`. Intake never captures it, so this is the only chance.

**Step 2 — create `.factory/` in CWD.**

**Step 3 — write `.factory/context.md`:**

```markdown
# <Company name if known, otherwise leave the title empty>

## Identity
<Answer to the bootstrap question>

## Numbers
<From intake: customers, MRR/ARR, team size, runway if mentioned>

## Stage
<Stage from routing> — <one-line justification>

## JTBD
<If it came up in intake. Otherwise: "TBD — capture in a future session">

## Current constraint
<If the funnel break scan found one, in customer-factory vocabulary.
Otherwise: "TBD — run the funnel break scan next session">

## Current experiment


## Notes

```

**Step 4 — write `.factory/journal.md`** containing only `# Journal`.

**Step 5 — gitignore the journal.** If `.gitignore` exists, append
`.factory/journal.md` on a new line unless already present. If not, create it with
that one line. **Never modify, reorder, or delete existing lines.** No `.git/`
directory → skip silently and warn in Step 6.

**Step 6 — confirm:**

> "Done. `.factory/context.md` is committable (team can share the truth);
> `.factory/journal.md` is gitignored (personal coaching log). Edit them by hand
> any time."

Not a git repo:

> "Done. `.factory/context.md` and `.factory/journal.md` are in place. Heads-up:
> this directory isn't a git repository, so I couldn't gitignore the journal. If
> you initialize git later, add `.factory/journal.md` to `.gitignore`."

---

## 4. Example `context.md`

```markdown
# Swiftner

## Identity
Sales-call analytics for inside sales teams at B2B SaaS companies of 10-50 reps.

## Numbers
14 paying customers · $4.2K MRR · team of 2 · runway 9 months

## Stage
growth — first paying customers, product-market fit signals, focus is repeatable sales

## JTBD
When sales reps join a new company, they want to ramp faster, so they can hit quota
in Q1 instead of Q2.

## Current constraint
Activation — 7-day rate at 18%. Diagnosed 2026-03-24.

## Current experiment
Rewrite onboarding email sequence to pull users to first "aha" in <10 min.
Metric: 7-day activation rate. Deadline: 2026-04-14.

## Notes
- ICP: inside-sales leaders at Norwegian B2B SaaS, 10-50 reps
- Do NOT chase enterprise — burned on that in 2025
- Brand codes: orange, conversational tone, "sales reality" not "sales theater"
```

---

## 5. Edge cases

**Partial `.factory/`.** Only `context.md` → read it, skip the journal tail; the
first write that needs `journal.md` creates it with `# Journal`. Only `journal.md`
→ read the tail and offer: *"I see a journal but no context file. Want me to
recreate `context.md` from the last few entries?"*

**Missing header.** Ask the founder for that field, then write the answer under a
freshly added section. **Never refuse to proceed over a missing header.**

**Renamed header.** Ask: *"I see `## Current bottleneck` — should I treat that as
`## Current constraint`?"* On confirmation, use their name for reads and writes
this session. **Don't auto-rewrite the file.**

**State contradicts the founder.** Trust the founder. *"Sounds like the state is
stale. Want me to log a Stage change and update context.md?"* Only on consent.

**Numbers older than 30 days.** Re-confirm before routing: *"Your Numbers say 14
customers, $4.2K MRR — still right?"* Update `context.md` if changed. No journal entry.

**Wrong `.factory/`.** If they say "that's not what we're working on": *"This
`.factory/` says [identity]. Is this the wrong directory?"* **Never delete or
overwrite without explicit consent.**

**No git repo.** Bootstrap still creates both files, skips gitignore, warns.

**Claude Desktop / no filesystem.** Auto-write is off. At a trigger, show exactly
what you *would* have written in a code block and let the founder paste it into
their own `journal.md`. This is deliberately second-class and documented in the README.
