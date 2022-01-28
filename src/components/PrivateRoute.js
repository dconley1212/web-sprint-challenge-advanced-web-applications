import React from "react";
import { Route } from "react-router-dom";

function PrivateRoute(props) {
  const { component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={() => {
        if (localStorage("token")) {
          return <Component />;
        } else {
          <Redirect to="/" />;
        }
      }}
    />
  );
}

export default PrivateRoute;

//Task List:
//1. Complete PrivateRoute
