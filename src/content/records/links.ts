import type { Link } from "../schemas";

export const links = [
  {
    id: "email",
    kind: "contact-email",
    label: "Email Abdessamad",
    href: "mailto:abdessamadjaouad0@gmail.com",
    publicationApproved: true,
  },
  {
    id: "whatsapp",
    kind: "contact-social",
    label: "Message Abdessamad on WhatsApp",
    href: "https://wa.me/212679075431",
    publicationApproved: true,
  },
  {
    id: "linkedin",
    kind: "contact-social",
    label: "Abdessamad Jaouad on LinkedIn",
    href: "https://linkedin.com/in/abdessamadjaouad",
    publicationApproved: true,
  },
  {
    id: "github",
    kind: "contact-social",
    label: "Abdessamad Jaouad on GitHub",
    href: "https://github.com/abdessamadjaouad",
    publicationApproved: true,
  },
  {
    id: "pqc-research",
    kind: "research",
    label: "Read the PQC research paper on IEEE Xplore",
    href: "https://ieeexplore.ieee.org/document/11601673",
    publicationApproved: true,
  },
] satisfies Link[];
