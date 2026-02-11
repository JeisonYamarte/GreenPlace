import { motion } from 'motion/react'

export default function Navbar() {
  return (
    <motion.div 
      className="absolute top-0 left-0 right-0 mx-auto flex flex-col items-center justify-center p-4 bg-bg rounded-b-lg text-white h-auto z-10 w-full max-w-3xl"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
    >
      <motion.div 
        className="flex flex-col items-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <figure className="w-12 h-12 rounded-full overflow-hidden border-coral-500">
          <img className="w-full h-full object-cover" src="https://res.cloudinary.com/dy8f3lczs/image/upload/v1765939145/497957171_17930717010062249_363873050315841911_n_qiflyq.webp" alt="logo-green-place" />
        </figure>
        <h2 className="font-extrabold text-3xl bg-gradient-to-r from-[#97A87A] via-[#B5C99A] to-[#97A87A] bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">GreenPlace</h2>
        <h4 className="text-xs text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">Ideas hechas a mano</h4>
      </motion.div>
      <motion.nav 
        className="w-full mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
          <hr className="border-[rgb(var(--color-secondary))] mb-2 mt-2" />
        <ul className="flex gap-2 justify-between text-sm font-medium text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          <li><a href="#aboutUs" className="hover:text-[#B5C99A] transition-colors">Sobre nosotros</a></li>
          <li><a href="#products" className="hover:text-[#B5C99A] transition-colors">Productos</a></li>
          <li><a href="#courses" className="hover:text-[#B5C99A] transition-colors">Aprender</a></li>
          <li><a href="#contact" className="hover:text-[#B5C99A] transition-colors">Contacto</a></li>
        </ul>
      </motion.nav>

    </motion.div>
  )
}
