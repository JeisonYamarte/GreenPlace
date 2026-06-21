import { motion } from 'motion/react'

const WhatsAppIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export default function HeroCarousel() {
  return (
    <div className="relative w-full mx-auto h-full overflow-hidden">
      <motion.figure
        className="relative flex w-full h-full"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <motion.img
          className="w-full h-full object-cover"
          src="https://res.cloudinary.com/dy8f3lczs/image/upload/v1770946402/wallpaperbackgroud_aewomv.jpg"
          alt="Productos de crochet hechos a mano por GreenPlace"
          fetchPriority="high"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.figure>

      <motion.div
        className="absolute inset-0 bg-black"
        initial={{ opacity: 0.6 }}
        animate={{ opacity: 0.35 }}
        transition={{ duration: 1.5, delay: 0.3, ease: 'easeOut' }}
      />

      <div className="absolute w-[95%] flex flex-col items-center top-[35%] left-1/2 -translate-x-1/2 text-center text-white z-10">
        <motion.img
          className="w-16 h-16 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
          src="https://res.cloudinary.com/dy8f3lczs/image/upload/v1766542433/ChatGPT_Image_23_dic_2025_23_13_18_wlqd4a.png"
          alt="Icono ranita de GreenPlace"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5, type: 'spring', stiffness: 200 }}
        />
        <motion.h1
          className="text-4xl lg:text-5xl font-bold mb-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] w-full"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7, ease: 'easeOut' }}
        >
          Creamos lo que amas
        </motion.h1>
        <motion.p
          className="text-base lg:text-lg mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] max-w-md"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9, ease: 'easeOut' }}
        >
          Productos de crochet hechos a mano con la mejor dedicación y calidad para ti.
        </motion.p>
        <motion.a
          href="https://api.whatsapp.com/send/?phone=584146109850&text=Hola%20GreenPlace!%20Me%20interesa%20un%20producto."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#97A87A] hover:bg-[#7a8c62] text-white font-semibold px-7 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1, ease: 'easeOut' }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.97 }}
        >
          <WhatsAppIcon />
          Pedir ahora
        </motion.a>
      </div>
    </div>
  )
}
