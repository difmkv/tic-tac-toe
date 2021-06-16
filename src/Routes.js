import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header, Footer } from "./components";
import { LandingPage, PlayPage, ResultsPage } from "./pages";

const routes = [
  {
    path: "/",
    Component: LandingPage,
    exact: true,
  },
  {
    path: "/play",
    Component: PlayPage,
  },
  {
    path: "/results",
    Component: ResultsPage,
  },
];

export const Routes = (
  <Router>
    <Header />
    <Switch>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} exact={route.exact}>
          <route.Component />
        </Route>
      ))}
    </Switch>
    <Footer />
  </Router>
);
