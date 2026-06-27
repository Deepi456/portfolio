import { GraduationCap, MapPin, Sparkles } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { profile } from "@/data/profile";
import { achievementStats } from "@/data/education";

export function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="container-max grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal direction="right">
          <span className="eyebrow">01 — About</span>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            From raw data to{" "}
            <span className="text-gradient">shipped products</span>
          </h2>

          <div className="mt-8 flex flex-col gap-4">
            <div className="flex items-center gap-3 text-sm text-ink-muted">
              <GraduationCap className="h-4 w-4 text-accent-violet" />
              B.Tech, Artificial Intelligence & Data Science
            </div>
            <div className="flex items-center gap-3 text-sm text-ink-muted">
              <MapPin className="h-4 w-4 text-accent-blue" />
              {profile.location}
            </div>
            <div className="flex items-center gap-3 text-sm text-ink-muted">
              <Sparkles className="h-4 w-4 text-accent-cyan" />
              CGPA 8.5 / 10
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-5">
            {achievementStats.map((stat) => (
              <div key={stat.id} className="glass rounded-2xl p-5">
                <div className="font-display text-3xl font-bold text-gradient">
                  {stat.value}
                  {stat.suffix}
                </div>
                <div className="mt-1 font-mono text-xs text-ink-faint">{stat.label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal direction="left" delay={0.1}>
          <div className="glass-strong rounded-3xl p-8 sm:p-10">
            {profile.aboutParagraphs.map((para, i) => (
              <p
                key={i}
                className={`text-base leading-relaxed text-ink-muted sm:text-[17px] ${
                  i !== profile.aboutParagraphs.length - 1 ? "mb-6" : ""
                }`}
              >
                {para}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
