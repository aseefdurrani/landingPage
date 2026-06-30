"use client";

import { SectionHeading, SectionWrapper } from "@/components/SectionWrapper";
import { site } from "@/data/site";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";
import { motion, useReducedMotion } from "framer-motion";

export default function Skills() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <SectionWrapper id="skills" ariaLabel="Skills">
      <SectionHeading
        title="Skills"
        subtitle="Languages, platforms, and tools across embedded, backend, and AI work."
      />
      <motion.div
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.1)}
        className="grid gap-6 md:grid-cols-3"
      >
        {site.skills.map((category) => (
          <motion.div
            key={category.name}
            variants={prefersReducedMotion ? undefined : staggerItem}
            className="card-surface card-lift p-6"
          >
            <h3 className="font-mono text-sm uppercase tracking-wider text-accent">
              {category.name}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-border bg-background/50 px-3 py-1 text-sm text-muted transition-[border-color,color,box-shadow] hover:border-accent/40 hover:text-foreground hover:shadow-[0_0_12px_rgba(6,182,212,0.08)]"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
