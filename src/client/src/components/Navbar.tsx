import { useState } from "react";
import { Link } from "react-router-dom";
import { teamBlock } from "../types/teams";

const ConferenceSection = (props: {
  conf: string;
  teams: teamBlock[];
  show: boolean;
  open: Function;
}) => {
  const { conf, teams, show, open } = props;
  return (
    <li className="hs-accordion">
      <a
        // onClick={() => open(!show)}
        className="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-white hs-accordion-active:hover:bg-transparent text-sm text-gray-400 rounded-md hover:bg-gray-800 hover:text-white"
        href="javascript:;"
      >
        <div>{conf}</div>
        <svg
          className="hs-accordion-active:block ml-auto hidden w-3 h-3 text-gray-600 group-hover:text-gray-500"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          ></path>
        </svg>

        <svg
          className="hs-accordion-active:hidden ml-auto block w-3 h-3 text-gray-600 group-hover:text-gray-500"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          ></path>
        </svg>
      </a>
      <div className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden">
        <ul className="pt-2 pl-2">
          {teams.map((x: teamBlock) => {
            return (
              <li>
                <Link
                  className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded-md hover:bg-gray-800 hover:text-white"
                  to={"/team/" + x.school}
                >
                  {x.school}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </li>
  );
};

export const Navbar = ({ teams }: any) => {
  const [showacc, toggleAcc] = useState(false);
  const [showsec, toggleSec] = useState(false);
  const [showb12, toggleb12] = useState(false);
  const [showb10, toggleb10] = useState(false);
  const [showp12, togglep12] = useState(false);
  const [showMobile, toggleMobile] = useState(false);

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
    // <!-- Sidebar -->
    <div
      id="application-sidebar-dark"
      className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[60] w-64 bg-gray-900 border-r border-gray-800 pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0"
    >
      <div className="px-6">
        <a
          className="flex-none text-xl font-semibold text-white"
          href="#"
          aria-label="Brand"
        >
          FMBL
        </a>
      </div>
      <nav
        className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
        data-hs-accordion-always-open
      >
        <ul className="space-y-1.5">
          <li>
            <Link
              className="flex items-center gap-x-3 py-2 px-2.5 text-sm text-gray-400 rounded-md hover:bg-gray-800 hover:text-white"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-x-3 py-2 px-2.5 text-sm text-gray-400 rounded-md hover:bg-gray-800 hover:text-white"
              to="/"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-x-3 py-2 px-2.5 text-sm text-gray-400 rounded-md hover:bg-gray-800 hover:text-white"
              to="/"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-x-3 py-2 px-2.5 text-sm text-gray-400 rounded-md hover:bg-gray-800 hover:text-white"
              to="/"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-x-3 py-2 px-2.5 text-sm text-gray-400 rounded-md hover:bg-gray-800 hover:text-white"
              to="/bettingLines/2021"
            >
              Spread Calculator
            </Link>
          </li>
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
        </ul>
      </nav>
    </div>
  );
};
