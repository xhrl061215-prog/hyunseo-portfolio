/**
 * Every fact on the site lives here. Edit this file to update the site —
 * the components are presentational and read from these exports.
 */

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://hyunseo-kim.vercel.app";

export const profile = {
  name: "Hyunseo Kim",
  role: "MEng Biomedical Engineering",
  institution: "Imperial College London",
  location: "London, UK",
  email: "hyunseo.kim25@imperial.ac.uk",
  linkedin: "https://www.linkedin.com/in/hyunseolilykim/",
  cv: "/cv.pdf",
  tagline:
    "Biomedical engineering at the point where medical devices, soft robotics, and computational methods meet.",
  metaDescription:
    "Hyunseo Kim — MEng Biomedical Engineering student at Imperial College London. Medical devices, soft robotics, machine learning, and rapid prototyping.",
} as const;

export type NavItem = { id: string; label: string };

export const nav: NavItem[] = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "research", label: "Research" },
  { id: "awards", label: "Awards" },
  { id: "contact", label: "Contact" },
];

export const bio: string[] = [
  "I’m a Biomedical Engineering student at Imperial College London, interested in how engineering, computation, and biology can be combined to understand—and build for—complex human systems. My work so far has ranged from medical-device prototyping and bio-inspired robotics to machine learning and technical product development.",
  "Recently, I’ve become particularly fascinated by **consciousness and the connectome**: how patterns of neural connectivity and computation might help explain where and how human consciousness emerges. I’m still very much exploring that question, though, and I like keeping my interests broad—I’m equally excited by projects across computational biology, AI, neurotechnology, medical devices, and anything that gives me a difficult problem to take apart and understand.",
];

export type Education = {
  institution: string;
  credential: string;
  location: string;
  period: string;
  highlight?: string;
  detail?: string;
};

export const education: Education[] = [
  {
    institution: "Imperial College London",
    credential: "MEng Biomedical Engineering",
    location: "London, UK",
    period: "2025 — 2029",
    highlight: "Year 1 Classification: First-Class Honours",
    detail:
      "Bioengineering Science · Computer Fundamentals and Programming · Mathematics · Mechanics and Electronics · Medical Science · Design and Professional Practice",
  },
  {
    institution: "National Presidential Science Scholarship",
    credential: "President of South Korea",
    location: "South Korea",
    period: "2025 — 2029",
    highlight: "Merit-based scholarship awarded to ~20 students nationwide ($200K)",
  },
  {
    institution: "North London Collegiate School Jeju",
    credential: "International Baccalaureate",
    location: "Jeju, KR",
    period: "2012 — 2025",
    highlight: "IB Final Grade 45/45 · Biology Scholarship Award (Valedictorian)",
    detail:
      "Maths AA · Physics · Biology · Philosophy · Korean and English Literature",
  },
];

export type SkillGroup = { label: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    label: "Programming & ML",
    items: ["Python", "TensorFlow", "Google Teachable Machine"],
  },
  {
    label: "AI Tooling",
    items: ["Claude Code", "Agentic AI", "Harness Engineering"],
  },
  {
    label: "Hardware & Prototyping",
    items: ["3D Printing", "Rapid Prototyping", "Technical Documentation"],
  },
];

export type Role = {
  role: string;
  org: string;
  orgNote?: string;
  period: string;
  points: string[];
};

export const experience: Role[] = [
  {
    role: "Publicity Lead",
    org: "ONLJ Alumni Committee",
    period: "Sep 2026 — Present",
    points: [
      "Develop and iterate the ONLJ alumni website using Claude Code, gathering requirements through stakeholder conversations and translating user needs into practical web features.",
    ],
  },
  {
    role: "Operations Manager",
    org: "Lab45",
    orgNote: "Education Startup",
    period: "Jun 2026 — Present",
    points: [
      "Manage cross-functional team operations, streamline meeting agendas and decision-making, and coordinate initiatives across team management, outreach, and marketing.",
    ],
  },
];

export type Project = {
  title: string;
  org: string;
  location?: string;
  period: string;
  points: string[];
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "Medical Device Prototyping Collaboration — Entia × Imperial ProtoSoc",
    org: "Imperial College London",
    location: "London, UK",
    period: "Jan 2026 — Mar 2026",
    points: [
      "Collaborated with Entia over 10 weeks through Imperial ProtoSoc to engineer a non-biological quality-control sample for patient-use device calibration.",
      "Designed and iterated optical standards using 3D printing, fluorescent beads, resin matrices, and nano-LED strips to emulate blood-like optical responses and improve calibration repeatability.",
    ],
    tags: ["Medical Devices", "Optics", "3D Printing", "Quality Control"],
  },
  {
    title: "Imperial Prosthetics Society, Exoskeleton Team",
    org: "Imperial College London",
    location: "London, UK",
    period: "2025 — Present",
    points: [
      "Prototyping a pneumatically actuated exoskeleton for upper-limb assistance.",
      "Lead team communication and technical documentation supporting design coordination and project continuity.",
    ],
    tags: ["Soft Robotics", "Pneumatics", "Assistive Devices"],
  },
  {
    title: "Bio-inspired Robotics: Machine Learning, Design and Control",
    org: "Cambridge Centre for International Research — Future Scholar Programme",
    location: "Online",
    period: "2023",
    points: [
      "Conducted research under Dr. Thomas Thuruthel on machine learning, design, and control for bio-inspired robotic systems.",
      "Selected as the programme's sole candidate for the Student Research Spotlight Interview.",
    ],
    tags: ["Machine Learning", "Control", "Bio-inspired Robotics"],
  },
  {
    title:
      "Design and Validation of Vinyl-based McKibben Actuators for Assistive Wearable Soft Exoskeletons",
    org: "Independent",
    location: "Jeju, KR",
    period: "2023 — 2024",
    points: [
      "Developed and experimentally tested vinyl-based McKibben actuators for upper-limb assistive applications.",
      "Research recognised with Gold at KSEF International (2024) and Bronze at KSEF National (2023).",
    ],
    tags: ["Soft Actuators", "Experimental Testing", "Assistive Devices"],
  },
  {
    title: "Principal Researcher & Team Leader, Squat Insurance Project",
    org: "NLCS Jeju",
    location: "Jeju, KR",
    period: "2022 — 2023",
    points: [
      "Modelled squat safety regions mathematically and used TensorFlow and Google Teachable Machine to guide safer movement.",
      "Presented at the World Mathematics Competition, March 2023.",
    ],
    tags: ["TensorFlow", "Computer Vision", "Mathematical Modelling"],
  },
];

export type Award = {
  title: string;
  detail?: string;
  /** The research this award was given for, where there is one. */
  project?: string;
  year: string;
};

export const awards: Award[] = [
  {
    title: "Gold Medal (International), Bronze Medal (National)",
    detail: "KSEF",
    project:
      "Design and Validation of Vinyl-based McKibben Actuators for Assistive Wearable Soft Exoskeletons",
    year: "2023",
  },
  {
    title: "Overall 4th & Maker Award (International)",
    detail: "Intelligent Ironman Creativity Contest — South Korean Representative",
    year: "2023",
  },
  {
    title: "Silver Medal (International)",
    detail: "KSEF International",
    project:
      "Meta-analysis on the relationship and effect of a highly-GMO dependent diet on gut microbiomes",
    year: "2023",
  },
  {
    title: "Silver Medal (International)",
    detail: "British Biology Olympiad",
    year: "2023",
  },
  {
    title: "Microsoft Technology Associate",
    detail: "Introduction to Programming using Python",
    year: "2023",
  },
  {
    title: "1st Place (Regional)",
    detail:
      "Data Utilization Ideas for AI Learning in the Medical Field — Chungbuk Governor's Award",
    year: "2022",
  },
];
