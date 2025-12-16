
import './App.css'
import { motion } from 'motion/react'

function App() {

  return (
    <>
    <motion.div animate={
      { 
        scale: [0.5, 1.5, 1], 
        rotate: [0, 0, 360], 
        borderRadius: ["20%", "20%", "50%"],
        transition: {
          duration: 8,
        }
      }
    } className='text-9xl border-2'>
      hola con vite

    </motion.div>
    </>
  )
}

export default App
