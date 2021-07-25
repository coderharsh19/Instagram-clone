import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ isFetching, component: Component, ...others }) => {
  const loggedUser = localStorage.getItem("user");
  const user = JSON.parse(loggedUser);

  return (
    <Route
      {...others}
      render={(props) => {
        if (user) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
