# Estimation — How to Think About Time on a Project

## Why estimates fail

Before learning how to estimate better, understand why the default approach
is structurally broken. There are four forces working against you, and they
don't cancel each other out — they compound.

### Force 1: Student Syndrome

Named by Goldratt. When people are given generous time for a task, they
don't start early — they start late. A developer given 10 days for a 5-day
task doesn't begin on day 1 and finish on day 5 with 5 days to spare. They
begin on day 6. Now the 5-day task has zero buffer. Any surprise — a sick
day, a dependency, a harder-than-expected problem — blows the deadline.

This isn't laziness. It's rational human behavior. When a deadline feels
far away, other urgent things take priority. The "safe" estimate created
the illusion of slack, and the illusion consumed the reality.

### Force 2: Parkinson's Law

"Work expands to fill the time available for its completion." (Cyril
Northcote Parkinson, 1955.)

If the project plan says a task takes 5 days, it takes 5 days — even when
the real work is 3 days. The remaining 2 days get filled with polishing,
scope creep, gold-plating, or just a slower pace. Nobody reports a task
as "done early" because (a) there's no incentive to, (b) it might mean
they estimated wrong, and (c) the next task isn't ready to start anyway.

The result: safety time embedded in individual task estimates is consumed
by the tasks themselves, not available to protect the project.

### Force 3: The asymmetry of early and late

This is the mathematical killer. In traditional scheduling:
- If Task A finishes 2 days early, Task B does NOT start 2 days early.
  It starts on its scheduled date. The 2-day gain is wasted.
- If Task A finishes 2 days late, Task B DOES start 2 days late.
  The 2-day loss propagates.

Early finishes evaporate. Late finishes accumulate. Over a chain of tasks,
the project can only get later, never earlier. This is why padding every
task with safety doesn't protect the project — the math only flows one
direction.

### Force 4: The planning fallacy

Daniel Kahneman and Amos Tversky identified this in 1979. People
systematically underestimate the time required to complete tasks, even
when they have direct experience with similar tasks running over. This
isn't corrected by awareness — knowing about the planning fallacy doesn't
fix it. Kahneman called it "one of the most robust findings in the
psychology of judgment."

The planning fallacy combines with optimism bias: we imagine the best-case
scenario for our task and treat it as the expected case. We plan for the
version where nothing goes wrong, dependencies arrive on time, and we
don't get interrupted.

Douglas Hofstadter captured this recursion: "It always takes longer than
you expect, even when you take into account Hofstadter's Law."

### The combined effect

When you ask someone to estimate a task, four things happen simultaneously:
1. They add safety (padding for uncertainty)
2. Student Syndrome wastes the safety upfront (late start)
3. Parkinson's Law consumes any remaining safety (work expands)
4. The planning fallacy means their "aggressive" estimate was already
   optimistic

The net result: individual task estimates with embedded safety produce
projects that are BOTH padded AND late. The safety exists on paper but
not in practice.

This is why Goldratt built a completely different system.

---

## Goldratt's Critical Chain Method

Critical Chain Project Management (CCPM) was introduced by Eli Goldratt in
his 1997 book *Critical Chain*. It applies the Theory of Constraints to
project scheduling. The core insight: **stop protecting individual tasks
and start protecting the project.**

### The method in six steps

**Step 1: Get aggressive (focused) estimates.**

Ask for 50% confidence estimates — "how long if things go reasonably well,
with no major surprises?" This is NOT the best case. It's the median: half
the time you'd finish faster, half the time slower. Most people naturally
estimate at 80-90% confidence (the safe estimate). The gap between 50% and
80-90% is pure safety padding.

Practical tip: Ask "how long if you could just focus on this with no
interruptions?" That's close to the 50% estimate. Then ask "how long with
normal interruptions and surprises?" That's the 80% estimate. Use the
first number as the task duration.

**Step 2: Identify the critical chain.**

The critical chain is the longest sequence of dependent tasks, considering
both task dependencies AND resource dependencies. If the same person does
Task A and Task C, they can't happen in parallel even if they're not
logically dependent. The critical chain accounts for this.

In a small team, the critical chain is usually obvious: it's the sequence
of work flowing through the constraint (the bottleneck person or function).

**Step 3: Schedule tasks as late as possible.**

Unlike traditional scheduling (start everything as early as possible),
CCPM schedules tasks to start as late as possible. This reduces WIP,
prevents premature work, and concentrates effort.

**Step 4: Strip safety from tasks, pool it into buffers.**

This is the key innovation. Instead of each task carrying its own padding,
you aggregate safety into three types of buffers:

- **Project buffer:** Placed at the END of the project (after the last
  critical chain task, before the delivery date). Sized at 30-50% of the
  critical chain duration. This protects the commitment date.

- **Feeding buffers:** Placed where non-critical paths feed INTO the
  critical chain. Sized at 30-50% of the feeding chain duration. These
  protect critical chain tasks from delays in non-critical work.

- **Resource buffers:** Not time — these are alerts. A heads-up to the
  next person on the critical chain: "Your task is coming up. Be ready."
  In a small team, this is as simple as a Slack message.

**Why pooling works (the statistics):** If you have 10 tasks, each with
2 days of safety, that's 20 days of safety scattered across the project.
But you don't need 20 days — statistical aggregation means the overruns
on some tasks cancel with the underruns on others. A pooled buffer of
8-10 days protects the project better than 20 days scattered across tasks,
because the pooled buffer actually gets used as a buffer instead of being
consumed by Student Syndrome and Parkinson's Law.

**Step 5: Run the project like a relay race.**

This is the behavioral shift. In a relay race, the runner doesn't wait for
their scheduled time slot — they start the moment the baton arrives.
Similarly, when a predecessor task finishes (early or on time), the next
person starts IMMEDIATELY, not on the scheduled date.

This is how early finishes propagate. In traditional scheduling they don't.
In CCPM, they do — because there are no fixed task start dates, only the
buffer end date (the commitment).

Tell the team: "I don't care when individual tasks finish. I care about
buffer consumption. Start when the predecessor hands off. Work with focus.
Hand off immediately when done."

**Step 6: Monitor buffer consumption, not task deadlines.**

Track exactly two numbers: % of critical chain completed, and % of project
buffer consumed. Plot them on a fever chart.

### Buffer sizing: three methods

**Method 1: Goldratt's 50% rule (simplest)**
Buffer = 50% of the critical chain duration using aggressive estimates.
If the critical chain is 20 days (aggressive), the project buffer is 10
days. Commitment date = day 30.

This is crude but surprisingly effective. It tends to oversize buffers
slightly, which is the safe direction to err in.

**Method 2: Root Square Error Method (RSEM)**
For each task on the critical chain, calculate: safety = (safe estimate -
aggressive estimate). Square each safety. Sum the squares. Take the square
root. That's your buffer.

Buffer = sqrt(sum((safe_i - aggressive_i)^2))

This is statistically better because it accounts for the fact that
independent task variances don't add linearly — they add as square roots
(central limit theorem). RSEM produces smaller, more accurate buffers.

Use RSEM if you have more than 5-6 tasks in the chain. For anything
smaller, the 50% rule is fine.

**Method 3: The capacity shortcut (plan 80% of capacity)**
If you don't want to do per-task estimation at all, use the simplest
possible buffer: plan only 80% of available hours in a week. In a 40-hour
week, commit to 32 hours of work. The other 8 hours are your buffer.

This absorbs customer emergencies, technical surprises, demos that run
long, and the general chaos of startup life. Track what consumes the
buffer weekly — patterns reveal systemic problems worth fixing.

---

## Practical Estimation Techniques

### PERT estimation

Program Evaluation and Review Technique (1950s). For each task, get three
estimates:
- O = Optimistic (everything goes perfectly)
- M = Most likely (normal conditions)
- P = Pessimistic (serious problems, but not catastrophic)

Expected duration = (O + 4M + P) / 6

The weighting toward M makes this more realistic than a simple average.
For CCPM, use M as your aggressive estimate and P as your safe estimate.
The difference feeds the buffer.

**Example:**
- Optimistic: 2 days
- Most likely: 4 days
- Pessimistic: 10 days
- PERT estimate: (2 + 16 + 10) / 6 = 4.7 days
- For CCPM: task duration = 4 days, safety = 6 days (contributes to buffer)

### Relative estimation (T-shirt sizes)

Instead of estimating in hours/days (absolute), estimate in relative
complexity. "Is this task bigger or smaller than that task?" Humans are
much better at relative comparison than absolute prediction.

**T-shirt sizing (fastest):**
S = a few hours, M = 1-2 days, L = 3-5 days, XL = more than a week.

Rule: If it's XL, break it down. Nothing should be XL. XL means you
don't understand the task well enough to estimate it, which means you
don't understand it well enough to build it.

### Cycle time measurement

Instead of estimating forward, measure backward. Track how long tasks
actually take from start to done. After 15-20 completed tasks, you have
a distribution. Use the distribution to predict future work.

- Median cycle time: 50% of tasks complete in this time or less.
- 85th percentile: 85% of tasks complete in this time or less.
  (This is your "safe" promise for external commitments.)

**This is the most accurate method for ongoing work.** It replaces
estimation with measurement. To start: track completion dates in your
tool. After 3-4 weeks of data, you have enough to use cycle time for
predictions.

### Monte Carlo forecasting

If you know your historical throughput (tasks completed per week) and the
number of remaining tasks, you can simulate thousands of possible futures.

Simple version:
1. Count remaining tasks (say 12).
2. Measure weekly throughput over the last 6 weeks (say: 3, 2, 4, 3, 2, 3).
3. Randomly sample from that throughput distribution, week by week, until
   all 12 tasks are done.
4. Repeat 1,000 times.
5. The distribution of completion dates gives you confidence levels:
   "50% chance of finishing by March 28, 85% chance by April 8."

Monte Carlo is overkill until you have 6+ weeks of throughput data. Start
with cycle time measurement first.

### The cone of uncertainty

Barry Boehm (1981), later formalized by Steve McConnell. At the start of
a project, estimates can be off by 4x in either direction. As the project
progresses and uncertainty resolves, the cone narrows:

| Project phase | Estimate range |
|---|---|
| Initial concept | 0.25x to 4x |
| Requirements defined | 0.5x to 2x |
| Detailed design | 0.67x to 1.5x |
| Code complete | 0.8x to 1.25x |

**Implication:** An estimate given before you've started building is almost
worthless as a point estimate. Always communicate ranges, not dates.
"2 to 8 weeks" is honest. "4 weeks" is a fiction.

---

## When to Estimate vs. When to Measure

### Estimate when:
- You need to decide whether a project is worth starting at all
  (Is this a 1-week or 6-month effort? That changes the priority decision.)
- You need to coordinate with external parties (customer launches, events,
  partner timelines)
- The work is genuinely novel — you've never done anything like it before,
  so you have no historical data

### Measure (don't estimate) when:
- You're doing ongoing product development (features, bugs, improvements)
- You have 3+ weeks of throughput data
- The work is similar in nature to previous work (another API integration,
  another onboarding improvement, another landing page)
- The cost of estimating exceeds the value of the estimate

### Time-box (don't estimate or measure) when:
- The work is experimental (will this approach even work?)
- You're exploring, not building (customer interviews, market research)
- The risk is in feasibility, not timeline

For experiments: use 2-week time-boxed cycles (GOLEAN sprints). Don't
estimate how long the experiment takes — time-box it. Either you learn
something in 2 weeks or the experiment wasn't focused enough.

---

## Estimation for Startups: The Cheat Sheet

### The two-question filter

Before estimating anything, ask:

**"Is this work on the constraint?"**

If YES → estimate carefully. The constraint's capacity determines system
throughput. Getting this wrong has maximum impact. Use PERT or cycle time.
Size the buffer explicitly.

If NO → don't estimate precisely. The exact duration of non-constraint
work doesn't matter much (Goldratt's insight). As long as it finishes
before the constraint needs it, the timing is fine. Use T-shirt sizing
at most. Focus estimation effort where it matters.

### The startup estimation protocol

For a small team (2-5 people):

**1. Break work into tasks no larger than 3 days.**
If a task feels bigger than 3 days, you don't understand it well enough.
Break it down or do a spike (a short time-boxed investigation) first.

**2. Get the focused estimate.**
Ask: "How long if you could just focus, no interruptions?" This is close
to 50% confidence.

**3. Get the safe estimate.**
Ask: "How long with normal life — interruptions, surprises, things being
harder than expected?" This is close to 80-90% confidence.

**4. Use the focused estimate as the task duration.**
Do NOT add safety to the task.

**5. Pool the safety into a project buffer.**
Take the difference between safe and focused for each task on the critical
chain. Sum the differences and take 50% for simplicity.

Buffer = 50% x sum(safe_i - focused_i) for each critical chain task

**6. Commit to the buffer end date.**
This is the ONLY date you tell the customer, the board, or yourself.
Internal task dates are targets, not commitments.

**7. Track buffer consumption weekly.**
At each weekly review, plot: % of critical chain complete vs. % of project
buffer consumed. Use the fever chart (green/yellow/red zones).

### Quick reference: estimation by situation

| Situation | Method | Effort |
|---|---|---|
| "Should we do this at all?" | T-shirt size + PERT for constraint tasks | 15 min |
| "When will this ship?" (novel work) | CCPM: focused estimates + buffer | 30-60 min |
| "When will this ship?" (ongoing work) | Cycle time data + Monte Carlo | 5 min |
| "How should we plan the week?" | WIP limits + buffer check | 5 min (in weekly review) |
| Customer asks for a delivery date | 85th percentile cycle time or buffer end date | 2 min |
| Experiment / learning work | Time-box at 2 weeks | 0 min |

### The 2x rule (emergency heuristic)

If you have no data, no history, and need a number right now: take your
gut estimate and multiply by 2. This is crude but empirically decent.
The planning fallacy and optimism bias typically produce estimates that
are 50-75% of actual duration. Doubling approximately corrects for this.

Use this ONLY when you truly have no better option. Replace it with cycle
time measurement as soon as you have 3 weeks of data.

---

## Buffer Management: The Fever Chart

The only project tracking that matters in the CCPM framework.

### How it works

Plot two numbers:
- % of critical chain completed (how much work is done)
- % of project buffer consumed (how much safety is used)

```
100% +---------------------------------+
     |            RED                  |
     |         Act now.               |
 67% +- - - - - - - - - - - - - - - - +
     |          YELLOW                |
     |      Plan recovery.            |
 33% +- - - - - - - - - - - - - - - - +
     |          GREEN                 |
     |        On track.               |
  0% +---------------------------------+
     0%                            100%
        % of critical chain done
```

**Green (buffer consumed < 1/3):** Healthy. No action needed. Resist the
temptation to "use the extra time" on nice-to-haves.

**Yellow (buffer consumed 1/3 to 2/3):** Caution. Develop a recovery plan
but don't necessarily execute it. Being in yellow is normal — the buffer
is doing its job.

**Red (buffer consumed > 2/3):** Act now. Execute the recovery plan.
Common actions:
- Cut scope to the minimum viable delivery
- Redirect non-constraint team members to help the critical chain
- Remove blockers immediately (the founder's job)
- Communicate the risk to stakeholders with a revised range

### Simplified buffer check for weekly review

At each weekly review, ask two questions:

1. "What percentage of the work is done?"
2. "What percentage of our time/buffer is gone?"

If #2 > #1, you're consuming buffer faster than completing work — yellow
or red territory. If #1 > #2, you're ahead — green.

---

## Communicating Timelines

### To customers and stakeholders

Never give a point estimate. Always give a range with confidence.

**Template:** "We expect to deliver between [aggressive date] and [buffer
end date]. Based on our current progress, we're tracking toward [current
projection]."

If using cycle time data: "Based on our historical throughput, there's a
50% chance of completing by [date A] and an 85% chance by [date B]."

### To the board / investors

Use throughput metrics, not project timelines:
- "We shipped X initiatives this month that serve the [constraint]."
- "Our cycle time for customer-facing work is Y days."
- "We're in the [green/yellow/red] zone on our current initiative."

### To the team

Communicate buffer status and constraint, not individual task deadlines.
"We've consumed 40% of our buffer with 60% of the work done — we're
healthy. Keep the relay race going."

The key behavior: when someone finishes a task, they notify the next
person immediately and hand off. No waiting for the scheduled start date.
The "relay race" is the behavioral mechanism that lets early finishes
propagate instead of evaporating.

---

## Key References

### Essential reading
- **Eli Goldratt, *Critical Chain* (1997):** The source text for CCPM.
- **Mike Cohn, *Agile Estimating and Planning* (2005):** Practical
  estimation for agile teams.

### Deeper dives
- **Steve McConnell, *Software Estimation: Demystifying the Black Art*
  (2006):** Comprehensive treatment of estimation science and the cone
  of uncertainty.
- **Daniel Kahneman, *Thinking, Fast and Slow* (2011):** Chapter on the
  planning fallacy.
- **Vasco Duarte, *No Estimates* (2016):** The case for replacing
  estimation with throughput measurement.

### Key concepts index
- **Student Syndrome:** Goldratt, *Critical Chain*, Chapter 13.
- **Parkinson's Law:** Cyril Northcote Parkinson, *The Economist*, 1955.
- **Planning Fallacy:** Kahneman & Tversky, 1979.
- **Hofstadter's Law:** Douglas Hofstadter, *Gödel, Escher, Bach*, 1979.
- **Cone of Uncertainty:** Barry Boehm, 1981; Steve McConnell, 2006.
- **Little's Law:** WIP = Throughput x Lead Time. John Little, 1961.
- **Relay Race behavior:** Goldratt, *Critical Chain*.
- **Fever Chart:** CCPM buffer monitoring tool. Goldratt, *Critical Chain*.
