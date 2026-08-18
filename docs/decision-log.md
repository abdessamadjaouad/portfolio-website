# Systems Atlas decision log

Status: Initial Phase 0 record; approval status is tracked per decision.

## Decision statuses

- **Recorded**: already approved by `AGENTS.md` or the active implementation
  plan and copied here without changing the fact.
- **Proposed**: a Phase 0 product decision awaiting human approval.
- **Deferred**: intentionally left for a named later approval gate.

## Decisions

### D-001 — Position Data Engineer first

- Date: 2026-08-17
- Status: Recorded
- Decision: Present Abdessamad Jaouad first as a Data Engineer and second as a
  Software Engineer. Serve recruiters before engineering managers and senior
  engineers.
- Reason: This is the approved mission and audience order.
- Consequence: Information architecture, evidence order, resume actions, and
  later design decisions must preserve both priority lists.

### D-002 — Keep Version 1 static and recruiter-first

- Date: 2026-08-17
- Status: Recorded
- Decision: Build one recruiter-first homepage using local typed content.
  Exclude a contact backend, database, CMS, authentication, user accounts,
  analytics, tracking, and live GitHub fetching.
- Reason: These systems add risk and maintenance without strengthening the
  initial hiring path.
- Consequence: Contact uses direct destinations. Any older plan item describing
  `/api/contact` is superseded for Version 1.

### D-003 — Feature three employer experience highlights

- Date: 2026-08-17
- Status: Proposed
- Decision: Feature AI Sandbox, CentralGIS, and the OCP workforce management
  platform, in that order.
- Reason: This is the approved employer-highlight order and provides recent
  data, software, deployment, and outcome evidence.
- Consequence: All three remain concise internship experience highlights. None
  receives a public employer case-study route.

### D-004 — Keep the JESA EIA result distinct from CentralGIS

- Date: 2026-08-17
- Status: Recorded
- Decision: Treat the Environmental Impact Assessment input-reduction work as
  a separate result inside the JESA experience, not as a CentralGIS metric.
- Reason: The English Data Engineer resume describes separate work and the
  approved metrics must not be reassigned.
- Consequence: CentralGIS may claim the 40% data-access improvement only. The
  EIA result may claim 52 to 38 inputs, a 27% reduction, and at least 95%
  accuracy only.

### D-005 — Use a strict source hierarchy

- Date: 2026-08-17
- Status: Recorded
- Decision: Resolve content conflicts in this order: approved repository facts,
  English Data Engineer resume source, English Software Engineer resume source,
  then approved user answers in phase documents.
- Reason: Resume sources contain older or conflicting profile and title data.
- Consequence: The approved email and official titles replace the older values
  found in private resumes. The French resume remains reference-only.

### D-006 — Publish only reviewed English resume PDFs

- Date: 2026-08-17
- Status: Recorded
- Decision: Publish reviewed English Data Engineer and Software Engineer PDFs
  only, using the approved filenames. Keep every `.tex` source and the French
  resume private.
- Reason: The sources contain private working material and an obsolete email.
- Consequence: No resume is publishable until Phase 3 verifies the PDFs
  visually, checks selectable text and links, and confirms the approved email
  and official titles.

### D-007 — Block unapproved employer links and media

- Date: 2026-08-17
- Status: Recorded
- Decision: Do not fetch or publish the shared Google Drive URL supplied for AI
  Sandbox, CentralGIS, and the demo video until ownership and public-link
  approval are explicit.
- Reason: One URL was attributed to several assets and its publication rights
  are unresolved.
- Consequence: Employer repository, demo, report, screenshot, video, logo, and
  internal diagram statuses remain unavailable or pending. Only sanitized,
  recreated diagrams without employer-specific detail can be considered later.

### D-008 — Publish limited research metadata

- Date: 2026-08-17
- Status: Recorded
- Decision: Publish only the approved paper title and IEEE Xplore link until
  exact authors, venue, date, pages, DOI, or exported BibTeX are verified.
- Reason: Supplied Shor, Lopez, and Mosca entries are references, not the full
  citation for Abdessamad's paper.
- Consequence: Use `TODO_CONTENT_IEEE_CITATION`; do not infer bibliographic
  metadata.

### D-009 — Keep a dedicated data-engineering case study as a gap

- Date: 2026-08-17
- Status: Proposed
- Decision: Do not claim a complete dedicated data-engineering case study in
  Version 1 until a public repository, personal contribution, architecture,
  outcome, and evidence are reviewed together.
- Reason: The resumes list data-engineering projects, but current inputs do not
  include public links or enough evidence for a deep case study.
- Consequence: Resume-backed personal projects may appear as concise cards;
  deep project treatment remains deferred.

### D-010 — Use direct contact in the approved order

- Date: 2026-08-17
- Status: Recorded
- Decision: Present email, WhatsApp, and LinkedIn as the contact sequence. GitHub
  is a supporting evidence destination.
- Reason: The order and destinations are approved profile facts.
- Consequence: Version 1 does not need a contact form or user-data collection.

### D-011 — Centralize facts in one future content registry

- Date: 2026-08-17
- Status: Recorded
- Decision: Store approved facts in one typed local content registry during the
  appropriate implementation phase, with presentation code consuming it.
- Reason: Duplicated facts create title, email, date, and metric drift.
- Consequence: These Phase 0 documents describe requirements; they do not create
  the application content model or source files.

### D-012 — Defer visual and 3D choices

- Date: 2026-08-17
- Status: Deferred
- Decision: Preserve the calm editorial and technical signal-flow direction as
  a constraint, but make no final typography, color, motion, component, or 3D
  selection in Phase 0.
- Reason: Visual direction belongs to its gated phase, and 3D requires separate
  explicit approval.
- Consequence: Phase 0 creates no design system, visual prototype, UI code, or
  dependency.

## Pending approval

Human review must approve D-003 and D-009, and confirm the recorded decisions as
an accurate interpretation of the current sources. No later phase may treat
this log as approved before the Phase 0 report passes its gate.
