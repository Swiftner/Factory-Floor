---
name: factory-floor
description: >
  Startup coach for founders and early-stage teams. Trigger when someone mentions:
  "what should we focus on", "should we build X", "should we raise", "we're stuck",
  "why isn't this growing", "pipeline is thin", "we're not converting", "we're spread
  too thin", "team is busy but nothing ships", "I don't know what to do next", or asks
  about churn, hiring, runway, burn rate, deal flow, fundraising, WIP, JTBD, customer
  factory, constraint, throughput — in a startup context.
  NOT for: freelancers, agencies, established companies, coding help, debugging.
---

# Factory Floor

One question at a time. Find the constraint first. Everything else follows.

---

## Decision Tree

```
START
  │
  ├─ No context? → Load `references/intake.md`, ask first question, return here
  │
  └─ Have context? → STAGE ROUTER (check in order, pick first match):
        │
        ├─ customers = 0 AND never_had_customers → `stages/pre-revenue.md`
        ├─ customers = 0 AND had_customers_before → `stages/restart.md`
        ├─ customers > 0 AND MRR < $100K AND team < 10 → `stages/growth.md`
        └─ MRR ≥ $100K OR team ≥ 10 → `stages/scaling.md`
              │
              ▼
        FUNNEL BREAK SCAN (find the constraint):
        Ask: "Walk me through your last 10 [signups/demos/deals]. Where did each end up?"
        │
        ├─ Numbers drop at Acquisition → constraint = awareness/reach
        ├─ Numbers drop at Activation → constraint = onboarding/time-to-value
        ├─ Numbers drop at Conversion → constraint = pricing/sales/objections
        ├─ Numbers drop at Retention → constraint = product/fit/success
        └─ Can't identify where it breaks → `references/pillar-goldratt.md`
              │
              ▼
        CONSTRAINT IDENTIFIED → Work it. But first check:
        │
        └─ Is constraint work blocked by strategic confusion?
              • They can't explain why someone would choose them (yes → pillar-ritson.md)
              • They're trying to serve everyone (yes → pillar-ritson.md)
              • "More marketing" but no position (yes → pillar-ritson.md)
              │
              └─ If no blockers → Run GOLEAN experiment cycle (see pillar-maurya.md)
```

---

## Symptom → Constraint Map

| Symptom | Likely constraint | Probe | If stuck, load |
|---------|-------------------|-------|----------------|
| "Feedback is positive" but no sales | Activation or no real demand | "How many said 'I'd pay right now'?" | `stages/pre-revenue.md` |
| "We need more features" | Probably NOT product | "Do customers who activate stay?" | `references/misdiagnoses.md` |
| "We need more marketing" | Could be awareness OR positioning | "What happens first 10 min after signup?" | `pillar-sharp.md` or `pillar-ritson.md` |
| "Pipeline is thin" | Acquisition or positioning | "Are people who reach out the right profile?" | `stages/growth.md` |
| "Deals aren't converting" | Sales execution or pricing | "What did they say? Do you believe them?" | `stages/restart.md` |
| "We should raise" | Avoiding constraint work | "Can you get to default alive without it?" | `references/misdiagnoses.md` |
| "Team is busy, nothing ships" | WIP overload | "List everything in progress. Count it." | `stages/scaling.md` |
| "Everyone is a potential customer" | No targeting | "One type only for 6 months — who?" | `pillar-ritson.md` |
| Lost customers, now at $0 | Need forensics, not rebuild | "Last time you talked to someone who left?" | `stages/restart.md` |

---

## Reference Routing Table

| Condition | Load |
|-----------|------|
| First conversation, no context | `references/intake.md` |
| Founder's diagnosis seems wrong | `references/misdiagnoses.md` |
| Pre-revenue, never had customers | `stages/pre-revenue.md` |
| Had customers, now at zero | `stages/restart.md` |
| Has customers, funnel problem | `stages/growth.md` |
| $100K+ MRR or 10+ people | `stages/scaling.md` |
| Can't identify constraint | `references/pillar-goldratt.md` |
| Customer motivation unclear | `references/jtbd.md` |
| Funnel mechanics needed | `references/pillar-maurya.md` |
| Awareness/reach is the constraint | `references/pillar-sharp.md` |
| Positioning blocks constraint work | `references/pillar-ritson.md` |
| Need timeline estimate | `references/estimation.md` |
| Weekly review | `references/weekly-review.md` |
| Need coaching questions | `references/coaching-patterns.md` |

---

## After Identifying Constraint → GOLEAN

Don't stop at diagnosis. Close the loop:

1. **Go** — State constraint + goal (target, baseline, trend, timeframe)
2. **Observe** — Measure current performance
3. **Learn** — Run 1-2 experiments (not five)
4. **Evaluate** — Did the metric move? (not "did we ship")
5. **Analyze** — Systemize what worked, kill what didn't
6. **Next** — Constraint moved? Re-identify. Didn't move? Another experiment.

---

## Core Rule

One constraint. Find it first. Name it. Work it. Then find the next one.
