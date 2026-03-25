// section hero avec animation de texte et effet curseur lumineux
import { useState } from 'react'
import { motion } from 'framer-motion'

const motsTitre = ['Votre', 'Partenaire', 'De', 'Confiance']
const motsSousTitre = ['Pour', 'Tous', 'Vos', 'Projets', 'De', 'Renovation']

export default function Hero() {
  const [souris, setSouris] = useState({ x: 0, y: 0 })

  const gererSouris = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setSouris({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center bg-zinc-900 dark:bg-zinc-950 overflow-hidden grain"
      onMouseMove={gererSouris}
    >
      {/* lueurs decoratives d'ambiance */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-violet-500/10 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[80px]" />

      {/* halo lumineux qui suit le curseur */}
      <div
        className="absolute inset-0 opacity-60 pointer-events-none transition-opacity duration-300 z-[2]"
        style={{
          background: `radial-gradient(800px circle at ${souris.x}px ${souris.y}px, rgba(99,102,241,0.07), transparent 40%)`
        }}
      />

      {/* contenu principal */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* badge entreprise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm"
        >
          <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
          <span className="text-xs font-medium text-zinc-400 tracking-widest uppercase">
            Entreprise Generale du Batiment
          </span>
        </motion.div>

        {/* nom de l'entreprise */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight"
        >
          AgencEvent
        </motion.h1>

        {/* titre anime mot par mot */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading text-white/90 mb-6 leading-tight">
          {motsTitre.map((mot, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
              className="inline-block mr-[0.3em]"
            >
              {mot}
            </motion.span>
          ))}
        </h2>

        {/* sous-titre anime */}
        <div className="text-lg md:text-xl text-zinc-400 mb-12">
          {motsSousTitre.map((mot, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 1.2 + i * 0.08 }}
              className="inline-block mr-[0.25em]"
            >
              {mot}
            </motion.span>
          ))}
        </div>

        {/* boutons d'action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#realisations"
            className="px-8 py-3.5 bg-accent text-white text-sm font-medium rounded-xl hover:bg-indigo-700 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25"
          >
            Decouvrir Nos Realisations
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 border border-white/15 text-white text-sm font-medium rounded-xl hover:bg-white/5 transition-all duration-300 backdrop-blur-sm"
          >
            Nous Contacter
          </a>
        </motion.div>

        {/* indicateur de scroll anime */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-white/40 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
