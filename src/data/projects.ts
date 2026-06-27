import type { ProjectEntry } from "@/types";
import { profile } from "./profile";

export const projects: ProjectEntry[] = [
  {
    id: "fraud-detection",
    title: "Fraud Detection Using Machine Learning",
    description:
      "A classification system trained on 7,000+ financial transaction records to identify fraud-indicative patterns, built with a deliberate focus on reliability over raw accuracy on heavily imbalanced real-world data.",
    features: [
      "Feature engineering pipeline to surface fraud-indicative patterns from raw transaction fields",
      "Class imbalance handling to keep the model reliable on real-world transaction distributions",
      "Classification models trained and evaluated using standard performance metrics",
    ],
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Feature Engineering"],
    challenges:
      "Financial fraud datasets are inherently imbalanced — fraudulent transactions are a tiny fraction of the total, so a naive model can score well by simply predicting 'not fraud' every time.",
    solutions:
      "Addressed the imbalance directly during preprocessing before model training, then evaluated models on metrics suited to imbalanced classification rather than raw accuracy, ensuring the model stayed useful on real transaction patterns.",
    githubUrl: profile.github,
    gradient: ["#7C5CFF", "#4D8AFF"],
    category: "ml",
  },
  {
    id: "ecommerce-dashboard",
    title: "E-Commerce Sales Dashboard & Customer Analytics",
    description:
      "An interactive Power BI analytics layer over 3,000+ sales records, surfacing revenue trends and customer spending patterns for data-driven business decisions.",
    features: [
      "Interactive dashboards visualizing monthly sales trends",
      "Customer segmentation views to highlight spending patterns",
      "Cleaned, transformed transactional data pipeline feeding all reporting views",
    ],
    technologies: ["Python", "SQL", "Power BI", "Pandas"],
    challenges:
      "Raw transactional sales data was inconsistent and not analysis-ready — it needed substantial cleaning before any trend could be trusted.",
    solutions:
      "Built a transformation pass to clean and standardize the raw data ahead of reporting, ensuring every dashboard view reflected accurate, consistent figures rather than propagating source-data errors.",
    githubUrl: profile.github,
    gradient: ["#4D8AFF", "#5CE1E6"],
    category: "data",
  },
  {
    id: "trustlink",
    title: "TrustLink — Centralized Donation Management System",
    description:
      "A full-stack web application connecting three stakeholder roles — donors, NGOs, and orphanages — around transparent, trackable donations.",
    features: [
      "Three-sided stakeholder model: donors, NGOs, and orphanages",
      "Request management workflows to coordinate across stakeholder groups",
      "End-to-end donation tracking for transparency and accountability",
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    challenges:
      "Coordinating three distinct stakeholder roles in one system meant the data model and workflows had to stay clear for each side without becoming three disconnected experiences.",
    solutions:
      "Designed dedicated request-management workflows per stakeholder group on a shared tracking backbone, so donors, NGOs, and orphanages each get a relevant view of the same transparent donation lifecycle.",
    githubUrl: profile.github,
    gradient: ["#7C5CFF", "#5CE1E6"],
    category: "fullstack",
  },
  {
    id: "smart-complaint-assistant",
    title: "Smart Complaint Assistant — AI-Based Civic Issue Management System",
    description:
      "A full-stack civic complaint management platform built to make reporting, tracking, and resolving local issues straightforward at scale.",
    features: [
      "Issue reporting and tracking workflows for civic complaints",
      "Resolution tracking to streamline the path from report to fix",
      "Architecture designed to scale across multiple complaint categories",
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    challenges:
      "Civic complaint systems need to handle many different issue categories without the underlying architecture becoming brittle as new categories get added.",
    solutions:
      "Designed the platform architecture up front for scalable handling of multiple complaint categories, keeping reporting, tracking, and resolution workflows consistent regardless of issue type.",
    githubUrl: profile.github,
    gradient: ["#4D8AFF", "#7C5CFF"],
    category: "fullstack",
  },
  {
    id: "covid-analysis",
    title: "COVID-19 Data Analysis & Visualization",
    duration: "Dec 2025 – Jan 2026",
    description:
      "An exploratory analysis of a 2,000-row COVID-19 dataset, turning raw case data into clear visual trend reporting.",
    features: [
      "Full exploratory data analysis pipeline on raw COVID-19 case data",
      "Data cleaning and processing for accurate analytical reporting",
      "Trend visualizations built with Matplotlib and Seaborn",
    ],
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    challenges:
      "Public health datasets often contain inconsistencies and gaps that can distort trend analysis if not handled carefully before visualization.",
    solutions:
      "Cleaned and processed the raw dataset before any visualization step, so the resulting trend charts and insights were grounded in accurate, analysis-ready data.",
    githubUrl: profile.github,
    gradient: ["#5CE1E6", "#7C5CFF"],
    category: "data",
  },
  {
    id: "smartpass",
    title: "SmartPass — QR-Based Digital Bus Pass Management System",
    duration: "Jun 2024 – Aug 2024",
    description:
      "A digital bus pass system using QR code generation and verification for secure, low-friction student authentication.",
    features: [
      "QR code generation and verification for secure pass authentication",
      "Online pass management with real-time database-backed validation",
      "Automated entry validation via QR scanning, cutting manual checks",
    ],
    technologies: ["JavaScript", "React", "Database Integration"],
    challenges:
      "Manual verification of student bus passes was slow and error-prone at scale, and any digital replacement needed to stay secure against pass misuse.",
    solutions:
      "Paired QR-based generation and scanning with real-time database validation, so entry checks became automatic while still verifying authenticity against live records.",
    githubUrl: profile.github,
    gradient: ["#7C5CFF", "#4D8AFF"],
    category: "fullstack",
  },
];
