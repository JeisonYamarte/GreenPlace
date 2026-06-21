import { useState, useEffect } from 'react'
import { motion } from 'motion/react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex justify-center"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
    >
      <div className={`w-full max-w-3xl mx-auto px-4 rounded-b-xl transition-all duration-500 ${
        scrolled
          ? 'bg-[#FCF9EA]/95 backdrop-blur-md shadow-md py-2'
          : 'bg-black/25 backdrop-blur-sm py-4'
      }`}>
        <motion.div
          className="flex flex-col items-center overflow-hidden"
          animate={{ height: scrolled ? 0 : 'auto', opacity: scrolled ? 0 : 1 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <figure className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#97A87A]">
            <img
              className="w-full h-full object-cover"
              src="https://res.cloudinary.com/dy8f3lczs/image/upload/v1765939145/497957171_17930717010062249_363873050315841911_n_qiflyq.webp"
              alt="Logo de GreenPlace"
            />
          </figure>
          <p className="font-extrabold text-4xl bg-[#97A87A] bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] [-webkit-text-stroke:0.5px_rgba(255,255,255,0.4)]">GreenPlace</p>
          <p className="text-xs text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">Ideas hechas a mano</p>
        </motion.div>

        <nav aria-label="Navegación principal" className="w-full mt-2">
          <hr className={`mb-2 mt-1 transition-colors duration-500 ${scrolled ? 'border-[#97A87A]/30' : 'border-white/30'}`} />
          <ul className={`flex gap-2 justify-between text-sm font-medium transition-colors duration-500 ${
            scrolled ? 'text-gray-700' : 'text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]'
          }`}>
            <li><a href="#aboutUs" className="hover:text-[#97A87A] transition-colors">Sobre nosotros</a></li>
            <li><a href="#products" className="hover:text-[#97A87A] transition-colors">Productos</a></li>
            <li><a href="#courses" className="hover:text-[#97A87A] transition-colors">Nuestra historia</a></li>
            <li><a href="#contact" className="hover:text-[#97A87A] transition-colors">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </motion.header>
  )
}
