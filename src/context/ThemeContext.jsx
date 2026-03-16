// contexte pour la gestion du mode sombre
import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [sombre, setSombre] = useState(() => {
    const sauvegarde = localStorage.getItem('theme')
    if (sauvegarde) return sauvegarde === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    const racine = document.documentElement
    if (sombre) {
      racine.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      racine.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [sombre])

  const basculer = () => setSombre(prev => !prev)

  return (
    <ThemeContext.Provider value={{ sombre, basculer }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
