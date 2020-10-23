import React, { Suspense, lazy } from "react";
import history from "../utils/history";
import { Route, Switch, Router, Redirect } from "react-router-dom";
import { EuiLoadingChart } from "@elastic/eui";

//lazy dynamic import of components
const Homepage = lazy(() => import("../views/Homepage/Homepage"));
const Saved = lazy(() => import("../views/Saved/Saved"));
/* const PageNotFound = lazy(() => import("../views/PageNotFound/PageNotFound")); */

const RoutesProvider = () => (
  <Router history={history}>
    <Suspense fallback={<EuiLoadingChart size="m" />}>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/saved" component={Saved} />
        <Route path="*" redirect={() => <Redirect to="/" />} />
      </Switch>
    </Suspense>
  </Router>
);

export default RoutesProvider;
