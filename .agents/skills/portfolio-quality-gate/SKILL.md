---
name: portfolio-quality-gate
description: Audit a finished portfolio implementation phase for approval readiness without changing source files. Use when reviewing a phase, checking its acceptance criteria and definition of done, or preparing an evidence-based approval report before merge or later-phase work.
---

# Portfolio Quality Gate

## Contract

Act as a read-only phase reviewer. Compare the delivered work with the repository's current instructions and active phase, run the declared checks, and report evidence. Do not fix findings, add dependencies, rewrite reports, commit, push, deploy, or begin another phase. A separate user-requested correction task is required before changing files.

Verification commands may create ignored build or test artifacts. Do not intentionally alter tracked source files, and do not remove or overwrite pre-existing user work.

## Audit workflow

### 1. Establish the review boundary

1. Read `AGENTS.md` completely and apply its instruction priority.
2. Read `portfolio-codex-implementation-plan.md` completely enough to locate the requested phase, then read that phase's scope, skills, dependency envelope, acceptance criteria, commands, and stop condition closely.
3. Read `docs/product-brief.md` completely.
4. Read `docs/design-system.md` completely when it exists. If it is absent, do not create it. Record the absence and classify it according to the active phase; it is not a finding when the active phase predates that deliverable.
5. Read the active phase report when present and every reference required by `AGENTS.md` or the active phase.
6. Review only the requested phase. Newer documents override stale generated guidance according to `AGENTS.md`.

### 2. Inspect repository state

Run read-only Git inspection before checks:

- `git status --short`
- `git branch --show-current`
- `git diff --check`
- `git diff --stat`
- `git diff`
- `git diff --cached` when staged changes exist

Identify every changed file, dependency and lockfile change, generated artifact, unrelated edit, and sign of later-phase work. Do not assume an untracked file is disposable.

### 3. Build the phase matrix

Create an internal expected-versus-observed matrix covering:

- approved scope and explicit exclusions;
- required skills and references;
- dependency envelope;
- acceptance criteria and definition of done;
- required automated and manual checks;
- phase report completeness;
- stop condition and human approval gate.

Use this matrix to prevent a passing test suite from hiding a scope, privacy, content, or evidence failure.

### 4. Run declared checks

Run the checks in `AGENTS.md` in the stated order using the repository's pinned runtime and package manager. Capture each exact command, exit status, and meaningful result. Never report a check as passed without execution evidence.

If a command does not exist in an early phase, is outside the active phase, needs unavailable credentials, or cannot run in the current environment, report it as skipped with the exact reason. Classify the missing evidence according to whether the active phase requires it. Do not install software or alter configuration during an audit.

For UI phases, also collect the manual evidence required by `AGENTS.md`: browser console, keyboard and focus order, reduced motion, approved responsive widths, horizontal overflow, links and downloads, and the public/private content scan. Automated accessibility checks supplement these checks; they do not replace them.

### 5. Review all quality axes

#### Content truth and privacy

- Compare public facts with the approved source order in `AGENTS.md`.
- Confirm role order, titles, internship labels, dates, metrics, contact details, research boundaries, and `TODO_CONTENT_*` markers.
- Confirm private resume sources, the French resume, employer assets, credentials, and unapproved links are not published, indexed, fetched, or copied into public output.
- Search for secrets and private paths without printing secret values into the report.

#### Accessibility and responsive behavior

- Check semantic landmarks and headings, descriptive links and controls, keyboard access, visible focus, touch targets, contrast, zoom and reflow, narrow layouts, and no required information hidden behind interaction or visual effects.
- Verify behavior at the widths and zoom levels required by the active phase. Do not infer a pass from source inspection when browser evidence is required.

#### Motion policy

- Confirm required content is visible before animation code loads.
- Confirm reduced-motion behavior and the bans in `AGENTS.md`, including scroll hijacking, forced smooth scrolling, flashing, ambient movement, and `transition: all`.
- Treat Motion+ or unapproved 3D work as out of scope.

#### Performance

- Review Server and Client Component boundaries, initial JavaScript, fonts, images, third-party code, bundle separation, and build output.
- Compare measured results with the active approved budget. Never invent a numeric budget when none has been approved.

#### Scope, dependencies, and security

- Check for later-phase work, speculative abstractions, unrelated edits, and dependencies outside the approved envelope.
- Verify the frozen lockfile, package-manager pin, lifecycle-script policy, environment-file handling, CI permissions, external-link safety, security headers when required, and public/private asset boundaries.
- Treat a backend, database, CMS, authentication, analytics, tracking, or contact form as out of scope for Version 1 unless newer instructions explicitly approve it.

### 6. Classify findings

Use these categories consistently:

- **Blocker**: Approval would be unsafe or impossible, such as a private-data leak, secret exposure, destructive scope violation, missing required skill, or failed critical build/test with no reliable review path.
- **Required**: A phase acceptance criterion, repository instruction, definition-of-done item, or required evidence is unmet and must be corrected before approval.
- **Optional**: A bounded improvement that is useful but not required for this phase and must not pull later-phase work forward.
- **Passed**: A criterion verified by a cited file, diff observation, command exit status, or manual result. Absence of a finding is not itself a pass.

## Report format

Return the following sections in this order:

1. `Blocker`
2. `Required`
3. `Optional`
4. `Passed`
5. `Commands rerun`
6. `Unrelated changes`
7. `Approval status`

Write `None` when a findings section is empty. For every Blocker or Required item, identify the violated requirement, evidence, impact, and smallest correction boundary without implementing it. List every command with its exit status, and list every skipped check with its reason. End with either `Ready for human approval` or `Not ready for human approval`; never grant approval on the user's behalf.
