// carrousel de temoignages clients avec defilement automatique infini
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const temoignages = [
  { auteur: 'Francois Degare', lieu: 'Paris 15e', note: 5, texte: "Un travail exceptionnel sur la renovation de ma salle de bain. Le carrelage a ete pose avec une precision remarquable et les finitions sont impeccables." },
  { auteur: 'Marie Laurent', lieu: 'Paris 11e', note: 5, texte: "Equipe tres professionnelle et a l'ecoute. La pose du carrelage dans ma cuisine a ete realisee dans les delais et avec un soin particulier aux details." },
  { auteur: 'Thomas Dubois', lieu: 'Paris 7e', note: 4, texte: "Excellent travail sur la renovation de mon salon. Le carrelage effet pierre naturelle apporte une touche d'elegance a mon interieur." },
  { auteur: 'Sophie Martin', lieu: 'Paris 16e', note: 5, texte: "Service impeccable du debut a la fin. Le carrelage de ma salle de bain a ete pose avec une precision remarquable." },
  { auteur: 'Pierre Durand', lieu: 'Paris 13e', note: 4, texte: "Travail soigne et professionnel. La pose du carrelage dans ma cuisine a transforme completement l'espace." },
  { auteur: 'Julie Moreau', lieu: 'Paris 9e', note: 5, texte: "Une equipe a l'ecoute et tres professionnelle. Le carrelage de ma salle de bain est magnifique, les joints sont parfaits." },
  { auteur: 'Lucas Petit', lieu: 'Paris 20e', note: 4, texte: "Excellent rapport qualite-prix. Le carrelage de mon salon a ete pose avec soin et dans les delais convenus." },
  { auteur: 'Camille Bernard', lieu: 'Paris 14e', note: 5, texte: "Travail remarquable sur la renovation de ma cuisine. Le carrelage est pose a la perfection, les finitions sont impeccables." },
  { auteur: 'Sophie Dubois', lieu: 'Lyon 6e', note: 5, texte: "Le travail d'electricite dans mon appartement a ete fait avec une precision incroyable. C'est securise et esthetiquement parfait." },
  { auteur: 'David Leclerc', lieu: 'Marseille 8e', note: 4, texte: "J'ai fait appel pour une renovation de carrelage dans ma cuisine. Le resultat est magnifique et rapide." },
  { auteur: 'Antoine Moreau', lieu: 'Nice', note: 5, texte: "Pose de carrelage dans ma salle de bain parfaite. Proprete du chantier impeccable." },
  { auteur: 'Thomas Girard', lieu: 'Lille', note: 5, texte: "Maitrise parfaite de la peinture interieure. Couleurs vives et finitions soignees. Un vrai plus pour ma maison." },
]

// affichage des etoiles de notation
function Etoiles({ note }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < note ? 'fill-amber-400 text-amber-400' : 'text-zinc-200 dark:text-zinc-600'}
        />
      ))}
    </div>
  )
}

// carte individuelle avec initiale de l'auteur et icone citation
function CarteTemoignage({ t }) {
  return (
    <div className="shrink-0 w-85 bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-700/50 relative">
      <Quote className="absolute top-4 right-4 text-accent/10" size={32} />
      <Etoiles note={t.note} />
      <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mt-4 mb-5">
        "{t.texte}"
      </p>
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-linear-to-br from-accent to-indigo-400 flex items-center justify-center text-white text-xs font-bold">
          {t.auteur.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-semibold text-zinc-900 dark:text-white">{t.auteur}</p>
          <p className="text-xs text-zinc-400">{t.lieu}</p>
        </div>
      </div>
    </div>
  )
}

export default function Temoignages() {
  // duplication pour creer l'effet de defilement infini
  const tous = [...temoignages, ...temoignages]

  return (
    <section className="py-24 bg-white dark:bg-zinc-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* en-tete de section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">Temoignages</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-zinc-900 dark:text-white mt-3 mb-4">
            Ce Que Disent Nos Clients
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto">
            La satisfaction de nos clients est notre meilleure carte de visite.
          </p>
        </motion.div>
      </div>

      {/* carrousel avec degrades lateraux */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-white dark:from-zinc-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-white dark:from-zinc-900 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 animate-scroll" style={{ width: 'max-content' }}>
          {tous.map((t, i) => (
            <CarteTemoignage key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  )
}
