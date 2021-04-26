import React from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { Team } from "./components/Team";
import { Navbar } from "./components/Navbar";
import { routesWithComponents } from "./types/components";

const routes: Array<routesWithComponents> = [
  // {
  //   path: "/",
  //   component: 'Home'
  // },
  // {
  //   path: "/about",
  //   component: 'About'
  // },
  {
    path: "/team/:teamName",
    component: Team,
    name: "Team",
  },
  // {
  //   path: '/conferences',
  //   component: 'Conferences'
  // }
];

const routeComponents = routes.map(({ path, component }, key) => (
  <Route path={path} component={component} key={key} />
));

function App() {
  const dispatch = useDispatch();
  return (
    <Router>
      <div className="grid-cols-12 grid flex-col md:grid-cols-9 min-h-screen w-full bg-gray-700 text-indigo-400">
        <Navbar />
        <div className="col-span-12 sm:col-span-6 md:col-span-7 lg:col-span-8">
          {routeComponents}
        </div>
      </div>
    </Router>
  );
}

export default App;
