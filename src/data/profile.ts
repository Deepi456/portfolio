import type { SocialLink } from "@/types";

export const profile = {
  name: "Deepika R",
  title: "Data Science Professional",
  // A short rotating-role set used by the hero typing animation —
  // derived directly from the resume's summary + skill domains.
  roles: [
    "Data Science Professional",
    "Machine Learning Enthusiast",
    "Full-Stack Developer",
    "Building data-driven products",
  ],
  location: "Coimbatore, Tamil Nadu, India",
  email: "ravideepika991@gmail.com",
  phone: "+91 9629968985",
  github: "https://github.com/Deep1456",
  githubHandle: "Deep1456",
  linkedin: "https://www.linkedin.com/in/deepika-ad",
  linkedinHandle: "deepika-ad",
  summary:
    "I'm a data science professional with a versatile technical foundation spanning machine learning, predictive modeling, and full-stack web development. I work comfortably across Python, SQL, JavaScript, and React — building APIs, integrating databases, and developing models that turn complex, messy datasets into decisions people can act on. Across 6+ projects and 3 internships, my focus has stayed consistent: understand the data deeply, build something reliable on top of it, and ship it in a form other people can actually use.",
  aboutParagraphs: [
    "I'm a final-year B.Tech student in Artificial Intelligence and Data Science at SNS College of Engineering, Coimbatore, with a CGPA of 8.5/10 — and a builder who's spent the last two years deliberately working both sides of the data-to-product pipeline.",
    "On the data science side, I've built fraud detection models on real transaction data, run exploratory analysis across multi-thousand-row datasets, and shipped Power BI dashboards that turn raw sales records into decisions a business team can act on. On the engineering side, I've shipped full-stack applications end to end — React front ends, Node/Express APIs, MongoDB-backed data layers — for real-world use cases like donation tracking and civic complaint management.",
    "That combination is intentional. Models only matter if someone can use what they produce, and I'd rather be the person who can build the model, the API around it, and the interface on top of it. Across three internships at Algorism Labs, CS Globus, and WebGen Technology, that's exactly the role I've taken on — moving between data analysis, model building, and front-end delivery depending on what the project needed.",
  ],
};

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: profile.github, icon: "github" },
  { label: "LinkedIn", href: profile.linkedin, icon: "linkedin" },
  { label: "Email", href: `mailto:${profile.email}`, icon: "mail" },
];
