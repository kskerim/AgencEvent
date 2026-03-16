// section des services avec effet tilt 3d au survol des cartes
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Paintbrush, Bath, Compass } from 'lucide-react'

const services = [
  {
    icon: Paintbrush,
    titre: 'Travaux de Second Oeuvre',
    description: 'Realisation de toutes les finitions interieures : peinture, revetements muraux, sols, isolation, platrerie et menuiseries.',
  },
  {
    icon: Bath,
    titre: 'Renovation Interieure',
    description: 'Modernisation complete de vos espaces : cuisines, salles de bain, optimisation des volumes, creation de nouveaux agencements.',
  },
  {
    icon: Compass,
    titre: 'Conseil et Conception',
    description: 'Accompagnement personnalise de la conception a la realisation, choix des materiaux, optimisation des plans et suivi de chantier.',
  },
]

// composant carte avec effet de rotation 3d au mouvement de la souris
function CarteTilt({ children, className }) {
  const ref = useRef(null)
  const [style, setStyle] = useState({})

  const gererMouvement = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setStyle({
      transform: `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) scale(1.02)`,
      transition: 'transform 0.1s ease-out',
    })
  }

  const gererSortie = () => {
    setStyle({
      transform: 'perspective(800px) rotateY(0deg) rotateX(0deg) scale(1)',
      transition: 'transform 0.4s ease-out',
    })
  }

  return (
    <div
      ref={ref}
      onMouseMove={gererMouvement}
      onMouseLeave={gererSortie}
      className={className}
      style={{ ...style, transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  )
}

export default function Services() {
  return (
    <section id="services" className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-6xl mx-auto px-6">
        {/* en-tete de section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">Ce Que Nous Faisons</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-zinc-900 dark:text-white mt-3 mb-4">
            Nos Services
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto">
            Des solutions completes pour transformer vos espaces avec savoir-faire et precision.
          </p>
        </motion.div>

        {/* grille de cartes avec tilt 3d */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.titre}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <CarteTilt className="bg-white dark:bg-zinc-800 p-8 rounded-2xl shadow-sm dark:shadow-none border border-zinc-100 dark:border-zinc-700/50 h-full cursor-default">
                <div className="w-14 h-14 bg-linear-to-br from-accent/20 to-indigo-400/10 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="text-accent" size={26} />
                </div>
                <h3 className="text-xl font-heading font-semibold text-zinc-900 dark:text-white mb-3">
                  {service.titre}
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </CarteTilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
