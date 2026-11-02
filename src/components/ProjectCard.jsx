function ProjectCard({ project }) {
  return (
    <article className="flex flex-col gap-3 rounded-xl border border-white/10 bg-bg-elevated p-5">
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

      {project.repo ? (
        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          className="mt-2 text-sm font-semibold text-primary hover:underline"
        >
          Voir le code →
        </a>
      ) : (
        <p className="mt-2 text-sm italic text-text-muted">
          {project.noRepoReason}
        </p>
      )}
    </article>
  )
}

export default ProjectCard
