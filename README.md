# Factory Floor

[![npm](https://img.shields.io/npm/v/@swiftner/factory-floor)](https://www.npmjs.com/package/@swiftner/factory-floor)

A [Claude Code](https://docs.anthropic.com/en/docs/claude-code) skill that helps you stop working on the wrong thing.

## The problem

You're spread too thin. Half your backlog doesn't matter. You're building features when the real problem is that nobody knows you exist. Your team is busy but throughput is flat.

Every startup has exactly one bottleneck at any moment — one thing that limits how fast you create happy customers. Everything you do either serves that bottleneck or wastes time. Factory Floor helps you find it, fix it, and manage the work that serves it.

Three questions, asked on repeat:

1. **Where is the bottleneck?**
2. **Which step in the customer journey is it stuck at?**
3. **Is the real problem that nobody knows we exist?**

Built on Goldratt's [Theory of Constraints](references/pillar-goldratt.md), Maurya's [Customer Factory](references/pillar-maurya.md), and Sharp's [How Brands Grow](references/pillar-sharp.md) — but you don't need to know any of that to use it.

## What it does

- **Find your bottleneck** — A 5-minute triage that works even without clean funnel data. Covers everything from "we have zero customers" to "we're scaling."
- **Prioritisation** — "What should we work on?" becomes "What serves the constraint?" Everything else waits.
- **Project management** — Break priorities into constraint-sized tasks, enforce WIP limits, keep the buffer fed, track throughput instead of activity. Manage the work, not just the strategy.
- **Execution sprints** — A 2-week GOLEAN cycle for running focused experiments at the constraint and measuring whether throughput actually moved.
- **Weekly constraint review** — A scalable operating rhythm: 10-minute light review for small teams, 25-minute full review with a funnel diagram for larger ones.
- **Anti-pattern detection** — Spots when you're optimising a non-constraint ("Let's keep everyone busy") or building features when the real problem is acquisition.

## Customer factory funnel

The one diagram that matters. Shows your five macro steps with conversion rates, constraint highlighted red.

```mermaid
graph TD
    UV["Unaware Visitors<br/><b>~10,000/mo</b>"] -->|"Acquisition · 3%"| IP["Interested Prospects<br/><b>~300/mo</b>"]
    IP -->|"Activation · 40%"| AU["Active Users<br/><b>~120/mo</b>"]
    AU -->|"Revenue · 25%"| PC["Paying Customers<br/><b>~30/mo</b>"]
    PC -->|"Retention · 85%"| RC["Retained Customers<br/><b>~25/mo</b>"]
    RC -->|"Referral · 10%"| UV

    style AU fill:#ff6b6b,stroke:#c0392b,stroke-width:3px,color:#fff
```

Renders to SVG via [beautiful-mermaid](https://github.com/lukilabs/beautiful-mermaid) with a violet/indigo palette by default. Pass `--theme brand-light` for a white background variant.

## Install

```bash
npx @swiftner/factory-floor
```

That's it. Installs the skill to `~/.claude/skills/factory-floor/` and sets up the diagram renderer.

The skill triggers automatically when you ask Claude Code about prioritisation, bottlenecks, weekly reviews, or what to work on next.

## Structure

```
factory-floor/
├── SKILL.md                          # Main skill — loaded when triggered
├── references/
│   ├── pillar-goldratt.md            # Theory of Constraints deep-dive
│   ├── pillar-maurya.md              # Customer Factory deep-dive
│   ├── pillar-sharp.md               # Mental & Physical Availability deep-dive
│   ├── tool-setup.md                 # Asana, Linear, Notion, Trello configs
│   └── weekly-diagrams.md            # Customer Factory Funnel diagram template
└── scripts/
    ├── render-diagram.mjs            # Renders .mmd → SVG via beautiful-mermaid
    └── package.json                  # Declares beautiful-mermaid dependency
```

`SKILL.md` is the entry point. It contains the synthesised framework and decision process. The reference files are loaded by Claude only when deeper context is needed — keeping the context window lean.

## Usage examples

> "What should we work on this week?"

Identifies your current constraint and recommends work that serves it. Everything else gets explicitly deprioritised.

> "Help me break this priority into tasks"

Breaks your top priorities into constraint-sized tasks (1-3 days each), sets WIP limits, and fills the buffer so the bottleneck never starves.

> "Help me prep for our weekly review"

Gathers your metrics, generates a funnel diagram, and walks through the review: name the constraint, check throughput, assess buffer and flow, make focus decisions.

> "We're spread too thin"

Diagnoses WIP overload, applies Little's Law, and recommends what to stop.

> "Should we build this feature or focus on sales?"

Evaluates both options against the current constraint. If acquisition is the bottleneck, the feature waits — unless it's a distribution feature.

> "Our constraint just shifted from acquisition to activation — now what?"

Walks you through the transition: reassign subordination roles, update the board, maintain autopilot on the old constraint, and refill the buffer for the new one.

> "We have no customers yet, where do we start?"

Starts at Question 0: problem validation. Before funnels, before features — are you solving a real problem people will pay for?

## The weekly review

Scales to your team size. Same four phases either way:

1. **Name the constraint** — Say it out loud. Has it shifted?
2. **Throughput check** — What moved? What didn't? Why?
3. **Where's the pile?** — Is the constraint fed? Where is work accumulating?
4. **Focus decisions** — Top 3 priorities. What are we explicitly *not* doing?

**Light version** (1-5 people): 10 minutes, no diagrams, standing up. **Full version** (5+): 25 minutes with a funnel diagram.

## Credits

Built on the work of:

- **Eli Goldratt** — *The Goal* (1984). Theory of Constraints.
- **Ash Maurya** — *Scaling Lean* (2016). Customer Factory.
- **Byron Sharp** — *How Brands Grow* (2010). Mental and physical availability.

---

Made by [Swiftner](https://swiftner.com).
