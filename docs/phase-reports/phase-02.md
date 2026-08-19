# Phase 02 report: Signal Ledger design system

Date: 2026-08-19
Branch: `phase/02-design-system`
Baseline: `b5e6d88` (`phase 01: establish project foundation`)

## 1. Approved scope

Phase 2 was limited to visual-direction comparison, human selection, the final
design contract, semantic tokens, foundational presentation primitives, and a
temporary development-only review route.

Jao selected **Signal Ledger** on 2026-08-18. The selection did not combine
parts from Field Notes or Modular Current.

No recruiter homepage section, final content registry, public resume, project
route, advanced animation, Motion dependency, 3D, backend, database, CMS,
authentication, analytics, tracking, contact form, or deployment work was in
scope.

## 2. Delivered work

- Documented three materially different directions using the same approved
  hero, employer-highlight, metric, contact, control, and generic architecture
  evidence.
- Recorded the explicit Signal Ledger selection and retained the other two
  directions as review history only.
- Created the approved design contract covering color, typography, type scale,
  grid, spacing, surface, border, radius, shadow, icon, diagram, motion,
  accessibility, responsive, and component rules.
- Implemented the selected palette as semantic OKLCH variables with Tailwind
  theme aliases. Shared components contain no raw palette values.
- Added the selected system font stacks without a remote font request.
- Added reduced-motion-aware timing tokens without implementing advanced
  animation or installing Motion.
- Added global visible-focus, text-selection, tap-highlight, color-scheme, and
  browser theme-color behavior.
- Implemented the approved foundational primitives as Server Components with
  direct imports and explicit typed variants:
  - `Container`
  - `Section`
  - `SectionHeading`
  - `Button` and `ButtonLink`
  - `TextLink`
  - `Badge`
  - `Metric`
  - `ProjectCardShell`
  - `ArchitectureNode`
  - `SkipLink`
  - shared focus-ring behavior
- Kept the temporary `/design-lab` route available in development and forced it
  through `notFound()` in production.
- Added an approved-foundation panel to the lab that renders the actual shared
  primitives with the selected tokens.
- Added component, route, browser-error, focus, target-size, reduced-motion,
  and responsive-overflow tests.

## 3. Files changed

### Documentation

- `docs/design-directions.md`
- `docs/design-system.md`
- `docs/phase-reports/phase-02.md`

### Application foundation

- `src/app/globals.css`
- `src/app/layout.tsx`

### Development-only design lab

- `src/app/design-lab/page.tsx`
- `src/app/design-lab/design-lab.module.css`
- `src/app/design-lab/page.test.tsx`

### Foundational primitives

- `src/components/layout/container.tsx`
- `src/components/layout/section.tsx`
- `src/components/layout/section-heading.tsx`
- `src/components/layout/layout.module.css`
- `src/components/ui/button.tsx`
- `src/components/ui/text-link.tsx`
- `src/components/ui/badge.tsx`
- `src/components/ui/metric.tsx`
- `src/components/ui/project-card-shell.tsx`
- `src/components/ui/architecture-node.tsx`
- `src/components/ui/skip-link.tsx`
- `src/components/ui/primitives.module.css`
- `src/components/ui/primitives.test.tsx`

### Browser tests

- `e2e/design-lab.spec.ts`
- `e2e/home.spec.ts`

The recruiter homepage structure and copy remain the Phase 1 foundation.

## 4. Dependencies changed

None. `package.json` and `package-lock.json` are unchanged. No font, icon,
component-library, Motion, Motion+, Three.js, React Three Fiber, or other
dependency was added.

## 5. Commands and exit results

| Command                                                  | Exit/result                                                                                  |
| -------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| Targeted `npx prettier --write ...` after each increment | 0 — changed files formatted                                                                  |
| Incremental `npm run lint`                               | 0 — zero warnings                                                                            |
| Incremental `npm run typecheck`                          | 0 — route types and TypeScript passed                                                        |
| Incremental `npm run test`                               | 0 — 3 files and 3 tests passed after primitive work                                          |
| First updated `npm run test:e2e`                         | 1 — 3 tests found an ambiguous partial heading locator; application rendering was successful |
| Corrected `npm run test:e2e`                             | 0 — 5 Chromium tests passed                                                                  |
| Responsive screenshot capture script                     | 0 — 11 clean screenshots, no overflow or isolated-browser errors                             |
| `git diff --check` before the final gate                 | 0                                                                                            |
| Final `npm run check`                                    | 0 — formatting, lint, types, 3/3 unit tests, 5/5 browser tests, and production build passed  |
| Production `/` and `/design-lab` status check            | 0 — `/` returned 200; `/design-lab` returned 404 with `noindex`                              |

No required command or Phase 2 check was skipped.

## 6. Automated checks

- Unit/render tests cover approved direction content and native primitive
  semantics.
- Playwright covers HTTP success in development, browser console and page
  errors, all three directions, the selected implementation, the approved
  email, safe external-link attributes, skip navigation, actual primitive
  focus visibility, a 44px action target, reduced motion, and horizontal
  overflow at all approved widths.
- The design lab uses an uncontrolled labelled form field with a meaningful
  name and autocomplete policy.
- Type checking confirms explicit component variants and native element props.
- The production route boundary is verified separately after the final build.

## 7. Manual checks

- Fresh Web Interface Guidelines were fetched and applied as a read-only audit.
  The audit led to bounded fixes for theme metadata, heading scroll offsets,
  intentional tap highlights, active states, and long-text containment.
- Final guideline findings:
  - `src/app/design-lab/page.tsx`: pass.
  - `src/app/design-lab/design-lab.module.css`: pass.
  - `src/components/layout/*`: pass.
  - `src/components/ui/*`: pass.
  - `src/app/globals.css`: pass.
- Keyboard: skip navigation moves focus to `main`; the approved primitive
  action receives a visible solid focus outline; no trap or focus loss occurs.
- Reduced motion: every direction and the selected primitive panel remain
  visible; no CSS animation runs; timing tokens resolve to 0ms.
- Link review: approved email uses the corrected address; GitHub opens with
  `noopener noreferrer`; internal shortcuts have descriptive text.
- The isolated browser capture reported no console or page errors. A separate
  developer-server log recorded an attribute inserted into `<body>` by a
  locally installed browser extension; the clean Playwright context did not
  reproduce it, so it is not an application hydration issue.
- No JavaScript is required for the design system or primitives.

## 8. Responsive screenshots reviewed

Temporary screenshots were generated under `/tmp` and visually reviewed. They
are verification artifacts, not public assets.

| Evidence                                   | Viewport/result                                                                       |
| ------------------------------------------ | ------------------------------------------------------------------------------------- |
| `portfolio-phase2-design-lab-375.png`      | 375 × 812; one-column reflow, no clipping                                             |
| `portfolio-phase2-design-lab-768.png`      | 768 × 1024; tablet reflow, no overflow                                                |
| `portfolio-phase2-design-lab-1440.png`     | 1440 × 900; desktop grid and evidence rail pass                                       |
| `portfolio-phase2-design-lab-1920.png`     | 1920 × 1080; bounded wide composition passes                                          |
| `portfolio-phase2-design-lab-zoom-320.png` | 400 × 900 CSS pixels, equivalent to 1280px at 320% CSS zoom; one-column reflow passes |
| Three direction crops at 375px             | Signal Ledger, Field Notes, and Modular Current remain distinct and readable          |
| Three direction crops at 1440px            | All comparison grids remain readable with no clipping                                 |

The selected foundation panel was reviewed in the full-page 375px and 1440px
captures. The capture script also tested every required width for horizontal
overflow and returned none.

## 9. Accessibility impact

- Primary text, muted text, data signal, and verified signal exceed 4.5:1 on
  their used dark surfaces.
- Structural borders exceed 3:1 against canvas and surface.
- Native links and buttons preserve keyboard and assistive-technology
  semantics.
- Every shared interactive treatment has visible `:focus-visible` behavior,
  hover feedback, active feedback, and a minimum 44px action target.
- `SectionHeading` makes the heading level explicit; page tests preserve a
  logical hierarchy.
- `ArchitectureNode` is an ordered-list item, and architecture meaning is
  available as linear text rather than color alone.
- Required evidence remains visible without hover, motion, client JavaScript,
  or WebGL.
- Global zoom is not restricted.

Automated coverage supplements the visual and keyboard review; it does not
replace later full accessibility testing.

## 10. Performance impact

- Shared primitives and the lab remain Server Components with no client
  boundary or hydration code.
- No dependency or remote font request was added.
- Component CSS is statically extracted and uses route-scoped CSS Modules.
- The temporary lab is unavailable in production; the public homepage receives
  only the small global token layer and static viewport metadata.
- Direct component imports avoid barrel-module expansion.
- No image, video, animation loop, third-party script, runtime fetch, or layout
  measurement was introduced.

Formal Lighthouse and Core Web Vitals measurement remains Phase 9 work and is
not claimed here.

## 11. Security and privacy impact

- No public asset, employer artifact, private repository, Drive URL, internal
  screenshot, employer logo, credential, schema, endpoint, hostname, or private
  workflow was added.
- The design lab uses only approved facts and resume-level employer wording.
- The approved email with the final zero overrides the obsolete private-source
  email everywhere in application and test code.
- External GitHub links use safe new-tab attributes. No unapproved external URL
  is fetched or rendered.
- No user data is submitted, stored, logged, or transmitted by the sample form.
- No dependency or lockfile change expands the supply-chain surface.
- Application/test scans found no old email, private input path, restricted
  Drive material, `dangerouslySetInnerHTML`, unsafe click navigation, or secret
  marker.

## 12. Missing content

No missing content blocks the Phase 2 design system. Existing portfolio content
gaps remain in `docs/content-inventory.md` and are not exposed as polished
placeholder copy.

No owned/self-hosted Sora or IBM Plex font files were supplied. The approved
prototype and final system use the reviewed system stacks instead.

## 13. Known limitations

- `/design-lab` is intentionally a development-only review route and returns
  not found in production.
- The route keeps the two unselected directions for comparison history; public
  portfolio routes will use Signal Ledger only.
- The design system defines motion timing but deliberately implements no
  advanced motion before Phase 6.
- The primitives are foundations, not a component library; they avoid
  speculative variants and will be composed by later approved presentation
  phases.
- The custom typeface candidates remain uninstalled until owned WOFF2 assets
  and font metrics receive a separate measured review.

## 14. Diff review findings

The incremental, React/Next.js performance, composition, interface-design,
motion-planning, Playwright, Web Interface Guidelines, security, and
five-axis code reviews found:

- Blockers: none.
- Required corrections: none after exact Playwright locators, viewport theme
  metadata, active states, long-text containment, and selected-primitive focus
  coverage were added.
- Optional improvements: none inside Phase 2 scope.
- Unrelated changes: none.
- Later-phase work: none.
- File-size review: the temporary lab stylesheet is 852 lines and remains below
  the review threshold; reusable component CSS is isolated in a focused
  231-line module.
- Component API review: native element props remain available, variants are
  explicit string unions, and no boolean-prop matrix or client provider was
  introduced.
- `git diff --check`: pass.

## 15. Approval status

**Pending human review**

Signal Ledger received explicit direction approval and the user authorized the
Phase 2 commit and push. This report retains the repository-required approval
label. Phase 2 stops before any Phase 3 implementation begins.
