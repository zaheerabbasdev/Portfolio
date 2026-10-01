import type { ExperienceItem } from "@/types";

export const experience: ExperienceItem[] = [
  {
    id: "self-employed-fullstack",
    type: "work",
    role: "Full-Stack Developer",
    organization: "Self-Employed",
    period: "2024 - Present",
    location: "Remote",
    points: [
      "Designed and developed responsive web applications for clients across logistics, corporate, automotive and technology sectors.",
      "Built complete full-stack applications using React.js, Next.js, Node.js, Express.js, MongoDB and MySQL.",
      "Developed RESTful APIs and optimized database architecture for performance and scalability.",
      "Integrated WhatsApp communication, contact forms and AI-powered features to improve customer engagement.",
      "Deployed and maintained production systems on modern hosting platforms including Vercel.",
    ],
  },
  {
    id: "bs-computer-science",
    type: "education",
    role: "Bachelor of Science in Computer Science",
    organization: "University of Swabi",
    period: "2022 - 2026",
    points: [],
  },
  {
    id: "python-crash-course",
    type: "certification",
    role: "Crash Course on Python",
    organization: "Google, via Coursera",
    period: "2023",
    points: [],
  },
];
