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
      className="bg-white w-full h-full border-none overflow-hidden shadow-sm hover:none"
      variants={cardVariants}
    >
      <motion.img
        className="w-full h-full object-cover"
        src={product.image}
        alt={product.name}
        variants={imageVariants}
      />
    </motion.figure>
  )
}
