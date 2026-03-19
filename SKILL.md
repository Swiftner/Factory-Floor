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

A startup operating system for shipping value to customers. Three intellectual
pillars, one decision framework.

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

## Pillar 1: The Theory of Constraints (Goldratt)

Read `references/pillar-goldratt.md` for the full framework. The essentials:

**The Five Focusing Steps — applied to a startup:**

1. **Identify** the constraint. Where does work pile up? Where do downstream
   stages starve? In a startup this is usually one of: Sales/Pipeline,
   Engineering/Product, or Onboarding/Activation.

2. **Exploit** the constraint. Squeeze maximum output from it without spending
   money. If sales is the constraint, the founder sells — no admin, no code
   reviews, no support during selling hours. If engineering is the constraint,
   pre-package every spec so the developer never waits.

3. **Subordinate** everything else. Non-constraints must serve the constraint,
   even when that means they look idle. This is the hardest step. Idle capacity
   at a non-constraint is not waste — it's design. A highway needs an emergency
   lane.

4. **Elevate** the constraint. Only after exploiting and subordinating, invest
   real resources (hire, buy tools, outsource). A dollar spent at the constraint
   is worth the throughput of the whole company. A dollar spent elsewhere adds
   cost without adding throughput.

5. **Repeat.** After elevating, the constraint moves. The policies built around
   the old constraint may now be counterproductive. Never let inertia become the
   constraint.

**Key rules for startups:**

- **Throughput > Activity.** Measure features shipped, deals closed, customers
  activated — not hours worked or tasks in progress.
- **WIP is inventory, and inventory is liability.** A half-built feature is like
  unfinished goods on the factory floor: consuming resources, generating zero
  revenue, decaying in value as context changes.
- **"Stop starting, start finishing."** Nobody begins new work until their
  current task is done. If blocked, help someone else finish theirs.
- **Accept strategic idleness.** If the developer finishes and the next task
  isn't ready, that's fine. Maintenance, docs, learning, or helping the
  constraint — all better than starting a sixth parallel initiative.

---

## Pillar 2: The Customer Factory (Ash Maurya)

Read `references/pillar-maurya.md` for the full framework. The essentials:

Maurya adapted Goldratt's constraint thinking directly to startup business
models. His key concept: every business is a **customer factory** — a system
that takes in unaware visitors as raw material and turns them into happy
customers as finished product.

**The five macro steps of the customer factory:**

```
Acquisition → Activation → Revenue → Retention → Referral
```

Each step has a conversion rate. The step with the lowest rate (relative to your
goal) is your constraint. Fix that one. Ignore the others until it moves.

**Throughput in a customer factory** = the rate at which you create happy
customers. This is traction. Not signups, not pageviews, not "leads" — happy
customers who achieve their desired outcome and pay you for it.

**The constraint cascade for early-stage startups:**

At each stage, the constraint tends to live in a predictable place:

| Stage | Typical constraint | What "exploiting" looks like |
|---|---|---|
| Pre-product/market fit | Problem validation — are you solving a real problem? | Customer interviews, not code. Lean Canvas stress-testing. |
| Problem/Solution fit | Activation — can they get value from it? | Onboarding optimization, concierge onboarding, reducing time-to-value. |
| Product/Market fit | Acquisition — can you repeatably attract the right people? | Channel experiments, pricing, positioning. |
| Scaling | Retention or Revenue — can you keep them and capture value? | Churn analysis, expansion revenue, pricing optimization. |

**The anti-pattern: premature optimization.** Maurya warns that going fast on
everything is "a recipe for getting lost faster." Optimizing retention when your
real constraint is acquisition wastes effort on a step that isn't the
bottleneck. Optimizing acquisition when nobody activates is pouring water
through a sieve.

**The local vs. global optimization trap.** Individual teams optimizing their
local metrics (marketing generates more leads! engineering ships more features!
sales closes more deals!) can actively harm system throughput if those
optimizations don't address the actual constraint. More leads are worthless if
activation is broken. More features are worthless if nobody sees them.

---

## Pillar 3: Mental & Physical Availability (Byron Sharp)

Read `references/pillar-sharp.md` for the full framework. The essentials:

Byron Sharp's research across decades of brand data reveals a brutal truth for
startups: **most of your potential customers don't know you exist.** Growth
comes primarily from acquiring new customers (penetration), not from making
existing ones buy more (loyalty).

**Why this matters for startup prioritization:**

When a startup asks "what should we build next?" the answer is often not a
feature at all. It's "make more people aware you exist in the moment they
have the problem you solve." Sharp calls this **mental availability** — the
probability that your brand comes to mind in a buying situation.

**The two forms of availability:**

- **Mental availability:** Does the buyer think of you when they have the
  problem? Are you associated with the right Category Entry Points (CEPs) — the
  situations, needs, and moments that trigger someone to look for a solution?
- **Physical availability:** Can they actually buy/try you when they want to?
  Is your product easy to find, easy to sign up for, easy to purchase?

**Sharp's laws applied to startup decisions:**

1. **Growth comes from light buyers and non-buyers, not power users.** Don't
   over-optimize for your most engaged users at the expense of reaching people
   who've never heard of you.
2. **Reach beats frequency.** It's better to be seen once by 1,000 prospects
   than 10 times by 100. Broad, continuous visibility > narrow, intense bursts.
3. **Distinctiveness > differentiation.** You don't need to be "better" — you
   need to be recognizable and memorable. Distinctive brand assets (visual
   identity, tone, tagline) compound over time.
4. **Be present at Category Entry Points.** Map every situation where someone
   might think "I need a solution like this." Then ask: does our brand come to
   mind in that moment? If not, that's a constraint worth addressing.

**The "nobody knows we exist" diagnostic:** When a startup has a solid product
(users who try it tend to stay) but stagnant growth, the constraint is almost
never the product. It's mental availability. The founder's instinct to build
another feature is the equivalent of a factory optimizing a non-constraint
machine — it feels productive but adds zero throughput.

---

## The Decision Framework

When a founder asks "what should we work on?", walk them through this sequence:

### Step 1: Identify the constraint in the customer factory

Map their current numbers (even rough estimates) across the five steps:

```
Unaware visitors → [Acquisition rate] → Leads/Trials
  → [Activation rate] → Active users
  → [Revenue rate] → Paying customers
  → [Retention rate] → Retained customers
  → [Referral rate] → New visitors from referrals
```

The step with the biggest drop-off (or the lowest absolute number) relative to
their goal is the constraint.

**Common patterns:**

- Few people entering the top of funnel → **Acquisition is the constraint.**
  Sharp's insight applies: they don't know you exist. The answer is not "build
  more features." The answer is mental and physical availability.
- People sign up but don't activate → **Activation is the constraint.** Exploit
  by improving onboarding, reducing time-to-value, concierge support.
- People activate but don't pay → **Revenue is the constraint.** Pricing,
  packaging, or value demonstration problem.
- People pay but churn → **Retention is the constraint.** Product-market fit
  may be weaker than assumed, or the product isn't delivering the promised
  outcome.

### Step 2: Exploit before elevating

Before suggesting the founder hire, buy tools, or invest money — ask what they
can do with existing resources to maximize the constraint's output:

- Can the founder reallocate their own time to the constraint?
- Can another team member subordinate their work to feed the constraint?
- Can a process be simplified, templated, or automated to remove friction at
  the constraint?
- Can batch size be reduced to get faster feedback?

### Step 3: Subordinate non-constraints

Help the team see what they should deliberately NOT work on. This is the
highest-leverage advice you can give. Every initiative not serving the current
constraint should be paused, deprioritized, or killed. Say it directly.

Name the specific tradeoff: "Building feature X is engineering work that does
not serve your current constraint (acquisition). It should wait until
acquisition is no longer the bottleneck."

### Step 4: Check the Sharp filter

Before any growth initiative, apply Sharp's diagnostic:

- "Do enough of the right people know we exist?" If no → increase mental
  availability (content, outreach, partnerships, presence at CEPs).
- "Can they easily find and try/buy us?" If no → increase physical availability
  (distribution, signup friction, pricing transparency).
- "Are we distinctive enough to be remembered?" If no → invest in brand assets,
  not features.

### Step 5: Size the work against the constraint's capacity

Use Maurya's "customer factory throughput" concept. Every initiative should be
sized to what the constraint can process. If the founder can do 5 demos per
week, generating 20 leads per week is waste — it creates inventory (leads going
stale). Generate 7-8 and keep quality high.

---

## The Weekly Constraint Review

The operating rhythm that keeps the system honest. 25 minutes, every week.

### Prep: Generate Diagrams

Before the review, generate visual aids that make the bottleneck obvious.
See `references/weekly-diagrams.md` for templates and rendering instructions.

1. Gather the team's current numbers (funnel metrics, WIP counts, weekly throughput).
2. Generate four diagrams using `beautiful-mermaid` via `scripts/render-diagram.mjs`:
   - **Customer Factory Funnel** — flowchart with conversion rates, constraint node highlighted red.
   - **Throughput Trend** — bar+line chart of weekly throughput over last 4-8 weeks.
   - **WIP Snapshot** — horizontal bar chart showing items stuck at each stage.
   - **Constraint Flow State** — state diagram expanding the constraint step into sub-states.
3. Write each diagram as a `.mmd` file, render to SVG, and present together.

Install once: `cd scripts && npm install`
Render: `node scripts/render-diagram.mjs <input.mmd> <output.svg> [--theme tokyo-night]`

### The Review

**Phase 1 — Name the constraint (5 min)**
- "What is our current constraint?" Say it out loud in one sentence.
- "Has it shifted since last week?" If yes, update subordination assignments.
- Reference the Customer Factory Funnel and WIP Snapshot diagrams.

**Phase 2 — Throughput check (5 min)**
- Review the numbers that matter. For most startups this is 3-5 metrics:
  new trials, activations, deals closed, revenue added, churn.
- "What moved? What didn't? Why?"
- Reference the Throughput Trend diagram.

**Phase 3 — Buffer and flow (10 min)**
- "Is the constraint fed? Does the person/process at the bottleneck have
  everything they need for this week?"
- "Where is work piling up?" (This reveals the constraint empirically.)
- Reference the Constraint Flow State diagram.
- Use a simple traffic light for active initiatives:
  - 🟢 On track — buffer healthy, no action needed.
  - 🟡 At risk — buffer being consumed faster than work is completing. Make a
    recovery plan.
  - 🔴 Behind — act now. Redirect non-constraint capacity to help.

**Phase 4 — Focus decisions (5 min)**
- "Top 3 priorities this week, ranked by constraint impact."
- "What are we explicitly NOT doing?" (Write it down.)
- "One small improvement to make at the constraint this week."

---

## Anti-Patterns to Watch For

When advising, watch for these common violations of constraint thinking:

1. **"Let's keep everyone busy."** The efficiency trap. Utilization of
   non-constraints should vary with what the constraint can absorb. Idle time at
   a non-constraint is buffer, not waste.

2. **"We need more features to compete."** Usually a mental availability problem
   disguised as a product problem. If users who try the product stay, the
   product works. The constraint is upstream.

3. **"Let's do all five things in parallel."** WIP kills throughput. Each
   parallel initiative costs ~20% productivity in context-switching (Weinberg).
   With 5 parallel projects, a team loses ~75% of capacity.

4. **"We should optimize retention before we have enough customers."** Premature
   optimization. You can't measure retention with 12 customers. Fix acquisition
   first unless churn is catastrophic.

5. **"Our developer is idle, let's start a new feature."** If engineering is not
   the constraint, the developer should use slack time for maintenance,
   documentation, technical debt, or helping the constraint — not starting new
   WIP.

6. **"Sales closed 10 deals but onboarding can handle 3 per week."** The system
   just created 7 units of inventory. Either slow sales intake or elevate
   onboarding capacity first.

---

## Applying This to Tools

This framework is tool-agnostic. It works with Asana, Linear, Notion, Trello,
a whiteboard, or sticky notes. The tool should make the constraint visible and
WIP limits obvious. When helping someone set up their tool:

- The board/list should show where work piles up (the constraint is visible).
- Every task should be taggable by which constraint it serves.
- WIP limits should be visible in column/section names.
- The weekly review metrics should be accessible in under 2 minutes.
- There should be a "buffer" stage before the constraint — 2-3 ready items so
  the bottleneck never starves.

See `references/tool-setup.md` for specific configurations for common project
management tools.

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
