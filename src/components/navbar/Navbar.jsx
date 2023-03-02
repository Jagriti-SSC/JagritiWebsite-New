import React from "react";
import { Link, Outlet } from "react-router-dom";
import Button from "../UI/button/Button";

const Navbar = () => {
  // let curr = useLocation();
  // console.log(curr.pathname); // Use the current pathname for conditional changes in the Navbar styles.

  return (
    <>
      <header>
        <nav className="bg-transparent border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
          <div className="container flex flex-wrap items-center justify-between mx-auto">
            <Link to="/" className="items-center">
              <img
                src="/icons/Jagriti_logo.png"
                className="h-6 mr-3 sm:h-9"
                alt="Jagriti_Logo"
              />
            </Link>
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li className="place-self-center">
                  <Link
                    to="/about"
                    className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    About
                  </Link>
                </li>
                <li className="place-self-center">
                  <Link
                    to="/team"
                    className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Team
                  </Link>
                </li>
                <li className="place-self-center">
                  <Link
                    to="/events"
                    className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Button
                    text="Join CA Program"
                    outline={true}
                    // disabled={false}
                  />
                </li>
              </ul>
            </div>
            <div className="md:hidden">
              {/* <!-- drawer init and show --> */}
              <div className="text-center">
                <button
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  type="button"
                  data-drawer-target="drawer-navigation"
                  data-drawer-show="drawer-navigation"
                  aria-controls="drawer-navigation"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
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

              {/* <!-- drawer component --> */}
              <div
                id="drawer-navigation"
                className="fixed top-0 right-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white dark:bg-gray-800"
                tabIndex="-1"
                aria-labelledby="drawer-navigation-label"
              >
                <button
                  type="button"
                  data-drawer-hide="drawer-navigation"
                  aria-controls="drawer-navigation"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    aria-hidden="true"
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
                  <ul className="space-y-2 text-center">
                    <li>
                      <Link
                        to="/about"
                        className="flex items-center  p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <span className="flex-1 whitespace-nowrap">About</span>
                      </Link>
                      <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                    </li>
                    <li>
                      <Link
                        to="/team"
                        className="flex items-center p-2 text-base font-normal text-gray-900  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <span className="flex-1  whitespace-nowrap">Team</span>
                      </Link>
                      <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                    </li>
                    <li>
                      <Link
                        to="/events"
                        className="flex items-center p-2 text-base font-normal text-gray-900  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <span className="flex-1 whitespace-nowrap">Events</span>
                      </Link>
                      <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                    </li>
                    <li>
                      <Link to="/ca">
                        <Button
                          text="Join CA Program"
                          outline={true}
                          // disabled={false}
                          // buttonColor={"white"}
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
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
