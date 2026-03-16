// pied de page avec navigation, contact et copyright
const liens = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#services', label: 'Services' },
  { href: '#realisations', label: 'Realisations' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-zinc-900 dark:bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* colonne entreprise */}
          <div>
            <h3 className="font-heading text-xl font-bold text-white mb-2">
              Second'Art <span className="text-accent-light">BTP</span>
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Entreprise generale du batiment specialisee dans le second oeuvre, la renovation interieure et l'amenagement de vos espaces.
            </p>
          </div>

          {/* colonne navigation */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Navigation</h4>
            <nav className="flex flex-col gap-2">
              {liens.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm text-zinc-400 hover:text-accent-light transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* colonne contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact</h4>
            <div className="flex flex-col gap-2 text-sm text-zinc-400">
              <a href="tel:+33616140136" className="hover:text-accent-light transition-colors">
                +33 6 16 14 01 36
              </a>
              <a href="mailto:contact@secondartbtp.fr" className="hover:text-accent-light transition-colors">
                contact@secondartbtp.fr
              </a>
              <span>Paris et Ile-de-France</span>
            </div>
          </div>
        </div>

        {/* separateur et copyright */}
        <div className="border-t border-zinc-800 mt-12 pt-8 text-center">
          <p className="text-xs text-zinc-500">
            &copy; {new Date().getFullYear()} Second'Art BTP — Tous droits reserves.
          </p>
        </div>
      </div>
    </footer>
  )
}
