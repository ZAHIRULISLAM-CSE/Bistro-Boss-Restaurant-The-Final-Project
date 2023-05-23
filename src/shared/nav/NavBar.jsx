import { Navbar } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand
          to="/navbars"
        >
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            Bistro Boss <br />
            Restaurant
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Link to='/' >
            Home
          </Link>
          <Link to='/' >
            Contact Us
          </Link>
          <Link to='/' >
            Dashboard
          </Link>
          <Link to='/' >
            Our Menu
          </Link>
          <Link to='/' >
           Our Shop
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
