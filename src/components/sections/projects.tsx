"use client";

import { useState } from "react";
import { Reveal } from "@/components/animations/reveal";
import { ProjectCard } from "./project-card";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

const filters = [
  { id: "all", label: "All Projects" },
  { id: "ml", label: "Machine Learning" },
  { id: "fullstack", label: "Full-Stack" },
  { id: "data", label: "Data Analytics" },
] as const;

export function Projects() {
  const [active, setActive] = useState<typeof filters[number]["id"]>("all");

  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="section-padding relative">
      <div className="container-max">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">04 — Projects</span>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Things I&apos;ve <span className="text-gradient">built end to end</span>
          </h2>
          <p className="mt-4 text-ink-muted">
            Six projects spanning machine learning, analytics, and full-stack engineering.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActive(f.id)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-all",
                active === f.id
                  ? "bg-gradient-to-r from-accent-violet to-accent-blue text-white shadow-glow"
                  : "border border-white/10 bg-white/[0.02] text-ink-muted hover:text-ink-primary"
              )}
            >
              {f.label}
            </button>
          ))}
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, idx) => (
            <Reveal key={project.id} delay={idx * 0.06}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
