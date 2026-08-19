import type { Metric } from "../schemas";

export const metrics = [
  {
    id: "centralgis-data-access-reduction",
    displayValue: "40%",
    label: "less data-access time",
    claim: "CentralGIS reduced data access time by 40%.",
    attribution: "CentralGIS at JESA S.A.",
    measure: {
      kind: "percentage-reduction",
      percent: 40,
    },
    evidence: {
      sources: [
        "approved-fact",
        "data-engineer-resume",
        "software-engineer-resume",
      ],
      claimsApproved: true,
    },
  },
  {
    id: "eia-parameter-reduction",
    displayValue: "52 → 38",
    label: "Environmental Impact Assessment inputs",
    claim:
      "The JESA Environmental Impact Assessment work reduced inputs from 52 to 38 parameters, a 27% reduction.",
    attribution: "Environmental Impact Assessment work at JESA S.A.",
    measure: {
      kind: "parameter-reduction",
      from: 52,
      to: 38,
      percent: 27,
    },
    evidence: {
      sources: ["approved-fact", "data-engineer-resume"],
      claimsApproved: true,
    },
  },
  {
    id: "eia-accuracy-floor",
    displayValue: "≥95%",
    label: "accuracy maintained",
    claim:
      "The JESA Environmental Impact Assessment work maintained at least 95% accuracy.",
    attribution: "Environmental Impact Assessment work at JESA S.A.",
    measure: {
      kind: "accuracy-floor",
      percent: 95,
    },
    evidence: {
      sources: ["approved-fact", "data-engineer-resume"],
      claimsApproved: true,
    },
  },
  {
    id: "ocp-backend-performance-improvement",
    displayValue: "30%",
    label: "backend-performance improvement",
    claim: "OCP backend performance improved by 30%.",
    attribution: "OCP workforce management platform",
    measure: {
      kind: "percentage-improvement",
      percent: 30,
    },
    evidence: {
      sources: [
        "approved-fact",
        "data-engineer-resume",
        "software-engineer-resume",
      ],
      claimsApproved: true,
    },
  },
] satisfies Metric[];
