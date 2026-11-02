import { Link } from 'react-router-dom'

function ProjectCard({ project }) {
  return (
    <article className="flex h-full flex-col gap-3 rounded-xl border border-white/10 bg-bg-elevated p-5 transition-all duration-200 hover:-translate-y-1 hover:border-primary/40">
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-display text-lg font-semibold">{project.title}</h3>
        <span className="shrink-0 rounded-full border border-primary/40 px-2.5 py-0.5 text-xs text-primary">
          {project.category}
        </span>
      </div>

      <p className="text-sm text-text-muted">{project.blurb}</p>

      <ul className="flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="rounded-full bg-white/5 px-3 py-1 text-xs text-text-muted"
          >
            {tech}
          </li>
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
