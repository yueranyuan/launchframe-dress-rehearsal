# Launchframe — Dress Rehearsal Report

Date: 2026-06-15

Mode: completed real dress rehearsal with HTTPS enforcement included. GitHub repo, root community files, GitHub Pages, good-first issues, a prerelease, custom domain `launchframe.site`, DNS, and npm package `launchframe-dress-rehearsal@0.0.0-dress-rehearsal.0` were created for real. npm publish initially failed on 2FA because the active credential path was not sufficient; the final publish succeeded only after using a signed-browser credential flow and an isolated temporary npm userconfig. No community was created and no public post was made.

## Rehearsal Surfaces

| Surface | Rehearsal value | Status |
|---|---|---|
| GitHub repo | `https://github.com/yueranyuan/launchframe-dress-rehearsal` | Created, public |
| GitHub release | `v0.0.0-dress-rehearsal.0` | Created as prerelease |
| npm package | `launchframe-dress-rehearsal` | Published at `0.0.0-dress-rehearsal.0`; `dress-rehearsal` and `latest` tags both point to this first version |
| Install command | `npx launchframe-dress-rehearsal` | Registry install verified with `npx --yes launchframe-dress-rehearsal@0.0.0-dress-rehearsal.0` |
| Domain | `launchframe.site` | Purchased via Name.com; A, AAAA, and `www` CNAME DNS records added |
| Website | `https://launchframe.site/` | GitHub Pages custom domain configured; HTTPS returns 200; deployed page hash matches corrected local `site/index.html`; certificate approved for `launchframe.site` and `www.launchframe.site`; HTTPS enforcement is enabled |
| Fallback website | `https://yueranyuan.github.io/launchframe-dress-rehearsal/` | GitHub Pages fallback now redirects to the custom domain |
| GitHub repo metadata | `https://launchframe.site/` | Homepage metadata uses the enforced HTTPS custom domain |
| Signed-in browser control | Repo-local browser skill with signed-in Chrome profile | Verified through `.claude/skills/browser`; isolated automation browser rejected |
| Discord | `https://discord.gg/example` | Safe placeholder |
| Support | `TBD monitored support address` | Placeholder; real monitored address still required before production launch |
| Security | `TBD monitored security address` | Placeholder; real monitored address still required before production launch |
| License | Apache-2.0 | Rehearsal decision |

## Gate Results

| Gate | Result | Notes |
|---|---|---|
| Intake/context | Pass | `00-org-context.json` and `00-brand-context.md` filled for rehearsal. |
| Strategy | Pass | `01-STRATEGY.md` exists and matches context. |
| Surface planning | Pass for rehearsal | GitHub/Pages/domain/npm package executed; HTTPS certificate issuance and enforcement completed. |
| Repo/policy trust | Pass for rehearsal | Root community health files and issue templates added to public repo; real legal review still required before production publication. |
| Brand/site/media | Pass | Site and Gemini readiness artifacts already exist. |
| Launch collateral | Pass | HN, social, Reddit, outreach, assets, runbook, and retro docs exist. |
| Install/product truth | Pass for rehearsal | Registry `npx` path works for the published rehearsal package. |
| Infrastructure | Pass for rehearsal | Custom domain is configured and resolves publicly; HTTPS routes to GitHub Pages; GitHub approved the certificate and HTTPS enforcement is enabled. |
| Account-console access | Pass for rehearsal | Browser-required account work used the repo-local signed-browser skill; MCP/fresh browsers are rejected for account-console work. |
| Skeptical review | Pass for rehearsal | Objections and production caveats are captured. |
| Launch day | Pass as tabletop | Runbook can be executed step-by-step once real surfaces exist. |

## Latest Deployment Correction

- Public repo commits: `08fca8a` (`correct rehearsal site facts`) and `e2ec0ac` (`add inline favicon`).
- Corrected stale page copy from `npm: 2fa gate` to published package state.
- Set site canonical/OG URL to `https://launchframe.site/` after GitHub Pages HTTPS enforcement.
- Corrected public policy/security docs from placeholder repo/domain URLs to the actual rehearsal repo and domain.
- Verified `https://launchframe.site/` serves the corrected local `site/index.html` hash after Pages propagation and has no console warnings/errors on fresh load.
- Captured deployed desktop and mobile screenshots in `review/screenshots/`.

## What The Full Launch Looks Like

1. Fill context.
2. Lock decisions and rehearsal surfaces.
3. Prepare repo/policy docs from templates.
4. Prepare strategy and channel collateral.
5. Prepare visual/site/media assets.
6. Verify product truth and local demo.
7. Run skeptical review.
8. Execute launch-day runbook.
9. Write retro and feed lessons back to the playbook.

## Residual Production Work

These are not blockers for the dress rehearsal, but they are blockers for a real public launch:

- Decide whether to keep the public rehearsal repo or delete/archive it.
- Decide whether to keep, narrow, or revoke the rehearsal npm publish credential after no further rehearsals need it.
- Keep signed-in browser control verified before creating publish credentials, touching registrar checkout, or changing hosting/account settings in a browser.
- Replace TBD monitored-contact placeholders with owner-approved monitored real addresses.
- Review privacy and terms language before publishing.
- Generate real OG/social assets for the production URL.
- Run a final data scrub before any public repo or package publish.
