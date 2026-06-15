# Launchframe Policy Launch Gate

Status: rehearsal artifact. This identifies policy placeholders that block a real public launch.

## Required Before A Real Launch

| Area | Placeholder / gap | Required resolution |
|---|---|---|
| Contacts | `support@example.com`, `security@example.com`, `privacy@example.com`, `legal@example.com`, `conduct@example.com` | Replace with monitored real addresses or remove the surface. |
| Terms | `TBD before real launch` disclaimer and liability sections | Owner/legal-approved terms or explicit decision not to publish terms. |
| License | `repo/LICENSE.SELECTOR.md` selects Apache-2.0 but exact authoritative license text must be present in the public repo | Copy exact Apache-2.0 text from the authoritative source if Apache-2.0 remains selected. |
| Code of conduct | Rehearsal enforcement contact | Use official Contributor Covenant text and a real enforcement contact before advertising a community. |
| Privacy | Rehearsal says no hosted service, accounts, telemetry, or payments | Reverify against production code, analytics, hosting logs, package behavior, support flow, and any community tooling. |
| Telemetry | Rehearsal says no telemetry and no analytics | Reverify with source search, deployed site review, package behavior, and network checks. |
| Security | Rehearsal advisory URL and contact exist, but contact is a placeholder | Replace contact and verify GitHub Security Advisories are enabled for the production repo. |
| Community | Discord/linkedin/social links are rehearsal placeholders | Create real community surfaces and enforcement paths, or remove community claims. |
| Jurisdiction/entity | Operator is `Launchframe Rehearsal Project`; jurisdiction and mailing address are unset | Fill real operator/legal entity details if publishing legal terms or privacy commitments. |

## Rehearsal-Safe Claims

- No hosted service is provided by the rehearsal artifact.
- No user accounts, payments, analytics, telemetry, or error monitoring are configured for the static rehearsal site.
- The npm package is intentionally harmless and exists only to validate registry publishing and `npx` install behavior.
- Policy docs are templates filled for rehearsal; they are not production legal review.

## Validation

Run:

```sh
node products/practice-launchframe/scripts/validate-launch-context.mjs products/practice-launchframe
```

Expected result: pass with a warning that terms retain owner/legal-review placeholders.
