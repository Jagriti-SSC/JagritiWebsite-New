import React, { useState, useEffect, useRef } from "react";
import Button from "../UI/button/Button";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  let curr = useLocation();
  console.log(curr.pathname); // Use the current pathname for conditional changes in the Navbar styles.

  const closeButton = useRef(null);
  const openButton = useRef(null);
  const [navbar_bg, setNavbar_bg] = useState("bg-transparent");
  const [toggle, setToggle] = useState(false);

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

  // const [toggle, setToggle] = useState(false);

  return (
    <>
      <header>
        {/* Desktop Navbar */}
        <nav
          className={`hidden smd:block ${navbar_bg} px-2 smd:px-4 py-2.5 font-Montserrat`}
        >
          <div className="container flex flex-wrap items-center justify-between mx-auto">
            <Link to="/" className="items-center">
              <img
                src="/assets/Jagriti_nav_logo.webp"
                className="h-6 mr-3 smd:h-9"
                alt="Jagriti_Logo"
              />
            </Link>
            <div
              className="hidden w-full smd:block smd:w-auto"
              id="navbar-default"
            >
              <ul className="flex flex-col p-4 mt-4 smd:flex-row smd:space-x-8 smd:mt-0 smd:text-sm smd:font-medium smd:bg-transparent">
                <li className="place-self-center">
                  <Link
                    to="/about"
                    className="navitem block py-2 pl-3 pr-4 text-white  smd:p-0"
                  >
                    About
                  </Link>
                </li>
                <li className="place-self-center">
                  <Link
                    to="/team"
                    className="navitem block py-2 pl-3 pr-4 text-white  smd:p-0"
                  >
                    Team
                  </Link>
                </li>
                <li className="place-self-center">
                  <Link
                    to="/events"
                    className="navitem block py-2 pl-3 pr-4 text-white smd:p-0"
                  >
                    Events
                  </Link>
                </li>
                <li className="place-self-center">
                  <Link
                    to="/faqs"
                    className="navitem block py-2 pl-3 pr-4 text-white smd:p-0"
                  >
                    FAQs
                  </Link>
                </li>
                <li>
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
        </nav>
        {/* Mobile Navbar */}
        <nav
          className={`smd:hidden ${navbar_bg} px-2 smd:px-4 py-2.5 font-Montserrat`}
        >
          <div className="container flex flex-wrap items-center justify-between mx-auto">
            <Link to="/" className="items-center">
              <img
                src="/assets/Jagriti_nav_logo.png"
                className="h-6 mr-3 smd:h-9"
                alt="Jagriti_Logo"
                id="navbar_logo_change_mobile"
              />
            </Link>
            {/* <!-- drawer init and show --> */}
            {/* {!toggle ? ( */}
              <div className="text-center" onClick={() => setToggle(true)}>
                <button
                  ref={openButton}
                  className="text-white bg-transparent focus:ring-4 focus:ring-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2"
                  type="button"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            {/* ) : null} */}

            {/* <!-- drawer component --> */}

            {toggle ? (
              <div
                id="drawer-right-example"
                className="fixed top-0 right-0 z-40 w-64 h-screen p-4  overflow-y-auto transition-transform bg-white"
              >
                <button
                  ref={closeButton}
                  onClick={() => setToggle(false)}
                  type="button"
                  className="text-white bg-black rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close menu</span>
                </button>
                <div className="py-4 overflow-y-auto">
                  <ul className="space-y-6 text-center">
                    <li className="mt-8">
                      <Link
                        onClick={() => closeButton.current.click()}
                        to="/about"
                        className="items-center p-2 text-base hover:underline hover:decoration-4 hover:decoration-blue font-semibold text-black rounded-lg"
                      >
                        <span className="whitespace-nowrap">About</span>
                      </Link>
                      <hr className="mt-3 h-px bg-black border-0 mx-3"></hr>
                    </li>
                    <li>
                      <Link
                        onClick={() => closeButton.current.click()}
                        to="/team"
                        className="items-center p-2 text-base hover:underline hover:decoration-4 hover:decoration-blue font-semibold text-black rounded-lg"
                      >
                        <span className="whitespace-nowrap">Team</span>
                      </Link>
                      <hr className="mt-3 h-px bg-black border-0 mx-3"></hr>
                    </li>
                    <li>
                      <Link
                        onClick={() => closeButton.current.click()}
                        to="/events"
                        className="items-center p-2 text-base hover:underline hover:decoration-4 hover:decoration-blue font-semibold text-black rounded-lg"
                      >
                        <span className="whitespace-nowrap">Events</span>
                      </Link>
                      <hr className="mt-3 h-px bg-black border-0 mx-3"></hr>
                    </li>
                    <li>
                      <Link
                        onClick={() => closeButton.current.click()}
                        to="/faqs"
                        className="items-center p-2 text-base hover:underline hover:decoration-4 hover:decoration-blue font-semibold text-black rounded-lg"
                      >
                        <span className="whitespace-nowrap">FAQs</span>
                      </Link>
                      <hr className="mt-3 h-px bg-black border-0 mx-3"></hr>
                    </li>
                    <li>
                      <Button
                        text="Join CA Program"
                        outline={true}
                        buttonColor={"#1A589B"}
                        customStyle={{ width: 224, fontSize: 14 }}
                        onPress={() => closeButton.current.click()}
                        path={"/ca"}
                      />
                    </li>
                  </ul>
                </div>
              </div>
            ) : null}
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Navbar;
