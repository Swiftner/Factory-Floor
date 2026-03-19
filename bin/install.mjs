#!/usr/bin/env node
import { cpSync, mkdirSync } from 'fs'
import { execSync } from 'child_process'
import { resolve, dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { homedir } from 'os'

const __dirname = dirname(fileURLToPath(import.meta.url))
const pkgRoot = resolve(__dirname, '..')
const target = join(homedir(), '.claude', 'skills', 'factory-floor')

console.log('Installing Factory Floor skill...\n')

// Copy skill files
mkdirSync(join(target, 'references'), { recursive: true })
mkdirSync(join(target, 'scripts'), { recursive: true })

const files = [
  'SKILL.md',
  'references/pillar-goldratt.md',
  'references/pillar-maurya.md',
  'references/pillar-sharp.md',
  'references/tool-setup.md',
  'references/weekly-diagrams.md',
  'scripts/render-diagram.mjs',
  'scripts/package.json',
]

for (const file of files) {
  cpSync(join(pkgRoot, file), join(target, file))
}

// Install diagram renderer dependencies
console.log('Installing diagram renderer...')
execSync('npm install --silent', { cwd: join(target, 'scripts'), stdio: 'inherit' })

console.log(`\n  Installed to ${target}\n`)
console.log('The skill triggers automatically when you ask Claude Code about')
console.log('prioritisation, bottlenecks, weekly reviews, or what to work on next.')
