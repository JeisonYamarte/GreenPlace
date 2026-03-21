import { motion } from "motion/react"

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95
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
    y: -20,
    transition: {
      duration: 0.3
    }
  }
}

const imageVariants = {
  hidden: { 
    clipPath: "inset(0 0 100% 0)", 
    opacity: 0 
  },
  visible: { 
    clipPath: "inset(0 0 0 0)", 
    opacity: 1,
    transition: {
      duration: 0.7,
      delay: 0.2,
      ease: [0.16, 1, 0.3, 1]
    }
  }
}

export default function ProductCard({ product, index }) {
  return (
    <motion.figure
      className="bg-white w-full aspect-square lg:aspect-auto lg:h-full border-none overflow-hidden shadow-sm  hover:none"
      variants={cardVariants}
    >
      <motion.img
        className="w-full h-full object-cover"
        src={product.image}
        alt={product.name}
        loading="lazy"
        width="400"
        height="400"
        onError={(e) => { e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22%3E%3Crect width=%22400%22 height=%22400%22 fill=%22%23e8f0dc%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 fill=%22%2397A87A%22 font-size=%2216%22%3EGreenPlace%3C/text%3E%3C/svg%3E' }}
        variants={imageVariants}
      />
    </motion.figure>
  )
}
