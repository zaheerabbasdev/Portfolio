import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import type { Project } from "@/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-sm border border-ink/10 bg-white">
      <div className="aspect-[3/2] w-full overflow-hidden bg-cloud">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="font-display text-lg font-bold text-ink">
          {project.title}
        </h3>
        <p className="flex-1 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <ul className="flex flex-wrap gap-2 pt-1">
          {project.techStack.map((tech) => (
            <li
              key={tech}
              className="rounded border border-ink/12 px-2.5 py-1 text-xs font-medium text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>

        {(project.githubRepoEnabled || project.liveUrlEnabled) && (
          <div className="flex items-center gap-4 pt-2">
            {project.githubRepoEnabled && (
              <a
                href={project.githubRepo}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} source on GitHub`}
                className="flex items-center gap-2 text-sm font-semibold text-ink transition-opacity hover:opacity-60"
              >
                <FontAwesomeIcon icon={faGithub} /> Code
              </a>
            )}
            {project.liveUrlEnabled && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} live site`}
                className="flex items-center gap-2 text-sm font-semibold text-ink transition-opacity hover:opacity-60"
              >
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Live site
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
