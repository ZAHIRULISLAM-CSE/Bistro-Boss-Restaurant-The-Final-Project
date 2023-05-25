import { Navbar } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
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
          <Link className="text-xl font-semibold" to='/register' >
            Register
          </Link>
          <Link className="text-xl font-semibold" to='/' >
            Dashboard
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
