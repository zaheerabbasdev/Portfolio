import type { ContactConfig } from '@/types'

export const contact: ContactConfig = {
  eyebrow: 'Contact',
  heading: 'Contact',
  intro: "Have a project in mind or a role to discuss? Send a message and I'll get back to you.",
  // Add your Formspree endpoint here, e.g. https://formspree.io/f/xxxxxxx
  formspreeEndpoint: '',
  autoHideMs: 5000,
  fields: [
    { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Enter your full name*', required: true },
    { name: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com*', required: true },
    { name: 'phone', label: 'WhatsApp Number', type: 'tel', placeholder: '+92 300 1234567*', required: true },
    { name: 'message', label: 'Message', type: 'textarea', placeholder: 'Your message*', required: true },
  ],
}
