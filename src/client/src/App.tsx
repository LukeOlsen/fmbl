import { useEffect } from "react";
import { useDispatch, connect } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Team } from "./components/Team";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Lines } from "./components/lines";
import { routesWithComponents } from "./types/components";

const routes: Array<routesWithComponents> = [
  {
    path: "/",
    component: <Home />,
    name: "Home",
  },
  // {
  //   path: "/about",
  //   component: 'About'
  // },
  {
    path: "/team/:teamName",
    component: <Team />,
    name: "Team",
  },
  // {
  //   path: '/conferences',
  //   component: 'Conferences'
  // }
  {
    path: "/bettinglines/:year",
    component: <Lines />,
    name: "Lines",
  },
];

const routeComponents = routes.map(({ path, component }, key) => (
  <Route path={path} element={component} key={key} />
));

function App({ cache }: any) {
  const dispatch = useDispatch();

  let done = false;

  if (cache) {
    done = true;
  }
  // const state: any = useSelector((state) => state);

  useEffect(() => {
    dispatch({ type: "LOAD_CACHE" });
  }, [done]);
  return (
    <Router>
      <div className=" min-h-screen bg-slate-100 text-grey-700 mx-h-screen overflow-auto">
        <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-center py-4">
            {/* <!-- Navigation Toggle --> */}
            <button
              type="button"
              className="text-gray-500 hover:text-gray-600"
              data-hs-overlay="#application-sidebar-dark"
              // aria-controls="application-sidebar-dark"
              aria-label="Toggle navigation"
            >
              <span className="sr-only">Toggle Navigation</span>
              <svg
                className="w-5 h-5"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </button>
            {/* <!-- End Navigation Toggle --> */}
          </div>
        </div>
        {/* <!-- End Sidebar Toggle --> */}
        <Navbar teams={cache.teams} />
        <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-72 overflow-y-auto xs:z-0">
          <Routes>{routeComponents}</Routes>
        </div>
      </div>
    </Router>
  );
}

const mapStateToProps = (state: any) => {
  return {
    cache: state.cache,
  };
};

export default connect(mapStateToProps)(App);
