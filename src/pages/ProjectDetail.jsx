import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getProjectBySlug } from '../data/projects'

const FICHE_SECTIONS = [
  { key: 'contexte', label: 'Contexte' },
  { key: 'objectifs', label: 'Objectifs' },
  { key: 'stackDetail', label: 'Stack technique' },
  { key: 'competences', label: 'Compétences développées' },
  { key: 'resultats', label: 'Résultats et impact' },
  { key: 'perspectives', label: "Perspectives d'amélioration" },
]

function ProjectDetail() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="font-display text-3xl font-bold">Projet introuvable</h1>
        <Link to="/#projets" className="mt-6 inline-block text-primary hover:underline">
          ← Retour aux projets
        </Link>
      </div>
    )
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mx-auto max-w-3xl px-6 py-32"
    >
      <Link to="/#projets" className="text-sm text-text-muted hover:text-primary">
        ← Retour aux projets
      </Link>

      <div className="mt-4 flex items-start justify-between gap-4">
        <h1 className="font-display text-3xl font-bold md:text-4xl">
          {project.title}
        </h1>
        <span className="shrink-0 rounded-full border border-primary/40 px-3 py-1 text-sm text-primary">
          {project.category}
        </span>
      </div>

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="rounded-full bg-white/5 px-3 py-1 text-xs text-text-muted"
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-10 flex flex-col gap-8">
        {FICHE_SECTIONS.map((section) => (
          <div key={section.key}>
            <p className="font-display text-sm font-semibold uppercase tracking-wide text-primary">
              {section.label}
            </p>
            <p className="mt-2 text-text-muted">{project[section.key]}</p>
          </div>
        ))}
      </div>

      {project.repo ? (
        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-block rounded-lg bg-primary px-6 py-3 font-semibold text-bg"
        >
          Voir le code sur GitHub →
        </a>
      ) : (
        <p className="mt-10 italic text-text-muted">{project.noRepoReason}</p>
      )}
    </motion.article>
  )
}

export default ProjectDetail
