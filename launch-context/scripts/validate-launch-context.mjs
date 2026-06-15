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
  'EVIDENCE-REPORT.md',
  'POLICY-LAUNCH-GATE.md',
  'PENDING.md',
  'repo/LICENSE',
  'repo/LICENSE.SELECTOR.md',
  'repo/CONTRIBUTING.md',
  'repo/CODE_OF_CONDUCT.md',
  'repo/.github/ISSUE_TEMPLATE/bug_report.yml',
  'repo/.github/ISSUE_TEMPLATE/feature_request.yml',
  'repo/.github/ISSUE_TEMPLATE/question.yml',
  'repo/.github/workflows/launch-context.yml',
  'repo/docs/TELEMETRY.md',
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

function existingPath(relativePaths) {
  for (const relativePath of relativePaths) {
    if (existsSync(join(root, relativePath))) return relativePath;
  }
  return null;
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

const evidenceReport = readText('EVIDENCE-REPORT.md');
for (const needle of ['Launchframe Evidence Report', 'Package install', 'GitHub Pages HTTPS certificate']) {
  if (!evidenceReport.includes(needle)) failures.push(`evidence report missing expected content: ${needle}`);
}

const policyGate = readText('POLICY-LAUNCH-GATE.md');
for (const needle of ['Required Before A Real Launch', 'support@example.com', 'TBD before real launch', 'Resolved During Rehearsal', 'repo/LICENSE']) {
  if (!policyGate.includes(needle)) failures.push(`policy launch gate missing expected placeholder: ${needle}`);
}

const license = readText('repo/LICENSE');
for (const needle of ['Apache License', 'Version 2.0, January 2004', 'TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION']) {
  if (!license.includes(needle)) failures.push(`repo/LICENSE missing Apache-2.0 text: ${needle}`);
}

const licenseSelector = readText('repo/LICENSE.SELECTOR.md');
if (!licenseSelector.includes('- [x] Exact upstream license text copied before any real public repo launch.')) {
  failures.push('repo/LICENSE.SELECTOR.md does not mark exact license text as copied');
}

const repoReadme = readText('repo/README.md');
for (const needle of ['actions/workflows/launch-context.yml/badge.svg', 'img.shields.io/npm/v/launchframe-dress-rehearsal']) {
  if (!repoReadme.includes(needle)) failures.push(`repo/README.md missing badge: ${needle}`);
}

const workflow = readText('repo/.github/workflows/launch-context.yml');
for (const needle of ['actions/checkout@v5', 'actions/setup-node@v5', 'FORCE_JAVASCRIPT_ACTIONS_TO_NODE24', 'generate-evidence-report.mjs', 'validate-launch-context.mjs']) {
  if (!workflow.includes(needle)) failures.push(`launch context workflow missing expected command/config: ${needle}`);
}

const security = readText('repo/SECURITY.md');
if (security.includes('volter-ai/launchframe') || security.includes('launchframe.test')) {
  failures.push('repo/SECURITY.md still contains stale rehearsal URL');
}

const terms = readText('repo/docs/TERMS.md');
if (terms.includes('TBD before real launch')) warnings.push('terms retain owner/legal-review placeholders, which is acceptable only for rehearsal mode');

const sitePath = existingPath(['site/index.html', '../index.html']);
const ogPath = existingPath(['site/assets/og-launchframe.jpg', '../assets/og-launchframe.jpg']);
const demoGifPath = existingPath(['site/assets/launchframe-demo.gif', '../assets/launchframe-demo.gif']);
if (!sitePath) failures.push('missing site index for social preview metadata check');
if (!ogPath) failures.push('missing social preview image: assets/og-launchframe.jpg');
if (!demoGifPath) failures.push('missing demo GIF: assets/launchframe-demo.gif');

const site = sitePath ? readText(sitePath) : '';
for (const needle of ['og:image', 'twitter:card', 'assets/og-launchframe.jpg']) {
  if (!site.includes(needle)) failures.push(`site/index.html missing social preview metadata: ${needle}`);
}

if (!repoReadme.includes('assets/launchframe-demo.gif')) {
  failures.push('repo/README.md missing demo GIF reference');
}

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
