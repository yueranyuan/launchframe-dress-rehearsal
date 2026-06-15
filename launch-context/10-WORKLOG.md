# Launchframe Practice — Launch Worklog

Use this to preserve the decision trail while the practice launch is being built.

## Source Sessions

- Main agent transcript: private Launchframe rehearsal agent session.
- Related repo: this public rehearsal repository.
- Product context: `00-org-context.json`
- Brand context: `00-brand-context.md`
- Product brief: `brand/BRIEF.md`
- Visual process docs: `../../playbook/landing-page-visual-development.md`, `../../playbook/process-review.md`

## Timeline

### 2026-06-15

- Reconstructed the broader OSS launch process from the ztrack session.
- Added the Launchframe practice site and visual workflow artifacts.
- Distilled the three visual cycles: mood board/design images, implementation fidelity, website readiness.
- Added repo and policy templates so agents fill structured templates instead of freehanding critical docs.
- Added cross-cutting context templates for org facts and brand narrative.
- Instantiated `00-org-context.json` and `00-brand-context.md` for Launchframe.
- Updated `00-MASTER-CHECKLIST.md` to separate practice-ready items from production-deferred launch blockers.
- Added `01-STRATEGY.md` for the practice product.
- Added the remaining numbered artifacts: `02-SHOW-HN.md`, `03-REPO-READINESS.md`, `04-SOCIAL.md`, `05-REDDIT.md`, `06-OUTREACH.md`, `07-ASSETS.md`, `08-LAUNCH-DAY-RUNBOOK.md`, and `09-RETRO.md`.
- Converted the run from blocked practice mode to full dress rehearsal mode with low-risk real surfaces and safe placeholders for production-only contacts/community.
- Filled rehearsal repo/policy docs under `repo/`.
- Added `11-DRESS-REHEARSAL-REPORT.md`.
- Created public GitHub repo `https://github.com/yueranyuan/launchframe-dress-rehearsal`.
- Enabled GitHub Pages at `https://yueranyuan.github.io/launchframe-dress-rehearsal/` and verified HTTP 200.
- Verified npm access; package name `launchframe-dress-rehearsal` was available.
- Created and verified a harmless npm package tarball with local `npx`.
- Attempted npm publish; registry rejected it because the active credential path did not satisfy 2FA requirements.
- Verified registrar access with a harmless availability check.
- Added private external-prereq notes to record account, credential, and approval readiness without publishing secrets.
- Added root-level community health files to the public GitHub repo.
- Configured repo description, homepage, and topics.
- Created three public rehearsal issues.
- Created prerelease `v0.0.0-dress-rehearsal.0`.
- Purchased `launchframe.site` via Name.com for $2.99 first year; renewal price is $49.99 and expiry is 2027-06-15.
- Added GitHub Pages DNS records at Name.com and committed a public repo `CNAME` file for `launchframe.site`.
- Re-attempted npm publish for `launchframe-dress-rehearsal@0.0.0-dress-rehearsal.0`; npm returned E403 because publish required current OTP or a verified bypass-capable credential.

## Decisions

| Date | Decision | Why | Source |
|---|---|---|---|
| 2026-06-15 | Treat Launchframe as the practice product. | It is this repo's launch-control product and exercises the whole process. | User request |
| 2026-06-15 | Use JSON for org/product/surface facts and Markdown for brand narrative. | Org fields are cross-cutting and machine-fillable; brand context is more amorphous. | User request |
| 2026-06-15 | Mark missing public surfaces as deferred, not unknown. | Launchframe is currently a practice artifact without real repo/package/domain/community. | `00-org-context.json` |
| 2026-06-15 | Do not let agents freehand legal/policy/trust docs. | Critical docs need source-based templates and owner approval. | `../../templates/policies/`, `../../templates/repo/` |
| 2026-06-15 | Walk through every numbered launch artifact even when blocked. | The process should reveal blockers through each step, not stop at context/strategy. | `02-SHOW-HN.md` through `09-RETRO.md` |
| 2026-06-15 | Use low-risk real surfaces for dress rehearsal where approved. | The goal is to see the whole launch shape by actually exercising repo, package, domain, DNS, and hosting while avoiding public posting/community launch. | `00-org-context.json`, `11-DRESS-REHEARSAL-REPORT.md` |
| 2026-06-15 | Use GitHub Pages for the hosted rehearsal site. | The site is static and Vercel token had no deploy scopes. | `https://yueranyuan.github.io/launchframe-dress-rehearsal/` |
| 2026-06-15 | Store external prerequisites as a first-class launch artifact. | Full dress rehearsals need keys, sign-ins, and approval gates known before launch execution. | `00-external-prereqs.md` |
| 2026-06-15 | Use `launchframe.site` as the rehearsal custom domain. | The user approved continuing the real dress rehearsal after the exact price/renewal/DNS target had been recorded. | Name.com + GitHub Pages |

## Research Runs

| Date | Question | Method | Key conclusion | Artifact |
|---|---|---|---|---|
| 2026-06-15 | Does the HN baseline need refreshing for practice? | Reused existing playbook baseline. | No; this is a process rehearsal, not a high-stakes launch. | `../../playbook/` |
| 2026-06-15 | What premium visual direction fits Launchframe? | Mood board, Gemini/Nano Banana generation, Gemini CLI review. | Light editorial blueprint direction won. | `assets/final-designs/` |

## Surfaces Reserved

| Surface | Result | Account/provider | Notes |
|---|---|---|---|
| Domain | Purchased/configured | Name.com | `launchframe.site`, $2.99 first year, $49.99 renewal, expires 2027-06-15; DNS added for GitHub Pages with A, AAAA, and `www` CNAME records; visible on `1.1.1.1`; HTTPS certificate approved and enforced after clearing and re-adding the Pages custom domain. |
| Package | Published | npm | `launchframe-dress-rehearsal@0.0.0-dress-rehearsal.0` published; registry `npx` verified. |
| GitHub | Created | GitHub / yueranyuan | `https://github.com/yueranyuan/launchframe-dress-rehearsal` |
| Social handles | Deferred | None | No social handle search/reservation done. |
| Community | Deferred | None | No Discord/Slack created. |

## Product Verification

| Claim | How verified | Result | Follow-up |
|---|---|---|---|
| Launchframe is an OSS launch-control workspace. | Read brief, playbook, checklist, templates, site, and review artifacts. | Verified for practice scope. | Decide if it becomes a public product. |
| Practice site readiness passed. | Gemini Cycle 3 review and deployed HTTPS check. | Passed for practice artifact; metadata updated to HTTPS after certificate approval and enforcement. | Keep HTTPS enforcement verified before any real public launch. |
| Production launch is not ready. | Checklist and Gemini Cycle 3 deferred gaps. | Not ready. | Need owner-approved positioning, real support/security contacts, legal review, and public launch approval. |

## Blockers

| Date | Blocker | Severity | Mitigation | Status |
|---|---|---|---|---|
| 2026-06-15 | Public rehearsal repo/package/domain exist, but they are not owner-approved production surfaces. | High for production launch | Keep production claims separate from rehearsal evidence. | Open |
| 2026-06-15 | Rehearsal policy docs exist, but contacts and legal terms use placeholders. | High for production launch | Replace contacts and obtain owner/legal review before any production launch. | Open |
| 2026-06-15 | Published package is a harmless rehearsal executable, not production product behavior. | High for production launch | Do not claim production install readiness from the rehearsal package. | Open |
| 2026-06-15 | npm publish requires a 2FA-satisfying credential path. | Resolved for rehearsal | Used a signed-browser credential flow and published through an isolated temporary npm userconfig. | Closed |
| 2026-06-15 | GitHub Pages certificate is not ready immediately after custom domain setup. | Low for rehearsal | Added recommended AAAA records, re-saved the custom domain through the Pages API, confirmed Pages health is valid and HTTPS-eligible, and will enforce HTTPS after certificate provisioning completes. | External wait |

## Process Improvements

| Date | Friction observed | Process change | Template/playbook target | Status |
|---|---|---|---|---|
| 2026-06-15 | Master checklist exposed missing items but mixed true blockers, optional providers, pending propagation, and historical notes. | Add a first-screen dashboard with hard blockers, scope decisions, and latest evidence; keep history in the worklog and detailed commands in external prereqs. | `templates/00-master-checklist.md`, `templates/00-external-prereqs.md`, `templates/10-worklog.md` | Applied |
| 2026-06-15 | Unchosen providers like Vercel kept appearing as failures even after GitHub Pages was selected. | Require a surface scope matrix that marks each provider/surface as required, optional, out of scope, or pending propagation. | `templates/00-external-prereqs.md` | Applied |
| 2026-06-15 | npm appeared solved after credential setup, but stale global config shadowed the intended credential. | Use isolated temporary npm userconfig for publish verification and delete it immediately after. | `templates/00-external-prereqs.md`, `playbook/operating-procedure.md` | Applied |

## Review Findings

| Date | Reviewer/method | Finding | Action |
|---|---|---|---|
| 2026-06-15 | Gemini Cycle 3 | Practice site readiness passed; production launch not ready. | Recorded deferred gaps in checklist/context. |
| 2026-06-15 | Codex process review | Site-making is only one asset gate; broader launch needs context, repo trust, policy docs, install truth, release readiness. | Added context files, strategy, and worklog. |
| 2026-06-15 | Codex deployed-site QA | Public site copy/metadata lagged behind external state after npm publish and domain setup; fresh load also requested a missing favicon. | Updated local site/docs, pushed public repo commits `08fca8a` and `e2ec0ac`, verified live HTTP hash and clean console, captured desktop/mobile screenshots, and added a playbook lesson to recheck deployed copy after every external state transition. |

## Open Questions

- Should Launchframe become a real public OSS product or remain a playbook/workspace pattern?
- If public, what is the repo URL, package name, domain, license, and owner entity?
- Should the site CTA point to a public repo, the playbook, or a hosted demo?
- Does Launchframe need a Discord/community, or should early discussion stay in GitHub Issues?
