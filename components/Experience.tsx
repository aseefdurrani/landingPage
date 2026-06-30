"use client";

import ExperienceCard from "@/components/ExperienceCard";
import { SectionHeading, SectionWrapper } from "@/components/SectionWrapper";
import { site } from "@/data/site";
import { staggerContainer, viewportOnce } from "@/lib/motion";
import { motion, useReducedMotion } from "framer-motion";

export default function Experience() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <SectionWrapper id="experience" ariaLabel="Work experience">
      <SectionHeading
        title="Experience"
        subtitle="Software, AI, and embedded systems roles across startups and research."
      />
      <motion.div
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.1)}
        className="relative space-y-6 lg:pl-8"
      >
        {site.experiences.map((experience, index) => (
          <ExperienceCard
            key={experience.id}
            experience={experience}
            index={index}
          />
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
