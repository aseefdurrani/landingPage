"use client";

import type { Project } from "@/data/site";
import { staggerItem } from "@/lib/motion";
import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, Plus } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.button
      type="button"
      onClick={() => onSelect(project)}
      variants={prefersReducedMotion ? undefined : staggerItem}
      whileHover={prefersReducedMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.2 }}
      className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded border border-border bg-surface/60 text-left transition-[border-color,box-shadow] hover:border-accent/40 hover:shadow-[0_8px_30px_rgba(6,182,212,0.12)]"
    >
      <div
        aria-hidden="true"
        className="flex aspect-[3/1] items-center justify-center border-b border-border bg-background/40 px-3"
      >
        <span className="text-center font-mono text-[10px] uppercase leading-relaxed tracking-widest text-muted sm:text-xs">
          {project.stack.slice(0, 3).join(" · ")}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-base font-semibold transition-colors group-hover:text-accent">
          {project.title}
        </h3>
        <p className="mt-1.5 flex-1 text-xs leading-relaxed text-muted sm:text-sm">
          {project.summary}
        </p>

        {project.metrics && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.metrics.map((metric) => (
              <span key={metric} className="chip-metric">
                {metric}
              </span>
            ))}
          </div>
        )}

        <div className="mt-3 flex flex-wrap gap-1">
          {project.stack.slice(0, 4).map((tech) => (
            <span key={tech} className="tag-tech">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-3 right-3 flex size-7 items-center justify-center rounded border border-accent/40 bg-surface/95 text-accent sm:hidden"
      >
        <Plus size={16} strokeWidth={2.5} />
      </div>

      <div className="absolute inset-0 hidden items-center justify-center bg-background/70 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 sm:flex">
        <span className="inline-flex items-center gap-2 rounded border border-accent/50 bg-surface px-3 py-1.5 text-sm text-accent shadow-[0_0_20px_rgba(6,182,212,0.15)]">
          View details
          <ExternalLink size={14} />
        </span>
      </div>
    </motion.button>
  );
}
