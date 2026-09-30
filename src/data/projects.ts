import albazImage from '@/assets/projects/albaz-shipping.webp'
import fleetImage from '@/assets/projects/fleet-management.webp'
import kaarkunImage from '@/assets/projects/kaarkun.webp'
import tailorAppImage from '@/assets/projects/tailorapp.webp'
import type { Project } from '@/types'

// Each project's GitHub/live links are independently toggled with the
// `*Enabled` flags - the ProjectCard component hides whichever is off
// without any changes to the component itself.
export const projects: Project[] = [
  {
    id: 'kaarkun',
    title: 'Kaarkun',
    description:
      'A multi-platform service marketplace connecting customers with skilled service providers, with authentication, secure transactions and AI-powered recommendations.',
    image: kaarkunImage,
    techStack: ['Next.js', 'Node.js', 'MySQL', 'Flutter', 'AI'],
    githubRepo: 'https://github.com/zaheerabbasdev/Final-Year-Project',
    githubRepoEnabled: true,
    liveUrl: '',
    liveUrlEnabled: false,
  },
  {
    id: 'fleet-management',
    title: 'Fleet Management',
    description:
      'A business management system for employees, trucks, trips, fuel, salaries, expenses, maintenance, customers, invoices, fines and reports.',
    image: fleetImage,
    techStack: ['Next.js', 'MySQL', 'Prisma ORM'],
    githubRepo: 'https://github.com/zaheerabbasdev/fleet-management',
    githubRepoEnabled: true,
    liveUrl: '',
    liveUrlEnabled: false,
  },
  {
    id: 'albaz-shipping',
    title: 'ALBAZ Shipping Services',
    description:
      'Logistics and shipping company website covering sea, air and land freight forwarding, customs clearance, cargo handling and warehouse management for a Muscat-based operator.',
    image: albazImage,
    techStack: ['Next.js', 'MySQL'],
    githubRepo: '',
    githubRepoEnabled: false,
    liveUrl: 'https://albazshippingservices.com/',
    liveUrlEnabled: true,
  },
  {
    id: 'tailorapp',
    title: 'TailorApp',
    description:
      'A mobile management app for customers, orders, measurements and tailoring operations, built offline-first for reliable use in low-connectivity environments.',
    image: tailorAppImage,
    techStack: ['Flutter', 'SQLite'],
    githubRepo: 'https://github.com/zaheerabbasdev/TailorApp',
    githubRepoEnabled: true,
    liveUrl: '',
    liveUrlEnabled: false,
  },
]
