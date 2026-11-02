function Hero() {
  return (
    <section
      id="accueil"
      className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center"
    >
      <h1 className="font-display text-4xl font-bold md:text-6xl">
        Loïc Le Faucheur
      </h1>
      <p className="max-w-xl text-lg text-text-muted">
        Développeur Full-Stack Junior — passionné de code, de gaming et de
        moto.
      </p>
      <div className="flex gap-4">
        <a
          href="#projets"
          className="rounded-lg bg-primary px-6 py-3 font-semibold text-bg"
        >
          Voir mes projets
        </a>
        <a
          href="#contact"
          className="rounded-lg border border-primary px-6 py-3 text-primary"
        >
          Me contacter
        </a>
      </div>
    </section>
  )
}

export default Hero
