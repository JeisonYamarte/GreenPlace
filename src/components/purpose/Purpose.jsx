import { motion } from "motion/react"
import {
  Heart,
  Gift,
  Brain,
  Plane,
  ThumbsUp,
  ClockCheck
} from "lucide-react"

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.92 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      delay: i * 0.08,
      ease: [0.16, 1, 0.3, 1]
    }
  })
}

const Card = ({ Icon, title, subtitle, index }) => {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={cardVariants}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="w-full bg-white/70 backdrop-blur-sm border border-[#97A87A]/15 rounded-2xl text-center py-5 px-3 md:py-7 md:px-5 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-default"
    >
      <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 rounded-full bg-[#FF6F61]/10 flex items-center justify-center">
        <Icon className="w-7 h-7 md:w-8 md:h-8 text-[#FF6F61]" />
      </div>
      <h2 className="text-base md:text-lg font-bold mb-2 text-gray-800 capitalize">{title}</h2>
      <p className="text-sm md:text-sm text-gray-500 leading-relaxed">{subtitle}</p>
    </motion.div>
  )
}

export function Purpose() {
  const info = [
    { icon: Heart, title: 'encuentra lo que amas', subtitle: 'Nuestra tienda está repleta de maravillas hechas a mano.' },
    { icon: Gift, title: 'si buscas algo para regalar', subtitle: 'Los mejores regalos son los hechos con amor.' },
    { icon: Brain, title: 'creamos lo que imagines', subtitle: 'Modelos personalizados únicos para ti.' },
    { icon: Plane, title: 'envíos a todo el país', subtitle: 'Llevamos nuestras creaciones hasta donde estés.' },
    { icon: ThumbsUp, title: 'calidad garantizada', subtitle: 'Cada producto elaborado con los mejores materiales.' },
    { icon: ClockCheck, title: 'comprometidos con tu tiempo', subtitle: 'Cumplimos con los plazos acordados, siempre.' },
  ]

  return (
    <section id="aboutUs" className="bg-bg py-14 md:py-20 lg:py-24 px-4 md:px-8 lg:px-12">
      <motion.div
        className="text-center mb-10 md:mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-[#97A87A] mb-2">¿Por qué GreenPlace?</h2>
        <p className="text-gray-500 text-sm sm:text-base">Todo lo que hacemos, lo hacemos con amor y dedicación</p>
      </motion.div>
      <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
        {info.map((item, index) => (
          <Card
            key={index}
            Icon={item.icon}
            title={item.title}
            subtitle={item.subtitle}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}
