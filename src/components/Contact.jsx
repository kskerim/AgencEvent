// section contact avec coordonnees et liens d'action directs
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react'

const infos = [
  {
    icon: Phone,
    label: 'Telephone',
    valeur: '+33 6 16 14 01 36',
    lien: 'tel:+33616140136',
  },
  {
    icon: Mail,
    label: 'Email',
    valeur: 'contact@agencevent.fr',
    lien: 'mailto:contact@agencevent.fr',
  },
  {
    icon: MapPin,
    label: 'Adresse',
    valeur: 'Paris et Ile-de-France',
    lien: null,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-6xl mx-auto px-6">
        {/* en-tete de section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">Parlons de Votre Projet</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-zinc-900 dark:text-white mt-3 mb-4">
            Contactez-Nous
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto">
            Un projet en tete ? N'hesitez pas a nous contacter pour un devis gratuit et personnalise.
          </p>
        </motion.div>

        {/* grille de cartes contact */}
        <div className="max-w-2xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-6">
            {infos.map((info, i) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {info.lien ? (
                  <a
                    href={info.lien}
                    className="block bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-700/50 hover:border-accent/30 dark:hover:border-accent/30 transition-all group text-center h-full"
                  >
                    <div className="w-12 h-12 mx-auto mb-4 bg-accent/10 dark:bg-accent/20 rounded-2xl flex items-center justify-center group-hover:bg-accent transition-colors">
                      <info.icon className="text-accent group-hover:text-white transition-colors" size={22} />
                    </div>
                    <p className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-2">{info.label}</p>
                    <p className="text-sm font-medium text-zinc-900 dark:text-white flex items-center justify-center gap-1">
                      {info.valeur}
                      <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-accent" />
                    </p>
                  </a>
                ) : (
                  <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-700/50 text-center h-full">
                    <div className="w-12 h-12 mx-auto mb-4 bg-accent/10 dark:bg-accent/20 rounded-2xl flex items-center justify-center">
                      <info.icon className="text-accent" size={22} />
                    </div>
                    <p className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-2">{info.label}</p>
                    <p className="text-sm font-medium text-zinc-900 dark:text-white">{info.valeur}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* bouton d'appel a l'action principal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-12"
          >
            <a
              href="tel:+33616140136"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-white text-sm font-medium rounded-xl hover:bg-indigo-700 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25"
            >
              <Phone size={16} />
              Demander un Devis Gratuit
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
