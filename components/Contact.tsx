import { SocialIcon } from "@/components/SocialIcon";
import { YouTubeIcon } from "@/components/BrandIcons";
import { SectionHeading, SectionWrapper } from "@/components/SectionWrapper";
import { site } from "@/data/site";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <SectionWrapper id="contact" ariaLabel="Contact">
      <div className="card-surface relative mx-auto max-w-3xl overflow-hidden px-6 py-8 text-center sm:px-10 sm:py-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(6,182,212,0.06),transparent_70%)]"
        />

        <SectionHeading
          title="Contact"
          subtitle="Open to software, AI, and embedded systems opportunities."
          className="!mb-6"
        />

        <a
          href={`mailto:${site.identity.email}`}
          className="relative mt-2 inline-flex items-center gap-2 text-xl font-semibold transition-[color,text-shadow] hover:text-accent hover:[text-shadow:0_0_24px_rgba(6,182,212,0.3)] sm:text-2xl"
        >
          <Mail size={24} className="text-accent" aria-hidden="true" />
          {site.identity.email}
        </a>

        <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
          {site.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.icon === "mail" ? undefined : "_blank"}
              rel={social.icon === "mail" ? undefined : "noopener noreferrer"}
              className="btn-secondary"
              aria-label={social.label}
            >
              <SocialIcon social={social} size={18} />
              {social.label}
            </a>
          ))}
        </div>

        <div className="relative mt-6 flex flex-wrap items-center justify-center gap-3">
          <a href={site.identity.resumePath} className="btn-primary">
            Download Resume
          </a>
          <a
            href={site.demosPlaylist}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <YouTubeIcon size={18} aria-hidden="true" />
            View Demos
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
