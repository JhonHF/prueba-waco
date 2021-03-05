import React from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { PrivateRoute } from "../components/molecules/private-route/private-route";
import { routes } from "./routes-list";

export function AppRoutes() {
  return (
    <Router>
      <Switch>
        {routes.map(({ ...routeProps }) => {
          if (routeProps.hidden) {
            return null;
          }
          return <PrivateRoute exact key={routeProps.path} {...routeProps} />;
        })}
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}
