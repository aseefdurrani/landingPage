"use client";

import { GitHubIcon, YouTubeIcon } from "@/components/BrandIcons";
import type { Project } from "@/data/site";
import { highlightMetrics } from "@/lib/format";
import { modalBackdrop, modalPanel } from "@/lib/motion";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { useEffect } from "react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const linkIcons = {
  github: GitHubIcon,
  youtube: YouTubeIcon,
  external: ExternalLink,
} as const;

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div
          className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <motion.button
            type="button"
            variants={modalBackdrop}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={onClose}
            aria-label="Close project details"
          />

          <motion.div
            variants={modalPanel}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-t border border-border bg-surface shadow-[0_24px_80px_rgba(0,0,0,0.5)] sm:rounded"
          >
            <div className="p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 id="project-modal-title" className="text-2xl font-semibold">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-muted">{project.summary}</p>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded p-2 text-muted transition-colors hover:bg-background/50 hover:text-foreground"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>

              {project.metrics && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.metrics.map((metric) => (
                    <span key={metric} className="chip-metric !text-sm !px-3 !py-1">
                      {metric}
                    </span>
                  ))}
                </div>
              )}

              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-muted">
                {project.bullets.map((bullet, index) => (
                  <li key={index} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    />
                    <span>{highlightMetrics(bullet)}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="tag-tech !text-xs !px-2.5 !py-1">
                    {tech}
                  </span>
                ))}
              </div>

              {project.links && project.links.length > 0 && (
                <div className="mt-8 flex flex-wrap gap-3 border-t border-border pt-6">
                  {project.links.map((link) => {
                    const Icon = linkIcons[link.type];
                    return (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary !py-2"
                      >
                        <Icon size={16} />
                        {link.label}
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
