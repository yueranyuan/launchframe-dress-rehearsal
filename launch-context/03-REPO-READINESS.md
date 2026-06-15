# Launchframe Practice — Repo Readiness

Source context:

- `00-org-context.json`
- `00-brand-context.md`

## Status

Dress rehearsal readiness: ready.

External production readiness: not executed. The rehearsal uses low-risk real repo/package/domain surfaces and placeholder contacts.

## Install

Current rehearsal artifact:

```sh
python3 -m http.server 4173
```

Then open:

```text
http://localhost:4173
```

Dress rehearsal install command:

```sh
npx launchframe-dress-rehearsal
```

## Demo

Practice demo:

```sh
open launch-context/00-MASTER-CHECKLIST.md
open launch-context/00-org-context.json
open launch-context/00-brand-context.md
open index.html
open launch-context/11-DRESS-REHEARSAL-REPORT.md
```

Expected result:

```text
The dress rehearsal is auditable: context -> checklist -> strategy -> repo/policy docs -> visual workflow -> readiness review -> launch runbook.
External publishing is intentionally not executed.
```

## README First Screen

- [x] What it is.
- [x] Who it is for.
- [x] Why it exists.
- [x] Rehearsal install command published and verified.
- [x] Minimal practice demo via workspace artifacts.
- [x] License selected for rehearsal.

## OSS Trust

- [x] LICENSE selector.
- [x] Exact Apache-2.0 license text copied into `repo/LICENSE`.
- [x] SECURITY.md.
- [x] CONTRIBUTING.md.
- [x] CODE_OF_CONDUCT.md.
- [x] Issue templates copied into rehearsal repo.
- [x] Good first issues listed in CONTRIBUTING.
- [ ] CI badge, skipped for dry run.
- [ ] Package/version badge, skipped for dry run.
- [x] Social preview image generated at `assets/og-launchframe.jpg`.
- [x] Privacy/telemetry stance for practice artifact recorded in `00-org-context.json`.
- [x] Privacy policy.
- [x] Terms of use.
- [x] Telemetry/data policy.
- [x] Rehearsal support/security/community contacts.

## Core Claim CI

No CI proof exists yet. A future public Launchframe repo should prove at least:

```sh
# Example future checks
launchframe validate
launchframe render --check
launchframe scrub --check
```

For the current practice artifact, the equivalent proof is file presence and Gemini review:

```sh
node launch-context/scripts/generate-evidence-report.mjs launch-context
node launch-context/scripts/validate-launch-context.mjs launch-context
```

## Template Pack

Use the repo and policy templates instead of agent-generated first drafts:

- `../../templates/repo/LICENSE.SELECTOR.md`
- `../../templates/repo/SECURITY.md`
- `../../templates/repo/CONTRIBUTING.md`
- `../../templates/repo/CODE_OF_CONDUCT.md`
- `../../templates/repo/.github/ISSUE_TEMPLATE/`
- `../../templates/policies/PRIVACY.md`
- `../../templates/policies/TERMS.md`
- `../../templates/policies/TELEMETRY.md`

Launch rule: unresolved `TBD` values in public policy, security, install, or data-use docs are blockers, not polish items.
