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
      <div className="grid items-start gap-8 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-12">
        <motion.div
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeIn}
          className="group relative order-2 overflow-hidden rounded border border-border transition-[border-color,box-shadow] hover:border-accent/30 hover:shadow-[0_8px_32px_rgba(6,182,212,0.1)] lg:order-none lg:row-span-2 lg:aspect-[4/5] lg:w-[220px] lg:shrink-0 aspect-[16/10] w-full sm:aspect-[2/1]"
        >
          <Image
            src={site.identity.aboutImage}
            alt={`${site.identity.name} portrait`}
            fill
            className="object-cover object-center brightness-105 transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 1024px) 100vw, 220px"
            priority
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/60 to-transparent lg:hidden"
          />
        </motion.div>

        <div className="order-1 lg:order-none">
          <SectionHeading
            title="About"
            subtitle="Building across hardware, software, and AI."
          />
        </div>

        <div className="order-3 lg:order-none lg:col-start-2 lg:row-start-2">
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
