import React, { Suspense, lazy } from "react";
import history from "../utils/history";
import { Route, Switch, Router } from "react-router-dom";
import { EuiLoadingChart } from "@elastic/eui";

//lazy dynamic import of components
const Homepage = lazy(() => import("../views/Homepage/Homepage"));
const City = lazy(() => import("../views/City/City"));
const Province = lazy(() => import("../views/Province/Province"));
const ProvinceList = lazy(() => import("../views/ProvinceList/ProvinceList"));
const PageNotFound = lazy(() => import("../views/PageNotFound/PageNotFound"));

const RoutesProvider = () => (
  <Router history={history}>
    <Suspense fallback={<EuiLoadingChart size="m" />}>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/city" component={City} />
        <Route exact path="/province" component={Province} />
        <Route exact path="/province-list" component={ProvinceList} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Suspense>
  </Router>
);

export default RoutesProvider;
