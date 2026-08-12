# Factory Floor

[![npm](https://img.shields.io/npm/v/@swiftner/factory-floor)](https://www.npmjs.com/package/@swiftner/factory-floor)

A startup coach that turns Claude into a thinking partner for prioritization and execution. It won't tell you what to do — it'll ask the questions you're avoiding.

Works with **Claude Code**, **Claude Desktop**, **OpenAI Codex**, and any agent that supports the [open agent skills standard](https://agentskills.io).

### Claude Code

```bash
npx @swiftner/factory-floor
```

Installs to `~/.claude/skills/factory-floor/`. Triggers automatically when you talk about priorities, bottlenecks, what to build, or why growth is flat.

### OpenAI Codex

```bash
npx @swiftner/factory-floor
```

Installs to `~/.codex/skills/factory-floor/`. Codex picks it up automatically — trigger with `/skills` or `$` to mention it directly, or just describe your problem and it will activate implicitly.

Or install via ClawHub:

```bash
clawhub install factory-floor
```

### Claude Desktop

1. Open Claude Desktop and create a new **Project**
2. Set the contents of [`SKILL.md`](SKILL.md) as the project's **Custom Instructions**
3. Upload these files as **Project Knowledge**:
   - `stages/pre-revenue.md`
   - `stages/restart.md`
   - `stages/growth.md`
   - `stages/scaling.md`
   - `references/intake.md`
   - `references/probes.md`
   - `references/playbooks.md`
   - `references/weekly-review.md`
   - `references/state.md`

That's the whole skill — ten files, about 60KB.

Start a conversation in that project and Claude will run the triage and route to the right stage — the same way the skill works in Claude Code.

**State layer in Claude Desktop.** Claude Code writes `.factory/context.md` and `.factory/journal.md` to your working directory so you don't re-explain yourself each session. Claude Desktop has no filesystem, so the state layer works manually: paste your current `context.md` into the project or the chat at the start of a session, and when Claude suggests a state update (after a diagnosis, experiment, or weekly review), copy the edited version back into your project files. The schema and triggers in `references/state.md` are the same either way.

## What it does

You say "should we build Slack integration?" and instead of a pros-and-cons list, you get:

- *"What's your retention like — do people who try it stay?"*
- *"Where are new trials coming from? Is that number growing?"*
- *"If retention is 90% but trials are flat... is the real problem that not enough people know you exist?"*
- *"Would Slack integration bring you new customers — or is it a feature for people who already use you?"*

It asks, you decide. Three areas where founders consistently fool themselves:

**You're building when you should be selling.** The product works — users who find it stay. But nobody's finding it. You don't need features. You need to exist in more people's heads.

**You're doing five things and finishing none.** Each parallel project costs ~20% in context-switching. With five in flight, you're losing three-quarters of your capacity to the act of juggling.

**You're optimizing the wrong thing.** Marketing is generating leads but onboarding can't absorb them. You just created inventory, not progress. The system has one bottleneck — everything else is either serving it or wasting time.

## It adapts to your stage

A quick triage loads the right playbook:

| Stage | What it covers |
|---|---|
| **[Pre-revenue](stages/pre-revenue.md)** | No customers yet? Don't build. Five tests before you write code. Napkin math. The Mafia Offer. |
| **[Restart](stages/restart.md)** | Had customers, lost them. Forensics first — product failure, fit failure, or sales execution failure? Churned customer interviews. Restart sequence. |
| **[Growth](stages/growth.md)** | Have customers, small team. Find the constraint, exploit it, run the system. Two-week experiment cycles, WIP limits, brand building vs. activation. |
| **[Scaling](stages/scaling.md)** | $100K+ MRR or 10+ people. Policy constraints, multi-team coordination, hiring as elevation, buffer management, timeline communication. |

## Two modes

Field experiments on AI advice disagree about who benefits — until you sort them by
task. On structured, checkable work an assistant lifts the least experienced people
most. On ambiguous, judgment-dependent work it makes them worse. Same model, same
person; the task decides.

So Factory Floor runs in two modes and sorts every question before answering:

**Procedure** — funnel arithmetic, the weekly review, napkin math, buffer sizing, WIP
limits, interview scripts, CEP mapping, the positioning sprint. The answer is
checkable, so it's maximally directive. No hedging, no options.

**Judgment** — what your constraint is, whether to pivot, whether this is the right
segment, why they churned. The answer is a claim about your business that nobody can
verify, so it won't prescribe. It takes your theory first, then designs the test that
tells the two of you apart — and names a constraint only when a number supports it.

Practically: it will be *more* opinionated than most tools about how you work, and
markedly less confident than most tools about what's wrong with your company.

## The prediction ledger

Startups are a terrible place to learn, because feedback is slow, noisy and
confounded — so experience alone never corrects your instincts. Well-prepared and
poorly-prepared founders turn out to be equally confident.

Factory Floor takes your prediction *before* it comments, writes it to
`.factory/journal.md` with a confidence number, and scores it when the experiment
returns. Each quarter it shows your hit rate. 40–60% right means you're calibrated;
above 70% means you're only predicting safe things.

## The frameworks underneath

Jobs To Be Done, Theory of Constraints (Goldratt), the Customer Factory (Maurya),
How Brands Grow (Sharp), marketing strategy discipline (Ritson), and strategic
thinking (Rumelt, Clausewitz, Dixit & Nalebuff).

The skill doesn't explain any of them — the model already knows them. It carries the
procedures, the thresholds, and the posture. That's why it fits in ten short files.

## Things you can ask

| You say | It does |
|---|---|
| "What should we work on this week?" | Runs the triage. Finds the bottleneck. Helps you pick three priorities. |
| "We have no customers yet" | Problem validation before code. Napkin math, five tests, Mafia Offer. |
| "Should we build X or focus on sales?" | Asks where the constraint is and whether X serves it. |
| "We're spread too thin" | Figures out what to stop. WIP audit, team state check. |
| "Why do deals ghost?" | Walks through the four forces. Where is the deal dying? |
| "Nobody knows we exist" | Maps Category Entry Points. Audits physical availability. Builds a reach cadence. |
| "How long will this take?" | Helps you build an honest buffer instead of giving you a number. |
| "Help me prep for our weekly review" | Runs the review format for your stage: constraint, numbers, pile, focus. |

## The weekly review

Same structure, scaled to your stage:

Every review opens by scoring the prediction you made last time.

- **Pre-revenue** (12 min) — How many conversations? What did we learn? Has the hypothesis survived?
- **Growth** (12 min) — Name the constraint, check throughput, find where work piles up, set 3 priorities.
- **Scaling** (25 min) — Funnel diagram, buffer/flow check, traffic lights on initiatives, policy constraint scan.

When an experiment reaches its deadline you get a separate decision point, not another review: **persevere, pivot, or pause.** Recording an outcome without forcing that fork is how a wrong constraint survives a quarter.

## Credits

- **Clayton Christensen** — *The Innovator's Dilemma*, *Competing Against Luck*. Jobs To Be Done.
- **Bob Moesta** — *Demand-Side Sales 101*. Forces of progress, switch interviews.
- **Tony Ulwick** — *Jobs to be Done: Theory to Practice*. Outcome-Driven Innovation.
- **Eli Goldratt** — *The Goal*, *Critical Chain*. Theory of Constraints.
- **Ash Maurya** — *Running Lean*, *Scaling Lean*. Customer Factory, Lean Canvas, Mafia Offer.
- **Byron Sharp** — *How Brands Grow*. Mental and physical availability.
- **Mark Ritson** — Mini MBA in Marketing. Marketing strategy discipline, STP, positioning.
- **Richard Rumelt** — *Good Strategy Bad Strategy*, *The Crux*. The kernel of strategy, bad strategy signs, proximate objectives.
- **Carl von Clausewitz** — *On War*. Fog, friction, center of gravity, culminating point, moral forces.
- **Avinash Dixit & Barry Nalebuff** — *The Art of Strategy*. Game theory for business: commitment, cooperation, information asymmetry.
- **Les Binet & Peter Field** — *The Long and the Short of It*. Brand building vs. activation budget allocation.
- **April Dunford** — *Obviously Awesome*. Positioning from JTBD.
- **Douglas Hubbard** — *How to Measure Anything*. Estimation calibration.

---

Made by [Swiftner](https://swiftner.com).
