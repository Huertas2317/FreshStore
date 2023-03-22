import ProductCard from "./ProductCard";

const ProductList = ({products, count, setCount}) => {

    return (
        <div>
            {products.map((product) => <ProductCard product={product} key={product.id} count={count} setCount={setCount}/>)}
        </div>
    )
}

export default ProductList