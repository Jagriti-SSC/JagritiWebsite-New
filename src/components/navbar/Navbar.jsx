import React, { useState, useEffect, useRef } from "react";
import Button from "../UI/button/Button";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../../context/AuthContext";
import profile_default from "./profile.png";
import { auth } from "../../context/Firebase";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  let curr = useLocation();

  const [isDesktopView, setIsDesktopView] = useState(window.innerWidth >= 900);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 900);
  const closeButton = useRef(null);
  const openButton = useRef(null);
  const [navbar_bg, setNavbar_bg] = useState("bg-transparent");
  const [toggle, setToggle] = useState(false);

  const { loading } = useAuth();

  // resize handler
  useEffect(() => {
    const handleResize = () => {
      setIsDesktopView(window.innerWidth >= 900);
      setIsMobileView(window.innerWidth < 900);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // navbar background based on route
  useEffect(() => {
    const changeNavbarColor = () => {
      if (curr.pathname !== "/") {
        setNavbar_bg("bg-main-navbar");
      } else {
        setNavbar_bg("bg-transparent");
      }
    };
    changeNavbarColor();
  }, [curr.pathname]);

  const userString = localStorage.getItem("user");
  const userObject = JSON.parse(userString || "null");
  const profile_img = userObject?.photoURL;
  const accessToken = userObject?.stsTokenManager?.accessToken;

  useEffect(() => {
    console.log("Access Token:", accessToken);
  }, [loading, accessToken]);

  const [userDetails, setUserDetails] = useState({});
  const fetchUserData = async () => {
    try {
      const url = process.env.REACT_APP_BASE_URL;
      const response = await fetch(`${url}/auth/user`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: auth.currentUser.email }),
      });
      if (response != null) {
        const data = await response.json();
        setUserDetails(data);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (auth.currentUser) {
        await fetchUserData();
      }
    };

    fetchData();
  }, []);

  // THEME STATE (same logic, now used on mobile too)
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("site-theme") === "dark";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark-mode");
      localStorage.setItem("site-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark-mode");
      localStorage.setItem("site-theme", "light");
    }
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme((t) => !t);
  };

  return (
    <>
      <header>
        {/* =========================
            DESKTOP NAVBAR (unchanged styles)
           ========================= */}
        {isDesktopView && (
          <nav
            className={`hidden smd:block ${navbar_bg} px-4 py-4 smd:px-4 font-Montserrat z-10 ${
              curr.pathname === "/" ? "absolute w-full top-0 left-0" : ""
            }`}
          >
            <div className="flex flex-wrap items-center justify-between ml-20 py-5">
              <Link to="/" className="items-center ">
                <img
                  src="/assets/Jagriti_nav_logo.webp"
                  className="h-5 smd:h-9"
                  alt="Jagriti_Logo"
                />
              </Link>
              <div
                className="hidden w-full smd:block smd:w-auto"
                id="navbar-default"
              >
                <ul className="flex flex-col mt-4 smd:flex-row smd:space-x-6 smd:mt-0 smd:text-sm smd:font-medium smd:bg-transparent">
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
                      to="/sponsors"
                      className="navitem block py-2 pl-3 pr-4 text-white  smd:p-0"
                    >
                      Sponsors
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
                      to="/gallery"
                      className="navitem block py-2 pl-3 pr-4 text-white smd:p-0"
                    >
                      Gallery
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
                  <li className="place-self-center">
                    <Link
                      to="/CampusAmbassador"
                      className="navitem block py-2 pl-3 pr-4 text-white rounded-[10px] smd:p-0"
                      style={{
                        outline: "1px solid white",
                        padding: "5px",
                      }}
                    >
                      <Link
                        className={`navitem block  pl-3 pr-4 text-white rounded-[10px] py-2.5 smd:p-0 ${
                          curr.pathname === "/signin"
                            ? "bg-white"
                            : "bg-transparent"
                        }`}
                        to="/signin"
                        style={{
                          width:
                            localStorage.getItem("user") != null ? "0px" : null,
                          display:
                            localStorage.getItem("user") != null
                              ? "contents"
                              : "",
                          fontSize:
                            localStorage.getItem("user") != null ? "0px" : "",
                          color:
                            curr.pathname === "/signin" ? "black" : "white",
                          padding: "5px",
                        }}
                      >
                        Sign In
                      </Link>
                    </Link>
                  </li>
                  <li
                    className={
                      "place-self-center" +
                      (localStorage.getItem("user") == null
                        ? " "
                        : " w-[0px] m-0")
                    }
                  >
                    <Link
                      className={`navitem block pl-3 pr-4 text-white rounded-[10px] py-2.5 smd:p-0 ${
                        curr.pathname === "/signup"
                          ? "bg-white"
                          : "bg-transparent"
                      }`}
                      to="/signup"
                      style={{
                        width:
                          localStorage.getItem("user") != null ? "0px" : null,
                        display:
                          localStorage.getItem("user") != null
                            ? "contents"
                            : "",
                        fontSize:
                          localStorage.getItem("user") != null ? "0px" : "",
                        color:
                          curr.pathname === "/signup" ? "black" : "white",
                        padding: "5px",
                      }}
                    >
                      Sign Up
                    </Link>
                  </li>
                  <li
                    className={
                      "place-self-center " +
                      (localStorage.getItem("user") == null
                        ? " w-[0px] m-0"
                        : "")
                    }
                  >
                    <button
                      className="rounded-full w-10 h-10 ml-8 mr-20"
                      style={{
                        width:
                          localStorage.getItem("user") == null ? "0px" : null,
                        display:
                          localStorage.getItem("user") == null
                            ? "contents"
                            : "",
                        fontSize:
                          localStorage.getItem("user") == null ? "0px" : "",
                      }}
                    >
                      <Link to="/profile">
                        <img
                          alt="profile_img"
                          src={`${
                            userDetails.imgUrl ? userDetails.imgUrl : profile_img
                          }`}
                          className="w-full h-full object-cover rounded-full"
                        />
                      </Link>
                    </button>
                  </li>

                  {/* Desktop theme toggle (unchanged) */}
                  <li>
                    <button
                      onClick={handleThemeToggle}
                      aria-label="Toggle theme"
                      title="Toggle theme"
                      className={`theme-toggle-btn ${
                        theme ? "is-dark" : "is-light"
                      }`}
                    >
                      {theme ? (
                        <FaMoon className="theme-icon" />
                      ) : (
                        <FaSun className="theme-icon" />
                      )}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        )}

        {/* =========================
            MOBILE NAVBAR (with theme toggle + dark sidebar)
           ========================= */}
        {isMobileView && (
          <nav
            className={`smd:hidden ${navbar_bg} px-2 smd:px-4 py-2.5 font-Montserrat ${
              curr.pathname === "/" ? "absolute w-full top-0 left-0 z-50" : ""
            }`}
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

              <div className="navbar-mobile-right">
                {/* Hamburger button */}
                <button
                  ref={openButton}
                  className="mobile-menu-btn text-white bg-transparent focus:ring-4 focus:ring-white font-medium rounded-lg text-sm px-5 py-2.5 ml-1"
                  type="button"
                  onClick={() => setToggle(true)}
                  style={{ display: toggle ? "none" : "inline-flex" }}
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
            </div>

            {/* Mobile Drawer */}
            <div
              id="drawer-right-example"
              className={`fixed top-0 right-0 z-50 h-screen w-80 bg-white dark:bg-gray-800 transition-transform duration-300 ease-in-out mobile-drawer ${
                toggle ? "translate-x-0" : "translate-x-full"
              }`}
              tabIndex="-1"
              aria-labelledby="drawer-right-label"
            >
              <div className="flex justify-end p-4">
                <button
                  ref={closeButton}
                  type="button"
                  onClick={() => setToggle(false)}
                  className="p-2 rounded-lg text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white transition-colors"
                >
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L10 8.586 5.707 4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close menu</span>
                </button>
              </div>

              <div className="px-6 py-2 overflow-y-auto h-[calc(100vh-80px)]">
                <ul className="space-y-4 text-center">
                  <li>
                    <Link
                      onClick={() =>
                        closeButton.current && closeButton.current.click()
                      }
                      to="/about"
                      className="mobile-drawer-link items-center p-2 text-base font-semibold rounded-lg"
                    >
                      <span className="whitespace-nowrap">About</span>
                    </Link>
                    <hr className="mobile-drawer-divider mx-3 mt-3" />
                  </li>
                  <li>
                    <Link
                      onClick={() =>
                        closeButton.current && closeButton.current.click()
                      }
                      to="/team"
                      className="mobile-drawer-link items-center p-2 text-base font-semibold rounded-lg"
                    >
                      <span className="whitespace-nowrap">Team</span>
                    </Link>
                    <hr className="mobile-drawer-divider mx-3 mt-3" />
                  </li>
                  <li>
                    <Link
                      onClick={() =>
                        closeButton.current && closeButton.current.click()
                      }
                      to="/sponsors"
                      className="mobile-drawer-link items-center p-2 text-base font-semibold rounded-lg"
                    >
                      <span className="whitespace-nowrap">Sponsors</span>
                    </Link>
                    <hr className="mobile-drawer-divider mx-3 mt-3" />
                  </li>
                  <li>
                    <Link
                      onClick={() =>
                        closeButton.current && closeButton.current.click()
                      }
                      to="/events"
                      className="mobile-drawer-link items-center p-2 text-base font-semibold rounded-lg"
                    >
                      <span className="whitespace-nowrap">Events</span>
                    </Link>
                    <hr className="mobile-drawer-divider mx-3 mt-3" />
                  </li>
                  <li>
                    <Link
                      onClick={() =>
                        closeButton.current && closeButton.current.click()
                      }
                      to="/gallery"
                      className="mobile-drawer-link items-center p-2 text-base font-semibold rounded-lg"
                    >
                      <span className="whitespace-nowrap">Gallery</span>
                    </Link>
                    <hr className="mobile-drawer-divider mx-3 mt-3" />
                  </li>
                  <li>
                    <Link
                      onClick={() =>
                        closeButton.current && closeButton.current.click()
                      }
                      to="/faqs"
                      className="mobile-drawer-link items-center p-2 text-base font-semibold rounded-lg"
                    >
                      <span className="whitespace-nowrap">FAQs</span>
                    </Link>
                    <hr className="mobile-drawer-divider mx-3 mt-3" />
                  </li>
                  <li>
                    <Link
                      onClick={() =>
                        closeButton.current && closeButton.current.click()
                      }
                      to="/CampusAmbassador"
                      className="mobile-drawer-link items-center p-2 text-base font-semibold rounded-lg"
                    >
                      <span className="whitespace-nowrap">CA Program</span>
                    </Link>
                    <hr className="mobile-drawer-divider mx-3 mt-3" />
                  </li>

                  {/* ACCOUNT LINKS */}
                  {localStorage.getItem("user") == null ? (
                    <>
                      <li className="place-self-center mt-3">
                        <Link
                          className="mobile-drawer-link items-center p-2 text-base font-semibold rounded-lg"
                          to="/signin"
                          onClick={() =>
                            closeButton.current && closeButton.current.click()
                          }
                        >
                          <span className="w-full">Sign In</span>
                        </Link>
                        <hr className="mobile-drawer-divider mx-3 mt-3" />
                      </li>
                      <li className="place-self-center mt-3">
                        <Link
                          className="mobile-drawer-link items-center p-2 text-base font-semibold rounded-lg"
                          to="/signup"
                          onClick={() =>
                            closeButton.current && closeButton.current.click()
                          }
                        >
                          <span className="w-full">Sign Up</span>
                        </Link>
                        <hr className="mobile-drawer-divider mx-3 mt-3" />
                      </li>
                    </>
                  ) : (
                    <li className="place-self-center mt-3">
                      <Link
                        to="/profile"
                        onClick={() =>
                          closeButton.current && closeButton.current.click()
                        }
                        className="inline-block"
                      >
                        <img
                          alt="profile_img"
                          src={`${
                            userDetails.imgUrl ? userDetails.imgUrl : profile_img
                          }`}
                          className="w-12 h-12 object-cover rounded-full border-2 border-gray-300 dark:border-gray-600"
                        />
                      </Link>
                      <hr className="mobile-drawer-divider mx-3 mt-3" />
                    </li>
                  )}
                </ul>
              </div>

              {/* MOBILE THEME TOGGLE */}
              <button
                onClick={handleThemeToggle}
                aria-label="Toggle theme"
                title="Toggle theme"
                className={`theme-toggle-btn mobile-theme-toggle ${
                  theme ? "is-dark" : "is-light"
                }`}
              >
                {theme ? (
                  <FaMoon className="theme-icon" />
                ) : (
                  <FaSun className={`theme-icon ${theme ? "" : "iccon"}`} />
                )}
              </button>
            </div>
          </nav>
        )}
      </header>
      <Outlet />
    </>
  );
};

export default Navbar;
