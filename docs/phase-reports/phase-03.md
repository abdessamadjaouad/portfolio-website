# Phase 03 report: content model and assets

Date: 2026-08-19
Branch: `phase/03-content-model`
Baseline: `7a7b38e` (`phase 02: establish Signal Ledger design system`)

## 1. Approved scope

Phase 3 was limited to validated local content, cross-record evidence contracts,
structured content gaps, public-asset validation, reviewed English resume PDFs,
and tests that make invalid featured content or broken public assets fail before
publication.

No homepage section, project route, presentation redesign, advanced motion,
Motion dependency, 3D, backend, database, CMS, authentication, analytics,
tracking, contact form, live fetch, SEO implementation, deployment, or Phase 4
work was in scope.

The implementation follows the repository's current npm architecture. The old
plan wording that mentions `pnpm test` is superseded by the approved npm
toolchain and lockfile.

## 2. Delivered work

- Added Zod schemas for profile, links, evidence, metrics, architecture, media,
  experience, projects, research, resumes, content gaps, skills, education,
  certifications, and languages.
- Added one parsed application-facing registry with focused record modules and
  no presentation code.
- Added eight approved project records:
  - three featured employer highlights in the approved order;
  - the separate supporting JESA Environmental Impact Assessment result; and
  - four resume-backed, nonfeatured personal-project candidates.
- Added four metric records containing only the approved 40%, 52-to-38/27%,
  at-least-95%, and 30% results.
- Added structured `TODO_CONTENT_*` references for incomplete nonfeatured
  content and 25 explicit internal content-gap records.
- Added schema and cross-record validation that rejects a TODO anywhere inside
  a featured record, placeholder TODO prose, duplicates, invalid ordering,
  unknown references, incomplete architecture flows, invalid protocols,
  blocked Drive links, unsafe public paths, and inconsistent media records.
- Added 35 evidence-first skill records. Every published skill points to at
  least one existing project record.
- Added build-time validation through `next.config.ts`. The same parsed registry
  and public-asset checks run before a Next.js build compiles.
- Added filesystem validation for path containment, symlinks, file signatures,
  private source extensions, missing declarations, and undeclared files under
  governed public asset folders.
- Generated corrected English Data Engineer and Software Engineer resume PDFs
  from the existing private English sources without modifying those sources.
- Corrected the approved email, official titles, internship type, and Sale El
  Jadida capitalization in the PDF derivatives.
- Added safe embedded email, LinkedIn, and GitHub destinations to both PDFs.
- Linearized and added both reviewed PDFs at their approved public paths.
- Updated Phase 0 documentation to record that the historical reviewed-resume
  gap is resolved.
- Added a content-model contract and browser checks for both direct public PDF
  URLs.

No project image, poster, or video was optimized because none was supplied or
approved. No placeholder or generated employer media was created.

## 3. Files changed

### Content contract and records

- `src/content/schemas.ts`
- `src/content/registry.ts`
- `src/content/validate-public-assets.ts`
- `src/content/records/profile.ts`
- `src/content/records/links.ts`
- `src/content/records/experiences.ts`
- `src/content/records/metrics.ts`
- `src/content/records/projects.ts`
- `src/content/records/research.ts`
- `src/content/records/media.ts`
- `src/content/records/content-gaps.ts`
- `src/content/records/skills.ts`
- `src/content/records/background.ts`

### Validation and browser tests

- `src/content/schemas.test.ts`
- `src/content/registry.test.ts`
- `e2e/public-assets.spec.ts`
- `next.config.ts`

### Reviewed public derivatives

- `public/resumes/abdessamad-jaouad-data-engineer.pdf`
- `public/resumes/abdessamad-jaouad-software-engineer.pdf`

### Documentation

- `docs/content-model.md`
- `docs/content-inventory.md`
- `docs/project-asset-folder-plan.md`
- `docs/architecture.md`
- `docs/phase-reports/phase-03.md`

### Dependency manifests

- `package.json`
- `package-lock.json`

The ignored private English source files were read but not modified. The private
French resume was not used or compiled. `prompt-draft.txt` is unchanged.

## 4. Dependencies changed

Added one production dependency inside the approved Phase 3 envelope:

| Package | Exact version | Purpose                                            | License |
| ------- | ------------- | -------------------------------------------------- | ------- |
| `zod`   | `4.4.3`       | Runtime and build-time content contract validation | MIT     |

Zod already existed in the lockfile as a transitive development dependency.
Phase 3 promotes the same exact release to a direct production dependency; no
second version was installed. No unlisted production package was added.

## 5. Commands and exit results

| Command or check                                                             | Exit/result                                                                               |
| ---------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `npm view zod version` outside the restricted network sandbox                | 0 — registry reported `4.4.3`                                                             |
| Initial `npm install zod@4.4.3 --save-exact` under the ambient Node 25 shell | 1 — engine guard correctly rejected Node 25/npm 11.12; no manifest change                 |
| `mise exec -- npm install zod@4.4.3 --save-exact`                            | 0 — used pinned Node 24.19.0/npm 11.17.0                                                  |
| Incremental Prettier, lint, typecheck, and content-test runs                 | 0 after each completed increment                                                          |
| Final corrected `pdflatex` runs for both English derivatives                 | 0 — Data Engineer: 2 pages; Software Engineer: 1 page                                     |
| `qpdf --linearize` for both derivatives                                      | 0                                                                                         |
| `qpdf --check` for both public PDFs                                          | 0 — valid, unencrypted, linearized PDFs                                                   |
| `pdfinfo`, `pdftotext`, URI, attachment, metadata, and private-path scans    | 0 — expected facts/links present; no attachment, script, source path, or private input    |
| Pixel comparison before and after PDF linearization                          | 0 — all three rendered pages byte-identical                                               |
| Focused `npm run test:e2e -- e2e/public-assets.spec.ts`                      | 0 — 2/2 public PDF requests passed                                                        |
| `npm audit --omit=dev`                                                       | 0 — zero production vulnerabilities                                                       |
| Sandboxed pinned-toolchain `npm run build` diagnostic                        | 1 — sandbox dropped stdout from Next.js's detached TypeScript subprocess                  |
| Same pinned-toolchain `npm run build` outside that sandbox                   | 0 — production build passed                                                               |
| Final `mise exec -- npm run check`                                           | 0 — format, lint, types, 13/13 unit tests, 7/7 browser tests, and production build passed |
| `git diff --check`                                                           | 0                                                                                         |

The first exploratory PDF input and title-substitution attempts exited 1 before
producing a usable derivative. They exposed stdin handling and ampersand-spacing
issues; both were corrected before review or publication. Only the final
verified outputs entered `public/`.

No required Phase 3 command was skipped. Project-image/poster optimization was
a documented no-op because no source asset exists.

## 6. Automated checks

- Five Vitest files contain 13 passing tests across the repository.
- Content tests verify exact approved profile, role, employer, date, location,
  research, and metric claims.
- Schema tests prove that featured TODO content, the blocked Drive host, and
  incomplete media records are rejected while a structured nonfeatured gap is
  allowed.
- Registry tests verify unique slugs, exact project order, JESA metric
  separation, required featured evidence, empty employer link/media lists,
  approved URL protocols, complete skill references, public file existence,
  PDF signatures, and negative duplicate/broken-reference cases.
- Build startup parses every record and validates both public assets.
- Playwright verifies that both approved resume paths return HTTP 200,
  `application/pdf`, and a PDF signature.
- Existing browser tests continue to cover console/page errors, keyboard focus,
  reduced motion, responsive reflow, and horizontal overflow for the unchanged
  Phase 2 UI.

## 7. Manual checks

- Reviewed every public claim against `AGENTS.md`, the approved content
  inventory, and the two private English resume sources.
- Confirmed the JESA Environmental Impact Assessment result remains separate
  from CentralGIS.
- Confirmed all three employer records retain `Internship` and the approved
  official titles.
- Confirmed the corrected email with the final zero in content and both PDFs.
- Rendered and visually reviewed all three resume pages at 144 DPI. No content
  is clipped, overlapped, missing, or illegible.
- Extracted the PDFs with layout preservation and reviewed reading order and
  selectable text.
- Inspected embedded URI objects. Each PDF contains only the approved mailto,
  LinkedIn, and GitHub destinations.
- Confirmed both PDFs contain no embedded file, JavaScript, encryption, author
  name, private path, or private input filename.
- Confirmed the final public PDF renderings are pixel-identical to the reviewed
  pre-linearized outputs.
- Confirmed no presentation component, React import, JSX, client boundary, or
  styling concern exists under `src/content/`.

## 8. Responsive screenshots reviewed

Phase 3 changes no web layout, so no new responsive website screenshot was
required. The existing full browser gate still passed all approved-width and
reduced-motion checks.

The following temporary PDF page renders were reviewed instead:

| Evidence                                   | Result                                      |
| ------------------------------------------ | ------------------------------------------- |
| `/tmp/phase3-public-data-resume-1.png`     | Data resume page 1 complete and legible     |
| `/tmp/phase3-public-data-resume-2.png`     | Data resume page 2 complete and legible     |
| `/tmp/phase3-public-software-resume-1.png` | Software resume page 1 complete and legible |

The temporary renders are verification artifacts and are not public assets.

## 9. Accessibility impact

- Public facts remain structured text rather than image-only content.
- Every architecture record includes a complete linear text alternative.
- Future image/poster records cannot validate without alt text and intrinsic
  dimensions.
- Both resume PDFs contain selectable Unicode text with usable extraction order.
- Resume download labels are descriptive and role-specific in the registry.
- No required content is gated by JavaScript, hover, motion, or WebGL.

The source resumes do not produce tagged PDF/UA documents. This is recorded as
a limitation rather than misrepresented as full PDF accessibility compliance;
selectable text and extracted reading order passed the required publication
checks.

## 10. Performance impact

- Content remains static local data with no runtime API, database, CMS, or live
  third-party request.
- Registry validation runs during configuration/build and once per importing
  server module, not through a client-side validation bundle.
- The completed-tree gates reported 174–188 ms for configuration, including
  content and public-asset validation.
- File-signature validation reads only the first 12 bytes rather than loading a
  future large media file into memory.
- The linearized PDFs are approximately 152 KB and 148 KB and are downloaded
  only when requested; they add nothing to the initial homepage response.
- No image, poster, video, font, script, client boundary, or animation package
  was added.

Formal Lighthouse and Core Web Vitals work remains in the later performance
phase.

## 11. Security and privacy impact

- Public URI validation permits only HTTPS and a valid mailto destination,
  rejects credentials, and explicitly rejects the unresolved Drive host.
- Public paths are constrained to approved folders and reject traversal,
  backslashes, duplicate separators, private-input names, and TODO markers.
- Filesystem checks reject symlinks, missing files, undeclared files, incorrect
  PDF signatures, and private source extensions in governed folders.
- No employer screenshot, report, repository, source code, data, schema,
  topology, endpoint, hostname, credential, logo, or private workflow was added.
- Employer architecture stays at sanitized resume level with complete text
  alternatives and no deep route.
- No `.tex`, French resume, research PDF, unresolved shared-drive destination,
  certification destination, project link, or project media entered `public/`.
- Both PDFs are unencrypted, contain no JavaScript or attachment, and expose no
  private filesystem path or author metadata.
- `npm audit --omit=dev` reports zero vulnerabilities.

Public PDF SHA-256 values:

- Data Engineer: `96f6e694c1faf979f4cb4c0c21f493c9597406b3b8e0644ae4abacf726017176`
- Software Engineer: `ce5a2102947f5a16e0c9c9bc4128c447e94990a339ca2af279d95e949abaaa42`

## 12. Missing content

The 25 internal gap records preserve unresolved optional evidence without
placing placeholder prose in public content. The main open groups are:

- ownership and publication permission for the reused shared-drive destination;
- optional public links/media for employer and personal projects;
- optional supporting artifacts for the approved CentralGIS, EIA, and OCP
  metrics;
- the stock-pipeline user or decision context;
- the exact IEEE citation export;
- optional certification destinations; and
- a complete, independently public Data Engineer deep case study.

None blocks the three approved text-only employer highlights, concise
resume-backed personal-project treatment, title-and-link research treatment, or
the two resume downloads. Unavailable fields must remain omitted in Phase 4.

## 13. Known limitations

- The public resume URLs are validated directly but are not yet rendered as
  homepage actions; homepage composition belongs to Phase 4.
- The Data Engineer resume remains two pages and has substantial whitespace on
  its second page. It is complete and legible; redesigning resume source layout
  was outside this phase.
- The LaTeX compiler reported its source's small-caps fallback, approximately
  0.56-point overfull boxes, and footskip recommendation. Visual review found no
  clipping or overlap.
- The resume PDFs are not tagged PDF/UA documents.
- Project media arrays are intentionally empty until owned, non-confidential
  assets receive explicit review.
- Optional evidence gaps remain internal and must never appear as polished UI
  copy.

## 14. Diff review findings

The incremental implementation, API/interface, security, Playwright, React
performance, five-axis code review, and portfolio quality-gate preparation
found:

- Blockers: none.
- Required corrections: none after protocol-specific link validation, date
  ordering, reference uniqueness, media MIME/extension checks, bounded signature
  reads, PDF derivative corrections, and the architecture status-label update
  were added.
- Optional improvements inside Phase 3 scope: none.
- Unrelated changes: none.
- Later-phase work: none.
- Largest focused source file: `src/content/records/projects.ts` at 625 lines;
  all files remain below the mandatory review threshold.
- Public assets: two declared PDFs only; no undeclared governed asset.
- `git diff --check`: pass.

## 15. Approval status

**Approved by Jao on 2026-08-19**

Jao approved the public claim registry and both resume derivatives. Phase 3
stops before Phase 4.
