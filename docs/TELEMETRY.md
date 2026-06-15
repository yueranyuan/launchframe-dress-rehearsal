# Launchframe Telemetry And Data

Last updated: 2026-06-15

Status: dress rehearsal.

## Summary

- Telemetry default: none
- Hosted analytics: none
- Error reporting: none
- Disable command or setting: not applicable

## CLI / Local Tooling

There is no packaged CLI in the dress rehearsal.

The local practice workspace:

- Sends: nothing by default.
- Does not send: source code, file contents, prompts, secrets, issue data, or local artifacts.
- Stores locally: Markdown, JSON, screenshots, generated assets, and review files inside the repo.

## Website Analytics

The practice site uses no analytics provider.

## Error Reporting

No error reporting provider is configured.

## Verification

Commands or checks used to verify:

```sh
rg -n "analytics|telemetry|sentry|posthog|plausible|vercel/insights" index.html docs repo launch-context
```

Reviewer: Codex

Date: 2026-06-15
