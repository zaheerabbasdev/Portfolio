import { testimonials } from "@/data/testimonials";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCarousel } from "@/components/Testimonials/TestimonialCarousel";

export function Testimonials() {
  const hasContent = testimonials.some((item) => item.quote.trim().length > 0);
  if (!hasContent) return null;

  return (
    <section id="testimonials" className="bg-cloud py-24 sm:py-28">
      <Container>
        <div className="flex flex-col items-center gap-14">
          <SectionHeading heading="Testimonials" />
          <TestimonialCarousel />
        </div>
      </Container>
    </section>
  );
}
