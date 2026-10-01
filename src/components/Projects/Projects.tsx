import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCarousel } from "@/components/Projects/ProjectCarousel";

export function Projects() {
  return (
    <section id="projects" className="bg-paper py-24 sm:py-28">
      <Container>
        <div className="flex flex-col items-center gap-14">
          <SectionHeading
            heading="Portfolio"
            intro="A selection of recent client and personal projects."
          />
          <div className="w-full">
            <ProjectCarousel />
          </div>
        </div>
      </Container>
    </section>
  );
}
