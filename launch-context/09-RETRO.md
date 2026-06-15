# Launchframe Practice — Launch Retro

Status: real dress rehearsal completed. No public HN/Reddit/social launch was performed.

## Outcome

- HN: tabletop only; not posted.
- Reddit: tabletop only; not posted.
- X/Twitter: tabletop only; not posted.
- GitHub: public rehearsal repo created.
- Package installs: harmless rehearsal package published and verified with `npx`.
- Website traffic: GitHub Pages site served over HTTP; custom-domain HTTPS certificate still pending.

## What Worked

- Cross-cutting context split into `00-org-context.json` and `00-brand-context.md`.
- Master checklist now distinguishes rehearsal-complete from public launch.
- Visual workflow lessons are captured and backed by artifacts.
- Repo/policy templates prevent agents from inventing critical docs.

## What Did Not Work

- The first pass stopped after context/strategy/worklog instead of walking through every numbered launch artifact.
- Public posting/community launch was intentionally not executed.
- The first site metadata pass kept HTTPS and npm-gate claims after the actual state changed.

## Best Objections

- "This is too meta unless it becomes a real tool."
- "Why not just use Notion or GitHub Issues?"
- "Is this a real production product or just a rehearsal artifact?"
- "Policy docs should not be AI-generated."

## Product Gaps Discovered

- Decide whether the rehearsal repo/package/domain should become durable Launchframe surfaces or stay disposable evidence.
- Copy exact Apache-2.0 license text before real publication.
- Replace example.com contacts with monitored real contacts.
- Real demo asset.
- Actual product behavior if this becomes more than a workspace pattern.

## Copy / Positioning Lessons

- Lead with launch control and release engineering, not AI or marketing automation.
- Keep the site-making workflow subordinate to the broader launch-readiness system.
- Be explicit when a run is a dry run versus an external launch.

## Follow-Up Launch Angles

- Technical article: "Treating an OSS launch like release engineering."
- Build-in-public thread: "What we learned turning a lost agent session into a repeatable launch system."
- HN post only after approving production positioning, contacts, docs, and public claims.

## Updates To Feed Back Into The Playbook

- The process runner must create every numbered artifact.
- Master checklists should distinguish `rehearsal-complete`, `public launch`, `dry-run`, and `real external action`.
- Deployed site copy and metadata must be rechecked after each external state transition, especially package publish and HTTPS readiness.
- Context files should be filled before any downstream launch docs.
