import React from "react";
import { Link } from "react-router-dom";

const SEC: string[] = ["Florida", "Alabama"];
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
        className="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:block hover:text-gray-900 focus:text-gray-900 hover:bg-gray-400  focus:bg-gray-200 focus:outline-none focus:shadow-outline"
      >
        <span>{conf}</span>
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          className="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      {show && (
        <div>
          <div className="px-2 py-2 bg-gray-500 rounded-md shadow dark-mode:bg-gray-800">
            {teams.map((x) => {
              return (
                <Link
                  className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-400  focus:bg-gray-200 focus:outline-none focus:shadow-outline"
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
  const [showacc, toggleAcc] = React.useState(false);
  const [showsec, toggleSec] = React.useState(false);
  return (
    <nav className="md:grid-span-1 md:block px-4 pb-4 md:pb-0 md:overflow-y-auto bg-gray-600 shadow-md">
      <a
        className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-indigo-400 rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-400  focus:bg-gray-200 focus:outline-none focus:shadow-outline"
        href="#"
      >
        Blog
      </a>
      <a
        className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-400  focus:bg-gray-200 focus:outline-none focus:shadow-outline"
        href="#"
      >
        Portfolio
      </a>
      <a
        className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-400  focus:bg-gray-200 focus:outline-none focus:shadow-outline"
        href="#"
      >
        About
      </a>
      <a
        className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-400  focus:bg-gray-200 focus:outline-none focus:shadow-outline"
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
    </nav>
  );
};
