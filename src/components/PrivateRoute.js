import React from "react";
import { Route } from "react-router-dom";

function PrivateRoute(props) {
  const { children, ...rest } = props;

  return (
    <Route
      {...rest}
      render={() => {
        if (localStorage.getItem("token")) {
          return children;
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
