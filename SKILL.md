---
name: factory-floor
description: >
  A startup operating system for prioritization and project management based on
  Goldratt's Theory of Constraints, Ash Maurya's Customer Factory, and Byron Sharp's
  How Brands Grow. Use this skill whenever a founder or startup team needs help with:
  deciding what to work on next, prioritizing a backlog, running a weekly review,
  identifying their current bottleneck, thinking about startup strategy or growth,
  structuring sprints or cycles, evaluating whether to build a feature vs. do sales
  vs. invest in marketing, managing a small team's workload and focus, or any
  question about startup priorities and execution rhythm. Also trigger when someone
  mentions "constraint," "bottleneck," "throughput," "WIP," "customer factory,"
  "mental availability," or phrases like "what should we focus on," "we're spread
  too thin," "should we build this or sell first," or "how do I prioritize."
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

Most founders don't have clean funnel data. That's fine. Answer these five
questions to triangulate:

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

---

## The Constraint Cascade

Where the constraint usually lives, based on your stage:

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

See `references/tool-setup.md` for specific configurations for common tools.

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
