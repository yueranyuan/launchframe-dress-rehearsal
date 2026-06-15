# Contributing To Launchframe

Status: dress rehearsal.

## What To Contribute

Good first contributions:

- Improve launch gates or checklist language.
- Add missing repo/policy template fields.
- Tighten website readiness checks.
- Add verification scripts for generated launch artifacts.

Please open an issue before starting large changes.

## Development Setup

Requirements:

- Python 3 for local static serving.
- A browser for site review.
- Gemini CLI/API only when running the visual workflow.

Serve the practice site from this public rehearsal repo:

```sh
python3 -m http.server 4173
```

Run structural checks:

```sh
python3 -m json.tool launch-context/00-org-context.json >/tmp/launchframe-org-context.json
test -f launch-context/00-MASTER-CHECKLIST.md
test -f launch-context/08-LAUNCH-DAY-RUNBOOK.md
```

## Pull Request Checklist

- [ ] The change is scoped and explained.
- [ ] Templates preserve placeholders instead of inventing commitments.
- [ ] Policy/security/legal-adjacent changes remain owner-reviewable.
- [ ] No secrets, private data, or internal URLs are included.
- [ ] Screenshots/review artifacts are checkpointed when visual changes are made.

## Community

- Code of conduct: `CODE_OF_CONDUCT.md`
- Security reports: `SECURITY.md`
- Discussion/community: `https://discord.gg/example` for rehearsal only.
