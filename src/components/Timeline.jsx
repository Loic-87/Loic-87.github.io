const STEPS = [
  {
    period: '2017 – 2025',
    title: 'Expériences en usine',
    text: 'Plusieurs années dans des secteurs industriels variés.',
  },
  {
    period: '2025 – 2026',
    title: 'Reconversion professionnelle',
    text: "Une période de transition qui m'a amené à repenser mon avenir et à me tourner vers le développement web.",
  },
  {
    period: 'Mars 2026',
    title: 'Formation Développeur Web',
    text: 'Démarrage de la formation (OpenClassrooms / Greta Limoges) — HTML/CSS, JavaScript, React, Symfony/Twig, Node.js...',
  },
  {
    period: 'Août – Octobre 2026',
    title: 'Stage — Le Comptoir de la Moto',
    text: "Développement front-end d'un site d'annonces moto, design system sur-mesure de A à Z.",
  },
  {
    period: 'Décembre 2026',
    title: 'Fin de formation',
    text: 'Soutenance de ce portfolio, et recherche d’un poste de développeur full-stack.',
  },
]

function Timeline() {
  return (
    <section id="parcours" className="mx-auto max-w-3xl scroll-mt-24 px-6 py-24">
      <h2 className="font-display text-3xl font-bold md:text-4xl">
        Parcours
      </h2>

      <ol className="mt-10 border-l border-white/10 pl-6">
        {STEPS.map((step) => (
          <li key={step.title} className="relative mb-10 last:mb-0">
            <span className="absolute top-1.5 -left-[29px] h-3 w-3 rounded-full bg-primary" />
            <p className="font-display text-sm font-semibold uppercase tracking-wide text-primary">
              {step.period}
            </p>
            <p className="mt-1 font-semibold">{step.title}</p>
            <p className="mt-1 text-sm text-text-muted">{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default Timeline
