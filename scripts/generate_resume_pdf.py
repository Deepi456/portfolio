"""
Generates an ATS-ready PDF resume for Deepika R, mirroring the content of
the original 2-page Word resume exactly (no invented facts), in a clean
single/two-column-free layout that ATS parsers can read reliably.
"""
from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
)
from reportlab.lib.enums import TA_LEFT, TA_CENTER

NAVY = colors.HexColor("#1A1A2E")
ACCENT = colors.HexColor("#5A3FD9")
GREY = colors.HexColor("#55556B")
LINE = colors.HexColor("#DDDDE5")

styles = getSampleStyleSheet()

name_style = ParagraphStyle(
    "Name", parent=styles["Normal"], fontName="Helvetica-Bold",
    fontSize=21, textColor=NAVY, alignment=TA_CENTER, spaceAfter=1,
    leading=24,
)
title_style = ParagraphStyle(
    "Title", parent=styles["Normal"], fontName="Helvetica-Bold",
    fontSize=10.5, textColor=ACCENT, alignment=TA_CENTER, spaceAfter=5,
    leading=14,
)
contact_style = ParagraphStyle(
    "Contact", parent=styles["Normal"], fontName="Helvetica",
    fontSize=8.7, textColor=GREY, alignment=TA_CENTER, spaceAfter=8,
    leading=12,
)
section_style = ParagraphStyle(
    "Section", parent=styles["Normal"], fontName="Helvetica-Bold",
    fontSize=11, textColor=NAVY, spaceBefore=9, spaceAfter=3,
    leading=13,
)
body_style = ParagraphStyle(
    "Body", parent=styles["Normal"], fontName="Helvetica",
    fontSize=9.3, textColor=colors.HexColor("#222230"), leading=12.3,
)
bullet_style = ParagraphStyle(
    "Bullet", parent=body_style, leftIndent=12, bulletIndent=0,
    spaceAfter=1.5, leading=12,
)
role_style = ParagraphStyle(
    "Role", parent=styles["Normal"], fontName="Helvetica-Bold",
    fontSize=10, textColor=NAVY, spaceAfter=1,
)
meta_style = ParagraphStyle(
    "Meta", parent=styles["Normal"], fontName="Helvetica-Oblique",
    fontSize=8.7, textColor=GREY, spaceAfter=3,
)
skill_label_style = ParagraphStyle(
    "SkillLabel", parent=styles["Normal"], fontName="Helvetica-Bold",
    fontSize=9.3, textColor=NAVY,
)
skill_value_style = ParagraphStyle(
    "SkillValue", parent=styles["Normal"], fontName="Helvetica",
    fontSize=9.3, textColor=colors.HexColor("#222230"), leading=12.5,
)


def hr():
    return HRFlowable(width="100%", thickness=0.7, color=LINE, spaceAfter=6, spaceBefore=0)


def section_header(text):
    return [Paragraph(text, section_style), hr()]


def bullets(items):
    return [Paragraph(f"&bull;&nbsp;&nbsp;{item}", bullet_style) for item in items]


def role_block(role, company, duration, location, items, techs=None):
    header_table = Table(
        [[Paragraph(f"{role} — {company}", role_style),
          Paragraph(duration, meta_style)]],
        colWidths=[4.6 * inch, 2.1 * inch],
    )
    header_table.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("ALIGN", (1, 0), (1, 0), "RIGHT"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
    ]))
    flow = [header_table]
    if location:
        flow.append(Paragraph(location, meta_style))
    flow.append(Spacer(1, 2))
    flow.extend(bullets(items))
    if techs:
        flow.append(Spacer(1, 2))
        flow.append(Paragraph(f"<i>Technologies:</i> {techs}", meta_style))
    flow.append(Spacer(1, 5))
    return flow


def project_block(title, items, techs, duration=None):
    title_text = title if not duration else f"{title} <font color='#55556B' size=8>({duration})</font>"
    flow = [Paragraph(title_text, role_style), Spacer(1, 1)]
    flow.extend(bullets(items))
    flow.append(Spacer(1, 2))
    flow.append(Paragraph(f"<i>Technologies:</i> {techs}", meta_style))
    flow.append(Spacer(1, 5))
    return flow


def edu_block(institution, duration, qualification, detail):
    header_table = Table(
        [[Paragraph(institution, role_style), Paragraph(duration, meta_style)]],
        colWidths=[4.6 * inch, 2.1 * inch],
    )
    header_table.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("ALIGN", (1, 0), (1, 0), "RIGHT"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
    ]))
    return [
        header_table,
        Paragraph(qualification, body_style),
        Paragraph(detail, meta_style),
        Spacer(1, 4),
    ]


doc = SimpleDocTemplate(
    "/home/claude/portfolio/public/resume/Deepika_R_Resume.pdf",
    pagesize=letter,
    leftMargin=0.6 * inch, rightMargin=0.6 * inch,
    topMargin=0.42 * inch, bottomMargin=0.42 * inch,
    title="Deepika R - Resume", author="Deepika R",
)

elements = []

# Header
elements.append(Paragraph("DEEPIKA R", name_style))
elements.append(Paragraph("DATA SCIENCE PROFESSIONAL", title_style))
elements.append(Paragraph(
    "+91 9629968985 &nbsp;|&nbsp; ravideepika991@gmail.com &nbsp;|&nbsp; Coimbatore, Tamil Nadu "
    "&nbsp;|&nbsp; github.com/Deep1456 &nbsp;|&nbsp; linkedin.com/in/deepika-ad",
    contact_style,
))
elements.append(hr())

# Professional Summary
elements.extend(section_header("PROFESSIONAL SUMMARY"))
elements.append(Paragraph(
    "Data Science professional with a versatile technical skill set spanning machine learning, "
    "predictive modeling, and full-stack web development. Proficient in Python, SQL, JavaScript, "
    "and React, with experience building APIs, integrating databases, and developing models that "
    "convert complex datasets into actionable business insights across 6+ projects and 3 internships.",
    body_style,
))
elements.append(Spacer(1, 6))

# Skills & Certifications
elements.extend(section_header("SKILLS & CERTIFICATIONS"))
skills_data = [
    ("Programming Languages", "Python, Java, SQL, JavaScript, HTML, CSS"),
    ("Full-Stack & Software Development", "React.js, Node.js, Express.js, MongoDB, REST APIs, Database Integration, OOP, Git/GitHub"),
    ("Machine Learning & AI", "Machine Learning, Scikit-learn, Feature Engineering, Model Evaluation, Classification, Data Preprocessing; working knowledge of TensorFlow, Keras, NLP fundamentals"),
    ("Data Analysis & Visualization", "Pandas, NumPy, Matplotlib, Seaborn, Data Cleaning, Power BI; familiarity with Tableau"),
    ("Core Concepts & Tools", "Data Structures & Algorithms (DSA), Problem Solving, Jupyter Notebook, APIs, Microsoft Excel"),
    ("Soft Skills", "Analytical Thinking, Team Collaboration, Communication, Time Management, Quick Learning"),
    ("Certifications", "Oracle Analytics Cloud 2025 Certified Professional; Databricks Generative AI Fundamentals Accreditation; Deloitte Data Analytics Job Simulation; Foundational C# with Microsoft (freeCodeCamp & Microsoft)"),
]
for label, value in skills_data:
    row = Table(
        [[Paragraph(f"{label}:", skill_label_style), Paragraph(value, skill_value_style)]],
        colWidths=[1.7 * inch, 5.0 * inch],
    )
    row.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 2),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 2),
    ]))
    elements.append(row)
elements.append(Spacer(1, 4))

# Work Experience
elements.extend(section_header("WORK EXPERIENCE"))
elements.extend(role_block(
    "Data Science Intern", "Algorism Labs Private Ltd", "Jun 2025 – Jul 2025", None,
    [
        "Conducted exploratory data analysis and statistical evaluation on a dataset of 3,000+ records to uncover key trends and patterns.",
        "Collaborated with a 3-person cross-functional team to preprocess and validate data, improving consistency and accuracy for downstream analysis.",
        "Built and evaluated machine learning models using Python and Scikit-learn to support predictive analysis tasks.",
    ],
))
elements.extend(role_block(
    "Data Science Intern", "CS Globus", "Dec 2025 – Jan 2026", "Coimbatore",
    [
        "Collaborated with project teams to develop data-driven solutions, applying data cleaning and exploratory analysis to support business objectives.",
        "Supported software testing, documentation, and analytical reporting across project deliverables.",
        "Applied problem-solving and critical-thinking skills to troubleshoot data issues and support project goals.",
    ],
))
elements.extend(role_block(
    "Web Development Intern", "WebGen Technology", "Jun 2024 – Jul 2024", None,
    [
        "Collaborated with a 3-person team to develop responsive web pages using HTML, CSS, JavaScript, and React.",
        "Built and maintained reusable UI components, streamlining front-end development across project pages.",
        "Conducted software testing and authored project documentation to support smooth project delivery.",
    ],
))

# Page break point handled naturally by flow; Projects section starts here
elements.extend(section_header("PROJECTS"))
elements.extend(project_block(
    "Fraud Detection Using Machine Learning",
    [
        "Developed a machine learning model on 7,000+ financial transaction records, applying feature engineering to identify fraud-indicative patterns.",
        "Performed data preprocessing, including handling class imbalance, to improve model reliability on real-world transaction data.",
        "Trained and evaluated classification models using performance evaluation techniques to detect fraudulent transactions.",
    ],
    "Python, Scikit-learn, Pandas, NumPy",
))
elements.extend(project_block(
    "E-Commerce Sales Dashboard & Customer Analytics",
    [
        "Analyzed 3,000+ sales records using Python, SQL, and Power BI to surface revenue trends and customer spending patterns.",
        "Built interactive dashboards visualizing monthly sales trends and customer segments to support data-driven business decisions.",
        "Cleaned and transformed raw transactional data to ensure accuracy and consistency across reporting views.",
    ],
    "Python, SQL, Power BI",
))
elements.extend(project_block(
    "TrustLink – Centralized Donation Management System",
    [
        "Built a full-stack web application connecting 3 stakeholder roles — donors, NGOs, and orphanages — with transparent donation tracking.",
        "Designed request management workflows to streamline coordination and communication across all stakeholder groups.",
        "Implemented donation tracking features to improve transparency and accountability across the donation lifecycle.",
    ],
    "React.js, Node.js, Express.js, MongoDB",
))
elements.extend(project_block(
    "Smart Complaint Assistant – AI-Based Civic Issue Management System",
    [
        "Developed a full-stack complaint management platform using React.js, Node.js, Express.js, and MongoDB.",
        "Implemented features for reporting, tracking, and resolving civic issues to streamline issue resolution workflows.",
        "Designed the platform architecture to support scalable handling of multiple complaint categories.",
    ],
    "React.js, Node.js, Express.js, MongoDB",
))
elements.extend(project_block(
    "COVID-19 Data Analysis & Visualization",
    [
        "Performed exploratory data analysis on a 2,000-row COVID-19 dataset using Python, Pandas, and NumPy.",
        "Cleaned and processed raw data to enable accurate analytical reporting and trend identification.",
        "Built visualizations using Matplotlib and Seaborn to illustrate trend analysis and key insights.",
    ],
    "Python, Pandas, NumPy, Matplotlib, Seaborn",
    duration="Dec 2025 – Jan 2026",
))
elements.extend(project_block(
    "SmartPass – QR-Based Digital Bus Pass Management System",
    [
        "Designed a digital bus pass system with QR code generation and verification for secure student authentication.",
        "Built online pass management features, integrating database storage with real-time validation.",
        "Automated entry validation through QR code scanning, reducing manual verification effort.",
    ],
    "JavaScript, React, Database Integration",
    duration="Jun 2024 – Aug 2024",
))

# Education
elements.extend(section_header("EDUCATION"))
elements.extend(edu_block(
    "SNS College of Engineering, Coimbatore, TN", "2023 – Present",
    "B.Tech in Artificial Intelligence and Data Science",
    "CGPA: 8.5 / 10",
))
elements.extend(edu_block(
    "Mani Higher Secondary School, Coimbatore, TN", "2020 – 2023",
    "Higher Secondary Certificate (HSC) & Secondary School Leaving Certificate (SSLC)",
    "HSC — 88% | SSLC — 83%",
))

doc.build(elements)
print("PDF generated successfully.")
