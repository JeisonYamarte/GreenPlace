import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useInView } from 'react-intersection-observer'
import ProductCard from './ProductCard'
import {
  productsFlowers,
  productsCharacters,
  productsHats,
  productsAccessories,
  productsOthers
} from './products.data'

const CATEGORIES = [
  { key: 'FLORES',     label: 'Flores',     shortLabel: 'Flores'  },
  { key: 'PERSONAJES', label: 'Personajes', shortLabel: 'Perso.'  },
  { key: 'GORROS',     label: 'Gorros',     shortLabel: 'Gorros'  },
  { key: 'ACCESORIOS', label: 'Accesorios', shortLabel: 'Acces.'  },
  { key: 'OTROS',      label: 'Otros',      shortLabel: 'Otros'   },
]

const categoryMap = {
  FLORES:     productsFlowers,
  PERSONAJES: productsCharacters,
  GORROS:     productsHats,
  ACCESORIOS: productsAccessories,
  OTROS:      productsOthers,
}

export default function Products() {
  const [category, setCategory] = useState('FLORES')
  const [productsToShow, setProductsToShow] = useState(productsFlowers)
  const { ref: gridRef, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  const handleCategoryChange = (key) => {
    setCategory(key)
    setProductsToShow(categoryMap[key] ?? productsFlowers)
  }

  return (
    <div id="products" className="bg-bg w-full max-w-[1140px] mx-auto py-6 px-0">
      <motion.h2
        className="text-center text-[#97A87A] font-semibold text-2xl sm:text-3xl mb-5 px-4"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        mira nuestros productos
      </motion.h2>

      <div className="relative">
        {/* Category nav — natural flow on mobile, absolute overlay on desktop */}
        <nav className="mb-3 lg:absolute lg:bottom-0 lg:left-0 lg:right-0 lg:mb-0 lg:z-10">
          <ul className="relative grid grid-cols-5 h-11 bg-gray-100/80 rounded-xl lg:rounded-none overflow-hidden mx-4 lg:mx-0">
            <motion.li
              className="absolute top-0 left-0 w-[20%] h-full bg-[#97A87A] rounded-lg lg:rounded-none z-0 pointer-events-none"
              transition={{ type: 'spring', stiffness: 500, damping: 35 }}
              animate={{ left: `${CATEGORIES.findIndex(c => c.key === category) * 20}%` }}
            />
            {CATEGORIES.map((cat) => (
              <li
                key={cat.key}
                role="button"
                tabIndex={0}
                aria-pressed={category === cat.key}
                className={`relative flex items-center justify-center cursor-pointer h-full z-10 transition-colors duration-200 select-none ${
                  category === cat.key ? 'text-white font-bold' : 'text-gray-600'
                }`}
                onClick={() => handleCategoryChange(cat.key)}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleCategoryChange(cat.key)}
              >
                <span className="sm:hidden text-[10px] font-medium leading-none truncate px-0.5">{cat.shortLabel}</span>
                <span className="hidden sm:block text-xs font-medium truncate px-1">{cat.label}</span>
              </li>
            ))}
          </ul>
        </nav>

        {/* Product grid */}
        <motion.div
          ref={gridRef}
          key={category}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:h-72"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.06, delayChildren: 0.04 }
            }
          }}
        >
          <AnimatePresence mode="wait">
            {productsToShow.map((product) => (
              <ProductCard key={product.id} product={product} category={category} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}
