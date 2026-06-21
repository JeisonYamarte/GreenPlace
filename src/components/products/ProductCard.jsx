import { motion } from "motion/react"

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.96
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1]
    }
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.25 }
  }
}

export default function ProductCard({ product }) {
  return (
    <motion.figure
      className="bg-white w-full aspect-square lg:aspect-auto lg:h-full overflow-hidden"
      variants={cardVariants}
      whileHover={{ scale: 1.04, zIndex: 10, transition: { duration: 0.2 } }}
    >
      <motion.img
        className="w-full h-full object-cover"
        src={product.image}
        alt={product.name}
        loading="lazy"
        width="400"
        height="400"
        whileHover={{ scale: 1.08, transition: { duration: 0.4, ease: 'easeOut' } }}
        onError={(e) => {
          e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22%3E%3Crect width=%22400%22 height=%22400%22 fill=%22%23e8f0dc%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 fill=%22%2397A87A%22 font-size=%2216%22%3EGreenPlace%3C/text%3E%3C/svg%3E'
        }}
      />
    </motion.figure>
  )
}
