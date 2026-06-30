"use client";

import { site } from "@/data/site";
import { SocialIcon } from "@/components/SocialIcon";
import { fadeIn } from "@/lib/motion";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, FileDown } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const gridY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="home"
      aria-label="Introduction"
      className="relative flex min-h-screen scroll-mt-24 flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-16 text-center sm:px-8"
    >
      <motion.div
        aria-hidden="true"
        style={prefersReducedMotion ? undefined : { y: gridY }}
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.06)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(6,182,212,0.08),transparent_60%)]"
      />

      <motion.div
        initial={prefersReducedMotion ? false : "hidden"}
        animate="visible"
        variants={fadeIn}
        style={prefersReducedMotion ? undefined : { opacity: contentOpacity }}
        className="relative z-10 max-w-3xl"
      >
        <motion.p
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-accent"
        >
          Portfolio
        </motion.p>
        <motion.h1
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
        >
          {site.identity.name}
        </motion.h1>
        <motion.p
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.35 }}
          className="mt-6 text-lg text-muted sm:text-xl"
        >
          {site.identity.tagline}
        </motion.p>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a href={site.identity.resumePath} className="btn-primary">
            <FileDown size={16} aria-hidden="true" />
            Resume
          </a>
          <a
            href={site.socials[0].href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <SocialIcon social={site.socials[0]} size={16} />
            GitHub
          </a>
          <a href="#contact" className="btn-secondary">
            Contact
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        initial={prefersReducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="absolute bottom-8 text-muted transition-colors hover:text-accent"
        aria-label="Scroll to about section"
      >
        <ArrowDown
          size={24}
          className={prefersReducedMotion ? "" : "animate-bounce"}
        />
      </motion.a>
    </section>
  );
}
