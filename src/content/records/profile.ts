import type { Profile } from "../schemas";

export const profile = {
  name: "Abdessamad Jaouad",
  roles: {
    primary: "Data Engineer",
    secondary: "Software Engineer",
  },
  location: "Casablanca, Morocco",
  availability: "Immediately",
  workArrangements: ["On-site", "Hybrid", "Remote"],
  phone: "+212679075431",
  contactLinkIds: ["email", "whatsapp", "linkedin"],
  socialLinkIds: ["linkedin", "github"],
} satisfies Profile;
