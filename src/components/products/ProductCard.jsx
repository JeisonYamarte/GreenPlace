import { motion } from "motion/react"

export default function ProductCard({ product }) {
  return (
    <motion.figure
      className="bg-white w-full h-full border-none  overflow-hidden shadow-sm"
      initial={{ y: 16, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      whileHover={{ scale: 1.02, boxShadow: "0 16px 50px rgba(0,0,0,0.1)" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, amount: 0.45 }}
    >
      <motion.img
        className="w-full h-full object-cover"
        src={product.image}
        alt={product.name}
        initial={{ clipPath: "inset(0 0 100% 0)", opacity: 0 }}
        whileInView={{ clipPath: "inset(0 0 0 0)", opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
      />
    </motion.figure>
  )
}
