import type { PersonalInfo } from "@/types";

export const personal: PersonalInfo = {
  name: "Zaheer Abbas",
  firstName: "Zaheer",
  title: "Full-Stack Developer",
  tagline: "React · Next.js · Node.js",
  summary:
    "I build scalable web applications with React, Next.js and Node.js - from responsive frontends to production-ready APIs and databases.",
  yearsExperience: "2+",
  location: "Islamabad, Pakistan",
  email: "Zabbasdev@gmail.com",
  phone: "+92 313 9804929",
  resumeUrl: `${import.meta.env.BASE_URL}assets/resume/Zaheer-Abbas-Resume.pdf`,
  socials: [
    {
      id: "email",
      label: "Email",
      href: "mailto:Zabbasdev@gmail.com",
      icon: "email",
    },
    {
      id: "github",
      label: "GitHub",
      href: "https://github.com/zaheerabbasdev",
      icon: "github",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/zaheer-abbas-890a94240/",
      icon: "linkedin",
    },
    {
      id: "facebook",
      label: "Facebook",
      href: "https://web.facebook.com/zaheer.abbas.zaheer.abbas.2593",
      icon: "facebook",
    },
  ],
};
