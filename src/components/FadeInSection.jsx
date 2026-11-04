import { motion } from 'framer-motion'

function FadeInSection({ id, className, glow, children }) {
  // Si on arrive directement sur cette section via une ancre (ex: lien de nav
  // depuis une autre page), on l'affiche tout de suite : un saut de page ne
  // déclenche pas toujours l'observateur de scroll qui gère l'animation.
  const isDirectTarget =
    typeof window !== 'undefined' && window.location.hash === `#${id}`

  return (
    <motion.section
      id={id}
      className="relative scroll-mt-24 overflow-hidden py-24"
      initial={isDirectTarget ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 'some' }}
      transition={{ duration: 0.6 }}
    >
      {glow}
      <div className={className}>{children}</div>
    </motion.section>
  )
}

export default FadeInSection
