---
name: factory-floor
description: >
  A startup operating system for prioritization, project management, and execution.
  Combines Goldratt's Theory of Constraints, Maurya's Customer Factory, and Sharp's
  How Brands Grow. Use this skill whenever a founder or startup team needs help with:
  deciding what to work on next, prioritizing a backlog, running a weekly review,
  identifying their current bottleneck, thinking about startup strategy or growth,
  structuring sprints or cycles, evaluating whether to build a feature vs. do sales
  vs. invest in marketing, managing a small team's workload and focus, breaking
  priorities into tasks, setting WIP limits, managing blockers, tracking progress
  against throughput goals, running a 2-week execution sprint, handling a constraint
  shift, estimating how long work will take, communicating timelines to stakeholders,
  understanding why customers buy or don't buy, mapping jobs to be done, running
  switch interviews, identifying struggling moments, or any question about startup
  priorities and execution rhythm. Also trigger when someone mentions "constraint,"
  "bottleneck," "throughput," "WIP," "customer factory," "mental availability,"
  "estimate," "timeline," "deadline," "buffer," "jobs to be done," "JTBD,"
  "struggling moment," "forces of progress," or phrases like "what should we focus
  on," "we're spread too thin," "should we build this or sell first," "how do I
  prioritize," "how do I manage this project," "break this into tasks," "what
  should my sprint look like," "how long will this take," "when will this ship,"
  "why do customers buy," "why did we lose that deal," or "what job does our
  product do."
---

# The Factory Floor

A startup operating system for shipping value to customers. Three frameworks
for finding and fixing your bottleneck, one pre-check to keep you honest,
and the strategic layer that makes them all work: knowing what job your
customer hires you to do.

## The Core Insight

Your startup is a system. Like any system, it has exactly one constraint at any
moment — one thing that limits how fast you create happy customers. Everything
you do either serves that constraint or wastes time. The entire operating system
reduces to four questions asked on repeat:

1. **What job is the customer hiring us to do?** (JTBD)
2. **Where is the bottleneck?** (Goldratt)
3. **Which step in the customer factory is it stuck at?** (Maurya)
4. **Is the real problem that they just don't know we exist?** (Sharp)

Question 1 sits underneath the other three. You can't find the constraint if
you don't know what progress customers are trying to make. You can't fix
acquisition if you don't know what struggling moment brings people to the
funnel. You can't build the right features if you're guessing at the job.

When advising a founder or team, always start from these four questions before
recommending any action.

---

## Triage: Find Your Constraint in 5 Minutes

Most founders don't have clean funnel data. That's fine. Answer these
questions to triangulate:

0. **Do you have paying customers yet?**
   No revenue, no users, or just friends-and-family → the constraint is
   **Problem Validation**. Four tests before you write code:
   - The **not-not test** — "Is it not okay for your target customer to NOT
     have this?" If they can shrug, you don't have authentic demand.
   - The **job test** — "Can you name the specific job customers hire you
     to do, in their words, not yours?" If you can't, you're guessing.
   - The **Lean Canvas test** — Can you answer Maurya's three riskiest
     questions: What are the top 3 problems and how do customers solve them
     today? Will they pay, and have you tested price? What is the simplest
     thing you could build to test whether you've got the problem right?
   - The **napkin test** — Can the math work? Set your 3-year minimum
     success criteria (revenue goal). Divide by annual revenue per customer.
     That's how many customers you need. Now check: does the market have
     that many? If your model needs 10,000 customers but the market has
     2,200, no amount of building fixes it. Change the price, the segment,
     or the model — on the napkin, not in code.
   - The **Mafia Offer** — Before building anything, craft an offer so good
     customers can't refuse: desired outcome + specific metric + timeframe +
     price + risk reversal. Test it by asking for real commitment (deposit,
     pre-order, LOI) — not opinions. If people won't commit to the *offer*,
     building the product is waste. The MVP is what you build to deliver on
     a validated offer, not the other way around.
   Stop building. Observe customers in their real context — what they do,
   not what they say. Look for struggling moments (events that trigger the
   search) and workarounds (what they cobble together now). Those signals
   beat any survey. Watch out for the **Innovator's Bias** — falling in
   love with your solution before validating the problem. Start with
   existing alternatives (what customers use today), not your idea.
   See `references/jtbd.md` for the switch interview protocol and
   `references/pillar-maurya.md` for the full Lean Canvas questions,
   napkin test, and Mafia Offer template.

1. **Are enough of the right people finding you each week?**
   Low traffic, thin pipeline, few demos → the constraint is **Acquisition**.

2. **Do people who sign up reach the "aha moment" quickly?**
   Signups but low engagement, long time-to-value → the constraint is **Activation**.

3. **Do activated users convert to paying?**
   Active users but few pay → the constraint is **Revenue** (pricing, packaging,
   or value demonstration).

4. **Do paying customers stay?**
   High churn despite good activation → the constraint is **Retention**.

5. **Is your team finishing things or juggling too many in parallel?**
   Everything half-done, nothing shipping → the constraint is **WIP/Flow** (a
   process problem, not a funnel step).

**If you're still not sure**, look for these signals:

| Function | Signals it's the constraint |
|---|---|
| Sales/Pipeline | Thin pipeline, sparse demos, deals stalling. Engineering and onboarding have spare capacity. |
| Engineering/Product | Feature requests exceed dev capacity. Sales sells what can't be built. Half-built features accumulate. |
| Onboarding/Activation | Deals close but customers can't go live. Churn starts before expansion. Support queue grows. |
| Awareness | Product works well for those who try it, but too few people enter the funnel. Growth is flat despite good retention. |

**Cross-check with your stage.** The triage tells you where the pain is
*right now*. The table below tells you where it *usually* lives at your
stage. If they disagree, trust the triage — but investigate the mismatch.

| Stage | Typical constraint | What "exploiting" looks like |
|---|---|---|
| Pre-product/market fit | Problem validation — are you solving a real problem? | Observe customers in context. Apply the not-not test. Stress-test the Lean Canvas — especially problem, willingness to pay, and simplest possible solution. |
| Problem/Solution fit | Activation — can they get value from it? | Onboarding optimization, concierge onboarding, reducing time-to-value. |
| Product/Market fit | Acquisition — can you repeatably attract the right people? | Channel experiments, pricing, positioning. |
| Scaling | Retention or Revenue — can you keep them and capture value? | Churn analysis, expansion revenue, pricing optimization. |

---

## Know Your Job

Before diagnosing the constraint, make sure you know what job your customer
hires you to do. If you skip this, every decision downstream — what to
build, who to target, how to message — is a guess.

**A job is the progress a person is trying to make in a specific situation.**
Not a feature request. Not a demographic. Not a trend. A job has three
dimensions: functional (the practical task), emotional (how they want to
feel), and social (how they want to be perceived). The emotional and social
dimensions are usually what tips the purchase decision.

### The forces behind every deal

Four forces govern every purchase:

- **Push**: What's painful about the current situation (creates demand)
- **Pull**: What's attractive about the new solution (creates demand)
- **Anxiety**: Fear about switching — will it work? what's the risk? (kills demand)
- **Habit**: Comfort with the status quo — inertia, sunk costs (kills demand)

**A purchase happens only when Push + Pull > Anxiety + Habit.** If you're
losing deals, don't assume the product is wrong. Check the forces: maybe
the push is weak (the problem isn't painful enough), or anxiety is high
(they don't trust you yet), or habit is strong (the old way is "good enough").

Sometimes the highest-leverage move is not a better feature but a better
guarantee, a simpler onboarding, or a testimonial from someone like them.

### Struggling moments are Category Entry Points

The struggling moment — the specific event that triggers someone to think
"I need to do something different" — is both the origin of every purchase
and a Category Entry Point in Sharp's framework. Identify the 3-5 struggling
moments that repeatedly bring customers to your door. Build mental
availability by becoming relentlessly associated with those moments.

### The 5-minute canvas

After every meaningful customer or prospect conversation, spend 5 minutes:

```
JOB:         [What progress are they trying to make?]
TRIGGER:     [What specific event caused them to look?]
OLD WAY:     [What are they "hiring" today?]
─────────────────────────────────────────────────
PUSH:        [Top struggles with current situation]
PULL:        [What attracted them to us?]
ANXIETY:     [What worries them about switching?]
HABIT:       [What keeps them on the old way?]
─────────────────────────────────────────────────
OUTCOME:     [What does success look like in their words?]
EMOTIONAL:   [How do they want to feel?]
SOCIAL:      [How do they want to be perceived?]
```

After 8-12 canvases, you have enough signal to act. Review them in the
weekly constraint review — do the patterns match your assumptions?

Read `references/jtbd.md` for the full framework: switch interviews, job
mapping, outcome statements, opportunity scoring, and positioning.

---

## Before You Build Anything

This is the check that saves startups from their own instincts.

When a founder says "we need to build feature X," ask first: **"Is the real
problem that not enough people know you exist?"**

Byron Sharp's research across decades of brand data shows that most potential
customers don't know you exist. When your product works (users who try it stay)
but growth is flat, the answer is almost never another feature. It's
**mental availability** — the probability your brand comes to mind when someone
has the problem you solve.

**Run this diagnostic before any growth initiative:**

1. "Do enough of the right people know we exist?" If no → invest in reach,
   content, partnerships, presence where buyers look. Do NOT build another
   feature.
2. "Can they easily find and try/buy us?" If no → fix distribution, signup
   friction, pricing transparency, marketplace presence.
3. "Are we distinctive enough to be remembered?" If no → invest in brand assets
   (visual identity, tone, tagline), not features.

**Why this matters for prioritization:**

- Growth comes from reaching non-buyers, not delighting power users.
- Reach beats frequency. Seen once by 1,000 > seen 10 times by 100.
- Distinctiveness > differentiation. Recognizable > "better."
- Building features when the constraint is awareness is the exact equivalent of
  optimizing a non-constraint machine on the factory floor. It feels productive.
  It changes nothing about throughput.

**The exception: features that ARE distribution.** Some features directly serve
acquisition — integrations that get you listed in a partner's marketplace,
viral sharing mechanics, embeddable widgets, API access that turns customers
into channels. If a feature creates a new path into your funnel, it serves the
constraint even when the constraint is awareness. The test: "Will this feature
bring us new visitors who wouldn't have found us otherwise?" If yes, it's
distribution work wearing a feature hat. Build it.

Your Category Entry Points are your customers' struggling moments — the
specific events that trigger them to seek a solution. Map them using JTBD
interviews, then become the brand associated with those moments.

Read `references/pillar-sharp.md` for the full framework, including Category
Entry Points and the laws of brand growth.

---

## Worked Example

**ConvoAI — AI meeting summaries, B2B SaaS, 8-person team, $40K MRR.**

The founder asks: "Growth has stalled for 3 months. We think we need Slack
integration and CRM sync to compete. What should we work on?"

**Step 1: Triage.**

| Question | Answer |
|---|---|
| Enough people finding you? | ~200 trials/month, mostly from one blog post that went viral 6 months ago. Pipeline is thin. |
| Do signups reach the aha moment? | Yes — 60% activate within the first week. |
| Do activated users pay? | Yes — 35% convert to paid. |
| Do paying customers stay? | Yes — 90% monthly retention. |
| Is the team finishing things? | Mostly, though 2 engineers are split across 3 projects. |

**Diagnosis:** Activation, Revenue, and Retention are healthy. Acquisition is
the constraint. Almost no one is entering the funnel.

**Step 2: Run the "Before You Build" check.**

Users who try ConvoAI love it. Retention is 90%. The product works. Building
Slack integration and CRM sync is optimizing a non-constraint. It will not
move the $40K MRR number.

**Step 3: Exploit the constraint.**

The founder redirects effort to distribution with existing resources:

- Founder spends mornings on outreach, partnerships, and content instead of
  product reviews.
- One engineer moves from CRM sync to building SEO landing pages and an
  integrations directory.
- The CS person collects testimonials and case studies.
- The two engineers on 3 projects drop to 1 project each — finishing > starting.

**Step 4: Subordinate.**

Slack integration and CRM sync go on ice. They'll matter later when acquisition
is no longer the bottleneck. Right now they're inventory — consuming resources,
generating zero new customers.

**Step 5: What changes.**

The team's weekly review metric shifts from "features shipped" to "new trials
generated." When trials climb from 200/month to 500/month and the funnel backs
up at activation or revenue, the constraint has moved. Then — and only then —
revisit the feature backlog.

---

## The System: Goldratt + Maurya

These two frameworks snap together because Maurya built directly on Goldratt.
Read `references/pillar-goldratt.md` and `references/pillar-maurya.md` for the
full detail.

### Goldratt's Five Focusing Steps

1. **Identify** the constraint. Where does work pile up? Where do downstream
   stages starve?

2. **Exploit** the constraint. Squeeze maximum output without spending money.
   If sales is the constraint, the founder sells — no admin, no code reviews.
   If engineering is the constraint, pre-package every spec so the developer
   never waits.

3. **Subordinate** everything else. Non-constraints serve the constraint, even
   when that means they look idle. Idle capacity at a non-constraint is buffer,
   not waste.

4. **Elevate** the constraint. Only after exploiting and subordinating, invest
   real resources (hire, buy tools, outsource).

5. **Repeat.** After elevating, the constraint moves. Never let inertia become
   the constraint.

**What each role does, based on the current constraint:**

| Current constraint | Founder | Developer | Support/CS |
|---|---|---|---|
| Sales/Pipeline | 100% selling. Nothing else. | Build sales tools, demo flow, landing pages. | Case studies, FAQs, onboarding materials. |
| Engineering | Write specs, do QA, handle support to shield the dev. | Protected focus. One task at a time. | QA, bug reports, documentation, workarounds. |
| Onboarding | Help with onboarding calls. Pause selling if queue is full. | Build onboarding automation, setup wizards. | Protected focus on activating customers. |
| Awareness | Content, outreach, partnerships, speaking. | SEO pages, integrations directory, API docs. | Testimonials, case studies, social proof. |

### The Customer Factory (Maurya)

Every business is a **customer factory** — a system that takes in unaware
visitors and turns them into happy customers:

```
Acquisition → Activation → Revenue → Retention → Referral
```

Each step has a conversion rate. The step with the lowest rate relative to your
goal is your constraint. Fix that one. Ignore the others until it moves.

The factory is linear, but growth has loops. Retained customers refer new
ones. Content attracts users who generate data that improves the product that
attracts more users. When you find a reinforcing loop, invest in it — a small
improvement at any point in the loop accelerates the whole cycle.

**Throughput** = the rate at which you create happy paying customers. Not
signups, not pageviews — happy customers who achieve their desired outcome
and pay you for it.

**Key rules:**

- **Throughput > Activity.** Measure deals closed, customers activated — not
  hours worked or tasks in progress.
- **WIP is inventory, and inventory is liability.** A half-built feature
  consumes resources and generates zero revenue.
- **"Stop starting, start finishing."** Nobody begins new work until current
  work is done. If blocked, help someone else finish theirs.
- **Local optimization ≠ global optimization.** Marketing generating more leads
  while activation is broken = pouring water through a sieve.

---

## The Decision Framework

When a founder asks "what should we work on?", walk them through this:

### Step 1: Identify the constraint

Use the Triage questions or map their numbers across the customer factory.
The step with the biggest drop-off relative to their goal is the constraint.

### Step 2: Run the "Before You Build" check

Before any growth initiative, apply Sharp's diagnostic: Do enough people know
we exist? Can they find and try us? Are we distinctive enough to be remembered?
If the answer to any of these is "no," that's the constraint — not the product.

### Step 3: Exploit before elevating

Before suggesting hiring or buying tools, ask what they can do with existing
resources:

- Can the founder reallocate their own time to the constraint?
- Can another team member subordinate their work to feed the constraint?
- Can a process be simplified or automated to remove friction?
- Can batch size be reduced to get faster feedback?

### Step 4: Subordinate non-constraints

Help the team see what they should deliberately NOT work on. The default
answer to every feature request is **no**. Every initiative not serving the
current constraint should be paused, deprioritized, or killed. Say it
directly: "Building feature X does not serve your current constraint. It
should wait." Don't even track rejected requests — if something truly matters,
it will keep coming back.

### Step 5: Size the work

Every initiative should be sized to what the constraint can process. If the
founder can do 5 demos per week, generating 20 leads per week is waste.
Generate 7-8 and keep quality high.

---

## The Execution Loop: GOLEAN

Identifying the constraint tells you *where* to focus. GOLEAN (from Maurya's
*Scaling Lean*) tells you *how to run the sprint*. Use it as a 2-week cycle:

1. **Go** — State the constraint. Set a goal with four numbers: **target**
   (where you want to be), **baseline** (where you are now), **trend** (which
   direction it's moving), and **timeframe** (this cycle). Example: "Increase
   trial signups from 200/mo (baseline, flat trend) to 280/mo by end of
   cycle." Not "work on acquisition."

2. **Observe** — Measure the constraint's current performance. What are the
   numbers right now? What does the funnel look like? Baseline before you act.

3. **Learn** — Run 1-2 focused experiments that target the constraint. Not
   five. Not a roadmap. One or two bets, sized to complete within the cycle.

4. **Evaluate** — Did throughput increase? Not "did we ship the thing" — did
   the constraint actually move? Check the numbers, not the activity log.

5. **Analyze** — What worked? What didn't? Systemize what worked so you don't
   lose it. Kill what didn't so you don't repeat it.

6. **Next** — If the constraint broke (throughput increased and the bottleneck
   visibly shifted), identify the new constraint. If not, run another
   experiment on the same one. Return to Go.

**Cycle length:** 2 weeks. Fast enough to learn, slow enough to execute
meaningfully. If 2 weeks feels too long for your pace, shorten to 1 week but
never run more than 2 experiments per cycle.

See `references/pillar-maurya.md` for the full GOLEAN framework.

---

## Managing Projects Against the Constraint

The triage and decision framework tell you *what* to work on. This section
tells you how to manage that work day-to-day so the constraint stays fed and
nothing else gets in the way.

### Check your team's state first

Before planning the sprint, ask: **what state is the team in?**

- **Falling behind** — backlog grows every week, morale dropping. Reduce scope
  or add capacity before doing anything else. You can't exploit the constraint
  with a team that's drowning.
- **Treading water** — critical work gets done but nothing improves. Reduce
  WIP, consolidate effort, finish things. The fix is focus, not more work.
- **Repaying debt** — momentum is building, compound improvements emerging.
  Protect this time. Don't interrupt with new priorities.
- **Innovating** — low debt, high morale, new value being created. Maintain
  slack. Prevent over-commitment.

Most startup teams oscillate between the first two states. The goal is to
climb to repaying debt and stay there. Every time you add WIP or change
priorities mid-sprint, you push the team back toward treading water.

### Break priorities into constraint-sized tasks

After the weekly review produces your top 3 priorities, break each one into
tasks that can be completed in 1-3 days. Every task should pass the constraint
test: **"Does completing this task directly increase throughput at the
constraint?"** If the answer is "indirectly" or "eventually," it's not a
priority task — it's backlog.

**Sizing rule:** If a task will take longer than 3 days, it's too big. Split
it. Big tasks become WIP. WIP becomes inventory. Inventory is liability.

**Start from the epicenter.** When breaking down a feature, build the thing
it cannot function without first. A blog page starts with the post, not the
sidebar. An onboarding flow starts with the aha moment, not the welcome
email. Work outward from the core.

### WIP limits are non-negotiable

Set your WIP limit to team size. A three-person team has 3 slots for
in-progress work. That's it. Nobody starts new work until a slot opens. If
you're blocked on your task, help someone else finish theirs. In simulations,
teams with strong WIP limits finished **200x more projects** than teams
without them (Larson). This isn't a marginal improvement. It's the difference
between a working system and a stalled one.

When a founder says "but we need to get ahead on X," the answer is: "X is not
the constraint. Starting X now increases WIP, extends lead time on constraint
work, and slows throughput. X waits."

### Feed the constraint buffer

Maintain 2-3 tasks that are fully specified, unblocked, and ready to pull in
the buffer column. The person or process at the constraint should never have
to wait for their next piece of work. If the buffer drops below 2, that's the
team's top priority — refill it.

**Who fills the buffer?** Non-constraint team members. This is one of the most
valuable things an "idle" team member can do: spec work, gather requirements,
prepare assets, remove blockers — whatever the constraint needs to stay at
full speed.

### Track throughput, not activity

The board should answer one question at a glance: **"Are we creating happy
paying customers faster than last week?"**

Track these weekly:
- **Throughput metric:** The number that measures output at the constraint
  (trials generated, customers activated, deals closed — depends on where
  the constraint is).
- **Cycle time:** How long tasks spend in progress. If cycle time is growing,
  WIP is creeping up.
- **Buffer health:** How many ready items sit before the constraint. If it's
  consistently empty, the constraint is starving.

Don't track vanity metrics (tasks completed, story points burned, hours
logged). They measure motion, not progress.

### Respect the delay

Most constraint work has a feedback delay. A content strategy takes 4-8 weeks
to show up in acquisition numbers. An onboarding improvement takes 2-3 cohorts
to show up in activation rates. Founders who don't account for this abandon
correct strategies too early — they start something on Monday, see no movement
by Friday, and pivot. Set a minimum evaluation window for each initiative
(usually one GOLEAN cycle) and don't judge results before it closes. The
signal is coming. It's just delayed.

### Estimate time honestly

Most estimates fail because safety padding gets baked into each task, then
consumed by procrastination (Student Syndrome) and scope creep (Parkinson's
Law). Goldratt's fix: **strip safety from individual tasks and pool it into
a project buffer.**

**The quick protocol:**
1. Get the **focused estimate** — "How long with no interruptions?" (50%
   confidence.)
2. Get the **safe estimate** — "How long with normal life?" (80-90%
   confidence.)
3. Use the focused estimate as the task duration.
4. Pool the difference into a project buffer (sum the gaps, take 50%).
5. The buffer end date is the only date you commit to externally.

**When to estimate vs. measure vs. time-box:**

| Situation | Method |
|---|---|
| Novel work, external commitment | Focused estimates + pooled buffer |
| Ongoing work with 3+ weeks of data | Cycle time measurement (median and 85th percentile) |
| Experiments, learning, customer discovery | Time-box at 2 weeks (GOLEAN cycle) |
| Quick internal sizing | T-shirt: S (hours), M (1-2 days), L (3-5 days). XL = break it down. |

**The two-question filter:** Before estimating anything, ask "Is this work
on the constraint?" If yes, estimate carefully — getting this wrong has
maximum impact. If no, T-shirt size it and move on. The exact duration of
non-constraint work doesn't matter much.

See `references/estimation.md` for the full estimation framework, including
CCPM, PERT, buffer sizing methods, and the cone of uncertainty.

### Monitor with the fever chart

Track two numbers weekly: **% of work completed** vs. **% of buffer
consumed.** If buffer consumption is outpacing completion, you're in
trouble. Three zones:

- **Green (buffer < 1/3 consumed):** On track. Don't fill the slack with
  scope creep.
- **Yellow (buffer 1/3 to 2/3 consumed):** Plan a recovery option. Don't
  panic — the buffer is doing its job.
- **Red (buffer > 2/3 consumed):** Act now. Fix time and budget, flex
  scope — cut features to fit the deadline, never extend the deadline to
  fit features. Redirect non-constraint capacity to the critical chain,
  remove blockers. Half a shipped product beats a half-finished one.

At the weekly review, the simplified check: "What % of the work is done?
What % of our time is gone?" If time is ahead of work, investigate.

### Run the relay race

When someone finishes a task, the next person starts **immediately** — not
on the scheduled date. In traditional project management, early finishes
evaporate (the next task starts on its calendar date) while late finishes
accumulate. The relay race behavior is what makes buffers work: early
finishes propagate forward, shrinking the buffer less than planned.

Tell the team: "I don't care when individual tasks finish. I care about
buffer consumption. Start when the predecessor hands off. Work with focus.
Hand off immediately when done."

### Handle blockers immediately

A blocker on constraint work is an emergency. A blocker on non-constraint work
is a nuisance. Treat them differently:

- **Constraint blocker:** Drop everything. The founder, the developer, whoever
  is available — clear it now. Every hour the constraint is blocked is an hour
  of lost throughput for the entire company.
- **Non-constraint blocker:** Note it, move on. Work on something else that
  feeds the constraint. Come back to it when the constraint is fed.

### When the constraint shifts

This is the hardest moment operationally. The weekly review reveals the
constraint has moved — say, from acquisition to activation. What happens:

1. **Name it explicitly.** "Our constraint has moved from acquisition to
   activation. Starting now, everything serves activation."

2. **Reassign subordination roles.** Use the subordination matrix. The
   founder's calendar, the developer's sprint, the CS person's priorities —
   all shift to serve the new constraint.

3. **Don't abandon the old constraint entirely.** The reason it moved is
   because you fixed it. Maintain the systems that fixed it (the content
   calendar, the outreach cadence, whatever) but on autopilot. Don't let it
   regress.

4. **Expect resistance.** The team built momentum on the old constraint.
   Shifting feels like waste. It's not. It's the system working. The
   constraint moved because you succeeded. Now succeed at the next one.

5. **Update the board.** Buffer column, WIP tags, constraint labels — update
   them in the same meeting. Don't let the tool lag behind the decision.

---

## Anti-Patterns

Watch for these common violations of constraint thinking:

1. **"Let's keep everyone busy."** Utilization of non-constraints should vary
   with what the constraint can absorb. Idle time at a non-constraint is buffer.

2. **"We need more features to compete."** Usually a mental availability problem
   disguised as a product problem. If users who try it stay, the product works.

3. **"Let's do all five things in parallel."** Each parallel initiative costs
   ~20% productivity in context-switching. With 5 parallel projects, a team
   loses ~75% of capacity.

4. **"We should optimize retention before we have enough customers."** You can't
   measure retention with 12 customers. Fix acquisition first unless churn is
   catastrophic.

5. **"Our developer is idle, let's start a new feature."** If engineering isn't
   the constraint, use slack time for maintenance, docs, tech debt, or helping
   the constraint.

6. **"Sales closed 10 deals but onboarding can handle 3 per week."** The system
   just created 7 units of inventory. Slow sales intake or elevate onboarding
   capacity first.

7. **"Customers will love this once they see it."** The waking dream — your
   internal model of the customer feels true but may not be. If you can't
   point to observed behavior (not survey responses, not "they said they'd
   buy it") showing customers can't be indifferent, you may be optimizing a
   system with no authentic demand. Apply the not-not test before investing
   further.

8. **"We interviewed 20 people and they all said they'd pay."** People are
   opaque to themselves. Stated intent is not demand. Watch what customers
   actually do — their workarounds, their frustrations, where they spend
   time and money today. Observation beats interviews for validating whether
   the problem is real.

9. **"Only Alex understands how that works."** If one person is the only one
   who can do critical work, that person IS the constraint — and their
   heroism prevents anyone else from helping. Document it, pair on it, or
   automate it. A bus factor of 1 is a throughput ceiling.

10. **"I just need to build it and they'll get it."** The Innovator's Bias —
    falling in love with your solution before validating the problem. Maurya:
    "When you've decided you want to build a hammer, everything starts
    looking like a nail." Intelligence makes it worse, not better. The
    antidote: start with existing alternatives (what customers use today),
    not your idea. New problems worth solving come from old solutions.

---

## The Weekly Constraint Review

### Light Review (teams of 1-5, 10 minutes)

No diagrams, no prep. Do this standing up or in a 10-minute call.

1. **Name the constraint** (2 min) — "What is our constraint right now?" Say it
   in one sentence. Has it shifted since last week?

2. **Throughput check** (3 min) — Look at 3-5 numbers: new trials, activations,
   deals closed, revenue, churn. What moved? What didn't?

3. **Where's the pile?** (2 min) — Look at the board. Where is work
   accumulating? Does the empirical pile match the declared constraint?

4. **Three priorities** (3 min) — Top 3 for the week, ranked by constraint
   impact. Name one thing you're explicitly NOT doing. Done.

### Full Review (teams of 5+, 25 minutes)

Same four phases, expanded with a diagram and more structured discussion.

**Prep:** Generate a Customer Factory Funnel diagram with current numbers.
See `references/weekly-diagrams.md` for the template and rendering instructions.

**Phase 1 — Name the constraint (5 min)**
- "What is our current constraint?" Say it in one sentence.
- "Has it shifted?" If yes, update subordination assignments.
- Reference the funnel diagram.

**Phase 2 — Throughput check (5 min)**
- Review the 3-5 metrics that matter. "What moved? What didn't? Why?"

**Phase 3 — Buffer and flow (10 min)**
- "Is the constraint fed? Does the person/process at the bottleneck have
  everything they need?"
- "Where is work piling up?"
- Traffic light for active initiatives:
  - 🟢 On track — buffer healthy.
  - 🟡 At risk — buffer draining. Make a recovery plan.
  - 🔴 Behind — redirect non-constraint capacity to help.

**Phase 4 — Focus decisions (5 min)**
- Top 3 priorities, ranked by constraint impact.
- "What are we explicitly NOT doing?"
- One small improvement to make at the constraint this week.

---

## Applying This to Tools

This framework is tool-agnostic. The tool should make the constraint visible and
WIP limits obvious. When helping someone set up their tool:

- The board should show where work piles up (the constraint is visible).
- Every task should be taggable by which constraint it serves.
- WIP limits should be visible in column/section names.
- Weekly review metrics should be accessible in under 2 minutes.
- A "buffer" stage before the constraint — 2-3 ready items so the bottleneck
  never starves.

These principles apply to any tool — Linear, Asana, Notion, Monday, Trello,
Jira, GitHub Projects, a whiteboard with sticky notes. Ask for help setting up
your specific tool and these principles will be applied to it.

---

## Key Vocabulary

| Term | Meaning in this system |
|---|---|
| **Constraint** | The one thing currently limiting throughput. |
| **Throughput** | Rate of creating happy paying customers. Not activity. |
| **Customer factory** | Your business as a system: acquisition → activation → revenue → retention → referral. |
| **Exploit** | Maximize constraint output with existing resources. |
| **Subordinate** | Non-constraints serve the constraint, even if it means they're idle. |
| **Elevate** | Invest real money/people to increase constraint capacity. Only after exploiting and subordinating. |
| **Mental availability** | The probability your brand comes to mind in a buying situation. |
| **Physical availability** | How easy it is to find, try, and buy your product. |
| **Category Entry Point** | A situation or need that triggers someone to seek a solution in your category. |
| **WIP** | Work in progress. Inventory. A liability, not an asset. |
| **Buffer** | Slack capacity or queued work that protects the constraint from starving. |
| **Authentic demand** | Customers cannot be indifferent — not-having your product is not okay. The precondition for a working customer factory. |
| **Not-not test** | "Is it not okay to NOT have this?" If customers can shrug, you don't have demand yet. |
| **Waking dream** | A founder's internal model of customer reality that feels true but isn't. Cured by observation, not interviews. |
| **Peanut buttering** | Spreading resources thinly across all priorities instead of concentrating on the constraint. Feels fair. Kills throughput. |
| **Job (JTBD)** | The progress a customer is trying to make in a specific situation. Has functional, emotional, and social dimensions. |
| **Struggling moment** | The specific event that triggers someone to seek a solution. Also a Category Entry Point. |
| **Forces of progress** | Push + Pull (promote switching) vs. Anxiety + Habit (block switching). Purchase happens when promoting > blocking. |
| **Switch interview** | A 30-60 minute interview reconstructing the buying timeline. Reveals the causal forces behind a purchase or non-purchase. |
| **Hiring / firing** | Customers "hire" products to do a job and "fire" them when something does it better. The real competitive set is whatever they'd hire instead. |
| **Innovator's Bias** | Falling in love with your solution before validating the problem. The #1 cause of startup failure. Antidote: start with existing alternatives. |
| **Mafia Offer** | An offer so good customers can't refuse — tested before building an MVP. Requires real commitment (money), not opinions. |
| **Napkin test** | 5-minute viability check: goal / revenue per customer = required customers. If market can't support it, change the model. |
