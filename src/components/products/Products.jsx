import ProductCard from './ProductCard'
import { productsData } from './products.data'

export default function Products() {
    return (
        <div className="relative bg-bg ">
        <h2 className="text-center mb-8 text-2xl">mira nuestro productos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {productsData.map((product) => (
            <ProductCard key={product.id} product={product} />
            ))}
        </div>
        </div>
    )
}
