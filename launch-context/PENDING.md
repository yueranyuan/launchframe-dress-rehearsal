# Launchframe Practice — Pending Items

## Status Legend

- `owner`: needs owner approval or override.
- `sent_to_owner`: question/form has been sent; waiting for owner response.
- `external`: waiting on provider, DNS, certificate, review, publish propagation, or another outside system.
- `ops`: actionable implementation or verification work.
- `defaulted`: safe default applied; owner can override later.
- `resolved`: no longer pending.

## Pending Queue

| ID | Type | Item | Current default / next action | Owner or system | Blocks | Last checked | Status |
|---|---|---|---|---|---|---|---|
| LF-P-002 | defaulted | Decide whether to keep, archive, or delete the public rehearsal repo. | Keep as rehearsal evidence until owner says otherwise. | Owner | Cleanup policy only; not blocking rehearsal completion. | 2026-06-15 | defaulted |
| LF-P-003 | owner | Decide whether to keep, narrow, or revoke the npm bypass token after rehearsal use. | Keep only if more rehearsals need it; otherwise revoke/narrow. | Owner / npm | Token hygiene. | 2026-06-15 | pending |
| LF-P-004 | owner | Replace example.com support/security/privacy/legal contacts before any production launch. | Keep placeholders only for rehearsal artifacts. | Owner | Production policy/contact claims. | 2026-06-15 | pending |

## Recently Resolved

| ID | Resolved date | Item | Resolution | Evidence |
|---|---|---|---|---|
| LF-R-001 | 2026-06-15 | npm package publish initially blocked by 2FA token. | Created signed-browser npm token and published with isolated temporary npm userconfig. | `00-external-prereqs.md`, `11-DRESS-REHEARSAL-REPORT.md` |
| LF-R-002 | 2026-06-15 | Deployed site copy still said npm was at a 2FA gate and used HTTPS canonical metadata before certificate issuance. | Updated local site/docs, pushed public repo commits `08fca8a` and `e2ec0ac`, and verified `https://launchframe.site/` serves the corrected `index.html` hash with a clean console. | `site/index.html`, `review/screenshots/launchframe-http-desktop-after.png`, `review/screenshots/launchframe-http-mobile-after.png` |
| LF-R-003 | 2026-06-15 | Public issue #1 requested a launch context validator. | Added sanitized public `launch-context/` bundle and `validate-launch-context.mjs` in public commit `b830f0f`; closed issue #1. | `scripts/validate-launch-context.mjs`, public repo `launch-context/` |
| LF-R-004 | 2026-06-15 | Public issue #2 requested generated evidence report. | Added `generate-evidence-report.mjs` and generated `EVIDENCE-REPORT.md` in public commit `3e4c3a8`; closed issue #2. | `scripts/generate-evidence-report.mjs`, `EVIDENCE-REPORT.md` |
| LF-R-005 | 2026-06-15 | Public issue #3 requested policy placeholder tightening. | Added `POLICY-LAUNCH-GATE.md` to identify exact placeholders that block a real public launch; pushed public commit `436abd5` and closed issue #3. | `POLICY-LAUNCH-GATE.md` |
| LF-R-006 | 2026-06-15 | Repo collateral completeness was stale in local readiness docs and incomplete in the public launch context bundle. | Added exact Apache-2.0 license text, marked issue templates copied, expanded validator coverage, and pushed public commit `f28f195`. | `repo/LICENSE`, `repo/.github/ISSUE_TEMPLATE/`, public repo `launch-context/repo/` |
| LF-R-007 | 2026-06-15 | Social preview, demo GIF, CI badge, and package badge readiness lines were still unchecked. | Generated and deployed `og-launchframe.jpg` and `launchframe-demo.gif`, added CI/npm badges, added launch-context workflow, copied the collateral into public launch context, and verified public Actions run `27578891622` passed after final status correction. | `site/assets/og-launchframe.jpg`, `site/assets/launchframe-demo.gif`, `repo/.github/workflows/launch-context.yml`, `repo/README.md` |
| LF-R-008 | 2026-06-15 | Launch-day runbook had stale unchecked rehearsal-complete items and false blockers. | Reconciled completed rehearsal steps, kept public posting/owner decisions open, reran final smoke checks, pushed public commit `8617cb5`, and verified CI run `27578775684` passed. | `08-LAUNCH-DAY-RUNBOOK.md` |
| LF-R-009 | 2026-06-15 | GitHub Pages custom-domain HTTPS remained stuck on the fallback `*.github.io` certificate. | Cleared and re-added the Pages custom domain, GitHub approved the certificate for `launchframe.site` and `www.launchframe.site`, enabled HTTPS enforcement, and verified `curl -I https://launchframe.site/` returns 200. | `00-external-prereqs.md`, `gh api repos/yueranyuan/launchframe-dress-rehearsal/pages`, `curl -I https://launchframe.site/` |

## Poll Commands

```bash
gh api repos/yueranyuan/launchframe-dress-rehearsal/pages/health
curl -I https://launchframe.site/
```
