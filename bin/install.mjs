#!/usr/bin/env node
import { cpSync, mkdirSync, rmSync, existsSync } from 'fs'
import { execSync } from 'child_process'
import { resolve, dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { homedir } from 'os'

const __dirname = dirname(fileURLToPath(import.meta.url))
const pkgRoot = resolve(__dirname, '..')

// Always install for Claude Code. Also install for Codex when ~/.codex exists,
// which is what the README promises.
const targets = [join(homedir(), '.claude', 'skills', 'factory-floor')]
if (existsSync(join(homedir(), '.codex'))) {
  targets.push(join(homedir(), '.codex', 'skills', 'factory-floor'))
}

const files = [
  'SKILL.md',
  'references/intake.md',
  'references/probes.md',
  'references/playbooks.md',
  'references/weekly-review.md',
  'references/state.md',
  'stages/pre-revenue.md',
  'stages/restart.md',
  'stages/growth.md',
  'stages/scaling.md',
  'scripts/render-diagram.mjs',
  'scripts/package.json',
]

console.log('Installing Factory Floor skill...\n')

for (const target of targets) {
  // Remove reference/stage files from previous versions before copying. Without
  // this, upgrading leaves deleted files (pillar-*.md, jtbd.md, estimation.md,
  // misdiagnoses.md, coaching-patterns.md, weekly-diagrams.md) on disk, where the
  // router no longer points at them but the model can still read them.
  for (const dir of ['references', 'stages']) {
    rmSync(join(target, dir), { recursive: true, force: true })
    mkdirSync(join(target, dir), { recursive: true })
  }
  mkdirSync(join(target, 'scripts'), { recursive: true })

  for (const file of files) {
    try {
      cpSync(join(pkgRoot, file), join(target, file))
    } catch (err) {
      console.error(`  Failed to copy ${file}: ${err.message}`)
      process.exit(1)
    }
  }

  console.log(`  Installed to ${target}`)
}

// Install diagram renderer dependencies (Claude Code target only — the renderer
// is a local helper, not part of the skill's routing).
console.log('\nInstalling diagram renderer...')
try {
  execSync('npm install --silent', { cwd: join(targets[0], 'scripts'), stdio: 'inherit' })
} catch (err) {
  console.error(`  Failed to install diagram renderer: ${err.message}`)
  process.exit(1)
}

console.log('\nThe skill triggers automatically when you ask Claude Code about')
console.log('prioritisation, bottlenecks, weekly reviews, or what to work on next.')
