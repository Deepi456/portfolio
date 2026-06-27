"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { experiences } from "@/data/experience";

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 60%"],
  });
  const lineProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 24 });

  return (
    <section id="experience" className="section-padding relative">
      <div className="container-max">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">03 — Experience</span>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Where I&apos;ve <span className="text-gradient">put it to work</span>
          </h2>
          <p className="mt-4 text-ink-muted">
            Three internships, three different angles on the data-to-product pipeline.
          </p>
        </Reveal>

        <div ref={containerRef} className="relative mx-auto mt-20 max-w-3xl">
          <div className="absolute left-[19px] top-2 h-[calc(100%-16px)] w-px bg-white/[0.06] sm:left-6" />
          <motion.div
            style={{ scaleY: lineProgress }}
            className="absolute left-[19px] top-2 h-[calc(100%-16px)] w-px origin-top bg-gradient-to-b from-accent-violet via-accent-blue to-accent-cyan sm:left-6"
          />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, idx) => (
              <Reveal key={exp.id} delay={idx * 0.1}>
                <div className="relative flex gap-6 sm:gap-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 260, damping: 16, delay: idx * 0.1 }}
                    className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent-violet/40 bg-void shadow-glow sm:h-12 sm:w-12"
                  >
                    <Briefcase className="h-4 w-4 text-accent-violet sm:h-5 sm:w-5" />
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                    className="glass w-full rounded-2xl p-6 transition-shadow duration-300 hover:shadow-glow sm:p-7"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="font-display text-xl font-semibold">{exp.role}</h3>
                        <p className="mt-1 text-sm font-medium text-accent-blue">{exp.company}</p>
                      </div>
                      <span className="font-mono text-xs text-ink-faint">{exp.duration}</span>
                    </div>

                    {exp.location && (
                      <div className="mt-2 flex items-center gap-1.5 text-xs text-ink-faint">
                        <MapPin className="h-3 w-3" />
                        {exp.location}
                      </div>
                    )}

                    <ul className="mt-4 flex flex-col gap-2.5">
                      {exp.responsibilities.map((item, i) => (
                        <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-ink-muted">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-violet" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[11px] text-ink-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
