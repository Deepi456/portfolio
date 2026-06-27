import type { SkillCategory } from "@/types";

// Proficiency levels are reasonable estimations based on depth of usage
// described in the resume (frequency across projects/experience), not
// self-reported numeric scores — none were given in the source resume.
export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    icon: "Code2",
    skills: [
      { name: "Python", level: 90 },
      { name: "SQL", level: 80 },
      { name: "JavaScript", level: 80 },
      { name: "Java", level: 65 },
      { name: "HTML", level: 85 },
      { name: "CSS", level: 80 },
    ],
  },
  {
    id: "ml",
    title: "Machine Learning",
    icon: "BrainCircuit",
    skills: [
      { name: "Machine Learning", level: 85 },
      { name: "Scikit-learn", level: 85 },
      { name: "Feature Engineering", level: 80 },
      { name: "Model Evaluation", level: 80 },
      { name: "Classification", level: 80 },
      { name: "Data Preprocessing", level: 85 },
      { name: "TensorFlow (working knowledge)", level: 55 },
      { name: "Keras (working knowledge)", level: 55 },
      { name: "NLP Fundamentals", level: 50 },
    ],
  },
  {
    id: "data-science",
    title: "Data Science",
    icon: "FlaskConical",
    skills: [
      { name: "Exploratory Data Analysis", level: 85 },
      { name: "Statistical Evaluation", level: 75 },
      { name: "Predictive Modeling", level: 80 },
      { name: "Data Structures & Algorithms", level: 75 },
      { name: "Problem Solving", level: 85 },
    ],
  },
  {
    id: "analytics",
    title: "Data Analytics & Visualization",
    icon: "BarChart3",
    skills: [
      { name: "Pandas", level: 90 },
      { name: "NumPy", level: 85 },
      { name: "Matplotlib", level: 80 },
      { name: "Seaborn", level: 80 },
      { name: "Power BI", level: 80 },
      { name: "Data Cleaning", level: 85 },
      { name: "Tableau (familiarity)", level: 45 },
      { name: "Microsoft Excel", level: 75 },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    icon: "Database",
    skills: [
      { name: "MongoDB", level: 75 },
      { name: "Database Integration", level: 75 },
      { name: "REST APIs", level: 80 },
    ],
  },
  {
    id: "frameworks",
    title: "Frameworks & Full-Stack",
    icon: "Layers",
    skills: [
      { name: "React.js", level: 85 },
      { name: "Node.js", level: 75 },
      { name: "Express.js", level: 75 },
      { name: "Object-Oriented Programming", level: 80 },
    ],
  },
  {
    id: "tools",
    title: "Developer Tools",
    icon: "Wrench",
    skills: [
      { name: "Git / GitHub", level: 85 },
      { name: "Jupyter Notebook", level: 90 },
      { name: "APIs", level: 80 },
    ],
  },
  {
    id: "soft-skills",
    title: "Soft Skills",
    icon: "Users",
    skills: [
      { name: "Analytical Thinking", level: 90 },
      { name: "Team Collaboration", level: 85 },
      { name: "Communication", level: 85 },
      { name: "Time Management", level: 80 },
      { name: "Quick Learning", level: 90 },
    ],
  },
];
