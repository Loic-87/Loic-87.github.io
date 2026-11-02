import { Link } from 'react-router-dom'
import TechTag from './TechTag'

function ProjectCard({ project }) {
  return (
    <article className="flex h-full flex-col gap-3 border border-white/10 bg-bg-elevated p-5 transition-all duration-200 [clip-path:polygon(0_0,calc(100%-16px)_0,100%_16px,100%_100%,0_100%)] hover:-translate-y-1 hover:border-primary/40">
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-display text-lg font-semibold">{project.title}</h3>
        <span className="shrink-0 font-mono text-xs tracking-wider text-primary uppercase">
          {project.category}
        </span>
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
          className="text-sm font-semibold text-primary hover:underline"
        >
          Voir la fiche →
        </Link>
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-text-muted hover:text-primary"
          >
            Code
          </a>
        )}
      </div>
    </article>
  )
}

export default ProjectCard
