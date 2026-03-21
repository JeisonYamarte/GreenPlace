import { motion } from 'motion/react'

export default function HeroCarousel() {
  return (
    <div className="relative w-full mx-auto h-full overflow-hidden ">
      <motion.figure 
        className="relative flex w-full h-full"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <motion.img 
          className="w-full h-full object-cover" 
          src="https://res.cloudinary.com/dy8f3lczs/image/upload/v1770946402/wallpaperbackgroud_aewomv.jpg" 
          alt="crochet"
          fetchPriority="high"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: 'easeInOut' 
          }}
        />
      </motion.figure>
      <motion.div 
        className='absolute inset-0 bg-black'
        initial={{ opacity: 0.6 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5, delay: 0.3, ease: 'easeOut' }}
      />
      <div className="absolute w-[95%] flex flex-col items-center top-[35%] left-1/2 transform -translate-x-1/2 text-center text-white z-10">
        <motion.img 
          className="w-16 h-16 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]" 
          src="https://res.cloudinary.com/dy8f3lczs/image/upload/v1766542433/ChatGPT_Image_23_dic_2025_23_13_18_wlqd4a.png" 
          alt="Icono ranita"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5, type: 'spring', stiffness: 200 }}
        />
        <motion.h1 
          className="text-4xl font-bold mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] w-full"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7, ease: 'easeOut' }}
        >
          Creamos lo que amas
        </motion.h1>
        <motion.p 
          className="text-lg mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9, ease: 'easeOut' }}
        >
          Productos de crochet hechos a mano con la mejor dedicación y calidad para ti.
        </motion.p>
      </div>
    </div>
  )
}
