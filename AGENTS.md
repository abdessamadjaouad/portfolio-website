# Portfolio repository instructions

## Mission

Build a professional portfolio for Abdessamad Jaouad with this priority:

1. Data Engineer
2. Software Engineer

The primary audience order is:

1. Recruiters
2. Engineering managers
3. Senior engineers

The site must make the role, strongest evidence, resume links, availability, and contact paths easy to find. Technical depth must support hiring decisions without exposing private employer material.

## Required startup sequence

Before any edit:

1. Read this file completely.
2. Read `portfolio-codex-implementation-plan.md` completely.
3. Locate the requested phase and read its scope, skills, dependency envelope, acceptance criteria, checks, and stop condition.
4. Inspect `git status --short` and the relevant files.
5. Verify every skill named by the phase exists under `.agents/skills/<skill-name>/SKILL.md`.
6. Read every selected `SKILL.md` completely, plus each required reference named by it.
7. Report the current state, expected file changes, expected commands, and genuine blockers.

For Phase 0, expect `docs/` to be absent. Its absence is the approved starting state. Phase 0 creates the planning documents from scratch. Do not search for, restore, migrate, or delete an older Phase 0 output.

If a required skill is absent, stop before editing and report its exact name. Never silently replace it with a different skill.

## Instruction priority

Use this priority when instructions conflict:

1. The current user request
2. This `AGENTS.md`
3. The approved active phase in `portfolio-codex-implementation-plan.md`
4. Approved phase documents
5. Selected skill instructions
6. General repository conventions

Never let an old generated document override a newer approved fact.

## Phase discipline

- Execute only the phase named by the user.
- Do not start, prepare, or partially implement a later phase.
- Keep every phase independently reviewable and runnable.
- Preserve unrelated user changes.
- Do not commit, tag, push, deploy, or create a release without explicit approval.
- Do not install an unlisted production dependency without explicit approval.
- Dependencies listed inside an approved active phase form its approved dependency envelope.
- Do not add a backend, database, CMS, authentication, analytics, tracking, or contact form to Version 1.
- Stop at every human approval gate.

## Sources of truth

Use public content from these sources in this order:

1. Approved facts in this file and the implementation plan
2. `private-inputs/CV/new-cv.tex`, the English Data Engineer resume source
3. `private-inputs/CV/new-cv-software.tex`, the English Software Engineer resume source
4. User answers recorded in approved phase documents

`private-inputs/CV/abdessamad_jaouad_cv.tex` is the private French Data and AI resume. It is reference material only. Never copy it, compile it, link it, index it, or place it under `public/`.

All three `.tex` sources are private inputs. Only the two reviewed English PDF outputs are approved for publication.

`prompt-draft.txt` is user material, not a source of truth. Preserve it unchanged unless the user requests work on it.

Phase 0 documents become authoritative only after the user approves the Phase 0 report.

## Current repository baseline

Before Phase 0:

- `docs/` is absent by user choice.
- The three CV sources exist under `private-inputs/CV/`.
- `.agents/references/definition-of-done.md` exists.
- `.agents/references/performance-checklist.md` exists.
- `.agents/references/security-checklist.md` exists.
- The ten project skills exist under `.agents/skills/`.
- `AGENTS.md`, this plan, `.gitignore`, `skills-lock.json`, and `prompt-draft.txt` exist at the root.

Preserve this baseline. Phase 0 creates `docs/` and no application code.

## Approved profile facts

- Public name: Abdessamad Jaouad
- Primary role: Data Engineer
- Secondary role: Software Engineer
- Location: Casablanca, Morocco
- Availability: Immediately
- Work arrangements: On-site, hybrid, and remote
- Email: `abdessamadjaouad0@gmail.com`
- GitHub: `https://github.com/abdessamadjaouad`
- LinkedIn: `https://linkedin.com/in/abdessamadjaouad`
- Public phone: `+212679075431`
- WhatsApp destination: `https://wa.me/212679075431`
- Contact order: email, WhatsApp, LinkedIn

The resume sources contain an older email without the final zero. The approved email in this file takes precedence.

## Approved experience facts

Use the official title and employment type below across the site and public resumes:

| Employer | Official title | Type | Dates | Location |
| --- | --- | --- | --- | --- |
| DXC Technology Morocco | Data & AI Engineer | Internship | February to August 2026 | Sale El Jadida, Morocco |
| JESA S.A. | Software Engineer & Data Scientist | Internship | July to September 2025 | Casablanca, Morocco |
| OCP Group | Full Stack Developer | Internship | April to June 2024 | Safi, Morocco |

Use only resume-backed responsibilities, technologies, dates, education, certifications, languages, and results.

## Approved project order and metrics

Employer experience highlights use this order:

1. AI Sandbox
2. CentralGIS
3. OCP workforce management platform

Approved metrics:

- CentralGIS reduced data access time by 40%.
- The JESA Environmental Impact Assessment work reduced inputs from 52 to 38 parameters.
- The reduction equals 27%.
- The result maintained at least 95% accuracy.
- OCP backend performance improved by 30%.

Do not create extra metrics, rounded values, time estimates, user counts, cost savings, performance scores, or business outcomes.

## Publication boundaries

The following are not approved for public case studies:

- AI Sandbox
- CentralGIS
- OCP workforce management platform

Never publish employer source code, internal data, internal screenshots, private repositories, private reports, credentials, or implementation detail beyond the public resume text.

Sanitized recreated diagrams are approved only when they contain no employer-specific schema, topology, data, endpoint, hostname, credential, screenshot, logo asset, or private workflow. Employer projects stay concise experience highlights, not deep case-study routes.

The same Google Drive URL was supplied for AI Sandbox, CentralGIS, and the demo video. Do not publish or fetch it until the user identifies its owner and explicitly approves public linking.

## Research boundary

Approved research title:

`Reducing PQC Overhead in IoT Networks Using an Epoch-Based Compression Approach`

Approved link:

`https://ieeexplore.ieee.org/document/11601673`

The supplied Shor, Lopez, and Mosca entries are references, not the full citation for Abdessamad's paper. Publish only the approved title and IEEE link until exact authors, venue, date, pages, and DOI or exported BibTeX are verified.

Use `TODO_CONTENT_IEEE_CITATION` for the unresolved citation. Do not infer metadata.

## Resume publication boundary

- English Data Engineer resume: public
- English Software Engineer resume: public
- French Data and AI resume: private
- All `.tex` resume sources: private
- Only reviewed English PDFs: public

Public PDF filenames:

- `public/resumes/abdessamad-jaouad-data-engineer.pdf`
- `public/resumes/abdessamad-jaouad-software-engineer.pdf`

Before publication, verify the public PDFs visually, verify selectable text, verify links, and verify the approved email and official titles.

## Content rules

- Never invent facts, projects, links, dates, metrics, citations, employers, responsibilities, or technologies.
- Prefer precise resume wording over inflated marketing copy.
- Separate employer experience highlights from personal projects.
- Personal projects already listed in the public English resumes are eligible for concise cards.
- Do not label an internship as full-time employment.
- Do not expose a missing field through polished placeholder prose.
- Use a named `TODO_CONTENT_*` marker only for a genuine unresolved field.
- Keep a single content registry so the same fact is not repeated in several conflicting files.
- No skill percentage bars, fake counters, fictional testimonials, client logos without permission, or invented recommendations.

## Version 1 product boundaries

Version 1 is a static public portfolio with local typed content.

Included:

- One recruiter-first homepage
- Resume-backed experience highlights
- Resume-backed personal project cards
- Skills grouped by evidence and role
- Education, certifications, languages, and research
- Direct email, WhatsApp, LinkedIn, GitHub, and resume links
- Accessible responsive design
- Free Motion features after the static experience passes review
- Optional 3D enhancement only in its approved gated phase
- SEO metadata, social image, sitemap, robots, structured data, and tests

Excluded:

- Contact backend
- Database
- CMS
- Authentication
- User accounts
- Live GitHub fetching
- Employer case-study routes
- Public French resume
- Motion+ packages, APIs, examples, or paid access
- Required WebGL for navigation or content

## Technical architecture

- Use the latest stable Next.js App Router scaffold available during Phase 1.
- Use React and TypeScript strict mode.
- Use Server Components by default.
- Add `"use client"` only at the smallest interactive boundary.
- Keep content in typed local modules.
- Keep route files thin and presentation components focused.
- Prefer semantic HTML and CSS before a component library.
- Use Tailwind CSS with semantic design tokens.
- Use npm and commit `package-lock.json`.
- Record exact installed versions in the Phase 1 report. Do not hardcode guessed versions in planning files.
- Avoid barrel exports on performance-sensitive paths.
- Avoid experimental framework APIs unless the active phase names one and the user approves it.

## Component rules

- Prefer composition over boolean prop growth.
- Keep variants explicit and typed.
- Keep content data outside JSX where practical.
- Reuse primitives before adding another abstraction.
- Avoid speculative generic components.
- Use native links and buttons with correct semantics.
- Preserve visible focus, keyboard order, touch targets, and descriptive link text.
- Do not hide required information behind hover, animation, tabs, or WebGL.

## Design rules

- Lead with evidence, not decoration.
- Keep Data Engineer evidence first and Software Engineer evidence second.
- Use a calm editorial system with a technical signal-flow motif.
- Use real resume content in every design prototype.
- Avoid fake terminals, dashboard-template styling, excessive glass, noisy gradients, particle fields, and decorative charts with no meaning.
- Support 320% CSS zoom, text reflow, narrow mobile, tablet, laptop, and wide desktop.
- Meet WCAG 2.2 AA contrast and interaction requirements.
- Use semantic tokens instead of raw repeated color values.
- Keep the page useful without JavaScript.

## Motion rules

- Use the free `motion` package only.
- Use `$motion` before Motion implementation.
- Skip every Motion+ instruction, component, example, MCP route, or package.
- Use `MotionConfig` with `reducedMotion="user"`.
- Prefer CSS transitions for simple hover and focus feedback.
- Use Motion for state, hierarchy, continuity, or the approved signal-flow sequence.
- Never use scroll hijacking, forced smooth scrolling, autoplay video, flashing effects, or `transition: all`.
- Never delay access to project, resume, or contact information.
- Keep server-rendered content visible before animation code loads.
- Disable large transforms, parallax, continuous rotation, and ambient movement for reduced-motion users.

## Three-dimensional rules

- Use `$portfolio-r3f-3d` only in the optional 3D phase.
- Require explicit user approval before installing Three.js or React Three Fiber packages.
- Keep the 3D bundle outside the initial homepage load.
- Provide an equivalent static DOM or SVG fallback.
- Use the fallback for reduced motion, unavailable WebGL, load failure, and constrained devices.
- Never encode employer architecture or required navigation in the scene.
- Dispose resources and stop render work outside the viewport.
- Remove the enhancement if measured cost exceeds the approved budget.

## Skill routing

Use only exact installed names:

| Skill | Required use |
| --- | --- |
| `$incremental-implementation` | Every phase with changes across several files |
| `$code-review-and-quality` | Final review of every phase before reporting |
| `$vercel-react-best-practices` | Next.js or React setup, implementation, refactor, and performance work |
| `$vercel-composition-patterns` | Design-system, reusable component, and component API work |
| `$web-design-guidelines` | Visual, responsive, interaction, UX, and accessibility audits |
| `$motion` | Motion planning, implementation, review, or debugging |
| `$portfolio-r3f-3d` | Approved React Three Fiber or Three.js work only |
| `$playwright-best-practices` | Browser, accessibility, responsive, visual, and end-to-end tests |
| `$api-and-interface-design` | Typed content contracts, module boundaries, and any approved API contract |
| `$security-and-hardening` | Public/private asset handling, user input, external links, headers, dependencies, and release review |

Do not invoke missing names from the old plan, including `$frontend-skill`, `$frontend-design`, or `$shadcn`.

The project references already exist. Read the relevant file completely before editing:

- `$incremental-implementation` uses `.agents/references/definition-of-done.md`.
- Performance, React, Motion, or 3D work uses `.agents/references/performance-checklist.md`.
- `$security-and-hardening` uses `.agents/references/security-checklist.md`.

Do not recreate or overwrite these reference files during Phase 0.

## Verification rules

Run the smallest relevant checks after each increment. Run the full available gate before phase completion.

After Phase 1 defines scripts, the expected full gate is:

1. `npm run format:check`
2. `npm run lint`
3. `npm run typecheck`
4. `npm run test`
5. `npm run test:e2e`
6. `npm run build`

Report every skipped command with its reason. Never report a check as passed without its exit status or equivalent evidence.

UI phases also require:

- Browser console review
- Keyboard pass
- Reduced-motion pass
- Responsive screenshots at approved widths
- No horizontal overflow
- Link and download verification
- Public/private content scan

Automated accessibility checks supplement manual review. They do not replace it.

## Phase completion report

Create or update `docs/phase-reports/phase-NN.md` with:

1. Approved scope
2. Delivered work
3. Files changed
4. Dependencies changed
5. Commands and exit results
6. Automated checks
7. Manual checks
8. Responsive screenshots reviewed
9. Accessibility impact
10. Performance impact
11. Security and privacy impact
12. Missing content
13. Known limitations
14. Diff review findings
15. Approval status set to `Pending human review`

End the response with a clear stop. Wait for user approval before later work.

## Definition of done

A phase is complete only when:

- Its requested scope is delivered.
- Later-phase work is absent.
- Public facts match approved sources.
- Private files and employer material stay private.
- Relevant tests pass.
- Type, lint, build, console, and hydration errors are absent.
- Keyboard, focus, responsive, and reduced-motion paths pass where relevant.
- New dependencies stay within the approved phase envelope.
- The final diff contains no unrelated change.
- The phase report records evidence and limitations.
- Human approval is still pending.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
