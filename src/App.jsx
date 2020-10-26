import React, { Suspense, lazy } from "react";
import { Route, Router, Switch, Redirect } from "react-router-dom";
import { EuiLoadingChart } from "@elastic/eui";

// context
import { AuthProvider } from "./context/AuthContext/AuthContext";

// components
import PrivateRoute from "./routes/PrivateRoutes";

// utils
import history from "./utils/history";

// style
import "./App.css";
import "@elastic/eui/dist/eui_theme_light.css";

const Login = lazy(() => import("./views/Login/Login"));
const Signup = lazy(() => import("./views/Signup/Signup"));
const Homepage = lazy(() => import("./views/Homepage/Homepage"));
const Saved = lazy(() => import("./views/Saved/Saved"));

export default function App() {
  return (
    <AuthProvider>
      <Router history={history}>
        <Suspense fallback={<EuiLoadingChart size="m" />}>
          <Switch>
            <PrivateRoute
              exact
              path={process.env.PUBLIC_URL + "/"}
              component={Homepage}
            />
            <PrivateRoute
              exact
              path={process.env.PUBLIC_URL + "/saved"}
              component={Saved}
            />
            <Route
              exact
              path={process.env.PUBLIC_URL + "/login"}
              component={Login}
            />
            <Route
              exact
              path={process.env.PUBLIC_URL + "/signup"}
              component={Signup}
            />
            <Route
              path={process.env.PUBLIC_URL + "*"}
              component={() => <Redirect to="/" />}
            />
          </Switch>
        </Suspense>
      </Router>
    </AuthProvider>
  );
}
