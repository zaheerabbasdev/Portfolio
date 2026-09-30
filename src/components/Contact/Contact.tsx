import { contact } from '@/data/contact'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Divider } from '@/components/ui/Divider'
import { ContactForm } from '@/components/Contact/ContactForm'

export function Contact() {
  return (
    <section id="contact" className="bg-paper py-24 sm:py-28">
      <Container>
        <div className="flex flex-col items-center gap-10 text-center">
          <SectionHeading heading={contact.heading} intro={contact.intro} />

          <Divider />

          <ContactForm />
        </div>
      </Container>
    </section>
  )
}
