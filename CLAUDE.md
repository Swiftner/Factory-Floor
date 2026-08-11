# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

A Claude Code skill called **Factory Floor** — a startup operating system for prioritization and execution. It combines Goldratt's constraint thinking, Maurya's customer factory model, Sharp's brand growth laws, Ritson's marketing strategy discipline, and a strategic reasoning layer (Rumelt, Clausewitz, Dixit & Nalebuff), with JTBD as the strategic intelligence layer underneath.

## Architecture

The skill is **decision-tree routed**: SKILL.md is a thin router (~130 lines) with a decision tree that identifies the startup's stage and constraint, then instructs Claude to read the appropriate stage file. This keeps context lean — a day-1 founder never sees fever charts, and a year-3 company doesn't re-read the napkin test.

### SKILL.md (the router)

Contains: frontmatter, the stance and "never" lists, the four-part response contract, decision tree (stage routing + funnel break scan), symptom → constraint map, reference routing table, GOLEAN + reflexes, the inline state read schema, and the core rule. **After triage, SKILL.md tells Claude to read one of the stage files.**

### The editing principle: assume the model knows the theory

**No file in this skill teaches a framework.** Goldratt, Maurya, Sharp, Ritson, Christensen, Moesta, Ulwick, Rumelt, Clausewitz, Dixit & Nalebuff, Binet & Field are all in the model's training data. Explaining Double Jeopardy, Little's Law, PERT, or the prisoner's dilemma spends context to tell the model what it already knows.

What files carry instead, and what any edit must preserve:

1. **Stance** — the opinionated posture we want the model in for this situation. Every file opens with one.
2. **Refusals** — what this skill will not accept from a founder.
3. **Protocols** — the specific sequences, questions, and verbatim phrasings.
4. **Our numbers** — thresholds that are a judgment call, not a fact: buffer × 0.4, WIP = team size, 8-12 interviews, 3-5 conversations/week, 8-15 CEPs, 3x rule, 2-week cycles, 40-60% calibration band.
5. **Routing** — which file to load, and when not to load one.

If you can delete a passage and the model would still behave the same way, delete it. If a passage reads like a textbook summary, it is one.

### stages/

Self-contained operational files — each applies the relevant pillars in place rather than sending Claude to read them separately. Each opens with the mindset for that stage and what to refuse.

- `pre-revenue.md` — Day 1 to first paying customer. Job statement, 5-minute canvas, the five tests (not-not, job, Lean Canvas, napkin, Mafia Offer), what to do instead of building, solo-founder subordination, weekly review, graduation.
- `restart.md` — Had customers, lost them. Forensics before anything (product vs. fit vs. sales execution failure), the four forensic questions, restart sequence, anti-patterns, graduation.
- `growth.md` — Post-revenue to ~$100K MRR, team under 10. Instrumentation, "Before You Build" awareness check, brand vs. activation, awareness cadence, subordination matrix, customer factory, WIP/buffer/estimation, fever chart, JTBD rhythm, graduation.
- `scaling.md` — $100K+ MRR or 10+ people. Policy constraints, awareness per segment, two-layer constraint work, hiring as elevation, multi-quarter initiatives, business-model constraints, CCPM and timeline communication, handling a constraint shift.

### references/

Loaded on demand when the router points at one. Each is stance + protocol for a single pillar — never a summary of the source material.

- `intake.md` — First-conversation questions, vague-answer probes, funnel break scan, named protocols
- `probes.md` — The question behind the question, nine wrong diagnoses, probes by situation, anti-patterns
- `pillar-goldratt.md` — Theory of Constraints: identifying it, signals by function, context-switching tax, pacing
- `pillar-maurya.md` — Customer Factory: canonical vocabulary, constraint by maturity, repeatability, Innovator's Bias, referral gates
- `pillar-sharp.md` — Mental & physical availability: the four-question diagnostic, CEP mapping exercise, physical availability audit
- `pillar-ritson.md` — Marketing strategy discipline: the five-question diagnostic, positioning rules, differentiation vs. distinctiveness, budget split, positioning sprint
- `jtbd.md` — Switch interviews (three layers of language, questions by force, sample size), deciding what to build, JTBD → positioning, demand generation vs. capture
- `pillar-strategy.md` — Testing whether a plan is a strategy, coaching moves for fog/overextension/competition/negotiation, alignment replaces control
- `estimation.md` — CCPM method and multipliers, estimate vs. measure vs. time-box, calibrating to 50%
- `weekly-review.md` — Review format per stage, plus the Customer Factory funnel diagram template and rendering
- `state.md` — Write triggers, entry templates, bootstrap, edge cases (a machine contract — keep it precise, not terse)

### scripts/

- `render-diagram.mjs` — Renders `.mmd` Mermaid files to SVG using `beautiful-mermaid`. Requires `npm install` in `scripts/` first.
- `package.json` — Declares `beautiful-mermaid` dependency

## Key Relationships

The framework flows in one direction: **JTBD provides the strategic intelligence** (what job does the customer hire you to do?), **Goldratt provides the system-level thinking** (find the constraint, exploit/subordinate/elevate), **Maurya maps it to the startup business model** (customer factory steps as the "machines"), **Sharp provides the diagnosis when the constraint is at the top of the funnel** (nobody knows you exist), **Ritson provides the strategic discipline that makes the other frameworks coherent** (diagnosis before strategy, strategy before tactics), and **Rumelt, Clausewitz, and Dixit & Nalebuff provide the strategic reasoning layer** (is this actually a strategy? how to operate under uncertainty, and what the other side will do).

JTBD sits underneath the other five — struggling moments are Category Entry Points, the four forces explain why customers flow (or don't) through the factory, and under-served outcomes tell you what to build.

When editing, maintain this hierarchy. Changes to core concepts in one pillar should be checked against the others for consistency. The stage files synthesize all six pillars — they should never contradict the reference files.

## Content Ownership

Operational content (what to do, when, how) belongs in stage files. Pillar-specific stance and protocol belongs in references. If content appears in both, the stage file is authoritative for the operational version and the reference is authoritative for the protocol. **Don't duplicate — cross-reference.**

Duplication is the failure mode this repo drifts toward. Before adding anything, grep for it. The GOLEAN cycle, the fever chart thresholds, the "looks cool isn't validation" rule, and the awareness diagnostic have each been written three or more times in past versions; each now has exactly one home:

| Content | Single home |
|---|---|
| GOLEAN cycle + reflexes | `SKILL.md` |
| Response contract, stance, refusals | `SKILL.md` (per-file stance blocks are stage/pillar-specific, not repeats) |
| State read schema | `SKILL.md`; writes in `references/state.md` |
| 5-minute canvas | `stages/pre-revenue.md` |
| Subordination matrix, fever chart, WIP rules | `stages/growth.md` |
| Awareness diagnostic (3 questions) | `stages/growth.md`; the per-segment version in `stages/scaling.md` |
| CEP mapping, physical availability audit | `references/pillar-sharp.md` |
| Buffer multipliers, calibration | `references/estimation.md` |
| Weekly review formats + funnel diagram | `references/weekly-review.md` |
