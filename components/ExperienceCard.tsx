"use client";

import Image from "next/image";
import { highlightMetrics } from "@/lib/format";
import { staggerItem } from "@/lib/motion";
import type { Experience as ExperienceType } from "@/data/site";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface ExperienceCardProps {
  experience: ExperienceType;
  index: number;
}

export default function ExperienceCard({
  experience,
  index,
}: ExperienceCardProps) {
  const [expanded, setExpanded] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      variants={prefersReducedMotion ? undefined : staggerItem}
      className="group card-surface card-lift relative p-6"
    >
      <div
        aria-hidden="true"
        className="absolute left-0 top-6 hidden h-[calc(100%-3rem)] w-px bg-border lg:block"
      />
      <div
        aria-hidden="true"
        className="absolute -left-[5px] top-8 hidden h-2.5 w-2.5 rounded-full border-2 border-accent bg-background transition-shadow group-hover:shadow-[0_0_8px_var(--accent-glow)] lg:block"
      />

      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded border border-border bg-background transition-colors group-hover:border-accent/30">
            {experience.logo ? (
              <Image
                src={experience.logo}
                alt={`${experience.company} logo`}
                width={48}
                height={48}
                className="h-full w-full object-contain p-1"
              />
            ) : (
              <span className="font-mono text-sm font-semibold text-accent">
                {experience.monogram}
              </span>
            )}
          </div>
          <div>
            <h3 className="text-lg font-semibold transition-colors group-hover:text-accent">
              {experience.role}
            </h3>
            <p className="text-accent">{experience.company}</p>
            <p className="mt-1 text-sm text-muted">
              {experience.dates} · {experience.location}
            </p>
          </div>
        </div>

        <button
          type="button"
          className="flex items-center gap-1 self-start text-sm text-muted transition-colors hover:text-accent lg:hidden"
          onClick={() => setExpanded((value) => !value)}
          aria-expanded={expanded}
          aria-controls={`experience-bullets-${experience.id}`}
        >
          {expanded ? "Hide details" : "Show details"}
          <ChevronDown
            size={16}
            className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      <ul
        id={`experience-bullets-${experience.id}`}
        className={`mt-5 space-y-3 border-t border-border/60 pt-5 text-sm leading-relaxed text-muted ${
          expanded ? "block" : "hidden lg:block"
        }`}
      >
        {experience.bullets.map((bullet, bulletIndex) => (
          <li key={bulletIndex} className="flex gap-3">
            <span
              aria-hidden="true"
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
            />
            <span>{highlightMetrics(bullet)}</span>
          </li>
        ))}
      </ul>

      <span
        aria-hidden="true"
        className="absolute right-4 top-4 font-mono text-xs text-border transition-colors group-hover:text-accent/40"
      >
        {String(index + 1).padStart(2, "0")}
      </span>
    </motion.article>
  );
}
