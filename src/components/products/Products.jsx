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
        <div id="products" className="relative bg-bg h-[800px] max-h-screen lg:h-auto object-contain max-w-8xl lg:mx-auto">
            <h2 className="text-center text-2xl mb-4 pt-4">mira nuestro productos</h2>
            <div className='absolute w-full top-[50%] lg:top-auto lg:bottom-0 h-10 bg-gray-100/70 items-center flex z-10'>
                <nav className="w-full h-full">
                    <ul className='text-xs  h-full w-full grid grid-cols-5 justify-center items-center relative '>

                        <motion.li
                            className="absolute top-0 left-0 w-[20%] h-full bg-[#97A87A]/70 rounded-md z-0 pointer-events-none"

                            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                            animate={{ left: `${categories.indexOf(category) * 20}%` }}
                            
                        />
                        
                        {categories.map((cat) => (
                            <li
                                key={cat}
                                className={`inline-flex text-center items-center sm:text-xs justify-center cursor-pointer h-full w-full z-10 leading-10 md:leading-none truncate md:truncate-none px-1 transition-colors duration-200 md:justify-center  
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
                className="grid h-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:grid-rows-1 lg:h-64 "
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
