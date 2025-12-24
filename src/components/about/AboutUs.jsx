import { motion } from "motion/react"
export default function AboutUs() {
  return (
    <div className="bg-bg py-16">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-5xl mx-auto px-8 md:px-12">
          <motion.p 
            className="w-full md:w-1/2 text-left text-lg md:text-xl leading-relaxed text-gray-700"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            "Si tejer es lo que amo, técnicamente no es trabajo. Cada puntada es hecha con pasión y dedicación para crear piezas únicas que llenan de amor cada hogar."
          </motion.p>
          <motion.figure 
            className="w-full md:w-1/2 flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-green-400 rounded-full blur-2xl opacity-30 scale-105"></div>
              <img
                src="https://res.cloudinary.com/dy8f3lczs/image/upload/v1766282025/579251247_24990190117297748_2200634465641701759_n_guqffs.jpg"
                alt="Our Team"
                className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-2xl ring-4 ring-white ring-offset-4 ring-offset-bg"
              />
            </div>
            <motion.figcaption className="mt-6 text-gray-600 text-lg font-medium">
              — Valeria Garcia
            </motion.figcaption>
          </motion.figure>
        </div>
    </div>
  )
}
