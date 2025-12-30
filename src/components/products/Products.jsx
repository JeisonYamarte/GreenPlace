import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import ProductCard from './ProductCard'
import { 
    productsFlowers, 
    productsCharacters, 
    productsHats, 
    productsAccessories,
    productsOthers
} from './products.data'

const categories = ['FLORES', 'PERSONAJES', 'GORROS', 'ACCESORIOS', 'OTROS'];

export default function Products() {

    const [productsToShow, setProductsToShow] = useState(productsFlowers);
    const [category, setCategory] = useState('FLORES');

    const handleCategoryChange = (newCategory) => {
        setCategory(newCategory);
        switch (newCategory) {
            case 'FLORES':
                setProductsToShow(productsFlowers);
                break;
            case 'PERSONAJES':
                setProductsToShow(productsCharacters);
                break;
            case 'GORROS':
                setProductsToShow(productsHats);
                break;
            case 'ACCESORIOS':
                setProductsToShow(productsAccessories);
                break;
            case 'OTROS':
                setProductsToShow(productsOthers);
                break;
            default:
                setProductsToShow(productsFlowers);
                break;
        }
    }

    return (
        <div className="relative bg-bg h-screen object-contain">
            <h2 className="text-center text-2xl mb-4">mira nuestro productos</h2>
            <div className='absolute w-full top-[50%] h-10 bg-gray-100/70 items-center flex z-10'>
                <nav className='w-full h-full'>
                    <ul className='text-xs text-center h-full w-full grid grid-cols-5 justify-center items-center relative'>
                        {/* Fondo animado */}
                        <motion.li
                            className="absolute h-full bg-[#97A87A]/70 pointer-events-none"
                            layoutId="activeCategory"
                            style={{ width: '20%' }}
                            initial={false}
                            animate={{ x: `${categories.indexOf(category) * 100}%` }}
                            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                        
                        {categories.map((cat) => (
                            <li 
                                key={cat}
                                className={`cursor-pointer z-10 leading-10 truncate px-1 transition-colors duration-200
                                    ${category === cat ? 'font-bold text-white' : ''}`}
                                onClick={() => handleCategoryChange(cat)}
                            >
                                {cat}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <motion.div 
                className="grid h-full grid-cols-2 md:grid-cols-3"
                initial="hidden"
                animate="visible"
                key={category}
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.15,
                            delayChildren: 0.1
                        }
                    }
                }}
            >
                <AnimatePresence mode="wait">
                    {productsToShow.map((product, index) => (
                        <ProductCard key={product.id} product={product} index={index} />
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    )
}
