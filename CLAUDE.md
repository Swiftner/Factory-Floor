# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

A Claude Code skill called **Factory Floor** — a startup operating system for prioritization and execution. It combines Goldratt's constraint thinking with Maurya's customer factory model, using Sharp's brand growth research as a pre-check against the builder's instinct.

## Architecture

The skill is **stage-routed**: SKILL.md is a thin router (~200 lines) that runs the triage, identifies the startup's stage, then instructs Claude to read the appropriate stage file. This keeps context lean — a day-1 founder never sees fever charts, and a year-3 company doesn't re-read the napkin test.

### SKILL.md (the router)

Contains: frontmatter, core insight (the four questions), triage, stage routing instructions, decision framework (compressed), anti-patterns, and vocabulary. This is what Claude Code loads when the skill is invoked. **After the triage, SKILL.md tells Claude to read one of the stage files.**

### stages/

Stage files are self-contained — each integrates the relevant parts of JTBD, Goldratt, Maurya, and Sharp where they're needed, rather than referencing them as separate reading.

- `pre-revenue.md` — Day 1 through first paying customer. Problem validation, the five tests (not-not, job, Lean Canvas, napkin, Mafia Offer), JTBD basics (forces, canvas), solo-founder subordination, day-1 weekly review, worked example (killing an idea on the napkin).
- `growth.md` — Post-revenue through ~$1M ARR, team under ~10. Full constraint cascade, "Before You Build" check (Sharp integrated), Goldratt's five steps + subordination matrix, customer factory, GOLEAN, WIP/buffer/estimation, JTBD in the weekly rhythm, two worked examples (growth stall + constraint shift), light weekly review.
- `scaling.md` — $1M+ ARR, 10+ people. Policy constraints, multi-team constraint work, hiring as elevation, multi-quarter initiatives, business model constraints, full CCPM + buffer management, timeline communication, worked example (hidden policy constraint), full weekly review.

### references/

Deep-dive concept files. Claude reads these when more detail is needed on a specific framework. Operational content (protocols, checklists, weekly routines) lives in the stage files; references hold theory, definitions, and methodology.

- `pillar-goldratt.md` — Theory of Constraints (Five Focusing Steps, throughput accounting, Little's Law, Drum-Buffer-Rope, context-switching tax)
- `pillar-maurya.md` — Customer Factory (blueprint, stage-constraint mapping, GOLEAN, referral loops, local vs. global optimization, Innovator's Bias/Gift)
- `pillar-sharp.md` — Mental & Physical Availability (CEPs, distinctiveness vs differentiation, reach vs frequency, laws of brand growth, CEP mapping exercise, physical availability audit, operational protocol)
- `jtbd.md` — Jobs To Be Done (forces of progress, switch interviews, Ulwick's job map, opportunity scoring, positioning from JTBD, demand generation vs. capture, hiring/firing)
- `estimation.md` — Estimation theory (why estimates fail, CCPM method, PERT, cycle time, Monte Carlo, cone of uncertainty, buffer sizing methods)
- `weekly-diagrams.md` — Customer Factory Funnel diagram template for the weekly constraint review

### scripts/

- `render-diagram.mjs` — Renders `.mmd` Mermaid files to SVG using `beautiful-mermaid`. Requires `npm install` in `scripts/` first.
- `package.json` — Declares `beautiful-mermaid` dependency

## Key Relationships

The framework flows in one direction: **JTBD provides the strategic intelligence** (what job does the customer hire you to do?), **Goldratt provides the system-level thinking** (find the constraint, exploit/subordinate/elevate), **Maurya maps it to the startup business model** (customer factory steps as the "machines"), and **Sharp provides the diagnosis when the constraint is at the top of the funnel** (nobody knows you exist). JTBD sits underneath the other three — struggling moments are Category Entry Points, the four forces explain why customers flow (or don't) through the factory, and under-served outcomes tell you what to build.

When editing, maintain this hierarchy. Changes to core concepts in one pillar should be checked against the other two for consistency. The stage files synthesize all four pillars — they should never contradict the reference files.

## Content Ownership

Operational content (what to do, when, how) belongs in stage files. Conceptual content (theory, definitions, methodology, research) belongs in references. If content appears in both places, the stage file is the authoritative operational version and the reference is the authoritative conceptual version. Don't duplicate — cross-reference.
