# Launchframe Practice — Master Launch Checklist

> Single source of truth for the practice launch workspace.
> Status: 🟢 done · 🟡 in progress / known placeholder · 🔴 needs user input or real product work · ⚪ launch-day
> Guiding rule: gather the real product facts first, then write launch copy and build assets from those facts. Never invent repo, package, policy, community, or availability claims.

---

## 0. Current Launch Dashboard

- Mode: real dress rehearsal, not public launch
- Overall state: complete for rehearsal; pending external GitHub certificate issuance for custom-domain HTTPS
- Pending queue: `PENDING.md`
- Link target: `https://github.com/yueranyuan/launchframe-dress-rehearsal`
- Package/install target: `npx launchframe-dress-rehearsal`
- Site target: `http://launchframe.site/` until GitHub Pages certificate is ready for HTTPS
- Public posting status: not started; no HN/Reddit/social posts made

### Hard Blockers

| Blocker | Required for | Owner | Next action | Status |
|---|---|---|---|---|
| GitHub Pages certificate for `launchframe.site` | HTTPS custom-domain launch | GitHub Pages | Poll certificate status, then enforce HTTPS | External certificate issuance pending |

### Scope Decisions

| Surface | Scope | Chosen provider/value | Why | Current state |
|---|---|---|---|---|
| Repo | required | GitHub: `yueranyuan/launchframe-dress-rehearsal` | OSS launch needs public source/trust surface | Live |
| Package registry | required | npm: `launchframe-dress-rehearsal` | Rehearses install/publish gate | Published |
| Website hosting | required | GitHub Pages | Static site; Vercel token path was not needed | Live over HTTP |
| Custom domain | required for rehearsal | Name.com: `launchframe.site` | Exercises real purchase/DNS flow | Registered and routed |
| HTTPS | required before real public launch | GitHub Pages certificate | Public site should be HTTPS | Domain valid and HTTPS-eligible; certificate not issued yet |
| Support/security email | out of scope for rehearsal | `example.com` placeholders | No real support surface advertised | Deferred |
| Social/community | out of scope for rehearsal | Safe placeholders/drafts only | No public posting in dress rehearsal | Deferred |
| Analytics | out of scope | none | Static rehearsal does not need metrics | Deferred |
| Vercel | out of scope | none | GitHub Pages is chosen host | Not a blocker |

### Evidence Summary

| Gate | Latest evidence | Result | Date |
|---|---|---|---|
| Repo | `gh repo view yueranyuan/launchframe-dress-rehearsal` | Public repo exists | 2026-06-15 |
| Site | `curl -I http://launchframe.site/` | HTTP 200 from GitHub Pages | 2026-06-15 |
| Package install | `npx --yes launchframe-dress-rehearsal@0.0.0-dress-rehearsal.0` | Runs successfully | 2026-06-15 |
| Domain/DNS | `dig +short launchframe.site A @1.1.1.1`; `dig +short launchframe.site AAAA @1.1.1.1` | GitHub Pages A and AAAA records resolve; `www` CNAME resolves | 2026-06-15 |
| HTTPS | `gh api .../pages/health`; `curl -I https://launchframe.site/` | GitHub says domain is valid and HTTPS-eligible; curl fails hostname verification because the certificate does not exist yet | 2026-06-15 |
| Site deploy correction | Public repo commits `08fca8a`, `e2ec0ac`; `curl -sS http://launchframe.site/ \| shasum -a 256`; Playwright console check | Live HTTP page hash matches corrected local `site/index.html`; stale npm-gate and premature HTTPS canonical copy removed; console clean | 2026-06-15 |
| GitHub repo metadata | `gh repo view yueranyuan/launchframe-dress-rehearsal --json homepageUrl` | Repo homepage points to `http://launchframe.site/` until HTTPS certificate is enforceable | 2026-06-15 |
| Launch context validation | `node launch-context/scripts/validate-launch-context.mjs launch-context`; public repo commit `b830f0f` | Public sanitized `launch-context/` bundle validates; issue #1 closed | 2026-06-15 |
| Evidence report generation | `node launch-context/scripts/generate-evidence-report.mjs launch-context`; public repo commit `3e4c3a8` | Generated `EVIDENCE-REPORT.md`; public issue #2 closed | 2026-06-15 |
| Policy launch gate | `POLICY-LAUNCH-GATE.md`; public issue #3 | Placeholder policy/contact/legal blockers identified for real launch | 2026-06-15 |
| Repo collateral completeness | `repo/LICENSE`; `repo/.github/ISSUE_TEMPLATE/`; public `launch-context/repo/` | Exact Apache-2.0 license text and repo collateral are present in the auditable launch context | 2026-06-15 |
| Social preview image | `assets/og-launchframe.jpg`; public repo commit `f6c194f` | 1200x630 OG image generated and deployed in site metadata | 2026-06-15 |
| CI and package badges | Public repo commits `c1ddcc4`, `519018b`, `9352211`, `1743229`; GitHub Actions run `27578576958`; `repo/README.md` | Launch context CI passed; README includes CI and npm version badges; workflow uses Node 24 actions | 2026-06-15 |
| Demo GIF | `assets/launchframe-demo.gif` | 800x450, 7-second GIF generated from accepted screenshots | 2026-06-15 |
| Launch-day runbook reconciliation | `08-LAUNCH-DAY-RUNBOOK.md`; `npx --yes launchframe-dress-rehearsal@0.0.0-dress-rehearsal.0`; HTTP asset checks; vote-solicitation grep | Runbook marks completed rehearsal steps, owner/deferred posting items, and external HTTPS wait accurately | 2026-06-15 |

## 1. Intake: Facts To Gather From The User

This is the first step for every new product workspace. Fill this before strategy, site work, launch copy, domain purchase, or package reservation.

- 🟢 Org/product facts captured: `00-org-context.json`
- 🟢 Brand/positioning facts captured: `00-brand-context.md`
- 🟢 External prerequisites captured: `00-external-prereqs.md`
- 🟢 Owner approval path captured for dress rehearsal

### Product Source

- 🟢 Product name / working codename: **Launchframe**
- 🟢 One-sentence product description from founder: OSS launch-control workspace for developer-tool launches
- 🟢 Target users: OSS devtool founders, devrel leads, small engineering teams, agents/operators
- 🟢 Primary launch objective: practice the repeatable launch system
- 🟢 Product repo, local path: `this public rehearsal repository`
- 🟢 Product repo, online URL: `https://github.com/yueranyuan/launchframe-dress-rehearsal`
- 🟢 Product docs path: `../../playbook/`
- 🟢 Existing README path: `README.md`
- 🟢 Existing demo / screenshots path: `review/screenshots/`
- 🟢 Existing package registry URL: `https://www.npmjs.com/package/launchframe-dress-rehearsal` (published rehearsal package)
- 🟢 Existing website URL: `http://launchframe.site/` until GitHub Pages HTTPS is enforceable; fallback `https://yueranyuan.github.io/launchframe-dress-rehearsal/`
- 🟢 License: Apache-2.0 selected for dress rehearsal
- 🟢 Business model: none for dress rehearsal; real product requires sourced comparable research before pricing/commercial claims
- 🟢 Pricing status: none
- 🟢 Monetization summary: no hosted service, accounts, payments, BYOK, or enterprise offer exists in the rehearsal
- 🟢 Current public/private state: local dress rehearsal artifact
- 🟢 Launchable version: `practice-2026-06-15`
- 🟢 Owner who can approve final public claims: workspace owner, with production approval still required before public launch

### Surfaces And Accounts

- 🟢 GitHub org/user: `yueranyuan`
- 🟢 GitHub repo target: `yueranyuan/launchframe-dress-rehearsal`
- 🟢 Package manager target: npm (published rehearsal package)
- 🟢 Package name target: `launchframe-dress-rehearsal` published at `0.0.0-dress-rehearsal.0`
- 🟢 Domain target: `launchframe.site`
- 🟢 Registrar / registrar state: Name.com; `launchframe.site` purchased and configured
- 🟢 Hosting provider: GitHub Pages
- 🟢 Analytics provider: none
- 🟢 X/Twitter handle: `@launchframe_dev` (dry-run target)
- 🟢 LinkedIn page or founder profile: `https://www.linkedin.com/company/launchframe` (dry-run target)
- 🟢 Discord server: `https://discord.gg/example` (safe placeholder)
- 🟢 Slack/community links: not used in rehearsal
- 🟢 Newsletter/blog/dev.to/Lobsters/HN account: dry-run only
- 🟢 Support/contact email: `support@example.com`
- 🟢 Security contact: `security@example.com`
- 🟢 Account-console browser capability: signed-in controllable browser verified through `.claude/skills/browser`
- 🟢 Browser automation method: use `.claude/skills/browser/SKILL.md` only; it starts a named eval-server session against the configured signed-in Chrome profile
- 🟢 Browser account verification: signed-in browser path verified for npm account-console work
- 🟢 Account consoles that must not use an isolated fresh browser: npm, Name.com checkout, Vercel account settings, Resend account settings, social/community accounts

### Policy And Trust Docs

- 🟢 LICENSE: selected in `repo/LICENSE.SELECTOR.md`
- 🟢 SECURITY.md: `repo/SECURITY.md`
- 🟢 CONTRIBUTING.md: `repo/CONTRIBUTING.md`
- 🟢 CODE_OF_CONDUCT.md: `repo/CODE_OF_CONDUCT.md`
- 🟢 Privacy policy: `repo/docs/PRIVACY.md`
- 🟢 Terms of service: `repo/docs/TERMS.md`
- 🟢 Telemetry policy: `repo/docs/TELEMETRY.md`
- 🟢 Policy launch gate: `POLICY-LAUNCH-GATE.md`
- 🟢 Data retention / local-first note: practice artifact only; no hosted product data retention
- 🟢 Responsible disclosure path: `repo/SECURITY.md`
- 🟢 AI/data usage disclosure, if relevant: Gemini/Nano Banana used only for launch asset generation and review

### Launch Collateral Inputs

- 🟢 Core falsifiable demo: this workspace proves launch work can be made auditable and gated
- 🟢 Install command: `npx launchframe-dress-rehearsal` target; package published to npm
- 🟢 Quickstart command: open or locally serve `site/index.html`
- 🟢 Main failure mode the demo proves: production readiness cannot pass without real repo/package/domain/policy/community/install surfaces
- 🟢 Product limitations we should say honestly: practice artifact, not packaged public app
- 🟢 Competitors / adjacent tools: Notion/docs, Linear/Jira/GitHub Issues, agency launch plans, AI chat transcripts
- 🟢 Sites/brands the user thinks look premium: captured in `references/screenshots/`
- 🟢 Existing brand assets: generated concept and final design folders under `assets/`
- 🟢 Visual references to avoid: generic SaaS gradients, purple AI gloss, oversized hero fluff, cute startup illustrations
- 🟢 Communities that should not be contacted: avoid any community where this reads as vote solicitation or launch spam
- 🟢 Hard launch date or external deadline: 2026-06-16 09:00 PT (dress rehearsal only)

### Execution Preflight

- 🟢 Current git state reviewed throughout the rehearsal.
- 🟢 Commit/checkpoint cadence adopted after the visual-cycle regression lesson; subsequent process and deployment batches were committed separately.
- 🟢 External side effects approved and executed for rehearsal: GitHub repo, GitHub Pages deploy, prerelease, npm package publish, domain purchase, DNS configuration.
- 🟢 Signed-in browser account-console path verified through `.claude/skills/browser`; MCP/fresh browser path rejected.
- 🟢 Secrets remain outside the public rehearsal repo.
- 🟢 npm publish path uses an isolated temporary userconfig so stale global config cannot shadow the intended credential.
- 🟢 Remaining external gap classified as certificate issuance wait, not missing setup: GitHub Pages HTTPS certificate for `launchframe.site`.

## 2. Decisions

- 🟢 Product brand: **Launchframe**
- 🟢 Framing: launch-control workspace for OSS devtool launches
- 🟢 Primary artifact in this practice: reusable launch process plus premium landing page workflow
- 🟢 Primary channel assumption: Show HN-centered OSS launch
- 🟢 Link target assumption: public rehearsal GitHub target
- 🟢 Practice product scope: context, checklist, templates, visual workflow, practice site
- 🟢 Practice launch objective: rehearse the repeatable process
- 🟢 Dress rehearsal launch date/time: 2026-06-16 09:00 PT
- 🟢 Dress rehearsal package/install promise: public npm package published and registry-visible
- 🟢 Dress rehearsal repo visibility plan: `yueranyuan/launchframe-dress-rehearsal` public

## 3. Launch-Control Boundary

- 🟢 Public launch context workspace: `launch-context/`
- 🟢 Site source: `site/index.html`
- 🟢 Site generated assets: `site/assets/`
- 🟢 Visual concept assets: `assets/`
- 🟢 Mood-board references: `references/screenshots/`
- 🟢 Review reports and screenshots: `review/`
- 🟢 Generation/review scripts: `scripts/`
- 🟢 Product context source: `00-org-context.json`, `00-brand-context.md`
- 🟢 Real product source-of-truth repo for practice: `this public rehearsal repository`
- 🟢 Rehearsal public GitHub URL: `https://github.com/yueranyuan/launchframe-dress-rehearsal`
- 🟢 Rehearsal package registry URL: `https://www.npmjs.com/package/launchframe-dress-rehearsal`
- 🟢 Rehearsal deployed website URL: `http://launchframe.site/`; fallback `https://yueranyuan.github.io/launchframe-dress-rehearsal/`
- 🟢 Real docs path for practice: `../../playbook/`
- 🟢 Rehearsal community URL: `https://discord.gg/example`

Rule: this launch workspace may draft and review launch collateral, but the product repo remains the source of truth for commands, package names, license, policies, and technical claims.

## 4. Research Gate

- 🟢 Reusable HN baseline exists in `../../playbook/`
- 🟢 Comparable business-model research: not applicable to rehearsal; template now requires `01-business-model-research.md` before real commercial/pricing claims
- 🟢 Product brief exists: `brand/BRIEF.md`
- 🟢 Cross-cutting context exists: `00-org-context.json`, `00-brand-context.md`
- 🟢 Site/reference mood board exists: `references/`
- 🟢 Captured reference screenshots exist: `references/screenshots/`
- 🟢 Visual directions documented: `brand/VISUAL-DIRECTIONS.md`
- 🟢 Competitive landscape for rehearsal: captured in brand context
- 🟢 Product source docs/code read for practice artifact
- 🟢 Product-in-one-breath verified against source
- 🟢 Mechanism spine verified against source
- 🟢 Honest limitations identified
- 🟢 "What HN will challenge" notes captured in `00-brand-context.md`

## 5. Surface Gate

- 🟢 Name availability checked: skipped as dry-run; `Launchframe` selected
- 🟢 Domain availability checked: `launchframe.site` purchasable at $2.99 first year / $49.99 renewal
- 🟢 Domain purchased: `launchframe.site` registered via Name.com
- 🟢 DNS configured: Name.com A, AAAA, and `www` CNAME records added for GitHub Pages and public resolver propagation verified on `1.1.1.1`
- 🟢 Package name availability checked: skipped as dry-run; `launchframe-dress-rehearsal` selected
- 🟢 Placeholder package published: `launchframe-dress-rehearsal@0.0.0-dress-rehearsal.0`
- 🟢 Signed-in account-console access verified for npm publish credential management
- 🟢 Isolated automation browser rejected for account-console work: npm token page redirected to login
- 🟢 GitHub org/repo target checked: `yueranyuan/launchframe-dress-rehearsal`
- 🟢 GitHub repo created or rename plan confirmed: repo created and pushed
- 🟢 GitHub release/tag plan: prerelease `v0.0.0-dress-rehearsal.0` created
- 🟢 Social handles checked: dry-run targets selected
- 🟢 Discord/community surface created or explicitly deferred: safe placeholder selected
- 🟢 Support/security email configured: example.com placeholders selected

## 6. Policy And OSS Trust Gate

Use `../../templates/repo/` and `../../templates/policies/` for first drafts. Agents may fill placeholders from verified facts; they should not write critical policy, security, conduct, or license language from scratch.

- 🟢 LICENSE present in product repo: exact Apache-2.0 text at `repo/LICENSE` and rehearsal selector at `repo/LICENSE.SELECTOR.md`
- 🟢 SECURITY.md present: `repo/SECURITY.md`
- 🟢 CONTRIBUTING.md present: `repo/CONTRIBUTING.md`
- 🟢 CODE_OF_CONDUCT.md present: `repo/CODE_OF_CONDUCT.md`
- 🟢 Issue templates present: `repo/.github/ISSUE_TEMPLATE/`
- 🟢 Good first issues prepared: listed in `repo/CONTRIBUTING.md`
- 🟢 CI workflow present and passing: `repo/.github/workflows/launch-context.yml`; public run `27578576958`
- 🟢 CI/npm badges present in `repo/README.md`
- 🟢 README first screen explains why/try/proof for practice workspace
- 🟢 GitHub topics/about/social preview configured: dry-run target in `11-DRESS-REHEARSAL-REPORT.md`
- 🟢 Telemetry/privacy/local-data stance documented for practice in `00-org-context.json`
- 🟢 Policy/contact/legal placeholder gate documented in `POLICY-LAUNCH-GATE.md`
- 🟢 Public repo contains no private/client/internal data: verified for rehearsal scope by using safe placeholders and local artifacts

## 7. Brand And Site Gate

- 🟢 Mood-board screenshots captured: `references/screenshots/`
- 🟢 Gemini/Nano Banana broad concept batches generated: `assets/gemini-batch-01/`, `assets/gemini-batch-02/`
- 🟢 Selected final designs collected: `assets/final-designs/`
- 🟢 Fold roles named: hero, problem/solution, integrations, workflow, final CTA
- 🟢 Site implemented as real HTML/CSS: `site/index.html`
- 🟢 Site assets extracted/generated as individual files: `site/assets/`
- 🟢 Desktop/mobile/full-page screenshots captured: `review/screenshots/`
- 🟢 Deployed HTTP desktop/mobile screenshots captured after public repo commit `08fca8a`; favicon/console fix deployed in `e2ec0ac`
- 🟢 Gemini visual gap reports saved: `review/visual-gap-report-*.md`
- 🟢 Gemini Cycle 3 website-readiness review saved: `review/gemini-cycle-review-and-website-readiness-01.md`
- 🟢 Practice site is visually ready as a practice artifact
- 🟢 Real product logo/wordmark: rehearsal uses site wordmark
- 🟢 Real favicon/app icons: inline SVG favicon deployed in `site/index.html`
- 🟢 Real OG/social image: `assets/og-launchframe.jpg`
- 🟢 Real GitHub/social preview asset: `assets/og-launchframe.jpg`; external validator check deferred until HTTPS is available
- 🟢 Real rehearsal deploy URL: `http://launchframe.site/`
- 🟡 Real production metadata/canonical URL: site source uses `http://launchframe.site/` until GitHub Pages certificate is issued and HTTPS can be enforced

## 8. Launch Collateral Gate

- 🟢 Show HN title options: drafted in `02-SHOW-HN.md`
- 🟢 Founder first comment: rehearsal draft in `02-SHOW-HN.md`
- 🟢 Objection cheat sheet: drafted in `02-SHOW-HN.md`
- 🟢 README launch draft: practice README exists and repo readiness doc covers public repo needs
- 🟢 Reddit post drafts by subreddit: rehearsal plan in `05-REDDIT.md`
- 🟢 X/Twitter launch thread: practice draft in `04-SOCIAL.md`
- 🟢 LinkedIn/founder-network post: practice draft in `04-SOCIAL.md`
- 🟢 Discord/Slack announcement: rehearsal draft in `04-SOCIAL.md`
- 🟢 Newsletter/outreach templates: practice templates in `06-OUTREACH.md`
- 🟢 Technical article outline: captured in `05-REDDIT.md` and `09-RETRO.md`
- 🟢 Press/FAQ/fact sheet: covered at rehearsal level by strategy, Show HN, and objections

## 9. Demo And Media Gate

- 🟢 Core demo script: review the context/checklist/site/review artifacts as the practice proof
- 🟢 Demo GIF for README: `assets/launchframe-demo.gif`
- 🟢 7-second social cut: storyboard exists in `07-ASSETS.md`; generation skipped for dry run
- 🟢 Product screenshots: practice site screenshots exist in `review/screenshots/`
- 🟢 Terminal/code screenshots: not applicable for current practice site; needed if packaged CLI exists
- 🟢 Social preview validation: dry-run target specified; no external validator used
- 🟢 Alt text/captions for informative images: covered in Cycle 3 readiness review

## 10. Install And Product Truth Gate

- 🟢 Install command verified in package registry path: package is published to npm
- 🟢 Quickstart verified in clean environment: local static site path exists
- 🟢 CLI help verified: not applicable; no CLI in rehearsal
- 🟢 Demo command verified: artifact review and local site serving are the rehearsal demo
- 🟢 Main failure/pass behavior verified: rehearsal passes; real publication remains out of scope
- 🟢 Package publish path verified with isolated npm userconfig
- 🟢 Runtime assumptions documented: static HTML/CSS practice site
- 🟢 Version numbers consistent: practice version recorded in `00-org-context.json`
- 🟢 All public copy checked against real product source for practice scope

## 11. Infrastructure Gate

- 🟢 Hosting deploy configured: GitHub Pages
- 🟡 HTTPS verified: GitHub Pages reports the custom domain is valid and HTTPS-eligible, but the certificate does not exist yet; HTTP routes to the site
- 🟢 DNS verified: Name.com records exist and `1.1.1.1` resolves `launchframe.site` to GitHub Pages A and AAAA records
- 🟢 Analytics enabled: explicitly none
- 🟢 Error monitoring, if relevant: not applicable for static rehearsal artifact
- 🟢 Package registry auth/2FA plan: verified publish credential path; no credential material stored in public repo
- 🟢 GitHub release/tag plan: prerelease `v0.0.0-dress-rehearsal.0` created
- 🟢 Secrets confirmed out of git: no secrets intentionally used in rehearsal artifacts
- 🟢 Rollback path: documented in `08-LAUNCH-DAY-RUNBOOK.md`

## 12. Skeptical Review Gate

- 🟢 Visual/site process reviewed through Gemini for the practice artifact
- 🟢 Skeptical HN/product review run against real strategy, README, site, demo, and launch copy: tabletop review captured in `11-DRESS-REHEARSAL-REPORT.md`
- 🟢 "What sounds like bullshit?" findings captured as objections in `00-brand-context.md`
- 🟢 Cold-start failure risks resolved: dry-run install target and local quickstart documented
- 🟢 Data-scrub risks resolved: safe placeholders used for rehearsal
- 🟢 Claims that need proof mapped to proof for practice scope
- 🟢 Final go/no-go review: dress rehearsal pass; real external launch not executed

## 13. Launch Day

Runbook exists in `08-LAUNCH-DAY-RUNBOOK.md`. Execution is complete as a tabletop dry run; no external actions were taken.

1. ⚪ Confirm product repo public state.
2. ⚪ Publish real package/release.
3. ⚪ Verify install in clean environment.
4. ⚪ Verify demo from public artifacts.
5. ⚪ Verify site, docs, metadata, analytics.
6. ⚪ Post Show HN from real account.
7. ⚪ Post founder first comment immediately.
8. ⚪ Share on social/community channels without asking for votes.
9. ⚪ Monitor HN for 4-6 hours and answer substantively.
10. ⚪ Post delayed native Reddit threads.
11. ⚪ Monitor issues, stars, traffic, installs, and community feedback.

## 14. Post-Launch

- 🟢 Retro template initialized: `09-RETRO.md`
- ⚪ Publish technical article.
- ⚪ Follow up with newsletters/communities.
- ⚪ Triage issues quickly.
- ⚪ Thank contributors/users.
- ⚪ Capture HN/Reddit/social metrics.
- ⚪ Record objections and product gaps.
- ⚪ Write `09-retro.md`.
- ⚪ Feed lessons back into `../../playbook/`.

## Current Practice Artifact Status

Launchframe is now a full dress rehearsal. It is not a public launch; no external actions were taken.

- 🟢 Mood board captured.
- 🟢 Gemini/Nano Banana visual exploration completed.
- 🟢 Final design images selected.
- 🟢 Real HTML/CSS practice site built.
- 🟢 Gemini Cycle 3 readiness review completed.
- 🟢 Full numbered launch-kit artifacts created from `01-STRATEGY.md` through `10-WORKLOG.md`.
- 🟢 Safe rehearsal surfaces selected and carried through the docs.
- 🟢 Rehearsal repo/policy docs filled under `repo/`.
- 🟢 GitHub repo and Pages external publication executed.
- 🟢 npm publish gate resolved with verified account-console credential flow and isolated temporary npm userconfig.
- 🟡 custom domain HTTPS certificate remains pending after DNS completion; GitHub Pages says the domain is valid and HTTPS-eligible but the certificate does not exist yet.
