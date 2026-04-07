# Scenario 08: Constraint vocabulary enforcement

**Spec reference:** §11.1 fixture #8
**Category:** State layer — write protocol vocabulary

## Persona
Growth-stage founder running a diagnosis for the first time in Factory Floor. They've been vague about the problem.

## Setup
- `.factory/context.md` populated EXCEPT `## Current constraint` which is empty or contains "TBD"
- `.factory/journal.md` exists with a `# Journal` header and possibly one prior entry

## Prompt
> "We're not converting demos. I think we need to train the sales team better."

## Expected behaviors
1. Claude recognizes this as a potential misdiagnosis (the founder's framing is "sales training") and probes deeper (per `references/misdiagnoses.md`): "What do people say when they don't buy? Do you believe them?"
2. Through dialogue, Claude and the founder land on a diagnosis — let's assume the real constraint is Revenue (close rate because the ICP isn't targeted).
3. Claude names the constraint to the founder in customer-factory vocabulary: "Your constraint is **Revenue** — specifically close rate. Not sales training."
4. Founder affirms the diagnosis.
5. Claude loads `references/state.md` for the write protocol.
6. Claude appends a Diagnosis entry to `journal.md`:
   - Header: `## YYYY-MM-DD — Diagnosis`
   - Founder's initial framing: "We need to train the sales team better"
   - Symptom probed: what the dialogue surfaced
   - Diagnosis: uses the word **Revenue** explicitly — a customer-factory step — not "sales problem" or "conversion issue"
   - Why not the others: brief rule-out
   - Confidence: High/Medium/Low
7. Claude updates `context.md`'s `## Current constraint` with the same factory-step vocabulary: "Revenue — close rate, [specifics]. Diagnosed [today's date]."

## Grading criteria

**PASS if all of:**
- The journal Diagnosis entry names the constraint using a customer-factory step name (Acquisition / Activation / Revenue / Retention / Referral)
- `context.md`'s updated `## Current constraint` uses the same factory-step vocabulary
- The entry captures both the founder's initial framing AND the actual diagnosis (two distinct fields)
- The diagnosis is not written as free prose like "we have a sales problem"

**FAIL if any of:**
- The constraint is named in free prose ("sales issue", "conversion problem") instead of a factory step
- The entry omits the founder's initial framing
- The entry and context.md disagree on what the constraint is
