const HARD_SKILLS = {
  'Front-end': ['React', 'JavaScript (ES6+)', 'HTML5 sémantique', 'CSS3 / Sass', 'Tailwind CSS', 'Vite'],
  'Back-end': ['Node.js', 'Express', 'MongoDB', 'API REST', 'JWT'],
  Outils: ['Git / GitHub', 'Figma', 'Lighthouse / WAVE'],
}

const SOFT_SKILLS = [
  {
    title: 'Créativité',
    text: 'Je ne reproduis jamais un exemple à l’identique : je lui donne une identité propre.',
  },
  {
    title: 'Curiosité',
    text: 'Un fil rouge technique (l’OCR) revient sur plusieurs de mes projets, simplement parce qu’il m’intéresse.',
  },
  {
    title: 'Autonomie',
    text: 'Je gère mes projets de bout en bout, à mon rythme, sans me perdre.',
  },
]

function Skills() {
  return (
    <section id="competences" className="mx-auto max-w-3xl px-6 py-24">
      <h2 className="font-display text-3xl font-bold md:text-4xl">
        Compétences
      </h2>

      {/* Stack technique */}
      <div className="mt-10 flex flex-col gap-8">
        {Object.entries(HARD_SKILLS).map(([category, skills]) => (
          <div key={category}>
            <p className="font-display text-sm font-semibold uppercase tracking-wide text-primary">
              {category}
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-white/10 bg-bg-elevated px-4 py-1.5 text-sm text-text"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Soft skills */}
      <div className="mt-16 grid gap-6 sm:grid-cols-3">
        {SOFT_SKILLS.map((soft) => (
          <div
            key={soft.title}
            className="rounded-xl border border-white/10 bg-bg-elevated p-5"
          >
            <p className="font-display font-semibold text-primary">
              {soft.title}
            </p>
            <p className="mt-2 text-sm text-text-muted">{soft.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
