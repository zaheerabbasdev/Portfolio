import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import type { SocialLink } from "@/types";

const iconMap = {
  email: faEnvelope,
  github: faGithub,
  linkedin: faLinkedinIn,
  facebook: faFacebookF,
};

interface SocialLinksProps {
  links: SocialLink[];
  variant?: "dark" | "light";
  size?: "sm" | "md";
}

export function SocialLinks({
  links,
  variant = "dark",
  size = "md",
}: SocialLinksProps) {
  const box = size === "sm" ? "h-9 w-9 text-sm" : "h-11 w-11 text-base";
  const palette =
    variant === "dark"
      ? "border-cloud/30 text-cloud hover:bg-cloud hover:text-ink"
      : "border-ink/20 bg-white text-ink hover:bg-ink hover:text-paper";

  return (
    <ul className="flex items-center gap-3">
      {links.map((link) => (
        <li key={link.id}>
          <a
            href={link.href}
            target={link.icon === "email" ? undefined : "_blank"}
            rel={link.icon === "email" ? undefined : "noreferrer"}
            aria-label={link.label}
            className={`flex ${box} items-center justify-center border transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 ${palette}`}
          >
            <FontAwesomeIcon icon={iconMap[link.icon]} />
          </a>
        </li>
      ))}
    </ul>
  );
}
