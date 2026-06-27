"use client";

import { motion } from "framer-motion";
import {
  Code2,
  BrainCircuit,
  FlaskConical,
  BarChart3,
  Database,
  Layers,
  Wrench,
  Users,
} from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { skillCategories } from "@/data/skills";

const iconMap = {
  Code2,
  BrainCircuit,
  FlaskConical,
  BarChart3,
  Database,
  Layers,
  Wrench,
  Users,
};

export function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="container-max">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">02 — Skills</span>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            A toolkit built for{" "}
            <span className="text-gradient">both sides of the stack</span>
          </h2>
          <p className="mt-4 text-ink-muted">
            From model evaluation to production APIs — the tools I reach for most.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, idx) => {
            const Icon = iconMap[category.icon as keyof typeof iconMap];
            return (
              <Reveal key={category.id} delay={idx * 0.06}>
                <motion.div
                  whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="glass group h-full rounded-2xl p-6 transition-shadow duration-300 hover:shadow-glow"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      initial={{ scale: 0, rotate: -90 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 200, damping: 14, delay: idx * 0.06 }}
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent-violet/20 to-accent-blue/20 text-accent-violet transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                    >
                      <Icon className="h-5 w-5" />
                    </motion.div>
                    <h3 className="font-display text-lg font-semibold">{category.title}</h3>
                  </div>

                  <div className="mt-6 flex flex-col gap-3.5">
                    {category.skills.map((skill, skillIdx) => (
                      <div key={skill.name}>
                        <div className="mb-1.5 flex items-center justify-between">
                          <span className="text-sm text-ink-muted">{skill.name}</span>
                        </div>
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.9,
                              ease: "easeOut",
                              delay: 0.1 + skillIdx * 0.05,
                            }}
                            className="h-full rounded-full bg-gradient-to-r from-accent-violet to-accent-blue"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
