"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, FileSearch, ChevronDown, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { ProjectEntry } from "@/types";

export function ProjectCard({ project }: { project: ProjectEntry }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="card-hover glass group flex flex-col overflow-hidden rounded-2xl">
      {/* Placeholder visual */}
      <div
        className="relative flex h-48 items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${project.gradient[0]}33, ${project.gradient[1]}33)`,
        }}
      >
        <div
          className="absolute inset-0 opacity-40 bg-grid-pattern"
          style={{ maskImage: "radial-gradient(circle, black, transparent 70%)" }}
        />
        <Sparkles
          className="h-12 w-12 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12"
          style={{ color: project.gradient[0] }}
        />
        <div className="absolute right-3 top-3">
          <Badge variant="outline" className="capitalize">
            {project.category === "ml"
              ? "Machine Learning"
              : project.category === "fullstack"
              ? "Full-Stack"
              : "Data Analytics"}
          </Badge>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold leading-snug">{project.title}</h3>
        </div>
        {project.duration && (
          <span className="mt-1 font-mono text-xs text-ink-faint">{project.duration}</span>
        )}

        <p className="mt-3 text-sm leading-relaxed text-ink-muted">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] text-ink-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <button
          onClick={() => setExpanded((p) => !p)}
          className="mt-5 flex items-center gap-1.5 text-sm font-medium text-accent-violet"
        >
          {expanded ? "Hide details" : "View case study"}
          <ChevronDown
            className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`}
          />
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-4 flex flex-col gap-4 border-t border-white/10 pt-4">
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-accent-cyan">
                    Key Features
                  </h4>
                  <ul className="mt-2 flex flex-col gap-1.5">
                    {project.features.map((f, i) => (
                      <li key={i} className="flex gap-2 text-xs leading-relaxed text-ink-muted">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-cyan" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-accent-violet">
                    Challenge
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-ink-muted">{project.challenges}</p>
                </div>
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-accent-blue">
                    Solution
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-ink-muted">{project.solutions}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-6 flex flex-wrap gap-2 pt-1">
          {project.githubUrl && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open(project.githubUrl, "_blank")}
            >
              <Github className="h-3.5 w-3.5" />
              GitHub
            </Button>
          )}
          {project.liveUrl ? (
            <Button variant="outline" size="sm" onClick={() => window.open(project.liveUrl, "_blank")}>
              <ExternalLink className="h-3.5 w-3.5" />
              Live Demo
            </Button>
          ) : (
            <Button variant="ghost" size="sm" disabled title="Demo not deployed yet">
              <ExternalLink className="h-3.5 w-3.5" />
              Live Demo
            </Button>
          )}
          <Button variant="ghost" size="sm" onClick={() => setExpanded(true)}>
            <FileSearch className="h-3.5 w-3.5" />
            Case Study
          </Button>
        </div>
      </div>
    </div>
  );
}
