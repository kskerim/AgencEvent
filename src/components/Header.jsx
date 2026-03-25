// navigation fixe avec bascule mode sombre et menu mobile
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const liens = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#services', label: 'Services' },
  { href: '#realisations', label: 'Realisations' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [ouvert, setOuvert] = useState(false)
  const [defilement, setDefilement] = useState(false)
  const { sombre, basculer } = useTheme()

  useEffect(() => {
    const gerer = () => setDefilement(window.scrollY > 20)
    window.addEventListener('scroll', gerer)
    return () => window.removeEventListener('scroll', gerer)
  }, [])

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      defilement
        ? 'bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl shadow-sm'
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* logo */}
        <a href="#accueil" className={`font-heading text-xl font-bold tracking-tight transition-colors ${
          defilement || ouvert ? 'text-zinc-900 dark:text-white' : 'text-white'
        }`}>
          AgencEvent
        </a>

        {/* navigation desktop + bascule theme */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8">
            {liens.map(l => (
              <a
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  defilement ? 'text-zinc-600 dark:text-zinc-300' : 'text-white/80 hover:text-white'
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <button
            onClick={basculer}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
              defilement
                ? 'hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300'
                : 'hover:bg-white/10 text-white/80'
            }`}
            aria-label="changer le theme"
          >
            <AnimatePresence mode="wait">
              {sombre ? (
                <motion.div key="soleil" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Sun size={18} />
                </motion.div>
              ) : (
                <motion.div key="lune" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Moon size={18} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* boutons mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={basculer}
            className={`w-9 h-9 rounded-full flex items-center justify-center ${
              defilement ? 'text-zinc-600 dark:text-zinc-300' : 'text-white/80'
            }`}
            aria-label="changer le theme"
          >
            {sombre ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className={`w-9 h-9 rounded-full flex items-center justify-center ${
              defilement || ouvert ? 'text-zinc-600 dark:text-zinc-300' : 'text-white/80'
            }`}
            onClick={() => setOuvert(!ouvert)}
            aria-label="menu"
          >
            {ouvert ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* menu mobile deroulant */}
      <AnimatePresence>
        {ouvert && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-zinc-900 border-t border-zinc-100 dark:border-zinc-800 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {liens.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOuvert(false)}
                  className="text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-accent transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
