import ProductCard from './ProductCard'
import { productsData } from './products.data'

export default function Products() {
    return (
        <div className="py-16 bg-green-50">
        <div className="text-center mb-8">Products</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {productsData.map((product) => (
            <ProductCard key={product.id} product={product} />
            ))}
        </div>
        </div>
    )
}
