import Cart from "../components/Cart";
import {Link, Outlet} from 'react-router-dom';

const RootLayout = ({count}) => {
    return (
        <div className='App'>
         <h1>Fresh Store</h1>
         <Cart count={count} />
         <Link to="about">About Us</Link>
         <Outlet/>
        </div>
    )
}
 
export default RootLayout;