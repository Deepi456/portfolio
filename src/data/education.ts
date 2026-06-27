import type { EducationEntry, CertificationEntry, AchievementStat } from "@/types";

export const education: EducationEntry[] = [
  {
    id: "sns-college",
    institution: "SNS College of Engineering, Coimbatore, TN",
    duration: "2023 – Present",
    qualification: "B.Tech in Artificial Intelligence and Data Science",
    detail: "CGPA: 8.5 / 10",
  },
  {
    id: "mani-hss",
    institution: "Mani Higher Secondary School, Coimbatore, TN",
    duration: "2020 – 2023",
    qualification: "Higher Secondary Certificate (HSC) & SSLC",
    detail: "HSC — 88% | SSLC — 83%",
  },
];

export const certifications: CertificationEntry[] = [
  {
    id: "oracle-analytics",
    title: "Oracle Analytics Cloud 2025 Certified Professional",
    issuer: "Oracle",
  },
  {
    id: "databricks-genai",
    title: "Generative AI Fundamentals",
    issuer: "Databricks Academy Accreditation",
  },
  {
    id: "deloitte-job-sim",
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte",
  },
  {
    id: "csharp-foundations",
    title: "Foundational C# with Microsoft",
    issuer: "freeCodeCamp & Microsoft",
  },
];

// Achievement stats are derived directly from quantifiable facts stated in
// the resume (records analyzed, internships, projects) — nothing invented.
export const achievementStats: AchievementStat[] = [
  { id: "projects", value: 6, suffix: "+", label: "Projects Shipped" },
  { id: "internships", value: 3, label: "Internships Completed" },
  { id: "records", value: 12, suffix: "K+", label: "Data Records Analyzed" },
  { id: "certifications", value: 4, label: "Certifications Earned" },
];
