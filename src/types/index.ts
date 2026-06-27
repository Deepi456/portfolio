export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail" | "phone" | "mapPin";
}

export interface SkillItem {
  name: string;
  level: number; // 0-100, used for proficiency indicator
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string; // lucide icon name
  skills: SkillItem[];
}

export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  duration: string;
  location?: string;
  responsibilities: string[];
  technologies: string[];
}

export interface ProjectEntry {
  id: string;
  title: string;
  duration?: string;
  description: string;
  features: string[];
  technologies: string[];
  challenges: string;
  solutions: string;
  githubUrl?: string;
  liveUrl?: string;
  gradient: [string, string]; // for placeholder artwork
  category: "ml" | "fullstack" | "data";
}

export interface EducationEntry {
  id: string;
  institution: string;
  duration: string;
  qualification: string;
  detail: string;
}

export interface CertificationEntry {
  id: string;
  title: string;
  issuer: string;
}

export interface AchievementStat {
  id: string;
  value: number;
  suffix?: string;
  label: string;
}
