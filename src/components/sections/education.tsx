import { GraduationCap } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { education } from "@/data/education";

export function Education() {
  return (
    <section id="education" className="section-padding relative">
      <div className="container-max">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">05 — Education</span>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Academic <span className="text-gradient">foundation</span>
          </h2>
        </Reveal>

        <div className="relative mx-auto mt-16 max-w-2xl">
          <div className="absolute left-[19px] top-2 h-[calc(100%-16px)] w-px bg-gradient-to-b from-accent-blue via-accent-cyan to-transparent" />

          <div className="flex flex-col gap-10">
            {education.map((edu, idx) => (
              <Reveal key={edu.id} delay={idx * 0.1}>
                <div className="relative flex gap-6">
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent-blue/40 bg-void shadow-glow-blue">
                    <GraduationCap className="h-4 w-4 text-accent-blue" />
                  </div>
                  <div className="glass card-hover w-full rounded-2xl p-6">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <h3 className="font-display text-lg font-semibold">{edu.institution}</h3>
                      <span className="font-mono text-xs text-ink-faint">{edu.duration}</span>
                    </div>
                    <p className="mt-2 text-sm text-accent-blue">{edu.qualification}</p>
                    <p className="mt-1 font-mono text-sm text-ink-muted">{edu.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
