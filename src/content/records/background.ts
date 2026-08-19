import type { Certification, Education, Evidence, Language } from "../schemas";

const englishResumeEvidence: Evidence = {
  sources: ["data-engineer-resume", "software-engineer-resume"],
  claimsApproved: true,
};

export const education = [
  {
    id: "ensam-masters",
    order: 1,
    institution: "National Higher School of Arts and Crafts (ENSAM)",
    program: "Master's Degree in Big Data & Internet of Things",
    startYear: 2024,
    endYear: 2026,
    result: "With Honors",
    location: "Casablanca, Morocco",
    evidence: englishResumeEvidence,
  },
  {
    id: "fst-bachelors",
    order: 2,
    institution: "Faculty of Sciences and Techniques (FST)",
    program:
      "Bachelor's Degree in Information Systems & Digital Transformation",
    startYear: 2020,
    endYear: 2024,
    result: "With Highest Honors",
    location: "Settat, Morocco",
    evidence: englishResumeEvidence,
  },
] satisfies Education[];

export const certifications = [
  {
    id: "aws-cloud-foundations",
    order: 1,
    name: "AWS Cloud Foundations",
    year: 2026,
    evidence: englishResumeEvidence,
  },
  {
    id: "scrum-foundation-learner",
    order: 2,
    name: "Scrum Foundation Learner",
    year: 2025,
    evidence: englishResumeEvidence,
  },
] satisfies Certification[];

export const languages = [
  {
    id: "arabic",
    order: 1,
    name: "Arabic",
    level: "Native",
    evidence: englishResumeEvidence,
  },
  {
    id: "english",
    order: 2,
    name: "English",
    level: "Fluent",
    evidence: englishResumeEvidence,
  },
  {
    id: "french",
    order: 3,
    name: "French",
    level: "Fluent",
    evidence: englishResumeEvidence,
  },
] satisfies Language[];
