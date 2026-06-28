"use client";

import { useEffect, useState, useCallback, type ComponentType } from "react";
import { Command } from "cmdk";
import {
  User,
  Briefcase,
  FolderGit2,
  GraduationCap,
  Award,
  Mail,
  Github,
  Linkedin,
  FileDown,
  Home,
  Code2,
} from "lucide-react";
import { profile } from "@/data/profile";

interface CommandItem {
  id: string;
  label: string;
  icon: ComponentType<{ className?: string }>;
  action: () => void;
  group: string;
}

export function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const scrollTo = useCallback((id: string) => {
    setOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 80);
  }, []);

  const navItems: CommandItem[] = [
    { id: "home", label: "Go to Home", icon: Home, action: () => scrollTo("home"), group: "Navigate" },
    { id: "about", label: "Go to About", icon: User, action: () => scrollTo("about"), group: "Navigate" },
    { id: "skills", label: "Go to Skills", icon: Code2, action: () => scrollTo("skills"), group: "Navigate" },
    { id: "experience", label: "Go to Experience", icon: Briefcase, action: () => scrollTo("experience"), group: "Navigate" },
    { id: "projects", label: "Go to Projects", icon: FolderGit2, action: () => scrollTo("projects"), group: "Navigate" },
    { id: "education", label: "Go to Education", icon: GraduationCap, action: () => scrollTo("education"), group: "Navigate" },
    { id: "certifications", label: "Go to Certifications", icon: Award, action: () => scrollTo("certifications"), group: "Navigate" },
    { id: "contact", label: "Go to Contact", icon: Mail, action: () => scrollTo("contact"), group: "Navigate" },
  ];

  const actionItems: CommandItem[] = [
    {
      id: "resume",
      label: "Download Resume",
      icon: FileDown,
      action: () => {
        setOpen(false);
        window.open("/resume/Deepika_R_Resume.pdf", "_blank");
      },
      group: "Actions",
    },
    {
      id: "github",
      label: "Open GitHub Profile",
      icon: Github,
      action: () => {
        setOpen(false);
        window.open(profile.github, "_blank");
      },
      group: "Actions",
    },
    {
      id: "linkedin",
      label: "Open LinkedIn Profile",
      icon: Linkedin,
      action: () => {
        setOpen(false);
        window.open(profile.linkedin, "_blank");
      },
      group: "Actions",
    },
    {
      id: "email",
      label: `Email — ${profile.email}`,
      icon: Mail,
      action: () => {
        setOpen(false);
        window.location.href = `mailto:${profile.email}`;
      },
      group: "Actions",
    },
  ];

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-start justify-center bg-black/70 backdrop-blur-sm pt-[12vh]"
      onClick={() => setOpen(false)}
    >
      <Command
        onClick={(e) => e.stopPropagation()}
        className="glass-strong w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
        label="Command Palette"
      >
        <div className="flex items-center border-b border-white/10 px-4">
          <Command.Input
            autoFocus
            placeholder="Type a command or search..."
            className="h-14 w-full bg-transparent text-sm text-ink-primary placeholder:text-ink-faint outline-none"
          />
          <kbd className="rounded-md border border-white/10 bg-white/5 px-1.5 py-0.5 text-[10px] font-mono text-ink-faint">
            ESC
          </kbd>
        </div>
        <Command.List className="max-h-[360px] overflow-y-auto p-2">
          <Command.Empty className="py-8 text-center text-sm text-ink-muted">
            No results found.
          </Command.Empty>

          <Command.Group heading="Navigate" className="px-2 py-1.5 text-xs font-mono uppercase tracking-wider text-ink-faint">
            {navItems.map((item) => (
              <Command.Item
                key={item.id}
                onSelect={item.action}
                className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-ink-primary aria-selected:bg-accent-violet/15 aria-selected:text-accent-violet"
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Command.Item>
            ))}
          </Command.Group>

          <Command.Group heading="Actions" className="px-2 py-1.5 text-xs font-mono uppercase tracking-wider text-ink-faint">
            {actionItems.map((item) => (
              <Command.Item
                key={item.id}
                onSelect={item.action}
                className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-ink-primary aria-selected:bg-accent-violet/15 aria-selected:text-accent-violet"
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Command.Item>
            ))}
          </Command.Group>
        </Command.List>
      </Command>
    </div>
  );
}