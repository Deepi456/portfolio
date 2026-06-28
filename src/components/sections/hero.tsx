"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
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
          className="relative order-first mx-auto lg:order-last lg:mx-0"
        >
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 -z-10 h-[110%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-80 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(124,92,255,0.35) 0%, rgba(77,138,255,0.22) 45%, transparent 75%)",
            }}
          />

          <motion.div
            className="group relative mx-auto h-[340px] w-[300px] sm:h-[440px] sm:w-[380px] lg:h-[78vh] lg:max-h-[640px] lg:w-[420px]"
            animate={reducedMotion ? undefined : { y: [0, -7, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.02 }}
          >
            <div
              className="relative h-full w-full transition-[filter] duration-500 group-hover:brightness-[1.08]"
              style={{
                maskImage:
                  "radial-gradient(ellipse 72% 88% at 50% 42%, black 62%, transparent 100%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 72% 88% at 50% 42%, black 62%, transparent 100%)",
              }}
            >
              <Image
                src="/images/deepika-portrait.png"
                alt={`${profile.name} — ${profile.title}`}
                fill
                priority
                sizes="(max-width: 768px) 300px, (max-width: 1024px) 380px, 420px"
                className="object-contain object-bottom drop-shadow-[0_0_50px_rgba(124,92,255,0.25)] transition-[filter] duration-500 group-hover:drop-shadow-[0_0_70px_rgba(124,92,255,0.4)]"
              />
            </div>
          </motion.div>
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