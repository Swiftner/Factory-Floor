# Evals

Test prompts for evaluating Factory Floor skill quality.

## How to use

Run each prompt with Claude Code (or Codex) with the skill installed.
Score each response against the rubric. Good responses should:

1. Ask one question, not give a list of advice
2. Diagnose before prescribing
3. Route to the correct stage
4. Name the real question behind the surface question
5. Call out misdiagnoses when present

Score: 0 (shallow/generic), 1 (relevant but surface), 2 (sharp and specific)

---

## Test prompts

### Pre-revenue

**P1 — Classic "almost ready" trap**
> "We're a two-person startup. We've been building for 6 months. The product is almost ready to show to customers. What should we focus on?"

Expected: Challenge "almost ready." Ask if they've talked to anyone. Route to pre-revenue. Don't give a roadmap.

**P2 — Building vs. selling**
> "Should we keep building or start selling? We only have 3 features done but they work well."

Expected: Ask who would buy it today. Surface the "building because it's easier than selling" anti-pattern.

---

### Growth

**G1 — Feature request disguised as strategy**
> "We have 40 paying customers. Our biggest request is Slack integration. Should we build it?"

Expected: Ask about retention and acquisition before answering. Surface whether this is a product problem or an awareness problem.

**G2 — Thin pipeline**
> "Our pipeline is thin. We're not getting enough demos booked. What should we do?"

Expected: Distinguish awareness vs. positioning vs. activation. Ask if the people reaching out are the right profile.

**G3 — Churn**
> "We have 15% monthly churn. How do we fix it?"

Expected: Ask when people churn (day 1 vs. day 30 vs. day 90). Different timing = different fix. Don't immediately say "improve onboarding."

**G4 — Spread too thin**
> "We have 8 things in progress and nothing is finishing. How do we fix it?"

Expected: Name the WIP problem directly. Ask for the list. Suggest stopping, not prioritizing.

---

### Restart

**R1 — Lost all customers, tempted to rebuild**
> "We had 8 paying customers last year but they all churned. I think we need to rebuild the product from scratch. Where should I start?"

Expected: Don't accept the rebuild premise. Ask why customers left — product failure, fit failure, or sales execution? Push for churned customer interviews before any building.

**R2 — "The market wasn't ready"**
> "We launched 6 months ago, got some early traction, but everyone dropped off. I think we were just too early. Should we pivot?"

Expected: Challenge "too early" as a common cop-out. Ask who's solving the problem now, even badly. Push for forensics on why the early customers actually left.

---

### Positioning

**PO1 — Everyone is a potential customer**
> "Our tool works for any company that does sales. We don't want to limit ourselves to a niche. How do we market to everyone?"

Expected: Name "everyone is a customer" as a targeting failure. Push for one segment for 6 months. Route to Ritson's STP framework.

**PO2 — "We need better marketing"**
> "We have a great product but nobody knows about us. We need to do more marketing. What channels should we use?"

Expected: Don't jump to channels (tactics). Check for positioning first — can they state their position in one sentence? What two associations do they own? Diagnosis before strategy before tactics.

---

### Scaling

**S1 — Hiring as solution**
> "We're growing but we can't keep up. We need to hire 3 engineers. How should we think about this?"

Expected: Ask what specifically can't get done. Check if this is a WIP problem or a genuine capacity problem.

**S2 — Everything is important**
> "We have 6 initiatives running in parallel and our board wants updates on all of them. How do we manage this?"

Expected: Identify coordination/policy constraint. Ask which initiative serves the current throughput constraint. Suggest traffic lights.

---

## Rubric

| Score | What it looks like |
|---|---|
| 0 | Generic advice ("focus on customers", "reduce churn", "prioritize ruthlessly") — could apply to any startup |
| 1 | Relevant but surface — identifies the right area but doesn't ask a probing question or name a specific misdiagnosis |
| 2 | Sharp — asks the question behind the question, names the real issue, routes correctly, one question not a list |
