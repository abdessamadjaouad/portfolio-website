# Phase 04 report: static recruiter experience

Date: 2026-08-19
Branch: `phase/04-homepage`
Baseline: `18b3b07` (`phase 03: validate content and public assets`)

## 1. Approved scope

Phase 4 was limited to the complete static, recruiter-first homepage: skip
navigation, compact sticky navigation, hero actions, verified results, employer
and personal-project evidence, evidence-linked skills, experience and education,
research, about, contact, and footer content.

The page had to remain useful without JavaScript, preserve the approved
Data Engineer then Software Engineer priority, use only validated local content,
and contain no advanced animation. Project routes, Engineer view, deep case
studies, architecture diagrams, the command palette, Motion, 3D, SEO expansion,
analytics, tracking, a contact form, and every other Phase 5 or later concern
were outside scope.

The current `AGENTS.md` explicitly forbids the obsolete `shadcn` skill name in
the older phase prompt. Phase 4 therefore used the exact installed current
skills instead: `incremental-implementation`, `vercel-react-best-practices`,
`vercel-composition-patterns`, `web-design-guidelines`,
`playwright-best-practices`, `security-and-hardening`, and
`code-review-and-quality`.

## 2. Delivered work

- Replaced the Phase 1 landing placeholder with the complete approved homepage
  order.
- Kept the route thin and composed the page from focused Server Components.
- Added a compact sticky header, visible skip link, semantic navigation, and
  reliable fragment targets with sticky-header offsets.
- Added the approved name, primary and secondary roles, Casablanca location,
  immediate availability, work arrangements, both public resume downloads,
  email, GitHub, and LinkedIn to the opening recruiter path.
- Added a four-result credibility strip using only the approved 40%, 52-to-38,
  at-least-95%, and 30% facts.
- Added three concise employer highlights in the approved order, with official
  titles, `Internship` labels, dates, locations, resume-backed contributions,
  and no employer case-study links or private artifacts.
- Kept the JESA Environmental Impact Assessment result separate from
  CentralGIS.
- Added four resume-backed personal-project cards without exposing unresolved
  project links or media.
- Added all validated skills as semantic lists connected to existing project or
  experience evidence, with no ratings or percentage bars.
- Added official experience, education, certifications, languages, the bounded
  IEEE title-and-link research treatment, a short about section, and contact
  actions in the approved email, WhatsApp, LinkedIn order.
- Added responsive, keyboard, link-safety, resume, reduced-motion, no-JavaScript,
  console-error, heading-order, and overflow regression tests.
- Added empty-safe section behavior for optional arrays while treating missing
  required contact, resume, or research references as validated content errors.
- Kept the entire experience static and server-rendered. No Client Component,
  animation package, network data request, form, or application state was
  introduced.

## 3. Files changed

### Route and global behavior

- `src/app/page.tsx`
- `src/app/page.test.tsx`
- `src/app/globals.css`

### Homepage composition

- `src/components/portfolio/portfolio-home.tsx`
- `src/components/portfolio/home-content.ts`
- `src/components/portfolio/site-header.tsx`
- `src/components/portfolio/hero-section.tsx`
- `src/components/portfolio/credibility-strip.tsx`
- `src/components/portfolio/work-section.tsx`
- `src/components/portfolio/skills-section.tsx`
- `src/components/portfolio/journey-section.tsx`
- `src/components/portfolio/research-section.tsx`
- `src/components/portfolio/about-section.tsx`
- `src/components/portfolio/contact-section.tsx`
- `src/components/portfolio/site-footer.tsx`

### Homepage presentation

- `src/components/portfolio/homepage.module.css`
- `src/components/portfolio/journey.module.css`
- `src/components/portfolio/closing.module.css`

### Browser verification and report

- `e2e/home.spec.ts`
- `docs/phase-reports/phase-04.md`

No public asset, content record, private input, dependency manifest, lockfile,
configuration file, or earlier phase report changed.

## 4. Dependencies changed

None. `package.json` and `package-lock.json` are unchanged.

Phase 4 uses the existing Next.js, React, TypeScript, CSS Module, Vitest, and
Playwright toolchain. No Motion, Motion+, component-library, 3D, accessibility,
analytics, backend, or external-content package was installed.

## 5. Commands and exit results

| Command or check                                                             | Exit/result                                                                                                                                             |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Targeted `npx prettier --write` on Phase 4 files                             | 0 — all files formatted                                                                                                                                 |
| Focused `npm run test -- src/app/page.test.tsx`                              | 0 — 5/5 homepage unit tests passed                                                                                                                      |
| Focused `npm run lint`                                                       | 0 — no warnings or errors                                                                                                                               |
| Focused `npm run typecheck`                                                  | 0 — route types generated and strict TypeScript passed                                                                                                  |
| First focused `npm run test:e2e -- e2e/home.spec.ts` after screenshot review | 1 — temporary screenshot server already owned port 3101; no product failure                                                                             |
| Focused `npm run test:e2e -- e2e/home.spec.ts` after stopping that server    | 0 — 7/7 homepage browser tests passed                                                                                                                   |
| Playwright responsive and reduced-motion screenshot capture                  | 0 — seven clean captures, no application console error or horizontal overflow                                                                           |
| `npm audit --omit=dev`                                                       | 0 — zero production vulnerabilities                                                                                                                     |
| `npm run format:check`                                                       | 0 — all matched files use Prettier style                                                                                                                |
| `npm run lint`                                                               | 0 — zero warnings and errors                                                                                                                            |
| `npm run typecheck`                                                          | 0 — route types generated; `tsc --noEmit` passed                                                                                                        |
| `npm run test`                                                               | 0 — 5 files and 17/17 tests passed                                                                                                                      |
| `npm run test:e2e`                                                           | 0 — 13/13 Chromium tests passed                                                                                                                         |
| `npm run build`                                                              | 0 — Next.js 16.3.1 production build passed; `/` is statically prerendered                                                                               |
| `git diff --check`                                                           | 0 — no whitespace errors                                                                                                                                |
| Rendered homepage/private-boundary scan                                      | 1 from `rg` — expected no-match result; no TODO, shared-drive, private-input, French-resume, or private source name in generated homepage/public assets |
| Changed-scope secret-signature scan                                          | 1 from `rg` — expected no-match result                                                                                                                  |

An earlier reduced-motion browser assertion initially inspected the Next.js
development toolbar as well as the application tree. Scoping the check to
`#top` removed that harness-only false positive; the application has no
non-zero transition or animation duration under reduced motion.

A local graphical browser extension also injected `bis_*` attributes into one
manual development-server visit and caused a React development warning. A
fresh extension-free Playwright context did not reproduce it, and both the
focused and complete browser gates reported no console, page, or hydration
errors.

No required Phase 4 command was skipped.

## 6. Automated checks

- Five homepage unit tests verify the opening recruiter path, approved project
  order, official internship facts, exact metrics, evidence-linked skills,
  bounded research treatment, contact order, and absence of public TODO copy.
- Seven homepage Playwright tests verify HTTP success, metadata, primary facts,
  project and social discoverability, browser errors, skip navigation, keyboard
  order, visible focus, 44px controls, heading order, fragment integrity,
  external-link safety, resume downloads, all approved widths, reduced motion,
  and the no-JavaScript experience.
- The full repository suite passes 17 unit tests and 13 Chromium tests,
  including the existing design-system and public-PDF coverage.
- Both public resume links return HTTP 200 with an `application/pdf` content
  type and retain the `download` attribute.
- The generated production homepage and public assets contain none of the
  blocked TODO, shared-drive, private-input, French-resume, or private source
  markers.
- The production build statically prerenders the homepage and design lab.

Automated semantic and interaction checks supplement the visual review. No axe
dependency was added because it is not in the Phase 4 dependency envelope; the
broader automated accessibility audit remains scheduled for Phase 8.

## 7. Manual checks

- Confirmed a first viewport clearly exposes the public name, Data Engineer and
  Software Engineer roles, location, immediate availability, Data Engineer
  resume, email, GitHub, and LinkedIn.
- Reviewed the complete page against the approved content inventory and
  registry. Titles, internship labels, dates, location, metric wording, contact
  data, project order, and research boundary match the governing sources.
- Confirmed the JESA EIA result is visually and semantically separate from
  CentralGIS.
- Confirmed employer highlights have no links, screenshots, internal diagrams,
  logos, repositories, or deep-route affordances.
- Confirmed personal-project links and media are omitted instead of represented
  by polished placeholders.
- Reviewed keyboard order, visible focus, skip-link behavior, sticky fragment
  destinations, descriptive link purpose, and touch-target sizing with the
  browser tests and page captures.
- Reviewed the page with reduced motion and with JavaScript disabled. All
  recruiter content, resume links, projects, and contact paths remain present.
- Reviewed browser console and page-error capture in an extension-free Chromium
  context; no application error or hydration warning occurred.
- Reviewed both resume download destinations and every internal fragment.
- Confirmed every HTTPS link opens with `noopener noreferrer`; email links stay
  in the current context.
- Applied the current `web-design-guidelines` checklist as a read-only audit.
  It found no blocking or required Phase 4 issue, and the audit changed no
  source file.

## 8. Responsive screenshots reviewed

| Evidence                                       | Review result                                                                |
| ---------------------------------------------- | ---------------------------------------------------------------------------- |
| `/tmp/portfolio-phase4-320.png`                | 320px narrow-mobile layout reflows with no clipping or overflow              |
| `/tmp/portfolio-phase4-375.png`                | 375px mobile hierarchy and actions remain legible and reachable              |
| `/tmp/portfolio-phase4-zoom-320.png`           | 400 CSS px, the 320% zoom equivalent from a 1280px viewport, reflows cleanly |
| `/tmp/portfolio-phase4-768.png`                | Tablet layout preserves reading and keyboard order                           |
| `/tmp/portfolio-phase4-1440.png`               | Laptop/desktop evidence grid is balanced and complete                        |
| `/tmp/portfolio-phase4-1920.png`               | Wide layout respects the maximum container and avoids excessive line length  |
| `/tmp/portfolio-phase4-reduced-motion-375.png` | Reduced-motion mobile rendering remains complete and static                  |

The first desktop review exposed the third employer card in an unintended grid
column. The Phase 4 implementation was corrected and the 768px, 1440px, and
1920px evidence was recaptured before the final read-only audit. All final
screenshots were reviewed; none has horizontal overflow, clipped content, an
obscured action, or missing section content.

The screenshots are temporary verification artifacts and were not added to the
repository or public application.

## 9. Accessibility impact

- One semantic `main`, labelled sections, nested heading order, lists,
  definition lists, articles, navigation landmarks, and a content-info footer
  expose a coherent document outline.
- The first keyboard stop is a visible skip link, which transfers focus to the
  main landmark. Visual and DOM focus order match.
- Native links preserve browser behavior; there is no clickable `div`, custom
  keyboard emulation, or interaction hidden behind hover.
- Required actions meet the 44px touch-target minimum and use a visible 3px
  focus outline.
- Sticky-header offsets keep fragment targets visible when navigated.
- The approved Signal Ledger token combinations retain their reviewed WCAG 2.2
  AA contrast ratios; verified/data colors always accompany text labels.
- The page has no animation. Reduced-motion preferences additionally collapse
  all simple feedback durations to 0ms.
- Core content is server-rendered and remains available without JavaScript.
- No form, autoplay media, canvas, WebGL, flashing effect, scroll hijacking, or
  forced smooth scrolling was added.

The public resume PDFs retain selectable text and reviewed reading order but
remain untagged PDF/UA documents, as recorded in Phase 3.

## 10. Performance impact

- Every new homepage component is a Server Component; Phase 4 adds no
  `"use client"` boundary or application state.
- The homepage is statically prerendered from validated local content with no
  runtime API, database, CMS, live GitHub request, analytics, or third-party
  script.
- No image, video, custom font request, JavaScript package, or animation package
  was added to the initial route.
- Content selection and evidence mapping happen on the server and produce
  semantic HTML.
- CSS is split into homepage, journey, and closing modules, reusing the Phase 2
  layout and UI primitives.
- Both PDFs remain request-only downloads and add nothing to the initial page
  payload.
- The production build compiled in 2.8 seconds in this environment and emitted
  `/` as static content.

No numeric homepage performance budget is approved for Phase 4. Lighthouse,
Core Web Vitals, and later performance-budget work are not inferred here.

## 11. Security and privacy impact

The Phase 4 threat model has three trust boundaries: validated local content,
the two reviewed public PDF derivatives, and outbound public links. There is no
user input, storage, authentication, session, server mutation, or third-party
data ingestion.

- React renders validated text through normal escaping; no raw HTML API is
  used.
- Required content references fail fast if a validated contact, resume, or
  research destination is missing.
- HTTPS destinations that open a new tab use `noopener noreferrer`.
- Contact paths contain only the explicitly approved public email, WhatsApp,
  and LinkedIn destinations.
- No employer source, data, screenshot, internal schema, topology, endpoint,
  hostname, credential, logo, report, private repository, or workflow appears.
- No shared-drive destination was fetched or published.
- No `.tex` source or French resume is imported, linked, copied, or included in
  the generated homepage/public scan.
- No unresolved TODO marker is rendered or emitted into the generated homepage.
- Production dependency audit reports zero vulnerabilities.
- The changed-scope secret-signature scan found no credential pattern.

## 12. Missing content

The following approved gaps remain intentionally omitted and can be added in a
later user-approved content update:

- optional public links for employer and personal projects;
- approved project media or demonstrations; and
- the full exported IEEE citation for Abdessamad's paper.

The approved paper title and IEEE Xplore destination are public. The unresolved
citation metadata is not inferred or exposed. These omissions do not block the
text-only Phase 4 recruiter path.

## 13. Known limitations

- Employer work remains concise by privacy policy and has no deep case-study
  route. Any eligible personal-project depth belongs to Phase 5.
- The homepage is intentionally long on narrow screens because every validated
  skill remains connected to evidence instead of being hidden behind tabs or
  client interaction.
- A formal axe-based audit is deferred to the later accessibility phase; Phase
  4 covers semantic structure, keyboard/focus, heading order, link purpose,
  responsive reflow, contrast tokens, reduced motion, and no-JavaScript paths.
- The public PDFs are not tagged PDF/UA documents.
- Advanced motion is intentionally absent and belongs only to its later gated
  phase.

## 14. Diff review findings

The incremental implementation, React performance, React composition,
Playwright, security, read-only web-design audit, and five-axis code review
found:

- Blockers: none.
- Required corrections: none after the desktop employer-card grid placement,
  focus target, sticky-anchor offset, explicit link discoverability, and
  application-scoped reduced-motion assertions were finalized.
- Optional improvements inside Phase 4 scope: none.
- Unrelated changes: none.
- Later-phase work: none.
- Dependency or lockfile changes: none.
- Client Components: none.
- Largest changed source file: `homepage.module.css` at 812 lines; presentation
  is already separated into three focused style modules and remains below the
  review threshold.
- `git diff --check`: pass.

The implementation improves the repository across correctness, readability,
architecture, security, and performance without adding speculative abstraction
or an unapproved dependency.

## 15. Approval status

**Pending human review**

Phase 4 stops here. Phase 5 has not been started, prepared, or partially
implemented.
