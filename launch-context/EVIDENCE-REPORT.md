# Launchframe Evidence Report

Generated from `00-MASTER-CHECKLIST.md` by `scripts/generate-evidence-report.mjs`.

| Gate | Evidence | Result | Date |
|---|---|---|---|
| Repo | `gh repo view yueranyuan/launchframe-dress-rehearsal` | Public repo exists | 2026-06-15 |
| Site | `curl -I http://launchframe.site/` | HTTP 200 from GitHub Pages | 2026-06-15 |
| Package install | `npx --yes launchframe-dress-rehearsal@0.0.0-dress-rehearsal.0` | Runs successfully | 2026-06-15 |
| Domain/DNS | `dig +short launchframe.site A @1.1.1.1`; `dig +short launchframe.site AAAA @1.1.1.1` | GitHub Pages A and AAAA records resolve; `www` CNAME resolves | 2026-06-15 |
| HTTPS | `gh api .../pages/health`; `curl -I https://launchframe.site/` | GitHub says domain is valid and HTTPS-eligible; curl fails hostname verification because the certificate does not exist yet | 2026-06-15 |
| GitHub repo metadata | `gh repo view yueranyuan/launchframe-dress-rehearsal --json homepageUrl` | Repo homepage points to `http://launchframe.site/` until HTTPS certificate is enforceable | 2026-06-15 |
| Launch context validation | `node launch-context/scripts/validate-launch-context.mjs launch-context`; public repo commit `b830f0f` | Public sanitized `launch-context/` bundle validates; issue #1 closed | 2026-06-15 |
| Evidence report generation | `node launch-context/scripts/generate-evidence-report.mjs launch-context`; public repo commit `3e4c3a8` | Generated `EVIDENCE-REPORT.md`; public issue #2 closed | 2026-06-15 |
| Policy launch gate | `POLICY-LAUNCH-GATE.md`; public issue #3 | Placeholder policy/contact/legal blockers identified for real launch | 2026-06-15 |
| Repo collateral completeness | `repo/LICENSE`; `repo/.github/ISSUE_TEMPLATE/`; public `launch-context/repo/` | Exact Apache-2.0 license text and repo collateral are present in the auditable launch context | 2026-06-15 |
| Social preview image | `assets/og-launchframe.jpg`; public repo commit `f6c194f` | 1200x630 OG image generated and deployed in site metadata | 2026-06-15 |
| CI and package badges | Public repo commits `c1ddcc4`, `519018b`, `9352211`, `1743229`; GitHub Actions run `27578576958`; `repo/README.md` | Launch context CI passed; README includes CI and npm version badges; workflow uses Node 24 actions | 2026-06-15 |
| Demo GIF | `assets/launchframe-demo.gif` | 800x450, 7-second GIF generated from accepted screenshots | 2026-06-15 |
| Launch-day runbook reconciliation | `08-LAUNCH-DAY-RUNBOOK.md`; `npx --yes launchframe-dress-rehearsal@0.0.0-dress-rehearsal.0`; HTTP asset checks; vote-solicitation grep | Runbook marks completed rehearsal steps, owner/deferred posting items, and external HTTPS wait accurately | 2026-06-15 |

## Open External Waits

- GitHub Pages HTTPS certificate issuance for `launchframe.site` remains pending until `https_enforced` can be enabled.
