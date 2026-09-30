export interface SocialLink {
  id: string
  label: string
  href: string
  /** Font Awesome icon name, resolved in SocialLinks.tsx */
  icon: 'email' | 'github' | 'linkedin' | 'facebook'
}

export interface PersonalInfo {
  name: string
  firstName: string
  title: string
  tagline: string
  summary: string
  yearsExperience: string
  location: string
  email: string
  phone: string
  resumeUrl: string
  socials: SocialLink[]
}

export interface AboutPillar {
  id: string
  title: string
  description: string
}

export interface AboutBanner {
  heading: string
  body: string
  action: string
}

export interface AboutContent {
  eyebrow: string
  heading: string
  intro: string
  exploreTargetId: string
  banner: AboutBanner
  pillars: AboutPillar[]
}

export interface SkillCategory {
  category: string
  skills: string[]
}

export type ExperienceType = 'work' | 'education' | 'certification'

export interface ExperienceItem {
  id: string
  type: ExperienceType
  role: string
  organization: string
  period: string
  location?: string
  points: string[]
}

export interface Project {
  id: string
  title: string
  description: string
  image: string
  techStack: string[]
  githubRepo: string
  githubRepoEnabled: boolean
  liveUrl: string
  liveUrlEnabled: boolean
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company?: string
  quote: string
  avatar?: string
  link?: string
}

export interface ContactField {
  name: 'name' | 'email' | 'phone' | 'message'
  label: string
  type: 'text' | 'email' | 'tel' | 'textarea'
  placeholder: string
  required: boolean
}

export interface ContactConfig {
  eyebrow: string
  heading: string
  intro: string
  /** Left empty on purpose - wire up a real Formspree endpoint before going live. */
  formspreeEndpoint: string
  fields: ContactField[]
  autoHideMs: number
}
