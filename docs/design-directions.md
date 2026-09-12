# Systems Atlas design directions

Status: Reviewed in Phase 2. **Signal Ledger was selected by the user on
2026-08-18.** The canonical implementation is recorded in
`docs/design-system.md`; Field Notes and Modular Current remain comparison
records only.

## Purpose

These directions test three materially different ways to present Abdessamad
Jaouad as a Data Engineer first and a Software Engineer second. They use the
same approved evidence so the visual comparison is not distorted by different
content.

The temporary `/design-lab` route previews each direction with:

- the approved positioning statement;
- Casablanca, immediate availability, and work arrangements;
- an AI Sandbox experience highlight;
- the approved CentralGIS 40% result;
- a contact action, text link, tag, labelled input, and visible focus states;
- a generic data-flow node sequence with no employer-specific detail.

The font names below are candidates, not installed dependencies. The design lab
uses system fallbacks to keep this selection step local, fast, and
JavaScript-independent.

## Direction 01: Signal Ledger

### Intent

A calm control room expressed as an engineering ledger. Dense evidence sits on
precise rules and numbered rails, while the positioning statement gets the
largest visual weight. It should feel technical without resembling a terminal
or monitoring dashboard.

### Typography

- Display candidate: Sora, 600 to 700 weight.
- Body candidate: IBM Plex Sans, 400 to 600 weight.
- Technical candidate: IBM Plex Mono, 400 to 500 weight.
- Prototype fallback: system sans and system monospace.
- Type behavior: compact metadata, a fluid 48 to 88 pixel display range, and
  short measure for supporting copy.

### Color

| Role              | Prototype value | Intended use                      |
| ----------------- | --------------- | --------------------------------- |
| Background        | `#071015`       | Main field                        |
| Surface           | `#0E1A20`       | Evidence panels                   |
| Primary text      | `#F4F7F5`       | Headings and body                 |
| Secondary text    | `#A9BAC0`       | Metadata and supporting copy      |
| Data signal       | `#57D9EF`       | Primary action and active path    |
| Verified signal   | `#B9F36A`       | Approved metrics and availability |
| Structural border | `#496D78`       | Rules and control boundaries      |

All text combinations used in the prototype exceed 4.5:1. Structural borders
exceed 3:1 against both the background and surface.

### Grid

- Twelve-column desktop grid with a narrow numbered evidence rail.
- Six-column tablet grid.
- One content column at narrow widths, preserving rail labels above content.
- Asymmetric hero: statement occupies roughly two thirds; profile metadata
  aligns to the remaining rail.

### Surfaces

- Flat dark fields separated by visible rules.
- One elevated evidence panel with a restrained inner highlight.
- Square corners with a small two to six pixel radius only where it helps
  identify controls.
- No glass blur, bloom, or decorative gradient.

### Icon and diagram style

- Icons are code-native line marks built on a 16 pixel square grid.
- Diagrams use orthogonal connectors, labelled rectangular nodes, and one
  highlighted signal path.
- Meaning is repeated in adjacent text; color is never the sole cue.

### Motion tone

- Future state changes should be direct and damped, with no overshoot.
- Simple feedback stays in CSS at 140 to 180 milliseconds.
- The future signal-flow sequence may use Motion only after static approval,
  with transforms removed for reduced motion.
- No ambient animation is part of this phase.

### Purposeful aesthetic risk

The oversized statement and narrow evidence rail create deliberate asymmetry.
This makes the opening memorable, but the rail could become visual noise. The
control is strict alignment, one rail only, and immediate stacking below 768
pixels.

## Direction 02: Field Notes

### Intent

An editorial engineering dossier on warm paper. It presents technical work as
carefully reviewed evidence rather than a live system. The tone is personal,
quiet, and highly readable for recruiters who spend the day inside conventional
application interfaces.

### Typography

- Display candidate: Newsreader, 500 to 600 weight.
- Body candidate: Inter, 400 to 600 weight.
- Technical candidate: IBM Plex Mono, 400 to 500 weight.
- Prototype fallback: Georgia, system sans, and system monospace.
- Type behavior: serif display statement, generous 1.55 to 1.7 body leading,
  and uppercase sans labels.

### Color

| Role              | Prototype value | Intended use                     |
| ----------------- | --------------- | -------------------------------- |
| Background        | `#F3EEE2`       | Paper field                      |
| Surface           | `#FFFAF0`       | Cards and inset notes            |
| Primary text      | `#1D211F`       | Headings and body                |
| Secondary text    | `#5D625E`       | Metadata and captions            |
| Editorial blue    | `#165B7A`       | Links and architecture paths     |
| Evidence rust     | `#A43D24`       | Approved results and index marks |
| Structural border | `#817B6C`       | Rules and control boundaries     |

All text combinations used in the prototype exceed 4.5:1. Structural borders
exceed 3:1 against both paper surfaces.

### Grid

- Ten-column desktop editorial grid with wide outer margins.
- Hero uses a broad statement column and a compact marginal note.
- Evidence follows a reading sequence instead of a dashboard matrix.
- Mobile becomes one uninterrupted article column with metadata inserted at
  the point it is needed.

### Surfaces

- Warm paper layers with solid backgrounds and crisp ink rules.
- Minimal shadow, used only to distinguish an inset evidence note.
- Medium four to ten pixel radii.
- No translucent panels or ornamental texture files.

### Icon and diagram style

- Icons resemble annotation marks: circles, arrows, brackets, and check marks.
- Diagrams use fine blue paths, rust index numbers, and descriptive labels.
- Architecture reads like an annotated figure in a technical paper.

### Motion tone

- Future motion should feel like changing pages or revealing an annotation.
- Feedback uses 160 to 200 millisecond opacity and color transitions.
- No simulated page curl, parallax, or physical paper effect.
- Reduced motion receives immediate state changes.

### Purposeful aesthetic risk

The serif headline intentionally breaks from the expected software-portfolio
look. It adds warmth and editorial authority, but could weaken the technical
signal. Monospace evidence labels, precise diagrams, and a sans-serif body keep
the engineering identity explicit.

## Direction 03: Modular Current

### Intent

A light modular atlas built from connected blocks. It visualizes Abdessamad's
range as one system moving from data to software, using spatial grouping rather
than the dark control-room metaphor.

### Typography

- Display candidate: Space Grotesk, 600 to 700 weight.
- Body candidate: Atkinson Hyperlegible, 400 to 700 weight.
- Technical candidate: JetBrains Mono, 400 to 500 weight.
- Prototype fallback: system sans and system monospace.
- Type behavior: broad geometric headings, short explanatory blocks, and
  compact labels aligned to module edges.

### Color

| Role              | Prototype value | Intended use                  |
| ----------------- | --------------- | ----------------------------- |
| Background        | `#DFE7E2`       | Mist field                    |
| Surface           | `#F3F7F4`       | Modular evidence blocks       |
| Primary text      | `#14251F`       | Headings and body             |
| Secondary text    | `#485A52`       | Metadata and supporting copy  |
| Current green     | `#006C5C`       | Primary path and actions      |
| Research plum     | `#7047B2`       | Secondary evidence category   |
| Structural border | `#657B70`       | Module and control boundaries |

All text combinations used in the prototype exceed 4.5:1. Structural borders
exceed 3:1 against both the background and surface.

### Grid

- Eight-column modular desktop grid with blocks spanning two, three, or five
  columns.
- Content order remains linear in the DOM even when blocks interlock visually.
- Tablet uses four columns; mobile uses one column.
- The hero statement and availability block form the first connected pair.

### Surfaces

- Solid pale modules with strong dark-green outlines.
- Larger 16 to 24 pixel radii create an approachable product-engineering tone.
- Select blocks use flat green or plum fills with high-contrast text.
- No floating glass cards or soft-focus background effects.

### Icon and diagram style

- Icons are filled geometric stamps with a visible text label.
- Diagrams use rounded nodes connected by thick directional paths.
- Category changes use shape and label in addition to color.

### Motion tone

- Future movement should emphasize modules connecting and changing state.
- Feedback uses 120 to 180 millisecond color and two-pixel transform changes.
- Larger transforms and connector motion are removed under reduced motion.
- No continuous movement or magnetic cursor behavior.

### Purposeful aesthetic risk

The interlocking block grid is intentionally more graphic than a conventional
portfolio. It can communicate connected systems at a glance, but it risks
reading like a product landing page. The control is factual copy, restrained
color count, no decorative statistics, and a linear accessible reading order.

## Comparison

| Criterion          | Signal Ledger                  | Field Notes                         | Modular Current                       |
| ------------------ | ------------------------------ | ----------------------------------- | ------------------------------------- |
| First impression   | Precise control room           | Editorial evidence dossier          | Connected systems atlas               |
| Recruiter scan     | Fast, compact, high contrast   | Calm, familiar reading flow         | Visual grouping and strong landmarks  |
| Engineering signal | Highest                        | Moderate, reinforced by annotations | High, expressed through system blocks |
| Warmth             | Low to moderate                | Highest                             | Moderate to high                      |
| Density            | Highest                        | Lowest                              | Medium                                |
| Main risk          | Rail becomes visual noise      | Serif feels less technical          | Blocks feel like a product template   |
| Best fit           | Data-first technical authority | Human, reflective credibility       | Balanced data/software range          |

## Recommendation

Start from **Signal Ledger**. It aligns most closely with the approved calm
control-room and signal-flow concept, gives Data Engineer evidence the strongest
first impression, and can remain recruiter-readable with disciplined density.

If a combination is preferred, the most coherent hybrid is Signal Ledger's
grid, diagram language, and dark palette with Field Notes' more generous body
spacing. Mixing Modular Current's large rounded modules into Signal Ledger is
not recommended because it would weaken the ledger metaphor.

## Selection record

- Selected direction: **Signal Ledger**.
- Selection date: 2026-08-18.
- Approved by: Jao, through the Phase 2 human selection gate.
- Approved combination: Signal Ledger as proposed, without importing visual
  parts from Field Notes or Modular Current.
- Implementation consequence: semantic tokens, foundational primitives, and
  future portfolio presentation use Signal Ledger's dark ledger field,
  cyan data signal, lime verified signal, compact technical labels, squared
  surfaces, and orthogonal diagram language.
