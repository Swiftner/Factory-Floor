# Scaling — $100K+ MRR or 10+ People

**Mindset:** the constraint is usually not a resource. It's a rule, an incentive, or
a decision right somebody holds. Resources are visible and get discussed; policies
are invisible because everyone stopped noticing them.

The team has also built identity around the *last* constraint — dashboards, KPIs,
headcount justifications, titles. Moving it now means moving people's sense of what
they're for. Expect that and say it out loud.

**Don't accept:** "we need to hire" before exploit and subordinate · an initiative
three months in with no throughput to show · a board deck reporting activity · a team
optimizing a local metric while system throughput is flat.

**Where that bends:** long lead-time roles are a real exception — a four-month search
for a constraint that will still be there is planning, not premature elevation. Same
for compliance and security work gating deals you can already name. The test isn't
"does it move the metric this cycle" but "would we be blocked without it."

---

## Policy constraints

A VP overriding sprint priorities with pet projects · three approvals before anything
ships · OKRs rewarding local metrics · one uniform quality gate over experiments and
production alike · one person who is the only approver.

**Two signatures.** Triage names a funnel step, you fix it, throughput doesn't move.
Or the constraint **oscillates** — fix acquisition, moves to activation, back to
acquisition. Oscillation means the real constraint sits above both.

Also watch **bus factor 1** — one person who is the only one who can do a required
step. That's a throughput ceiling wearing a name. Document, pair, or automate.

**The fix:** name the policy out loud, then *"if we removed this, what would break?"*
Nothing → remove it. Something real → find the minimum version that protects it
without throttling throughput.

## Two layers of constraint

**Team level** — "what's blocking our throughput?"
**Company level** — "**whose** constraint is the *system* constraint?"

The distinction is the whole game. If sales has a pipeline constraint but the company
constraint is retention, **sales is a non-constraint** — their real problem doesn't
limit system throughput. Say so plainly even though it's unpopular.

Weekly becomes two meetings: team level (10 min each — are we feeding the company
constraint?), company level (25 min, leadership — who's at it, is everyone else
subordinating, has it shifted?).

## Hiring as elevation

**Only after exploit and subordinate.** Otherwise you're adding headcount to a broken
system.

**Hire at the constraint, never at a non-constraint.** "Engineering is always useful"
is not a reason.

**Before hiring:** *"When this hire breaks the current constraint, where does it move
next?"* Start planning that subordination before they start. **Never hire into two
constraints at once.**

**Role description test:** every JD names the constraint it serves — "this role exists
to increase [metric] by [doing what] at [constraint]." Can't write it? You don't know
why you're hiring.

## Multi-quarter initiatives

Each cycle gets a goal serving the initiative — *"cut enterprise onboarding from 6
weeks to 4 by automating data import,"* not "work on enterprise onboarding." Fever-
chart it at milestone level. **Three months in progress with no measurable throughput
gain means it's inventory** — break it into shipped increments or kill it.

Before committing: current constraint, or an investment in a future one? Both are
legitimate, but current gets priority and future gets a smaller allocation and a
longer buffer.

## Awareness per segment

The failure mode here is expansion: the product works in segment A, so the team
assumes it sells in B. **Segment B has never heard of you** and links the category to
different CEPs. Re-map per segment before building segment-specific features →
`references/playbooks.md`.

## When the constraint is the model

Re-run the napkin test annually → `references/playbooks.md`. If required customers
exceed reachable market at current pricing, the fix is the model, not the funnel.
Diagnose with the napkin test, then run it as a multi-quarter initiative — not inside
a two-week cycle.

## When the constraint shifts

1. **Name it explicitly.** "Our constraint moved from X to Y. Everything serves Y."
2. **Reassign at team level**, not individual. Every team not at the constraint feeds
   the buffer, removes blockers, absorbs overflow — even looking underutilized.
3. **Don't abandon the old one.** Put what fixed it on autopilot. Monitor weekly.
4. **Expect loud resistance.** KPIs and headcount were justified by the old diagnosis.
5. **Update everything in the same meeting** — buffer columns, WIP tags, labels, goals.
6. **If it oscillates, stop and look for the policy above both steps.**

## Communicating timelines

Customers: never a point estimate — "between [aggressive] and [buffer end]." Board:
throughput, not activity. Team: buffer status, not individual deadlines. Method →
`references/playbooks.md`.
