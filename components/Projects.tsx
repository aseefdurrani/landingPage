"use client";

import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import { SectionHeading, SectionWrapper } from "@/components/SectionWrapper";
import { YouTubeIcon } from "@/components/BrandIcons";
import { site, type Project } from "@/data/site";
import { staggerContainer, viewportOnce } from "@/lib/motion";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <SectionWrapper id="projects" ariaLabel="Featured projects">
        <SectionHeading
          title="Projects"
          subtitle="From AI-powered full-stack apps to FPGA accelerators and custom processors."
        />
        <a
          href={site.demosPlaylist}
          target="_blank"
          rel="noopener noreferrer"
          className="-mt-4 mb-8 inline-flex items-center gap-2 rounded border border-border bg-surface/60 px-3 py-1.5 text-sm font-medium text-foreground transition-[border-color,color] hover:border-accent/50 hover:text-accent"
        >
          <YouTubeIcon size={18} className="text-accent" aria-hidden="true" />
          View my demos on YouTube
        </a>
        <motion.div
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.08)}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {site.projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={setSelectedProject}
            />
          ))}
        </motion.div>
      </SectionWrapper>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
