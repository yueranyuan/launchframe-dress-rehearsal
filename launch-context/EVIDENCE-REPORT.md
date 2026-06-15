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

## Open External Waits

- GitHub Pages HTTPS certificate issuance for `launchframe.site` remains pending until `https_enforced` can be enabled.
