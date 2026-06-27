import { Trophy, FolderGit2, Building2, Award, DatabaseZap } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { AnimatedCounter } from "@/components/animations/animated-counter";
import { achievementStats } from "@/data/education";

const statIcons = [FolderGit2, Building2, DatabaseZap, Award];

const milestones = [
  {
    icon: Trophy,
    title: "Oracle Analytics Cloud 2025 Certified Professional",
    detail: "Earned a professional-level certification validating analytics platform expertise.",
  },
  {
    icon: Award,
    title: "Databricks Generative AI Fundamentals Accreditation",
    detail: "Completed Databricks Academy's accreditation in generative AI fundamentals.",
  },
  {
    icon: Building2,
    title: "Deloitte Data Analytics Job Simulation",
    detail: "Completed a real-world job simulation in data analytics workflows.",
  },
];

export function Achievements() {
  return (
    <section className="section-padding relative">
      <div className="container-max">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Highlights</span>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Milestones at a <span className="text-gradient">glance</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {achievementStats.map((stat, idx) => {
            const Icon = statIcons[idx % statIcons.length];
            return (
              <Reveal key={stat.id} delay={idx * 0.08}>
                <div className="glass-strong card-hover rounded-2xl p-6 text-center">
                  <Icon className="mx-auto h-6 w-6 text-accent-violet" />
                  <div className="mt-4 font-display text-4xl font-bold text-gradient">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="mt-2 font-mono text-xs text-ink-faint">{stat.label}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-5 sm:grid-cols-3">
          {milestones.map((m, idx) => (
            <Reveal key={m.title} delay={idx * 0.1}>
              <div className="glass card-hover h-full rounded-2xl p-6">
                <m.icon className="h-5 w-5 text-accent-cyan" />
                <h3 className="mt-4 font-display text-sm font-semibold leading-snug">{m.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-ink-muted">{m.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
