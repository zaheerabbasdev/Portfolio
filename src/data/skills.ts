import type { SkillCategory } from '@/types'

// Skills are grouped by category, not rated by icon or percentage.
// Add or remove a category/skill here - the Skills section renders
// however many categories exist without any layout changes.
export const skills: SkillCategory[] = [
  {
    category: 'Programming Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'C++'],
  },
  {
    category: 'Frontend',
    skills: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express.js', 'Django'],
  },
  {
    category: 'Databases',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL'],
  },
  {
    category: 'Tools & Technologies',
    skills: ['Git', 'GitHub', 'REST APIs', 'Vercel', 'VS Code', 'AI API Integration'],
  },
]
