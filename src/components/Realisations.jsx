// slider des realisations avec transitions animees et defilement auto
import { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const realisations = [
  {
    titre: 'Renovation Carrelage Salle de Bain',
    description: "Depose de l'ancien revetement, preparation du support, pose de carrelage mural et au sol, joints hydrofuges, finitions soignees.",
    tag: 'Carrelage',
    avant: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=900&q=80',
    apres: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=900&q=80',
  },
  {
    titre: 'Pose de Carrelage Cuisine',
    description: 'Remplacement du carrelage ancien, pose de carreaux grands formats, alignement parfait, finitions propres et durables.',
    tag: 'Carrelage',
    avant: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=900&q=80',
    apres: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80',
  },
  {
    titre: 'Carrelage Sol Salon',
    description: 'Mise a niveau du sol, pose de carrelage effet pierre naturelle, joints discrets, resultat moderne et lumineux.',
    tag: 'Carrelage',
    avant: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=900&q=80',
    apres: 'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=900&q=80',
  },
  {
    titre: 'Transformation Salle de Bain',
    description: 'Ancienne salle de bain renovee, carrelage mural et sol, ambiance lumineuse et moderne, finitions haut de gamme.',
    tag: 'Carrelage',
    avant: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3fd8?auto=format&fit=crop&w=900&q=80',
    apres: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=900&q=80',
  },
]

export default function Realisations() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const aller = useCallback((nouvelIndex) => {
    setDirection(nouvelIndex > index ? 1 : -1)
    setIndex(nouvelIndex)
  }, [index])

  const precedent = () => aller((index - 1 + realisations.length) % realisations.length)
  const suivant = useCallback(() => aller((index + 1) % realisations.length), [aller, index])

  // defilement automatique toutes les 6 secondes
  useEffect(() => {
    const timer = setInterval(suivant, 6000)
    return () => clearInterval(timer)
  }, [suivant])

  const slide = realisations[index]

  const variants = {
    entree: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    centre: { x: 0, opacity: 1 },
    sortie: (dir) => ({ x: dir < 0 ? 300 : -300, opacity: 0 }),
  }

  return (
    <section id="realisations" className="py-24 bg-white dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* en-tete de section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">Portfolio</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-zinc-900 dark:text-white mt-3 mb-4">
            Nos Realisations
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto">
            Decouvrez nos transformations avant et apres, realisees avec soin et professionnalisme.
          </p>
        </motion.div>

        {/* slider principal */}
        <div className="max-w-5xl mx-auto">
          <div className="relative flex items-center gap-4">
            {/* bouton precedent */}
            <button
              onClick={precedent}
              className="shrink-0 w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-accent hover:text-white dark:hover:bg-accent flex items-center justify-center transition-all text-zinc-600 dark:text-zinc-300 shadow-sm"
              aria-label="precedent"
            >
              <ChevronLeft size={20} />
            </button>

            {/* contenu anime */}
            <div className="flex-1 overflow-hidden rounded-2xl bg-zinc-50 dark:bg-zinc-800 shadow-sm">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={index}
                  custom={direction}
                  variants={variants}
                  initial="entree"
                  animate="centre"
                  exit="sortie"
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                >
                  {/* images avant / apres */}
                  <div className="grid md:grid-cols-2">
                    <div className="relative overflow-hidden">
                      <span className="absolute top-4 left-4 bg-zinc-900/70 text-white text-xs font-semibold px-3 py-1.5 rounded-full z-10 backdrop-blur-sm">
                        Avant
                      </span>
                      <img
                        src={slide.avant}
                        alt={`avant - ${slide.titre}`}
                        className="w-full h-64 md:h-96 object-cover"
                      />
                    </div>
                    <div className="relative overflow-hidden">
                      <span className="absolute top-4 left-4 bg-accent/90 text-white text-xs font-semibold px-3 py-1.5 rounded-full z-10 backdrop-blur-sm">
                        Apres
                      </span>
                      <img
                        src={slide.apres}
                        alt={`apres - ${slide.titre}`}
                        className="w-full h-64 md:h-96 object-cover"
                      />
                    </div>
                  </div>

                  {/* description du projet */}
                  <div className="p-8">
                    <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1.5 rounded-full">
                      {slide.tag}
                    </span>
                    <h3 className="text-xl font-heading font-semibold text-zinc-900 dark:text-white mt-4 mb-2">
                      {slide.titre}
                    </h3>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                      {slide.description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* bouton suivant */}
            <button
              onClick={suivant}
              className="shrink-0 w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-accent hover:text-white dark:hover:bg-accent flex items-center justify-center transition-all text-zinc-600 dark:text-zinc-300 shadow-sm"
              aria-label="suivant"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* indicateurs de position avec compteur */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className="text-sm text-zinc-400 dark:text-zinc-500 font-medium tabular-nums">
              {String(index + 1).padStart(2, '0')} / {String(realisations.length).padStart(2, '0')}
            </span>
            <div className="flex gap-2">
              {realisations.map((_, i) => (
                <button
                  key={i}
                  onClick={() => aller(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? 'bg-accent w-8' : 'bg-zinc-300 dark:bg-zinc-600 w-1.5'
                  }`}
                  aria-label={`slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
