# Factory Floor

A [Claude Code](https://docs.anthropic.com/en/docs/claude-code) skill that turns your startup into a well-run factory. One constraint at a time.

## The idea

Your startup is a system. Like any system, it has exactly one bottleneck at any moment — one thing that limits how fast you create happy customers. Everything you do either serves that bottleneck or wastes time.

Factory Floor combines three frameworks into a single operating system:

| Framework | What it answers |
|---|---|
| **Goldratt's Theory of Constraints** | Where is the bottleneck? |
| **Maurya's Customer Factory** | Which step in the customer journey is it stuck at? |
| **Sharp's How Brands Grow** | Is the real problem that nobody knows we exist? |

The skill helps you identify your constraint, exploit it with existing resources, subordinate everything else to it, and only then invest in elevating it.

## What it does

- **Prioritisation** — "What should we work on?" becomes "What serves the constraint?" Everything else waits.
- **Weekly constraint review** — A 25-minute operating rhythm with four generated diagrams that make the bottleneck visible.
- **Backlog decisions** — Every feature, hire, and initiative evaluated against the current constraint.
- **Anti-pattern detection** — Spots when you're optimising a non-constraint ("Let's keep everyone busy") or building features when the real problem is acquisition.

## Weekly review diagrams

Before each weekly review, the skill generates four diagrams using [beautiful-mermaid](https://github.com/lukilabs/beautiful-mermaid) to make the bottleneck obvious at a glance:

### Customer factory funnel

Where the biggest drop-off is. The constraint node is highlighted red.

```mermaid
graph TD
    UV["Unaware Visitors<br/><b>~10,000/mo</b>"] -->|"Acquisition · 3%"| IP["Interested Prospects<br/><b>~300/mo</b>"]
    IP -->|"Activation · 40%"| AU["Active Users<br/><b>~120/mo</b>"]
    AU -->|"Revenue · 25%"| PC["Paying Customers<br/><b>~30/mo</b>"]
    PC -->|"Retention · 85%"| RC["Retained Customers<br/><b>~25/mo</b>"]
    RC -->|"Referral · 10%"| UV

    style AU fill:#ff6b6b,stroke:#c0392b,stroke-width:3px,color:#fff
```

### Throughput trend

Weekly throughput (happy paying customers created) with a trendline.

```mermaid
xychart-beta
    title "Weekly Throughput: New Paying Customers"
    x-axis ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"]
    y-axis "Customers" 0 --> 20
    bar [5, 7, 6, 8, 4, 9, 7, 10]
    line [5, 6, 6, 7, 6, 7, 7, 8]
```

### WIP snapshot

Where work is piling up. The tallest bar is your empirical constraint.

```mermaid
xychart-beta horizontal
    title "Work in Progress by Stage"
    x-axis ["Acquisition", "Activation", "Revenue", "Retention", "Referral"]
    bar [3, 12, 2, 1, 0]
```

### Constraint flow state

Expands the bottleneck step into sub-states to show exactly where things stall.

```mermaid
stateDiagram-v2
    [*] --> Acquisition: inbound traffic
    Acquisition --> Activation: 3% convert
    Activation --> Revenue: 40% activate
    Revenue --> Retention: 25% pay
    Retention --> Referral: 85% retain

    state Activation {
        [*] --> Signup
        Signup --> Onboarding
        Onboarding --> FirstValue
        note right of Onboarding: BOTTLENECK · avg 14 days to first value
    }
```

Diagrams render to SVG with a violet/indigo brand palette by default. Pass `--theme brand-light` for a white background variant, or use any of the 15 built-in themes from beautiful-mermaid.

## Install

```bash
npx factory-floor
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
│   └── weekly-diagrams.md            # Mermaid templates for the four diagrams
└── scripts/
    ├── render-diagram.mjs            # Renders .mmd → SVG via beautiful-mermaid
    └── package.json                  # Declares beautiful-mermaid dependency
```

`SKILL.md` is the entry point. It contains the synthesised framework and decision process. The reference files are loaded by Claude only when deeper context is needed — keeping the context window lean.

## Usage examples

> "What should we work on this week?"

Claude identifies your current constraint in the customer factory and recommends work that serves it. Everything else gets explicitly deprioritised.

> "Help me prep for our weekly review"

Claude gathers your metrics, generates the four diagrams, and walks through the 25-minute review format: name the constraint, check throughput, assess buffer and flow, make focus decisions.

> "We're spread too thin"

Claude diagnoses WIP overload, applies Little's Law and Weinberg's context-switching tax, and recommends what to stop.

> "Should we build this feature or focus on sales?"

Claude evaluates both options against the current constraint. If acquisition is the bottleneck, the feature waits.

## The weekly review

25 minutes. Every week. Four phases:

1. **Name the constraint** (5 min) — Say it out loud. Has it shifted?
2. **Throughput check** (5 min) — What moved? What didn't? Why?
3. **Buffer and flow** (10 min) — Is the constraint fed? Where is work piling up?
4. **Focus decisions** (5 min) — Top 3 priorities. What are we explicitly *not* doing?

## Credits

Built on the work of:

- **Eli Goldratt** — *The Goal* (1984). Theory of Constraints.
- **Ash Maurya** — *Scaling Lean* (2016). Customer Factory.
- **Byron Sharp** — *How Brands Grow* (2010). Mental and physical availability.

---

Made by [Swiftner](https://swiftner.com).
