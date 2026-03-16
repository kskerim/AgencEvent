// section des chiffres cles avec compteurs animes au scroll
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Clock, Briefcase, ThumbsUp, MapPin } from 'lucide-react'

const stats = [
  { icon: Clock, valeur: 10, suffixe: '+', label: "Annees d'Experience", description: 'Au service de vos projets' },
  { icon: Briefcase, valeur: 500, suffixe: '+', label: 'Projets Realises', description: 'Renovation et amenagement' },
  { icon: ThumbsUp, valeur: 98, suffixe: '%', label: 'Clients Satisfaits', description: 'Qualite et confiance' },
  { icon: MapPin, valeur: 30, suffixe: '+', label: "Zones d'Intervention", description: 'Paris et Ile-de-France' },
]

// hook pour animer un nombre de 0 a la valeur cible
function useCompteur(fin, actif, duree = 2000) {
  const [compte, setCompte] = useState(0)

  useEffect(() => {
    if (!actif) return
    let debut = 0
    const pas = fin / (duree / 16)
    const timer = setInterval(() => {
      debut += pas
      if (debut >= fin) {
        setCompte(fin)
        clearInterval(timer)
      } else {
        setCompte(Math.floor(debut))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [actif, fin, duree])

  return compte
}

function CarteCompteur({ stat, index }) {
  const ref = useRef(null)
  const [enVue, setEnVue] = useState(false)
  const compte = useCompteur(stat.valeur, enVue)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setEnVue(true) },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="w-14 h-14 mx-auto mb-4 bg-accent/10 dark:bg-accent/20 rounded-2xl flex items-center justify-center">
        <stat.icon className="text-accent" size={24} />
      </div>
      <div className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-1 font-heading">
        {compte}{stat.suffixe}
      </div>
      <div className="text-sm font-semibold text-zinc-700 dark:text-zinc-200 mb-1">{stat.label}</div>
      <div className="text-xs text-zinc-500 dark:text-zinc-400">{stat.description}</div>
    </motion.div>
  )
}

export default function Compteur() {
  return (
    <section className="py-20 bg-white dark:bg-zinc-900 border-y border-zinc-100 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((stat, i) => (
            <CarteCompteur key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
