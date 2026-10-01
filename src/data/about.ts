import type { AboutContent } from "@/types";

export const about: AboutContent = {
  eyebrow: "About",
  heading: "About Me",
  intro:
    "I'm a full-stack developer with 2+ years of experience building scalable web applications with React, Next.js, Node.js and modern databases - delivering complete solutions for clients across logistics, corporate, automotive and service industries.",
  exploreTargetId: "skills",
  banner: {
    heading: "How I Work",
    body: "I take practical requirements and turn them into structured, working products - from interface design and frontend development through backend systems to the ongoing maintenance that keeps everything running.",
    action: "Read More",
  },
  pillars: [
    {
      id: "frontend",
      title: "Frontend",
      description:
        "Responsive, accessible interfaces built with React and Next.js, styled with Tailwind CSS and shipped without layout surprises.",
    },
    {
      id: "backend",
      title: "Backend & APIs",
      description:
        "REST APIs and database architecture with Node.js, Express and SQL/NoSQL data stores, designed for performance and scale.",
    },
    {
      id: "deployment",
      title: "Deployment & Maintenance",
      description:
        "Production deployments on modern hosting platforms, with ongoing maintenance and iteration once real users are in the app.",
    },
  ],
};
