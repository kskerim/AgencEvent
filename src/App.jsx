// composant principal de l'application
import { ThemeProvider } from './context/ThemeContext'
import Header from './components/Header'
import Hero from './components/Hero'
import Compteur from './components/Compteur'
import Services from './components/Services'
import Realisations from './components/Realisations'
import ZoneIntervention from './components/ZoneIntervention'
import Temoignages from './components/Temoignages'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans antialiased transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <Compteur />
          <Services />
          <Realisations />
          <ZoneIntervention />
          <Temoignages />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  )
}
