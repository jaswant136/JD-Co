import config from "../config";

export const socialLinks = [
  { id: "github", label: "GitHub", url: config.social.github },
  { id: "linkedin", label: "LinkedIn", url: config.social.linkedin },
  { id: "instagram", label: "Instagram", url: config.social.instagram },
  { id: "email", label: "Email", url: `mailto:${config.email}` },
];

export default socialLinks;
