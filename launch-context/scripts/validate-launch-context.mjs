#!/usr/bin/env node
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const defaultRoot = resolve(scriptDir, '..');
const root = resolve(process.argv[2] || defaultRoot);

const requiredFiles = [
  '00-org-context.json',
  '00-brand-context.md',
  '00-MASTER-CHECKLIST.md',
  '01-STRATEGY.md',
  '02-SHOW-HN.md',
  '03-REPO-READINESS.md',
  '07-ASSETS.md',
  '08-LAUNCH-DAY-RUNBOOK.md',
  '09-RETRO.md',
  '10-WORKLOG.md',
  '11-DRESS-REHEARSAL-REPORT.md',
  'PENDING.md',
];

const requiredOrgPaths = [
  ['organization', 'public_name'],
  ['organization', 'website'],
  ['product', 'public_name'],
  ['product', 'one_sentence_description'],
  ['source_of_truth', 'online_repo_url'],
  ['source_of_truth', 'package_registry_url'],
  ['source_of_truth', 'website_url'],
  ['surfaces', 'package_name'],
  ['surfaces', 'install_command'],
  ['surfaces', 'domain'],
  ['verification', 'expected_pass'],
  ['verification', 'clean_install_verified'],
];

const failures = [];
const warnings = [];

function readText(relativePath) {
  const path = join(root, relativePath);
  if (!existsSync(path)) {
    failures.push(`missing file: ${relativePath}`);
    return '';
  }
  return readFileSync(path, 'utf8');
}

function valueAt(object, path) {
  return path.reduce((current, key) => {
    if (current && typeof current === 'object' && key in current) return current[key];
    return undefined;
  }, object);
}

for (const file of requiredFiles) readText(file);

let org = {};
try {
  org = JSON.parse(readText('00-org-context.json'));
} catch (error) {
  failures.push(`invalid JSON: 00-org-context.json (${error.message})`);
}

for (const path of requiredOrgPaths) {
  const value = valueAt(org, path);
  if (value === undefined || value === null || value === '') {
    failures.push(`missing org context field: ${path.join('.')}`);
  }
}

const checklist = readText('00-MASTER-CHECKLIST.md');
for (const needle of ['Current Launch Dashboard', 'Evidence Summary', 'GitHub Pages certificate', 'Package install']) {
  if (!checklist.includes(needle)) failures.push(`master checklist missing section/evidence: ${needle}`);
}

const pending = readText('PENDING.md');
if (!pending.includes('LF-P-001') || !pending.includes('GitHub Pages HTTPS certificate')) {
  failures.push('pending queue missing GitHub Pages HTTPS certificate wait');
}

const report = readText('11-DRESS-REHEARSAL-REPORT.md');
for (const needle of ['launchframe-dress-rehearsal', 'launchframe.site', 'npm package', 'GitHub repo']) {
  if (!report.includes(needle)) failures.push(`dress rehearsal report missing surface: ${needle}`);
}

const security = readText('repo/SECURITY.md');
if (security.includes('volter-ai/launchframe') || security.includes('launchframe.test')) {
  failures.push('repo/SECURITY.md still contains stale rehearsal URL');
}

const terms = readText('repo/docs/TERMS.md');
if (terms.includes('TBD before real launch')) warnings.push('terms retain owner/legal-review placeholders, which is acceptable only for rehearsal mode');

const website = valueAt(org, ['organization', 'website']);
if (typeof website === 'string' && website.startsWith('https://launchframe.site')) {
  failures.push('org website claims HTTPS before GitHub Pages certificate is enforced');
}

if (failures.length) {
  console.error('Launch context validation failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  if (warnings.length) {
    console.error('\nWarnings:');
    for (const warning of warnings) console.error(`- ${warning}`);
  }
  process.exit(1);
}

console.log(`Launch context validation passed for ${root}`);
if (warnings.length) {
  console.log('Warnings:');
  for (const warning of warnings) console.log(`- ${warning}`);
}
