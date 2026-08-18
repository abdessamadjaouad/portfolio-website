# Systems Atlas initial architecture

Status: Proposed Phase 0 architecture; no application has been initialized.

## Objective

Define the smallest architecture that can deliver a fast, accessible portfolio
without weakening content truth or the public/private boundary. Framework setup
and exact installed versions belong to Phase 1.

## System context

```text
Private resume inputs ── human review ──> typed local content
                                              │
Approved public assets ─ human review ────────┤
                                              ▼
                                    static portfolio output
                                              │
                     ┌────────────────────────┼──────────────────────┐
                     ▼                        ▼                      ▼
                  browser              resume downloads       external links
                                                               email/WhatsApp
                                                               LinkedIn/GitHub
                                                               IEEE Xplore
```

Private inputs never flow directly into the public output. A fact or asset must
cross an explicit human-review boundary first.

## Version 1 runtime boundary

Version 1 is a static public site. It has:

- One recruiter-first homepage.
- Server-rendered content sourced from local typed modules.
- Static, reviewed public assets.
- Direct outbound links for contact and supporting evidence.
- Metadata, sitemap, robots, structured data, and social imagery added only in
  their named later phases.

Version 1 has no application API, contact form, server-side data store, CMS,
authentication, account, analytics, tracking, or runtime GitHub request.

## Proposed public surface

| Surface | Purpose | Phase 0 status |
| --- | --- | --- |
| `/` | Recruiter-first homepage and all required public content | Approved product boundary; implementation deferred |
| `/resumes/abdessamad-jaouad-data-engineer.pdf` | Reviewed English Data Engineer resume | Target approved; PDF pending |
| `/resumes/abdessamad-jaouad-software-engineer.pdf` | Reviewed English Software Engineer resume | Target approved; PDF pending |
| `/sitemap.xml` | Canonical public route discovery | Later SEO phase |
| `/robots.txt` | Crawler guidance | Later SEO phase |
| Social image output | Link-preview evidence and identity | Later SEO phase |

Employer case-study routes are explicitly absent. Personal-project routes are
not part of this initial surface and require later approval of complete public
evidence before they can be added.

## Application architecture constraints for later phases

- Scaffold the latest stable Next.js App Router release available in Phase 1.
- Use React and TypeScript strict mode.
- Prefer Server Components and add client boundaries only for the smallest
  interactive behavior.
- Keep route files thin and presentation components focused.
- Keep facts in typed local content modules, outside JSX where practical.
- Validate content at build time before it can reach a featured surface.
- Use semantic HTML and CSS before adding a component abstraction.
- Use Tailwind CSS through semantic design tokens after design approval.
- Use npm and commit `package-lock.json` only in Phase 1.
- Avoid experimental framework APIs unless an active phase names one and the
  user approves it.

These constraints do not select exact package versions in Phase 0.

## Content boundary

The future content registry should have one canonical record for each fact and
expose focused views to presentation code.

| Domain | Minimum responsibility |
| --- | --- |
| Profile | Roles, location, availability, work arrangements, contact destinations |
| Experience | Official title, internship type, dates, location, contributions, evidence |
| Project | Category, public depth, problem, role, architecture summary, outcome, metrics, links, media status |
| Research | Approved title/link and explicit citation completeness |
| Resume | Role, public filename, review status, publication eligibility |
| Education/certification/language | Resume-backed facts and optional verified links |
| Content gap | Stable `TODO_CONTENT_*` identifier, affected record, requirement, resolution state |

The registry must distinguish employer highlights from personal projects and
must reject unresolved required fields in featured content during the later
content-model phase. Phase 0 defines this boundary but creates no TypeScript
contract.

## Trust boundaries

### Private inputs

- All `.tex` resume sources.
- The French Data and AI resume.
- Employer artifacts, repositories, reports, screenshots, data, and workflows.
- Any unresolved shared-drive content.

These materials remain outside public assets and must not be imported by the
application build.

### Reviewed publication inputs

- Facts approved through the repository source hierarchy.
- Corrected and reviewed English resume PDFs.
- Approved personal-project media and external links.
- Sanitized recreated diagrams with no employer-specific implementation detail.

### External destinations

| Destination | Data sent by the portfolio | Constraint |
| --- | --- | --- |
| Email client | Address and user-authored message outside the site | Use direct `mailto:`; the site stores nothing |
| WhatsApp | Approved phone destination and user action | Use the approved `wa.me` URL |
| LinkedIn/GitHub | Browser navigation | Use approved profile URLs and safe external-link behavior |
| IEEE Xplore | Browser navigation | Use the approved paper URL only |
| Google Drive | None | Do not fetch or link until ownership and public approval are resolved |

## Accessibility and resilience architecture

- Required information exists in semantic server-rendered HTML.
- The page remains useful without JavaScript.
- Navigation, resume, project, and contact content cannot depend on hover,
  animation, tabs, or WebGL.
- Static DOM or SVG content is the baseline for any later visual enhancement.
- Reduced motion, WebGL failure, or constrained devices must preserve equivalent
  content.
- Layout must support narrow mobile, tablet, laptop, wide desktop, text reflow,
  and 320% CSS zoom.

## Performance architecture

- Keep nonessential interaction and visual code outside the initial content
  path.
- Do not introduce a runtime content service or live third-party data request.
- Load optional Motion or 3D code only in its approved gated phase.
- Use properly sized local media with dimensions and static fallbacks.
- Keep the initial homepage useful before any client bundle executes.

No performance measurement is possible in Phase 0 because no application or
runtime exists.

## Security and privacy architecture

- The public site collects and stores no visitor data in Version 1.
- No private resume source or employer artifact may enter `public/`.
- External URLs must come from the approved registry and be validated before
  rendering.
- Missing external evidence is omitted, not replaced by an invented or private
  destination.
- Public asset review must include ownership, confidentiality, metadata, and
  link checks.
- A later release review must verify headers, dependency risk, and public build
  contents.

## Initial risks and controls

| Risk | Current control |
| --- | --- |
| Conflicting email or job titles | Approved facts override private resume values |
| Employer confidentiality leak | Concise resume wording only; no deep employer routes or raw assets |
| Shared-link misattribution | Drive URL remains blocked pending ownership approval |
| Invented research metadata | Publish title/link only; keep `TODO_CONTENT_IEEE_CITATION` |
| Unverified metric amplification | Allow only the four approved results and record evidence limits |
| Missing resume publication assets | Keep `TODO_CONTENT_REVIEWED_ENGLISH_RESUME_PDFS` until full review |
| Client-side failure | Semantic server-rendered baseline with no required JavaScript |

## Deferred decisions

- Exact framework and package versions.
- Final content schema and validation library implementation.
- Typography, colors, layout tokens, and component primitives.
- Motion behavior.
- Any optional 3D enhancement.
- Personal-project deep routes.
- Hosting, domain, deployment region, and production headers.

Each deferred item belongs to a later named phase and is not prepared by Phase
0.
