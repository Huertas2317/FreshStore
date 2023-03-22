import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Link,
  useParams,
  Outlet
} from "react-router-dom";

import About from './Pages/About'
import ProductCard from './components/ProductCard'
import ProductPage from './Pages/ProductPage';
import Cart from './components/Cart';
import ProductList from './components/ProductList';
import RootLayout from './layouts/RootLayout';

const App = () => {
  const [count, setCount] = useState(0);

  const products = [
    {
      id: 0,
      name: "PEACH & YLANG",
      price: "16$",
      image: "http://lacasadelosaromas.com/wp-content/uploads/2021/03/049690-1.jpg",
      desc: "100ml with an original and atractive design, strong floral scent"
    },
    {
      id: 1,
      name: "P.F & STRAWBERRY",
      price: "12$",
      image: "http://lacasadelosaromas.com/wp-content/uploads/2021/03/049713-1.jpg",
      desc: "100ml with a strong scent of passion fruit mixed with strawberry"
    },
    {
      id: 2,
      name: "MELON & LILLY",
      price: "14$",
      image: "http://lacasadelosaromas.com/wp-content/uploads/2021/03/049706-1.jpg",
      desc: "100ml with an intense and newly aroma"
    },
    {
      id: 3,
      name: "ORANGE & AMBER",
      price: "13$",
      image: "https://lacasadelosaromas.com/wp-content/uploads/2021/03/049683-1.jpg",
      desc: "100ml intense aroma with woody fruits scent"
    }
  ];

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout count={count} />}>
        <Route index element={<ProductList products={products} count={count} setCount={setCount}/>} />
        <Route path='about' element={<About/>} />
        <Route path='product/:id' element={<ProductPage products={products}  />} />
      </Route>
    )
  );  
 
  return (
    <RouterProvider router={router}/>
  )
};

export default App
