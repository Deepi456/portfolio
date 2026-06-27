"use client";

import { FileDown, ExternalLink, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { Magnetic } from "@/components/animations/magnetic";
import { Button } from "@/components/ui/button";

export function Resume() {
  return (
    <section id="resume" className="section-padding relative">
      <div className="container-max">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">07 — Resume</span>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            The <span className="text-gradient">full picture</span>
          </h2>
          <p className="mt-4 text-ink-muted">
            Everything on this page, condensed into a single ATS-ready document.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-12 max-w-3xl">
          <div className="glass-strong overflow-hidden rounded-3xl">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-violet/15 text-accent-violet">
                  <FileDown className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-display text-sm font-semibold">Deepika_R_Resume.pdf</p>
                  <p className="font-mono text-xs text-ink-faint">2 pages · Updated 2026</p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-cyan/30 bg-accent-cyan/10 px-3 py-1.5 font-mono text-xs text-accent-cyan">
                <ShieldCheck className="h-3.5 w-3.5" />
                ATS-Ready
              </span>
            </div>

            <div className="relative aspect-[8.5/11] w-full bg-white/[0.02]">
              <iframe
                src="/resume/Deepika_R_Resume.pdf#view=FitH"
                title="Deepika R Resume Preview"
                className="absolute inset-0 h-full w-full"
                loading="lazy"
              />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 p-6">
              <Magnetic>
                <Button size="lg" onClick={() => window.open("/resume/Deepika_R_Resume.pdf", "_blank")}>
                  <FileDown className="h-4 w-4" />
                  Download Resume
                </Button>
              </Magnetic>
              <Magnetic>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.open("/resume/Deepika_R_Resume.pdf", "_blank")}
                >
                  <ExternalLink className="h-4 w-4" />
                  Open in New Tab
                </Button>
              </Magnetic>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
