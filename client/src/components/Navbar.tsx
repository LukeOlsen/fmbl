import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const SEC: string[] = ["Florida", "Alabama", "Georgia", "Vanderbilt"];
const ACC: string[] = ["Clemson", "Miami"];

const ConferenceSection = (props: {
  conf: string;
  teams: string[];
  show: boolean;
  open: Function;
}) => {
  const { conf, teams, show, open } = props;
  return (
    <div className="relative">
      <button
        onClick={() => open(!show)}
        className="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent sm:rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:block hover:text-gray-900 focus:text-gray-900 hover:bg-gray-400  focus:bg-gray-200 focus:outline-none focus:shadow-outline"
      >
        <div className="flex items-center">
          <div>{conf}</div>
          <FontAwesomeIcon
            className={`${show ? "hidden" : "block"} mx-2`}
            icon={faAngleDown}
          />
          <FontAwesomeIcon
            className={`${show ? "block" : "hidden"} mx-2`}
            icon={faAngleUp}
          />
        </div>
      </button>
      {show && (
        <div>
          <div className="px-2 py-2 bg-gray-900 sm:bg-gray-500 sm:rounded-md shadow dark-mode:bg-gray-900">
            {teams.map((x) => {
              return (
                <Link
                  className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent sm:rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-400  focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  to={"/team/" + x}
                >
                  {x}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export const Navbar = () => {
  const [showacc, toggleAcc] = useState(false);
  const [showsec, toggleSec] = useState(false);
  const [showMobile, toggleMobile] = useState(false);
  return (
    <nav className="col-span-12 h-10 sm:h-screen sm:col-span-3 md:col-span-2 lg:col-span-1 md:block sm:px-4 sm:pb-4 md:pb-0 md:overflow-y-auto bg-gray-600 shadow-md">
      <div className="left-0 flex items-center sm:hidden">
        {/* <!-- Mobile menu button--> */}
        <button
          type="button"
          className="inline-flex items-center justify-center p-2 sm:rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          aria-controls="mobile-menu"
          aria-expanded="false"
          onClick={() => toggleMobile(!showMobile)}
        >
          {/* <!--
            Icon when menu is closed.

            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block"
          --> */}
          <svg
            className={`${showMobile ? "hidden" : "block"} h-6 w-6`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          {/* <!--
            Icon when menu is open.

            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          --> */}
          <svg
            className={`${showMobile ? "block" : "hidden"} h-6 w-6`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div
        className={`${
          showMobile ? "block" : "hidden"
        } rounded-b-sm sm:rounded-none bg-black sm:bg-gray-600 sm:block md:block`}
      >
        <a
          className="block px-4 py-2 sm:mt-2 text-sm font-semibold text-white sm:text-gray-900 sm:rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-400  focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          href="#"
        >
          Blog
        </a>
        <a
          className="block px-4 py-2 sm:mt-2 text-sm font-semibold text-white sm:text-gray-900 bg-transparent sm:rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-400  focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          href="#"
        >
          Portfolio
        </a>
        <a
          className="block px-4 py-2 sm:mt-2 text-sm font-semibold text-white sm:text-gray-900 bg-transparent sm:rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-400  focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          href="#"
        >
          About
        </a>
        <a
          className="block px-4 py-2 sm:mt-2 text-sm font-semibold text-white sm:text-gray-900 bg-transparent sm:rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-400  focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          href="#"
        >
          Contact
        </a>
        <ConferenceSection
          conf={"ACC"}
          teams={ACC}
          show={showacc}
          open={toggleAcc}
        />
        <ConferenceSection
          conf={"SEC"}
          teams={SEC}
          show={showsec}
          open={toggleSec}
        />
      </div>
    </nav>
  );
};
