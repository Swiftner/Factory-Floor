# Estimation

Load when a timeline or estimate is needed, or when a founder asks "how long will
this take?"

You know CCPM, PERT, Monte Carlo, and the cone of uncertainty. This file is how
Factory Floor holds them.

---

## The mindset

- **Never give a point estimate externally.** A range is honest; a single date is a
  fiction. If someone demands one date, give the buffer end date — that's what it's for.
- **Padding individual tasks produces projects that are both padded and late.**
  Safety exists on paper and is consumed by starting late and by work expanding to
  fill the time. Strip it from tasks; pool it at the end.
- **Early finishes evaporate, late finishes propagate.** Unless the next person
  starts on handoff rather than on the calendar, a chain can only get later.
- **Estimates are for deciding, not for committing.** The point of estimating is
  usually "is this a one-week or six-month effort?" — which changes the priority
  decision. That's a different question from "when will it ship."
- **After three weeks of data, stop estimating and measure.** Measurement beats
  estimation for anything ongoing.
- **Being right in aggregate beats being right individually.** A team where every
  task finishes "on time" is padding, not calibrated.

---

## The method

1. **Focused estimate per task** — *"How long if you could just focus, no
   interruptions?"* That's roughly 50% confidence. **Use it as the duration.**
2. **Never add safety to tasks.**
3. **Critical chain** = the longest dependent sequence, counting resource
   dependencies (the same person can't do two tasks at once). In a small team it's
   usually the work flowing through the constraint.
4. **Buffer = critical chain × 0.4**, placed at the end. 20-day chain → 8-day buffer
   → commit day 28.
5. **Schedule as late as possible.** Reduces WIP, prevents premature work.
6. **Run it as a relay race.** Next person starts on handoff, immediately.
7. **Track buffer consumption, not task deadlines.**

**Only the buffer end date is a commitment.**

### The multiplier

| Work type | Multiplier | When |
|---|---|---|
| Well-understood, repeatable | **0.3** | Another integration, another landing page. Low variance. |
| Normal startup work | **0.4** | The default. Most work is here. |
| Novel, high-uncertainty | **0.5** | New tech, first time, external dependencies, regulatory unknowns. |

**0.4 works for the overwhelming majority. Use it unless there's a specific reason
not to.** For regulated or board-level commitments where the buffer must be
justified statistically, size it from per-task safety (the gap between the focused
and the safe estimate) combined in quadrature rather than summed — it lands in the
30-40% range anyway, which is why 0.4 works as a shortcut.

**Larger projects:** feeding buffers at 40% where non-critical paths join the
critical chain; resource buffers are alerts, not time — in a small team, a Slack
message saying "your task is coming up."

**No defined chain** (ops, support, mixed ad-hoc work): plan 80% of available
hours. Commit 32 of 40. Track what eats the other 8 — the pattern reveals the
systemic problem worth fixing.

---

## Estimate, measure, or time-box?

**Estimate** when deciding whether to start at all, when coordinating with external
parties, or when the work is genuinely novel with no historical data.

**Measure** when doing ongoing product work, when you have 3+ weeks of throughput
data, when the work resembles previous work, or when estimating costs more than the
estimate is worth. Median cycle time for internal planning; **85th percentile for
external commitments.**

**Time-box** when the work is experimental, exploratory, or the risk is feasibility
rather than timeline. Two weeks. Either you learn something or the experiment
wasn't focused enough.

**Quick internal sizing:** S = hours, M = 1-2 days, L = 3-5 days. **XL means break
it down** — XL means you don't understand it well enough to estimate, which means
you don't understand it well enough to build.

**The filter that comes first:** is this work on the constraint? Yes → estimate
carefully. No → T-shirt it and move on.

---

## Calibrating to 50%

The whole method depends on one skill most people lack: giving an honest median
rather than a padded number they'd feel safe committing to publicly. It's
learnable in a few hours of practice with feedback.

**Always ask two questions, every time:**

1. *"How long if you could just focus — no interruptions, no surprises?"* → the 50% estimate.
2. *"How long with normal life — interruptions, surprises, things being harder?"* → the 80-90% estimate.

The first goes in the schedule. The gap feeds the buffer. Asking both trains people
to see that "my estimate" was never one number.

**The weekly retrospective is what actually builds calibration.** Review completed
tasks: 50% estimate vs. actual, early or late. Keep a running percentage finishing
at or before estimate:

- **40-60% early** — well calibrated. The buffer is working.
- **70%+ early** — those are 80% estimates. Safety is still hiding in the tasks. Push down.
- **Under 30% early** — unrealistically aggressive. The buffer will be consumed every
  time. Push up slightly.

Run it 4-6 weeks. The pattern of misses also shows where the blind spots are —
consistently blowing integration work while nailing UI work is useful information.

---

## Operational protocols

Quick protocol and fever chart for small teams → `stages/growth.md`.
Full CCPM, cycle-time measurement, and timeline communication → `stages/scaling.md`.
