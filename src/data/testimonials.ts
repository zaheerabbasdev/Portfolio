import type { Testimonial } from "@/types";

// Names and roles are confirmed; quotes are intentionally left blank until
// Zaheer supplies the actual testimonial text - see docs/CONTENT_MANAGEMENT.md.
// TestimonialCarousel only renders entries that have a non-empty `quote`.
export const testimonials: Testimonial[] = [
  {
    id: "muhammad-dawood",
    name: "Muhammad Dawood",
    role: "Former DevOps Intern, TechCreator · FYP teammate",
    quote:
      "Having worked with Zaheer across multiple projects - including our Final Year Project - I can attest to his exceptional full-stack capabilities and problem-solving drive. He takes complete ownership of complex application logic and system architecture, ensuring everything operates smoothly under the hood. Zaheer is a dedicated teammate who consistently brings clarity, technical depth, and strong execution to every build.",
  },
  {
    id: "ubaid-ahmad",
    name: "Ubaid Ahmad",
    role: "Full-Stack Developer & UI/UX Designer · Former Web Developer Intern, HerDev",
    quote:
      "Working alongside Zaheer is always a seamless experience. While I focused on refining the UI/UX design and crafting the visual layer - including designing and building this portfolio - Zaheer handled the core engineering with absolute reliability. He is steady, dependable, and a steadfast collaborator through every stage of development. No matter how challenging the project requirements get, Zaheer is the developer you want standing by your side.",
  },
  {
    id: "jawad-ali",
    name: "Jawad Ali",
    role: "Full-Stack Developer",
    quote:
      "Working with Zaheer brings the perfect balance of great energy and high performance. He brings a calm, focused mindset to every project and makes technical collaboration feel effortlessly smooth. Even under tight deadlines, Zaheer stays dedicated, organized, and delivers high-quality code right on time. He is as reliable a partner as he is a great developer to collaborate with.",
  },
  {
    id: "umair-amjad",
    name: "Umair Amjad",
    role: "Software Engineer, TechCreator",
    quote:
      "Getting the chance to work with Zaheer has been genuinely uplifting. He brings clarity, focus, and a deep sense of responsibility to everything he does, remaining calm and thoughtful even when things get hectic. His ability to navigate backend logic and build solid application architectures makes him an invaluable full-stack engineer.",
  },
];
