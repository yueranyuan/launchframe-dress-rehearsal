# Launchframe — Brand Context

This is the narrative context source for the Launchframe practice launch. Use it alongside `00-org-context.json`.

## Product In One Breath

Launchframe is an OSS launch-control workspace for developer-tool launches. It turns positioning, HN/Reddit plans, surface reservations, brand assets, repo readiness, and launch-day execution into one auditable release-style system.

## Positioning Spine

- Category: OSS devtool launch-control workspace.
- Audience: founders, devrel leads, small engineering teams, and agents/operators preparing an HN-centered developer-tool launch.
- Pain: launch work gets scattered across transcripts, drafts, screenshots, one-off assets, half-remembered research, and unverified public claims.
- Mechanism: a gated workspace with product context, surface checks, repo/policy templates, visual cycles, launch collateral, readiness reviews, and launch-day runbooks.
- Differentiator: treats launch as release engineering, not marketing copy generation.
- Proof: this repo contains the reconstructed ztrack process, the Launchframe visual/site cycle, policy/repo templates, context files, and Gemini review artifacts.
- Honest limitation: Launchframe is currently a practice artifact and workflow pattern, not a packaged public app.

## Tagline Candidates

1. Launch control for OSS devtools.
2. Ship the launch like a release.
3. One auditable workspace for every public launch surface.

## Launch Narrative

### The Before State

An OSS launch starts with a promising product, then spreads across research notes, HN drafts, Reddit ideas, screenshots, domain checks, npm reservations, visual experiments, repo docs, and launch-day instructions. By the time it is ready, nobody can tell which claims are verified, which assets are final, which surfaces are real, and which decisions came from a lost agent session.

### The Mechanism

Launchframe makes the launch a controlled workspace:

- `00-org-context.json` stores factual org/product/surface/policy fields.
- `00-brand-context.md` stores positioning, voice, narrative, visual direction, and channel angles.
- The master checklist gates research, surfaces, repo trust, policy docs, brand/site assets, launch collateral, demo/install truth, infrastructure, skeptical review, launch day, and retro.
- Templates prevent agents from freehanding critical policy, security, license, and trust docs.
- Gemini/Nano Banana and Gemini CLI cycles are recorded as prompt, image, screenshot, gap, and review artifacts.

### The Proof

The smallest falsifiable demo is this workspace:

1. Start from a disorganized launch process recovered from an agent session.
2. Fill product context.
3. Produce a master checklist and reusable templates.
4. Generate and implement a premium landing page through the three-cycle Gemini visual workflow.
5. Show that dress rehearsal readiness can pass with low-risk real repo/package/domain/install surfaces and explicitly deferred policy/community placeholders.

### The Honest Limitation

Launchframe is not yet a real packaged product. The current artifact proves the process and site workflow, but production launch claims must wait for a public repo, package, license, policy docs, support/security contacts, and owner-approved external surfaces.

## Audience

### Primary

- Who: founders launching OSS developer tools.
- What they already believe: HN, GitHub, docs, demos, and repo trust matter more than polished ads.
- What they are skeptical of: generic launch checklists, AI-generated marketing copy, fake traction, and unverified claims.
- Where they spend time: Hacker News, GitHub, X/Twitter, Reddit dev communities, Discord/Slack builder groups.
- What proof they need: real repo, working install, falsifiable demo, credible docs, no vote solicitation, and an honest first comment.

### Secondary

- Who: devrel leads and small engineering teams.
- What they already believe: launches need coordination across docs, assets, code, and community.
- What they are skeptical of: another project-management layer.
- Where they spend time: GitHub, docs sites, internal Slack/Discord, newsletters, social.
- What proof they need: launch artifacts tied to owners, statuses, and verifiable surfaces.

## Competitive Frame

| Alternative | What people use it for | What we are not | Our wedge |
|---|---|---|---|
| Notion/Docs | Draft launch docs and checklists | A generic writing space | Launch-specific gates tied to verifiable surfaces |
| Linear/Jira/GitHub Issues | Track work items | A generic issue tracker | Launch evidence, collateral, and public-surface readiness |
| Agency launch plans | Expert launch execution | A services workflow | Repeatable OSS launch operating system |
| AI chat transcripts | Generate research/copy/assets | A lost session log | Durable context, templates, checkpoints, and reviews |

## Language

### Words To Use

- launch control
- auditable workspace
- readiness gate
- public surface
- proof surface
- falsifiable demo
- release-style launch
- repo trust

### Words To Avoid

- all-in-one platform
- growth hack
- viral launch
- AI magic
- effortless
- guaranteed front page
- one-click launch

### Claims We Can Make

| Claim | Evidence | Source |
|---|---|---|
| Launchframe organizes OSS launch work into gated artifacts. | Master checklist and playbook gates exist. | `00-MASTER-CHECKLIST.md`, `../../playbook/process-review.md` |
| The visual workflow uses mood boards, Gemini image generation, Gemini CLI review, and checkpoints. | Assets, prompts, screenshots, gap reports, and review reports exist. | `assets/`, `brand/`, `review/`, `site/` |
| Policy and trust docs should come from templates, not agent freewriting. | Repo/policy template pack exists. | `../../templates/repo/`, `../../templates/policies/` |
| Practice-site readiness passed before the broader dry run. | Gemini Cycle 3 report separates pass/deferred gaps. | `review/gemini-cycle-review-and-website-readiness-01.md` |

### Claims We Cannot Make Yet

| Claim | Why not | What would make it true |
|---|---|---|
| Install with `npm install` or `npx launchframe`. | No package exists. | Reserve/publish package and verify clean install. |
| View on GitHub at a public repo URL. | No public Launchframe repo URL is recorded. | Create or choose public repo and verify URL. |
| Join Discord/community. | No community URL exists. | Create or identify official community surface. |
| Privacy/terms/security policy are final. | No owner/legal-approved docs exist. | Fill templates from verified behavior and approve. |

## Visual Direction

### Reference Inputs

- Mood-board folder: `references/screenshots/`
- Final selected designs: `assets/final-designs/`
- Site implementation: `site/index.html`
- Product screenshots: `review/screenshots/`
- Existing brand assets: generated concept folders under `assets/`
- Visual references to avoid: generic SaaS gradients, purple AI-tool gloss, oversized hero fluff, cute startup illustrations.

### Desired Feel

Premium, precise, editorial, operational, and restrained. The site should feel like a serious launch dossier rather than a marketing landing page or a dashboard screenshot.

### Visual Principles

- Warm editorial paper and blueprint details.
- Serif/sans/mono type hierarchy.
- Sparse, high-signal copy.
- Real web sections, not poster art.
- Native HTML/CSS for UI and layout; bitmap images only for illustrations/assets.

### Must Preserve

- Light editorial blueprint hero direction.
- Fine rules and launch-map structure.
- Concise CTAs.
- Continuous page flow.
- Gemini-reviewed Cycle 3 website readiness.

### Must Avoid

- Slide-like sections.
- Overfilled text walls.
- Repeating the same metaphor on every fold.
- Stitched full-page artboards.
- Invented external links or production claims.

## Launch Channels

### Hacker News

- HN title direction: `Show HN: Launchframe - launch control for OSS devtools`
- Founder first-comment angle: "We built this after realizing the launch process lived in a long agent session and scattered artifacts; Launchframe makes the launch auditable."
- Expected objections: too meta, not a product yet, why not Notion/GitHub Issues, show me the real install, agents should not write legal docs.

### Reddit

- Target subreddits: defer until real product scope; likely technical/product-building communities rather than broad self-promotion.
- Native angle by subreddit: build-process writeup and template/workflow lessons.
- Communities to avoid: any community where this reads as launch spam or vote solicitation.

### Social / Community

- X/Twitter angle: thread about turning an OSS launch agent session into a repeatable launch-control repo.
- LinkedIn angle: operational launch readiness and public-surface discipline.
- Discord/Slack angle: ask for feedback from OSS founders/devrel operators, not votes.
- Newsletter/outreach angle: "here is the reusable OSS launch checklist and why it exists."

## Open Questions

- Should Launchframe become a real public OSS package or remain a playbook/workspace pattern?
- If public, what is the repo URL, package name, license, domain, and owner entity?
- Should the site CTA point to the repo, the playbook, or a hosted demo?
- Does it need a Discord/community, or should early discussion stay in GitHub Issues?
