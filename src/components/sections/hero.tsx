"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown, FileDown, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/animations/magnetic";
import { useTypingAnimation } from "@/hooks/use-typing-animation";
import { usePrefersReducedMotion } from "@/hooks/use-media-query";
import { profile, socialLinks } from "@/data/profile";

const ParticleBackground = dynamic(
  () => import("@/components/three/particle-background").then((m) => m.ParticleBackground),
  { ssr: false }
);

const iconMap = { github: Github, linkedin: Linkedin, mail: Mail };

const skillTokens = [
  "Python",
  "Scikit-learn",
  "React.js",
  "Machine Learning",
  "SQL",
  "Node.js",
  "Power BI",
  "Pandas",
];

const heroStats = [
  { value: "8.5", suffix: "/10", label: "CGPA — AI & DS" },
  { value: "6", suffix: "+", label: "Projects Shipped" },
  { value: "3", suffix: "", label: "Internships" },
  { value: "12", suffix: "K+", label: "Records Analyzed" },
];

export function Hero() {
  const reducedMotion = usePrefersReducedMotion();
  const typed = useTypingAnimation({ words: skillTokens, pauseDuration: 1400 });

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-32 sm:px-10 lg:px-20"
    >
      <div className="absolute inset-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_60%_60%_at_50%_30%,black,transparent)]" />
      <ParticleBackground reducedMotion={reducedMotion ?? false} />

      <div className="container-max relative z-10 grid w-full items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5"
          >
            <span className="h-2 w-2 animate-pulse-glow rounded-full bg-accent-cyan" />
            <span className="font-mono text-xs text-ink-muted">
              Open to Data Science & SDE roles
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m{" "}
            <span className="text-gradient">{profile.name.split(" ")[0]}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 flex h-10 items-center font-mono text-lg text-ink-muted sm:text-xl"
          >
            <span className="mr-2 text-ink-faint">{">"}</span>
            <span>{typed}</span>
            <span className="ml-1 inline-block h-5 w-[2px] animate-pulse bg-accent-violet" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <Button
                size="lg"
                onClick={() =>
                  document.getElementById("resume")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View Resume
              </Button>
            </Magnetic>
            <Magnetic>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open("/resume/Deepika_R_Resume.pdf", "_blank")}
              >
                <FileDown className="h-4 w-4" />
                Download Resume
              </Button>
            </Magnetic>
            <Magnetic>
              <Button
                variant="ghost"
                size="lg"
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Send className="h-4 w-4" />
                Contact Me
              </Button>
            </Magnetic>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-10 flex items-center gap-4"
          >
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon as keyof typeof iconMap];
              return (
                <Magnetic key={link.label} strength={0.4}>
                  <a
                    href={link.href}
                    target={link.icon !== "mail" ? "_blank" : undefined}
                    rel="noreferrer"
                    aria-label={link.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-ink-muted transition-colors hover:border-accent-violet/50 hover:text-accent-violet"
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </a>
                </Magnetic>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative hidden lg:block"
        >
          <div className="glass-strong relative mx-auto w-full max-w-md rounded-3xl p-7">
            <div className="absolute -top-5 -right-5 rounded-2xl border border-white/10 bg-void/80 px-4 py-3 font-mono text-xs shadow-glow backdrop-blur-xl">
              <span className="text-accent-cyan">model.predict()</span>
              <br />
              <span className="text-ink-faint">{"->"} fraud: False</span>
            </div>
            <div className="absolute -bottom-5 -left-5 animate-float rounded-2xl border border-white/10 bg-void/80 px-4 py-3 font-mono text-xs shadow-glow-blue backdrop-blur-xl">
              <span className="text-accent-blue">accuracy: 0.94</span>
            </div>

            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="font-mono text-xs uppercase tracking-wider text-ink-faint">
                Profile Snapshot
              </span>
              <span className="flex items-center gap-1.5 font-mono text-[10px] text-accent-cyan">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan animate-pulse" />
                Live
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 py-6">
              {heroStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.08 }}
                  className="rounded-xl bg-white/[0.03] p-4"
                >
                  <div className="font-display text-3xl font-bold text-gradient">
                    {stat.value}
                    <span className="text-xl">{stat.suffix}</span>
                  </div>
                  <div className="mt-1 font-mono text-[11px] text-ink-faint">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 border-t border-white/10 pt-5">
              {["Python", "React.js", "Scikit-learn", "SQL", "Node.js"].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 font-mono text-[10px] text-ink-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-ink-faint"
        aria-label="Scroll to About section"
      >
        <ArrowDown className="h-5 w-5" />
      </motion.button>
    </section>
  );
}
