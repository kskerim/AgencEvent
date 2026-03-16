// carte interactive des zones d'intervention avec theme adaptatif
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import { useTheme } from '../context/ThemeContext'

// icone personnalisee pour les marqueurs
const markerIcon = L.divIcon({
  className: 'marker-custom',
  iconSize: [12, 12],
  popupAnchor: [0, -10],
})

// liste des zones d'intervention
const zones = [
  { name: 'Paris 15e - Grenelle', coords: [48.846, 2.2878] },
  { name: 'Paris 15e - Javel', coords: [48.836, 2.266] },
  { name: 'Paris 15e - Vaugirard', coords: [48.838, 2.3035] },
  { name: 'Paris 15e - Commerce', coords: [48.848, 2.285] },
  { name: 'Paris 16e - Passy', coords: [48.86, 2.274] },
  { name: 'Paris 16e - Auteuil', coords: [48.851, 2.254] },
  { name: 'Paris 16e - Chaillot', coords: [48.864, 2.287] },
  { name: 'Paris 8e - Champs-Elysees', coords: [48.8698, 2.307] },
  { name: 'Paris 8e - Madeleine', coords: [48.87, 2.322] },
  { name: 'Paris 6e - Saint-Germain', coords: [48.8535, 2.334] },
  { name: 'Paris 7e - Tour Eiffel', coords: [48.8584, 2.2945] },
  { name: 'Paris 7e - Invalides', coords: [48.856, 2.312] },
  { name: 'Le Marais', coords: [48.858, 2.36] },
  { name: 'Montmartre', coords: [48.886, 2.343] },
  { name: 'Bastille', coords: [48.851, 2.368] },
  { name: 'Republique', coords: [48.867, 2.364] },
  { name: 'Quartier Latin', coords: [48.846, 2.345] },
  { name: 'Belleville', coords: [48.878, 2.382] },
  { name: 'Paris 1er - Chatelet', coords: [48.8595, 2.347] },
  { name: 'Paris 9e - Opera', coords: [48.871, 2.331] },
  { name: 'Paris 10e - Gare du Nord', coords: [48.88, 2.354] },
  { name: 'Paris 11e - Oberkampf', coords: [48.863, 2.374] },
  { name: 'Paris 12e - Gare de Lyon', coords: [48.8445, 2.373] },
  { name: "Paris 13e - Place d'Italie", coords: [48.833, 2.355] },
  { name: 'Paris 14e - Montparnasse', coords: [48.839, 2.325] },
  { name: 'Paris 17e - Ternes', coords: [48.88, 2.294] },
  { name: 'Paris 18e - Abbesses', coords: [48.885, 2.338] },
  { name: 'Paris 19e - Buttes-Chaumont', coords: [48.88, 2.377] },
  { name: 'Paris 20e - Pere Lachaise', coords: [48.861, 2.393] },
  { name: 'Boulogne-Billancourt', coords: [48.835, 2.245] },
  { name: 'Issy-les-Moulineaux', coords: [48.825, 2.266] },
]

// composant pour limiter les bornes de la carte
function LimitesCarte() {
  const map = useMap()
  useEffect(() => {
    const bornes = L.latLngBounds([48.815, 2.223], [48.902, 2.469])
    map.setMaxBounds(bornes)
    map.setMinZoom(11)
  }, [map])
  return null
}

export default function ZoneIntervention() {
  const { sombre } = useTheme()

  // tuile de carte adaptee au theme
  const tileUrl = sombre
    ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
    : 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'

  return (
    <section className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-6xl mx-auto px-6">
        {/* en-tete de section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">Ou Nous Trouver</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-zinc-900 dark:text-white mt-3 mb-4">
            Zone d'Intervention
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto">
            Nous intervenons sur Paris et sa proche banlieue pour tous vos projets de renovation.
          </p>
        </motion.div>

        {/* carte leaflet */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden shadow-sm border border-zinc-200 dark:border-zinc-700"
        >
          <MapContainer
            center={[48.8566, 2.3522]}
            zoom={12}
            className="h-125 w-full"
            scrollWheelZoom={false}
          >
            <TileLayer
              key={sombre ? 'dark' : 'light'}
              url={tileUrl}
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
            />
            <LimitesCarte />
            {zones.map((zone) => (
              <Marker key={zone.name} position={zone.coords} icon={markerIcon}>
                <Popup>
                  <span className="text-sm font-medium">{zone.name}</span>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </motion.div>
      </div>
    </section>
  )
}
