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
