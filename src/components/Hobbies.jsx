import FadeInSection from './FadeInSection'
import SectionHeading from './SectionHeading'
import TechTag from './TechTag'

function Hobbies() {
  return (
    <FadeInSection id="hobbies" className="mx-auto max-w-3xl scroll-mt-24 px-6 py-24">
      <SectionHeading number="+" title="Hobbies tech" />

      <div className="rounded-lg border border-dashed border-white/20 bg-bg-elevated/50 p-6">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-lg font-semibold">
            Broken Sunshine — conception d'un RPG
          </h3>
          <span className="shrink-0 rounded-full border border-highlight/40 bg-highlight/10 px-2.5 py-0.5 text-xs font-semibold text-highlight">
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
              <TechTag key={tag}>{tag}</TechTag>
            ),
          )}
        </ul>
      </div>
    </FadeInSection>
  )
}

export default Hobbies
