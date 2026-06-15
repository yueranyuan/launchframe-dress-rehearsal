# Launchframe Practice Workspace

This is a disposable practice product for rehearsing the brand and homepage process.

Launchframe is a fictional OSS launch-control app for developer tools. It turns launch research, surface reservations, launch assets, repo readiness, and launch-day execution into one auditable workspace.

## Master Checklist

Use `00-MASTER-CHECKLIST.md` as the single source of truth for the practice launch state.

The first section is intentionally an intake checklist: before strategy, copy, domains, package reservation, Discord/GitHub setup, policy docs, or site work, gather the user's existing product facts and surfaces. The checklist then tracks research, surfaces, policy docs, collateral, brand/site work, demo/install truth, infrastructure, skeptical review, launch day, and post-launch follow-up.

Start here for the current practice run:

- `00-org-context.json` — structured org/product/surface/policy facts.
- `00-brand-context.md` — positioning, voice, visual direction, claims, and channel context.
- `00-MASTER-CHECKLIST.md` — gate status for the practice product.
- `01-STRATEGY.md` — launch strategy derived from the context files.
- `02-SHOW-HN.md` through `09-RETRO.md` — practice launch artifacts, with production blockers marked explicitly.
- `10-WORKLOG.md` — decision trail and blockers.
- `11-DRESS-REHEARSAL-REPORT.md` — dry-run result using safe rehearsal surfaces.
- `repo/` — filled rehearsal repo, policy, security, contribution, and community docs.

Live rehearsal surfaces:

- GitHub repo: `https://github.com/yueranyuan/launchframe-dress-rehearsal`
- GitHub Pages site: `https://yueranyuan.github.io/launchframe-dress-rehearsal/`

## Goal

Practice making the brand and homepage feel more premium and less generic:

- Start from a concrete product brief.
- Generate broad visual directions with Gemini REST API.
- Use `gemini-3.1-flash-image` / Nano Banana 2 for edit and continuation work.
- Use reference/style criteria.
- Hand-code a homepage from the chosen direction.
- Set up screenshot review so Gemini CLI can iterate against the target image and built page.

## Canonical Practice Rule

This workspace is for rehearsing the ztrack-derived process. Do not use a generic image generator here unless the exercise is explicitly an alternative-model comparison. Image concepts should be regenerated via `scripts/generate_gemini_concepts.py`; Gemini CLI should be used for bounded screenshot critique and edit loops.

Three concepts is only a smoke test. Serious practice should gather a larger mood board first, have Gemini CLI summarize the visual DNA, then generate and review larger batches.

For the distilled landing-page lessons from this practice run, read:

- `../../playbook/landing-page-visual-development.md`
- `brand/AGENCY-STYLE-VISUAL-PROCESS.md`

Example broad batch:

```sh
GEMINI_CONCEPT_COUNT=12 \
GEMINI_OUTPUT_DIR="$PWD/products/practice-launchframe/assets/gemini-batch-01" \
python3 products/practice-launchframe/scripts/generate_gemini_concepts.py
```

Then run Gemini CLI over the mood board plus the batch and save the review in `review/`.

## Contents

- `brand/` — positioning, visual directions, and generated concept notes.
- `references/` — captured mood-board screenshots and notes used before image generation.
- `site/` — hand-coded practice homepage.
- `assets/gemini-concepts/` — Gemini REST / Nano Banana concept outputs.
- `review/` — screenshots and visual review outputs.
- `scripts/` — repeatable generation and review helpers.
