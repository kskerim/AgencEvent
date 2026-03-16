// bouton flottant pour remonter en haut de la page
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp } from 'lucide-react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const gerer = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', gerer)
    return () => window.removeEventListener('scroll', gerer)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-accent text-white rounded-2xl shadow-lg shadow-accent/25 hover:bg-indigo-700 transition-colors flex items-center justify-center z-50"
          aria-label="remonter en haut"
        >
          <ChevronUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
