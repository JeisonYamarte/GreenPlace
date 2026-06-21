import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Flower from '../SVG/flower1'

const TYPES = ['Flor', 'Personaje', 'Gorro', 'Accesorio', 'Otro']

const WhatsAppIcon = () => (
  <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

export default function CustomOrder() {
  const [type, setType] = useState('')
  const [description, setDescription] = useState('')

  const canOrder = description.trim().length > 0

  const handleOrder = () => {
    if (!canOrder) return

    const typeLine = type ? `📦 Tipo de producto: ${type}\n` : ''
    const message =
      `¡Hola GreenPlace! 🌿 Me gustaría hacer un pedido personalizado:\n\n` +
      `${typeLine}✏️ Descripción: ${description.trim()}\n\n` +
      `¡Espero poder coordinarlo con ustedes!`

    const url = `https://api.whatsapp.com/send/?phone=584146109850&text=${encodeURIComponent(message)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const handleKey = (e) => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) handleOrder()
  }

  return (
    <section id="pedido" className="relative bg-[#e8f0dc]/40 py-16 md:py-24 px-4 overflow-hidden">
      <Flower
        className="absolute -top-10 -left-10 opacity-10 rotate-12 pointer-events-none"
        width={180} height={180}
        innerFill="#F2D57E"
        style={{ fill: '#97A87A' }}
      />
      <Flower
        className="absolute -bottom-10 -right-10 opacity-10 -rotate-12 pointer-events-none"
        width={220} height={220}
        innerFill="#97A87A"
        style={{ fill: '#F2D57E' }}
      />

      <div className="relative max-w-2xl mx-auto">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#3A3A3A] mb-2">
            ¿Tienes algo en mente?
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">
            Cuéntanos tu idea y la hacemos realidad a crochet
          </p>
        </motion.div>

        <motion.div
          className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-sm border border-[#97A87A]/15"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Tipo de producto */}
          <div className="mb-6">
            <p className="text-sm font-semibold text-gray-700 mb-3">
              ¿Qué tipo de producto?{' '}
              <span className="font-normal text-gray-400">(opcional)</span>
            </p>
            <div className="flex flex-wrap gap-2">
              {TYPES.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setType((prev) => (prev === t ? '' : t))}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
                    type === t
                      ? 'bg-[#97A87A] text-white border-[#97A87A] shadow-sm'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-[#97A87A]/60 hover:text-[#97A87A]'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Descripción */}
          <div className="mb-6">
            <p className="text-sm font-semibold text-gray-700 mb-2">Describe tu idea</p>
            <div className="relative">
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Ej: Quiero un osito de 20cm en color beige con detalle azul, es para regalo de bebé..."
                className="w-full rounded-2xl border border-gray-200 bg-[#FCF9EA]/60 p-4 pr-16 resize-none text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-[#97A87A] focus:ring-2 focus:ring-[#97A87A]/20 transition-all"
                rows={4}
                maxLength={500}
              />
              <span className="absolute bottom-3 right-4 text-xs text-gray-400 select-none">
                {description.length}/500
              </span>
            </div>
            <p className="text-xs text-gray-400 mt-1">
              Puedes incluir: colores, tamaño, para quién es, fecha que lo necesitas...
            </p>
          </div>

          {/* Botón */}
          <motion.button
            type="button"
            onClick={handleOrder}
            disabled={!canOrder}
            className={`w-full flex items-center justify-center gap-2.5 font-bold py-3.5 rounded-2xl shadow-md transition-all duration-300 ${
              canOrder
                ? 'bg-[#25D366] hover:bg-[#1da851] text-white hover:shadow-lg cursor-pointer'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
            whileHover={canOrder ? { scale: 1.02 } : {}}
            whileTap={canOrder ? { scale: 0.98 } : {}}
          >
            <WhatsAppIcon />
            Ordenar por WhatsApp
          </motion.button>

          <AnimatePresence>
            {!canOrder && (
              <motion.p
                className="text-xs text-gray-400 text-center mt-2"
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                Escribe tu idea para continuar
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
