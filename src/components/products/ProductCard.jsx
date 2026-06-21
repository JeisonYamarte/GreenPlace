import { useState } from 'react'
import { motion } from "motion/react"
import { cn } from '../../lib/utils'

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  },
  exit: {
    opacity: 0, scale: 0.95,
    transition: { duration: 0.25 }
  }
}

const WhatsAppIcon = () => (
  <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const CATEGORY_META = {
  FLORES:      { label: 'Flores',      emoji: '🌸' },
  PERSONAJES:  { label: 'Personajes',  emoji: '🧸' },
  GORROS:      { label: 'Gorros',      emoji: '🧢' },
  ACCESORIOS:  { label: 'Accesorios',  emoji: '✨' },
  OTROS:       { label: 'Otros',       emoji: '🎁' },
}

export default function ProductCard({ product, category }) {
  const [loaded, setLoaded] = useState(false)
  const [showOverlay, setShowOverlay] = useState(false)

  const meta = CATEGORY_META[category] ?? { label: category, emoji: '📦' }
  const message =
    `¡Hola GreenPlace! 🌿 Me interesa uno de tus productos:\n\n` +
    `📦 Categoría: ${meta.label}\n` +
    `${meta.emoji} Producto: ${product.name}\n\n` +
    `¿Tienen disponibilidad? ¡Espero poder coordinarlo con ustedes!`
  const waUrl = `https://api.whatsapp.com/send/?phone=584146109850&text=${encodeURIComponent(message)}`

  return (
    <motion.figure
      className="bg-[#e8f0dc] w-full aspect-square lg:aspect-auto lg:h-full overflow-hidden relative group cursor-pointer"
      variants={cardVariants}
      whileHover={{ scale: 1.04, zIndex: 10, transition: { duration: 0.2 } }}
      onClick={() => setShowOverlay(prev => !prev)}
    >
      {!loaded && (
        <div className="absolute inset-0 bg-[#e8f0dc] animate-pulse" />
      )}
      <motion.img
        className={`w-full h-full object-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        src={product.image}
        alt={product.name}
        loading="lazy"
        width="400"
        height="400"
        onLoad={() => setLoaded(true)}
        onError={(e) => {
          e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22%3E%3Crect width=%22400%22 height=%22400%22 fill=%22%23e8f0dc%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 fill=%22%2397A87A%22 font-size=%2216%22%3EGreenPlace%3C/text%3E%3C/svg%3E'
          setLoaded(true)
        }}
        whileHover={{ scale: 1.08, transition: { duration: 0.4, ease: 'easeOut' } }}
      />

      {/* Overlay: hover en desktop, tap en mobile */}
      <div className={cn(
        "absolute inset-0 bg-black/45 transition-opacity duration-300 flex items-end justify-center pb-3",
        showOverlay
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto"
      )}>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Pedir ${product.name} por WhatsApp`}
          className="bg-[#25D366] hover:bg-[#1da851] text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md transition-colors active:scale-95"
          onClick={(e) => e.stopPropagation()}
        >
          <WhatsAppIcon />
          Pedir este
        </a>
      </div>
    </motion.figure>
  )
}
