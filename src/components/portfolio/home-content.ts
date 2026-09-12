import { portfolioContent } from "@/content/registry";

function requireRecord<T>(record: T | undefined, description: string): T {
  if (!record) {
    throw new Error(`Missing validated homepage content: ${description}.`);
  }

  return record;
}

const linksById = new Map(
  portfolioContent.links.map((link) => [link.id, link]),
);
const mediaById = new Map(
  portfolioContent.media.map((mediaItem) => [mediaItem.id, mediaItem]),
);

export const homepageContent = {
  profile: portfolioContent.profile,
  portrait: requireRecord(
    mediaById.get("profile-portrait"),
    "profile portrait",
  ),
  contactLinks: portfolioContent.profile.contactLinkIds.map((linkId) =>
    requireRecord(linksById.get(linkId), `contact link ${linkId}`),
  ),
  socialLinks: portfolioContent.profile.socialLinkIds.map((linkId) =>
    requireRecord(linksById.get(linkId), `social link ${linkId}`),
  ),
  resumeDownloads: portfolioContent.resumes.map((resume) => ({
    ...resume,
    href: requireRecord(
      mediaById.get(resume.mediaId),
      `resume media ${resume.mediaId}`,
    ).publicPath,
  })),
  experiences: portfolioContent.experiences,
  employerLogos: portfolioContent.media.filter((asset) =>
    asset.subjectRef.startsWith("experience:"),
  ),
  metrics: portfolioContent.metrics,
  projects: portfolioContent.projects,
  research: {
    ...portfolioContent.research,
    link: requireRecord(
      linksById.get(portfolioContent.research.linkId),
      `research link ${portfolioContent.research.linkId}`,
    ),
  },
  skills: portfolioContent.skills,
  education: portfolioContent.education,
  certifications: portfolioContent.certifications,
  languages: portfolioContent.languages,
};
