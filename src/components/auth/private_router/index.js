import React from "react";
import { Route, Navigate } from "react-router-dom";

const privateRoute = ({ component: Component, ...rest }) => {
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem("user") ? (
        <Component {...props} />
      ) : (
        <Navigate to={{ pathname: "/login" }} />
      )
    }
  />;
};

export default privateRoute;
