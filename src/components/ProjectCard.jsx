import { Link } from 'react-router-dom'
import TechTag from './TechTag'
import CategoryBadge from './CategoryBadge'

function ProjectCard({ project }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-bg-elevated transition-all duration-200 hover:-translate-y-1 hover:border-primary/40">
      {project.image && (
        <img
          src={project.image}
          alt={`Capture d'écran du projet ${project.title}`}
          className="aspect-video w-full object-cover"
        />
      )}

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-lg font-semibold">{project.title}</h3>
          <CategoryBadge category={project.category} />
        </div>

        <p className="text-sm text-text-muted">{project.blurb}</p>

        <ul className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <TechTag key={tech}>{tech}</TechTag>
          ))}
        </ul>

        <div className="mt-auto flex items-center gap-4 pt-2">
          <Link
            to={`/projets/${project.slug}`}
            className="text-sm font-semibold text-primary-strong hover:underline"
          >
            Voir la fiche →
          </Link>
          {project.repo ? (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-text-muted hover:text-primary"
            >
              Code
            </a>
          ) : (
            <span className="text-xs font-semibold text-highlight">
              {project.noRepoReason}
            </span>
          )}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
