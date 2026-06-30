"use client";

import Image from "next/image";
import { SectionHeading, SectionWrapper } from "@/components/SectionWrapper";
import { site } from "@/data/site";
import { fadeIn, viewportOnce } from "@/lib/motion";
import { motion, useReducedMotion } from "framer-motion";

export default function About() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <SectionWrapper id="about" ariaLabel="About">
      <div className="grid items-center gap-12 lg:grid-cols-[auto_1fr]">
        <motion.div
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeIn}
          className="group relative mx-auto aspect-[4/5] w-[220px] shrink-0 overflow-hidden rounded border border-border transition-[border-color,box-shadow] hover:border-accent/30 hover:shadow-[0_8px_32px_rgba(6,182,212,0.1)] lg:mx-0"
        >
          <Image
            src={site.identity.aboutImage}
            alt={`${site.identity.name} portrait`}
            fill
            className="object-cover brightness-105 transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="220px"
            priority
          />
        </motion.div>

        <div>
          <SectionHeading
            title="About"
            subtitle="Building across hardware, software, and AI."
          />
          <p className="text-lg leading-relaxed text-muted">{site.identity.bio}</p>
          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="card-surface p-4">
              <dt className="text-xs font-mono uppercase tracking-wider text-accent">
                Education
              </dt>
              <dd className="mt-1 text-sm">
                {site.education.degree}
                <span className="block text-muted">
                  {site.education.honors} · {site.education.graduation}
                </span>
              </dd>
            </div>
            <div className="card-surface p-4">
              <dt className="text-xs font-mono uppercase tracking-wider text-accent">
                Focus
              </dt>
              <dd className="mt-1 text-sm">
                AI systems, full-stack engineering, embedded hardware
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </SectionWrapper>
  );
}
