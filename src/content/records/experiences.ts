import type { Experience } from "../schemas";

export const experiences = [
  {
    id: "dxc-technology-morocco",
    order: 1,
    employer: "DXC Technology Morocco",
    officialTitle: "Data & AI Engineer",
    employmentType: "Internship",
    start: "2026-02",
    end: "2026-08",
    dateLabel: "February to August 2026",
    location: "Sale El Jadida, Morocco",
    summary:
      "Designed and deployed AI Sandbox, a cloud-native MLOps/AIOps platform for machine-learning benchmarking and AI-agent evaluation on Azure.",
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
    id: "jesa",
    order: 2,
    employer: "JESA S.A.",
    officialTitle: "Software Engineer & Data Scientist",
    employmentType: "Internship",
    start: "2025-07",
    end: "2025-09",
    dateLabel: "July to September 2025",
    location: "Casablanca, Morocco",
    summary:
      "Built CentralGIS and delivered separate data-science work for Environmental Impact Assessment inputs.",
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
    id: "ocp-group",
    order: 3,
    employer: "OCP Group",
    officialTitle: "Full Stack Developer",
    employmentType: "Internship",
    start: "2024-04",
    end: "2024-06",
    dateLabel: "April to June 2024",
    location: "Safi, Morocco",
    summary:
      "Developed a workforce and HR management platform with dashboards, reporting, and RFID time tracking.",
    evidence: {
      sources: [
        "approved-fact",
        "data-engineer-resume",
        "software-engineer-resume",
      ],
      claimsApproved: true,
    },
  },
] satisfies Experience[];
