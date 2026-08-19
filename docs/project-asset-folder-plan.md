# Systems Atlas project asset folder plan

Status: Approved in Phase 0; resume asset status updated in Phase 3 on
2026-08-19.

## Goals

- Keep private source material physically and logically separate from public
  derivatives.
- Publish only assets with verified ownership, confidentiality, content, and
  accessibility metadata.
- Make missing media optional so a card or highlight never needs a fake image.
- Give the two public resumes stable, descriptive filenames.

## Proposed future layout

```text
private-inputs/
└── assets/                         # source masters; ignored and never deployed
    ├── personal-projects/
    │   ├── stock-market-etl/
    │   ├── data-quality-kpi/
    │   ├── legal-text-classification/
    │   └── healthics/
    ├── profile/                    # only if a headshot is later approved
    └── research/                   # only user-owned source material

public/
├── resumes/
│   ├── abdessamad-jaouad-data-engineer.pdf
│   └── abdessamad-jaouad-software-engineer.pdf
├── images/
│   ├── projects/
│   │   ├── stock-market-etl/
│   │   ├── data-quality-kpi/
│   │   ├── legal-text-classification/
│   │   └── healthics/
│   ├── profile/                    # omitted unless a headshot is approved
│   └── research/                   # optional approved social/diagram assets
└── videos/
    └── projects/                   # personal projects only by default
```

The structure is a plan, not authorization to create every folder. Empty
folders should not be committed. Employer-specific folders are intentionally
absent from `public/`.

## Employer material policy

AI Sandbox, CentralGIS, and the OCP workforce management platform receive no
raw public screenshots, videos, reports, repositories, data, schemas, logos, or
architecture exports.

If a sanitized diagram is approved later, it should be recreated from only the
public resume-level description and reviewed before use. It must contain no
employer-specific schema, topology, data, endpoint, hostname, credential,
screenshot, logo asset, or private workflow. A code-native SVG may live with
the future presentation component rather than in `public/`.

The reused Google Drive URL must not be fetched, copied, or linked until
`TODO_CONTENT_SHARED_DRIVE_OWNERSHIP` is resolved and public use receives
explicit approval.

## Asset naming rules

- Use lowercase kebab-case ASCII filenames.
- Describe the content rather than its sequence: `pipeline-overview.svg`, not
  `image-1.svg`.
- Add a role suffix when variants differ: `architecture-mobile.svg` or
  `dashboard-poster.webp`.
- Keep source masters and derived public files distinct.
- Never encode employer names, internal identifiers, dates of export, usernames,
  or confidential system names in public filenames.
- Do not overwrite a source master during optimization.

## Required asset record

Before any future asset enters `public/`, its content record should include:

| Field | Requirement |
| --- | --- |
| Public path | Unique, stable, and under an approved folder |
| Subject/project | Matches an approved content record |
| Source owner | Identified person or organization |
| Publication permission | Explicitly approved |
| Source location | Private reference only; never emitted to the client |
| Media type | Image, video, PDF, poster, or diagram |
| Dimensions/duration | Required when applicable |
| Alt text or text alternative | Describes purpose, not appearance alone |
| Caption | Includes only approved facts |
| Confidentiality review | Passed with reviewer/date |
| Metadata review | No private EXIF, author path, hostname, or document metadata |
| Optimization status | Derived format checked without changing the master |
| Link check | Local target and embedded links verified |

## Review workflow

1. Receive a user-supplied source without fetching an unresolved private link.
2. Identify ownership and publication permission.
3. Compare visible content, metadata, and embedded links with the approved
   content inventory.
4. Reject employer-confidential, credential-bearing, or ambiguous material.
5. Create a derivative only in the appropriate later phase.
6. Strip unnecessary private metadata and retain the untouched source master.
7. Add dimensions, alt text or a text alternative, and a factual caption.
8. Verify the derivative visually at its intended sizes.
9. Scan the public output and Git diff before approval.

## Resume assets

The only approved public resume targets are:

- `public/resumes/abdessamad-jaouad-data-engineer.pdf`
- `public/resumes/abdessamad-jaouad-software-engineer.pdf`

Before either PDF is added, verify:

- It is the reviewed English version for the filename's role.
- The approved email is `abdessamadjaouad0@gmail.com`.
- All three experience titles and the `Internship` type match the approved
  registry.
- Text is selectable and reading order is usable.
- Every embedded link opens the intended destination.
- Visual rendering is complete and legible.
- No private path, author metadata, comment, or hidden attachment is exposed.

`TODO_CONTENT_REVIEWED_ENGLISH_RESUME_PDFS` is resolved. Both approved PDF
targets are present and passed visual, selectable-text, embedded-link,
approved-fact, metadata, structure, linearization, and public-path checks. No
`.tex` source and no French resume entered `public/`.

## Image and diagram assets

- Prefer SVG for factual diagrams and WebP/AVIF for photographic or rendered
  imagery when supported by the later framework pipeline.
- Provide intrinsic dimensions for raster assets.
- Keep meaningful text in accessible DOM content or a full text alternative,
  not only inside an image.
- Do not use a logo without permission.
- Do not generate decorative metrics or charts.
- Omit a media area when no approved asset exists.

## Video assets

Video is optional and limited to approved personal-project demonstrations by
default. A future video requires:

- Identified ownership and publication permission.
- Removal of credentials, private tabs, notifications, personal data, and
  employer material.
- A reviewed poster frame and descriptive label.
- Captions or an equivalent transcript when speech conveys information.
- User-initiated playback; no autoplay.
- A static equivalent for reduced motion and load failure.

No approved video or poster currently exists.

## Profile and headshot assets

No headshot was supplied, and Version 1 does not require one. The profile folder
must remain absent unless the user later supplies an owned image and explicitly
approves its use. The missing headshot is not a content blocker.

## Research assets

Use the approved IEEE Xplore destination for the paper. Do not download or
republish a paper PDF without separate rights verification. A future research
diagram or social image must avoid inferred citation metadata while
`TODO_CONTENT_IEEE_CITATION` remains unresolved.

## Current readiness by candidate

| Candidate | Screenshot | Diagram | Video/poster | Public links | Current action |
| --- | --- | --- | --- | --- | --- |
| AI Sandbox | None approved | None approved | Shared URL blocked | Blocked/missing | Text-only concise highlight |
| CentralGIS | None approved | None approved | Shared URL blocked | Blocked/missing | Text-only concise highlight |
| OCP workforce platform | None approved | None approved | None supplied | Missing | Text-only concise highlight |
| Stock-market ETL | None supplied | None supplied | None supplied | Missing | Text-only card if approved |
| Data Quality & KPI | None supplied | None supplied | None supplied | Missing | Text-only card if approved |
| Legal-text classification | None supplied | None supplied | None supplied | Missing | Text-only card if approved |
| Healthics | None supplied | None supplied | None supplied | Missing | Text-only card if approved |

Missing assets do not authorize placeholders or generated employer imagery.
Project-specific gaps remain recorded in `docs/content-inventory.md`.
