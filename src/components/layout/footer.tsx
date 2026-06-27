"use client";

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Magnetic } from "@/components/animations/magnetic";
import { profile, socialLinks } from "@/data/profile";

const iconMap = { github: Github, linkedin: Linkedin, mail: Mail };

const footerNav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.06] px-6 py-14 sm:px-10 lg:px-20">
      <div className="container-max flex flex-col gap-10">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row">
          <div>
            <button
              onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
              className="font-display text-2xl font-semibold tracking-tight"
            >
              {profile.name}
              <span className="text-gradient">.</span>
            </button>
            <p className="mt-3 max-w-xs text-sm text-ink-muted">{profile.title}</p>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon as keyof typeof iconMap];
              return (
                <Magnetic key={link.label} strength={0.4}>
                  <a
                    href={link.href}
                    target={link.icon !== "mail" ? "_blank" : undefined}
                    rel="noreferrer"
                    aria-label={link.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-ink-muted transition-colors hover:border-accent-violet/50 hover:text-accent-violet"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </Magnetic>
              );
            })}
          </div>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-3 border-t border-white/[0.06] pt-8">
          {footerNav.map((item) => (
            <button
              key={item.href}
              onClick={() => document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" })}
              className="text-sm text-ink-muted transition-colors hover:text-accent-violet"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="font-mono text-xs text-ink-faint">
            © {year} {profile.name}. Built with Next.js & care.
          </p>
          <Magnetic strength={0.4}>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-ink-muted transition-colors hover:border-accent-violet/50 hover:text-accent-violet"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </Magnetic>
        </div>
      </div>
    </footer>
  );
}
