# Portfolio content model

Status: Approved by Jao on 2026-08-19.

## Purpose

The portfolio uses one local, validated content registry. Facts, evidence,
publication state, and asset references stay outside JSX so later presentation
work cannot silently create a second source of truth.

## Module boundary

`src/content/registry.ts` is the canonical application-facing entry point. It
assembles focused records under `src/content/records/`, validates them with the
Zod contracts in `src/content/schemas.ts`, and exports parsed content.

The registry contains these domains:

- profile and approved contact destinations;
- official internship experience records;
- employer highlights, a supporting employer result, and personal projects;
- approved metrics and evidence sources;
- sanitized, text-equivalent architecture records;
- approved external links and reviewed public media;
- research with an explicit citation-completeness state;
- resumes, education, certifications, and languages;
- evidence-linked skills; and
- structured unresolved content gaps.

Presentation components must import parsed registry data. They must not import
private resume sources, repeat public facts in JSX, render unresolved gap
objects, or infer missing links, media, metrics, and citation fields.

## Validation lifecycle

Validation runs in two independent paths:

1. Vitest imports and exercises the registry during `npm run test`.
2. `next.config.ts` imports the public-asset validator before Next.js compiles,
   so `npm run build` fails on invalid content or missing declared assets.

Cross-record validation checks unique identifiers and slugs, explicit ordering,
link, experience, metric, media, resume, content-gap, skill-evidence, and
architecture-flow references. Public-asset validation checks path containment,
symlinks, file signatures, undeclared files, and private source extensions in
the governed `images`, `resumes`, and `videos` folders.

## Featured and incomplete content

A missing value is a structured object whose identifier matches
`TODO_CONTENT_*`; placeholder strings are rejected. Nonfeatured records may
reference these objects and the matching internal gap registry. A featured
record fails validation if a named TODO occurs anywhere inside it.

Empty link or media lists on the three employer highlights are intentional,
complete publication decisions. They do not mean that a private or unresolved
destination should be substituted. Optional evidence-strengthening gaps remain
internal and do not block the approved concise, text-only treatment.

## Public assets

Only declared and reviewed derivatives can enter governed public asset folders.
The Phase 3 registry currently declares two linearized English resume PDFs. No
project image, poster, video, employer asset, logo, research PDF, or private
source is present.

Each declared asset records ownership, publication permission,
confidentiality review, metadata review, optimization status, and a text
alternative. Future images and posters must also provide intrinsic dimensions
and alt text.

## Change procedure

When adding or changing content:

1. confirm the claim or asset against the repository source hierarchy;
2. update the focused record, not presentation code;
3. use a structured content gap if a nonfeatured field is genuinely unresolved;
4. add evidence and cross-record references;
5. declare and review any public asset before placing it under `public/`; and
6. run the complete repository gate before requesting approval.

Employer case-study routes, live fetching, a CMS, and runtime content APIs stay
outside this contract and outside Version 1.
