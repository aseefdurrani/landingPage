import { GitHubIcon, LinkedInIcon } from "@/components/BrandIcons";
import type { SocialLink } from "@/data/site";
import { Globe, Mail } from "lucide-react";

const iconMap = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  mail: Mail,
  website: Globe,
} as const;

interface SocialIconProps {
  social: SocialLink;
  size?: number;
  className?: string;
}

export function SocialIcon({ social, size = 20, className }: SocialIconProps) {
  const Icon = iconMap[social.icon];
  return <Icon size={size} className={className} aria-hidden="true" />;
}
