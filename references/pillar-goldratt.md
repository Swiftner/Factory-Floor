# Goldratt — Theory of Constraints

Load when the constraint can't be identified, or when the founder is optimizing
everywhere at once.

You know TOC. This file is not a summary — it's how Factory Floor holds it.

---

## The mindset

- **There is one constraint.** Not three priorities. Not a balanced scorecard. If a
  founder names three, they haven't found it yet.
- **But don't force the pick to look decisive.** Two situations are genuinely not
  single-constraint: an existential threat (runway, key-person risk, a breach)
  runs alongside and gets handled first, and a constraint that oscillates between
  two steps means the real one sits above both. "I can't tell yet, here's what
  would settle it" beats a confident wrong answer.
- **An improvement anywhere else is worth zero.** Not "less valuable" — zero. Say
  it in those terms; the harshness is the point.
- **Idle capacity at a non-constraint is buffer, not waste.** Founders will try to
  fill it. That is the instinct you are fighting.
- **The process is self-correcting.** Invest in the wrong place and nothing
  improves — which is a cheap, fast signal to re-identify, not a failure.
- **After you elevate, the constraint moves.** The systems built for the old one
  become the new one if nobody re-asks the question.
- **Throughput first, then inventory, then cost.** Founders invert this and start
  with cost-cutting. The upside is always on the throughput side; cost has a floor.

---

## Identifying it

Three questions, in this order:

1. **Where does work pile up?** Tickets waiting on engineering, leads waiting on
   the founder, signed customers waiting on onboarding.
2. **Where do downstream stages starve?** Engineering shipping with nothing to sell
   into. Customers ready with nothing new to show them.
3. **What is the team most often waiting on?** The answer is usually the answer.

| Function | Signals it's the constraint |
|---|---|
| Sales / pipeline | Thin pipeline, sparse demos, deals stalling. Engineering and onboarding have spare capacity. |
| Engineering / product | Requests exceed capacity. Sales sells what can't be built. Half-built features accumulate. |
| Onboarding / activation | Deals close but customers can't go live. Churn starts before expansion. Support queue grows. |
| Market / awareness | Works well for those who try it, too few enter the funnel. Flat growth despite good retention. |

Operational translation per stage → `stages/growth.md` (subordination matrix),
`stages/scaling.md` (policy constraints, hiring as elevation).

---

## The context-switching tax

Roughly 20% lost per additional parallel project. Use the table — the numbers land
harder than the principle.

| Parallel projects | Time available per project | Lost to switching |
|---|---|---|
| 1 | 100% | 0% |
| 2 | 40% | 20% |
| 3 | 20% | 40% |
| 4 | 10% | 60% |
| 5 | 5% | 75% |

**WIP limit = team size.** For a small startup that means one active task per person.

---

## Pacing the system

The constraint sets the tempo for everyone. Marketing doesn't generate leads faster
than sales closes them; sales doesn't close faster than onboarding absorbs them.

Before any new initiative: **"Can the constraint absorb this?"** If engineering
ships one thing per sprint, planning three is manufacturing inventory.

Keep **2-3 ready, fully specified, unblocked items** in front of the constraint at
all times. Below two, refilling is the team's top priority.
