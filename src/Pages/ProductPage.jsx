import { Link, useParams } from "react-router-dom";
import ProductList from "../components/ProductList";
// aquí igual, desestructuramos el object que sería prop mediante el cual accederiamos a los atributos del componente
const ProductPage = ({products}) => {

    const { id } = useParams();

    const product = products.filter((product) => product.id.toString() === id )[0]
    return (
        <div className="product-page">
            <img src={product.image}/>
            <div>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <p>{product.desc}</p>
            <Link to="/" >go homepage</Link>
            {id}
            </div>
        </div>
    )
}

export default ProductPage;