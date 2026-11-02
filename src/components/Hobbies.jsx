function Hobbies() {
  return (
    <section id="hobbies" className="mx-auto max-w-3xl px-6 py-24">
      <h2 className="font-display text-3xl font-bold md:text-4xl">
        Hobbies tech
      </h2>

      <div className="mt-10 rounded-xl border border-white/10 bg-bg-elevated p-6">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-lg font-semibold">
            Broken Sunshine — conception d'un RPG
          </h3>
          <span className="shrink-0 rounded-full border border-white/20 px-2.5 py-0.5 text-xs text-text-muted">
            En pause
          </span>
        </div>

        <p className="mt-3 text-sm text-text-muted">
          Avec deux amis, je travaille par intermittence sur Broken Sunshine,
          un RPG au tour par tour pensé pour Unity. Mon rôle : l'équilibrage —
          construire les courbes de progression des personnages et valider
          mathématiquement que les écarts entre eux restent cohérents, plutôt
          que de les régler à l'instinct.
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {['Game Design', 'Équilibrage', 'Narration', 'Unity (à venir)'].map(
            (tag) => (
              <li
                key={tag}
                className="rounded-full bg-white/5 px-3 py-1 text-xs text-text-muted"
              >
                {tag}
              </li>
            ),
          )}
        </ul>
      </div>
    </section>
  )
}

export default Hobbies
