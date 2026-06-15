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

## Open External Waits

- GitHub Pages HTTPS certificate issuance for `launchframe.site` remains pending until `https_enforced` can be enabled.
