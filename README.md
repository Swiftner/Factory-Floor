# Factory Floor

[![npm](https://img.shields.io/npm/v/@swiftner/factory-floor)](https://www.npmjs.com/package/@swiftner/factory-floor)

A startup coach for [Claude Code](https://docs.anthropic.com/en/docs/claude-code) — helps you figure out what to build, who to sell to, and what to stop doing.

## Why this exists

Most startup advice is generic: "talk to customers," "focus on one thing," "find product-market fit." It's not wrong — it's just not specific enough to change what you do on Monday morning.

Factory Floor turns Claude Code into a coach that knows the specific questions to ask. Not "have you talked to customers?" but "can you name the job they hire you for, in their words, not yours?" Not "focus" but "what is your one constraint right now, and is everything you're doing this week serving it?"

It covers three things founders get wrong:

**Strategy** — You're building features when the real problem is that nobody knows you exist. Or you're selling to everyone when you should be selling to the one segment that has the struggling moment your product actually solves. The coach asks: what job is the customer hiring you to do? What forces are behind every deal that closes — and every one that ghosts?

**Marketing** — You're over-investing in your existing users and under-investing in the thousands of potential buyers who've never heard of you. Growth comes from new customers, not loyalty. The coach asks: do enough of the right people know you exist? Are you distinctive enough to be remembered? Are you reaching broadly or just hammering the same small audience?

**Decisions** — You're spread across five priorities and finishing none of them. You're estimating timelines by padding each task instead of protecting the project. You're optimizing a part of the business that isn't the bottleneck. The coach asks: where is work piling up? What should you explicitly stop doing? Is the constraint being fed?

## How it works

You talk to it like a coach. It asks questions, challenges your assumptions, and uses frameworks to make sure you're thinking about the right things — not to think for you.

You say "should we build Slack integration?" and instead of a pros-and-cons list, you get:

- *"Do you have paying customers? How many?"*
- *"What's your retention like — do people who try it stay?"*
- *"Where are new trials coming from? Is that number growing?"*
- *"If retention is 90% but trials are flat... is the real problem that not enough people know you exist?"*
- *"Would Slack integration bring you new customers who wouldn't have found you otherwise — or is it a feature for people who already use you?"*

You do the thinking. The coach makes sure you're not skipping the hard questions.

## What it knows

The coach draws on four bodies of research, each covering a different blind spot:

**Why customers buy (and don't).** Jobs To Be Done — what progress is the customer trying to make? What pushes them to switch, what pulls them toward you, what makes them anxious, what keeps them stuck on the old way? Comes with switch interview protocols, a 5-minute post-conversation canvas, and opportunity scoring. [Deep dive →](references/jtbd.md)

**Where the bottleneck is.** Goldratt's Theory of Constraints — your startup has exactly one constraint at any moment. Everything you do either serves it or wastes time. Comes with a triage, a subordination matrix, and WIP discipline. [Deep dive →](references/pillar-goldratt.md)

**How customers flow through (or don't).** Maurya's Customer Factory — Acquisition → Activation → Revenue → Retention → Referral. Which step is broken? Comes with the GOLEAN sprint cycle, the napkin test (will the math ever work?), and the Mafia Offer (test before you build). [Deep dive →](references/pillar-maurya.md)

**Why nobody knows you exist.** Sharp's How Brands Grow — growth comes from reaching non-buyers, not delighting power users. Reach beats frequency. Distinctiveness beats differentiation. Comes with a Category Entry Point mapping exercise, a physical availability audit, and a weekly cadence for building awareness. [Deep dive →](references/pillar-sharp.md)

Plus [estimation](references/estimation.md) — why your gut estimate is wrong, how to build an honest buffer (critical chain × 0.4), and exercises for learning to estimate at 50% confidence.

## It adapts to your stage

After a quick triage, the coach loads the right playbook:

- **[Pre-revenue](stages/pre-revenue.md)** — No paying customers? Don't build. Validate the problem first. Five tests before you write code, JTBD basics, a worked example of killing a bad idea on the napkin.
- **[Growth](stages/growth.md)** — Have customers, small team? Find the constraint, exploit it, run the system. Two worked examples — a growth stall and a constraint shift.
- **[Scaling](stages/scaling.md)** — $1M+ ARR or 10+ people? The constraint is often a policy, not a funnel step. Multi-team coordination, hiring as elevation, hidden policy constraints.

## Install

```bash
npx @swiftner/factory-floor
```

Installs to `~/.claude/skills/factory-floor/`. Triggers automatically when you ask about priorities, bottlenecks, weekly reviews, marketing strategy, why deals ghost, what to build next, or how long something will take.

## Things you can ask

> "What should we work on this week?"

Asks about your numbers, your team, what shipped last week. Helps you find the bottleneck and decide — not decide for you.

> "We have no customers yet, where do we start?"

Problem validation before code. Are you solving a real problem? Can the math work? Would someone commit to the offer?

> "Should we build this feature or focus on sales?"

Doesn't answer — asks you to think about where the constraint is and whether the feature serves it.

> "We're spread too thin"

Helps you figure out what to stop. Asks about your WIP, your team state, what's actually moving the number that matters.

> "Why do deals ghost?"

Walks through the four forces. What's pushing them to switch? What's making them anxious? Where is the deal dying?

> "Nobody knows we exist"

Maps your Category Entry Points — the struggling moments that trigger buying behavior. Audits your physical availability. Builds a weekly cadence for reach.

> "How should we position ourselves?"

Starts with what customers were using before they found you — not what you think your competitors are. Works through competitive alternatives, unique attributes, value, target customers, and market category.

> "Help me prep for our weekly review"

Runs you through the review structure for your stage: name the constraint, check the numbers, find where work is piling up, set focus.

> "How long will this take?"

Doesn't give you a number. Helps you build an honest buffer and understand why your estimate is probably wrong.

## The weekly review

A recurring coaching session. Same structure, scaled to your stage:

- **Pre-revenue** (solo or tiny team): 10 minutes. How many conversations? What did we learn? Has the hypothesis survived?
- **Growth** (1-5 people): 10 minutes. Name the constraint, check throughput, find the pile, set 3 priorities.
- **Scaling** (5+ people): 25 minutes. Funnel diagram, buffer/flow check, traffic lights on initiatives.

## Credits

The coach's training comes from:

- **Clayton Christensen** — *The Innovator's Dilemma* (1997), *Competing Against Luck* (2016). Jobs To Be Done.
- **Bob Moesta** — *Demand-Side Sales 101* (2020). Forces of progress, switch interviews.
- **Tony Ulwick** — *Jobs to be Done: Theory to Practice* (2016). Outcome-Driven Innovation.
- **Eli Goldratt** — *The Goal* (1984), *Critical Chain* (1997). Theory of Constraints.
- **Ash Maurya** — *Running Lean* (2022), *Scaling Lean* (2016). Customer Factory, Lean Canvas, Mafia Offer.
- **Byron Sharp** — *How Brands Grow* (2010). Mental and physical availability.
- **April Dunford** — *Obviously Awesome* (2019). Positioning from JTBD.
- **Douglas Hubbard** — *How to Measure Anything* (2010). Estimation calibration.

---

Made by [Swiftner](https://swiftner.com).
