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
      <div className="grid-cols-12 grid flex-col md:grid-cols-9 min-h-screen w-full bg-gray-700 text-indigo-400 mx-h-screen overflow-auto">
        <Navbar teams={cache.teams} />
        <div className="col-span-12 sm:col-span-9 md:col-span-7 lg:col-span-8 overflow-y-auto xs:z-0">
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
