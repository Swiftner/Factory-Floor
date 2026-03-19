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
  shift, or any question about startup priorities and execution rhythm. Also trigger
  when someone mentions "constraint," "bottleneck," "throughput," "WIP," "customer
  factory," "mental availability," or phrases like "what should we focus on," "we're
  spread too thin," "should we build this or sell first," "how do I prioritize,"
  "how do I manage this project," "break this into tasks," or "what should my
  sprint look like."
---

# The Factory Floor

A startup operating system for shipping value to customers. Two frameworks for
finding and fixing your bottleneck, one pre-check to keep you honest.

## The Core Insight

Your startup is a system. Like any system, it has exactly one constraint at any
moment — one thing that limits how fast you create happy customers. Everything
you do either serves that constraint or wastes time. The entire operating system
reduces to three questions asked on repeat:

1. **Where is the bottleneck?** (Goldratt)
2. **Which step in the customer factory is it stuck at?** (Maurya)
3. **Is the real problem that they just don't know we exist?** (Sharp)

When advising a founder or team, always start from these three questions before
recommending any action.

---

## Triage: Find Your Constraint in 5 Minutes

Most founders don't have clean funnel data. That's fine. Answer these
questions to triangulate:

0. **Do you have paying customers yet?**
   No revenue, no users, or just friends-and-family → the constraint is
   **Problem Validation**. Stop building. Interview potential customers.
   Validate the problem is real and painful enough to pay for. See the
   Constraint Cascade below for what "exploiting" looks like at this stage.

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
| Pre-product/market fit | Problem validation — are you solving a real problem? | Customer interviews, not code. Lean Canvas stress-testing. |
| Problem/Solution fit | Activation — can they get value from it? | Onboarding optimization, concierge onboarding, reducing time-to-value. |
| Product/Market fit | Acquisition — can you repeatably attract the right people? | Channel experiments, pricing, positioning. |
| Scaling | Retention or Revenue — can you keep them and capture value? | Churn analysis, expansion revenue, pricing optimization. |

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

Help the team see what they should deliberately NOT work on. Every initiative
not serving the current constraint should be paused, deprioritized, or killed.
Say it directly: "Building feature X does not serve your current constraint. It
should wait."

### Step 5: Size the work

Every initiative should be sized to what the constraint can process. If the
founder can do 5 demos per week, generating 20 leads per week is waste.
Generate 7-8 and keep quality high.

---

## The Execution Loop: GOLEAN

Identifying the constraint tells you *where* to focus. GOLEAN (from Maurya's
*Scaling Lean*) tells you *how to run the sprint*. Use it as a 2-week cycle:

1. **Go** — State the constraint. Set a specific, measurable goal for improving
   it this cycle. "Increase trial signups from 200/mo to 280/mo" not "work on
   acquisition."

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

### Break priorities into constraint-sized tasks

After the weekly review produces your top 3 priorities, break each one into
tasks that can be completed in 1-3 days. Every task should pass the constraint
test: **"Does completing this task directly increase throughput at the
constraint?"** If the answer is "indirectly" or "eventually," it's not a
priority task — it's backlog.

**Sizing rule:** If a task will take longer than 3 days, it's too big. Split
it. Big tasks become WIP. WIP becomes inventory. Inventory is liability.

### WIP limits are non-negotiable

Set your WIP limit to team size. A three-person team has 3 slots for
in-progress work. That's it. Nobody starts new work until a slot opens. If
you're blocked on your task, help someone else finish theirs.

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
