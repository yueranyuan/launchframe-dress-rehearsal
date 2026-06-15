#!/usr/bin/env node
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const root = resolve(process.argv[2] || join(scriptDir, '..'));
const checklistPath = join(root, '00-MASTER-CHECKLIST.md');
const outputPath = join(root, 'EVIDENCE-REPORT.md');

if (!existsSync(checklistPath)) {
  console.error(`missing checklist: ${checklistPath}`);
  process.exit(1);
}

const checklist = readFileSync(checklistPath, 'utf8');
const marker = '### Evidence Summary';
const start = checklist.indexOf(marker);
if (start === -1) {
  console.error('missing Evidence Summary section');
  process.exit(1);
}

const section = checklist
  .slice(start + marker.length)
  .split(/\n##\s/)[0]
  .trim()
  .split('\n')
  .filter((line) => line.trim().startsWith('|'));

const rows = section
  .slice(2)
  .map((line) => line.split('|').slice(1, -1).map((cell) => cell.trim()))
  .filter((cells) => cells.length === 4 && cells.some(Boolean))
  .map(([gate, evidence, result, date]) => ({ gate, evidence, result, date }));

if (!rows.length) {
  console.error('Evidence Summary table has no rows');
  process.exit(1);
}

const failures = rows.filter((row) => !row.gate || !row.evidence || !row.result || !row.date);
if (failures.length) {
  console.error('Evidence Summary rows must have gate, evidence, result, and date');
  for (const row of failures) console.error(JSON.stringify(row));
  process.exit(1);
}

const lines = [
  '# Launchframe Evidence Report',
  '',
  'Generated from `00-MASTER-CHECKLIST.md` by `scripts/generate-evidence-report.mjs`.',
  '',
  '| Gate | Evidence | Result | Date |',
  '|---|---|---|---|',
  ...rows.map((row) => `| ${row.gate} | ${row.evidence} | ${row.result} | ${row.date} |`),
  '',
  '## External Waits',
  '',
  '- None for rehearsal. GitHub Pages HTTPS is enforced for `launchframe.site`.',
  '',
];

writeFileSync(outputPath, lines.join('\n'));
console.log(`wrote ${outputPath}`);
