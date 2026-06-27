import { Award, BadgeCheck } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { certifications } from "@/data/education";

export function Certifications() {
  return (
    <section id="certifications" className="section-padding relative">
      <div className="container-max">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">06 — Certifications</span>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Credentials I&apos;ve <span className="text-gradient">earned</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, idx) => (
            <Reveal key={cert.id} delay={idx * 0.08}>
              <div className="card-hover glass group relative flex h-full flex-col items-start gap-4 rounded-2xl p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-violet/20 to-accent-cyan/20 text-accent-violet">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="font-display text-base font-semibold leading-snug">
                  {cert.title}
                </h3>
                <div className="mt-auto flex items-center gap-1.5 font-mono text-xs text-ink-faint">
                  <BadgeCheck className="h-3.5 w-3.5 text-accent-cyan" />
                  {cert.issuer}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
