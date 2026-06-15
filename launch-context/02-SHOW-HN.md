# Launchframe Practice — Show HN Playbook

Source context:

- `00-org-context.json`
- `00-brand-context.md`
- `01-STRATEGY.md`

## Status

Dress rehearsal draft. Do not post externally during the rehearsal.

## Title Options

- Recommended, once real repo exists: `Show HN: Launchframe - launch control for OSS devtool releases`
- Alternative: `Show HN: Launchframe - an auditable workspace for OSS launches`
- Alternative: `Show HN: Launchframe - treat your OSS launch like release engineering`

## Link Target

Production recommendation: GitHub repo.

Dress rehearsal state:

- Public repo URL: `https://github.com/yueranyuan/launchframe-dress-rehearsal` (real rehearsal repo).
- Hosted demo/site URL: `http://launchframe.site/` (real rehearsal site; HTTPS certificate pending).
- Package/install path: `npx launchframe-dress-rehearsal` (published rehearsal package).

## Founder First Comment

Structure:

1. Pain: launch work gets scattered and public claims drift from product truth.
2. Mechanism: Launchframe uses context files, gated checklists, templates, visual cycles, and readiness reviews.
3. What is different: it treats launch as release engineering, not copy generation.
4. Proof: this repo contains the reconstructed process, templates, practice site, Gemini reviews, and explicit production blockers.
5. Honest limitation: the rehearsal repo, package, and site exist, but Launchframe is not yet a production product or public community launch.
6. Ask for feedback: ask OSS founders/devrel operators what gates are missing.

Draft:

> Hi HN, I built Launchframe after noticing that an OSS launch process had spread across a long agent session, draft docs, generated images, screenshots, domain/package notes, and half-verified launch claims.
>
> The idea is to treat a launch like release engineering: a context file for org/product facts, a brand context file for positioning and voice, a master checklist with gates, source-based repo/policy templates, visual asset cycles, skeptical review, and a launch-day runbook.
>
> The current version is a dress rehearsal rather than a real public launch. The proof is the workspace itself: the site-making cycle is complete, the public rehearsal repo/package/domain were exercised for real, and the launch kit shows what would be posted only after final production approval.
>
> I am especially interested in feedback from people who have launched OSS devtools: what launch gates would you add, and which parts should become product behavior rather than just repo structure?

## Objection Cheat Sheet

- **"Why not Notion or a checklist?"** -> Notion can hold notes, but Launchframe is organized around launch-specific gates, proof surfaces, templates, review artifacts, and production blockers.
- **"Is this just project management?"** -> It is narrower: public launch readiness for OSS devtools, including repo trust, HN/Reddit copy, surface reservation, visual assets, install truth, and policy docs.
- **"Does it actually work?"** -> For the practice scope, yes: the repo contains context files, checklist, strategy, templates, visual assets, screenshots, Gemini readiness reports, a public rehearsal repo, a published harmless npm package, and a hosted GitHub Pages site.
- **"Where are the limitations?"** -> The rehearsal surfaces are real, but Launchframe is not yet a production product, public community, or owner-approved launch.
- **"Should agents write privacy policies and ToS?"** -> No. Launchframe uses madlibs-style templates and requires owner-approved facts; unresolved policy fields remain blockers.

## Engagement Rules

- Be present for 4-6 hours.
- Answer skeptics substantively.
- Concede real points.
- File good feedback as public issues when useful.
- Never ask for upvotes.
- Do not ask friends, communities, or social followers to vote.

## Failure Modes

- Posting before the product has an owner-approved production repo.
- Claiming production installability from the harmless rehearsal package.
- Making this sound like generic AI marketing automation.
- Treating the practice site as the whole product.
- Leaving privacy/security/license claims unresolved.
- Linking to a local-only artifact.

## Safety Net

If the real Launchframe launch stalls, only consider a second chance after meaningful improvements: packaged product, public repo, real docs, installable demo, and a clear technical article about the launch-control model.
