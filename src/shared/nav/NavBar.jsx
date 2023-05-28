import { Navbar } from "flowbite-react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { FaShoppingCart } from 'react-icons/fa';
import useAddededCart from "../../hooks/useAddededCart";

const NavBar = () => {

  const {user,logOut}=useContext(AuthContext);
  const [cart,refetch]=useAddededCart();
  console.log(cart)

  const handleSignOut=()=>{
      logOut();
  }

  return (
    <div>
      <Navbar className=" text-black fixed  opacity-40  z-10 w-full " fluid={true} rounded={true}>
        <Navbar.Brand
          to="/navbars"
        >
          <span className="self-center ml-4 whitespace-nowrap text-2xl font-semibold dark:text-white">
            Bistro Boss <br />
            Restaurant
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Link className="text-xl font-semibold" to='/' >
            Home
          </Link>
          {
            user ?<Link onClick={handleSignOut} className="text-xl font-semibold" >
            SignOut
           </Link>:<Link className="text-xl font-semibold" to='/login' >
            Login
           </Link>
          }
          <Link className="text-xl inline-flex font-semibold" to='/dashboard/mycart' >
            <FaShoppingCart></FaShoppingCart><span> {
              user?.email ? cart.length:0
              } </span>
          </Link>
          <Link className="text-xl font-semibold" to='/menu' >
            Our Menu
          </Link>
          <Link className="text-xl font-semibold" to='/order/salad' >
           Order Now
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
