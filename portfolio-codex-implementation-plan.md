# Systems Atlas portfolio

## Full implementation plan for Codex CLI

Version: 1.0  
Date: 12 August 2026  
Owner: Jao  
Primary roles: Data Engineer and Software Engineer  
Primary audience: recruiters, engineering managers, and senior engineers

## 1. Purpose

Build a polished portfolio named **Systems Atlas**. The site presents Jao as an engineer who works across the complete path from raw data and infrastructure to reliable software products.

The build follows small, gated phases. Codex works on one phase at a time. Jao reviews the result, verifies the acceptance criteria, requests corrections, and approves the phase before any later work starts.

The final site must feel distinctive while remaining fast, accessible, credible, and easy to scan.

## 2. Operating rules

1. Work on one phase only.
2. Start each phase from a clean Git state.
3. Read `AGENTS.md`, the approved product brief, the design system, and the current phase requirements before editing.
4. State the files expected to change before editing.
5. Do not invent projects, employers, metrics, dates, links, or technical results.
6. Mark missing content with a typed `TODO_CONTENT` record. Never hide missing information inside plausible prose.
7. Keep every phase independently runnable.
8. Run the required checks at the end of each phase.
9. Review the complete diff before asking for approval.
10. Do not commit, tag, deploy, install a production dependency, or begin the next phase without explicit approval.

### 2.1 Phase tracker

Update this table after every approved checkpoint.

| Phase | Name | Status | Approval date | Approved commit |
| --- | --- | --- | --- | --- |
| 0 | Discovery and content inventory | Not started |  |  |
| 1 | Repository and quality foundation | Not started |  |  |
| 2 | Visual direction and design system | Not started |  |  |
| 3 | Content model and assets | Not started |  |  |
| 4 | Static recruiter experience | Not started |  |  |
| 5 | Project case studies and Engineer view | Not started |  |  |
| 6 | Interaction and motion | Not started |  |  |
| 7 | Contact backend | Not started |  |  |
| 8 | Automated and manual quality | Not started |  |  |
| 9 | Performance, SEO, and discoverability | Not started |  |  |
| 10 | Security and release review | Not started |  |  |
| 11 | Preview deployment and production release | Not started |  |  |
| 12 | Recruiter validation and launch polish | Not started |  |  |

## 3. Product definition

### 3.1 Positioning

Primary statement:

> I build reliable data platforms and production software, from raw data to useful products.

Supporting evidence:

- DXC Technology experience.
- AI Sandbox designed and deployed on Azure.
- Data, backend, frontend, infrastructure, and observability experience.
- Research published in IEEE Xplore.
- Geospatial, workforce, machine learning, and AI evaluation projects.

### 3.2 Audience paths

#### Recruiter path

Goal: understand the profile and open the resume or contact link within 60 seconds.

Required content:

- Clear role and value proposition.
- Location and availability.
- Three or four selected projects.
- Short evidence based results.
- Experience, education, publication, resume, LinkedIn, GitHub, and email.

#### Engineering manager path

Goal: judge ownership, technical range, deployment experience, and communication quality within three minutes.

Required content:

- Problem and business context.
- Personal responsibility.
- Architecture.
- Main engineering decisions.
- Outcome and evidence.

#### Engineer path

Goal: inspect implementation depth.

Required content:

- Architecture diagrams.
- Data flows.
- Tradeoffs.
- Selected code or schema excerpts.
- Testing and deployment details.
- Repository, demo, report, or paper links.

### 3.3 Primary conversion actions

1. Open or download the resume.
2. Open a selected project.
3. Visit GitHub or LinkedIn.
4. Send a contact message or email.

### 3.4 Initial routes

- `/` for the recruiter focused homepage.
- `/projects` for the project index.
- `/projects/[slug]` for project case studies.
- `/about` for the longer professional story.
- `/research` for the IEEE paper and future publications.
- `/api/contact` for the optional contact endpoint.
- `/sitemap.xml`, `/robots.txt`, and generated social images.

### 3.5 Initial project order

1. AI Sandbox, flagship software and AI platform.
2. A dedicated data engineering project, once a complete repository and evidence exist.
3. ActiveMap Casablanca, geospatial data and application engineering.
4. Workforce management platform, backend, frontend, SQL, and operational analytics.

Place the post quantum cryptography paper in the research section.

If the dedicated data engineering project is incomplete, omit it from the featured list. Do not present unfinished work as completed work.

## 4. Scope boundaries

### 4.1 Included in the first release

- English content.
- Dark control room visual direction.
- Responsive homepage and project pages.
- Recruiter and engineer viewing modes.
- Accessible SVG system map.
- Deliberate Motion animations.
- Command palette.
- Typed local content.
- Resume download.
- Contact fallback through direct email.
- Optional server contact endpoint behind configuration.
- SEO, social metadata, structured data, sitemap, and robots.
- Unit, integration, end to end, accessibility, and visual checks.
- Preview and production deployment.

### 4.2 Deferred until after launch

- WebGL or React Three Fiber hero.
- French translation.
- Blog or article CMS.
- Database backed analytics.
- Authentication.
- User accounts.
- Live GitHub activity fetched on every request.
- Separate FastAPI service.
- Admin dashboard.

These items add maintenance and failure points without strengthening the first recruiter experience.

## 5. Architecture decisions

### 5.1 Application architecture

- Next.js 16.3 App Router.
- React 19.2.
- TypeScript with strict checking.
- Server Components for content and route shells.
- Small Client Components for interaction and animation.
- Local typed content, stored in TypeScript and MDX.
- Route Handler for the optional contact endpoint.
- No database in the first release.
- Static generation for public content wherever supported.

Next.js 16.3 includes version matched agent documentation and writes an agent guidance pointer during development. Preserve its managed `AGENTS.md` section. Add project rules outside the managed markers.

### 5.2 Frontend stack

- Tailwind CSS 4.3 for layout and tokens.
- shadcn/ui with Base UI primitives for dialogs, tooltips, command palette, and form controls.
- Motion 13 for layout transitions, scroll progress, SVG animation, and interaction feedback.
- `LazyMotion` for a smaller initial animation bundle.
- `MotionConfig reducedMotion="user"` at the application boundary.
- Native CSS Grid, Flexbox, container queries, and logical properties.
- `next/font` for local or hosted font optimization.
- `next/image` for raster images.

### 5.3 Testing stack

- Vitest for pure utilities, schemas, and backend behavior.
- React Testing Library for behavior requiring rendered components.
- Playwright for end to end, keyboard, responsive, visual, and browser checks.
- Axe integration for automated accessibility checks.
- Lighthouse CI or a repeatable local Lighthouse script for performance budgets.

### 5.4 Backend scope

The portfolio does not need a separate backend service.

The optional contact endpoint uses a Next.js Route Handler with:

- Zod validation.
- Payload size limits.
- Honeypot field.
- Origin validation.
- Rate limit adapter.
- Email delivery adapter.
- Generic client responses.
- Structured logs without message bodies or email addresses.
- Direct email fallback if the provider is unavailable.

Choose the delivery and rate limit providers during Phase 7. Keep the endpoint disabled in production until its environment values and abuse controls are verified.

## 6. Design direction

### 6.1 Concept

The site looks like a calm engineering control room mixed with an editorial case study.

A luminous event enters the hero as raw data. Scroll progress moves it through ingestion, transformation, storage, APIs, observability, and interface nodes. Each stage connects to a project or skill area.

The interface must avoid a fake hacker terminal, generic gradient cards, excessive glass effects, and endless particles.

### 6.2 Design principles

1. Evidence before decoration.
2. One memorable motion sequence instead of many unrelated effects.
3. Large editorial typography paired with compact technical metadata.
4. Consistent grid, spacing, and semantic color tokens.
5. Real project content in every mockup.
6. Core information available without animation.
7. Every interactive element works with keyboard and touch.
8. Reduced motion remains a complete experience.

### 6.3 Starting visual tokens

These tokens are a starting point. Phase 2 must present alternatives before final approval.

- Background: `#070A0F`.
- Elevated surface: `#0E131B`.
- Primary text: `#F4F1E8`.
- Secondary text: `#A8B0BD`.
- Data blue: `#5DE4FF`.
- Signal green: `#B7FF5A`.
- Alert coral: `#FF6B5E`.
- Border: translucent neutral with sufficient contrast.
- Display type candidate: Sora or another approved geometric family.
- Body type candidate: IBM Plex Sans.
- Technical type candidate: IBM Plex Mono.

Store final colors as semantic OKLCH variables. Components must use semantic tokens rather than direct palette values.

### 6.4 Motion rules

- Animate only `transform`, `opacity`, SVG path properties, and approved color transitions.
- Never use `transition: all`.
- No scroll hijacking.
- No required information hidden behind hover.
- No parallax for reduced motion users.
- No automatic video for reduced motion users.
- Interaction feedback target: 120 to 220 milliseconds.
- Shared layout transition target: 220 to 360 milliseconds.
- Hero sequence target: under 1.5 seconds after content is visible.
- Ambient animation pauses outside the viewport.
- A route remains usable before animation code loads.

## 7. Skills for Codex CLI

### 7.1 Skill strategy

Install skills inside the repository, not globally. Project scope keeps unrelated Codex sessions clean and lets every installed instruction remain reviewable with the code.

Use copied skills instead of symlinks for this project. Review and commit the copied content after approval. Record each source, selected skill, date, license, and reviewed revision in `docs/skill-inventory.md`.

Before installation:

1. Run the source listing command.
2. Read the selected `SKILL.md`.
3. Inspect bundled scripts and shell directives.
4. Check the license.
5. Reject broad skills with overlapping or contradictory rules.
6. Install only the named skills.

### 7.2 Recommended skills

| Area | Skill | Purpose | Use during |
| --- | --- | --- | --- |
| Visual design | `frontend-design` | Establish a distinctive visual direction and avoid generic generated UI | Phase 2 |
| React performance | `vercel-react-best-practices` | Apply current React and Next.js performance rules | Phases 1, 4, 5, 6, 9 |
| Component architecture | `vercel-composition-patterns` | Build flexible components without boolean prop growth | Phases 2, 4, 5 |
| UI audit | `web-design-guidelines` | Audit interaction, typography, accessibility, responsive behavior, and UX | Phases 4, 6, 9 |
| Component primitives | `shadcn` | Use current shadcn/ui APIs and semantic component patterns | Phases 2, 4, 6, 7 |
| API design | `api-and-interface-design` | Define the contact contract and internal boundaries | Phase 7 |
| Security | `security-and-hardening` | Threat model and harden external input and third party integration | Phases 7 and 10 |
| Incremental work | `incremental-implementation` | Keep each change small, runnable, and reviewable | Every implementation phase |
| Review | `code-review-and-quality` | Review correctness, readability, architecture, security, and performance | End of every phase |
| Browser testing | `playwright-best-practices` | Produce stable end to end, visual, accessibility, and responsive tests | Phase 8 |

### 7.3 Installation commands

Run these commands from the portfolio repository root.

First inspect each source:

```bash
npx skills add https://github.com/anthropics/skills --list
npx skills add https://github.com/vercel-labs/agent-skills --list
npx skills add https://github.com/shadcn-ui/ui --list
npx skills add https://github.com/addyosmani/agent-skills --list
npx skills add https://github.com/currents-dev/playwright-best-practices-skill --list
```

Install the reviewed selections for Codex:

```bash
npx skills add https://github.com/anthropics/skills \
  --skill frontend-design \
  --agent codex \
  --copy

npx skills add https://github.com/vercel-labs/agent-skills \
  --skill vercel-react-best-practices \
  --skill vercel-composition-patterns \
  --skill web-design-guidelines \
  --agent codex \
  --copy

npx skills add https://github.com/shadcn-ui/ui \
  --skill shadcn \
  --agent codex \
  --copy

npx skills add https://github.com/addyosmani/agent-skills \
  --skill api-and-interface-design \
  --skill security-and-hardening \
  --skill incremental-implementation \
  --skill code-review-and-quality \
  --agent codex \
  --copy

npx skills add https://github.com/currents-dev/playwright-best-practices-skill \
  --skill playwright-best-practices \
  --agent codex \
  --copy
```

Verify the result:

```bash
npx skills list
find .agents/skills -maxdepth 2 -name SKILL.md -print
```

Inside Codex CLI, run `/skills` and verify the same names.

### 7.4 Important skill decisions

- Do not install `next-best-practices`. Next.js 16.3 now supplies version matched guidance through bundled documentation and its managed `AGENTS.md` section.
- Do not install complete repositories with every skill.
- Do not install several visual taste skills. `frontend-design` provides direction, while `web-design-guidelines` performs review. Their jobs stay separate.
- `web-design-guidelines` retrieves current review rules from its source. Use it only when network access is explicitly available. If network access is unavailable, save a reviewed snapshot under `docs/standards/` and record its source revision.
- The `shadcn` skill includes shell directives. Require approval before adding or updating components. Review generated file diffs.
- Skills guide work. Linters, tests, schemas, and CI enforce work.

### 7.5 Custom project skill

Create one repository skill named `portfolio-quality-gate` during Phase 1. It should review a finished phase without modifying files.

Required behavior:

1. Read `AGENTS.md`, `docs/product-brief.md`, `docs/design-system.md`, and the active phase section in this plan.
2. Inspect changed files and the diff.
3. Run the checks declared in `AGENTS.md`.
4. Verify content truth, accessibility, responsive behavior, motion policy, performance budget, and scope.
5. Return findings grouped as Blocker, Required, Optional, and Passed.
6. Never fix findings unless the user starts a separate correction task.

Create it through Codex with `$skill-creator`, then keep it under `.agents/skills/portfolio-quality-gate/`.

## 8. Repository structure

```text
portfolio/
├── .agents/
│   └── skills/
├── .github/
│   └── workflows/
├── docs/
│   ├── product-brief.md
│   ├── content-inventory.md
│   ├── architecture.md
│   ├── design-system.md
│   ├── decision-log.md
│   ├── skill-inventory.md
│   ├── phase-reports/
│   └── standards/
├── public/
│   ├── images/
│   ├── videos/
│   ├── papers/
│   └── resume.pdf
├── src/
│   ├── app/
│   │   ├── api/contact/route.ts
│   │   ├── projects/[slug]/page.tsx
│   │   ├── projects/page.tsx
│   │   ├── research/page.tsx
│   │   ├── about/page.tsx
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── robots.ts
│   │   ├── sitemap.ts
│   │   └── opengraph-image.tsx
│   ├── components/
│   │   ├── ui/
│   │   ├── layout/
│   │   ├── portfolio/
│   │   └── motion/
│   ├── content/
│   │   ├── projects/
│   │   ├── profile.ts
│   │   ├── research.ts
│   │   └── schema.ts
│   ├── lib/
│   │   ├── contact/
│   │   ├── metadata/
│   │   ├── validation/
│   │   └── utils/
│   └── styles/
├── tests/
│   ├── e2e/
│   ├── visual/
│   └── fixtures/
├── AGENTS.md
├── package.json
├── playwright.config.ts
├── vitest.config.ts
└── pnpm-lock.yaml
```

Keep route files thin. Place reusable view code in `src/components`. Keep business and validation logic outside React components.

## 9. Typed content model

Every project record must support:

```ts
type Project = {
  slug: string
  title: string
  shortTitle: string
  summary: string
  problem: string
  role: string
  responsibilities: string[]
  outcomes: string[]
  metrics: Array<{
    label: string
    value: string
    evidence?: string
  }>
  technologies: string[]
  capabilities: Array<
    | "data-engineering"
    | "backend"
    | "frontend"
    | "cloud"
    | "ai"
    | "research"
  >
  architecture: {
    nodes: ArchitectureNode[]
    edges: ArchitectureEdge[]
    description: string
  }
  decisions: Array<{
    title: string
    context: string
    choice: string
    tradeoff: string
  }>
  links: {
    repository?: string
    demo?: string
    report?: string
    paper?: string
  }
  media: MediaItem[]
  featured: boolean
  status: "production" | "completed" | "research" | "in-progress"
}
```

Validate every record during build. Featured projects must not contain `TODO_CONTENT`, broken media paths, missing role descriptions, or unverified metrics.

## 10. Root AGENTS.md template

Let `create-next-app` or `next dev` write the managed Next.js section first. Add the following content outside its managed markers.

```markdown
# Systems Atlas project guidance

## Mission

Build a fast, accessible portfolio for a Data Engineer and Software Engineer.
The default visitor path serves recruiters. Technical depth remains available
through project case studies and Engineer view.

## Sources of truth

Read these before implementation:

1. `docs/product-brief.md`
2. `docs/design-system.md`
3. `docs/content-inventory.md`
4. `portfolio-codex-implementation-plan.md`

Never invent content or metrics. Use `TODO_CONTENT` for missing information.

## Work protocol

1. Work on the requested phase only.
2. Inspect the repository before editing.
3. State the expected files and checks.
4. Keep changes small and focused.
5. Ask before adding production dependencies.
6. Do not commit, tag, deploy, or start another phase without approval.
7. Preserve unrelated user changes.

## Stack

- Next.js App Router and React.
- TypeScript strict mode.
- Tailwind CSS with semantic tokens.
- shadcn/ui Base UI primitives.
- Motion through `motion/react`.
- Vitest and Playwright.
- pnpm with a committed lockfile.

Read version matched Next.js docs from the location named in the managed
Next.js agent section before changing framework behavior.

## Architecture

- Prefer Server Components.
- Add `"use client"` only at the smallest interactive boundary.
- Keep route files thin.
- Keep validation and service logic outside components.
- Avoid barrel exports in performance sensitive paths.
- Avoid duplicate abstractions and speculative generalization.
- Do not introduce a database or separate backend without an approved ADR.

## UI and design

- Use approved tokens from `docs/design-system.md`.
- Use semantic HTML before ARIA.
- Preserve visible focus states.
- Support keyboard, touch, mobile, laptop, and wide screens.
- Avoid generic dashboard styling, fake terminals, excessive gradients,
  excessive glass effects, and decorative metrics.
- Reuse approved primitives before creating another component.
- Do not use raw color utilities inside reusable components.

## Motion

- Motion must communicate hierarchy, state, or data flow.
- Respect reduced motion at the application boundary.
- Never use scroll hijacking or `transition: all`.
- Keep core content available before animation loads.
- Pause ambient work outside the viewport.

## Content

- Show problem, personal role, architecture, decisions, evidence, and outcome.
- Do not use skill percentage bars.
- Do not claim confidential information.
- Do not expose secrets, private repository data, or private company artifacts.

## Required checks

Run relevant commands, then run the complete gate before phase completion:

1. `pnpm format:check`
2. `pnpm lint`
3. `pnpm typecheck`
4. `pnpm test`
5. `pnpm test:e2e`
6. `pnpm build`

Report any skipped command and the exact reason.

## Definition of done

- Requested behavior matches the approved phase.
- Tests cover new behavior.
- No TypeScript, lint, build, browser console, or hydration errors.
- Keyboard and reduced motion paths work.
- Responsive screenshots were inspected.
- Diff was reviewed for security, performance, and unrelated changes.
- Phase report exists under `docs/phase-reports/`.
```

Keep the root file short. Move large standards and examples into `docs/standards/`.

## 11. Git and review workflow

Use one branch per phase:

```text
phase/00-discovery
phase/01-foundation
phase/02-design-system
phase/03-content-model
phase/04-homepage
phase/05-case-studies
phase/06-motion
phase/07-contact-backend
phase/08-quality
phase/09-performance-seo
phase/10-security
phase/11-deployment
phase/12-recruiter-validation
```

At the start of each phase:

```bash
git status --short
git switch -c phase/NN-name
```

At the review gate:

```bash
git status --short
git diff --stat
git diff
```

Then run `/review` in Codex CLI against uncommitted changes. Address approved findings in a separate Codex request. Commit only after the human review passes.

Recommended approved checkpoint:

```bash
git add <reviewed-files>
git commit -m "phase NN: concise outcome"
git tag phase-NN-approved
```

## 12. Master prompt for every Codex phase

Copy this prompt at the start of every phase and replace the placeholders.

```text
Implement Phase <NUMBER>: <NAME> from portfolio-codex-implementation-plan.md.

Read AGENTS.md, docs/product-brief.md, docs/design-system.md if it exists,
docs/content-inventory.md, and the complete current phase before editing.
Read the version matched Next.js documentation named by AGENTS.md for every
framework API involved.

Work only on this phase. Do not begin later phases. Do not invent content.
Before editing, inspect the repository and report:
1. Current state.
2. Files expected to change.
3. Commands expected to run.
4. Blocking questions only.

Invoke these skills explicitly: <SKILL LIST>.

Implement in small verified increments. Ask before adding a production
dependency. After implementation, run the phase checks and the complete
required gate from AGENTS.md. Inspect responsive behavior and browser errors
when the phase affects UI.

Create docs/phase-reports/phase-<NUMBER>.md with delivered scope, changed files,
commands and results, manual checks, known limitations, and unresolved content.
Review the final diff. Stop and wait for my approval. Do not commit or deploy.
```

## 13. Phase 0: discovery and content inventory

### Objective

Turn the concept into approved product requirements before writing application code.

### Codex skills

- No visual implementation skill yet.
- `code-review-and-quality` for the final document review.

### Tasks

1. Confirm target roles, audience order, location, availability, and preferred contact path.
2. Inventory every candidate project.
3. Record exact personal contribution for each project.
4. Record verified metrics and their evidence.
5. Collect public repository, demo, report, and paper links.
6. Collect screenshots, diagrams, short videos, logos, resume, and headshot if used.
7. Mark confidential material and information excluded from publication.
8. Choose three or four featured projects.
9. Record the missing dedicated data engineering case study as a content gap if needed.
10. Define recruiter, manager, and engineer success scenarios.
11. Create the initial decision log.

### Deliverables

- `docs/product-brief.md`.
- `docs/content-inventory.md`.
- `docs/decision-log.md`.
- `docs/architecture.md` with initial decisions.
- Project asset folder plan.

### Acceptance criteria

- Every featured claim has evidence or a visible pending marker.
- Every featured project has a problem, role, architecture, outcome, and links status.
- No application source files exist yet.
- Jao approves the project order, public content, and first release scope.

### Phase prompt

```text
Execute Phase 0 only. Interview me for missing facts in small groups. Produce the
five planning documents. Do not initialize Next.js and do not create UI code.
Never fill missing project details from assumptions. Finish with a content gap
report and stop for approval.
```

## 14. Phase 1: repository and quality foundation

### Objective

Create a reproducible, agent ready project with no portfolio UI beyond the framework shell.

### Codex skills

- `incremental-implementation`.
- `vercel-react-best-practices`.
- `code-review-and-quality`.

### Tasks

1. Verify Node Active LTS and pnpm.
2. Initialize a Git repository if needed.
3. Create the Next.js application with App Router, `src/`, TypeScript, Tailwind, ESLint, and the `@/*` alias.
4. Pin the package manager in `package.json`.
5. Run development once so Next.js creates or refreshes its managed agent rules.
6. Add the project guidance outside the managed Next.js markers.
7. Install the reviewed project skills.
8. Create `docs/skill-inventory.md`.
9. Create `portfolio-quality-gate` through `$skill-creator`.
10. Add scripts for format check, lint, type check, unit tests, end to end tests, and complete validation.
11. Add Vitest and Playwright with one smoke test each.
12. Add environment example and ignore rules.
13. Add a basic CI workflow using frozen dependency installation.
14. Remove starter content while preserving a simple semantic page.

### Required package scripts

```json
{
  "format": "prettier --write .",
  "format:check": "prettier --check .",
  "lint": "eslint .",
  "typecheck": "tsc --noEmit",
  "test": "vitest run",
  "test:watch": "vitest",
  "test:e2e": "playwright test",
  "build": "next build",
  "check:fast": "pnpm format:check && pnpm lint && pnpm typecheck && pnpm test && pnpm build",
  "check": "pnpm check:fast && pnpm test:e2e"
}
```

### Acceptance criteria

- `pnpm install --frozen-lockfile` succeeds from a clean checkout.
- `pnpm check` succeeds.
- Playwright smoke test succeeds.
- Next.js managed agent section exists.
- `/skills` lists approved project skills.
- No design implementation exists yet.
- CI runs the same deterministic checks.

### Phase prompt

```text
Implement Phase 1 only. Use $incremental-implementation,
$vercel-react-best-practices, and $code-review-and-quality. Establish the
framework, agent guidance, project skills, test runners, and CI. Keep the page
semantic and visually neutral. Do not start the design system.
```

## 15. Phase 2: visual direction and design system

### Objective

Approve the visual system before building the homepage.

### Codex skills

- `frontend-design`.
- `vercel-composition-patterns`.
- `shadcn`.
- `incremental-implementation`.

### Tasks

1. Read real portfolio content before designing.
2. Produce three distinct visual direction proposals in `docs/design-directions.md`.
3. Each proposal must define typography, color, grid, surface treatment, icon style, diagram style, and motion tone.
4. Explain one purposeful aesthetic risk in each proposal.
5. Build a temporary development only `/design-lab` route.
6. Show real hero copy, project card, metric, button, tag, form control, architecture node, and focus states.
7. Show mobile and desktop compositions.
8. Let Jao select one direction or combine named parts.
9. Write the approved system into `docs/design-system.md`.
10. Implement semantic CSS variables, type scale, spacing, radii, shadows, borders, and motion tokens.
11. Build only foundational primitives.

### Initial primitive list

- `Container`.
- `Section`.
- `SectionHeading`.
- `Button`.
- `TextLink`.
- `Badge`.
- `Metric`.
- `ProjectCardShell`.
- `ArchitectureNode`.
- `SkipLink`.
- `FocusRing` behavior.

### Acceptance criteria

- Three materially different directions were reviewed.
- One direction has explicit approval.
- Text contrast meets WCAG 2.2 AA.
- All controls show keyboard focus.
- Tokens work at 375, 768, 1440, and 1920 pixel widths.
- Components use semantic tokens.
- No homepage section or advanced motion exists yet.

### Phase prompt

```text
Implement Phase 2 only. Use $frontend-design, $vercel-composition-patterns,
$shadcn, and $incremental-implementation. First produce three directions using
real content. Build a temporary design lab only after the written directions
exist. Stop for my selection before finalizing tokens. Do not build the
homepage.
```

## 16. Phase 3: content model and assets

### Objective

Create validated, reusable content separate from presentation.

### Codex skills

- `incremental-implementation`.
- `code-review-and-quality`.

### Tasks

1. Implement Zod schemas for profile, project, research, links, metrics, architecture, and media.
2. Create typed records for approved projects.
3. Add `TODO_CONTENT` handling for incomplete nonfeatured content.
4. Reject `TODO_CONTENT` inside featured records during build.
5. Optimize supplied images and poster frames without modifying source masters.
6. Add resume PDF and verify its public link.
7. Add content tests for unique slugs, valid URLs, media paths, required evidence, and project ordering.
8. Define skill to project relationships for the evidence graph.
9. Keep all presentation code outside content files.

### Acceptance criteria

- Content validation runs in `pnpm test` and build.
- Featured projects contain no missing required data.
- No duplicate slugs or broken local media paths exist.
- No confidential material appears in public assets.
- Jao approves every public claim.

### Phase prompt

```text
Implement Phase 3 only. Use $incremental-implementation and
$code-review-and-quality. Build validated content and asset pipelines. Do not
design new sections. Fail loudly for incomplete featured content. Stop after
the content tests and public claim review.
```

## 17. Phase 4: static recruiter experience

### Objective

Build the complete homepage without advanced animation.

### Codex skills

- `vercel-react-best-practices`.
- `vercel-composition-patterns`.
- `shadcn`.
- `incremental-implementation`.
- `web-design-guidelines` for the final audit.

### Homepage order

1. Skip link and navigation.
2. Hero and primary actions.
3. Credibility strip.
4. Selected project cards.
5. Evidence based skills graph.
6. Experience and education timeline.
7. Research highlight.
8. Short about section.
9. Contact actions.
10. Footer.

### Tasks

1. Build Server Component section shells.
2. Add a sticky but compact navigation.
3. Keep resume and contact actions visible.
4. Build accessible project cards with real links.
5. Build the skills graph as semantic lists first.
6. Build experience and research summaries.
7. Add empty and error safe behavior for optional content.
8. Verify the page without JavaScript.
9. Audit mobile, keyboard, heading order, link purpose, and contrast.

### Acceptance criteria

- A first time visitor identifies role, location, and primary evidence within eight seconds.
- Resume, projects, GitHub, LinkedIn, and contact remain easy to find.
- Core content works without client JavaScript.
- No horizontal overflow occurs at target widths.
- Keyboard order matches visual order.
- No console, hydration, TypeScript, lint, test, or build errors.
- Advanced motion remains absent.

### Phase prompt

```text
Implement Phase 4 only. Use $vercel-react-best-practices,
$vercel-composition-patterns, $shadcn, and $incremental-implementation. Build
the full static recruiter experience. After implementation, invoke
$web-design-guidelines as a read only audit. Fix only findings I approve. Do
not add scroll animation or the command palette.
```

## 18. Phase 5: project case studies and Engineer view

### Objective

Give hiring managers and engineers enough evidence to judge technical depth.

### Codex skills

- `vercel-react-best-practices`.
- `vercel-composition-patterns`.
- `incremental-implementation`.

### Case study structure

1. Project title and one line summary.
2. Context and problem.
3. Personal responsibility.
4. Outcomes and verified metrics.
5. Architecture diagram with text alternative.
6. Data flow or request flow.
7. Main engineering decisions and tradeoffs.
8. Testing, deployment, and observability.
9. Media gallery or short muted demo.
10. Repository, demo, report, or paper links.
11. Related project navigation.

### Recruiter and Engineer modes

- Recruiter mode is the default.
- Engineer mode reveals architecture, decisions, data flow, and testing detail.
- Store the chosen mode in a shareable URL parameter.
- Preserve content state when switching.
- Both modes remain indexable through the complete server rendered page content or equivalent accessible structure.

### Tasks

1. Build project index and dynamic project pages.
2. Generate static parameters from validated content.
3. Add accessible SVG architecture diagrams.
4. Add text alternatives beside diagrams.
5. Add the view mode control.
6. Use React `<Activity>` only after checking version matched docs and compatibility.
7. Add route level not found handling.
8. Add project page tests.

### Acceptance criteria

- Every featured project follows the approved case study structure.
- Architecture diagrams work with keyboard and screen reader alternatives.
- View mode survives refresh and shared URLs.
- Project routes build statically where intended.
- No project page depends on a live external API.
- A hiring manager understands Jao's personal contribution without guessing.

### Phase prompt

```text
Implement Phase 5 only. Use $vercel-react-best-practices,
$vercel-composition-patterns, and $incremental-implementation. Build the project
index, case studies, diagrams, and view modes from validated content. Read the
installed React and Next.js documentation before using Activity or route APIs.
Do not add advanced page transitions yet.
```

## 19. Phase 6: interaction and motion

### Objective

Add one coherent motion language without hurting accessibility or performance.

### Codex skills

- `frontend-design` for consistency with the approved direction.
- `vercel-react-best-practices`.
- `shadcn`.
- `incremental-implementation`.
- `web-design-guidelines` for final audit.

### Features

1. Scroll linked SVG data pulse in the hero.
2. Node highlighting for data flow.
3. Shared layout project transitions where routing behavior supports them.
4. Subtle section entry transitions.
5. Command palette opened with `Ctrl K` and `Cmd K`.
6. Project and skill cross highlighting.
7. Reduced motion substitutes using opacity and immediate state changes.

### Implementation rules

- Prefer Motion only.
- Add GSAP only after a written ADR proves Motion is insufficient.
- Use `LazyMotion` and feature bundles.
- Isolate scroll state from React renders through Motion values.
- Do not animate layout properties such as width, height, top, or left.
- Use SVG for the system map.
- Keep command palette actions available through normal navigation.
- Pause ambient motion outside viewport.

### Acceptance criteria

- Reduced motion disables transforms, parallax, and automatic ambient movement.
- Core tasks remain available without the command palette.
- No focus loss occurs during transitions.
- No scroll hijacking occurs.
- No significant layout shift occurs.
- No long task above 200 milliseconds appears during normal homepage interaction on the agreed test device.
- Homepage performance remains inside the Phase 9 budget before final optimization.

### Phase prompt

```text
Implement Phase 6 only. Use $frontend-design,
$vercel-react-best-practices, $shadcn, and $incremental-implementation. Add the
approved motion system and command palette. Use Motion only unless an ADR is
approved. Test normal and reduced motion paths. Invoke $web-design-guidelines
as a read only audit at the end. Stop before backend work.
```

## 20. Phase 7: contact backend

### Objective

Add a secure, minimal contact flow with a reliable direct email fallback.

### Codex skills

- `api-and-interface-design`.
- `security-and-hardening`.
- `shadcn`.
- `incremental-implementation`.

### Contract

Request fields:

- Name, 2 to 80 characters.
- Email, valid format and maximum 254 characters.
- Company, optional and maximum 100 characters.
- Message, 20 to 3000 characters.
- Hidden honeypot.

Response rules:

- Return a generic success message after accepted delivery.
- Return a generic retry message after provider failure.
- Do not reveal provider internals.
- Do not log the message body or full email address.
- Apply body size, request rate, timeout, and origin limits.

### Tasks

1. Write the API contract and threat model before code.
2. Create a delivery interface and development fake.
3. Choose the production email provider with Jao.
4. Choose the production rate limit provider with Jao.
5. Implement Zod validation.
6. Add origin, content type, size, honeypot, newline injection, and timeout checks.
7. Add accessible form states and direct email fallback.
8. Add tests for valid, invalid, malicious, limited, and provider failure requests.
9. Add environment documentation without secret values.
10. Keep the production endpoint disabled until configuration passes.

### Acceptance criteria

- Threat model exists.
- No secret enters Git history, client bundles, or logs.
- Abuse cases have tests.
- Duplicate submissions are prevented in the UI.
- Failure leaves the typed message available for copying.
- Direct email remains visible.
- Production feature flag defaults to disabled until verified.

### Phase prompt

```text
Implement Phase 7 only. Use $api-and-interface-design,
$security-and-hardening, $shadcn, and $incremental-implementation. First write
the API contract and threat model. Stop for approval of the external providers
before adding either integration. Keep direct email as the permanent fallback.
Do not deploy.
```

## 21. Phase 8: automated and manual quality

### Objective

Build a stable test suite covering critical recruiter and engineering flows.

### Codex skills

- `playwright-best-practices`.
- `code-review-and-quality`.
- `incremental-implementation`.

### Unit and integration coverage

- Content schemas.
- Slug uniqueness.
- Project ordering.
- URL validation.
- View mode parsing.
- Contact validation.
- Contact security boundaries.
- Metadata helpers.

### End to end coverage

1. Homepage loads without console errors.
2. Skip link works.
3. Keyboard navigation reaches every primary action.
4. Resume opens.
5. Project card opens the correct case study.
6. Recruiter and Engineer mode switches and persists.
7. Command palette opens, closes, traps focus, and navigates.
8. Reduced motion path works.
9. Contact form success, validation, and failure paths work.
10. Unknown project returns the intended not found page.
11. Mobile navigation works.
12. External links use safe attributes.

### Browser matrix

- Chromium desktop.
- Firefox desktop.
- WebKit desktop.
- One narrow mobile emulation.
- One wide desktop viewport.

### Accessibility checks

- Axe on every public route.
- Manual heading and landmark review.
- Full keyboard pass.
- Focus visibility and order.
- Zoom to 200 percent.
- Screen reader spot check on homepage, one project, command palette, and contact form.
- Color independent status cues.

### Visual checks

- Baselines for homepage and one project at 375, 768, 1440, and 1920 widths.
- Normal and reduced motion screenshots.
- Long content fixture.
- Missing optional content fixture.

### Acceptance criteria

- Tests are deterministic and contain no arbitrary sleeps.
- Browser console errors fail tests.
- Automated accessibility checks have no serious or critical findings.
- Manual WCAG 2.2 AA checklist is complete.
- Visual changes require reviewed baseline updates.

### Phase prompt

```text
Implement Phase 8 only. Use $playwright-best-practices,
$incremental-implementation, and $code-review-and-quality. Add the smallest
test suite covering every listed risk. Use role and label based locators. Never
use arbitrary sleep. Produce a manual accessibility checklist and stop after
the full cross browser report.
```

## 22. Phase 9: performance, SEO, and discoverability

### Objective

Meet measurable speed and search quality standards before launch.

### Codex skills

- `vercel-react-best-practices`.
- `web-design-guidelines`.
- `code-review-and-quality`.

### Performance budgets

- LCP at or below 2.5 seconds at the 75th percentile target.
- INP at or below 200 milliseconds at the 75th percentile target.
- CLS at or below 0.1.
- Mobile Lighthouse performance at least 90 on repeated local production runs.
- Accessibility 100 in automated Lighthouse runs.
- SEO 100 in automated Lighthouse runs.
- Initial homepage JavaScript target at or below 180 KB compressed.
- No unapproved third party script in the critical path.
- No raster hero image larger than required for its rendered size.

### Tasks

1. Measure production output before optimizing.
2. Record route bundle sizes.
3. Remove duplicate and unused dependencies.
4. Lazy load noncritical motion and media.
5. Add image dimensions, responsive sizes, poster frames, and modern formats.
6. Add route metadata and canonical URLs.
7. Add Open Graph and social images.
8. Add sitemap and robots.
9. Add structured data for Person, CreativeWork, and ScholarlyArticle where accurate.
10. Verify titles, descriptions, heading hierarchy, and link text.
11. Verify every public route without client JavaScript.
12. Record measurements in `docs/phase-reports/phase-09.md`.

### Acceptance criteria

- Performance budgets pass on three production runs or variance is explained and approved.
- All public routes have unique titles and descriptions.
- Social cards render correctly.
- Sitemap contains only canonical public routes.
- Structured data passes validation.
- No page depends on live GitHub data for meaningful content.

### Phase prompt

```text
Implement Phase 9 only. Use $vercel-react-best-practices and
$code-review-and-quality. Measure before changing code. Optimize the largest
verified costs first. Add metadata, social images, sitemap, robots, and valid
structured data. Invoke $web-design-guidelines as a read only audit. Report all
before and after measurements.
```

## 23. Phase 10: security and release review

### Objective

Perform a final threat, dependency, secret, header, and code review.

### Codex skills

- `security-and-hardening`.
- `code-review-and-quality`.

### Tasks

1. Update the threat model for the final architecture.
2. Review all trust boundaries and external links.
3. Review security headers and Content Security Policy.
4. Review contact abuse controls.
5. Review environment variable exposure.
6. Search tracked files and history for secret patterns.
7. Run the package manager audit against the lockfile.
8. Review every direct dependency for purpose, license, maintenance, and bundle impact.
9. Remove unused packages.
10. Review user supplied and MDX content for unsafe rendering.
11. Verify generic error handling.
12. Run the complete quality gate.

### Acceptance criteria

- No known critical or high severity production dependency issue remains without a written decision.
- No secret exists in tracked files or client output.
- Contact controls pass abuse tests.
- Security headers exist in the deployed production response plan.
- Every direct dependency has a clear use.
- Final review contains no Blocker or Required finding.

### Phase prompt

```text
Execute Phase 10 as a review first. Use $security-and-hardening and
$code-review-and-quality. Do not edit during the first pass. Return prioritized
findings with evidence. After I approve specific fixes, implement them in a
separate request with regression tests. Do not deploy.
```

## 24. Phase 11: preview deployment and production release

### Objective

Deploy a verified preview, complete post deployment checks, then release production.

### Tasks

1. Choose the hosting project and production region.
2. Configure environment values through the host, never through Git.
3. Deploy a preview from the approved commit.
4. Run Playwright smoke tests against the preview.
5. Run Lighthouse against the preview.
6. Check headers, redirects, canonical URLs, social cards, sitemap, robots, resume, and contact behavior.
7. Test from mobile data or a throttled network.
8. Review logs for errors without exposing personal data.
9. Connect the custom domain.
10. Verify HTTPS and redirects.
11. Record the previous deploy identifier and rollback procedure.
12. Release production only after written approval.

### Acceptance criteria

- Preview passes all automated and manual checks.
- Production configuration contains no development keys.
- Contact endpoint is enabled only after production abuse checks pass.
- Domain, HTTPS, canonical URLs, sitemap, social cards, and resume work.
- Rollback path is documented and tested through a safe preview exercise.

### Phase prompt

```text
Implement Phase 11 only. First produce a deployment checklist and list every
required environment variable without values. Deploy preview only after my
approval. Run the complete remote verification against preview. Stop again
before production. Deploy production only after a second explicit approval.
```

## 25. Phase 12: recruiter validation and launch polish

### Objective

Verify the site communicates the intended profile to real people.

### Tests

#### Eight second test

Show the homepage for eight seconds, then ask:

1. What role is this person targeting?
2. What kind of systems does he build?
3. What evidence do you remember?
4. What would you click next?

#### Sixty second recruiter test

Ask a recruiter to find:

1. Location and availability.
2. Resume.
3. Strongest project.
4. Main technical skills.
5. Contact path.

#### Engineering manager test

Ask an engineer to explain:

1. Jao's contribution to AI Sandbox.
2. One architecture decision.
3. One measurable result.
4. Evidence of production and data engineering experience.

### Tasks

1. Run the tests with at least three people from different roles.
2. Record confusion and missed information without defending the design.
3. Rank findings by impact on hiring conversion.
4. Fix only high impact issues before launch.
5. Rerun the same tests after changes.
6. Freeze Version 1 scope.

### Acceptance criteria

- Most testers identify both target roles.
- Every tester finds the resume and contact path quickly.
- Engineering testers identify personal ownership without assistance.
- No high impact confusion remains.
- Final launch checklist passes.

### Phase prompt

```text
Use the feedback in docs/recruiter-validation.md. First group findings by
frequency and hiring impact. Propose the smallest fixes. Do not implement until
I approve the list. After fixes, run regression checks and report whether the
same acceptance tests now pass.
```

## 26. Final launch gate

The site is ready only when every item below passes.

### Product

- Role and value proposition are clear.
- Featured projects contain evidence.
- Personal contribution is explicit.
- Resume and contact actions work.
- No unfinished content is presented as finished.

### Design

- Approved visual system is consistent.
- Mobile, tablet, laptop, and wide layouts work.
- No generic template section remains.
- Motion supports meaning and remains restrained.
- Reduced motion is complete.

### Engineering

- Type checking, lint, tests, build, and browser tests pass.
- No console or hydration error exists.
- Server and Client Component boundaries are intentional.
- No unnecessary production dependency exists.
- Repository contains accurate setup and verification commands.

### Accessibility

- WCAG 2.2 AA checklist passes.
- Keyboard path passes.
- Visible focus passes.
- Screen reader spot checks pass.
- Zoom and reflow pass.
- Automated checks have no serious or critical issue.

### Performance

- LCP, INP, and CLS targets pass.
- Lighthouse budgets pass.
- Images and fonts are optimized.
- Noncritical animation loads late.
- Third party scripts do not block rendering.

### Security

- Threat model is current.
- No secret or private artifact is published.
- Contact endpoint is validated and limited.
- Headers and CSP are verified in production.
- Dependency review passes.

### SEO and reliability

- Unique metadata exists.
- Canonical URLs are correct.
- Sitemap and robots are correct.
- Social cards work.
- Structured data validates.
- Broken link scan passes.
- Rollback procedure exists.

## 27. Phase report template

Create one report for every phase.

```markdown
# Phase NN report

## Approved scope

## Delivered

## Files changed

## Dependencies changed

## Commands run

| Command | Result |
| --- | --- |

## Automated checks

## Manual checks

## Screenshots reviewed

## Performance impact

## Accessibility impact

## Security impact

## Missing content

## Known limitations

## Diff review findings

## Approval status

Pending human review.
```

## 28. Correction prompt

Use this after reviewing a phase.

```text
Correct only these approved Phase <NUMBER> findings:

1. <finding>
2. <finding>

Read AGENTS.md and the Phase <NUMBER> report first. Preserve every approved
part of the phase. Do not redesign unrelated areas, add dependencies, or begin
the next phase. Add or update regression tests for behavioral fixes. Run the
same phase gate, update the report, review the diff, and stop for approval.
```

## 29. Review prompt

Use this before approving a phase.

```text
Review the uncommitted Phase <NUMBER> changes without modifying files.

Use $portfolio-quality-gate and $code-review-and-quality. Also use the domain
skill relevant to this phase. Compare the diff against AGENTS.md, the approved
brief, the design system, and the phase acceptance criteria.

Report:
1. Blockers.
2. Required corrections.
3. Optional improvements.
4. Passed criteria.
5. Commands rerun and their results.
6. Any unrelated change.

Do not fix anything and do not review future phase scope.
```

## 30. Research basis

The following primary sources informed this plan:

- [OpenAI, Build skills](https://developers.openai.com/codex/build-skills)
- [OpenAI, AGENTS.md guidance](https://developers.openai.com/codex/agent-configuration/agents-md)
- [OpenAI, Codex best practices](https://developers.openai.com/codex/learn/best-practices)
- [OpenAI, Codex CLI](https://developers.openai.com/codex/cli)
- [Next.js, AI coding agents](https://nextjs.org/docs/app/guides/ai-agents)
- [Next.js 16.3](https://nextjs.org/blog/next-16-3)
- [React versions](https://react.dev/versions)
- [Motion for React](https://motion.dev/docs/react)
- [Motion accessibility](https://motion.dev/docs/react-accessibility)
- [Tailwind CSS 4.3](https://tailwindcss.com/blog/tailwindcss-v4-3)
- [shadcn/ui components](https://ui.shadcn.com/docs/components)
- [Vercel React best practices skill](https://github.com/vercel-labs/agent-skills/blob/main/skills/react-best-practices/SKILL.md)
- [Vercel Web Interface Guidelines](https://github.com/vercel-labs/web-interface-guidelines)
- [Anthropic frontend design skill](https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md)
- [shadcn skill](https://github.com/shadcn-ui/ui/blob/main/skills/shadcn/SKILL.md)
- [Playwright best practices skill](https://github.com/currents-dev/playwright-best-practices-skill)
- [Addy Osmani agent skills](https://github.com/addyosmani/agent-skills)
- [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [Google Web Vitals](https://web.dev/articles/vitals)
- [OWASP Top 10 2025](https://owasp.org/Top10/2025/)
- [Playwright best practices](https://playwright.dev/docs/best-practices)
- [Playwright accessibility testing](https://playwright.dev/docs/accessibility-testing)
