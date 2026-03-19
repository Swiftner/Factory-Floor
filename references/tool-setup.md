# Tool Setup — Making Constraints Visible

This framework is tool-agnostic. The tool's job is to make the constraint
visible and WIP limits obvious. Below are configurations for common tools.

## Principles (Any Tool)

1. **The board must reveal where work piles up.** The column with the most
   cards is your empirical constraint. If your theoretical constraint doesn't
   match, trust the board.

2. **Every task must be taggable by constraint area.** Use labels, tags, or
   custom fields: Sales/Pipeline, Engineering/Product, Onboarding/Activation,
   Awareness/Distribution. At a glance, you should see whether effort matches
   the declared constraint.

3. **WIP limits must be visible.** Put the number in the column name:
   "In Progress [3]". The limit is social, not technical. The visibility is
   what matters.

4. **A buffer column must exist before the constraint.** 2-3 items, fully
   specified and unblocked, ready to pull. The constraint should never starve.

5. **Weekly review metrics should be accessible in under 2 minutes.** If
   gathering numbers takes longer than the review itself, the system won't
   survive.

## Asana Configuration

**Board structure:**
```
Backlog → 📦 Buffer [3] → 🔨 In Progress [3] → 👀 Review [2] → ✅ Done
```

**Custom fields (save to org library):**
- Constraint Area (single-select): Sales/Pipeline · Product/Engineering ·
  Onboarding/Support · Awareness/Distribution · Infrastructure
- Constraint Relevance (single-select): Directly serves constraint · Feeds
  the constraint · Not constraint-related
- Buffer Status (single-select): 🟢 Green · 🟡 Yellow · 🔴 Red

**Rules:**
- When a task moves to "In Progress" → auto-assign due date 3 days out.
- When a task becomes overdue → auto-elevate priority and notify the team.
- When Buffer section drops below 2 tasks → send alert to replenish.

**Dashboard charts:**
- Bar chart of tasks by section (reveals pileups).
- Line chart of tasks completed per week (throughput trend).
- Donut chart by Constraint Area (alignment check).

**Tip:** Asana lacks native WIP limits. Add limits to section names as a visual
cue. Consider the "WIP Limiter" Chrome extension for visual enforcement.

## Linear Configuration

**Workflow states:**
```
Backlog → Buffer → In Progress → In Review → Done
```

**Labels:** Map to constraint areas (same as above).

**WIP limits:** Linear supports native WIP limits on workflow states. Set
In Progress = team size (e.g., 3 for a three-person team).

**Cycles:** Use 1-week cycles aligned with the weekly constraint review.

**Views:** Use the board view for daily work. Use the backlog view filtered
by constraint area for weekly review prioritization.

## Notion Configuration

**Database properties:**
- Status (select): Backlog / Buffer / In Progress / Review / Done
- Constraint Area (select): Same categories as above
- Constraint Relevance (select): Same as above
- Buffer Status (select): 🟢 / 🟡 / 🔴

**Board view:** Group by Status. Add WIP limits to group headers manually.

**Filtered views:**
- "This Week" view: Status = Buffer or In Progress, sorted by priority.
- "Constraint Alignment" view: Grouped by Constraint Area with task counts.
- "Weekly Review" view: Status = Done, date = last 7 days, for throughput count.

## Trello Configuration

**Lists:**
```
Backlog | 📦 Buffer [3] | 🔨 In Progress [3] | 👀 Review [2] | ✅ Done
```

**Labels:** One color per constraint area.

**Power-ups:** Use the "Card Aging" power-up to make stale cards visually
obvious (old cards = WIP that's not flowing).

## Whiteboard / Sticky Notes

Columns on a physical board or whiteboard. WIP limits written above each
column. Sticky note color = constraint area. Move cards physically. Take a
photo at each weekly review to track throughput over time.

This is honestly the simplest version and works perfectly well for a team of
2-5 people sitting in the same room.
