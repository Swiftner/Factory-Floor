# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

A Claude Code skill called **Factory Floor** — a startup operating system for prioritization and execution. It combines Goldratt's constraint thinking, Maurya's customer factory model, Sharp's brand growth laws, Ritson's marketing strategy discipline, and a strategic reasoning layer (Rumelt, Clausewitz, Dixit & Nalebuff), with JTBD as the strategic intelligence layer underneath.

## Architecture

The skill is **decision-tree routed**: SKILL.md is a thin router that sorts the request into one of two modes, identifies the startup's stage and constraint, then loads one file. Ten files, ~55KB total. Context stays lean — a day-1 founder never sees fever charts, and a year-3 company doesn't re-read the napkin test.

### SKILL.md (the router)

Contains: frontmatter, **the two-mode sort**, the order of operations, the feedback rule, the confidence table, the decision tree, candidate hypotheses, the routing table, the cycle and reflexes, and the inline state read schema.

**The two-mode sort is the spine of the skill.** Field experiments on AI advice split by task, not by user: on structured, verifiable work an assistant lifts the least experienced most (+34%); on ambiguous, judgment-dependent work it makes them worse (−8% to −19pp). So PROCEDURE requests get maximum directiveness, JUDGMENT requests get a discriminating test and no prescription. Any new content must declare which mode it serves. When in doubt it is JUDGMENT.

### The editing principle: assume the model knows the theory

**No file in this skill teaches a framework.** Goldratt, Maurya, Sharp, Ritson, Christensen, Moesta, Ulwick, Rumelt, Clausewitz, Dixit & Nalebuff, Binet & Field are all in the model's training data. Explaining Double Jeopardy, Little's Law, PERT, or the prisoner's dilemma spends context to tell the model what it already knows.

What files carry instead, and what any edit must preserve:

1. **Stance** — the opinionated posture we want the model in for this situation. Every file opens with one.
2. **Refusals** — what this skill will not accept from a founder.
3. **Protocols** — the specific sequences, questions, and verbatim phrasings.
4. **Our numbers** — thresholds that are a judgment call, not a fact: buffer × 0.4, WIP = team size, 8-12 interviews, 3-5 conversations/week, 8-15 CEPs, 3x rule, 2-week cycles, 40-60% calibration band.
5. **Routing** — which file to load, and when not to load one.
6. **Exception conditions** — when the opinion above does *not* apply.

If you can delete a passage and the model would still behave the same way, delete it. If a passage reads like a textbook summary, it is one.

### An opinion without an exception condition is a bug

This skill is deliberately opinionated, and the failure mode of opinionated instructions is rigidity: the model follows the rule past the point where it stops being true, argues with a founder who happens to be right, or forces a confident diagnosis it can't support.

Every strong claim needs its boundary stated. In practice that means:

- **Defaults, not laws.** `SKILL.md` keeps only four genuine `Always` rules; everything else bends when the founder explicitly asks for something else. New behavioral rules must say when they don't apply.
- **Priors, not verdicts.** The nine misdiagnoses in `probes.md` each carry a "it's right when" row. Any new pattern-match needs the same.
- **Signals, not gates.** Stage thresholds are heuristics; when numbers and symptoms disagree, symptoms win.
- **Confidence matched to evidence.** "I don't know yet" is a supported output, and the calibration table in `SKILL.md` says when to use it.
- **Name apparent contradictions and resolve them.** If two frameworks appear to conflict, write the resolution down rather than leaving the model to guess.
- **Directiveness follows the mode, not the founder's distress.** A lost founder should get *more* force on procedure and *less* certainty on diagnosis, both at once.

When adding an opinion, write the sentence that starts "this is wrong when…" If you can't, you don't understand the opinion well enough to include it.

### stages/

Mindset + refusals + the stage-specific sequence. Each opens with the posture for that stage, what not to accept, and where that bends.

- `pre-revenue.md` — Day 1 to first paying customer. The job question, the sequence, solo-founder subordination, graduation.
- `restart.md` — Had customers, lost them. The first question, four forensic questions, the restart sequence, anti-patterns.
- `growth.md` — Post-revenue to ~$100K MRR, under 10 people. Instrumentation, exploit/subordinate, subordination matrix, WIP and buffer discipline, JTBD rhythm.
- `scaling.md` — $100K+ MRR or 10+ people. Policy constraints, two-layer constraint work, hiring as elevation, multi-quarter initiatives, constraint shifts.

### references/

- `intake.md` — First conversation, vague-answer probes, what's enough to proceed
- `probes.md` — The question behind the question, nine usually-wrong diagnoses with their "it's right when" row, anti-patterns
- `playbooks.md` — **Every mechanical procedure in one file.** Funnel scan, napkin test, five tests, Mafia Offer, switch interviews, CEP mapping, physical availability audit, positioning sprint, awareness check, estimation and buffers, premortem, calibration scoring
- `weekly-review.md` — Format per stage, prediction scoring, funnel diagram
- `state.md` — Write triggers, templates, bootstrap, edge cases (a machine contract — precise, not terse)

### scripts/

- `render-diagram.mjs` — Renders `.mmd` Mermaid files to SVG using `beautiful-mermaid`. Requires `npm install` in `scripts/` first.
- `package.json` — Declares `beautiful-mermaid` dependency

## Key Relationships

JTBD supplies the intelligence (what job is being hired), Goldratt the system view (one constraint; exploit, subordinate, elevate), Maurya the machine (the five factory steps), Sharp the diagnosis when the break is at the top of the funnel, Ritson the strategic discipline, and Rumelt/Clausewitz/Dixit & Nalebuff the reasoning layer. Struggling moments and Category Entry Points are the same list.

The model knows all of it. What the repo owns is the sequence in which those ideas get applied, and the refusal to state a conclusion the numbers don't support.

**Two apparent contradictions are resolved deliberately — keep them resolved.** Sharp's "cast wider" and Ritson's "target narrowly" operate on different dials (reach vs. targeting), stated in `playbooks.md` under the positioning sprint. And "exactly one constraint" bends twice: an existential threat runs alongside, and an oscillating constraint means undiagnosed rather than pick-one.

## Content Ownership

Operational content (what to do, when, how) belongs in stage files. Pillar-specific stance and protocol belongs in references. If content appears in both, the stage file is authoritative for the operational version and the reference is authoritative for the protocol. **Don't duplicate — cross-reference.**

Duplication is the failure mode this repo drifts toward. Before adding anything, grep for it. The experiment cycle, the fever chart thresholds, the "looks cool isn't validation" rule, and the awareness diagnostic were each written three or more times in past versions; each now has exactly one home:

| Content | Single home |
|---|---|
| Two-mode sort, order of operations, reflexes | `SKILL.md` |
| Confidence table, feedback rule | `SKILL.md` (per-file mindset blocks are stage-specific, not repeats) |
| State read schema | `SKILL.md`; writes in `references/state.md` |
| 5-minute canvas, switch interviews | `references/playbooks.md` |
| Subordination matrix, WIP rules | `stages/growth.md` |
| Awareness check, CEP mapping | `references/playbooks.md` |
| Every mechanical procedure | `references/playbooks.md` |
| Buffer multipliers, calibration scoring | `references/playbooks.md` |
| Weekly review formats, prediction scoring, funnel diagram | `references/weekly-review.md` |
