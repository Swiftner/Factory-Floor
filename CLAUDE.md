# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

A Claude Code skill called **Factory Floor** — a startup operating system for prioritization and execution. It combines Goldratt's constraint thinking with Maurya's customer factory model, using Sharp's brand growth research as a pre-check against the builder's instinct.

## Architecture

`SKILL.md` is the main skill file. It contains the frontmatter (trigger conditions, description) and the complete framework: triage questions, constraint cascade, the "Before You Build" pre-check, a worked example, the Goldratt + Maurya system, decision framework, anti-patterns, scalable weekly review (light and full versions), and vocabulary. This is the file that Claude Code loads when the skill is invoked.

### references/

- `pillar-goldratt.md` — Theory of Constraints (Five Focusing Steps, throughput accounting, Little's Law, WIP limits)
- `pillar-maurya.md` — Customer Factory (Acquisition → Activation → Revenue → Retention → Referral, GOLEAN cycle, constraint identification by startup stage)
- `pillar-sharp.md` — Mental & Physical Availability (Category Entry Points, distinctiveness vs differentiation, reach vs frequency, the Sharp diagnostic)
- `estimation.md` — Estimation and timeline management (Critical Chain, CCPM, buffer sizing, fever chart, PERT, cycle time, relay race behavior, why estimates fail)
- `weekly-diagrams.md` — Customer Factory Funnel diagram template for the weekly constraint review

### scripts/

- `render-diagram.mjs` — Renders `.mmd` Mermaid files to SVG using `beautiful-mermaid`. Requires `npm install` in `scripts/` first.
- `package.json` — Declares `beautiful-mermaid` dependency

## Key Relationships

The framework flows in one direction: **Goldratt provides the system-level thinking** (find the constraint, exploit/subordinate/elevate), **Maurya maps it to the startup business model** (customer factory steps as the "machines"), and **Sharp provides the diagnosis when the constraint is at the top of the funnel** (nobody knows you exist).

When editing, maintain this hierarchy. Changes to core concepts in one pillar should be checked against the other two for consistency. The `SKILL.md` synthesizes all three — it should never contradict the reference files.
