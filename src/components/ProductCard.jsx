import { Link } from "react-router-dom";

// mediante los curly {} desestructuramos el object, para en vez de usar props usar el nombre de la propiedad
function ProductCard({product, count, setCount}) {

    return (
        
        <div className='product-card'>
          <Link to={"product/"+ product.id} >
            <img className="card-img" src={product.image}/>
            <div className='product-info'>
              <h2>{product.name}</h2>
              <p>{product.desc}</p>
              <span>{product.price}</span>   
            </div> 
          </Link>          
            <button onClick={() => setCount(count + 1)}>
            Add to Cart
            </button>
        </div> 
      
        
    );
  }

export default ProductCard