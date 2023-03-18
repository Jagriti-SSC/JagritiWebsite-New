import React, { useState, useEffect, useRef } from "react";
import Button from "../UI/button/Button";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  let curr = useLocation();
  console.log(curr.pathname); // Use the current pathname for conditional changes in the Navbar styles.

  const closeButton = useRef(null);
  const [navbar_bg, setNavbar_bg] = useState("bg-transparent");

  useEffect(() => {
    const changeNavbarColor = () => {
      if (curr.pathname !== "/") {
        setNavbar_bg("bg-light-black");
      } else {
        setNavbar_bg("bg-transparent");
      }
    };
    changeNavbarColor();
  }, [curr.pathname]);

  return (
    <>
      <header>
        <nav className="navbar bg-body-tertiary fixed-top">
          <div className="container-fluid">
            {/* <div> */}
            <Link className="navbar-brand" href="/">
              <img
                className="h-6 mr-3 smd:h-9"
                src="/assets/Jagriti_nav_logo.png"
                alt=""
              />
            </Link>
            {/* </div> */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-end"
              tabindex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  Offcanvas
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/about"
                    >
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/team">
                      Team
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/events">
                      Events
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/faqs">
                      FAQs
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Button
                      text="Join CA Program"
                      outline={true}
                      buttonColor={"white"}
                      path={"/ca"}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Navbar;
