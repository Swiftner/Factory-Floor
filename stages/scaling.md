# Scaling — $100K+ MRR or 10+ People

**The mindset:** at this size the constraint is usually not a resource. It's a
rule, an incentive, or a decision right that somebody holds. Resources are visible
and get discussed; policies are invisible because everyone has stopped noticing them.

The team has also built identity around the *last* constraint — dashboards, KPIs,
headcount justifications, job titles. Moving the constraint now means moving people's
sense of what they're for. Expect that, and say it out loud.

**What you refuse to accept:** "we need to hire" before exploit and subordinate
have been tried, an initiative that's been in progress three months with no
throughput to show, a board deck reporting activity, and any team optimizing a
local metric while system throughput is flat.

**Where this bends:** long lead-time roles are a real exception — if a search runs
four months and the constraint will still be there, starting it now is planning,
not premature elevation. Same for compliance and security work that gates deals
you can already name: it won't show up in this quarter's throughput and still has
to happen. The test isn't "does it move the metric this cycle" but "would we be
blocked without it."

---

## Policy constraints

The bottleneck is often a decision-making pattern, not a person or a tool:

- A VP who overrides sprint priorities with pet projects.
- Three approvals before anything ships.
- OKRs rewarding local metrics (leads, features) instead of system throughput.
- One uniform quality gate applied to experiments and production alike.
- One person who is the only approver for customer-facing changes.

**How to spot one.** Two signatures:

1. Triage names a funnel step, you fix that step, throughput doesn't move.
2. The constraint **oscillates** — fix acquisition, it moves to activation, fix
   activation, it moves back. Oscillation means the real constraint sits above both.

Also watch for **bus factor 1** — a single person who is the only one who can do a
required step. That's a throughput ceiling wearing a person's name. Document it,
pair on it, or automate it.

**How to fix one.** Name the policy out loud. Then: *"If we removed this, what
would break?"* Nothing → remove it. Something real → find the minimum version that
protects what matters without throttling throughput.

---

## Awareness at scale

Same check as Growth, different failure mode: the product works in segment A, so
the team assumes it sells in segment B. **Segment B has never heard of you**, links
your category to different CEPs (or none), and doesn't look in your channels.

Before any expansion, per segment:

1. Do the right people **in that segment** know we exist? No → reach and CEP
   coverage for that segment *before* segment-specific features.
2. Can they find and buy us through **their** channels? No → directories,
   marketplaces, integrations, pricing transparency for that segment.
3. Will they remember us? No → consistent brand assets across the new channels.
4. **Are we associated with the right CEPs for this segment?** Re-map. The
   struggling moments driving your current customers may not match the new audience.

**Quarterly awareness review (1 hour):** full CEP re-map and re-score per segment ·
full physical availability audit · monthly reach trend across all channels for 3
months (flat despite consistent publishing = channel saturation or CEP mismatch) ·
search your top 3 CEPs per segment the way a buyer would, and see who shows up.

Protocols → `references/pillar-sharp.md`.

---

## Multi-team constraint work

Two layers, and the second is the one that matters:

**Team level** — each team asks "what's blocking our throughput?"

**Company level** — "**whose** constraint is the *system* constraint?" The one
limiting how fast the whole company creates happy paying customers.

The distinction is the whole game. If sales has a pipeline constraint but the
company constraint is retention — customers churning faster than you acquire —
then **sales is a non-constraint.** Their real problem doesn't limit system
throughput. Fix retention first, and say so plainly even though it will be unpopular.

Weekly becomes two meetings: team-level (10 min each) — are we feeding the company
constraint? Company-level (25 min, leadership) — which team is at it, is everyone
else subordinating, has it shifted?

---

## Hiring as elevation

**Only after exploiting and subordinating.** If the constraint hasn't been squeezed
with existing resources and non-constraint capacity hasn't been redirected to help,
hiring adds headcount to a broken system.

**Hire at the constraint. Never at a non-constraint.** A senior hire at the
bottleneck pays for itself in throughput; the same hire elsewhere is pure cost.
"Engineering is always useful" is not a reason.

**Sequence deliberately.** Before hiring: *"When this hire breaks the current
constraint, where does it move next?"* Start planning that subordination before
they start. **Never hire into two constraints at once** — neither gets enough
support during onboarding.

**The role description test:** every JD names the constraint it serves — "this role
exists to increase [throughput metric] by [doing what] at [constraint]." Can't
write the sentence? You don't know why you're hiring.

---

## Multi-quarter initiatives

The 2-week cycle is tactical. Moving upmarket, rebuilding enterprise onboarding,
new geography — those take months.

1. **Every cycle gets a GOLEAN goal serving the initiative.** "This cycle: cut
   enterprise onboarding from 6 weeks to 4 by automating data import." Not "work
   on enterprise onboarding."
2. **Fever-chart it at milestone level** — % done vs. % buffer consumed.
3. **Weekly asks two questions:** what % done, what % of buffer. Buffer outpacing
   completion → act: cut scope, pull in non-constraint capacity, remove blockers.
4. **Three months in progress with no measurable throughput gain means it's
   inventory.** Break it into shipped increments or kill it.

**Before committing:** is this work on the *current* constraint or an investment in
a *future* one? Both are legitimate — but current-constraint work gets priority,
and future-constraint work gets a smaller allocation and a longer buffer.

---

## When the constraint is the business model

Sometimes it isn't a funnel step. **Re-run the napkin test annually** — math that
worked at $500K ARR often fails at $5M:

- The market at your price point is saturating.
- CAC is rising faster than LTV.
- Your best segment is fully penetrated and adjacent ones convert worse.

If required customers > reachable market at current pricing, the fix is the model,
not the funnel: **move upmarket** (fewer customers, longer cycles, more onboarding
complexity), **expand the product** into adjacent jobs for existing customers (the
most capital-efficient option at this stage), or **change the pricing model**
(usage, seat, outcome — each attracts a different segment).

This is strategic. Don't try to solve it inside a GOLEAN cycle. Diagnose with the
napkin test, then run it as a multi-quarter initiative.

---

## Buffers and estimation at scale

External commitments — customer launches, board reporting, partner timelines —
demand honest estimates.

1. **Focused estimates** (50% confidence) per task. **Never pad tasks.**
2. **Critical chain** = longest dependent sequence, including resource
   dependencies (the same person can't do two things at once).
3. **Buffer = chain × 0.4**, at the end. 30-day chain → 12-day buffer → commit day 42.
4. **Schedule as late as possible.** Reduces WIP, prevents premature work.
5. **Relay race** — next person starts on handoff, not on the calendar.
6. **Monitor buffer consumption, not task deadlines.** Green <1/3, yellow 1/3-2/3
   (normal — the buffer is working), red >2/3 (cut to minimum viable delivery,
   redirect non-constraint capacity, re-communicate the range).

**After 3+ weeks of data, stop estimating and measure.** Median cycle time for
internal planning; 85th percentile for external commitments. It's the most accurate
method for ongoing work.

Statistical buffer sizing for regulated or board-level commitments, calibration
exercises → `references/estimation.md`.

### Communicating timelines

- **Customers and stakeholders** — never a point estimate. "Between [aggressive]
  and [buffer end]." With cycle-time data: "50% chance by A, 85% by B."
- **The board** — throughput, not activity. Initiatives serving the constraint,
  cycle time for customer-facing work, green/yellow/red on the current initiative.
- **The team** — buffer status and constraint, not individual deadlines. "40% of
  buffer with 60% of work done — we're healthy."

---

## When the constraint shifts

Operationally the hardest moment at this size.

1. **Name it explicitly.** "Our constraint moved from X to Y. Starting now,
   everything serves Y."
2. **Reassign subordination at team level**, not just individual level. Every team
   not at the constraint serves the team that is — feeding the buffer, removing
   blockers, absorbing overflow, even when that leaves them looking underutilized.
3. **Don't abandon the old constraint.** Put what fixed it on autopilot — content
   calendar, outreach cadence, onboarding automation. Monitor weekly. Don't let it regress.
4. **Expect loud resistance.** KPIs, dashboards, and headcount were justified by the
   old diagnosis. The founder has to re-align the narrative, not just the board.
5. **Update everything in the same meeting.** Buffer columns, WIP tags, constraint
   labels, team assignments, GOLEAN goals. Never let tools lag the decision.
6. **If it oscillates, stop and look for the policy above both steps.**

---

## Full weekly review (25 min)

→ `references/weekly-review.md`, Scaling section. Run it now.
