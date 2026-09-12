import type { ContentGap } from "../schemas";

export const contentGaps = [
  {
    id: "TODO_CONTENT_SHARED_DRIVE_OWNERSHIP",
    status: "unresolved",
    requirement:
      "Identify the owner and intended asset before any supplied shared-drive destination is fetched or published.",
    affects: ["project:ai-sandbox", "project:centralgis"],
    blocksCurrentPublicTreatment: false,
  },
  {
    id: "TODO_CONTENT_AI_SANDBOX_PUBLIC_LINKS",
    status: "unresolved",
    requirement:
      "Approve an owned public repository, demo, or report before adding an AI Sandbox link.",
    affects: ["project:ai-sandbox"],
    blocksCurrentPublicTreatment: false,
  },
  {
    id: "TODO_CONTENT_AI_SANDBOX_APPROVED_MEDIA",
    status: "unresolved",
    requirement:
      "Supply and approve non-confidential AI Sandbox media before adding a media area.",
    affects: ["project:ai-sandbox"],
    blocksCurrentPublicTreatment: false,
  },
  {
    id: "TODO_CONTENT_CENTRALGIS_PUBLIC_LINKS",
    status: "unresolved",
    requirement:
      "Approve an owned public repository, demo, or report before adding a CentralGIS link.",
    affects: ["project:centralgis"],
    blocksCurrentPublicTreatment: false,
  },
  {
    id: "TODO_CONTENT_CENTRALGIS_APPROVED_MEDIA",
    status: "unresolved",
    requirement:
      "Supply and approve non-confidential CentralGIS media before adding a media area.",
    affects: ["project:centralgis"],
    blocksCurrentPublicTreatment: false,
  },
  {
    id: "TODO_CONTENT_CENTRALGIS_METRIC_ARTIFACT",
    status: "unresolved",
    requirement:
      "Supply public or sanitized evidence only if the approved 40% claim should receive stronger support than resume wording.",
    affects: ["project:centralgis", "metric:centralgis-data-access-reduction"],
    blocksCurrentPublicTreatment: false,
  },
  {
    id: "TODO_CONTENT_OCP_PUBLIC_LINKS",
    status: "unresolved",
    requirement:
      "Approve an owned public repository, demo, or report before adding an OCP project link.",
    affects: ["project:ocp-workforce-platform"],
    blocksCurrentPublicTreatment: false,
  },
  {
    id: "TODO_CONTENT_OCP_APPROVED_MEDIA",
    status: "unresolved",
    requirement:
      "Supply and approve non-confidential OCP project media before adding a media area.",
    affects: ["project:ocp-workforce-platform"],
    blocksCurrentPublicTreatment: false,
  },
  {
    id: "TODO_CONTENT_OCP_METRIC_ARTIFACT",
    status: "unresolved",
    requirement:
      "Supply public or sanitized evidence only if the approved 30% claim should receive stronger support than resume wording.",
    affects: [
      "project:ocp-workforce-platform",
      "metric:ocp-backend-performance-improvement",
    ],
    blocksCurrentPublicTreatment: false,
  },
  {
    id: "TODO_CONTENT_EIA_PUBLIC_EVIDENCE",
    status: "unresolved",
    requirement:
      "Supply lawful public evidence only if the supporting JESA result should link to an artifact.",
    affects: ["project:jesa-eia-input-reduction"],
    blocksCurrentPublicTreatment: false,
  },
  {
    id: "TODO_CONTENT_EIA_METRIC_ARTIFACT",
    status: "unresolved",
    requirement:
      "Supply public or sanitized evidence only if the approved input-reduction result should receive stronger support than resume wording.",
    affects: [
      "project:jesa-eia-input-reduction",
      "metric:eia-parameter-reduction",
    ],
    blocksCurrentPublicTreatment: false,
  },
  {
    id: "TODO_CONTENT_EIA_ACCURACY_EVIDENCE",
    status: "unresolved",
    requirement:
      "Supply the evaluation definition and a lawful artifact only if the approved accuracy result should receive stronger support than resume wording.",
    affects: ["project:jesa-eia-input-reduction", "metric:eia-accuracy-floor"],
    blocksCurrentPublicTreatment: false,
  },
  {
    id: "TODO_CONTENT_STOCK_PIPELINE_PROBLEM_CONTEXT",
    status: "unresolved",
    requirement:
      "Describe the user or decision context before presenting a problem statement for the stock-market pipeline.",
    affects: ["project:stock-market-etl"],
    blocksCurrentPublicTreatment: false,
  },
  {
    id: "TODO_CONTENT_STOCK_PIPELINE_PUBLIC_LINKS",
    status: "unresolved",
    requirement:
      "Supply and approve a public repository, demo, or report before adding a stock-pipeline link.",
    affects: ["project:stock-market-etl"],
    blocksCurrentPublicTreatment: false,
  },
  {
    id: "TODO_CONTENT_STOCK_PIPELINE_APPROVED_MEDIA",
    status: "unresolved",
    requirement:
      "Supply owned stock-pipeline media and approve it before adding a media area.",
    affects: ["project:stock-market-etl"],
    blocksCurrentPublicTreatment: false,
  },
  {
    id: "TODO_CONTENT_DATA_QUALITY_PUBLIC_LINKS",
    status: "unresolved",
    requirement:
      "Supply and approve a public repository, demo, or report before adding a data-quality project link.",
    affects: ["project:data-quality-kpi"],
    blocksCurrentPublicTreatment: false,
  },
  {
    id: "TODO_CONTENT_DATA_QUALITY_APPROVED_MEDIA",
    status: "unresolved",
    requirement:
      "Supply owned data-quality project media and approve it before adding a media area.",
    affects: ["project:data-quality-kpi"],
    blocksCurrentPublicTreatment: false,
  },
  {
    id: "TODO_CONTENT_LEGAL_NLP_PUBLIC_LINKS",
    status: "unresolved",
    requirement:
      "Supply and approve a public repository, demo, or report before adding a legal-text project link.",
    affects: ["project:legal-text-classification"],
    blocksCurrentPublicTreatment: false,
  },
  {
    id: "TODO_CONTENT_LEGAL_NLP_APPROVED_MEDIA",
    status: "unresolved",
    requirement:
      "Supply owned legal-text project media and approve it before adding a media area.",
    affects: ["project:legal-text-classification"],
    blocksCurrentPublicTreatment: false,
  },
  {
    id: "TODO_CONTENT_HEALTHICS_PUBLIC_LINKS",
    status: "unresolved",
    requirement:
      "Supply and approve a public repository, demo, or report before adding a Healthics link.",
    affects: ["project:healthics"],
    blocksCurrentPublicTreatment: false,
  },
  {
    id: "TODO_CONTENT_HEALTHICS_APPROVED_MEDIA",
    status: "unresolved",
    requirement:
      "Supply owned Healthics media and approve it before adding a media area.",
    affects: ["project:healthics"],
    blocksCurrentPublicTreatment: false,
  },
  {
    id: "TODO_CONTENT_IEEE_CITATION",
    status: "unresolved",
    requirement:
      "Provide an exact IEEE export or BibTeX before publishing authors, venue, date, pages, DOI, or a full citation.",
    affects: ["research:epoch-based-pqc-compression"],
    blocksCurrentPublicTreatment: false,
  },
  {
    id: "TODO_CONTENT_AWS_CERTIFICATION_LINK",
    status: "unresolved",
    requirement:
      "Supply and approve the public AWS credential destination before linking the certification.",
    affects: ["certification:aws-cloud-foundations"],
    blocksCurrentPublicTreatment: false,
  },
  {
    id: "TODO_CONTENT_SCRUM_CERTIFICATION_LINK",
    status: "unresolved",
    requirement:
      "Supply and approve the public Scrum credential destination before linking the certification.",
    affects: ["certification:scrum-foundation-learner"],
    blocksCurrentPublicTreatment: false,
  },
  {
    id: "TODO_CONTENT_DEDICATED_DATA_ENGINEERING_CASE_STUDY",
    status: "unresolved",
    requirement:
      "Supply a complete public evidence package before creating a deep Data Engineer case study.",
    affects: ["portfolio:deep-case-studies"],
    blocksCurrentPublicTreatment: false,
  },
] satisfies ContentGap[];
