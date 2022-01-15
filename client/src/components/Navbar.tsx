import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { teamBlock } from "../types/teams";

const ConferenceSection = (props: {
  conf: string;
  teams: teamBlock[];
  show: boolean;
  open: Function;
}) => {
  const { conf, teams, show, open } = props;
  return (
    <div className="relative sticky">
      <button
        onClick={() => open(!show)}
        className="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left sm:rounded-lg  dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:block hover:text-gray-900 focus:text-gray-900 hover:bg-gray-400  focus:bg-gray-200 focus:outline-none focus:shadow-outline"
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
            {teams.map((x: teamBlock) => {
              return (
                <Link
                  className="block px-4 py-2 mt-2 text-sm font-semibold  sm:rounded-lg dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-400  focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  to={"/team/" + x.school}
                >
                  {x.school}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export const Navbar = ({ teams }: any) => {
  const [showacc, toggleAcc] = useState(false);
  const [showsec, toggleSec] = useState(false);
  const [showb12, toggleb12] = useState(false);
  const [showb10, toggleb10] = useState(false);
  const [showp12, togglep12] = useState(false);
  const [showMobile, toggleMobile] = useState(false);

  console.log(teams);

  const SEC: teamBlock[] = teams.filter(
    (x: teamBlock) => x.conference === "SEC"
  );
  const ACC: teamBlock[] = teams.filter(
    (x: teamBlock) => x.conference === "ACC"
  );
  const Big12: teamBlock[] = teams.filter(
    (x: teamBlock) => x.conference === "Big 12"
  );
  const Pac12: teamBlock[] = teams.filter(
    (x: teamBlock) => x.conference === "Pac-12"
  );
  const Big10: teamBlock[] = teams.filter(
    (x: teamBlock) => x.conference === "Big Ten"
  );
  return (
    <nav className="col-span-12 h-10 sm:h-screen sm:col-span-3 md:col-span-2 lg:col-span-1 md:block sm:px-4 sm:pb-4 md:pb-0 md:overflow-y-auto xs:bg-gray-600 shadow-md">
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
        } rounded-b-sm sm:rounded-none bg-gray-900 sm:block sm:bg-gray-700 relative z-50`}
      >
        <Link
          className="block px-4 py-2 sm:mt-2 text-sm font-semibold text-white sm:text-gray-900 sm:rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-400  focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          to="/"
        >
          Home
        </Link>
        <a
          className="block px-4 py-2 sm:mt-2 text-sm font-semibold text-white sm:text-gray-900 sm:rounded-lg dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-400  focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          href="#"
        >
          Portfolio
        </a>
        <a
          className="block px-4 py-2 sm:mt-2 text-sm font-semibold text-white sm:text-gray-900 sm:rounded-lg dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-400  focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          href="#"
        >
          About
        </a>
        <a
          className="block px-4 py-2 sm:mt-2 text-sm font-semibold text-white sm:text-gray-900 sm:rounded-lg dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-400  focus:bg-gray-200 focus:outline-none focus:shadow-outline"
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
        <ConferenceSection
          conf={"Big 12"}
          teams={Big12}
          show={showb12}
          open={toggleb12}
        />
        <ConferenceSection
          conf={"Big 10"}
          teams={Big10}
          show={showb10}
          open={toggleb10}
        />
        <ConferenceSection
          conf={"Pac 12"}
          teams={Pac12}
          show={showp12}
          open={togglep12}
        />
      </div>
    </nav>
  );
};
