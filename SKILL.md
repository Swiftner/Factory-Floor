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

A startup operating system for shipping value to customers. Four frameworks,
one question at a time.

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
   **Problem Validation**. Five tests before you write code:
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
     building the product is waste.
   Stop building. Observe customers in their real context — what they do,
   not what they say. Look for struggling moments and workarounds. Watch out
   for the **Innovator's Bias** — falling in love with your solution before
   validating the problem.

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

**Cross-check with your stage:**

| Stage | Typical constraint | What "exploiting" looks like |
|---|---|---|
| Pre-product/market fit | Problem validation | Observe customers. Apply the not-not test. Stress-test the Lean Canvas. → `stages/pre-revenue.md` |
| Problem/Solution fit | Activation | Onboarding optimization, concierge onboarding, reducing time-to-value. → `stages/growth.md` |
| Product/Market fit | Acquisition | Channel experiments, pricing, positioning. |
| Scaling | Retention or Revenue | Churn analysis, expansion revenue, pricing optimization. |

---

## Stage Routing

**After completing the triage, read the appropriate stage file for detailed
guidance. This is required — the stage file contains the frameworks, worked
examples, and weekly review format for that stage.**

- **Triage answer is Question 0** (no paying customers, or just friends-and-family)
  → Read `stages/pre-revenue.md`
- **Triage answer is Questions 1-5** (have paying customers, team under ~10 people)
  → Read `stages/growth.md`
- **Team is 10+ people, or $1M+ ARR, or constraint keeps showing up as a
  coordination problem rather than a capacity problem**
  → Read `stages/scaling.md`
- **If multiple triggers point to different stages**, use this precedence:
  coordination/policy problems → scaling; paying customers + capacity problems
  → growth; no paying customers → pre-revenue.
- **If unsure**, start with `stages/growth.md`

Each stage file is self-contained: it includes the relevant parts of JTBD,
Goldratt, Maurya, and Sharp integrated where they're needed — not as separate
sections to read later. The `references/` folder has the full framework
deep-dives if more detail is needed on any pillar.

---

## The Decision Framework

When a founder asks "what should we work on?", walk them through this:

1. **Identify the constraint.** Use the triage. The step with the biggest
   drop-off relative to goal is the constraint.
2. **Check awareness first.** Do enough people know we exist? Can they find
   and try us? Are we distinctive enough to be remembered? If no to any of
   these, the constraint is awareness — not the product.
3. **Exploit before elevating.** What can you do with existing resources?
   Reallocate founder time, subordinate non-constraint work, simplify a
   process, reduce batch size.
4. **Subordinate non-constraints.** The default answer to every feature
   request is **no**. Everything not serving the current constraint should
   be paused, deprioritized, or killed.
5. **Size to the constraint.** Every initiative should be sized to what the
   constraint can process. Don't generate 20 leads/week if you can demo 5.
6. **Repeat.** If the constraint has broken (throughput increased and the
   bottleneck visibly shifted), go back to Step 1. Don't let processes
   built for the old constraint become the new bottleneck.

---

## Anti-Patterns

Watch for these violations of constraint thinking:

1. **"Let's keep everyone busy."** Idle time at a non-constraint is buffer,
   not waste.

2. **"We need more features to compete."** Usually a mental availability
   problem disguised as a product problem. If users who try it stay, the
   product works.

3. **"Let's do all five things in parallel."** Each parallel project costs
   ~20% in context-switching. With 5 parallel projects, ~75% of capacity
   is lost.

4. **"We should optimize retention before we have enough customers."** You
   can't measure retention with 12 customers. Fix acquisition first unless
   churn is catastrophic.

5. **"Our developer is idle, let's start a new feature."** If engineering
   isn't the constraint, use slack for maintenance, docs, tech debt, or
   helping the constraint.

6. **"Sales closed 10 deals but onboarding can handle 3 per week."** The
   system just created 7 units of inventory. Slow intake or elevate
   onboarding first.

7. **"Customers will love this once they see it."** The waking dream. If you
   can't point to observed behavior showing customers can't be indifferent,
   you may be optimizing a system with no authentic demand.

8. **"We interviewed 20 people and they all said they'd pay."** Stated
   intent is not demand. Watch what customers do — workarounds, frustrations,
   where they spend time and money today.

9. **"Only Alex understands how that works."** A bus factor of 1 is a
   throughput ceiling. Document it, pair on it, or automate it.

10. **"I just need to build it and they'll get it."** The Innovator's Bias.
    Start with existing alternatives, not your idea.

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
| **Authentic demand** | Customers cannot be indifferent — not-having your product is not okay. |
| **Not-not test** | "Is it not okay to NOT have this?" If customers can shrug, you don't have demand yet. |
| **Waking dream** | A founder's internal model of customer reality that feels true but isn't. Cured by observation. |
| **Peanut buttering** | Spreading resources thinly across all priorities. Feels fair. Kills throughput. |
| **Job (JTBD)** | The progress a customer is trying to make in a specific situation. Functional, emotional, social. |
| **Struggling moment** | The specific event that triggers someone to seek a solution. Also a Category Entry Point. |
| **Forces of progress** | Push + Pull (promote switching) vs. Anxiety + Habit (block switching). |
| **Switch interview** | A 30-60 minute interview reconstructing the buying timeline. |
| **Hiring / firing** | Customers "hire" products to do a job and "fire" them when something does it better. |
| **Innovator's Bias** | Falling in love with your solution before validating the problem. |
| **Mafia Offer** | An offer so good customers can't refuse — tested before building an MVP. |
| **Napkin test** | 5-minute viability check: goal / revenue per customer = required customers. |
