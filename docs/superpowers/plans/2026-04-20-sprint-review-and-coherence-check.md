# Sprint Review & Coherence Check Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Close two discipline gaps in Factory Floor. (1) A **Sprint review** ritual that fires at experiment deadline, forces a Persevere / Pivot / Pause decision, and nudges overdue experiments. (2) A **Coherence check** ritual that stress-tests the plan across pillars (JTBD / Goldratt / Sharp / Ritson / Strategy), surfaces tensions between them, and produces a concrete action — triggered at stage transitions, on founder request, or when constraint drift is detected.

**Architecture:** Purely additive markdown changes. One new reference file (`references/coherence-check.md`) holds the Coherence check ritual. `references/state.md` gets two new write triggers (#8 Sprint review, #9 Coherence check) with templates. `SKILL.md` gains two opening-line patterns (overdue experiment, drift detector), two routing-table rows, two journal ritual types. Stage files get one-line callouts at transition points. `references/intake.md` gets two named-protocol entries. `bin/install.mjs` gains one file entry. Scenario fixtures define acceptance criteria.

**Tech Stack:** Markdown (skill content), Node.js ES modules (installer), git (version control), no test runner (markdown skill — validation is manual + scenario fixtures).

---

## Overview

Factory Floor is a Claude Code skill for startup coaching. It already has a persistent state layer (`.factory/context.md` + `.factory/journal.md`) with 7 ritual write triggers. This plan adds two more rituals to close remaining discipline gaps:

1. **Sprint review** — when the founder commits to an experiment, that experiment's deadline defines a sprint. At the deadline, the founder owes a **Persevere / Pivot / Pause** decision. Today, state.md captures `Experiment outcome` but no forced decision; experiments drift forward without explicit reset. The opening-line pattern for "Experiment committed with no outcome" also fires regardless of whether the deadline has passed, which nags mid-sprint founders. This plan refines the pattern to key off the deadline, and adds Sprint review as a distinct write trigger that follows outcome reporting.

2. **Coherence check** — Factory Floor diagnoses along one axis at a time (constraint, funnel break, symptom). Nothing stress-tests the plan across pillars simultaneously. A founder can have a sharp activation constraint but zero mental availability (Sharp), or a clean Lean Canvas but no real strategic kernel (Rumelt). This ritual walks 5 pivotal questions — one per pillar — surfaces tensions, and commits the founder to a concrete action (canvas edit, new constraint, new experiment). It's designed as a tension-surface, not a scorecard, to resist collapsing into vanity ceremony.

**Factory Floor files you need to understand before starting:**

- `SKILL.md` (188 lines) — decision tree, state file schema (inlined for read path), opening-line patterns, symptom → constraint map, reference routing table, GOLEAN loop. This plan adds ~15 lines.
- `references/state.md` (300 lines) — the write protocol with 7 triggers, bootstrap, examples, 8 edge cases. This plan adds 2 triggers + 2 templates (~50 lines).
- `references/intake.md` (100 lines) — first-conversation protocol with named-protocols appendix at line 91. This plan appends 2 lines.
- `references/coherence-check.md` — does not exist yet. This plan creates it (~180 lines).
- `references/pillar-goldratt.md`, `pillar-maurya.md`, `pillar-sharp.md`, `pillar-ritson.md`, `pillar-strategy.md`, `jtbd.md` — reference files holding the pivotal-question source material. Not modified; the Coherence check ritual references them for the founder to go deeper if needed.
- `stages/pre-revenue.md`, `restart.md`, `growth.md`, `scaling.md` — stage files. `pre-revenue.md` and `growth.md` get a one-line callout near graduation criteria pointing to the Coherence check. `growth.md` and `scaling.md` get a one-line callout near the weekly review pointing to the Sprint review.
- `bin/install.mjs` — installer. One entry added.
- `evals/scenarios/` — currently holds `state-layer/` with 8 fixtures. This plan creates `sprint-review/` (4 fixtures) and `coherence-check/` (4 fixtures).

## File Layout

**New files:**

```
references/coherence-check.md                                   # NEW — the ritual (~180 lines)
evals/scenarios/sprint-review/01-persevere.md                   # NEW — scenario fixture
evals/scenarios/sprint-review/02-pivot.md                       # NEW
evals/scenarios/sprint-review/03-pause.md                       # NEW
evals/scenarios/sprint-review/04-overdue-nudge.md               # NEW
evals/scenarios/coherence-check/01-stage-transition.md          # NEW
evals/scenarios/coherence-check/02-founder-requested.md         # NEW
evals/scenarios/coherence-check/03-drift-detector.md            # NEW
evals/scenarios/coherence-check/04-tension-surfaces-action.md   # NEW
```

**Modified files:**

```
references/state.md         # add trigger #8 Sprint review + trigger #9 Coherence check + templates; edit journal ritual type list
SKILL.md                    # refine overdue-experiment opening-line pattern; add drift-detector opening-line pattern; add 2 journal ritual types; add 2 routing-table rows
references/intake.md        # append 2 named-protocol entries
stages/pre-revenue.md       # add one-line callout at graduation section
stages/growth.md            # add two one-line callouts (weekly review + graduation)
stages/scaling.md           # add one-line callout at weekly review
bin/install.mjs             # add 'references/coherence-check.md' to the files array
```

**Unchanged:**

```
stages/restart.md           # restart already points to growth via graduation criteria; graduation adds the callout
references/pillar-*.md
references/jtbd.md
references/misdiagnoses.md
references/coaching-patterns.md
references/estimation.md
references/weekly-review.md
references/weekly-diagrams.md
scripts/*
agents/*
_meta.json, package.json, README.md, CLAUDE.md
```

## Task Order Rationale

Scenarios first (Task 1) so every subsequent task has concrete acceptance criteria. Then `references/coherence-check.md` (Task 2) — the biggest new content piece, its structure informs state.md's journal template. Then `references/state.md` edits (Task 3) — adds both triggers + templates in one commit since they share formatting. Then `SKILL.md` (Task 4) — the most delicate file; one commit touches opening-line patterns, routing table, journal type enumeration. Then stage callouts (Task 5) — small, can be done atomically. Then `references/intake.md` (Task 6) — tiny. Then installer (Task 7) — must follow coherence-check.md creation or copy fails. Finally manual validation (Task 8) against all 8 scenario fixtures.

## TDD Adaptation for Markdown Skills

Factory Floor is a markdown skill — no runnable tests. Adapting TDD spirit (per the existing state-layer plan):

1. **Scenarios as acceptance criteria** (Task 1): Each scenario is persona + setup + prompt + expected behaviors + grading criteria. Serves as both manual validation checklist and future eval input.
2. **Read-back verification** after each file edit: agent reads the file back, confirms specific strings/headers exist.
3. **Manual validation pass** (Task 8): walk each scenario through a test directory, document findings.

Each task ends with a commit. Commits per task, not per step.

---

## Task 1: Create scenario fixtures

**Files:**
- Create: `evals/scenarios/sprint-review/01-persevere.md`
- Create: `evals/scenarios/sprint-review/02-pivot.md`
- Create: `evals/scenarios/sprint-review/03-pause.md`
- Create: `evals/scenarios/sprint-review/04-overdue-nudge.md`
- Create: `evals/scenarios/coherence-check/01-stage-transition.md`
- Create: `evals/scenarios/coherence-check/02-founder-requested.md`
- Create: `evals/scenarios/coherence-check/03-drift-detector.md`
- Create: `evals/scenarios/coherence-check/04-tension-surfaces-action.md`

**Rationale:** These define acceptance criteria before any implementation. Each fixture is self-contained (persona + setup + prompt + expected behaviors + grading criteria).

### - [ ] Step 1: Create the scenario directories

Run:
```bash
mkdir -p "evals/scenarios/sprint-review" "evals/scenarios/coherence-check"
```
Expected: directories created, no output on success. Verify with `ls evals/scenarios/`.

### - [ ] Step 2: Write `01-persevere.md`

Create `evals/scenarios/sprint-review/01-persevere.md` with the following content:

```markdown
# Scenario: Sprint review — Persevere

## Persona
Growth-stage founder. 14 paying customers, $4.2K MRR, team of 2. Constraint: Activation (7-day rate at 18%).

## Setup
`.factory/context.md` exists with:
- Stage: growth
- Current constraint: Activation — 7-day rate at 18%. Diagnosed 2026-03-24.
- Current experiment: Rewrite onboarding email sequence. Metric: 7-day activation rate. Deadline: 2026-04-14.

`.factory/journal.md` ends with:
- 2026-03-24 — Diagnosis
- 2026-04-04 — Experiment committed

Today is 2026-04-15 (one day after deadline).

## Prompt
Founder says: "Ran the email sequence rewrite. Activation went from 18% to 22%. Not huge but real."

## Expected behaviors
1. Claude logs an `Experiment outcome` entry with the numbers (22% vs 18% baseline).
2. Claude immediately asks: "So — Persevere (keep iterating on this constraint), Pivot (different experiment on same constraint), or Pause (constraint moved, move on)?"
3. Founder says: "Persevere. I want to push it to 30%."
4. Claude logs a `Sprint review` entry with decision = Persevere, rationale, and next experiment if stated.
5. Claude offers next experiment on the same constraint (e.g., "simplify signup form" or ask founder for their idea).
6. Claude says "Logged." after each write.

## Grading
- PASS: outcome logged, P/P/P question asked verbatim or equivalent, Sprint review logged with decision, next experiment discussed.
- FAIL: P/P/P decision skipped, or Sprint review collapsed into the outcome entry.
```

### - [ ] Step 3: Write `02-pivot.md`

Create `evals/scenarios/sprint-review/02-pivot.md`:

```markdown
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
```

### - [ ] Step 4: Write `03-pause.md`

Create `evals/scenarios/sprint-review/03-pause.md`:

```markdown
# Scenario: Sprint review — Pause (constraint moved)

## Persona
Same founder.

## Setup
Same context. Today is 2026-04-15.

## Prompt
Founder: "Activation went 18% → 35%. But now I'm noticing churn — 4 of the 14 customers cancelled this month."

## Expected behaviors
1. Claude logs `Experiment outcome` (35% vs 18% — strong).
2. Claude asks P/P/P.
3. Founder: "Pause on activation. Churn is the new issue."
4. Claude logs `Sprint review` with decision = Pause, rationale = "constraint moved to retention".
5. Claude probes retention before committing next experiment: "Before we commit — why did those 4 cancel? Did you talk to them?" (per `stages/restart.md` guidance when retention shows up).
6. Constraint update in `context.md` is NOT automatic — Claude confirms the new constraint with the founder first, using customer-factory vocabulary ("Retention — 4 of 14 churned in one month"), THEN logs a `Diagnosis` entry and updates `## Current constraint`.

## Grading
- PASS: Sprint review logged with Pause, diagnosis probe run before new constraint set, new constraint named in factory vocabulary.
- FAIL: new experiment committed without retention diagnosis, or constraint changed without founder confirmation.
```

### - [ ] Step 5: Write `04-overdue-nudge.md`

Create `evals/scenarios/sprint-review/04-overdue-nudge.md`:

```markdown
# Scenario: Overdue experiment — opening-line nudge

## Persona
Same founder. Busy week, didn't check in.

## Setup
Same context. Today is 2026-04-22 (8 days after deadline). No outcome logged yet.

## Prompt
Founder starts a new session with: "Hey, got a minute?"

## Expected behaviors
1. Claude runs state load, sees `## Current experiment` deadline = 2026-04-14, no matching `Experiment outcome` in journal.
2. Claude's opening line is the overdue-experiment pattern: "Your experiment on [rewriting the onboarding email sequence] was due 8 days ago. How did it go?"
3. Claude does NOT ask "what do you want to work on?" — state already told it what's pending.

## Contrast case (should NOT trigger nudge)
Same setup but today is 2026-04-08 (6 days INTO a 14-day experiment, deadline has NOT passed).
Opening line should be neutral — no nag: "Where do you want to focus today?" or silence on the experiment.

## Grading
- PASS: nudge fires only when deadline is past; silent otherwise.
- FAIL: nags mid-sprint, or silent when overdue.
```

### - [ ] Step 6: Write `01-stage-transition.md`

Create `evals/scenarios/coherence-check/01-stage-transition.md`:

```markdown
# Scenario: Coherence check — triggered at stage transition

## Persona
Solo founder just hit first paying customer. Was pre-revenue last week.

## Setup
`.factory/context.md` exists. Most recent journal entry is `## 2026-04-18 — Stage change` from pre-revenue to growth (trigger #6 just fired).

## Prompt
Founder: "Yeah we got our first customer. It feels like we should be celebrating but also I don't know what to do next."

## Expected behaviors
1. Claude acknowledges the transition.
2. Claude offers the Coherence check: "Before we lock into growth-stage habits — want to run a Coherence check? It's a 10-minute pass through JTBD, constraint, awareness, positioning, and strategy to make sure the plan still holds up now that you have revenue. First-customer transitions are where founders ossify bad assumptions."
3. If founder consents, Claude loads `references/coherence-check.md` and walks the 5 pivotal questions.
4. At the end, Claude logs a `Coherence check` journal entry with tensions found and the action committed to.

## Grading
- PASS: Coherence check offered at stage transition, ritual runs against the reference file, journal entry written with tensions + action.
- FAIL: stage transition without offer, or offer accepted but ritual skipped.
```

### - [ ] Step 7: Write `02-founder-requested.md`

Create `evals/scenarios/coherence-check/02-founder-requested.md`:

```markdown
# Scenario: Coherence check — founder requested

## Persona
Growth-stage founder, 3 months of sprints, constraint hasn't moved much.

## Setup
`.factory/context.md` shows Activation constraint, diagnosed 2026-01-18. It's now 2026-04-20. Journal has multiple Sprint review entries, all Persevere.

## Prompt
Founder: "Are we on track? I feel like we're grinding but not getting anywhere."

## Expected behaviors
1. Claude recognizes this as a coherence request, not a weekly review.
2. Claude offers: "Sounds like a good moment for a Coherence check. Want to run it?"
3. Claude runs the 5 pivotal questions.
4. At Ritson (diagnosis → strategy → tactics) or Goldratt (has constraint moved?), surfaces a tension: "You've Persevered 5 sprints with no constraint change — either the constraint was misdiagnosed, or your experiments aren't attacking it."
5. Action committed: run funnel break scan next session to re-diagnose.
6. `Coherence check` journal entry written.

## Grading
- PASS: coherence check offered in response to "are we on track", tension surfaced, action committed.
- FAIL: skill runs a weekly review instead, or score given without action.
```

### - [ ] Step 8: Write `03-drift-detector.md`

Create `evals/scenarios/coherence-check/03-drift-detector.md`:

```markdown
# Scenario: Coherence check — drift detector fires automatically

## Persona
Growth-stage founder.

## Setup
`.factory/context.md` shows same constraint from 2026-01-20. Journal ends with 3 consecutive `Sprint review` entries all with decision = Persevere, AND the last `Diagnosis` entry was >90 days ago AND no `Coherence check` entry exists in journal.

## Prompt
Founder starts session: "Ok, what's next?"

## Expected behaviors
1. Claude runs state load, counts consecutive Persevere decisions (3+) since last Diagnosis or Coherence check.
2. Drift detector fires. Opening line: "We've Persevered 3 sprints running and haven't re-diagnosed in 90+ days. Want to run a Coherence check before the next experiment?"
3. Founder consents, ritual runs.

## Grading
- PASS: drift detector identifies the pattern and offers the check before the founder can pick a new experiment.
- FAIL: drift goes undetected, session proceeds straight to experiment selection.
```

### - [ ] Step 9: Write `04-tension-surfaces-action.md`

Create `evals/scenarios/coherence-check/04-tension-surfaces-action.md`:

```markdown
# Scenario: Coherence check — tension surfaces a canvas edit, not a score

## Persona
Growth-stage founder running the ritual.

## Setup
Coherence check in progress, 3 questions in.

## Prompt
At the Sharp pillar question ("when someone in your CEP reaches for a solution, do they think of you?"), founder says: "Honestly, no. We have zero mental availability. I'm banking on activation fixing revenue but nobody's finding us in the first place."

## Expected behaviors
1. Claude identifies this as a pillar tension: constraint says Activation, Sharp says Acquisition is actually dry.
2. Claude does NOT just log a score. Instead surfaces the conflict: "The tension: you've been treating Activation as the constraint but Acquisition might be the real one. What does the funnel actually say?"
3. Action committed: run the funnel break scan at the end of the coherence check.
4. Journal entry captures the tension and the action, not a pillar-by-pillar pass/fail score.

## Grading
- PASS: tension explicitly named between pillars, action chosen that resolves it.
- FAIL: ritual produces a scorecard output, or pillars treated as independent checkboxes.
```

### - [ ] Step 10: Commit

Note: `evals/` is in `.gitignore` at the repo root; existing fixtures were added with `-f`. Use the same pattern:

```bash
git add -f evals/scenarios/sprint-review evals/scenarios/coherence-check
git commit -m "test: scenario fixtures for sprint review and coherence check

Defines 8 acceptance scenarios (4 sprint review, 4 coherence check) that
encode the discipline the new rituals must enforce. Serve as manual
validation checklist and future eval input."
```
Verify: `git log -1 --stat` shows 8 new files.

---

## Task 2: Create `references/coherence-check.md`

**Files:**
- Create: `references/coherence-check.md`

**Rationale:** The Coherence check is a multi-pillar ritual. Its own reference file keeps SKILL.md lean and parallels the existing pattern (weekly-review.md, intake.md). Later tasks route to it.

### - [ ] Step 1: Write the file

Create `references/coherence-check.md` with the following content:

````markdown
# Coherence Check — Cross-Pillar Stress Test

Load this file when:
- A stage transition just fired (`pre-revenue → growth` most critical; also `growth → scaling`).
- The founder asks an open coherence question: "are we on track?", "should we reconsider?", "is this still the right plan?".
- Drift detector fires — ≥3 consecutive `Sprint review` entries with decision = Persevere, AND last `Diagnosis` or `Coherence check` was >90 days ago.

Don't run it on weekly cadence. Constraint-driven, not calendar-driven.

## The ritual in one line

Walk the plan through 5 pivotal questions — one per pillar. Surface tensions between pillars. Commit to one concrete action that resolves the biggest tension. Log the entry.

**This is not a scorecard.** If you find yourself rating pillars "green / yellow / red", stop. The goal is to find where two pillars disagree about reality and what to do about it.

## The 5 pivotal questions

Run them in order. Don't skip. Each takes 2-3 minutes.

### 1. JTBD — Do you know what job customers hire you for?

Pivotal question: "In one sentence: when someone hires you, what progress are they trying to make that they couldn't before?"

Listening for:
- A functional, emotional, and social dimension, not just a feature list.
- Consistency with the customers they actually have. ("We do X for Y" should match who's paying.)
- Struggling moments — when does this job become urgent?

Tension signals:
- The job named here contradicts the customer count. ("We help SMBs" but all 14 customers are enterprise.)
- The founder can't answer without describing the product.
- Multiple jobs conflicting with each other (serving too many ICPs).

If tension → go deeper: `references/jtbd.md` (forces of progress, switch interviews).

### 2. Goldratt — Is your constraint named in customer-factory vocabulary?

Pivotal question: "What's your constraint, and when did it last move?"

Listening for:
- A named factory step (Acquisition / Activation / Revenue / Retention / Referral) with a magnitude.
- A date. If the diagnosis is >90 days old and no experiment has moved the number, the constraint was probably misdiagnosed.
- Subordination — "everything else serves this" — in how they're spending their time.

Tension signals:
- Constraint phrased as prose ("we have a sales problem") rather than a factory step.
- Time allocation doesn't match the named constraint. (They say Activation, their week was all content marketing.)
- Multiple "constraints" simultaneously — that's a fork, not a constraint.

If tension → `references/pillar-goldratt.md` (five focusing steps, subordination, re-exploit vs. elevate).

### 3. Sharp — When someone in your CEP reaches for a solution, do they think of you?

Pivotal question: "Take the last 5 customers. Ask how they found you. Do the answers cluster, or scatter?"

Listening for:
- Clustering means you have physical or mental availability in that channel.
- Scatter means acquisition is lucky; the pipe is fragile.
- Category Entry Points — what situations trigger the search? Do you show up in those situations?

Tension signals:
- Zero organic — every customer came from founder outreach. That's a time-limited channel.
- "Word of mouth" with no underlying distinctive codes that make you memorable.
- Active in channels that don't match where the CEP lives (e.g., Twitter for procurement buyers).

If tension → `references/pillar-sharp.md` (CEP mapping, distinctiveness, reach vs. frequency).

### 4. Ritson — Is your plan diagnosis → strategy → tactics, or tactics-first?

Pivotal question: "What problem is your current strategy solving, and how do your tactics ladder up to that strategy?"

Listening for:
- A named problem (diagnosis).
- A guiding policy (strategy = where we play + how we win).
- Tactics that all serve the strategy. Not "a bunch of stuff we're doing".

Tension signals:
- Tactics can't be traced back to a diagnosis — "we're doing SEO, paid ads, content, partnerships". That's a list, not a strategy.
- Diagnosis changes session to session.
- No target segment; "everyone is a potential customer".

If tension → `references/pillar-ritson.md` (diagnosis-strategy-tactics, STP, positioning sprint).

### 5. Strategy — Is this actually a strategy (Rumelt's kernel)?

Pivotal question: "State your kernel: diagnosis, guiding policy, coherent action."

Listening for:
- Diagnosis that names the crux — the single thing that, if resolved, unlocks the rest.
- Guiding policy that rules things *out* as well as in.
- Coherent action — a short list of moves that reinforce each other.

Tension signals:
- Fluff phrases: "delight customers", "best-in-class", "grow aggressively". These aren't diagnoses.
- Goals labeled as strategy ("hit $1M ARR" is a goal, not a strategy).
- Actions that work against each other (chasing enterprise AND running self-serve freemium, with no integration between them).

If tension → `references/pillar-strategy.md` (kernel, crux, bad strategy signs, culminating point).

## After the 5 questions — surface tensions explicitly

Do not produce a score. Produce a tension list.

Template:

> "Here's what I'm seeing:
> - [Pillar A] says X.
> - [Pillar B] says Y.
> - These disagree because [explanation].
> - The biggest tension is between [pillar] and [pillar]."

Common tension patterns:

| Pattern | Pillar A says | Pillar B says | The real question |
|---|---|---|---|
| "Hidden acquisition drought" | Constraint = Activation | Sharp: zero mental availability | Is activation even the bottleneck if no one arrives? |
| "No target segment" | Goldratt: Revenue constraint | Ritson: no ICP, no positioning | Who are you actually selling to? |
| "Fluffy strategy" | Kernel = "grow" | Ritson: tactics are a grab bag | Is there an actual strategy? |
| "Tool-in-search-of-job" | JTBD: can't name the job | Sharp: acquisition fine | Are your customers buying for reasons you understand? |
| "Over-allocation" | Constraint = one step | Time/people allocated across all steps | Why is the team not subordinating? |

## Commit to one action

End the ritual with exactly one action that resolves the biggest tension. Not a list. Not three priorities.

Format the action as one of:
- **Canvas edit** — update `## Identity`, `## JTBD`, or `## Current constraint` in `context.md` with specific new text.
- **New diagnosis** — the constraint was wrong; run the funnel break scan next session (load `references/intake.md`).
- **New experiment** — attacks the newly surfaced bottleneck; log via `Experiment committed` trigger.

## Log the entry

Trigger a `Coherence check` journal entry (see `references/state.md` §1 trigger #9). The entry captures:
- Tensions found (explicit pillar-vs-pillar framing).
- The committed action.
- Whether any canvas field was edited.

## Timing budget

Target 10-15 minutes. If it's taking 30+, you're drifting into full replanning — stop, commit the most urgent action, schedule a deeper strategy session separately.

## When NOT to run it

- First session of a new company (use intake instead).
- Inside a weekly review (they're different rituals — coherence is a level above).
- When the founder is in the middle of an active experiment and the outcome isn't in yet (run it at the next Sprint review decision point, not before).
````

### - [ ] Step 2: Verify the file

Read the file back and confirm these strings appear:
- `# Coherence Check`
- `### 1. JTBD`
- `### 5. Strategy`
- `## Commit to one action`
- `## Log the entry`

Run: `grep -c "^###" references/coherence-check.md`
Expected output: `5` (five pivotal questions).

### - [ ] Step 3: Commit

Run:
```bash
git add references/coherence-check.md
git commit -m "feat(coherence-check): add cross-pillar stress-test ritual

Walks plan through 5 pivotal questions (one per pillar: JTBD, Goldratt,
Sharp, Ritson, Strategy), surfaces tensions between pillars, commits to
one concrete action. Designed as tension-surface, not scorecard. Triggers:
stage transition, founder request, drift detector."
```

---

## Task 3: Add triggers #8 and #9 to `references/state.md`

**Files:**
- Modify: `references/state.md` (trigger table + sub-section templates)

**Rationale:** state.md owns all ritual write behaviors. Sprint review (#8) and Coherence check (#9) are two new rituals. Adding both in one commit because they share the write-template formatting convention.

### - [ ] Step 1: Add trigger #8 and #9 rows to the trigger table

In `references/state.md`, locate the trigger table that currently ends at trigger #7 (`Numbers change mentioned`). Append two new rows after it.

Find the existing line:
```
| 7 | Numbers change mentioned | Founder presents a number as a status update (not a passing aside) — e.g., any integer change to customer count, or a >10% change in MRR/ARR, team size changes, runway changes. | Update `## Numbers` in `.factory/context.md`. **No journal entry** — Numbers churn freely and don't need historical logging. |
```

Immediately after that row, add:
```
| 8 | Sprint review | Follows an `Experiment outcome` write in the same exchange. Founder explicitly states one of: "persevere", "pivot", or "pause" (or clear equivalent like "keep going", "try something different on the same thing", "move on to the next constraint"). If founder doesn't offer the decision, Claude MUST ask: "So — Persevere (keep iterating on this constraint), Pivot (different experiment on same constraint), or Pause (constraint moved, move on)?" before writing. | Append `## YYYY-MM-DD — Sprint review` entry to `.factory/journal.md`. If decision = Pause AND a new constraint was diagnosed in the same exchange, trigger #3 (Diagnosis) also fires and that entry is written first. |
| 9 | Coherence check | Claude ran the ritual from `references/coherence-check.md` to its end — all 5 pivotal questions answered AND one action committed. | Append `## YYYY-MM-DD — Coherence check` entry to `.factory/journal.md`. If the committed action is a canvas edit, ALSO update the relevant header in `.factory/context.md` (`## Identity`, `## JTBD`, or `## Current constraint`) per the action. |
```

### - [ ] Step 2: Add Sprint review sub-section template

Locate the `### Sub-section templates` section. Find the existing `**Kill decision:**` template (around line 90-96). Immediately after its closing triple-backticks, add:

````markdown
**Sprint review:**

```markdown
## YYYY-MM-DD — Sprint review
**Decision:** <Persevere / Pivot / Pause>
**Constraint (at decision time):** <customer-factory step>
**Rationale:** <why this decision — one sentence>
**Next move:**
  - Persevere → <next experiment on same constraint, with metric + deadline>
  - Pivot → <different experiment on same constraint, with metric + deadline>
  - Pause → <what constraint we're moving to, or "refocus via Coherence check">
```
````

### - [ ] Step 3: Add Coherence check sub-section template

Immediately after the Sprint review template, add:

````markdown
**Coherence check:**

```markdown
## YYYY-MM-DD — Coherence check
**Trigger:** <stage-transition / founder-requested / drift-detector>
**Tensions found:**
  - <Pillar A says X, Pillar B says Y — one bullet per tension, max 3>
**Biggest tension:** <the one we're acting on>
**Action committed:** <canvas-edit / new-diagnosis / new-experiment + specifics>
**Canvas fields edited:** <list the `##` headers touched in context.md, or "none">
```
````

### - [ ] Step 4: Verify edits

Read the updated `references/state.md` and verify:
- Trigger table has rows through `| 9 |`.
- Both new sub-section templates exist.

Run: `grep -c "^| [0-9] |" references/state.md`
Expected output: `9` (nine trigger rows).

Run: `grep -c "^\*\*[A-Z].*:\*\*$" references/state.md` or search for `**Sprint review:**` and `**Coherence check:**` headers — both must appear.

### - [ ] Step 5: Commit

Run:
```bash
git add references/state.md
git commit -m "feat(state): add sprint review and coherence check write triggers

Trigger #8 (Sprint review) fires after an Experiment outcome when founder
commits to Persevere/Pivot/Pause. Trigger #9 (Coherence check) fires when
the ritual from references/coherence-check.md completes with an action.
Both get sub-section templates in the existing format."
```

---

## Task 4: Update `SKILL.md` — opening-line patterns, routing table, journal ritual types

**Files:**
- Modify: `SKILL.md` (multiple small edits)

**Rationale:** SKILL.md is the router. It needs to know about the two new rituals so it can route to them and open the session intelligently when state suggests they're needed.

### - [ ] Step 1: Refine the overdue-experiment opening-line pattern

In `SKILL.md`, locate line 111:
```
- Recent `Experiment committed` with no matching `Experiment outcome` → "Last week you committed to [experiment]. Did the metric move?"
```

Replace with two separate patterns:
```
- Recent `Experiment committed`, deadline PAST, no matching `Experiment outcome` → "Your experiment on [what] was due [N] days ago. How did it go?"
- Recent `Experiment committed`, deadline NOT YET past → silent on the experiment; use the next matching pattern
```

**Important:** the original pattern nagged mid-sprint founders. The refined version only fires after the deadline passes. "Deadline" is the `Deadline:` field in the most recent `Experiment committed` entry. Today's date comes from the environment.

### - [ ] Step 2: Add the drift-detector opening-line pattern

In `SKILL.md`, immediately after the "Fresh state, nothing pending" line (around line 114), add:
```
- ≥3 consecutive `Sprint review` entries with decision = Persevere AND no `Diagnosis` or `Coherence check` in last 90 days → "We've Persevered [N] sprints running and haven't re-diagnosed in [M] days. Want to run a Coherence check before the next experiment?"
```

### - [ ] Step 3: Add the two new journal ritual types to the enumeration

In `SKILL.md`, locate the `### .factory/journal.md — entry headers` section (around line 91). The current enumeration is:
```
- `Weekly review (<stage>)`
- `Diagnosis`
- `Experiment committed`
- `Experiment outcome`
- `Kill decision`
- `Stage change`
```

Append two more entries:
```
- `Sprint review`
- `Coherence check`
```

### - [ ] Step 4: Add two rows to the Reference Routing Table

Locate the Reference Routing Table (starts around line 139). The last row today is:
```
| State write, bootstrap, or edge cases | `references/state.md` |
```

Immediately after, add:
```
| Stage transition, "are we on track?", or drift detected | `references/coherence-check.md` |
| Experiment outcome reported — running Sprint review | `references/state.md` (template #8) |
```

### - [ ] Step 5: Verify edits

Read `SKILL.md` and confirm:
- Line with "deadline PAST" exists.
- `Sprint review` and `Coherence check` appear in the ritual type enumeration.
- Two new routing rows exist.

Run: `grep -c "Sprint review\|Coherence check" SKILL.md`
Expected: ≥5 (2 ritual types, 2 routing table references, ≥1 in opening-line patterns).

### - [ ] Step 6: Commit

Run:
```bash
git add SKILL.md
git commit -m "feat(skill): route to sprint review and coherence check rituals

Refines overdue-experiment opening pattern to fire only when deadline has
passed (was nagging mid-sprint). Adds drift-detector pattern: 3 consecutive
Persevere sprints with no re-diagnosis in 90 days triggers a coherence
check offer. Adds Sprint review and Coherence check to the journal ritual
type enumeration. Adds two routing table rows."
```

---

## Task 5: Add stage callouts

**Files:**
- Modify: `stages/pre-revenue.md`
- Modify: `stages/growth.md`
- Modify: `stages/scaling.md`

**Rationale:** Stage files guide what happens at transition points. A one-line callout at the right place surfaces the new rituals without bloat. `restart.md` is untouched — restart stage skips directly into forensics; the natural offer point is when it graduates to growth (already covered by `growth.md`'s graduation callout).

### - [ ] Step 1: Add a Coherence check callout to `stages/pre-revenue.md`

Locate the `## When to Graduate` section (line 272). Immediately under its heading, add:

```
**When you hit graduation criteria, offer a Coherence check before moving to growth.** First-customer transitions are where founders ossify bad assumptions. See `references/coherence-check.md`.
```

### - [ ] Step 2: Add Sprint review + Coherence check callouts to `stages/growth.md`

Locate the `## The Weekly Constraint Review (10 minutes)` section (line 481). Immediately after its existing body (one line reading "See `references/weekly-review.md` — Growth section. Run it now."), add:

```

**Sprint review (at experiment deadline, not weekly):** After each `Experiment outcome`, run the Persevere / Pivot / Pause decision. See `references/state.md` §1 trigger #8.
```

Locate the `## When to Graduate` section (around line 487). Immediately under its heading, add:

```
**Before moving to scaling, run a Coherence check.** 10+ people means policy constraints start dominating; the plan needs to hold up across all pillars. See `references/coherence-check.md`.
```

### - [ ] Step 3: Add a Sprint review callout to `stages/scaling.md`

Locate the `## The Full Weekly Review (25 minutes)` section (line 393). Immediately after its heading, add a one-line callout (before the existing body):

```
**Sprint review runs at experiment deadline, not weekly.** The Full Weekly Review below is cadence; sprint reviews are decision points. See `references/state.md` §1 trigger #8.
```

### - [ ] Step 4: Verify edits

Run: `grep -l "Coherence check\|Sprint review" stages/`
Expected files: `stages/pre-revenue.md`, `stages/growth.md`, `stages/scaling.md`.

Run: `grep -c "Coherence check\|Sprint review" stages/growth.md`
Expected: ≥2 (one for each callout).

### - [ ] Step 5: Commit

Run:
```bash
git add stages/pre-revenue.md stages/growth.md stages/scaling.md
git commit -m "feat(stages): callouts for sprint review and coherence check

One-line pointers at transition points: pre-revenue → growth graduation
offers Coherence check; growth weekly review mentions Sprint review;
growth → scaling graduation offers Coherence check; scaling weekly review
disambiguates Sprint review from the weekly cadence."
```

---

## Task 6: Add named-protocol entries to `references/intake.md`

**Files:**
- Modify: `references/intake.md`

**Rationale:** `intake.md` line 91+ lists named protocols the founder can invoke by name. Both new rituals should be there so returning founders can invoke them directly.

### - [ ] Step 1: Append to the named-protocols list

Locate the `## Named protocols you can ask for by name` section (line 91). The current list ends at line 100:
```
- **"Run the positioning sprint"** — when positioning is the constraint: call 3 of your best customers. Ask what they'd tell a colleague about you. Write down their exact words. That's your position.
```

Append:
```
- **"Run a Sprint review"** — after an experiment finishes: log the outcome and decide Persevere / Pivot / Pause
- **"Run a Coherence check"** — any post-pre-revenue stage: stress-test the plan across JTBD, constraint, awareness, positioning, and strategy. Surfaces tensions between pillars, commits to one action.
```

### - [ ] Step 2: Verify

Run: `grep -c "^- \*\*" references/intake.md`
Expected: ≥8 (6 existing + 2 new).

### - [ ] Step 3: Commit

Run:
```bash
git add references/intake.md
git commit -m "feat(intake): add sprint review and coherence check to named protocols

Returning founders can invoke 'Run a Sprint review' or 'Run a Coherence
check' directly without waiting for auto-triggered routing."
```

---

## Task 7: Update the installer

**Files:**
- Modify: `bin/install.mjs`

**Rationale:** The installer copies skill files to `~/.claude/skills/factory-floor/`. The new reference file must be included.

### - [ ] Step 1: Add the new file to the files array

In `bin/install.mjs`, locate the `files` array (starts at line 19). Find the line:
```
  'references/state.md',
```

Immediately after it, add a new line:
```
  'references/coherence-check.md',
```

Keep the surrounding lines untouched. Final state of that region:
```
  'references/coaching-patterns.md',
  'references/state.md',
  'references/coherence-check.md',
  'references/pillar-goldratt.md',
```

### - [ ] Step 2: Verify and smoke-test the installer

Run: `grep coherence-check bin/install.mjs`
Expected: 1 match in the files array.

Run a dry install to a temp location:
```bash
TEST_HOME=$(mktemp -d) HOME="$TEST_HOME" node bin/install.mjs 2>&1 | tail -5
test -f "$TEST_HOME/.claude/skills/factory-floor/references/coherence-check.md" && echo "OK: coherence-check.md installed" || echo "FAIL: missing"
rm -rf "$TEST_HOME"
```
Expected: final line prints `OK: coherence-check.md installed`.

### - [ ] Step 3: Commit

Run:
```bash
git add bin/install.mjs
git commit -m "feat(install): include references/coherence-check.md in installer

Installer copies the new ritual reference file to
~/.claude/skills/factory-floor/ so installed copies get the coherence
check ritual alongside the other references."
```

---

## Task 8: Manual validation pass against all 8 scenarios

**Files:**
- No code changes. This task is a validation walkthrough.

**Rationale:** The 8 fixtures in Task 1 are the acceptance criteria. This task runs each one and confirms the skill behaves as specified. Findings documented as a commit message even if no files change.

### - [ ] Step 1: Set up a scratch project

Run:
```bash
SCRATCH=$(mktemp -d)
cd "$SCRATCH"
git init -q
mkdir .factory
```

### - [ ] Step 2: Walk scenario 01-persevere

1. Populate `.factory/context.md` with the setup from `evals/scenarios/sprint-review/01-persevere.md`.
2. Populate `.factory/journal.md` with the setup entries.
3. Start a Claude Code session in `$SCRATCH` and paste the scenario Prompt.
4. Verify: the 6 expected behaviors from the fixture occur in order.
5. Inspect `.factory/journal.md` — confirm `Experiment outcome` then `Sprint review` entries were appended in order.
6. Record PASS or FAIL + any notes.

### - [ ] Step 3: Walk scenarios 02-pivot, 03-pause, 04-overdue-nudge

Repeat Step 2's procedure for each. Clean `.factory/` between runs:
```bash
rm -rf .factory && mkdir .factory
```
For 04, do both the main case AND the contrast case (deadline not yet past). The contrast case MUST NOT nag.

### - [ ] Step 4: Walk scenarios 01–04 of coherence-check

Repeat Step 2's procedure for each coherence-check fixture. For 03 (drift detector), populate 3+ consecutive Persevere entries and an old Diagnosis to verify the detector fires.

### - [ ] Step 5: Document results

Record results in a checklist. Expected: 8 PASS. If any FAIL, fix the root-cause file (usually `SKILL.md`, `state.md`, or `coherence-check.md`), re-run, re-commit as a follow-up.

### - [ ] Step 6: Commit (empty commit if all pass)

If all scenarios passed with no code changes:
```bash
git commit --allow-empty -m "test: manual validation pass for sprint review and coherence check

Walked all 8 fixtures (evals/scenarios/sprint-review/*.md,
evals/scenarios/coherence-check/*.md) against a scratch project.
All scenarios behave as specified."
```

If any FAIL triggered a follow-up fix, commit that fix first (with a reference to the scenario number) and then this validation commit.

### - [ ] Step 7: Clean up

Run:
```bash
rm -rf "$SCRATCH"
```

---

## Self-review (already performed by plan author)

**Spec coverage:** ✓
- Sprint review write trigger → Task 3 (#8)
- Sprint review sub-section template → Task 3
- Overdue-experiment opening-line refinement → Task 4 Step 1
- P/P/P decision forcing → Task 3 (trigger #8 detection rule mandates Claude asks if founder doesn't offer)
- Coherence check reference file → Task 2
- Coherence check write trigger → Task 3 (#9)
- Coherence check sub-section template → Task 3
- Drift-detector opening-line pattern → Task 4 Step 2
- Coherence check routing table row → Task 4 Step 4
- Stage callouts (pre-revenue graduation, growth weekly+graduation, scaling weekly) → Task 5
- Named-protocol entries for both → Task 6
- Installer update → Task 7
- Acceptance criteria (8 fixtures) → Task 1
- Manual validation → Task 8

**Placeholder scan:** ✓ No TBDs, TODOs, or "similar to Task N" shortcuts. Every code block is complete.

**Type consistency:** ✓
- `Sprint review` and `Coherence check` used consistently as ritual type names (no `Sprint Review` / `coherence-check` drift).
- Trigger numbers consistent (#8, #9).
- File paths consistent (`references/coherence-check.md`, `.factory/context.md`, `.factory/journal.md`).

---

## Execution Handoff

Plan complete. Two execution options:

1. **Subagent-Driven (recommended)** — fresh subagent per task with two-stage review between tasks. Fast iteration.
2. **Inline Execution** — execute tasks in this session with checkpoints for review.

Also applicable: this is a good candidate for an isolated git worktree since it touches 8+ files. If executing inline, create a worktree first (`superpowers:using-git-worktrees`).
