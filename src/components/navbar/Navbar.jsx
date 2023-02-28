import React from "react";
import { useLocation } from "react-router-dom";
import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
 
 let curr  = useLocation();
 console.log(curr.pathname); // Use the current pathname for conditional changes in the Navbar styles.

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/team">Our Team</Link>
          </li>
          <li>
            <Link to="/ca">Campus Ambassador</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;
