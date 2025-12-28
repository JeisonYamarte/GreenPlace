import { useState } from 'react'
import { motion } from 'motion/react'
import ProductCard from './ProductCard'
import { productsFlowers } from './products.data'

const categories = ['FLORES', 'PERSONAJES', 'GORROS', 'ACCESORIOS', 'OTROS'];

export default function Products() {

    const [productsToShow, setProductsToShow] = useState(productsFlowers);
    const [category, setCategory] = useState('FLORES');

    const handleCategoryChange = (newCategory) => {
        setCategory(newCategory);
        // Aquí puedes agregar lógica para filtrar productos según la categoría seleccionada
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
            <div className="grid h-full grid-cols-2 md:grid-cols-3">
                {productsToShow.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}
