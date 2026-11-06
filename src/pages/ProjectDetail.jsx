import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getProjectBySlug } from '../data/projects'
import TechTag from '../components/TechTag'
import CategoryBadge from '../components/CategoryBadge'

const DEFAULT_TITLE = 'Loïc Le Faucheur · Développeur Full-Stack Junior React'

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

  useEffect(() => {
    document.title = project
      ? `${project.title} · Loïc Le Faucheur`
      : DEFAULT_TITLE

    return () => {
      document.title = DEFAULT_TITLE
    }
  }, [project])

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
        <CategoryBadge category={project.category} />
      </div>

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <TechTag key={tech}>{tech}</TechTag>
        ))}
      </ul>

      {project.image && (
        <img
          src={project.image}
          alt={`Capture d'écran du projet ${project.title}`}
          className="mt-8 w-full rounded-xl border border-white/10"
        />
      )}

      <div className="mt-10 flex flex-col gap-8">
        {FICHE_SECTIONS.map((section) => (
          <div key={section.key}>
            <p className="font-mono text-xs tracking-wider text-primary uppercase">
              {section.label}
            </p>
            <p className="mt-2 text-text-muted">{project[section.key]}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-lg bg-primary px-6 py-3 font-semibold text-bg"
          >
            Jouer à la démo →
          </a>
        )}
        {project.repo ? (
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className={
              project.demo
                ? 'inline-block rounded-lg border border-primary/60 px-6 py-3 font-semibold text-primary'
                : 'inline-block rounded-lg bg-primary px-6 py-3 font-semibold text-bg'
            }
          >
            Voir le code sur GitHub →
          </a>
        ) : (
          <p className="inline-block rounded-lg border border-highlight/40 bg-highlight/10 px-4 py-2 text-sm font-semibold text-highlight">
            {project.noRepoReason}
          </p>
        )}
      </div>
    </motion.article>
  )
}

export default ProjectDetail
