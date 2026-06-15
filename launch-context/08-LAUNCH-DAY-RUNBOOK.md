# Launchframe Practice — Launch-Day Runbook

One operator. Keep this executable.

Hard rule: never solicit upvotes.

Status: dress rehearsal. Execute as a tabletop run; do not perform external publish/post actions.

## Go / No-Go Preflight

- [x] Public rehearsal repo created.
- [x] License selected and exact text committed.
- [x] SECURITY, CONTRIBUTING, CODE_OF_CONDUCT, issue templates, privacy/terms/telemetry docs are filled or marked not applicable for rehearsal.
- [x] Rehearsal install command published and verified.
- [x] Demo works from local rehearsal artifacts.
- [x] Repo collateral is rehearsal-ready.
- [x] Package path is rehearsal-ready.
- [x] README and social image are final for rehearsal.
- [x] Website URL, canonical URL, OG image, and analytics are verified for rehearsal. Current rehearsal URL is HTTP until GitHub Pages certificate issuance completes.
- [ ] Founder/operator can monitor for 4-6 hours. Owner-bound for a real public post.

## T-3 Days

- [ ] Newsletter heads-ups. Deferred; no public posting in rehearsal.
- [ ] Builder DMs. Deferred; no public posting in rehearsal.
- [ ] Awesome-list PRs, if public repo exists. Deferred; no public posting in rehearsal.
- [x] Final demo asset.
- [x] Final data scrub for rehearsal public surfaces.

## T-1 Day

- [x] Cold-machine dress rehearsal via public `npx`, public site, validator, and CI.
- [x] Finalize HN title and first comment for rehearsal draft.
- [x] Finalize social and Reddit drafts for rehearsal draft.
- [ ] Confirm launch window. Owner-bound for a real public post.
- [x] Confirm no vote-solicitation language exists anywhere in launch drafts.

## T-0

- [x] Final smoke test for rehearsal surfaces.
- [x] Publish package, if applicable.
- [x] Flip/publish repo.
- [x] Verify website/metadata/analytics for rehearsal; HTTPS enforcement remains external wait.
- [ ] Post Show HN. Deferred; no public posting in rehearsal.
- [ ] Post founder first comment. Deferred; no public posting in rehearsal.
- [ ] Publish social thread. Deferred; no public posting in rehearsal.
- [ ] Monitor HN and issues. Deferred until any real public post.
- [ ] Post Reddit natively after a delay. Deferred; no public posting in rehearsal.

## T+1 To T+7

- [ ] Publish technical article. Deferred; no public posting in rehearsal.
- [ ] Keep responding to issues/PRs. Only needed if real public users arrive.
- [ ] Track metrics. Deferred; no analytics configured for rehearsal.
- [x] Write retro.
- [x] Feed lessons back into `../../playbook/`.

## Rollback

- Broken install: unpublish/deprecate bad package version if registry rules allow; pin README to known-good path; update HN comment with honest status.
- Bad bug: open public issue, document workaround, patch quickly, do not hide the failure.
- Accidental leak: take repo/package/site down if needed, rotate secrets, publish a clear postmortem if public users were affected.

## Current Open Items

- GitHub Pages HTTPS certificate has not been issued for `launchframe.site`; keep canonical URL on HTTP until enforcement is safe.
- Rehearsal support/security/privacy/legal/conduct contacts use example.com placeholders; replace before any production launch.
- Owner must decide whether to keep/archive the rehearsal repo and whether to keep/narrow/revoke the npm credential.
- No public HN/Reddit/social/community posting was performed in this rehearsal.
