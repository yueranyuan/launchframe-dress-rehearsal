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
| LF-P-001 | external | GitHub Pages HTTPS certificate for `launchframe.site` has not been issued yet. | Poll GitHub Pages health and `curl -I https://launchframe.site/`; enforce HTTPS once the certificate is issued. | GitHub Pages | Custom-domain HTTPS enforcement; production-real HTTPS claim. | 2026-06-15 16:57 ET | pending |
| LF-P-002 | defaulted | Decide whether to keep, archive, or delete the public rehearsal repo. | Keep as rehearsal evidence until owner says otherwise. | Owner | Cleanup policy only; not blocking rehearsal completion. | 2026-06-15 | defaulted |
| LF-P-003 | owner | Decide whether to keep, narrow, or revoke the npm publish credential after rehearsal use. | Keep only if more rehearsals need it; otherwise revoke/narrow. | Owner / npm | Credential hygiene. | 2026-06-15 | pending |
| LF-P-004 | owner | Replace example.com support/security/privacy/legal contacts before any production launch. | Keep placeholders only for rehearsal artifacts. | Owner | Production policy/contact claims. | 2026-06-15 | pending |

## Recently Resolved

| ID | Resolved date | Item | Resolution | Evidence |
|---|---|---|---|---|
| LF-R-001 | 2026-06-15 | npm package publish initially blocked by 2FA requirements. | Used signed-browser credential flow and published with isolated temporary npm userconfig. | `00-external-prereqs.md`, `11-DRESS-REHEARSAL-REPORT.md` |
| LF-R-002 | 2026-06-15 | Deployed site copy still said npm was at a 2FA gate and used HTTPS canonical metadata before certificate issuance. | Updated local site/docs, pushed public repo commits `08fca8a` and `e2ec0ac`, and verified `http://launchframe.site/` serves the corrected `index.html` hash with a clean console. | `site/index.html`, `review/screenshots/launchframe-http-desktop-after.png`, `review/screenshots/launchframe-http-mobile-after.png` |

## Poll Commands

```bash
gh api repos/yueranyuan/launchframe-dress-rehearsal/pages/health
curl -I https://launchframe.site/
```
