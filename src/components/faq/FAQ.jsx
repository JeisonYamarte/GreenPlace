import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronDown } from 'lucide-react'
import Flower from '../SVG/flower1'

const faqs = [
  {
    q: '¿Cuánto tiempo demora un pedido?',
    a: 'Depende de la complejidad de la pieza: entre 5 y 15 días hábiles. Para fechas importantes te recomendamos contactarnos con anticipación para asegurar la entrega a tiempo.',
  },
  {
    q: '¿Puedo elegir colores y tamaños?',
    a: 'Sí, todos los pedidos personalizados se adaptan completamente a tus preferencias de color, tamaño y detalles. Solo cuéntanos tu idea y lo hacemos.',
  },
  {
    q: '¿Hacen envíos a todo Venezuela?',
    a: 'Sí, enviamos a todo el país a través de encomiendas. El costo y la empresa de envío se coordinan contigo por WhatsApp según tu ubicación.',
  },
  {
    q: '¿Cómo realizo el pago?',
    a: 'Aceptamos pago móvil, transferencia bancaria y efectivo en USD o Bs. Los detalles de pago se coordinan directamente por WhatsApp al confirmar tu pedido.',
  },
  {
    q: '¿Qué pasa si quiero algo que no está en el catálogo?',
    a: '¡No hay problema! Podemos crear casi cualquier diseño personalizado. Cuéntanos tu idea en el formulario de arriba o escríbenos directamente y lo hacemos realidad.',
  },
  {
    q: '¿Hacen pedidos para eventos o empresas?',
    a: 'Sí, hacemos detalles personalizados para graduaciones, baby showers, cumpleaños, bodas y más. Contáctanos para coordinar pedidos en cantidad.',
  },
]

function FaqItem({ item, index, isOpen, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white/70 backdrop-blur-sm border border-[#97A87A]/15 rounded-2xl overflow-hidden shadow-sm"
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-[#97A87A]/5 transition-colors duration-200"
      >
        <span className="font-semibold text-gray-800 text-sm sm:text-base leading-snug">
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="shrink-0 text-[#97A87A]"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p className="px-5 pb-5 text-sm text-gray-500 leading-relaxed border-t border-[#97A87A]/10 pt-3">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i))

  return (
    <section id="faq" className="relative bg-bg py-16 md:py-24 px-4 overflow-hidden">
      <Flower
        className="absolute -top-10 -right-10 opacity-10 -rotate-12 pointer-events-none"
        width={180} height={180}
        innerFill="#97A87A"
        style={{ fill: '#F2D57E' }}
      />
      <Flower
        className="absolute -bottom-10 -left-10 opacity-10 rotate-12 pointer-events-none"
        width={160} height={160}
        innerFill="#F2D57E"
        style={{ fill: '#97A87A' }}
      />

      <div className="relative max-w-2xl mx-auto">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#97A87A] mb-2">
            Preguntas frecuentes
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">
            Todo lo que necesitas saber antes de hacer tu pedido
          </p>
        </motion.div>

        <div className="flex flex-col gap-3">
          {faqs.map((item, i) => (
            <FaqItem
              key={i}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
