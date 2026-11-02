import { motion } from 'framer-motion'

function Hero() {
  return (
    <section
      id="accueil"
      className="relative flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[100px]"
      />

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative font-mono text-sm tracking-widest text-primary uppercase"
      >
        // dev full-stack junior
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative font-display text-4xl font-bold md:text-6xl"
      >
        Loïc Le Faucheur
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative max-w-xl text-lg text-text-muted"
      >
        Passionné de code, de gaming et de moto.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative flex gap-4"
      >
        <motion.a
          href="#projets"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-primary px-6 py-3 font-semibold text-bg [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,0_100%)]"
        >
          Voir mes projets
        </motion.a>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="border border-primary px-6 py-3 text-primary [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,0_100%)]"
        >
          Me contacter
        </motion.a>
      </motion.div>
    </section>
  )
}

export default Hero
