# Systems Atlas design system

Status: Approved visual direction for Version 1. Signal Ledger was selected by
Jao on 2026-08-18 during the Phase 2 human selection gate.

## Design intent

Systems Atlas uses a calm engineering ledger: a dark control-room field,
editorial scale, compact evidence labels, visible structural rules, and a
single signal path from raw data to useful products. The system must read as a
professional portfolio, not a terminal, monitoring dashboard, or decorative
technology demo.

The governing priorities are:

1. Evidence before decoration.
2. Data Engineer evidence before Software Engineer evidence.
3. Recruiter scan speed before technical density.
4. Semantic structure before visual composition.
5. Static and reduced-motion completeness before enhancement.

## Selected direction

Signal Ledger is approved without importing visual parts from Field Notes or
Modular Current. Its purposeful asymmetry is retained: the main statement owns
the broad content field while compact facts align to one numbered evidence
rail. The rail stacks above content below tablet widths so it never competes
with reading order.

The two unselected directions remain documented in
`docs/design-directions.md` as review history. They are not token sources.

## Color system

Components use semantic variables only. Hex values below identify the reviewed
prototype; OKLCH values are canonical in `src/app/globals.css`.

| Semantic role   | Canonical token           | Prototype reference | Use                                          |
| --------------- | ------------------------- | ------------------- | -------------------------------------------- |
| Canvas          | `--color-canvas`          | `#071015`           | Page field and dark grounding surface        |
| Surface         | `--color-surface`         | `#0E1A20`           | Evidence panels and controls                 |
| Raised surface  | `--color-surface-raised`  | Derived             | Rarely elevated panel                        |
| Text            | `--color-text`            | `#F4F7F5`           | Headings and primary copy                    |
| Muted text      | `--color-text-muted`      | `#A9BAC0`           | Supporting copy and metadata                 |
| Data signal     | `--color-data-signal`     | `#57D9EF`           | Primary actions, links, and active data path |
| Verified signal | `--color-verified-signal` | `#B9F36A`           | Verified metrics and availability            |
| Structure       | `--color-structure`       | `#496D78`           | Rules, borders, and inactive connectors      |
| Focus           | `--color-focus`           | Data signal         | Keyboard focus outline                       |

Reviewed contrast ratios:

| Combination                  |   Ratio |
| ---------------------------- | ------: |
| Primary text on canvas       | 17.80:1 |
| Muted text on canvas         |  9.57:1 |
| Data signal on canvas        | 11.50:1 |
| Verified signal on canvas    | 14.71:1 |
| Primary text on surface      | 16.40:1 |
| Structural border on canvas  |  3.42:1 |
| Structural border on surface |  3.15:1 |

Text and essential control boundaries meet WCAG 2.2 AA. Data and verified
signals always have an accompanying label, shape, or state; color is never the
only carrier of meaning.

## Typography

The approved prototype used local system fallbacks, so Version 1 starts with
zero font-network requests:

- Display: Arial, Helvetica, then system sans.
- Body: Arial, Helvetica, then system sans.
- Technical: system monospace, then common local monospace fallbacks.

Sora, IBM Plex Sans, and IBM Plex Mono remain typeface candidates only. They
must not be introduced through a third-party runtime request. A later switch
requires reviewed self-hosted WOFF2 files, equivalent fallback metrics, and a
measured layout-shift check.

Type tokens:

| Token               | Value/use                          |
| ------------------- | ---------------------------------- |
| `--text-label`      | 12px technical metadata            |
| `--text-body-sm`    | 14px compact supporting text       |
| `--text-body`       | 16px default body                  |
| `--text-lead`       | Fluid 18–22px introduction         |
| `--text-heading-sm` | Fluid 24–36px card/section heading |
| `--text-heading`    | Fluid 32–64px section display      |
| `--text-display`    | Fluid 48–88px primary statement    |

Display text uses tight tracking and a compact line height. Body copy uses a
1.55–1.7 line height and normally stays below 68 characters. Technical labels
use uppercase text, 0.1–0.14em letter spacing, and concise wording.

## Grid and containers

- Wide container: `--container-wide`, 112rem maximum.
- Reading measure: `--container-reading`, 48rem maximum.
- Responsive gutter: `--container-gutter`, 1rem to 3rem.
- Desktop: twelve conceptual columns with one narrow evidence rail.
- Tablet: six conceptual columns; content order remains linear.
- Mobile and zoom reflow: one column, with rail labels before their content.

Components must preserve DOM reading order when CSS creates asymmetry. Required
information cannot be moved into a visually separate region that reads earlier
or later than its semantic context.

## Spacing

The base spacing unit is 4px. Use the semantic scale rather than one-off values
inside shared components.

| Token             |          Value |
| ----------------- | -------------: |
| `--space-1`       |            4px |
| `--space-2`       |            8px |
| `--space-3`       |           12px |
| `--space-4`       |           16px |
| `--space-5`       |           24px |
| `--space-6`       |           32px |
| `--space-7`       |           48px |
| `--space-8`       |           64px |
| `--space-9`       |           96px |
| `--section-space` | Fluid 64–128px |

## Shape, borders, and elevation

- Controls use `--radius-control` (4px).
- Panels use `--radius-panel` (6px).
- Standard boundaries use `--border-thin` (1px).
- Strong state boundaries use `--border-strong` (2px).
- Flat surfaces and structural rules are the default.
- `--shadow-raised` is reserved for a truly elevated or temporary layer; cards
  do not receive shadows by default.
- No glass blur, bloom, noisy gradient, or generic floating-card treatment.

## Icons and diagrams

- Code-native SVG or CSS line marks use a 16px base grid.
- SVG geometry is rounded to sensible precision.
- Architecture flows use orthogonal connectors and labelled rectangular nodes.
- A highlighted path uses the data signal; verified outcomes use the verified
  signal.
- Every diagram has an adjacent text equivalent and a linear semantic list.
- Employer-specific schemas, topology, endpoints, hostnames, workflows, logos,
  and internal visuals are prohibited.

## Motion contract

Phase 2 defines timing only; it installs no Motion package and implements no
advanced animation.

| Token                       | Value               | Intended use                          |
| --------------------------- | ------------------- | ------------------------------------- |
| `--motion-duration-instant` | 0ms                 | Reduced-motion substitution           |
| `--motion-duration-fast`    | 140ms               | Hover/focus color feedback            |
| `--motion-duration-base`    | 180ms               | Small state transition                |
| `--motion-duration-layout`  | 280ms               | Future approved continuity transition |
| `--motion-ease-direct`      | Damped cubic Bézier | Direct response without overshoot     |

Simple feedback may transition only specific color, background, border, or
opacity properties. Never use `transition: all`. Future sequence or layout
motion belongs to Phase 6, uses the free `motion` package only, and must preserve
server-rendered content before animation loads.

For `prefers-reduced-motion: reduce`, all duration tokens resolve to 0ms.
Large transforms, parallax, ambient movement, continuous rotation, scroll
hijacking, and forced smooth scrolling are prohibited.

## Foundational primitives

Phase 2 supplies only these presentation foundations:

| Primitive               | Contract                                                             |
| ----------------------- | -------------------------------------------------------------------- |
| `Container`             | Constrains width and responsive inline gutter                        |
| `Section`               | Semantic section with standard vertical rhythm                       |
| `SectionHeading`        | Eyebrow, title, and optional description with explicit heading level |
| `Button` / `ButtonLink` | Native button or link semantics with primary/secondary variants      |
| `TextLink`              | Descriptive inline or standalone link treatment                      |
| `Badge`                 | Compact evidence/status label                                        |
| `Metric`                | Value, label, and optional source as one factual unit                |
| `ProjectCardShell`      | Article boundary with evidence label and optional index              |
| `ArchitectureNode`      | Labelled ordered-list node with explicit state                       |
| `SkipLink`              | First-page keyboard escape to the main content target                |
| Focus-ring behavior     | Global visible outline for native interactive elements               |

Primitives accept composed children where content structure varies. Variants
are explicit string unions rather than combinations of boolean props. They are
Server Components by default and introduce no client JavaScript.

## Interaction and accessibility

- Native elements provide semantics before ARIA.
- Focus uses a 3px data-signal outline with a 3px offset.
- Interactive controls have a minimum 44px block target.
- Hover styling supplements, never replaces, visible focus styling.
- Link text names its destination or action.
- Required information remains visible without hover, JavaScript, animation,
  tabs, or WebGL.
- Heading order follows document structure; `SectionHeading` requires the
  caller to choose the correct level.
- Layouts support 375, 768, 1440, and 1920px review widths, a 320px minimum
  reflow width, and 320% CSS zoom.

## Component usage rules

- Use semantic tokens; do not repeat raw palette values in shared components.
- Reuse a primitive before adding another abstraction.
- Keep content records outside presentation components.
- Use direct imports rather than a barrel export.
- Keep route files thin and preserve Server Components until interactivity is
  required.
- Do not add homepage sections, advanced motion, or public employer case-study
  routes during Phase 2.

## Known limitation

No custom font files are approved or supplied. The selected screenshots and
implemented tokens therefore use the reviewed system stacks. This avoids a
network dependency and layout shift and does not block the approved visual
system.
