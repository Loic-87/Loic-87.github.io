import { motion } from 'framer-motion'

function Hero() {
  return (
    <section
      id="accueil"
      className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center"
    >
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-display text-4xl font-bold md:text-6xl"
      >
        Loïc Le Faucheur
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="max-w-xl text-lg text-text-muted"
      >
        Développeur Full-Stack Junior — passionné de code, de gaming et de
        moto.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex gap-4"
      >
        <motion.a
          href="#projets"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-lg bg-primary px-6 py-3 font-semibold text-bg"
        >
          Voir mes projets
        </motion.a>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-lg border border-primary px-6 py-3 text-primary"
        >
          Me contacter
        </motion.a>
      </motion.div>
    </section>
  )
}

export default Hero
